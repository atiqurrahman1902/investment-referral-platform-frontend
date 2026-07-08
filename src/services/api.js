import axios from "axios";

const API = axios.create({

    baseURL: import.meta.env.VITE_API_URL,

    headers: {

        "Content-Type": "application/json",

    },

});

// ======================================
// Automatically Attach JWT Token
// ======================================

API.interceptors.request.use(

    (config) => {

        const token = localStorage.getItem("token");

        if (token) {

            config.headers.Authorization = `Bearer ${token}`;

        }

        return config;

    },

    (error) => Promise.reject(error)

);

// ======================================
// AUTH APIs
// ======================================

export const registerUser = (data) =>
    API.post("/auth/register", data);

export const loginUser = (data) =>
    API.post("/auth/login", data);

// ======================================
// INVESTMENT APIs
// ======================================

export const createInvestment = (data) =>
    API.post("/investment/create", data);

export const getMyInvestments = () =>
    API.get("/investment/my");

export default API;