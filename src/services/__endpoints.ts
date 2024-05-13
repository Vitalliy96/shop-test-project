const products = "products";

export const BASE_URL = "https://dummyjson.com";

export const ENDPOINTS = {
  products: {
    params: (limit: number, skip: number) =>
      `/${products}?limit=${limit}&skip=${skip}`,
    search: (query: string | string[]) => `/${products}/search?q=${query}`,
    byId: (id: string | string[]) => `/${products}/${id}`,
  },
};
