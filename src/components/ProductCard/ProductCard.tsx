import Image from "next/image";

import { Info } from "lucide-react";

import { Product } from "@/types/productTypes";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => (
  <div className="overflow-hidden relative flex flex-col justify-between border rounded-1 border-primary-light-blue bg-primary-dark-blue">
    <div className="flex justify-center h-[250px] p-2 mb-4 bg-white border-b border-b-primary-light-blue">
      <Image
        src={product.images[0]}
        className="object-contain"
        width={200}
        height={100}
        layout="responsive"
        alt={product.title}
      />
    </div>

    <div className="absolute top-1 right-1">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Info
              className="bg-primary-dark-blue rounded-10"
              size={28}
              color="#fff"
              enableBackground={1}
              strokeWidth={2}
            />
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>{product.description}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>

    <p className="mb-4 px-1 text-center text-primary-light-blue text-sm">
      {product.title}
    </p>

    <ul className="divide-y divide-primary-light-blue capitalize [&>*]:p-2 [&>li>span]:text-primary-yellow [&>li>span]">
      <li>
        <span>Brand:</span> {product.brand}
      </li>
      <li>
        <span>Category:</span> {product.category}
      </li>
      <li>
        <span>Price:</span>{" "}
        <b className="text-lg text-primary-light-blue">{product.price} $</b>
      </li>
      <li>
        <span>Rating:</span> {product.rating}
      </li>
    </ul>
  </div>
);

export default ProductCard;
