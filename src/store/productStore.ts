import create from "zustand";
import axios from "axios";

import { Product } from "@/types/productTypes";

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
  fetchProducts: async () => {},
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
}));

useProductStore.getState().fetchProducts();

export default useProductStore;
