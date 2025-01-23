import Footer from "./assets/components/footer";
import Header from "./assets/components/header";
import Image from "next/image";
import Hero from "./assets/components/hero";
import Productslider from "./assets/components/productslider";

export default function HomePage() {
  return (
    <div id="HOME">
      <Header />
      <Hero />
      <Productslider />
      <div className="flex h-72 items-center justify-center bg-Idk font-inria text-6xl">
        Video
      </div>
      <Footer />
    </div>
  );
}
