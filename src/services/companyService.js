// companyService.js

import axios from 'axios';

const API_BASE_URL = 'http://localhost:3002';


export const getAllPartner = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/companies`);
        return response.data;
    } catch (error) {
        console.error('Error fetching companies:', error);
        throw error;
    }
};


export const addPartner = async (formData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/company/create-partner`, formData);
        return response.data;
    } catch (error) {
        console.error('Error submitting form data:', error);
        throw error;
    }
};
