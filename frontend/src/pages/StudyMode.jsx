import { BookMarked, CalendarDays, ClipboardList, FileQuestion, GraduationCap, ListChecks, Timer, Workflow } from "lucide-react";
import { useState } from "react";
import api from "../api/client";
import AppLayout from "../components/AppLayout";
import FileUpload from "../components/FileUpload";
import MarkdownRenderer from "../components/MarkdownRenderer";

const subjectPresets = [
  {
    subject: "DBMS",
    prompt: "DBMS: normalization, ER model, SQL joins, transactions, ACID properties, indexing, and concurrency control"
  },
  {
    subject: "Operating Systems",
    prompt: "Operating Systems: process scheduling, deadlock, memory management, paging, segmentation, and file systems"
  },
  {
    subject: "Computer Networks",
    prompt: "Computer Networks: OSI model, TCP/IP, routing, congestion control, DNS, HTTP, and subnetting"
  },
  {
    subject: "DSA",
    prompt: "Data Structures and Algorithms: arrays, linked lists, stacks, queues, trees, graphs, sorting, searching, and complexity"
  }
];

export default function StudyMode() {
  const [topic, setTopic] = useState("");
  const [mode, setMode] = useState("seven-mark");
  const [subject, setSubject] = useState("DBMS");
  const [days, setDays] = useState(7);
  const [hours, setHours] = useState(2);
  const [target, setTarget] = useState("score 8+ CGPA and revise before internal exams");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    try {
      const { data } = await api.post("/study/generate", { topic, mode, options: { subject, days, hours, target } });
      setResult(data.content);
    } finally {
      setLoading(false);
    }
  };

  const applyPreset = (preset) => {
    setSubject(preset.subject);
    setTopic(preset.prompt);
  };

  return (
    <AppLayout title="Study Mode" subtitle="Personal exam kit with presets, planner, notes, questions, and flowchart-ready breakdowns">
        <div className="scrollbar-thin grid h-full gap-5 overflow-y-auto p-4 lg:grid-cols-[380px_1fr] lg:p-6">
          <section className="space-y-4">
            <div className="glass rounded-lg p-5">
              <div className="flex items-center gap-2">
                <GraduationCap size={18} className="text-[var(--accent)]" />
                <h2 className="font-semibold">My Subject Presets</h2>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {subjectPresets.map((preset) => (
                  <button key={preset.subject} onClick={() => applyPreset(preset)} className={`rounded-md px-3 py-2 text-sm ${subject === preset.subject ? "bg-[var(--accent)] text-black" : "bg-[var(--hover)]"}`}>
                    {preset.subject}
                  </button>
                ))}
              </div>
            </div>
            <div className="glass rounded-lg p-5">
              <h2 className="font-semibold">Generator</h2>
              <textarea className="mt-4 min-h-32 w-full rounded-md border border-white/10 bg-black/25 p-3 outline-none focus:border-[var(--accent)]" placeholder="Enter a topic, chapter, formula, or question..." value={topic} onChange={(event) => setTopic(event.target.value)} />
              <div className="mt-3 grid grid-cols-2 gap-2">
                {[
                  ["seven-mark", BookMarked, "7-mark"],
                  ["revision", ListChecks, "Revision"],
                  ["flowchart", Workflow, "Flowchart"],
                  ["questions", FileQuestion, "Questions"],
                  ["planner", CalendarDays, "Planner"],
                  ["exam-kit", ClipboardList, "Exam Kit"]
                ].map(([value, Icon, label]) => (
                  <button key={value} onClick={() => setMode(value)} className={`flex items-center justify-center gap-2 rounded-md p-3 text-sm ${mode === value ? "bg-[var(--accent)] text-black" : "bg-[var(--hover)]"}`}>
                    <Icon size={16} />
                    {label}
                  </button>
                ))}
              </div>
              {mode === "planner" && (
                <div className="mt-4 space-y-3 rounded-lg bg-black/20 p-3">
                  <label className="block">
                    <span className="text-xs text-[var(--muted)]">Exam target</span>
                    <input className="mt-1 w-full rounded-md border border-white/10 bg-black/30 p-2 outline-none focus:border-[var(--accent)]" value={target} onChange={(event) => setTarget(event.target.value)} />
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="block">
                      <span className="flex items-center gap-1 text-xs text-[var(--muted)]">
                        <CalendarDays size={13} /> Days
                      </span>
                      <input className="mt-1 w-full rounded-md border border-white/10 bg-black/30 p-2 outline-none focus:border-[var(--accent)]" type="number" min="3" max="21" value={days} onChange={(event) => setDays(event.target.value)} />
                    </label>
                    <label className="block">
                      <span className="flex items-center gap-1 text-xs text-[var(--muted)]">
                        <Timer size={13} /> Hours/day
                      </span>
                      <input className="mt-1 w-full rounded-md border border-white/10 bg-black/30 p-2 outline-none focus:border-[var(--accent)]" type="number" min="1" max="8" value={hours} onChange={(event) => setHours(event.target.value)} />
                    </label>
                  </div>
                </div>
              )}
              <button onClick={generate} disabled={loading} className="mt-4 w-full rounded-md bg-[var(--accent)] p-3 font-semibold text-black shadow-glow disabled:opacity-60">
                {loading ? "Generating" : "Generate"}
              </button>
            </div>
            <FileUpload onResult={(data) => setResult(`## File Analysis\n\n${data.summary}\n\n### Extracted Text\n\n${data.text}`)} />
          </section>
          <section className="glass min-h-[60vh] rounded-lg p-5">
            {result ? <MarkdownRenderer content={result} /> : <p className="text-[var(--muted)]">Your generated study material will appear here.</p>}
          </section>
        </div>
    </AppLayout>
  );
}
