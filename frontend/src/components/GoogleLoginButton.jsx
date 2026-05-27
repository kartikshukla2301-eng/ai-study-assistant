import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID || "";
const isConfigured = clientId && !clientId.startsWith("your-google");

export default function GoogleLoginButton() {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");

  if (!isConfigured) {
    return (
      <div className="rounded-md border border-amber-400/30 bg-amber-400/10 p-3 text-xs leading-5 text-amber-100">
        Google login is ready in code. Add `VITE_GOOGLE_CLIENT_ID` in `frontend/.env` and `GOOGLE_CLIENT_ID` in `backend/.env`.
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="overflow-hidden rounded-md bg-white p-1">
        <GoogleLogin
          theme="filled_black"
          size="large"
          width="100%"
          text="continue_with"
          onSuccess={async (response) => {
            try {
              setError("");
              await googleLogin(response.credential);
              navigate(location.state?.from?.pathname || "/dashboard", { replace: true });
            } catch (err) {
              setError(err.response?.data?.message || "Google login failed");
            }
          }}
          onError={() => setError("Google login failed")}
        />
      </div>
      {error && <p className="rounded-md bg-red-500/15 p-3 text-sm text-red-200">{error}</p>}
    </div>
  );
}
