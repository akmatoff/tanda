import { useQuery } from "@apollo/client";
import { GET_PRODUCT_DETAILS } from "../queries";

function ProductDetails() {
  const { loading, error, data } = useQuery(GET_PRODUCT_DETAILS);

  return <div></div>;
}

export default ProductDetails;
