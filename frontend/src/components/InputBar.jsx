import { Image, Paperclip, Send, Sparkles } from "lucide-react";
import { useRef, useState } from "react";

export default function InputBar({ onSend, onFile, disabled }) {
  const [value, setValue] = useState("");
  const fileRef = useRef(null);

  const submit = (event) => {
    event.preventDefault();
    const text = value.trim();
    if (!text || disabled) return;
    onSend(text);
    setValue("");
  };

  const handleFile = (event) => {
    const file = event.target.files?.[0];
    if (file) onFile(file);
    event.target.value = "";
  };

  return (
    <form onSubmit={submit} className="glass flex items-end gap-3 rounded-lg p-3">
      <input ref={fileRef} type="file" className="hidden" accept=".pdf,image/*,.txt,.md" onChange={handleFile} />
      <button type="button" className="rounded-md p-3 hover:bg-[var(--hover)]" onClick={() => fileRef.current?.click()} aria-label="Upload study file">
        <Paperclip size={19} />
      </button>
      <textarea
        rows={1}
        className="max-h-36 min-h-11 flex-1 resize-none bg-transparent px-1 py-2 outline-none placeholder:text-[var(--muted)]"
        placeholder="Ask for a 7-mark answer, debug code, summarize a PDF, or plan revision..."
        value={value}
        disabled={disabled}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter" && !event.shiftKey) submit(event);
        }}
      />
      <div className="hidden items-center gap-2 text-xs text-[var(--muted)] sm:flex">
        <Image size={15} />
        <Sparkles size={15} />
      </div>
      <button disabled={disabled || !value.trim()} className="rounded-md bg-[var(--accent)] p-3 text-black shadow-glow transition hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-50" aria-label="Send message">
        <Send size={18} />
      </button>
    </form>
  );
}
