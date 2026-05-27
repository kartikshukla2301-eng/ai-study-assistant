import { MessageSquarePlus, Search } from "lucide-react";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

export default function ChatHistory({ chats, activeChatId, onSelect, onCreate }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => chats.filter((chat) => chat.title.toLowerCase().includes(query.toLowerCase())), [chats, query]);

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-3">
      <button onClick={onCreate} className="flex items-center justify-center gap-2 rounded-md bg-[var(--accent)] px-3 py-2.5 font-semibold text-black shadow-glow">
        <MessageSquarePlus size={17} />
        New chat
      </button>
      <label className="flex items-center gap-2 rounded-md bg-black/20 px-3 py-2 text-sm text-[var(--muted)]">
        <Search size={15} />
        <input className="w-full bg-transparent outline-none" placeholder="Search chats" value={query} onChange={(event) => setQuery(event.target.value)} />
      </label>
      <div className="scrollbar-thin flex-1 space-y-2 overflow-y-auto pr-1">
        {filtered.map((chat) => (
          <motion.button
            key={chat._id}
            onClick={() => onSelect(chat._id)}
            className={`w-full rounded-md px-3 py-3 text-left transition ${activeChatId === chat._id ? "bg-[var(--hover)] text-[var(--text)]" : "text-[var(--muted)] hover:bg-[var(--hover)]"}`}
            whileHover={{ x: 2 }}
          >
            <p className="truncate text-sm font-medium">{chat.title}</p>
            <p className="mt-1 text-xs opacity-70">{new Date(chat.updatedAt || Date.now()).toLocaleDateString()}</p>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
