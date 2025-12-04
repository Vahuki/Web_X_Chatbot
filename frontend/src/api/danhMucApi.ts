// frontend/src/api/categoryApi.ts
import axios from 'axios';

// Cấu hình đường dẫn gốc của Backend (Laravel chạy cổng 8000)
const API_URL = 'http://localhost:8000/api'; 

const danhMucApi = {
    /**
     * Hàm lấy danh sách danh mục
     * Giả định API Backend là: GET /api/categories
     */
    getAll: async () => {
        try {
            const response = await axios.get(`${API_URL}/categories`);
            return response.data; // Trả về dữ liệu từ server
        } catch (error) {
            console.error("Lỗi khi gọi API danh mục:", error);
            // Trả về mảng rỗng nếu lỗi để tránh lỗi render trong React
            return []; 
        }
    }
    // Sau này có thể thêm getById, create, update...
};

export default danhMucApi;