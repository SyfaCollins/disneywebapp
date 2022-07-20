/** @format */
import Image from "next/image";
import { HomeIcon, PlusIcon, SearchIcon, StarIcon } from "@heroicons/react/solid";

export const Header = () => {
  return (
    <div className="sticky bg-[#040714] top-0 z-[1000] h-[72px] flex item-center px-10 md:px-12">
      <Image
        src="/images/logo.svg"
        width={80}
        height={80}
        className="cursor-pointer"
      />

      <nav className="hidden md:flex p-4 space-x-6 ml-10 items-center">
        <a className="header-link group">
          <HomeIcon className="h-4" />
          <span className="span">Home</span>
        </a>
        <a className="header-link group">
          <PlusIcon className="h-4" />
          <span className="span">About</span>
        </a>
        <a className="header-link group">
          <StarIcon className="h-4" />
          <span className="span">About</span>
        </a>
        <a className="header-link group">
          <SearchIcon className="h-4" />
          <span className="span">Search</span>
        </a>
      </nav>
    </div>
  );
};