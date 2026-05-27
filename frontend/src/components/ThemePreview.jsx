export default function ThemePreview({ theme, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg border p-3 text-left transition ${active ? "border-[var(--accent)] shadow-glow" : "border-white/10 hover:border-white/25"}`}
      style={{ background: theme.background, color: theme.text }}
    >
      <div className="mb-3 flex gap-2">
        <span className="h-4 w-4 rounded-full" style={{ background: theme.accent }} />
        <span className="h-4 w-4 rounded-full" style={{ background: theme.bubbleUser }} />
        <span className="h-4 w-4 rounded-full" style={{ background: theme.bubbleAI }} />
      </div>
      <p className="font-semibold">{theme.name}</p>
      <p className="mt-1 text-xs opacity-70">Live theme preview</p>
    </button>
  );
}
