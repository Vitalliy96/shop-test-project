"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

import Image from "next/image";

import { ChevronLeft, Star } from "lucide-react";

import { Button } from "../ui/button";

import useProductStore from "@/store/productStore";

const ProductPage = () => {
  const { selectedProduct, fetchProductById } = useProductStore();
  const { productId } = useParams();
  const router = useRouter();

  useEffect(() => {
    fetchProductById(productId);
  }, [productId]);

  return (
    <div className="flex flex-col max-w-[1400px] min-h-screen m-auto px-[16px] pt-[70px]">
      <div className="grid grid-cols-2 lg-max:grid-cols-1 gap-4 p-4">
        <div className="flex flex-col gap-4 h-[calc(100vh-100px)] lg-max:h-[calc(100vh-300px)] overflow-auto no-scrollbar">
          {selectedProduct?.images.map((image) => (
            <div>
              <Image
                src={image}
                className="object-contain rounded-1"
                width={200}
                height={100}
                layout="responsive"
                alt={"s"}
              />
            </div>
          ))}
        </div>

        <div>
          <Button
            onClick={() => router.back()}
            variant="default"
            className="flex mx-auto h-[30px] mb-[10px] border !rounded-2 border-primary-light-blue"
          >
            <ChevronLeft />
            Back
          </Button>

          <p className="mb-4 px-1 text-center text-primary-light-blue text-xl">
            {selectedProduct?.title}
          </p>

          <ul className="divide-y divide-primary-light-blue capitalize [&>*]:p-2 [&>li>span]:text-primary-yellow [&>li>span]">
            <li>
              <span>Brand:</span> {selectedProduct?.brand}
            </li>
            <li>
              <span>Category:</span> {selectedProduct?.category}
            </li>
            <li>
              <span>Price:</span>{" "}
              <b className="text-lg text-primary-light-blue">
                {selectedProduct?.price} $
              </b>
            </li>
            <li>
              <span>Rating:</span>{" "}
              {selectedProduct?.rating
                && Array.from(
                  { length: Math.round(selectedProduct.rating) },
                  (_, i) => (
                    <span key={i}>
                      <Star className="inline" color="#40a6bf" />
                    </span>
                  )
                )}
            </li>
            <li>
              <span>Description:</span> {selectedProduct?.description}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
