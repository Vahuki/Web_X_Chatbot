import React, { useState, useEffect } from 'react';

import './TrangChu.css';

// Import API Service
import productApi from '../../api/productApi';
import danhMucApi from '../../api/danhMucApi';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { toast } from 'react-toastify';

// Định nghĩa kiểu dữ liệu
interface Product {
  id: number;
  ten_san_pham: string; // Tên cột khớp với Laravel
  gia: number;
  hinh_anh: string;
  danh_muc_id: number; // Laravel thường trả về danh_muc_id (snake_case)
}

interface Category {
  id: number;
  ten_danh_muc: string;
}

const TrangChu = () => {
  const dispatch = useDispatch();
  // State lưu dữ liệu
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  // State lưu danh mục đang chọn (0 = Tất cả)
  const [selectedCategory, setSelectedCategory] = useState(0);

  // 1. Gọi API khi trang vừa tải
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Gọi song song 2 API để tiết kiệm thời gian
        const [productRes, categoryRes] = await Promise.all([
          productApi.getAll(),
          danhMucApi.getAll()
        ]);

        // --- SỬA LỖI QUAN TRỌNG Ở ĐÂY ---
        // Kiểm tra xem dữ liệu trả về là mảng trực tiếp hay nằm trong thuộc tính .data
        // (Tùy thuộc vào cách Laravel trả về: return $data hay return response()->json($data))
        const productList = Array.isArray(productRes) ? productRes : (productRes.data || []);
        const categoryList = Array.isArray(categoryRes) ? categoryRes : (categoryRes.data || []);

        setProducts(productList);
        setCategories(categoryList);
      } catch (error) {
        console.error("Lỗi tải dữ liệu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 2. Logic Lọc Sản Phẩm
  // Đảm bảo products luôn là mảng trước khi filter để tránh lỗi crash
  const safeProducts = Array.isArray(products) ? products : [];

  const filteredProducts = selectedCategory === 0
    ? safeProducts
    : safeProducts.filter(product => product.danh_muc_id === selectedCategory);

  // 3. Hàm format tiền tệ
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN').format(amount);
  };

  // -------------------------------------------------------------
  // Hàm xử lý thêm vào giỏ
  const handleAddToCart = (productItem: Product) => {
    dispatch(addToCart({
      id: productItem.id,
      name: productItem.ten_san_pham,
      price: productItem.gia,
      image: productItem.hinh_anh,
      quantity: 1
    }));
    toast.success(`Đã thêm ${productItem.ten_san_pham} vào giỏ!`);
  };
  return (
    <div>
      {/* --- SLIDE CAROUSEL --- */}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/img/slide_1.png" className="d-block w-100" alt="Slide 1" style={{ height: '500px' }} />
          </div>
          <div className="carousel-item">
            <img src="/img/slide_2.png" className="d-block w-100" alt="Slide 2" style={{ height: '500px' }} />
          </div>
          <div className="carousel-item">
            <img src="/img/slide_3.jpg" className="d-block w-100" alt="Slide 3" style={{ height: '500px' }} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* --- NỘI DUNG CHÍNH --- */}

      <div className="row  mt-4 mb-5">

        {/* CỘT DANH MỤC (SIDEBAR) */}
        <div className="col-lg-3 col-md-12 mb-4">
          <div className="bg-white p-3 rounded-3 shadow-sm" style={{ top: '80px', zIndex: 1 }}>
            <h4 className="text-primary fw-bold border-bottom pb-2">Danh mục</h4>
            <ul className="category-list list-unstyled mt-3">

              {/* Mục Tất cả */}
              <li
                className={`category-item p-2 rounded mb-1 fw-bold cursor-pointer ${selectedCategory === 0 ? 'active bg-light text-primary' : ''}`}
                onClick={() => setSelectedCategory(0)}
                style={{ cursor: 'pointer' }}
              >
                <span><i className="bi bi-grid-fill me-2"></i>Tất cả sản phẩm</span>
              </li>

              {/* Danh sách từ API */}
              {categories.map(cat => (
                <li
                  key={cat.id}
                  className={`category-item p-2 mb-1 rounded cursor-pointer ${selectedCategory === cat.id ? 'active bg-light text-primary fw-bold' : ''}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <span><i className="bi bi-chevron-right me-2 font-12"></i>{cat.ten_danh_muc}</span>
                </li>
              ))}

            </ul>
          </div>
        </div>

        {/* CỘT SẢN PHẨM */}
        <div className="col-lg-9 col-md-12">

          {/* Thanh thông tin */}
          <div className="d-flex justify-content-between align-items-center bg-white p-3 rounded-3 shadow-sm mb-4">
            {loading ? (
              <span className="fw-bold text-muted"><i className="bi bi-hourglass-split me-1"></i>Đang tải dữ liệu...</span>
            ) : (
              <span className="fw-bold">Hiển thị {filteredProducts.length} sản phẩm</span>
            )}

            <div className="d-flex align-items-center">
              <span className="me-2 text-nowrap">Sắp xếp:</span>
              <select className="form-select form-select-sm" defaultValue="newest">
                <option value="newest">Mới nhất</option>
                <option value="price-desc">Giá cao - thấp</option>
                <option value="price-asc">Giá thấp - cao</option>
              </select>
            </div>
          </div>

          {/* Danh sách sản phẩm */}
          <div className="row">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="col-lg-4 col-md-6 col-6 mb-4">
                  <div className="card h-100 shadow-sm border-0 card-product">

                    {/* Ảnh sản phẩm */}
                    <div className="overflow-hidden position-relative">
                      <img
                        src={product.hinh_anh || "https://placehold.co/300x300?text=No+Image"}
                        className="card-img-top product-img"
                        alt={product.ten_san_pham}
                        style={{ height: '250px', objectFit: 'cover', transition: '0.3s' }}
                        onError={(e) => { e.currentTarget.src = "https://placehold.co/300x300?text=Error" }} // Xử lý khi ảnh lỗi
                      />
                    </div>

                    {/* Thông tin sản phẩm */}
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title fs-6 fw-bold text-dark text-truncate" title={product.ten_san_pham}>
                        {product.ten_san_pham}
                      </h5>
                      <div className="mt-auto">
                        <p className="price text-danger fw-bold mb-2 fs-5">
                          {formatCurrency(product.gia)} <span className="text-decoration-underline font-12">đ</span>
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          {/* Chuyển đến trang chi tiết kèm ID của sản phẩm */}
                          <Link
                            className='btn btn-outline-secondary btn-sm rounded-pill d-flex align-items-center'
                            to={`/san-pham/${product.id}`}
                          >
                            Xem chi tiết <i className="bi bi-arrow-right-short ms-1"></i>
                          </Link>
                          <button className="btn btn-primary btn-sm rounded-pill "
                            onClick={() => handleAddToCart(product)}>
                            <i className="bi bi-cart-plus me-1"></i> Thêm vào giỏ
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ))
            ) : (
              !loading && (
                <div className="col-12 text-center py-5">
                  <i className="bi bi-box-seam display-1 text-muted"></i>
                  <p className="mt-3 text-muted">Không tìm thấy sản phẩm nào trong danh mục này.</p>
                </div>
              )
            )}
          </div>

        </div>
      </div>

    </div>
  );
};

export default TrangChu;