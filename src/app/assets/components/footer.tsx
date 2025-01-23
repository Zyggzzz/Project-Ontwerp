"use client";

import Link from "next/link";
import logo from "~/app/assets/images/logo.svg";
import Image from "next/image";
import facebook from "~/app/assets/images/facebook.svg";
import instagram from "~/app/assets/images/insta.svg";
import twitter from "~/app/assets/images/twitter.svg";
import pinterest from "~/app/assets/images/pinterest.svg";
import linkedin from "~/app/assets/images/linkedin.svg";

export default function Footer() {
  return (
    <footer className="">
      <div className="h-[150px] bg-black"></div>
      <div className="flex h-[500px] flex-row items-center justify-center gap-10 bg-black *:text-white">
        <div className="">
          <Image src={logo.src} alt="Logo" width={400} height={400} />
        </div>
        <div className="flex w-32 flex-col items-center text-wrap">
          <h1 className="w-20 text-3xl font-bold">Important Links</h1>
          <Link className="w-5" href={""}>
            About us
          </Link>
          <Link className="w-5" href={""}>
            Contact us
          </Link>
          <Link className="w-5" href={""}>
            Privacy Police
          </Link>
          <Link className="w-5" href={""}>
            Terms and Conddition
          </Link>
          <Link className="w-5" href={""}>
            Terms of Service
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-10">
          <div>
            <h1 className="text-3xl font-bold">Follow Us</h1>
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div
            id="socials"
            className="flex flex-row items-center justify-center gap-5 *:flex *:h-[75px] *:w-[75px] *:items-center *:justify-center *:rounded-full *:bg-white"
          >
            <div>
              <Image width={50} height={50} alt="facebook" src={facebook.src} />
            </div>
            <div>
              <Image
                width={50}
                height={50}
                alt="instagram"
                src={instagram.src}
              />
            </div>
            <div>
              <Image width={50} height={50} alt="twitter" src={twitter.src} />
            </div>
            <div>
              <Image width={50} height={50} alt="linkedin" src={linkedin.src} />
            </div>
            <div>
              <Image
                width={50}
                height={50}
                alt="pinterest"
                src={pinterest.src}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
