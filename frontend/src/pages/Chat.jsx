import { useEffect, useState } from "react";
import api from "../api/client";
import AppLayout from "../components/AppLayout";
import ChatArea from "../components/ChatArea";
import Loader from "../components/Loader";

export default function Chat() {
  const [chats, setChats] = useState([]);
  const [activeChatId, setActiveChatId] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadChats = async () => {
    const { data } = await api.get("/chats");
    setChats(data.chats);
    setActiveChatId((current) => current || data.chats[0]?._id || null);
  };

  const createChat = async () => {
    const { data } = await api.post("/chats", { title: "New study chat" });
    setChats((current) => [data.chat, ...current]);
    setActiveChatId(data.chat._id);
  };

  useEffect(() => {
    loadChats().finally(() => setLoading(false));
  }, []);

  const activeChat = chats.find((chat) => chat._id === activeChatId);

  return (
    <AppLayout
      title={activeChat?.title || "AI Chat"}
      subtitle="Markdown, code, PDFs, OCR, and study answers"
      sidebarProps={{ chats, activeChatId, onSelectChat: setActiveChatId, onCreateChat: createChat }}
    >
      {loading ? <Loader /> : <ChatArea activeChatId={activeChatId} onChatUpdated={(chat) => setChats((current) => current.map((item) => (item._id === chat._id ? chat : item)))} />}
    </AppLayout>
  );
}
