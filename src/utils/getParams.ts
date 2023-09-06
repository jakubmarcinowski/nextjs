export type SearchParams = { [key: string]: string | string[] | undefined };

export const getPageParams = (searchParams?: SearchParams) =>
  searchParams?.page ? parseInt(searchParams.page.toString()) : undefined;

export const getQueryParams = (searchParams?: SearchParams) =>
  searchParams?.query?.toString() || undefined;

export const getCategoryParams = (searchParams?: SearchParams) =>
  searchParams?.category && searchParams?.category !== "0"
    ? parseInt(searchParams.category.toString())
    : undefined;
