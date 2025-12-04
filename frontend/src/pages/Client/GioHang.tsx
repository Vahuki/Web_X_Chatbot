import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './GioHang.css';

// Import Redux và thư viện
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateCartQuantity, clearCart } from '../../store/cartSlice';
import axios from 'axios';
import { toast } from 'react-toastify';

const GioHang = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Lấy giỏ hàng từ Redux
    const cartItems = useSelector((state: any) => state.cart.cartItems);

    // State lưu thông tin User
    const [user, setUser] = useState<any>(null);

    // Kiểm tra đăng nhập khi vào trang
    useEffect(() => {
        const userStr = localStorage.getItem('user');
        if (userStr) {
            setUser(JSON.parse(userStr));
        }
    }, []);

    // Tính toán tiền
    const totalAmount = cartItems.reduce((total: number, item: any) => total + (item.price * item.quantity), 0);
    const shippingFee = cartItems.length > 0 ? 30000 : 0;
    const finalTotal = totalAmount + shippingFee;

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
    };

    const handleUpdateQuantity = (id: number, amount: number) => {
        const item = cartItems.find((i: any) => i.id === id);
        if(item) {
            dispatch(updateCartQuantity({ id, quantity: item.quantity + amount }));
        }
    };

    const handleRemove = (id: number) => {
        if(window.confirm("Xóa sản phẩm này khỏi giỏ hàng?")) {
            dispatch(removeFromCart(id));
        }
    };

    // --- XỬ LÝ ĐẶT HÀNG ---
    const handleCheckout = async () => {
        // 1. Kiểm tra bảo mật lần cuối
        if (!user) {
            toast.error("Vui lòng đăng nhập trước khi đặt hàng!");
            navigate('/dang-nhap');
            return;
        }

        // 2. Chuẩn bị dữ liệu gửi xuống Backend Laravel
        const orderData = {
            tai_khoan_id: user.id,
            tong_tien: finalTotal,
            chi_tiet: cartItems.map((item: any) => ({
                san_pham_id: item.id,
                so_luong: item.quantity,
                gia: item.price
            }))
        };

        try {
            // 3. Gọi API cập nhật Database
            const response = await axios.post('http://localhost:8000/api/orders', orderData);

            if (response.status === 201) {
                // 4. Thông báo thành công
                toast.success("🎉 Đặt hàng thành công! Cảm ơn bạn đã mua sắm.");
                
                // 5. Xóa giỏ hàng
                dispatch(clearCart()); 
                
                // 6. Chuyển hướng
                setTimeout(() => navigate('/'), 2000);
            }
        } catch (error: any) {
            console.error("Lỗi đặt hàng:", error);
            toast.error(error.response?.data?.message || "Đặt hàng thất bại. Vui lòng thử lại.");
        }
    };

    return (
        <div className="container my-5">
            <div className="card shadow-sm border-0">
                <div className="card-header bg-white py-3">
                    <h3 className="mb-0 text-primary">
                        <i className="bi bi-cart3 me-2"></i> Giỏ hàng của bạn
                    </h3>
                </div>
                
                <div className="card-body">
                    {cartItems.length > 0 ? (
                        <div className="row">
                            {/* CỘT TRÁI: DANH SÁCH SẢN PHẨM */}
                            <div className="col-lg-8">
                                <div className="table-responsive">
                                    <table className="table align-middle">
                                        <thead className="table-light">
                                            <tr>
                                                <th>Sản phẩm</th>
                                                <th className="text-center">Giá</th>
                                                <th className="text-center">Số lượng</th>
                                                <th className="text-end">Thành tiền</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartItems.map((item: any) => (
                                                <tr key={item.id}>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <img 
                                                                src={item.image || "https://placehold.co/100x100"} 
                                                                alt={item.name} 
                                                                className="rounded border me-3"
                                                                style={{width: '60px', height: '60px', objectFit: 'cover'}} 
                                                            />
                                                            <div>
                                                                <h6 className="mb-0 text-dark">{item.name}</h6>
                                                                <small className="text-muted">Mã SP: #{item.id}</small>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center">{formatCurrency(item.price)}</td>
                                                    <td className="text-center">
                                                        <div className="input-group input-group-sm mx-auto flex-nowrap" style={{width: '100px'}}>
                                                            <button className="btn btn-outline-secondary" onClick={() => handleUpdateQuantity(item.id, -1)}>-</button>
                                                            <input type="text" className="form-control text-center" style={{width: '50px'}} value={item.quantity} readOnly />
                                                            <button className="btn btn-outline-secondary" onClick={() => handleUpdateQuantity(item.id, 1)}>+</button>
                                                        </div>
                                                    </td>
                                                    <td className="text-end fw-bold text-primary">
                                                        {formatCurrency(item.price * item.quantity)}
                                                    </td>
                                                    <td className="text-end">
                                                        <button className="btn btn-sm text-danger" onClick={() => handleRemove(item.id)}>
                                                            <i className="bi bi-trash"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* CỘT PHẢI: TỔNG TIỀN & NÚT BẤM */}
                            <div className="col-lg-4">
                                <div className="card bg-light border-0 p-3">
                                    <h5 className="fw-bold mb-3">Cộng giỏ hàng</h5>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span>Tạm tính:</span>
                                        <span className="fw-bold">{formatCurrency(totalAmount)}</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3">
                                        <span>Phí vận chuyển:</span>
                                        <span className="fw-bold">{formatCurrency(shippingFee)}</span>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between mb-4">
                                        <span className="h5 mb-0">Tổng cộng:</span>
                                        <span className="h4 mb-0 text-danger">{formatCurrency(finalTotal)}</span>
                                    </div>

                                    {/* 👇👇👇 PHẦN XỬ LÝ HIỂN THỊ NÚT BẤM 👇👇👇 */}
                                    {user ? (
                                        // TRƯỜNG HỢP 1: ĐÃ ĐĂNG NHẬP -> HIỆN NÚT ĐẶT HÀNG
                                        <button 
                                            className="btn btn-warning btn-lg w-100 shadow-sm text-white fw-bold"
                                            onClick={handleCheckout}
                                        >
                                            <i className="bi bi-credit-card-2-front me-2"></i> ĐẶT HÀNG NGAY
                                        </button>
                                    ) : (
                                        // TRƯỜNG HỢP 2: CHƯA ĐĂNG NHẬP -> HIỆN NÚT YÊU CẦU ĐĂNG NHẬP
                                        <div className="d-grid gap-2">
                                            <div className="alert alert-info small mb-2 text-center">
                                                <i className="bi bi-info-circle me-1"></i> Bạn cần đăng nhập để thanh toán
                                            </div>
                                            <Link to="/dang-nhap" className="btn btn-primary btn-lg w-100 shadow-sm">
                                                <i className="bi bi-box-arrow-in-right me-2"></i> ĐĂNG NHẬP NGAY
                                            </Link>
                                        </div>
                                    )}
                                    {/* 👆👆👆 ------------------------------- 👆👆👆 */}
                                    
                                    <div className="mt-3 text-center">
                                        <Link to="/" className="text-decoration-none small">
                                            <i className="bi bi-arrow-left me-1"></i> Tiếp tục xem sản phẩm
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="alert alert-warning text-center py-5">
                            <i className="bi bi-cart-x display-1 mb-3"></i>
                            <p className="fs-5">Giỏ hàng của bạn hiện chưa có sản phẩm nào.</p>
                            <Link to="/" className="btn btn-primary mt-3">Tiếp tục mua sắm</Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GioHang;