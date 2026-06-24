export const FILTER_GROUP_CATEGORY = "category";
export const FILTER_GROUP_DATE = "date";

export const DATE_FILTER_OPTIONS = [
  { id: "this_week", label: "Bu həftə" },
  { id: "this_month", label: "Bu ay" },
  { id: "this_year", label: "Bu il" },
  { id: "older", label: "Köhnə" },
  { id: "last_3_months", label: "Son 3 ay" },
  { id: "last_6_months", label: "Son 6 ay" },
  { id: "last_year", label: "Son il" },
  { id: "2024", label: "2024" },
  { id: "2023", label: "2023" },
  { id: "2022", label: "2022" },
];

function startOfDay(date) {
  const value = new Date(date);
  value.setHours(0, 0, 0, 0);
  return value;
}

export function matchesDateFilter(createdAt, filterId) {
  const date = new Date(createdAt);
  if (Number.isNaN(date.getTime())) return false;

  const now = new Date();

  if (/^\d{4}$/.test(filterId)) {
    return date.getFullYear() === Number(filterId);
  }

  switch (filterId) {
    case "this_week": {
      const start = startOfDay(now);
      const day = start.getDay();
      const mondayOffset = day === 0 ? 6 : day - 1;
      start.setDate(start.getDate() - mondayOffset);
      return date >= start;
    }
    case "this_month":
      return (
        date.getMonth() === now.getMonth() &&
        date.getFullYear() === now.getFullYear()
      );
    case "this_year":
      return date.getFullYear() === now.getFullYear();
    case "older": {
      const oneYearAgo = new Date(now);
      oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
      return date < oneYearAgo;
    }
    case "last_3_months": {
      const from = new Date(now);
      from.setMonth(from.getMonth() - 3);
      return date >= from;
    }
    case "last_6_months": {
      const from = new Date(now);
      from.setMonth(from.getMonth() - 6);
      return date >= from;
    }
    case "last_year": {
      const from = new Date(now);
      from.setFullYear(from.getFullYear() - 1);
      return date >= from;
    }
    default:
      return false;
  }
}

export function filterProducts(products, selectedFilters) {
  const selectedCategories = selectedFilters[FILTER_GROUP_CATEGORY] || [];
  const selectedDates = selectedFilters[FILTER_GROUP_DATE] || [];

  return products.filter((product) => {
    const categoryMatch =
      !selectedCategories.length ||
      selectedCategories.includes(String(product.categoryId));

    const dateMatch =
      !selectedDates.length ||
      selectedDates.some((filterId) =>
        matchesDateFilter(product.createdAt, filterId)
      );

    return categoryMatch && dateMatch;
  });
}
