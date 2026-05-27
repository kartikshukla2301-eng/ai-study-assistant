import { motion } from "framer-motion";

export default function Loader({ label = "Loading", fullScreen = false }) {
  return (
    <div className={`${fullScreen ? "min-h-screen" : "min-h-40"} grid place-items-center text-[var(--text)]`}>
      <div className="flex flex-col items-center gap-4">
        <motion.div
          className="h-12 w-12 rounded-full border-2 border-[var(--accent)] border-t-transparent accent-glow"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
        />
        <p className="text-sm text-[var(--muted)]">{label}</p>
      </div>
    </div>
  );
}
