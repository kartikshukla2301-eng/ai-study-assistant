import { motion } from "framer-motion";

export default function TypingAnimation() {
  return (
    <div className="flex items-center gap-1 px-1 py-2" aria-label="Assistant is typing">
      {[0, 1, 2].map((dot) => (
        <motion.span
          key={dot}
          className="h-2 w-2 rounded-full bg-[var(--accent)]"
          animate={{ y: [0, -5, 0], opacity: [0.35, 1, 0.35] }}
          transition={{ repeat: Infinity, duration: 0.8, delay: dot * 0.12 }}
        />
      ))}
    </div>
  );
}
