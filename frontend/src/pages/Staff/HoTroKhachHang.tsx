import React, { useState } from 'react';

// Dữ liệu giả lập danh sách khách hàng cần hỗ trợ
const users = [
    { id: 1, name: "Nguyễn Văn A", msg: "Shop ơi tư vấn giúp em...", time: "5 phút", status: "online", avatar: "https://placehold.co/50/007bff/fff?text=A" },
    { id: 2, name: "Trần Thị B", msg: "Đơn hàng của mình sao chưa...", time: "10 phút", status: "offline", avatar: "https://placehold.co/50/dc3545/fff?text=B" },
    { id: 3, name: "Lê Hoàng C", msg: "Sản phẩm này còn size L...", time: "1 giờ", status: "online", avatar: "https://placehold.co/50/28a745/fff?text=C" },
    { id: 4, name: "Phạm D", msg: "Cảm ơn shop nhé!", time: "1 ngày", status: "offline", avatar: "https://placehold.co/50/ffc107/fff?text=D" },
];

// Dữ liệu giả lập tin nhắn (Hội thoại)
const mockMessages = [
    { id: 1, type: 'received', text: 'Xin chào shop, cho mình hỏi mẫu áo sơ mi trắng còn không ạ?', time: '10:00 AM' },
    { id: 2, type: 'sent', text: 'Dạ chào bạn, mẫu đó bên mình vẫn còn đủ size S, M, L ạ.', time: '10:01 AM' },
    { id: 3, type: 'received', text: 'Mình cao 1m7, nặng 60kg thì mặc size gì vừa?', time: '10:02 AM' },
    { id: 4, type: 'sent', text: 'Dạ với chiều cao cân nặng này bạn mặc size M là đẹp nhất ạ (Fit body), hoặc size L nếu thích rộng rãi.', time: '10:03 AM' },
    { id: 5, type: 'received', text: 'Ok shop, để mình đặt 1 cái size M nhé.', time: '10:05 AM' },
];

const HoTroKhachHang = () => {
  const [activeChat, setActiveChat] = useState(1); // ID người đang chat
  const [inputMsg, setInputMsg] = useState('');

  return (
    <div className="container-fluid py-3" style={{ backgroundColor: '#f0f2f5', minHeight: '90vh' }}>
      <div className="card shadow border-0" style={{ height: '85vh', overflow: 'hidden' }}>
        <div className="row h-100 g-0">
          
          {/* --- CỘT TRÁI: DANH SÁCH KHÁCH HÀNG --- */}
          <div className="col-md-4 col-lg-3 border-end d-flex flex-column">
            
            {/* Header Cột trái */}
            <div className="p-3 border-bottom bg-white d-flex justify-content-between align-items-center">
                <h5 className="mb-0 fw-bold text-primary"><i className="bi bi-chat-dots-fill me-2"></i>Hỗ Trợ</h5>
                
            </div>

            {/* Thanh tìm kiếm */}
            <div className="p-2 bg-light">
                <div className="input-group">
                    <span className="input-group-text bg-white border-end-0"><i className="bi bi-search"></i></span>
                    <input type="text" className="form-control border-start-0 ps-0" placeholder="Tìm khách hàng..." />
                </div>
            </div>

            {/* Danh sách User (Scrollable) */}
            <div className="flex-grow-1 overflow-auto" style={{backgroundColor: '#fff'}}>
                <ul className="list-group list-group-flush">
                    {users.map(user => (
                        <li 
                            key={user.id} 
                            className={`list-group-item list-group-item-action p-3 cursor-pointer ${activeChat === user.id ? 'bg-primary-subtle' : ''}`}
                            onClick={() => setActiveChat(user.id)}
                            style={{cursor: 'pointer', borderLeft: activeChat === user.id ? '4px solid #0d6efd' : '4px solid transparent'}}
                        >
                            <div className="d-flex align-items-center">
                                <div className="position-relative">
                                    <img src={user.avatar} className="rounded-circle" width="45" height="45" alt="avatar" />
                                    <span className={`position-absolute bottom-0 end-0 p-1 border border-light rounded-circle ${user.status === 'online' ? 'bg-success' : 'bg-secondary'}`}></span>
                                </div>
                                <div className="ms-3 flex-grow-1 overflow-hidden">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h6 className="mb-0 text-truncate">{user.name}</h6>
                                        <small className="text-muted" style={{fontSize: '11px'}}>{user.time}</small>
                                    </div>
                                    <p className="mb-0 text-muted text-truncate small">{user.msg}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
          </div>

          {/* --- CỘT PHẢI: KHUNG CHAT --- */}
          <div className="col-md-8 col-lg-9 d-flex flex-column bg-white">
            
            {/* Header Khung Chat */}
            <div className="p-3 border-bottom d-flex justify-content-between align-items-center bg-white">
                <div className="d-flex align-items-center">
                    <img src={users.find(u => u.id === activeChat)?.avatar} className="rounded-circle me-2" width="40" alt="avt" />
                    <div>
                        <h6 className="mb-0">{users.find(u => u.id === activeChat)?.name}</h6>
                        <small className="text-success"><i className="bi bi-dot"></i> Đang hoạt động</small>
                    </div>
                </div>
                <div>
                    <button className="btn btn-light btn-sm me-2"><i className="bi bi-telephone"></i></button>
                    <button className="btn btn-light btn-sm"><i className="bi bi-camera-video"></i></button>
                </div>
            </div>

            {/* Nội dung Chat (Scrollable) */}
            <div className="flex-grow-1 p-4 overflow-auto" style={{backgroundColor: '#f8f9fa'}}>
                {mockMessages.map(msg => (
                    <div key={msg.id} className={`d-flex mb-3 ${msg.type === 'sent' ? 'justify-content-end' : 'justify-content-start'}`}>
                        {msg.type === 'received' && (
                             <img src={users.find(u => u.id === activeChat)?.avatar} className="rounded-circle me-2 align-self-end" width="30" height="30" alt="u" />
                        )}
                        
                        <div style={{maxWidth: '70%'}}>
                            <div 
                                className={`p-3 rounded-4 shadow-sm ${msg.type === 'sent' ? 'bg-primary text-white' : 'bg-white text-dark'}`}
                                style={{
                                    borderBottomRightRadius: msg.type === 'sent' ? '0' : '1rem',
                                    borderBottomLeftRadius: msg.type === 'received' ? '0' : '1rem'
                                }}
                            >
                                {msg.text}
                            </div>
                            <div className={`small text-muted mt-1 ${msg.type === 'sent' ? 'text-end' : ''}`} style={{fontSize: '11px'}}>
                                {msg.time}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer: Nhập tin nhắn */}
            <div className="p-3 border-top bg-white">
                <form className="d-flex align-items-center" onSubmit={(e) => e.preventDefault()}>
                    
                    <input 
                        type="text" 
                        className="form-control rounded-pill bg-light border-0" 
                        placeholder="Nhập tin nhắn..." 
                        value={inputMsg}
                        onChange={(e) => setInputMsg(e.target.value)}
                        style={{height: '45px'}}
                    />
                    
                    <button type="submit" className="btn btn-primary rounded-circle ms-2" style={{width: '45px', height: '45px'}}>
                        <i className="bi bi-send-fill"></i>
                    </button>
                </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default HoTroKhachHang;