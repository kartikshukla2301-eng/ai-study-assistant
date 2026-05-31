<div align="center">

<br/>

<img src="https://capsule-render.vercel.app/api?type=waving&color=6366f1,8b5cf6,a855f7&height=200&section=header&text=AI%20Study%20Assistant&fontSize=48&fontColor=ffffff&fontAlignY=38&desc=Your%20intelligent%20semester%20companion&descAlignY=58&descSize=18" width="100%"/>

<br/>

<!-- STATUS BADGES -->
![Status](https://img.shields.io/badge/Status-Production%20Ready-22c55e?style=for-the-badge&logo=statuspage&logoColor=white)
![PWA](https://img.shields.io/badge/PWA-Ready-6366f1?style=for-the-badge&logo=pwa&logoColor=white)
![Platform](https://img.shields.io/badge/Platform-Web%20%7C%20Mobile%20%7C%20PWA-f59e0b?style=for-the-badge&logo=googlechrome&logoColor=white)

<br/>

<!-- TECH STACK BADGES -->
[![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite_6-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS_3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)

<br/>

**A premium, full-stack AI study platform built for CS students.**  
Chat with an AI assistant · Generate exam answers · Upload PDFs · Plan your semester · Switch themes — all in one app.

<br/>

[🚀 Live Demo](#-live-demo) &nbsp;·&nbsp; [✨ Features](#-features) &nbsp;·&nbsp; [🖼 Screenshots](#-screenshots) &nbsp;·&nbsp; [🏗 Architecture](#-architecture) &nbsp;·&nbsp; [⚡ Quick Start](#-quick-start) &nbsp;·&nbsp; [📱 PWA](#-pwa--mobile)

<br/>

</div>

---

## 🎯 What Is This?

> Students waste hours context-switching between PDFs, notes, code editors, and chat apps. **AI Study Assistant** unifies all of it.

This is a **production-structured, SaaS-style study platform** — not a tutorial project. It features:

- 🧠 ChatGPT-style AI chat with persistent history
- 📝 Exam answer generation tuned for university scoring patterns
- 📄 PDF upload with text extraction, topic detection & summarization
- 🗓 Personal revision planner with day-wise deliverables
- 🎨 6 premium themes including AMOLED, Cyberpunk & Glassmorphism
- 📱 Installable as a PWA on Android & iOS
- 🔐 Full JWT auth with Google OAuth support

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🔐 Authentication & Security
- Register / Login / Logout
- JWT-based protected routes
- Passwords hashed with `bcrypt`
- Google OAuth login
- Persistent sessions via localStorage
- Protected frontend route guards

</td>
<td width="50%">

### 💬 AI Chat Interface
- ChatGPT-style layout with sidebar
- Multiple saved chat sessions
- Full Markdown rendering
- Syntax-highlighted code blocks
- One-click copy button
- Typing animation & smooth auto-scroll

</td>
</tr>
<tr>
<td width="50%">

### 📚 Study Mode (7 Modes)
- **7-Mark Generator** — structured university-style answers
- **Revision Notes** — compact topic summaries
- **Flowchart Breakdown** — visual-friendly content
- **Practice Questions** — active recall sets
- **Exam Kit** — rapid viva & written prep
- **Revision Planner** — day-wise plan from your schedule
- **Subject Presets** — DBMS · OS · CN · DSA

</td>
<td width="50%">

### 📄 PDF & OCR Intelligence
- Upload PDFs or text files
- Automatic text extraction
- AI-generated summaries
- Topic & formula extraction
- Image OCR via FastAPI
- Node.js fallback if Python offline

</td>
</tr>
<tr>
<td width="50%">

### 🎨 Premium Theme Engine
- WhatsApp · Instagram · Discord
- AMOLED · Cyberpunk · Glassmorphism
- Accent color picker
- Font size controls
- Animation toggle
- Saved to MongoDB + localStorage

</td>
<td width="50%">

### 📱 PWA & Mobile
- Installable on Android & iOS
- App-like transitions
- Offline fallback screen
- Splash screen
- Touch-friendly UI
- Responsive across all screen sizes

</td>
</tr>
</table>

---

## 🖼 Screenshots

### 🖥 Desktop

<table>
  <tr>
    <td align="center" width="50%">
      <img src="docs/screenshots/dashboard.png" alt="Dashboard" width="100%"/>
      <br/><sub><b>🏠 Dashboard — Main Control Center</b></sub>
    </td>
    <td align="center" width="50%">
      <img src="docs/screenshots/chat.png" alt="AI Chat" width="100%"/>
      <br/><sub><b>💬 AI Chat — ChatGPT-style Interface</b></sub>
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <img src="docs/screenshots/study-mode.png" alt="Study Mode" width="100%"/>
      <br/><sub><b>📚 Study Mode — 7-Mark & Exam Kit</b></sub>
    </td>
    <td align="center" width="50%">
      <img src="docs/screenshots/pdf-upload.png" alt="PDF Intelligence" width="100%"/>
      <br/><sub><b>📄 PDF Intelligence — Upload & Extract</b></sub>
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <img src="docs/screenshots/revision-planner.png" alt="Revision Planner" width="100%"/>
      <br/><sub><b>🗓 Revision Planner — Day-wise Study Plan</b></sub>
    </td>
    <td align="center" width="50%">
      <img src="docs/screenshots/themes.png" alt="Theme Engine" width="100%"/>
      <br/><sub><b>🎨 Theme Engine — 6 Premium Themes</b></sub>
    </td>
  </tr>
</table>

### 📱 Mobile

<table>
  <tr>
    <td align="center" width="33%">
      <img src="docs/screenshots/mobile-dashboard.png" alt="Mobile Dashboard" width="100%"/>
      <br/><sub><b>Dashboard</b></sub>
    </td>
    <td align="center" width="33%">
      <img src="docs/screenshots/mobile-chat.png" alt="Mobile Chat" width="100%"/>
      <br/><sub><b>AI Chat</b></sub>
    </td>
    <td align="center" width="33%">
      <img src="docs/screenshots/mobile-themes.png" alt="Mobile Themes" width="100%"/>
      <br/><sub><b>Themes</b></sub>
    </td>
  </tr>
</table>

---

## 🏗 Architecture

```
┌─────────────────────────────────────────────────────────┐
│                      CLIENT (Browser / PWA)             │
│                                                         │
│   React + Vite + TailwindCSS + Framer Motion           │
│   ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ │
│   │  Auth    │ │  Chat    │ │  Study   │ │  PDF     │ │
│   │  Pages   │ │  Pages   │ │  Mode    │ │  Upload  │ │
│   └──────────┘ └──────────┘ └──────────┘ └──────────┘ │
└────────────────────────┬────────────────────────────────┘
                         │ HTTP / REST (Axios)
                         ▼
┌─────────────────────────────────────────────────────────┐
│                  EXPRESS.JS BACKEND                     │
│                  Node.js + MongoDB                      │
│                                                         │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐  │
│  │  Auth    │ │  Chat    │ │  Notes   │ │  Upload  │  │
│  │  Routes  │ │  Routes  │ │  Routes  │ │  Routes  │  │
│  └────┬─────┘ └────┬─────┘ └────┬─────┘ └────┬─────┘  │
│       └────────────┴────────────┴─────────────┘        │
│                         │                               │
│              ┌──────────▼──────────┐                   │
│              │     MongoDB Atlas    │                   │
│              │  Users · Chats ·    │                   │
│              │  Messages · Notes   │                   │
│              └─────────────────────┘                   │
└────────────────────────┬────────────────────────────────┘
                         │ Internal HTTP (optional)
                         ▼
┌─────────────────────────────────────────────────────────┐
│              PYTHON FASTAPI SERVICE (optional)          │
│              PDF Processing · OCR · Image Analysis      │
│  pypdf · pytesseract · Pillow · uvicorn                 │
└─────────────────────────────────────────────────────────┘
```

---

## 🛠 Tech Stack

### Frontend
| Package | Purpose |
|---|---|
| React + Vite | UI framework & build tool |
| TailwindCSS | Utility-first styling |
| Framer Motion | Page transitions & animations |
| React Router DOM | Client-side routing & protected routes |
| Axios | HTTP client |
| React Markdown | Markdown rendering in chat |
| React Syntax Highlighter | Code block highlighting |
| Lucide React | Icon library |

### Backend
| Package | Purpose |
|---|---|
| Express.js | REST API server |
| MongoDB + Mongoose | Database & ODM |
| JWT | Stateless authentication |
| bcrypt | Password hashing |
| Multer | File upload handling |
| CORS | Cross-origin policy |

### Python Service *(optional)*
| Package | Purpose |
|---|---|
| FastAPI | High-performance Python API |
| pypdf | PDF text extraction |
| pytesseract | OCR for image text |
| Pillow | Image processing |
| uvicorn | ASGI server |

---

## 🗂 Project Structure

```
ai-study-assistant/
│
├── 📁 frontend/
│   └── src/
│       ├── api/              # Axios API calls
│       ├── components/       # Reusable UI components
│       ├── context/          # React Context (Auth, Theme)
│       ├── data/             # Subject presets & static data
│       ├── hooks/            # Custom React hooks
│       ├── pages/            # Route-level pages
│       ├── App.jsx           # Root component & routes
│       ├── main.jsx          # Entry point
│       └── index.css         # Global styles & CSS variables
│
├── 📁 backend/
│   ├── config/               # DB connection
│   ├── controllers/          # Route handlers
│   ├── middleware/           # Auth middleware (JWT verify)
│   ├── models/               # Mongoose schemas
│   ├── routes/               # Express route definitions
│   ├── services/             # Business logic
│   ├── uploads/              # Uploaded files (gitignored)
│   ├── server.js             # Express entry point
│   ├── .env                  # ← secrets (never commit)
│   └── .env.example          # Template for setup
│
├── 📁 python-service/
│   ├── utils/                # Helper functions
│   ├── app.py                # FastAPI entry point
│   ├── pdf_processor.py      # PDF extraction logic
│   ├── ocr.py                # OCR processing
│   ├── ai_utils.py           # AI helper functions
│   └── requirements.txt
│
├── 📄 DEMO_SCRIPT.md         # Presentation guide
├── 📄 VIVA_QUESTIONS.md      # Viva prep Q&A
└── 📄 README.md
```

---

## ⚡ Quick Start

### Prerequisites

| Requirement | Version | Notes |
|---|---|---|
| Node.js | v18+ | Required |
| MongoDB | Any | Local or Atlas |
| Python | 3.10+ | Optional (PDF/OCR) |
| Tesseract | Latest | Optional (image OCR) |

### Step 1 — Clone

```bash
git clone https://github.com/kartikshukla2301-eng/ai-study-assistant.git
cd ai-study-assistant
```

### Step 2 — Install All Dependencies

```bash
npm install
npm install --prefix frontend
npm install --prefix backend
```

### Step 3 — Configure Environment

```bash
cp backend/.env.example backend/.env
```

**`backend/.env`**

```env
# ── Database ──────────────────────────────────────
MONGO_URI=mongodb://127.0.0.1:27017/ai-study-assistant
# Atlas: mongodb+srv://USER:PASS@cluster0.xxxxx.mongodb.net/ai-study-assistant

# ── Auth ──────────────────────────────────────────
JWT_SECRET=your_super_secret_jwt_key_here

# ── Google OAuth (optional) ───────────────────────
GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com

# ── AI API (for future use) ───────────────────────
OPENAI_API_KEY=sk-...
```

**`frontend/.env`**

```env
VITE_GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
```

> ⚠️ `.env` files are gitignored — never commit them.

### Step 4 — Run

**Terminal 1 — Backend**
```bash
npm run dev --prefix backend
# Running on http://localhost:5000
```

**Terminal 2 — Frontend**
```bash
npm run dev --prefix frontend
# Running on http://localhost:5173
```

**Terminal 3 — Python Service** *(optional)*
```bash
cd python-service
python -m venv .venv
.venv\Scripts\activate        # Windows
# source .venv/bin/activate   # Mac/Linux
pip install -r requirements.txt
uvicorn app:app --reload --port 8000
```

### Step 5 — Open

```
http://localhost:5173
```

Register → explore the dashboard → try Study Mode with a DBMS topic 🎓

---

## 🌐 Deployment

<table>
<tr>
<th>Service</th>
<th>Platform</th>
<th>Notes</th>
</tr>
<tr>
<td>Frontend</td>
<td>

[![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com)

</td>
<td>Set <code>VITE_API_URL</code> to your Render backend URL</td>
</tr>
<tr>
<td>Backend</td>
<td>

[![Render](https://img.shields.io/badge/Render-46E3B7?style=flat-square&logo=render&logoColor=white)](https://render.com)

</td>
<td>Free tier — cold starts expected (~30s). App shows "Server waking up..." loader.</td>
</tr>
<tr>
<td>Database</td>
<td>

[![MongoDB Atlas](https://img.shields.io/badge/MongoDB_Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas)

</td>
<td>Free M0 cluster — update <code>MONGO_URI</code> in Render env vars</td>
</tr>
<tr>
<td>Python Service</td>
<td>

[![Render](https://img.shields.io/badge/Render-46E3B7?style=flat-square&logo=render&logoColor=white)](https://render.com)

</td>
<td>Deploy as a separate Render web service</td>
</tr>
</table>

> 💡 **Cold start UX:** The app displays a polished "Server waking up, please wait..." screen during Render's free-tier boot delay — users are never left staring at a blank screen.

---

## 📱 PWA & Mobile

AI Study Assistant is a **Progressive Web App** — install it directly on your phone for a native app experience.

**Install on Android:**
1. Open the app in Chrome
2. Tap the browser menu (⋮)
3. Tap **"Add to Home Screen"**
4. Done — it opens like a real app

**Install on iOS:**
1. Open in Safari
2. Tap the Share button (⬆)
3. Tap **"Add to Home Screen"**

**PWA Features:**
- ⚡ App-like launch from home screen
- 🔌 Offline fallback screen when network is lost
- 🌅 Custom splash screen
- 📲 Smooth page transitions

---

## ✅ Health Checks

| Service | Command / URL | Expected |
|---|---|---|
| Frontend build | `npm run build --prefix frontend` | No errors |
| Backend | `http://localhost:5000/api/health` | `{ status: "ok" }` |
| Python service | `http://localhost:8000/health` | `{ status: "ok" }` |

---

## 🌟 What I Built (Beyond the Base)

These features were **entirely designed and implemented by me** — not from any tutorial:

| Feature | Description |
|---|---|
| 📘 Subject Presets | One-click DBMS / OS / CN / DSA context loading for Study Mode |
| 🗓 Revision Planner | Generates a full day-wise plan from days available + hours/day + CGPA target |
| 🧪 Exam Kit Mode | Viva-ready + written exam summary format, tuned for university patterns |
| 🎨 Premium Theme Engine | 6 distinct themes, live-previewed, persisted across sessions |
| 📐 Semester-focused UX | Entire study workflow designed around internal exams & revision cycles |
| 🌅 Loading Experience | Skeleton loaders, shimmer cards, server wake-up screen for cold starts |
| 📱 Mobile PWA Polish | Installable app with offline screen, splash, and touch-optimized layout |

---

## 🔮 Roadmap

- [x] JWT authentication
- [x] Google OAuth
- [x] AI chat with saved history
- [x] Study Mode
- [x] PDF Intelligence
- [x] OCR support
- [x] Premium theme engine
- [x] Mobile responsive design
- [x] PWA support
- [x] Production deployment

### Upcoming

- [ ] OpenAI / Gemini API integration
- [ ] Real-time streaming responses
- [ ] Calendar-based revision reminders
- [ ] PDF page-level question answering
- [ ] Admin analytics dashboard
- [ ] CI/CD pipeline with GitHub Actions

---

## 🚀 Live Demo

### 🌐 Production Deployment

**Frontend:**
https://ai-study-assistant-eight-psi.vercel.app

**Backend:**
https://ai-study-assistant-8gsg.onrender.com
The application is fully deployed and publicly accessible online.

---

## 🎯 Why This Project?

AI Study Assistant was built to solve a common student problem:

Students constantly switch between notes, PDFs, AI tools, coding platforms, planners, and revision resources.

This platform combines all major study workflows into a single modern application:

- AI-powered study assistance
- University-focused exam preparation
- Revision planning
- PDF analysis and OCR
- Coding help and debugging
- Personalized learning workflows
- Cross-device productivity through PWA support

The goal is to help students study smarter, stay organized, and reduce context switching during semester preparation.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=6366f1,8b5cf6,a855f7&height=100&section=footer" width="100%"/>

<sub>Built with ❤️ for students who want to study smarter — not harder.</sub>

</div>