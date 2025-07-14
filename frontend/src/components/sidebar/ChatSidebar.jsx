// src/components/sidebar/ChatSidebar.jsx
import { useEffect, useState } from "react";
import { fetchChats } from "../../lib/api/chatApi";
import { Link, useLocation } from "react-router";

export default function ChatSidebar() {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const loadChats = async () => {
      try {
        const data = await fetchChats();
        setChats(data);
      } catch (err) {
        console.error("Failed to fetch chats", err);
        setError("Failed to load chats.");
      } finally {
        setLoading(false);
      }
    };
    loadChats();
  }, []);

  return (
    <aside className="w-64 h-screen border-r bg-white p-4 overflow-y-auto">
      <div className="font-bold text-lg mb-4">Chats</div>

      {loading && <div className="text-gray-500">Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}

      <ul className="space-y-2">
        {chats.map((chat) => (
          <li key={chat.id}>
            <Link
              to={`/chat/${chat.id}`}
              className={`block p-2 rounded hover:bg-gray-100 ${
                location.pathname === `/chat/${chat.id}` ? "bg-gray-100" : ""
              }`}
            >
              <div className="font-medium">{chat.title}</div>
              <div className="text-sm text-gray-500 truncate">{chat.lastMessage}</div>
              <div className="text-xs text-gray-400">{new Date(chat.updatedAt).toLocaleString()}</div>
            </Link>
          </li>
        ))}
      </ul>

      <button className="mt-6 w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700">
        + New Chat
      </button>
    </aside>
  );
}
