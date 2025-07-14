// src/components/chat/MessageItem.jsx
export default function MessageItem({ message }) {
    const isUser = message.role === "user";
  
    return (
      <div
        className={`max-w-[80%] mb-2 p-3 rounded-xl whitespace-pre-wrap ${
          isUser
            ? "ml-auto bg-blue-600 text-white text-right"
            : "mr-auto bg-gray-100 text-gray-900 text-left"
        }`}
      >
        {message.content}
      </div>
    );
  }
  