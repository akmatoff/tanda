import Logo from "@/assets/logo.svg?react";
import Instagram from "@/assets/ri_instagram-line.svg?react";
import WhatsApp from "@/assets/ri_whatsapp-line.svg?react";

import { FOOTER_ELEMENTS_GROUP } from "@/constants";

function Footer() {
  return (
    <footer className="flex flex-col gap-6 md:flex-row md:justify-between w-full min-h-[268px] md:bg-secondary px-5 md:px-[70px] lg:px-[120px] py-11 mb-[76px] lg:mb-0">
      <div className="flex flex-col gap-5">
        <Logo />

        <div className="flex gap-2">
          <Instagram className="w-5 h-5 md:w-7 md:h-7" />
          <WhatsApp className="w-5 h-5 md:w-7 md:h-7" />
        </div>
      </div>

      {FOOTER_ELEMENTS_GROUP.map((group, index) => (
        <div key={index} className="flex flex-col">
          <h1 className="font-bold text-[16px] md:text-[20px]">
            {group.groupTitle}
          </h1>
          {group.elements.map((element, index) => (
            <a key={index} className="text-[16px] md:text-[18px]">
              {element}
            </a>
          ))}
        </div>
      ))}
    </footer>
  );
}

export default Footer;
