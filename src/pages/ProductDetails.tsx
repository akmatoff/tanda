import { useQuery } from "@apollo/client";
import { GET_PRODUCT_DETAILS } from "../queries";
import { BarcodeQuery } from "@/__generated__/graphql";
import ProductBottomCTA from "@/components/ProductBottomCTA";
import Button from "@/components/Button";
import ProductImageCarousel from "@/components/ProductImageCarousel";
import ProductCTA from "@/components/ProductCTA";

function ProductDetails() {
  const { loading, error, data } = useQuery<BarcodeQuery>(GET_PRODUCT_DETAILS);

  if (loading) return <div>Загрузка...</div>;

  if (error) return <div>Ошибка</div>;

  return data ? (
    <div>
      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex-[2_1_0%]">
          <ProductImageCarousel images={data.barcode?.images || []} />
        </div>

        <div className="flex flex-col flex-[1_1_0%] gap-6">
          <h1 className="text-[24px] font-bold">{data.barcode?.title}</h1>

          <div>
            <h1 className="text-lg font-semibold">Описание</h1>
            <p>{data.barcode?.description}</p>
          </div>

          <h3 className="text-[16px] underline">Смотреть характеристики</h3>
        </div>

        <div className="flex-[1_1_0%]">
          <ProductCTA sellingPrice={data.barcode?.sellingPrice} />
        </div>
      </div>

      <ProductBottomCTA
        sellingPrice={data.barcode?.sellingPrice}
        discountedPrice={data.barcode?.discountedPrice}
      />
    </div>
  ) : null;
}

export default ProductDetails;
