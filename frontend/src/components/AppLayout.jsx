import MobileNav from "./MobileNav";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function AppLayout({ title, subtitle, children, sidebarProps = {} }) {
  return (
    <div className="flex h-screen text-[var(--text)]">
      <Sidebar {...sidebarProps} />
      <main className="app-shell flex min-w-0 flex-1 flex-col">
        <Topbar title={title} subtitle={subtitle} />
        <div className="min-h-0 flex-1 pb-24 lg:pb-0">{children}</div>
      </main>
      <MobileNav />
    </div>
  );
}
