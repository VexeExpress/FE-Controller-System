import API from './api';

// Hàm lấy danh sách khách hàng
export const getPartner = async () => {
    try {
        const response = await API.get('/partners');
        return response.data;
    } catch (error) {
        console.error('Error fetching partners:', error);
        throw error;
    }
};

// Hàm tạo khách hàng
export const createPartner = async (userData) => {
    try {
        const response = await API.post('/partners', userData);
        return response.data;
    } catch (error) {
        console.error('Error creating partner:', error);
        throw error;
    }
};

// Hàm cập nhật thông tin khách hàng
export const updatePartner = async (userId, userData) => {
    try {
        const response = await API.put(`/partners/${userId}`, userData);
        return response.data;
    } catch (error) {
        console.error(`Error updating partner with ID ${userId}:`, error); 
        throw error;
    }
};

// Hàm xóa khách hàng
export const deletePartner = async (userId) => {
    try {
        const response = await API.delete(`/partners/${userId}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting partner with ID ${userId}:`, error);
        throw error;
    }
};