import React, { useState, useRef, useEffect } from "react"; // Thêm useRef và useEffect
import "./TroLyAI.css";
import { sendMessage } from "../../api/aiApi";

const TroLyAI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null); // Dùng để cuộn xuống cuối

  // Cuộn xuống tin nhắn mới nhất
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]); // Mỗi khi messages thay đổi, cuộn xuống

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Lấy nội dung tin nhắn người dùng trước khi reset input
    const messageToSend = input; 

    // tin nhắn người dùng
    const userMessage = { sender: "user", text: messageToSend };
    setMessages((prev) => [...prev, userMessage]);
    
    // **Xóa ký tự ngay lập tức sau khi gửi**
    setInput(""); 

    // gọi API
    // Gửi messageToSend thay vì input (vì input đã bị reset)
    const res = await sendMessage(messageToSend); 

    let botReply = "❌ Không nhận được phản hồi từ server.";

    // backend tự trả về dạng { reply: "..."} → ưu tiên
    if (res?.reply) {
      botReply = res.reply;
    }
    // fallback: format chuẩn của Gemini
    else if (
      res?.candidates &&
      res.candidates[0]?.content?.parts &&
      res.candidates[0].content.parts[0]?.text
    ) {
      botReply = res.candidates[0].content.parts[0].text;
    }

    const botMessage = { sender: "bot", text: botReply };
    setMessages((prev) => [...prev, botMessage]);

    // **Lưu ý: setInput("") đã được di chuyển lên trên để xóa nhanh hơn**
  };

  return (
    <>
      {/* Nút mở chat */}
      <button className="chat-button" onClick={toggleChat}>
        💬
      </button>

      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">AI Tư Vấn Khách Hàng</div> {/* Đã đổi tên ở đây */}

          <div className="chat-body">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                <div className="message-bubble">{msg.text}</div>
              </div>
            ))}
            <div ref={messagesEndRef} /> {/* Dùng để cuộn xuống cuối */}
          </div>

          <div className="chat-input-area">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Nhập tin nhắn..."
              className="chat-input"
              name="chatInput"
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