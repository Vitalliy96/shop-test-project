"use client";

import ProductCard from "../ProductCard/ProductCard";

import useProductStore from "@/store/productStore";

const ProductsPage = () => {
  const { products } = useProductStore();

  return (
    <div className="flex flex-col max-w-[1400px] min-h-screen m-auto mb-12 px-[16px] pt-[70px]">
      <h2 className="w-[150px] mx-auto my-[50px] text-center text-xl text-primary-light-blue rounded-2 shadow-blue">
        Shop All
      </h2>

      <div className="grid grid-cols-6 xl-max:grid-cols-4 lg-max:grid-cols-2 sm-max:grid-cols-1 gap-[15px]">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
