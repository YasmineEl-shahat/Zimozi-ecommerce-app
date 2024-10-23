import axios from "axios";
const api = axios.create({ baseURL: "https://fakestoreapi.com" });

export const fetchProducts = (page: number) =>
  api.get(`/products?limit=10&page=${page}`);
