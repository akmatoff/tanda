import Star from "@/assets/star.svg?react";
import StarGray from "@/assets/star-gray.svg?react";

interface Props {
  name: string;
  date: string;
  rate: number;
  comment: string;
}

function ReviewCard({ name, date, rate, comment }: Props) {
  return (
    <div className="flex flex-col gap-2 bg-secondary p-3 lg:p-6 rounded-primary h-[142px] w-[259px] lg:w-auto lg:h-auto lg:min-h-[268px]">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <div className="rounded-full bg-avatar w-10 h-10 flex-shrink-0"></div>
          <div>
            <h1 className="text-md font-semibold">{name}</h1>
            <p className="text-xs text-gray">{date}</p>
          </div>
        </div>

        <div className="flex">
          {Array.from(Array(6)).map((_, index) =>
            index < rate ? (
              <Star key={index} className="w-4 h-4" />
            ) : (
              <StarGray key={index} className="w-4 h-4" />
            )
          )}
        </div>
      </div>

      <div className="text-xs line-clamp-4 flex-1">{comment}</div>

      <div className="hidden lg:flex justify-end">
        <p className="text-gray underline">Пожаловаться на отзыв</p>
      </div>
    </div>
  );
}

export default ReviewCard;
