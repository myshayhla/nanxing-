import {
  extractItem,
  extractList,
  resolveImageUrl,
} from "./apiHelpers";

const SPEC_FIELDS = [
  { key: "material", label: "Material" },
  { key: "measure", label: "Ölçü" },
  { key: "color", label: "Rəng" },
  { key: "ledType", label: "LED tipi" },
  { key: "ipDegree", label: "IP dərəcəsi" },
  { key: "instruction", label: "İstifadə qaydası" },
  { key: "accuracy", label: "Dəqiqlik" },
  { key: "intense", label: "İntensivlik" },
  { key: "cuttingLength", label: "Kəsmə uzunluğu" },
  { key: "maxThick", label: "Max qalınlıq" },
  { key: "speed", label: "Sürət" },
];

export function extractProductsList(response) {
  return extractList(response);
}

export function extractProduct(response) {
  return extractItem(response);
}

export function truncateDescription(text, maxLines = 3) {
  if (!text) return "";

  const lines = text.split(/\r?\n/).filter((line) => line.trim());

  if (lines.length > maxLines) {
    return `${lines.slice(0, maxLines).join(" ")}...`;
  }

  if (lines.length === 1 && text.length > 180) {
    return `${text.slice(0, 180).trim()}...`;
  }

  return text;
}

export function getProductImages(product, fallback) {
  const images = [];

  if (product?.mainImage) {
    images.push(resolveImageUrl(product.mainImage, fallback));
  }

  if (Array.isArray(product?.images)) {
    product.images.forEach((item) => {
      const url = resolveImageUrl(item.image, null);
      if (url && !images.includes(url)) {
        images.push(url);
      }
    });
  }

  return images.length ? images : [fallback];
}

export function extractCategoriesList(response) {
  return extractList(response);
}

export function buildProductSpecs(product) {
  if (!product) return [];

  return SPEC_FIELDS
    .filter(({ key }) => product[key])
    .map(({ key, label }) => ({ label, value: product[key] }));
}

export function buildMainFeatures(product, limit = 4) {
  return buildProductSpecs(product).slice(0, limit);
}

export { resolveImageUrl };
