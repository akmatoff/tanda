import Logo from "@/assets/logo.svg?react";
import Account from "@/assets/account.svg?react";
import ShoppingCart from "@/assets/shopping-cart.svg?react";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <header className="h-[72px] w-screen px-32 items-center justify-between bg-secondary hidden lg:flex fixed z-10">
      <Logo />

      <SearchBar />

      <div className="flex gap-5">
        <div className="flex flex-col items-center">
          <Account />
          Войти
        </div>
        <div className="flex flex-col items-center">
          <ShoppingCart />
          Корзина
        </div>
      </div>
    </header>
  );
}

export default Header;
