import { API_BASE_URL } from "./config";

class ApiError extends Error {
  constructor(status, message, data = null) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

async function parseResponse(response) {
  if (response.status === 204) {
    return null;
  }

  const contentType = response.headers.get("content-type");
  if (contentType?.includes("application/json")) {
    return response.json();
  }

  return response.text();
}

/**
 * Universal API sorğusu — yalnız endpoint və options dəyişir.
 * @param {string} endpoint - API endpoint yolu (məs: "news", "products")
 * @param {RequestInit & { body?: unknown }} options
 */
export async function apiRequest(endpoint, options = {}) {
  const { body, headers = {}, ...rest } = options;

  const url = `${API_BASE_URL}/${endpoint}`;

  const config = {
    method: "GET",
    headers: {
      Accept: "application/json",
      ...headers,
    },
    ...rest,
  };

  if (body !== undefined) {
    config.headers = {
      "Content-Type": "application/json",
      ...config.headers,
    };
    config.body = JSON.stringify(body);
  }

  const response = await fetch(url, config);
  const data = await parseResponse(response);

  if (!response.ok) {
    const message =
      (typeof data === "object" && data?.message) ||
      response.statusText ||
      "Sorğu uğursuz oldu";

    throw new ApiError(response.status, message, data);
  }

  return data;
}

export { ApiError };
