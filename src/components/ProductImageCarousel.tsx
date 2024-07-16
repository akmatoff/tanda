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
    <div>
      <img src={images?.[0]?.url || ""} />
    </div>
  );
}

export default ProductImageCarousel;
