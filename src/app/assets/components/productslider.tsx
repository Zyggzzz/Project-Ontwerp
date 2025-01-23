import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Product1 from "../images/shirt.jpg";
import Product2 from "../images/broek.png";
import Product3 from "../images/shirtwit.jpg";

export default function Productslider() {
  return (
    <div className="mb-10 mt-10 flex flex-row items-center justify-between gap-4 p-5">
      <button className="flex h-16 w-16 items-center justify-center rounded-full bg-Idk">
        <ArrowLeft />
      </button>
      <div className="flex flex-col gap-5">
        <Image src={Product1.src} alt="product-1" width={400} height={400} />
        <div className="flex flex-row items-center justify-center gap-16 font-semibold *:h-[50px] *:w-[175px] *:rounded-full *:border-2 *:border-black *:bg-Blue *:font-inria *:text-white">
          <button className="shadow-magenta">Man</button>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <Image src={Product2.src} alt="product-2" width={400} height={400} />
        <div className="flex flex-row items-center justify-center gap-16 font-semibold *:h-[50px] *:w-[175px] *:rounded-full *:border-2 *:border-black *:bg-Blue *:font-inria *:text-white">
          <button className="shadow-magenta">Shop</button>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <Image src={Product3.src} alt="product-3" width={400} height={400} />
        <div className="flex flex-row items-center justify-center gap-16 font-semibold *:h-[50px] *:w-[175px] *:rounded-full *:border-2 *:border-black *:bg-Blue *:font-inria *:text-white">
          <button className="shadow-magenta">Shop</button>
        </div>
      </div>
      <button className="flex h-16 w-16 items-center justify-center rounded-full bg-Idk">
        <ArrowRight />
      </button>
    </div>
  );
}
