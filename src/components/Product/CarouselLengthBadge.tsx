interface Props {
  current: number;
  length: number;
}

function CarouselLengthBadge(props: Props) {
  const { current, length } = props;

  return (
    <div className="py-2 px-4 bg-badge absolute bottom-4 left-4 rounded-[100px] md:hidden">
      {current} / {length}
    </div>
  );
}

export default CarouselLengthBadge;
