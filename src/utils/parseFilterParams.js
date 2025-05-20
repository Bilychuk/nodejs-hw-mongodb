import { contactTypeList } from '../constants/index.js';

const parseType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;

  const isContactType = contactTypeList.includes(type) ? type : null;
  return isContactType;
};

const parseBoolean = (value) => {
  if (typeof value !== 'string') return;
  if (!['true', 'false'].includes(value)) return;
  if (value === 'true') return true;
  if (value === 'false') return false;
};

export const parsedFilterParams = (query) => {
  const { type, isFavourite } = query;
  const parsedIsFavourite = parseBoolean(isFavourite);
  const parsedContactType = parseType(type);
  return {
    type: parsedContactType,
    isFavourite: parsedIsFavourite,
  };
};
