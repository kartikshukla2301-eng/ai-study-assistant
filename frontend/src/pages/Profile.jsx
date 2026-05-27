import { Mail, UserRound } from "lucide-react";
import AppLayout from "../components/AppLayout";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();
  return (
    <AppLayout title="Profile" subtitle="Account and workspace identity">
        <div className="h-full overflow-y-auto p-4 md:p-6">
          <section className="glass max-w-xl rounded-lg p-6">
            <div className="mb-6 grid h-16 w-16 place-items-center rounded-lg bg-[var(--accent)] text-black shadow-glow">
              <UserRound size={30} />
            </div>
            <h1 className="text-2xl font-bold">{user?.name}</h1>
            <p className="mt-3 flex items-center gap-2 text-[var(--muted)]">
              <Mail size={17} />
              {user?.email}
            </p>
          </section>
        </div>
    </AppLayout>
  );
}
