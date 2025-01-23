import { ArrowLeft, ArrowRight } from "lucide-react";
import shirt1 from "~/app/assets/images/shirtwit.jpg";
import shirt2 from "~/app/assets/images/shirt.jpg";
import shirt3 from "~/app/assets/images/shirtgroen.jpg";
import shirt4 from "~/app/assets/images/shirtgroen2.png";

import broek1 from "~/app/assets/images/broekfds.png";
import broek2 from "~/app/assets/images/broeks.png";
import broek3 from "~/app/assets/images/broek5.jpg";
import broek4 from "~/app/assets/images/shirtje5.jpg";

import broek5 from "~/app/assets/images/broek2.png";
import broek6 from "~/app/assets/images/broek6.png";
import broek7 from "~/app/assets/images/broek7.png";
import broek8 from "~/app/assets/images/broek8.png";

export default function Productsall() {
  return (
    <div>
      {/* First Row */}
      <div className="mb-10 mt-10 flex flex-row items-center justify-between gap-4 p-5">
        <button className="flex h-16 w-16 items-center justify-center rounded-full bg-Idk">
          <ArrowLeft />
        </button>
        {[
          { src: shirt1, label: "Shop" },
          { src: shirt2, label: "Shop" },
          { src: shirt3, label: "Shop" },
          { src: shirt4, label: "Shop" },
        ].map((product, index) => (
          <div key={index} className="flex flex-col gap-5">
            <div
              className="h-[275px] w-[275px] bg-cover bg-center"
              style={{ backgroundImage: `url(${product.src.src})` }}
            />
          </div>
        ))}
        <button className="flex h-16 w-16 items-center justify-center rounded-full bg-Idk">
          <ArrowRight />
        </button>
      </div>

      {/* Second Row */}
      <div className="mb-10 mt-10 flex flex-row items-center justify-between gap-4 p-5">
        <button className="flex h-16 w-16 items-center justify-center rounded-full bg-Idk">
          <ArrowLeft />
        </button>
        {[
          { src: broek1, label: "Shop" },
          { src: broek2, label: "Shop" },
          { src: broek3, label: "Shop" },
          { src: broek4, label: "Shop" },
        ].map((product, index) => (
          <div key={index} className="flex flex-col gap-5">
            <div
              className="h-[275px] w-[275px] bg-cover bg-center"
              style={{ backgroundImage: `url(${product.src.src})` }}
            />
          </div>
        ))}
        <button className="flex h-16 w-16 items-center justify-center rounded-full bg-Idk">
          <ArrowRight />
        </button>
      </div>

      {/* Third Row */}
      <div className="mb-10 mt-10 flex flex-row items-center justify-between gap-4 p-5">
        <button className="flex h-16 w-16 items-center justify-center rounded-full bg-Idk">
          <ArrowLeft />
        </button>
        {[
          { src: broek5, label: "Shop" },
          { src: broek6, label: "Shop" },
          { src: broek7, label: "Shop" },
          { src: broek8, label: "Shop" },
        ].map((product, index) => (
          <div key={index} className="flex flex-col gap-5">
            <div
              className="h-[275px] w-[275px] bg-cover bg-center"
              style={{ backgroundImage: `url(${product.src.src})` }}
            />
          </div>
        ))}
        <button className="flex h-16 w-16 items-center justify-center rounded-full bg-Idk">
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
