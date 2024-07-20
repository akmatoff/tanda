import Star from "@/assets/star.svg?react";
import Write from "@/assets/write.svg?react";
import { MOCK_REVIEWS } from "@/constants";
import ReviewCard from "./ReviewCard";
import Button from "../Button";

function Reviews() {
  return (
    <section className="flex flex-col gap-4">
      <h1 className="font-semibold block border-b-2 border-black w-16">
        Отзывы
      </h1>

      <div className="flex justify-between">
        <div className="flex items-center">
          <span className="mr-2">4.9</span>
          {Array.from(Array(6)).map((_, index) => (
            <Star key={index} />
          ))}
          <span className="ml-5 text-gray">60 отзывов</span>
        </div>

        <span className="hidden lg:flex gap-3">
          <Write /> Написать отзыв
        </span>
      </div>

      <div className="flex gap-4 overflow-x-scroll no-scrollbar">
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

      <div className="hidden lg:block">
        <Button text="Смотреть все отзывы" variant="secondary" />
      </div>
    </section>
  );
}

export default Reviews;
