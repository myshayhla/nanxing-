import { extractList } from "./apiHelpers";
import { formatPhoneNumber } from "./whatsapp";

const SOCIAL_DEFAULTS = {
  linkedin:
    import.meta.env.VITE_SOCIAL_LINKEDIN ??
    "https://www.linkedin.com/company/nanxing/",
  instagram:
    import.meta.env.VITE_SOCIAL_INSTAGRAM ??
    "https://www.instagram.com/nanxing/",
  facebook:
    import.meta.env.VITE_SOCIAL_FACEBOOK ?? "https://www.facebook.com/nanxing/",
};

export function extractSettings(response) {
  const list = extractList(response);
  return list[0] ?? null;
}

export function formatSettingsMobile(mobile) {
  if (!mobile) return "";

  const digits = String(mobile).replace(/\D/g, "");

  if (digits.length >= 9) {
    return formatPhoneNumber(digits);
  }

  return mobile;
}

export function getSocialUrl(platform, value) {
  const fallback = SOCIAL_DEFAULTS[platform];

  if (!value) return fallback;

  const trimmed = String(value).trim();

  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }

  if (/linkedin\.com|instagram\.com|facebook\.com|fb\.com/i.test(trimmed)) {
    return trimmed.startsWith("http") ? trimmed : `https://${trimmed}`;
  }

  const handle = trimmed.replace(/^@/, "").replace(/^\/+/, "");

  if (!handle || handle.includes(" ")) {
    return fallback;
  }

  switch (platform) {
    case "linkedin":
      return handle.includes("/")
        ? `https://www.linkedin.com/${handle}`
        : `https://www.linkedin.com/company/${handle}`;
    case "instagram":
      return `https://www.instagram.com/${handle}`;
    case "facebook":
      return `https://www.facebook.com/${handle}`;
    default:
      return fallback;
  }
}

export function buildSocialLinks(settings) {
  return [
    {
      id: "linkedin",
      url: getSocialUrl("linkedin", settings?.linkedin),
    },
    {
      id: "instagram",
      url: getSocialUrl("instagram", settings?.instagram),
    },
    {
      id: "facebook",
      url: getSocialUrl("facebook", settings?.facebook),
    },
  ];
}

export function toExternalUrl(url) {
  if (!url) return null;

  const value = String(url).trim();

  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  if (value.includes(".") && !value.includes(" ")) {
    return `https://${value}`;
  }

  return null;
}
