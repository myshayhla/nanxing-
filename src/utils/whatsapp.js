const WHATSAPP_NUMBER =
  import.meta.env.VITE_WHATSAPP_NUMBER ?? "994551234567";

export function formatPhoneNumber(number) {
  const digits = String(number).replace(/\D/g, "");

  if (digits.startsWith("994") && digits.length === 12) {
    return `+994 ${digits.slice(3, 5)} ${digits.slice(5, 8)} ${digits.slice(8, 10)} ${digits.slice(10)}`;
  }

  if (digits.length > 0) {
    return `+${digits}`;
  }

  return "";
}

export const CONTACT_PHONE_RAW = WHATSAPP_NUMBER;
export const CONTACT_PHONE_DISPLAY = formatPhoneNumber(WHATSAPP_NUMBER);

export function getWhatsAppOfferUrl(productName = "") {
  const message = productName
    ? `Salam, ${productName} məhsulu üçün təklif almaq istəyirəm.`
    : "Salam, məhsul üçün təklif almaq istəyirəm.";

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppContactUrl() {
  const message = "Salam, sizinlə əlaqə saxlamaq istəyirəm.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppOrderUrl() {
  const message = "Salam, sifariş vermək istəyirəm.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
