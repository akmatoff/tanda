import Star from "@/assets/star.svg?react";

interface Props {
  reviewsCount: number;
  rating: number;
}

function ReviewsBadge({ reviewsCount, rating }: Props) {
  return (
    <div className="flex items-center gap-4">
      <span className="flex">
        <Star />
        <p className="ml-1">{rating}</p>
      </span>
      <a className="underline text-gray">{reviewsCount} отзывов</a>
    </div>
  );
}

export default ReviewsBadge;
