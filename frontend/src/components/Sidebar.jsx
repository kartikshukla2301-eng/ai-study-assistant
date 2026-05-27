import { BookOpen, Code2, LayoutDashboard, LogOut, Settings, UserRound } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ChatHistory from "./ChatHistory";

const navItems = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/chat", label: "Chat", icon: BookOpen },
  { to: "/study", label: "Study Mode", icon: Code2 },
  { to: "/settings", label: "Settings", icon: Settings },
  { to: "/profile", label: "Profile", icon: UserRound }
];

export default function Sidebar({ chats = [], activeChatId, onSelectChat, onCreateChat }) {
  const { user, logout } = useAuth();
  return (
    <aside className="sidebar-glass hidden h-screen w-80 shrink-0 flex-col gap-5 p-4 lg:flex">
      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-lg bg-[var(--accent)] font-black text-black shadow-glow">AI</div>
        <div>
          <p className="font-semibold">Study Assistant</p>
          <p className="text-xs text-[var(--muted)]">{user?.name || "Focused workspace"}</p>
        </div>
      </div>
      <nav className="grid gap-1">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink key={to} to={to} className={({ isActive }) => `flex items-center gap-3 rounded-md px-3 py-2.5 text-sm ${isActive ? "bg-[var(--hover)] text-[var(--text)]" : "text-[var(--muted)] hover:bg-[var(--hover)]"}`}>
            <Icon size={17} />
            {label}
          </NavLink>
        ))}
      </nav>
      {onSelectChat && <ChatHistory chats={chats} activeChatId={activeChatId} onSelect={onSelectChat} onCreate={onCreateChat} />}
      <button className="mt-auto flex items-center gap-2 rounded-md px-3 py-2.5 text-sm text-[var(--muted)] hover:bg-[var(--hover)]" onClick={logout}>
        <LogOut size={17} />
        Logout
      </button>
    </aside>
  );
}
