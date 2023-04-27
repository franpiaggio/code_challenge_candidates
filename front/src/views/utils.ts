import { User } from "../state/initialState";
import { FilterType } from "./Candidates";

// Todo: receive a list of props to look
// Example: ["name", "location"] and only look at those props
export function filterByText(item: any, searchFilter: string) {
  if (!searchFilter || searchFilter.trim().length === 0) {
    return item;
  }
  for (const prop in item) {
    if (
      typeof item[prop] === "string" &&
      item[prop]
        .trim()
        .toLowerCase()
        .includes(searchFilter.trim().toLowerCase())
    ) {
      return item;
    }
  }
}

export function filterByType(item: User, filterType: FilterType) {
  if (!filterType) {
    return item;
  }
  if (filterType === "rejected") {
    return item.reason && item.reason.length > 0;
  }
  return !item.reason || !item.reason.length;
}
