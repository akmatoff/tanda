import { useQuery } from "@apollo/client";
import { GET_PRODUCT_DETAILS } from "../queries";
import { BarcodeQuery } from "@/__generated__/graphql";

function ProductDetails() {
  const { loading, error, data } = useQuery<BarcodeQuery>(GET_PRODUCT_DETAILS);

  if (loading) return <div>Загрузка...</div>;

  if (error) return <div>Ошибка</div>;

  return data ? (
    <div>
      <div className="flex flex-col gap-2">
        <h1 className="text-[24px] font-bold">{data.barcode?.title}</h1>
        <h1 className="text-lg font-semibold">Описание</h1>
        <p>{data.barcode?.description}</p>
      </div>
    </div>
  ) : null;
}

export default ProductDetails;
