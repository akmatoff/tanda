import { NAV_ELEMENTS } from "@/constants";
import Menu from "@/assets/burger.svg?react";

function Navbar() {
  return (
    <div className="hidden lg:flex items-center mb-6 text-[18px]">
      <Menu className="mr-2" />
      <div className="flex gap-10">
        {NAV_ELEMENTS.map((element) => (
          <a key={element}>{element}</a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
