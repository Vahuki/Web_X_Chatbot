import axios from 'axios';

const API_URL = 'http://localhost:8000/api/auth'; 

const authApi = {
    register: async (data: any) => {
        const response = await axios.post(`${API_URL}/register`, data);
        return response.data;
    },
    // 👇 THÊM HÀM LOGIN 👇
    login: async (data: any) => {
        const response = await axios.post(`${API_URL}/login`, data);
        return response.data;
    }
};

export default authApi;