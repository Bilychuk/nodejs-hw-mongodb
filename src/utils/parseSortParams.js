import { sortOrderList } from '../constants/index.js';
import { keysOfContacts } from '../constants/index.js';

const parseSortOrder = (sortOrder) => {
  const isKnownSortOrder = sortOrderList.includes(sortOrder)
    ? sortOrder
    : sortOrderList[0];
  return isKnownSortOrder;
};

const parseSortBy = (sortBy) => {
  const isKnownSortBy = keysOfContacts.includes(sortBy)
    ? sortBy
    : keysOfContacts[0];
  return isKnownSortBy;
};
export const parseSortParams = (query) => {
  const { sortBy, sortOrder } = query;

  const parsedSortBy = parseSortBy(sortBy);
  const parsedSortOrder = parseSortOrder(sortOrder);

  return {
    sortBy: parsedSortBy,
    sortOrder: parsedSortOrder,
  };
};
