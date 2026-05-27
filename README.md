# AI Study Assistant

AI Study Assistant is a full-stack study productivity platform built for students who want one workspace for chat, revision, PDF notes, OCR, coding help, exam answers, and personal study planning.

The project is designed like a modern SaaS application: React frontend, Express backend, MongoDB database, JWT authentication, and an optional FastAPI service for PDF/OCR processing.

## Why I Built This

Students usually keep their study material scattered across PDFs, screenshots, handwritten notes, code files, and chat apps. This project brings those workflows into one assistant:

- Ask study questions in a ChatGPT-style interface.
- Generate 7-mark exam answers.
- Upload PDFs and notes for extraction.
- Create revision notes, flowcharts, practice questions, and exam kits.
- Use subject presets for DBMS, OS, CN, and DSA.
- Build a personal revision planner based on available days and hours.
- Save chat history and settings after login.

## Tech Stack

### Frontend
- React
- Vite
- JavaScript
- TailwindCSS
- Framer Motion
- React Router DOM
- Axios
- React Markdown
- React Syntax Highlighter
- Lucide React

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Multer

### Python Service
- FastAPI
- pypdf
- Pillow
- pytesseract

## Main Features

### Authentication
- Register
- Login
- Logout
- JWT-based protected routes
- Password hashing with bcrypt
- Persistent frontend session

### AI Chat
- ChatGPT-style layout
- Multiple saved chats
- Markdown rendering
- Syntax highlighted code blocks
- Copy code button
- Typing animation
- Auto-scroll

### Study Mode
- 7-mark answer generator
- Revision notes
- Flowchart-ready breakdown
- Practice questions
- Exam Kit mode
- Personal Revision Planner
- Subject presets for DBMS, OS, CN, and DSA

### PDF and OCR
- PDF upload
- Text extraction
- Summary generation
- Topic extraction
- Formula extraction
- Image OCR support through the Python service

### Theme Engine
- WhatsApp Theme
- Instagram Theme
- Discord Theme
- AMOLED Theme
- Cyberpunk Theme
- Glassmorphism Theme
- Accent color customization
- Font size controls
- Animation toggle
- Settings persistence

## Folder Structure

```text
ai-study-assistant/
  frontend/
    src/
      api/
      components/
      context/
      data/
      hooks/
      pages/
      App.jsx
      main.jsx
      index.css
    scripts/
    package.json
  backend/
    config/
    controllers/
    middleware/
    models/
    routes/
    services/
    uploads/
    server.js
    .env
    .env.example
    package.json
  python-service/
    utils/
    app.py
    pdf_processor.py
    ocr.py
    ai_utils.py
    requirements.txt
  DEMO_SCRIPT.md
  VIVA_QUESTIONS.md
  package.json
  README.md
```

## Environment Variables

Backend environment file:

```text
backend/.env
```

Local MongoDB:

```env
MONGO_URI=mongodb://127.0.0.1:27017/ai-study-assistant
```

MongoDB Atlas example:

```env
MONGO_URI=mongodb+srv://USERNAME:PASSWORD@cluster0.xxxxx.mongodb.net/ai-study-assistant
```

Optional AI API key can be added here later:

```env
OPENAI_API_KEY=your_api_key_here
```

API keys should stay in `backend/.env`, never in frontend files.

### Google Login Setup

Create a Google OAuth Client ID from Google Cloud Console:

1. Go to Google Cloud Console.
2. Create or select a project.
3. Open APIs & Services.
4. Open Credentials.
5. Create OAuth Client ID.
6. Select Web application.
7. Add authorized JavaScript origins:

```text
http://localhost:5173
```

8. Copy the Client ID.

Add the same Client ID in both files:

Backend:

```text
backend/.env
```

```env
GOOGLE_CLIENT_ID=your-google-oauth-client-id.apps.googleusercontent.com
```

Frontend:

```text
frontend/.env
```

```env
VITE_GOOGLE_CLIENT_ID=your-google-oauth-client-id.apps.googleusercontent.com
```

Restart backend and frontend after changing these values.

## Launch Steps

Install dependencies:

```powershell
npm.cmd install
npm.cmd install --prefix frontend
npm.cmd install --prefix backend
```

Start MongoDB locally or use MongoDB Atlas.

Start backend:

```powershell
npm.cmd run dev --prefix backend
```

Start frontend:

```powershell
npm.cmd run dev --prefix frontend
```

Open:

```text
http://localhost:5173
```

Optional Python service:

```powershell
cd python-service
py -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app:app --reload --port 8000
```

## Verification

Frontend build:

```powershell
npm.cmd run build --prefix frontend
```

Backend health:

```text
http://localhost:5000/api/health
```

Python health:

```text
http://localhost:8000/health
```

## My Custom Additions

I customized the app with:

- Subject presets for common computer science subjects.
- Personal Revision Planner with days, hours, and exam goal.
- Exam Kit mode for quick viva and written exam preparation.
- Premium theme selector with live preview.
- Study workflow designed around internal exams and semester revision.

## Future Scope

- OpenAI API integration for advanced AI responses.
- Real-time streaming responses.
- Calendar-based revision reminders.
- PDF page-level question answering.
- Admin dashboard for analytics.
- Deployment on Vercel, Render, and MongoDB Atlas.
