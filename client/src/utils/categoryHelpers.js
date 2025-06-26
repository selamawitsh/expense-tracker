// utils/categoryHelpers.js
export function getCategoryClass(category) {
  switch (category) {
    case "Food":
      return "cat-food";
    case "Other":
      return "cat-other";
    case "Transport":
      return "cat-transport";
    case "Work":
      return "cat-work";
    case "Education":
      return "cat-education";
    case "Family":
      return "cat-family";
    case "Entertainment":
      return "cat-entertainment";
    default:
      return "";
  }
}
