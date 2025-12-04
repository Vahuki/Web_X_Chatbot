import axios from 'axios';

// Cấu hình đường dẫn gốc của Backend (Laravel chạy cổng 8000)
const API_URL = 'http://localhost:8000/api'; 

const productApi = {
    // Hàm lấy danh sách sản phẩm
    getAll: async () => {
        try {
            const response = await axios.get(`${API_URL}/products`);
            return response.data; // Trả về dữ liệu từ server
        } catch (error) {
            console.error("Lỗi khi gọi API sản phẩm:", error);
            return []; // Trả về mảng rỗng nếu lỗi
        }
    },
    // 👇 THÊM HÀM NÀY 👇
    getById: async (id: any) => {
        try {
            const response = await axios.get(`${API_URL}/products/${id}`);
            return response.data;
        } catch (error) {
            console.error("Lỗi lấy chi tiết sản phẩm:", error);
            return null;
        }
    }
};

export default productApi;