import { useQuery } from "@apollo/client";
import { useMediaQuery } from "react-responsive";
import { GET_PRODUCT_DETAILS } from "../queries";
import { BarcodeQuery } from "@/__generated__/graphql";
import ProductBottomCTA from "@/components/Product/ProductBottomCTA";
import ProductImageCarousel from "@/components/Product/ProductImageCarousel";
import ProductCTA from "@/components/Product/ProductCTA";
import ReviewsBadge from "@/components/Product/ReviewsBadge";
import Reviews from "@/components/Reviews/Rewiews";
import SimilarProducts from "@/components/Product/SimilarProducts";

function ProductDetails() {
  const isMobile = useMediaQuery({ width: 768 });

  const { loading, error, data } = useQuery<BarcodeQuery>(GET_PRODUCT_DETAILS);

  if (loading) return <div>Загрузка...</div>;

  if (error) return <div>Ошибка</div>;

  return data ? (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5 lg:flex-row">
        <section className="flex-[1_1_10%]">
          <ProductImageCarousel images={data.barcode?.images || []} />
        </section>

        <div className="flex flex-col flex-[1_1_10%] gap-6">
          <h1 className="text-[24px] font-bold">{data.barcode?.title}</h1>

          <section>
            <h1 className="text-lg">Название магазина</h1>
            <p className="text-md text-gray">Бренд</p>
          </section>

          <ReviewsBadge rating={4.9} reviewsCount={10} />

          <section>
            <h1 className="text-lg font-semibold">Описание</h1>
            <p>{data.barcode?.description}</p>
          </section>

          <h3 className="text-[16px] underline">Смотреть характеристики</h3>

          {isMobile && <Reviews />}

          {isMobile && <SimilarProducts />}
        </div>

        <div className="flex-[1_1_0%]">
          <ProductCTA sellingPrice={data.barcode?.sellingPrice} />
        </div>
      </div>

      {!isMobile && <Reviews />}

      {!isMobile && <SimilarProducts />}

      <ProductBottomCTA
        sellingPrice={data.barcode?.sellingPrice}
        discountedPrice={data.barcode?.discountedPrice}
      />
    </div>
  ) : null;
}

export default ProductDetails;
