# Deployment Guide

This guide explains how to publish AI Study Assistant for external users.

## Recommended Hosting Setup

- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas
- Optional Python service: Render
- Payments: Razorpay Subscriptions for India, Stripe Checkout/Billing for international users

## Step 1: Prepare MongoDB Atlas

1. Open MongoDB Atlas.
2. Open your project and cluster.
3. Go to Network Access.
4. For MVP deployment, you can temporarily allow:

```text
0.0.0.0/0
```

5. Go to Database Access.
6. Create a database user with read/write permissions.
7. Copy your Atlas connection string.

Use this format:

```env
MONGO_URI=mongodb+srv://USERNAME:PASSWORD@cluster0.xxxxx.mongodb.net/ai-study-assistant?retryWrites=true&w=majority&appName=Cluster0
```

## Step 2: Push Code To GitHub

Create a GitHub repository and push this project.

```powershell
git init
git add .
git commit -m "Initial AI Study Assistant deployment"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

Do not commit real `.env` secrets. Add production variables in hosting dashboards.

## Step 3: Deploy Backend On Render

1. Open Render.
2. Click New.
3. Select Web Service.
4. Connect your GitHub repository.
5. Use these settings:

```text
Root Directory: backend
Runtime: Node
Build Command: npm install
Start Command: npm start
```

6. Add environment variables:

```env
PORT=10000
MONGO_URI=your-atlas-uri
JWT_SECRET=use-a-long-random-production-secret
JWT_EXPIRES_IN=7d
CLIENT_URL=https://your-frontend-domain.vercel.app
PYTHON_SERVICE_URL=https://your-python-service.onrender.com
GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
```

If you are not deploying Python service yet, keep:

```env
PYTHON_SERVICE_URL=http://localhost:8000
```

The backend health URL will be:

```text
https://your-backend-name.onrender.com/api/health
```

## Step 4: Deploy Frontend On Vercel

1. Open Vercel.
2. Import your GitHub repository.
3. Select the frontend folder as the root directory.
4. Use these settings:

```text
Root Directory: frontend
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
```

5. Add environment variables:

```env
VITE_API_URL=https://your-backend-name.onrender.com/api
VITE_GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
```

6. Deploy.

## Step 5: Update Google Login

In Google Cloud Console, open your OAuth Web Client.

Add authorized JavaScript origins:

```text
http://localhost:5173
https://your-frontend-domain.vercel.app
```

Use the same Client ID in frontend and backend environment variables.

## Step 6: Final Production Checks

1. Open frontend public URL.
2. Register using email/password.
3. Login using Google.
4. Create a chat.
5. Generate Study Mode content.
6. Check MongoDB Atlas collections.
7. Switch theme.
8. Test on phone.

## Step 7: Custom Domain

Add the domain to Vercel for frontend.

For backend, keep Render URL or set an API subdomain:

```text
api.yourdomain.com
```

Then update:

Frontend:

```env
VITE_API_URL=https://api.yourdomain.com/api
```

Backend:

```env
CLIENT_URL=https://yourdomain.com
```

Google OAuth:

```text
https://yourdomain.com
```

## Production Notes

- Use a strong `JWT_SECRET`.
- Keep API keys only in backend environment variables.
- Add rate limits before marketing publicly.
- Add payment verification before unlocking premium features.
- Add privacy policy and terms pages before collecting real users.
