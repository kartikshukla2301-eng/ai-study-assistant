import { motion } from "framer-motion";
import { Save } from "lucide-react";
import { useEffect, useState } from "react";
import api from "../api/client";
import { useTheme } from "../context/ThemeContext";
import ThemeController from "./ThemeController";

export default function SettingsPanel() {
  const { fontScale, setFontScale, animations, setAnimations, themeKey, accent } = useTheme();
  const [style, setStyle] = useState("balanced");
  const [status, setStatus] = useState("");

  useEffect(() => {
    api.get("/settings").then(({ data }) => {
      if (data.settings?.aiResponseStyle) setStyle(data.settings.aiResponseStyle);
    });
  }, []);

  const save = async () => {
    await api.put("/settings", { theme: themeKey, accentColor: accent, fontScale, animations, aiResponseStyle: style });
    setStatus("Saved");
    setTimeout(() => setStatus(""), 1500);
  };

  return (
    <motion.div className="grid gap-5" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
      <ThemeController />
      <section className="glass space-y-5 rounded-lg p-5">
        <h2 className="font-semibold">Study Preferences</h2>
        <label className="block">
          <span className="text-sm text-[var(--muted)]">Font size</span>
          <input className="mt-3 w-full accent-[var(--accent)]" type="range" min="0.9" max="1.2" step="0.05" value={fontScale} onChange={(event) => setFontScale(Number(event.target.value))} />
        </label>
        <label className="flex items-center justify-between gap-3 rounded-md bg-black/20 p-3">
          <span>Animations</span>
          <input className="h-5 w-5 accent-[var(--accent)]" type="checkbox" checked={animations} onChange={(event) => setAnimations(event.target.checked)} />
        </label>
        <label className="block">
          <span className="text-sm text-[var(--muted)]">AI response style</span>
          <select className="mt-2 w-full rounded-md border border-white/10 bg-black/30 p-3 outline-none" value={style} onChange={(event) => setStyle(event.target.value)}>
            <option value="balanced">Balanced</option>
            <option value="exam">Exam oriented</option>
            <option value="concise">Concise revision</option>
            <option value="deep">Deep explanation</option>
            <option value="code">Code mentor</option>
          </select>
        </label>
        <button onClick={save} className="flex items-center justify-center gap-2 rounded-md bg-[var(--accent)] px-4 py-3 font-semibold text-black shadow-glow">
          <Save size={17} />
          {status || "Save settings"}
        </button>
      </section>
      <section className="glass rounded-lg p-5">
        <h2 className="mb-3 font-semibold">Live Preview</h2>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-lg bg-[var(--bubble-ai)] p-4">AI answer cards, notes, and code blocks use this surface.</div>
          <div className="rounded-lg bg-[var(--bubble-user)] p-4 text-white">Your messages and active controls use this color.</div>
        </div>
      </section>
    </motion.div>
  );
}
