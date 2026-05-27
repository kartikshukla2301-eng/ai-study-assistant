import { motion } from "framer-motion";
import MarkdownRenderer from "./MarkdownRenderer";
import TypingAnimation from "./TypingAnimation";

export default function MessageBubble({ message }) {
  const isUser = message.role === "user";
  return (
    <motion.div
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18 }}
    >
      <div className={`max-w-[88%] rounded-lg px-4 py-3 shadow-xl ${isUser ? "bg-[var(--bubble-user)] text-white" : "bg-[var(--bubble-ai)] text-[var(--text)]"}`}>
        {message.pending ? <TypingAnimation /> : <MarkdownRenderer content={message.content} />}
        <div className="mt-2 text-right text-[11px] opacity-60">{new Date(message.createdAt || Date.now()).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</div>
      </div>
    </motion.div>
  );
}
