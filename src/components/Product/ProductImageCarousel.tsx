import { useState } from "react";
import cn from "classnames";

import { BASE_URL, IMAGE_URL } from "@/constants";
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

  const [currentIndex, setCurrentIndex] = useState(0);

  const getImageSource = (url: string) =>
    IMAGE_URL + encodeURIComponent(BASE_URL.concat(url)) + "&q=75&w=256";

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex gap-5">
      <div className="hidden md:flex md:flex-col gap-2">
        {images?.map((image, index) => (
          <img
            src={getImageSource(image?.url || "")}
            className={cn(
              "max-w-[80px] h-[80px] rounded-[4px] flex-shrink-0 border-2",
              index === currentIndex
                ? "border-2 border-primary"
                : "border-transparent"
            )}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
      <div className="bg-secondary rounded-primary relative max-w-[500px]">
        <img
          src={getImageSource(images?.[currentIndex]?.url || "")}
          className="max-h-[560px] rounded-primary object-contain"
        />

        <CarouselLengthBadge current={1} length={images?.length || 0} />
      </div>
    </div>
  );
}

export default ProductImageCarousel;
