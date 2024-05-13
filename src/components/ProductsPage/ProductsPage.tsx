"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { ChangeEvent, useEffect } from "react";

import ProductCard from "../ProductCard/ProductCard";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import useProductStore from "@/store/productStore";

const ProductsPage = () => {
  const {
    totalProducts,
    limit,
    skip,
    products,
    loading,
    fetchProducts,
    fetchSearchedProducts,
  } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [skip, limit, fetchProducts]);

  const nextPage = () => {
    const nextSkip = skip + limit;
    useProductStore.setState({ skip: nextSkip });
  };

  const prevPage = () => {
    const prevSkip = Math.max(skip - limit, 0);
    useProductStore.setState({ skip: prevSkip });
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    fetchSearchedProducts(query);
  };

  return (
    <div className="flex flex-col max-w-[1400px] min-h-screen m-auto mb-12 px-[16px] pt-[70px]">
      <h2 className="w-[150px] mx-auto my-[50px] text-center text-xl text-primary-light-blue rounded-2 shadow-blue">
        Shop All
      </h2>

      <div className="w-[300px] mx-auto mb-[50px]">
        <Input
          type="search"
          placeholder="Search products..."
          onChange={handleSearchChange}
          className="w-full px-4 py-2 text-primary-light-blue border border-gray-300 rounded-md focus:outline-none focus:border-primary-light-blue"
        />
      </div>

      {loading ? (
        <div className="text-center mt-[10%]">Loading...</div>
      ) : (
        <>
          {!!products.length ? (
            <>
              <div className="grid grid-cols-6 xl-max:grid-cols-4 lg-max:grid-cols-2 sm-max:grid-cols-1 gap-[15px]">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              <div className="flex justify-center gap-4 mt-[25px]">
                <Button
                  onClick={prevPage}
                  disabled={skip === 0}
                  className="w-[120px] h-[30px] mb-[10px] border !rounded-2 border-primary-light-blue hover:text-primary-dark-blue hover:bg-primary-light-blue"
                >
                  <ChevronLeft /> Previous
                </Button>

                <Button
                  className="w-[120px] h-[30px] mb-[10px] border !rounded-2 border-primary-light-blue hover:text-primary-dark-blue hover:bg-primary-light-blue"
                  disabled={skip + limit >= totalProducts}
                  onClick={nextPage}
                >
                  Next <ChevronRight />
                </Button>
              </div>
            </>
          ) : (
            <p className="w-[350px] mx-auto my-[50px] text-center text-xl text-primary-light-blue rounded-2 shadow-blue">
              No results found.
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default ProductsPage;
