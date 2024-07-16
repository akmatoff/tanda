import Star from "@/assets/star.svg?react";
import { MOCK_REVIEWS } from "@/constants";
import ReviewCard from "./ReviewCard";

function Reviews() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="font-semibold block border-b-2 border-black w-16">
        Отзывы
      </h1>

      <div className="flex items-center">
        <span className="mr-2">4.9</span>
        {Array.from(Array(6)).map((_, index) => (
          <Star key={index} />
        ))}
        <span className="ml-5 text-gray">60 отзывов</span>
      </div>

      <div className="flex gap-4 overflow-x-scroll">
        {MOCK_REVIEWS.map((review, index) => (
          <div>
            <ReviewCard
              key={index}
              date={review.date}
              name={review.name}
              rate={review.rate}
              comment={review.comment}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
