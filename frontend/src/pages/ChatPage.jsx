// src/pages/ChatPage.jsx
import { useState } from "react";
import MessageList from "../components/chat/MessageList";
import ChatInput from "../components/chat/ChatInput";
import { v4 as uuidv4 } from "uuid";

export function ChatPage() {
  const [messages, setMessages] = useState([
    { id: uuidv4(), role: "assistant", content: "Hi! How can I help you today?" },
  ]);

  const handleSend = async (userMessage) => {
    const userMsg = { id: uuidv4(), role: "user", content: userMessage };
    setMessages((prev) => [...prev, userMsg]);

    // simulate AI response
    setTimeout(() => {
      const botReply = {
        id: uuidv4(),
        role: "assistant",
        content: `You said: "${userMessage}"`,
      };
      setMessages((prev) => [...prev, botReply]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full">
      <MessageList messages={messages} />
      <ChatInput onSend={handleSend} />
    </div>
  );
}
