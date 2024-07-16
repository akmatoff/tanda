import Logo from "@/assets/logo.svg";
import Search from "@/assets/Search.svg";
import Account from "@/assets/Account.svg";
import ShoppingCart from "@/assets/Shopping cart.svg";
import Menu from "@/assets/burger.svg";

function MobileHeader() {
  return (
    <header className="h-[72px] px-5 flex items-center justify-between">
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
