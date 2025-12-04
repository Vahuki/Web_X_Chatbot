import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ChiTietSanPham.css';
import productApi from '../../api/productApi';

// 👇 1. Import Redux và Toast
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice'; // Đảm bảo đường dẫn đúng tới file slice của bạn
import { toast } from 'react-toastify';

interface ProductDetail {
  id: number;
  ten_san_pham: string;
  gia: number;
  hinh_anh: string;
  mo_ta: string;
  so_luong: number; 
  mau_sac: string;
}

const ChiTietSanPham = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  // 👇 2. Khai báo dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDetail = async () => {
      if (!id) return;
      try {
        setLoading(true);
        const data = await productApi.getById(id);
        setProduct(data);
      } catch (error) {
        console.error("Lỗi:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDetail();
  }, [id]);

  const handleQuantityChange = (amount: number) => {
    const newQty = quantity + amount;
    if (newQty >= 1 && (product ? newQty <= product.so_luong : true)) {
      setQuantity(newQty);
    }
  };

  // 👇 3. Hàm xử lý Thêm vào giỏ hàng
  const handleAddToCart = () => {
    if (!product) return;

    dispatch(addToCart({
      id: product.id,
      name: product.ten_san_pham, // Map tên trường cho khớp với Redux
      price: product.gia,
      image: product.hinh_anh,
      quantity: quantity // Lấy số lượng đang chọn
    }));

    toast.success("Đã thêm vào giỏ hàng!");
  };

  if (loading) return <div className="container my-5 text-center"><p>Đang tải...</p></div>;
  if (!product) return <div className="container my-5 text-center"><h3>Không tìm thấy sản phẩm</h3></div>;

  return (
    <div className="container my-5">
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/" className="text-decoration-none text-muted">Trang chủ</Link></li>
          <li className="breadcrumb-item active text-dark" aria-current="page">{product.ten_san_pham}</li>
        </ol>
      </nav>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card border-0 shadow-sm">
            <div className="main-image-container">
              <img
                src={product.hinh_anh || "https://placehold.co/500x500?text=No+Image"}
                alt={product.ten_san_pham}
                className="img-fluid rounded main-image"
                onError={(e) => {e.currentTarget.src = "https://placehold.co/500x500?text=Error"}}
              />
            </div>
            <div className="d-flex mt-3 gap-2 justify-content-center">
               <img src={product.hinh_anh} className="thumb-img active" alt="" />
               <img src={product.hinh_anh} className="thumb-img" alt="" />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="product-details p-2">
            <h2 className="product-title fw-bold">{product.ten_san_pham}</h2>
            <div className="d-flex align-items-center mb-3">
              <div className="text-warning me-3">
                <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-half"></i>
                <span className="text-muted ms-1">(4.8 đánh giá)</span>
              </div>
            </div>
            <h3 className="product-price text-danger fw-bold mb-3">
              {new Intl.NumberFormat('vi-VN').format(product.gia)} ₫
            </h3>
            <p className="product-desc text-secondary">
              {product.mo_ta || "Chưa có mô tả cho sản phẩm này."}
            </p>
            <div className="mb-4">
              {product.mau_sac && (
                  <div className="d-flex align-items-center mb-2">
                    <span className="fw-bold me-3" style={{ width: '80px' }}>Màu sắc:</span>
                    <button className="btn btn-outline-dark btn-sm me-2 active">{product.mau_sac}</button>
                  </div>
              )}
            </div>

            <div className="d-flex align-items-center mb-4 flex-nowrap">
              <span className="fw-bold me-3 text-nowrap" style={{ width: '80px' }}>Số lượng:</span>
              <div className="input-group flex-nowrap" style={{ width: '130px', minWidth: '130px' }}>
                <button className="btn btn-outline-secondary" type="button" onClick={() => handleQuantityChange(-1)}>-</button>
                <input type="text" className="form-control text-center" value={quantity} readOnly style={{ minWidth: '40px' }} />
                <button className="btn btn-outline-secondary" type="button" onClick={() => handleQuantityChange(1)}>+</button>
              </div>
              <span className="ms-3 text-muted small text-nowrap">{product.so_luong} sản phẩm có sẵn</span>
            </div>

            {/* 👇 4. Gắn hàm handleAddToCart vào onClick */}
            <button 
                className="btn btn-outline-primary w-100 btn-lg flex-grow-1 mb-3"
                onClick={handleAddToCart} 
            >
              <i className="bi bi-cart-plus me-2"></i> Thêm vào giỏ
            </button>

            <div className="product-features bg-light p-3 rounded">
              {/* ... (Phần chính sách giữ nguyên) ... */}
              <div className="row g-3">
                <div className="col-6 d-flex align-items-center text-dark">
                  <i className="bi bi-truck fs-4 me-2 text-primary"></i>
                  <span className="small">FreeShip toàn quốc</span>
                </div>
                <div className="col-6 d-flex align-items-center text-dark">
                   <i className="bi bi-shield-check fs-4 me-2 text-primary"></i>
                   <span className="small">Bảo hành 12 tháng</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChiTietSanPham;