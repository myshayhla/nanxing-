import { API_BASE_URL } from "../api/config";

// import { API_BASE_URL } from "../api/config";

const IMAGE_EXT_REGEX = /\.(jpg|jpeg|png|webp|gif|svg|avif|bmp)(\?.*)?$/i;

export function resolveImageUrl(image, fallback) {
  if (!image) return fallback;

  if (image.startsWith("http://") || image.startsWith("https://")) {
    return IMAGE_EXT_REGEX.test(image) ? image : fallback;
  }

  const looksLikeFile =
    IMAGE_EXT_REGEX.test(image) ||
    image.includes("/storage/") ||
    image.includes("/uploads/");

  if (!looksLikeFile) {
    return fallback;
  }

  const origin = API_BASE_URL.replace(/\/api\/?$/, "");
  return `${origin}${image.startsWith("/") ? image : `/${image}`}`;
}

export function extractList(response) {
  if (!response) return [];
  if (Array.isArray(response)) return response;
  if (Array.isArray(response.data)) return response.data;
  if (Array.isArray(response.data?.data)) return response.data.data;
  return [];
}

export function extractItem(response) {
  if (!response) return null;
  if (response.data && !Array.isArray(response.data)) return response.data;
  return response;
}
