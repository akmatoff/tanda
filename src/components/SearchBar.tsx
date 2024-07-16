import Search from "@/assets/search.svg?react";

function SearchBar() {
  return (
    <div className="flex items-center gap-[8px] w-[694px] h-[40px] py-[11px] px-[19px] bg-white rounded-[16px]">
      <Search width={18} height={18} />
      <input
        className="outline-none text-[16px] placeholder:text-placholder"
        placeholder="Искать на UNO"
      />
    </div>
  );
}

export default SearchBar;
