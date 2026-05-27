import { OAuth2Client } from "google-auth-library";

let client;

export async function verifyGoogleCredential(credential) {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  if (!clientId) {
    throw new Error("Google login is not configured. Add GOOGLE_CLIENT_ID in backend/.env");
  }

  client = client || new OAuth2Client(clientId);
  const ticket = await client.verifyIdToken({
    idToken: credential,
    audience: clientId
  });
  const payload = ticket.getPayload();

  if (!payload?.email || !payload.email_verified) {
    throw new Error("Google account email could not be verified");
  }

  return {
    googleId: payload.sub,
    email: payload.email,
    name: payload.name || payload.email.split("@")[0],
    avatar: payload.picture || ""
  };
}
