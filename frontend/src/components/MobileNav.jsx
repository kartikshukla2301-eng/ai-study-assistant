import { BookOpen, Home, Settings, Sparkles, UserRound } from "lucide-react";
import { NavLink } from "react-router-dom";

const items = [
  { to: "/dashboard", label: "Home", icon: Home },
  { to: "/chat", label: "Chat", icon: BookOpen },
  { to: "/study", label: "Study", icon: Sparkles },
  { to: "/settings", label: "Settings", icon: Settings },
  { to: "/profile", label: "Profile", icon: UserRound }
];

export default function MobileNav() {
  return (
    <nav className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-5 rounded-lg border border-white/10 bg-black/70 p-2 shadow-2xl backdrop-blur-xl lg:hidden">
      {items.map(({ to, label, icon: Icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `flex min-h-12 flex-col items-center justify-center gap-1 rounded-md text-[11px] transition ${
              isActive ? "bg-[var(--accent)] text-black" : "text-[var(--muted)] hover:bg-[var(--hover)] hover:text-[var(--text)]"
            }`
          }
        >
          <Icon size={18} />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
