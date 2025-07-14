// src/components/chat/MessageList.jsx
import MessageItem from "./MessageItem";
import { useEffect, useRef } from "react";

export default function MessageList({ messages }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col space-y-2 p-4 overflow-y-auto flex-1">
      {messages.map((msg) => (
        <MessageItem key={msg.id} message={msg} />
      ))}
      <div ref={scrollRef} />
    </div>
  );
}
