/** @format */
import Image from "next/image";
import {
  HomeIcon,
  PlusIcon,
  SearchIcon,
  StarIcon,
} from "@heroicons/react/solid";

// import
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";


export const Header = () => {
  const session = true;
  const router = useRouter();
  // const [session, changeState] = useState()
  return (
    // {session && (

    // )}
    <div>
    <div className="sticky bg-[#040714] top-0 z-[1000] h-[72px] flex item-center px-10 md:px-12">
      <Image
        src="/images/logo.svg"
        width={80}
        height={80}
        className="cursor-pointer"
        onClick={() => router.push("movie")}
      />

      {session && (
        <nav className="hidden md:flex p-4 space-x-6 ml-10 items-center">
          <a className="header-link group">
            <HomeIcon className="h-4" />
            <span className="span">Home</span>
          </a>
          <a className="header-link group">
            <PlusIcon className="h-4" />
            <span className="span">About</span>
          </a>
          <Link href="movie">
            <a className="header-link group">
              <StarIcon className="h-4" />
              <span className="span">Movie</span>
            </a>
          </Link>
          <a className="header-link group">
            <SearchIcon className="h-4" />
            <span className="span">Search</span>
          </a>
        </nav>
      )}

      {!session ? (
        
        <button
          className="ml-auto uppercase border font-medium tracking-wide p-1 rounded hover:text-black transition duration-200 hover:bg-white h-min my-auto"
          onClick={session}>
          Login
        </button>
      ) : (
        <div className="ml-auto uppercase border font-medium tracking-wide p-1 rounded hover:text-black transition duration-200 hover:bg-white h-min my-auto">
        <p onClick={!session}>Welcome</p>
        </div>
      )}
    </div>

    
    </div>


  );
};
