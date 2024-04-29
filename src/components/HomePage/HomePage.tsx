"use client";

import Banner from "../Banner/Banner";
import FreshProducts from "../FreshProducts/FreshProducts";
import Promo from "../Promo/Promo";

import useProductStore from "@/store/productStore";

const HomePage = () => {
  const { products } = useProductStore();

  return (
    <div className="flex-auto max-w-[1400px] m-auto px-[16px] pt-[70px]">
      <Banner />
      <Promo />
      <FreshProducts products={products} />
    </div>
  );
};

export default HomePage;
