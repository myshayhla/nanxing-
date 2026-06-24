import {
  extractList,
  resolveImageUrl,
} from "./apiHelpers";

export function formatNewsDate(dateString) {
  if (!dateString) return "";

  return new Intl.DateTimeFormat("az-AZ", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(dateString));
}

export function extractNewsList(response) {
  return extractList(response);
}

export { resolveImageUrl };
