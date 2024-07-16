import Logo from "@/assets/logo.svg?react";
import Search from "@/assets/search.svg?react";
import Account from "@/assets/account.svg?react";
import ShoppingCart from "@/assets/shopping-cart.svg?react";
import Menu from "@/assets/burger.svg?react";

function MobileHeader() {
  return (
    <header className="h-[72px] px-5 flex items-center justify-between lg:hidden">
      <Logo />

      <div className="flex gap-5">
        <Search />
        <Account />
        <ShoppingCart />
        <Menu />
      </div>
    </header>
  );
}

export default MobileHeader;
