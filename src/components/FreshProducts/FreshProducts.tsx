import { useRouter } from "next/navigation";

import ProductCard from "../ProductCard/ProductCard";
import { Button } from "../ui/button";

import { Product } from "@/models/product";

interface Props {
  products: Product[];
}

const FreshProducts = ({ products }: Props) => {
  const router = useRouter();

  return (
    <div className="mb-[50px]">
      <div className="flex justify-between ">
        <h2 className="mb-5 text-lg uppercase text-primary-yellow">
          Fresh Products
        </h2>
        <Button
          onClick={() => router.push("/products")}
          className="border border-primary-light-blue shadow-blue rounded-3 text-primary-yellow transition-all duration-500 hover:text-primary-dark-blue  hover:bg-primary-light-blue"
        >
          Shop All
        </Button>
      </div>

      <div className="grid grid-cols-5 xl-max:grid-cols-4 lg-max:grid-cols-2 sm-max:grid-cols-1 gap-[15px]">
        {products.slice(10, 20).map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default FreshProducts;
