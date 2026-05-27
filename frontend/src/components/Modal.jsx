import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Modal({ open, title, children, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className="glass w-full max-w-2xl rounded-lg p-5 shadow-2xl" initial={{ y: 20, scale: 0.98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 20, scale: 0.98 }}>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold">{title}</h2>
              <button className="rounded-md p-2 hover:bg-[var(--hover)]" onClick={onClose} aria-label="Close modal">
                <X size={18} />
              </button>
            </div>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
