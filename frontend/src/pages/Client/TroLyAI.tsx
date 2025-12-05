import React, { useState, useRef, useEffect } from "react";
import "./TroLyAI.css";
import { sendMessage } from "../../api/aiApi";

const TroLyAI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const QUICK_SUGGESTIONS = [
    "Tôi muốn xem sản phẩm bán chạy",
    "Tư vấn giúp tôi chọn size phù hợp",
    "Shop có free ship không?"
  ];

  // Auto scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const toggleChat = () => {
    setIsOpen(!isOpen);

    // Khi mở chat → gửi lời chào 1 lần nếu chưa có tin nhắn
    if (!isOpen && messages.length === 0) {
      setMessages([
        {
          sender: "bot",
          text: "Xin chào! 👋 Tôi là trợ lý AI. Bạn muốn tôi hỗ trợ gì không?"
        }
      ]);
    }
  };

  const handleSend = async (preset?: string) => {
    const textToSend = preset || input;

    if (!textToSend.trim()) return;

    // Tin nhắn người dùng
    setMessages((prev) => [...prev, { sender: "user", text: textToSend }]);
    setInput("");

    // Hiệu ứng bot đang gõ
    setIsTyping(true);

    // Gọi API
    const res = await sendMessage(textToSend);

    let botReply = "❌ Không nhận được phản hồi từ server.";

    if (res?.reply) botReply = res.reply;
    else if (res?.candidates?.[0]?.content?.parts?.[0]?.text)
      botReply = res.candidates[0].content.parts[0].text;

    // Delay để typing animation nhìn thật hơn
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
    }, 800);
  };

  return (
    <>
      <button className="chat-button" onClick={toggleChat}>💬</button>

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">AI Tư Vấn Khách Hàng</div>


          <div className="chat-body">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                {msg.sender === "bot" && <div className="avatar bot">🤖</div>}
                {msg.sender === "user" && <div className="avatar user">🙋‍♂️</div>}
                <div className="message-bubble">{msg.text}</div>
              </div>
            ))}

            {/* Typing animation */}
            {isTyping && (
              <div className="chat-message bot">
                <div className="avatar bot">🤖</div>
                <div className="typing">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-area">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Nhập tin nhắn..."
              className="chat-input"
              />
            <button onClick={() => handleSend()} className="chat-send-btn">
              Gửi
            </button>
          </div>
          {/* Câu hỏi mẫu */}
          {messages.length <= 1 && (
            <div className="quick-suggest">
              {QUICK_SUGGESTIONS.map((q, i) => (
                <button key={i} onClick={() => handleSend(q)}>
                  {q}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default TroLyAI;
