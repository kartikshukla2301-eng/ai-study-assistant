import { BookOpen, Clock, FileText, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();
  const cards = [
    { icon: BookOpen, title: "Open AI Chat", copy: "Ask, summarize, debug, and plan.", to: "/chat" },
    { icon: Sparkles, title: "Study Mode", copy: "Generate exam answers and revision notes.", to: "/study" },
    { icon: FileText, title: "PDF Intelligence", copy: "Upload files and ask document questions.", to: "/study" },
    { icon: Clock, title: "Revision System", copy: "Break topics into focused sessions.", to: "/study" }
  ];

  return (
    <AppLayout title={`Good to see you, ${user?.name?.split(" ")[0] || "student"}`} subtitle="Your focused study command center">
        <div className="scrollbar-thin h-full overflow-y-auto p-4 md:p-6">
          <section className="mb-6 rounded-lg border border-white/10 bg-gradient-to-br from-white/12 to-white/5 p-6">
            <h1 className="text-2xl font-bold md:text-3xl">Build momentum today</h1>
            <p className="mt-2 max-w-2xl text-[var(--muted)]">Start with a topic, upload notes, or ask for an exam-format answer. The assistant keeps chats and preferences attached to your account.</p>
          </section>
          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {cards.map(({ icon: Icon, title, copy, to }) => (
              <Link key={title} to={to} className="glass rounded-lg p-5 transition hover:-translate-y-1 hover:shadow-glow">
                <Icon className="text-[var(--accent)]" />
                <h2 className="mt-4 font-semibold">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{copy}</p>
              </Link>
            ))}
          </section>
        </div>
    </AppLayout>
  );
}
