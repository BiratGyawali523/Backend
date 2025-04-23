import axios from "axios";

API_URL=process.env.REACT_APP_API_URL;

export const GetProduct = async () => {
    async (res, req) => {
        const response = await axios.get(`${API_URL}/Product`);
        return response.data;
    }};