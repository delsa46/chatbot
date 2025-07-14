// src/components/chat/ChatInput.jsx
import { useState, useRef } from "react";

export default function ChatInput({ onSend }) {
  const [input, setInput] = useState("");
  const fileInputRef = useRef();

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const sendMessage = () => {
    const trimmed = input.trim();
    if (trimmed) {
      onSend(trimmed);
      setInput("");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // handle file upload logic here
      alert(`Selected file: ${file.name}`);
    }
  };

  return (
    <div className="p-4 border-t bg-white flex items-end gap-2">
      <button
        onClick={() => fileInputRef.current.click()}
        className="p-2 bg-gray-100 rounded hover:bg-gray-200"
      >
        📎
      </button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        rows={1}
        placeholder="Type a message..."
        className="flex-1 resize-none border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 max-h-40 overflow-auto"
      />

      <button
        onClick={sendMessage}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Send
      </button>
    </div>
  );
}
