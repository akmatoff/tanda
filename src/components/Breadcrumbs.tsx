function Breadcrumbs() {
  return (
    <div className="hidden lg:flex gap-2 text-gray cursor-pointer">
      <span>Главная</span> / <span>Бытовая техника</span> /
      <span className="text-primary">Стиральная машина</span>
    </div>
  );
}

export default Breadcrumbs;
