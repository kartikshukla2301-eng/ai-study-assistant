import { Palette } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import ThemePreview from "./ThemePreview";

export default function ThemeController() {
  const { themes, themeKey, setThemeKey, accent, setAccent } = useTheme();
  const accents = ["", "#2dd4bf", "#f97316", "#e879f9", "#22c55e", "#38bdf8", "#facc15"];

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2">
        <Palette size={18} />
        <h2 className="font-semibold">Theme Engine</h2>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {Object.entries(themes).map(([key, theme]) => (
          <ThemePreview key={key} theme={theme} active={themeKey === key} onClick={() => setThemeKey(key)} />
        ))}
      </div>
      <div>
        <p className="mb-2 text-sm text-[var(--muted)]">Accent color</p>
        <div className="flex flex-wrap gap-2">
          {accents.map((color) => (
            <button
              key={color || "default"}
              className={`h-9 w-9 rounded-full border ${accent === color ? "border-white" : "border-white/20"}`}
              style={{ background: color || "linear-gradient(135deg, #2dd4bf, #38bdf8)" }}
              onClick={() => setAccent(color)}
              aria-label={color ? `Use ${color}` : "Use theme default accent"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
