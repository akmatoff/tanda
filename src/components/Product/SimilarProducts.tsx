import { MOCK_PRODUCTS } from "@/constants";
import ProductCard from "./ProductCard";

function SimilarProducts() {
  return (
    <div className="flex flex-col">
      <h1 className="text-lg font-semibold mb-4">Похожие товары</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {MOCK_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default SimilarProducts;
