import { ArrowRight, BookOpen, Brain, FileText } from "lucide-react";
import { Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) return <Navigate to="/dashboard" replace />;

  return (
    <main className="min-h-screen overflow-y-auto p-4 text-[var(--text)]">
      <section className="mx-auto grid min-h-[calc(100vh-2rem)] max-w-6xl content-center gap-8 py-8">
        <motion.div className="max-w-3xl" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
          <div className="mb-5 inline-flex items-center gap-2 rounded-md bg-[var(--hover)] px-3 py-2 text-sm text-[var(--muted)]">
            <Brain size={16} />
            AI Study Assistant
          </div>
          <h1 className="text-4xl font-black leading-tight md:text-6xl">AI Study Assistant</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
            A desktop-grade study workspace for chat, notes, PDFs, OCR, coding help, revision, and exam-ready answers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/register" className="flex items-center gap-2 rounded-md bg-[var(--accent)] px-5 py-3 font-semibold text-black shadow-glow">
              Create account <ArrowRight size={18} />
            </Link>
            <Link to="/login" className="rounded-md border border-white/15 px-5 py-3 font-semibold hover:bg-[var(--hover)]">
              Login
            </Link>
          </div>
        </motion.div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: BookOpen, title: "ChatGPT-style study chat", copy: "Multiple chats, markdown, code blocks, and saved history." },
            { icon: FileText, title: "PDF and image intelligence", copy: "Upload documents or screenshots for extraction and summaries." },
            { icon: Brain, title: "Exam mode", copy: "7-mark answers, revision notes, topic maps, and formula lists." }
          ].map(({ icon: Icon, title, copy }) => (
            <div key={title} className="glass rounded-lg p-5">
              <Icon className="text-[var(--accent)]" />
              <h2 className="mt-4 font-semibold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{copy}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
