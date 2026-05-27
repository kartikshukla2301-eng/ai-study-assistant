import { useEffect, useState } from "react";
import api from "../api/client";
import { useAutoScroll } from "../hooks/useAutoScroll";
import InputBar from "./InputBar";
import MessageBubble from "./MessageBubble";

export default function ChatArea({ activeChatId, onChatUpdated }) {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useAutoScroll([messages, loading]);

  useEffect(() => {
    if (!activeChatId) {
      setMessages([]);
      return;
    }
    api.get(`/chats/${activeChatId}`).then(({ data }) => setMessages(data.messages || []));
  }, [activeChatId]);

  const send = async (content) => {
    if (!activeChatId) return;
    const userMessage = { _id: crypto.randomUUID(), role: "user", content, createdAt: new Date().toISOString() };
    const pending = { _id: "pending", role: "assistant", content: "", pending: true, createdAt: new Date().toISOString() };
    setMessages((current) => [...current, userMessage, pending]);
    setLoading(true);
    try {
      const { data } = await api.post(`/chats/${activeChatId}/messages`, { content });
      setMessages(data.messages);
      onChatUpdated?.(data.chat);
    } finally {
      setLoading(false);
    }
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    const { data } = await api.post("/files/analyze", formData, { headers: { "Content-Type": "multipart/form-data" } });
    await send(`Analyze this uploaded file result:\n\n${data.summary}\n\nExtracted text:\n${data.text.slice(0, 2200)}`);
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="scrollbar-thin flex-1 space-y-4 overflow-y-auto px-4 py-6 md:px-8">
        {messages.length === 0 && (
          <div className="mx-auto mt-12 max-w-2xl text-center">
            <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-lg bg-[var(--accent)] font-black text-black shadow-glow">AI</div>
            <h2 className="text-2xl font-semibold">Start a focused study session</h2>
            <p className="mt-2 text-[var(--muted)]">Ask for notes, coding help, PDF explanations, OCR extraction, formulas, revision plans, and exam-ready answers.</p>
          </div>
        )}
        {messages.map((message) => (
          <MessageBubble key={message._id} message={message} />
        ))}
        <div ref={bottomRef} />
      </div>
      <div className="px-4 pb-4 md:px-8 md:pb-6">
        <InputBar onSend={send} onFile={uploadFile} disabled={loading || !activeChatId} />
      </div>
    </div>
  );
}
