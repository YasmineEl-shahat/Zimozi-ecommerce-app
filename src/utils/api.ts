import axios from "axios";
const api = axios.create({ baseURL: "https://fakestoreapi.com" });

export const getProducts = () => api.get(`/products`);

export const fetchUserOrderHistory = (userId: string) =>
  api.get(`/orders?userId=${userId}`);
