import Footer from "./assets/components/footer";
import Header from "./assets/components/header";
import Image from "next/image";
import Hero from "./assets/components/hero";

export default function HomePage() {
  return (
    <div id="HOME">
      <Header />
      <Hero />

      <Footer />
    </div>
  );
}
