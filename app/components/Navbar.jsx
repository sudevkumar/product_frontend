import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import logo from "@/public/logo.webp";
import Link from "next/link";
import { FaPowerOff, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-black sticky top-0 shadow-xl z-30">
      <div className=" w-1/2 flex item-center gap-6">
        <Link href="/">
          <Image src={logo} alt="sds" height={70} width={70} />
        </Link>

        <div className=" flex items-center w-[70%] bg-gray-400/15 rounded-md shadow-2xl relative">
          <input
            type="text"
            name=""
            id=""
            className=" w-[90%] py-2 px-5 bg-transparent h-full focus:outline-none text-gray-400 "
            placeholder="Search for any images that you want...."
          />
          <div className=" w-[10%] flex justify-center items-center">
            <FaSearch size={24} className="text-gray-600 cursor-pointer" />
          </div>

          {/* <div className=" h-[300px] max-h-[300px] bg-gray-800 absolute top-[72px] w-full rounded-b-md z-20 shadow-2xl">
            <p>sudev</p>
            <p>sudev</p>
            <p>sudev</p>
            <p>sudev</p>
            <p>sudev</p>
            <p>sudev</p>
            <p>sudev</p>
          </div> */}
        </div>
      </div>
      <SignedOut>
        <SignInButton forceRedirectUrl="/">
          <button className="bg-white rounded-full p-3 flex justify-center items-center">
            <FaPowerOff className=" text-gray-900" size={30} />
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: "w-12 h-12", // Adjust width and height for the avatar box
            },
          }}
        />
      </SignedIn>
    </nav>
  );
};

export default Navbar;
