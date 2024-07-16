import Button from "../Button";

interface Props {
  sellingPrice?: number;
  discountedPrice?: number | null;
}

function ProductCTA(props: Props) {
  const { sellingPrice, discountedPrice } = props;

  return (
    <div className="hidden lg:flex flex-col gap-5 rounded-primary px-2 py-10">
      <div className="flex gap-4 items-center">
        <div className="text-primary font-bold text-[24px]">
          {sellingPrice} сом
        </div>
        {discountedPrice && (
          <div className="line-through text-[20px] text-gray">
            {discountedPrice} сом
          </div>
        )}
      </div>

      <Button text="Купить сейчас" />

      <Button text="Оформить в кредит" variant="secondary" />
    </div>
  );
}

export default ProductCTA;
