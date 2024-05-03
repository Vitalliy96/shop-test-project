import create from "zustand";
import axios from "axios";

import { Product } from "@/models/product";

interface ProductState {
  products: Product[];
  selectedProduct: Product | null;
  loading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  fetchProductById: (id: string | string[]) => Promise<void>;
}

const initialState: ProductState = {
  products: [],
  selectedProduct: null,
  loading: false,
  error: null,
  fetchProducts: async () => {},
  fetchProductById: async () => {},
};

const useProductStore = create<ProductState>((set) => ({
  ...initialState,

  fetchProducts: async () => {
    set({ loading: true });
    try {
      const response = await axios.get("https://dummyjson.com/products");
      set({
        products: response.data.products,
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
}));

useProductStore.getState().fetchProducts();

export default useProductStore;
