import { IMockProduct } from "@/types";
import ProductImage from "@/assets/Product main card.png";
import Button from "../Button";

import Star from "@/assets/star.svg?react";
import StarGray from "@/assets/star-gray.svg?react";

interface Props {
  product: IMockProduct;
}

function ProductCard({ product }: Props) {
  return (
    <div className="flex flex-col min-w-[167px] gap-2">
      <img src={ProductImage} className="max-h-[369px]" />

      <div className="flex flex-col">
        <h1 className="font-semibold">{product.title}</h1>
        <p className="text-gray">{product.category}</p>
        <div className="flex items-center text-sm">
          {Array.from(Array(6)).map((_, index) =>
            !!product.reviewsCount && index < product.rate ? (
              <Star key={index} className="w-4 h-4" />
            ) : (
              <StarGray key={index} className="w-4 h-4" />
            )
          )}
          <span className="ml-1 line-clamp-1">
            {product.reviewsCount} отзывов
          </span>
        </div>
        <p className="font-bold">{product.price + " сом"}</p>
      </div>

      <Button text="Купить сейчас" />
    </div>
  );
}

export default ProductCard;
