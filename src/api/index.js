import { API_ENDPOINTS } from "./config";
import { apiRequest } from "./request";

export { apiRequest, ApiError } from "./request";
export { API_BASE_URL, API_ENDPOINTS } from "./config";

export const getSettings = (options) =>
  apiRequest(API_ENDPOINTS.settings, options);

export const subscribe = (data, options) =>
  apiRequest(API_ENDPOINTS.subscribe, {
    ...options,
    method: "POST",
    body: data,
  });

export const getNews = (options) =>
  apiRequest(API_ENDPOINTS.news, options);

export const getNewsById = (id, options) =>
  apiRequest(`${API_ENDPOINTS.news}/${id}`, options);

export const getProducts = (options) =>
  apiRequest(API_ENDPOINTS.products, options);

export const getProductById = (id, options) =>
  apiRequest(`${API_ENDPOINTS.products}/${id}`, options);

export const getProductCategories = (options) =>
  apiRequest(API_ENDPOINTS.productsCategories, options);
