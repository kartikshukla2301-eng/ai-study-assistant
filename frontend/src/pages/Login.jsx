import { LogIn } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleLoginButton from "../components/GoogleLoginButton";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const submit = async (event) => {
    event.preventDefault();
    setError("");
    try {
      await login(form);
      navigate(location.state?.from?.pathname || "/dashboard", { replace: true });
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <main className="grid min-h-screen place-items-center p-4">
      <form onSubmit={submit} className="glass w-full max-w-md rounded-lg p-6">
        <div className="mb-6">
          <div className="mb-4 grid h-12 w-12 place-items-center rounded-lg bg-[var(--accent)] text-black shadow-glow">
            <LogIn />
          </div>
          <h1 className="text-2xl font-bold">Welcome back</h1>
          <p className="mt-1 text-sm text-[var(--muted)]">Continue your study session.</p>
        </div>
        <div className="space-y-3">
          <input className="w-full rounded-md border border-white/10 bg-black/25 p-3 outline-none focus:border-[var(--accent)]" placeholder="Email" type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required />
          <input className="w-full rounded-md border border-white/10 bg-black/25 p-3 outline-none focus:border-[var(--accent)]" placeholder="Password" type="password" value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} required />
        </div>
        {error && <p className="mt-4 rounded-md bg-red-500/15 p-3 text-sm text-red-200">{error}</p>}
        <button className="mt-5 w-full rounded-md bg-[var(--accent)] p-3 font-semibold text-black shadow-glow">Login</button>
        <div className="my-5 flex items-center gap-3 text-xs text-[var(--muted)]">
          <span className="h-px flex-1 bg-white/10" />
          or
          <span className="h-px flex-1 bg-white/10" />
        </div>
        <GoogleLoginButton />
        <p className="mt-4 text-center text-sm text-[var(--muted)]">
          New here? <Link className="text-[var(--accent)]" to="/register">Create an account</Link>
        </p>
      </form>
    </main>
  );
}
