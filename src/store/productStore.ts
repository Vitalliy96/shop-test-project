import create from "zustand";
import axios from "axios";

import { Product } from "@/models/product";

interface ProductState {
  limit: number;
  skip: number;
  totalProducts: number;
  products: Product[];
  selectedProduct: Product | null;
  loading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  fetchProductById: (id: string | string[]) => Promise<void>;
  fetchSearchedProducts: (query: string) => Promise<void>;
}

const initialState: ProductState = {
  limit: 18,
  skip: 0,
  totalProducts: 0,
  products: [],
  selectedProduct: null,
  loading: false,
  error: null,
  fetchProducts: async () => {},
  fetchProductById: async () => {},
  fetchSearchedProducts: async () => {},
};

const useProductStore = create<ProductState>((set, get) => ({
  ...initialState,

  fetchProducts: async () => {
    set({ loading: true });
    try {
      const { limit, skip } = get();
      const response = await axios.get(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );
      set({
        products: response.data.products,
        totalProducts: response.data.total,
        loading: false,
      });
    } catch (error: any) {
      set({
        error: error.message,
        loading: false,
      });
    }
  },

  fetchProductById: async (id: string | string[]) => {
    set({ loading: true, selectedProduct: null });
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      set({
        selectedProduct: response.data,
        loading: false,
      });
    } catch (error: any) {
      set({
        error: error.message,
        loading: false,
      });
    }
  },

  fetchSearchedProducts: async (query: string) => {
    set({ loading: true });
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${query}`
      );
      set({
        products: response.data.products,
        totalProducts: response.data.total,
        loading: false,
      });
    } catch (error: any) {
      set({
        error: error.message,
        loading: false,
      });
    }
  },
}));

useProductStore.getState().fetchProducts();

export default useProductStore;
