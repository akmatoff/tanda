import CarouselLengthBadge from "./CarouselLengthBadge";

interface Props {
  images: Array<{
    __typename?: "ImageType";
    id: string;
    url?: string | null;
  } | null> | null;
}

function ProductImageCarousel(props: Props) {
  const { images } = props;

  return (
    <div className="bg-secondary rounded-primary h-[430px] relative">
      <img src={images?.[0]?.url || ""} className="w-full h-full" />

      <CarouselLengthBadge current={1} length={images?.length || 0} />
    </div>
  );
}

export default ProductImageCarousel;
