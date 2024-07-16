import Button from "../Button";

interface Props {
  sellingPrice?: number;
  discountedPrice?: number | null;
}

function ProductBottomCTA({ sellingPrice, discountedPrice }: Props) {
  return (
    <div className="flex items-center justify-between w-screen h-[76px] px-5 md:px-40 lg:hidden fixed bottom-0 left-0 border-t-2 border-secondary bg-white">
      <div>
        <div className="text-primary font-bold text-[16px]">
          {sellingPrice} сом
        </div>
        {discountedPrice && (
          <div className="line-through text-[14px] text-gray">
            {discountedPrice} сом
          </div>
        )}
      </div>

      <Button text="Купить сейчас" />
    </div>
  );
}

export default ProductBottomCTA;
