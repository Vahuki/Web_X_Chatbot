import React, { useState } from "react";
import "./TroLyAI.css";


const TroLyAI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const botMessage = {
      sender: "bot",
      text: "Chào bạn! Tôi là ChatBot AI demo chạy ở client. Bạn cần hỗ trợ gì?",
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, botMessage]);
    }, 500);

    setInput("");
  };

  return (
    <>
      {/* Chat Button */}
      <button className="chat-button" onClick={toggleChat}>💬</button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">ChatBot AI</div>

          <div className="chat-body">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-message ${msg.sender === "user" ? "user" : "bot"}`}
              >
                <div className="message-bubble">{msg.text}</div>
              </div>
            ))}
          </div>

          <div className="chat-input-area">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Nhập tin nhắn..."
              className="chat-input"
            />
            <button onClick={handleSend} className="chat-send-btn">
              Gửi
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TroLyAI;
