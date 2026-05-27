import { Menu, MoonStar, Settings, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Topbar({ title, subtitle, onMenu }) {
  const { theme } = useTheme();
  return (
    <header className="flex min-h-16 items-center justify-between gap-3 border-b border-white/10 px-4 py-3 md:px-6">
      <div className="flex min-w-0 items-center gap-3">
        <button className="rounded-md p-2 hover:bg-[var(--hover)] lg:hidden" onClick={onMenu} aria-label="Open navigation">
          <Menu size={19} />
        </button>
        <div className="min-w-0">
          <h1 className="truncate text-base font-semibold md:text-lg">{title}</h1>
          {subtitle && <p className="truncate text-xs text-[var(--muted)] md:text-sm">{subtitle}</p>}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="hidden items-center gap-2 rounded-md bg-[var(--hover)] px-3 py-2 text-xs text-[var(--muted)] sm:flex">
          <MoonStar size={15} />
          {theme.name}
        </div>
        <Link to="/study" className="rounded-md p-2 hover:bg-[var(--hover)]" aria-label="Study mode">
          <Sparkles size={19} />
        </Link>
        <Link to="/settings" className="rounded-md p-2 hover:bg-[var(--hover)]" aria-label="Settings">
          <Settings size={19} />
        </Link>
      </div>
    </header>
  );
}
