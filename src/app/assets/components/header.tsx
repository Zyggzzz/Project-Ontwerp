"use client";

import { Search, ShoppingCart, User, Heart, Settings } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div
        id="top-header"
        className="flex h-10 w-screen flex-row items-center justify-between bg-white px-10 font-inria font-bold"
      >
        <div className="flex h-10 w-[175px] items-center justify-between">
          <Link href="">Recycle</Link>
          <Link href="">About us</Link>
        </div>
        <div className="">
          <p>Free standard shipping (ad)</p>
        </div>
        <div className="flex h-10 w-[175px] items-center justify-end"></div>
      </div>

      <div
        id="bottom-header"
        className="flex h-14 w-screen flex-row items-center justify-between bg-DarkBlue px-10 font-inria font-bold"
      >
        <div className="flex h-14 w-[175px] items-center justify-around text-lg">
          <Link href="">Shop</Link>
          <Link href="">Sustainability</Link>
        </div>
        <div className="flex h-14 items-center text-3xl">
          <h1>Vinland</h1>
        </div>
        <div className="flex h-14 w-[175px] flex-row items-center justify-around">
          <div className="group flex h-[50px] w-[50px] items-center justify-center">
            <Search
              className="cursor-pointer transition-colors group-hover:stroke-white"
              size={30}
              strokeWidth={1.75}
              onClick={(e) => {
                e.preventDefault();
                console.log("test");
              }}
            />
          </div>
          <div className="justify-ce group flex h-[50px] w-[50px] cursor-pointer items-center">
            <User
              className="cursor-pointer transition-colors group-hover:stroke-white"
              size={30}
              strokeWidth={1.75}
              onClick={(e) => {
                e.preventDefault();
                console.log("test");
              }}
            />
          </div>
          <div className="group flex h-[50px] w-[50px] items-center justify-center">
            <Heart
              className="cursor-pointer transition-colors group-hover:stroke-white"
              size={30}
              strokeWidth={1.75}
              onClick={(e) => {
                e.preventDefault();
                console.log("test");
              }}
            />
          </div>
          <div className="group flex h-[50px] w-[50px] items-center justify-center">
            <ShoppingCart
              className="cursor-pointer transition-colors group-hover:stroke-white"
              size={30}
              strokeWidth={1.75}
              onClick={(e) => {
                e.preventDefault();
                console.log("test");
              }}
            />
          </div>
          <div className="group flex h-[50px] w-[50px] items-center justify-center">
            <Settings
              className="transition-color cursor-pointer group-hover:stroke-white"
              size={30}
              strokeWidth={1.75}
              onClick={(e) => {
                e.preventDefault();
                console.log("test");
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
