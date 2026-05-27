import { FileText, Image, UploadCloud } from "lucide-react";
import { useRef, useState } from "react";
import api from "../api/client";

export default function FileUpload({ onResult }) {
  const inputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const upload = async (file) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const { data } = await api.post("/files/analyze", formData, { headers: { "Content-Type": "multipart/form-data" } });
      onResult?.(data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="glass rounded-lg p-4">
      <input ref={inputRef} className="hidden" type="file" accept=".pdf,image/*,.txt,.md" onChange={(event) => event.target.files?.[0] && upload(event.target.files[0])} />
      <button className="flex w-full flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-white/20 p-8 text-center hover:bg-[var(--hover)]" onClick={() => inputRef.current?.click()} disabled={loading}>
        <UploadCloud size={34} className="text-[var(--accent)]" />
        <span className="font-semibold">{loading ? "Analyzing file" : "Upload PDF, notes, image, or screenshot"}</span>
        <span className="flex items-center gap-3 text-xs text-[var(--muted)]">
          <FileText size={14} /> PDF and notes
          <Image size={14} /> OCR images
        </span>
      </button>
    </div>
  );
}
