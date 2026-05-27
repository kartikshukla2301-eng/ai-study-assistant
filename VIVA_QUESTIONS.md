# AI Study Assistant Viva Questions

## Basic Questions

### 1. What is your project?

AI Study Assistant is a full-stack web application that helps students with AI-style chat, exam answers, PDF notes, OCR, revision planning, coding help, and theme customization.

### 2. Which technologies did you use?

Frontend uses React, Vite, TailwindCSS, Framer Motion, Axios, React Router DOM, React Markdown, and Lucide React.

Backend uses Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt, Multer, and dotenv.

Python service uses FastAPI, pypdf, Pillow, and pytesseract.

### 3. Why did you choose React?

React makes it easy to build reusable components like Sidebar, ChatArea, MessageBubble, InputBar, SettingsPanel, and ThemeController. It also works well with state management and routing.

### 4. Why did you use MongoDB?

MongoDB is flexible for storing users, chats, messages, notes, and settings. The data structure can evolve easily as new features are added.

### 5. What is JWT?

JWT means JSON Web Token. It is used to verify logged-in users. After login, the backend sends a token to the frontend. The frontend sends this token with protected API requests.

## Authentication Questions

### 6. How is password security handled?

Passwords are hashed using bcrypt before storing them in MongoDB. The original password is never stored directly.

### 7. How are routes protected?

Backend routes use auth middleware that checks the JWT token. Frontend routes use a ProtectedRoute component that redirects unauthenticated users to login.

### 8. Where is the JWT secret stored?

It is stored in `backend/.env` as `JWT_SECRET`.

## Backend Questions

### 9. Explain your backend architecture.

The backend is divided into routes, controllers, models, middleware, services, config, and uploads. Routes define endpoints, controllers handle request logic, models define MongoDB schemas, middleware handles authentication and errors, and services contain reusable business logic.

### 10. What models did you create?

I created User, Chat, Message, Notes, and Settings models.

### 11. How does chat history work?

Each chat belongs to a user. Messages are stored separately with role values like user and assistant. When a user opens a chat, messages are fetched from MongoDB in chronological order.

### 12. How does file upload work?

Multer receives uploaded files and stores them in the uploads folder. Then the backend analyzes the file using either the Python service or a Node fallback.

## Frontend Questions

### 13. What is the role of Context API?

Context API is used for authentication state and theme state. It avoids passing user and theme data manually through many components.

### 14. How does the theme system work?

Themes are defined as color objects. React context applies selected theme values as CSS variables. Components use these CSS variables, so the UI changes instantly.

### 15. How is markdown rendered?

React Markdown renders markdown responses, and React Syntax Highlighter renders code blocks with syntax colors and copy functionality.

## Study Feature Questions

### 16. What custom feature did you add?

I added subject presets for DBMS, OS, CN, and DSA. I also added Personal Revision Planner and Exam Kit modes to make the project more useful for semester exams.

### 17. What does the revision planner do?

It takes the subject, topic, number of days, daily study hours, and target. Then it generates a day-wise study plan with deliverables.

### 18. What is Exam Kit mode?

Exam Kit mode creates a quick exam-ready structure containing definition template, 7-mark skeleton, keywords, flowchart cue, and oral practice points.

## Python Service Questions

### 19. Why did you add a Python service?

Python has strong libraries for PDF and OCR processing. FastAPI keeps this functionality separate from the Node backend and makes the architecture more scalable.

### 20. What happens if Python service is not running?

The backend still works. It uses a Node fallback for PDF and text extraction. Image OCR needs the Python service for better results.

## API Key Questions

### 21. Where will you add an AI API key?

I will add it in `backend/.env`, for example:

```env
OPENAI_API_KEY=your_api_key_here
```

API keys should not be placed in frontend code.

### 22. Does the current project require an API key?

No. The current project has a local response generator so it can run without paid API keys. A real AI API can be integrated later in the backend service layer.

## Advanced Questions

### 23. How can this project be deployed?

Frontend can be deployed on Vercel or Netlify. Backend can be deployed on Render or Railway. MongoDB Atlas can be used as the cloud database. Python service can be deployed separately.

### 24. What are future improvements?

Future improvements include real AI API integration, streaming responses, calendar reminders, PDF page-level Q&A, admin dashboard, and deployment.

### 25. Did you use AI tools while building?

Yes, AI tools helped with scaffolding and development speed, but I customized the project, understood the architecture, tested the setup, and added my own study-specific features like subject presets, revision planner, and exam kit.
