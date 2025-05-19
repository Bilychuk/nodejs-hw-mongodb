export const calculatePaginationData = (total, page, perPage) => {
  const totalPages = Math.ceil(total / perPage);
  const hasPreviousPage = page !== 1;
  const hasNextPage = page !== totalPages;

  return {
    page,
    perPage,
    totalItems: total,
    totalPages,
    hasPreviousPage,
    hasNextPage,
  };
};
