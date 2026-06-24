const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? "https://api.nanxing.az/api";

const API_ENDPOINTS = {
  settings: import.meta.env.VITE_API_ENDPOINT_SETTINGS ?? "settings",
  subscribe: import.meta.env.VITE_API_ENDPOINT_SUBSCRIBE ?? "subscribe",
  news: import.meta.env.VITE_API_ENDPOINT_NEWS ?? "news",
  products: import.meta.env.VITE_API_ENDPOINT_PRODUCTS ?? "products",
  productsCategories:
    import.meta.env.VITE_API_ENDPOINT_PRODUCTS_CATEGORIES ??
    "products-categories",
};

export { API_BASE_URL, API_ENDPOINTS };
