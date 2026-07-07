import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
        "Content-Type": "application/json",
    },
});

// Add token automatically to every request
API.interceptors.request.use((config) => {

    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;

});

// ================= AUTH =================

export const registerUser = (data) =>
    API.post("/auth/register", data);

export const loginUser = (data) =>
    API.post("/auth/login", data);

// ================= INVESTMENT =================

export const createInvestment = (data) =>
    API.post("/investment/create", data);

export const getMyInvestments = () =>
    API.get("/investment/my");

export default API;