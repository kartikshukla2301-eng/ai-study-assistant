# AI Study Assistant Demo Script

Use this script during project presentation or viva.

## 1. Opening

Good morning. My project is called AI Study Assistant. It is a full-stack study platform for students where they can chat with an assistant, generate exam answers, upload PDFs, create revision notes, and manage themes and personal settings.

The platform is fully deployed online using Vercel, Render, and MongoDB Atlas with installable PWA support for mobile devices.

The project is built using React, Vite, TailwindCSS, Express.js, MongoDB, JWT authentication, and an optional FastAPI service for PDF and OCR processing.

## 2. Authentication Demo

Steps:

1. Open `https://ai-study-assistant-eight-psi.vercel.app`.
2. Click Register.
3. Create a new account.
4. Show that the dashboard opens only after login.
5. Logout and login again.

Explanation:

The authentication system uses JWT. Passwords are hashed using bcrypt before storing them in MongoDB. Protected routes are used on the frontend so dashboard, chat, study mode, settings, and profile pages are available only after login.

## 3. Dashboard Demo

Show the dashboard cards:

- Open AI Chat
- Study Mode
- PDF Intelligence
- Revision System

Explanation:

The dashboard acts like the main control center. It gives quick access to all major study workflows.

## 4. Chat Demo

Prompt to type:

```text
Give me a 7-mark answer on normalization in DBMS.
```

Show:

- User message bubble
- Assistant response
- Markdown formatting
- Chat history in sidebar

Explanation:

The chat system stores chats and messages in MongoDB. The backend generates structured responses and saves both user and assistant messages.

## 5. Coding Assistant Demo

Prompt to type:

```text
Explain this JavaScript code:
function sum(a, b) {
  return a + b;
}
```

Show:

- Code block formatting
- Syntax highlighting
- Copy code button

Explanation:

React Markdown and React Syntax Highlighter are used to render formatted content and code blocks.

## 6. Study Mode Demo

Go to Study Mode and select a preset:

- DBMS
- Operating Systems
- Computer Networks
- DSA

Then try:

- 7-mark
- Revision
- Flowchart
- Questions
- Planner
- Exam Kit

Explanation:

This is my customized part of the project. I added subject presets, a revision planner, and an exam kit so the platform feels useful for actual semester preparation.

## 7. Revision Planner Demo

Select Planner mode.

Set:

```text
Days: 7
Hours/day: 2
Target: score 8+ CGPA and revise before internal exams
```

Explanation:

The planner creates a day-wise study plan with deliverables like short notes, active recall, and question practice.

## 8. File Upload Demo

Upload a text file or PDF.

Show:

- Summary
- Extracted text
- Topics
- Notes saved in backend

Explanation:

The backend uses Multer for uploads. PDF and OCR analysis can be handled by the FastAPI service. If the Python service is not running, the Node backend still has a fallback for PDF and text files.

## 9. Theme Demo

Go to Settings.

Switch themes:

- Discord
- AMOLED
- Cyberpunk
- Glassmorphism

Change accent color and font size.

Explanation:

The theme engine uses CSS variables and React context. Theme preferences are stored in localStorage and can also be saved to MongoDB through the settings API.

## 10. PWA / Mobile App Demo

Open the deployed website on a mobile browser.

Show:

- Add to Home Screen
- Installable app icon
- Standalone mobile experience

Explanation:

The frontend is configured as a Progressive Web App (PWA) using vite-plugin-pwa. Users can install the platform directly on mobile devices without downloading from an app store.

## 11. Closing

This project helped me understand full-stack development, authentication, MongoDB architecture, protected frontend routes, API integration, deployment workflows, responsive UI systems, and Progressive Web App development. The platform is deployed online and designed to scale into a complete AI-powered study ecosystem.
