import Hero from "@/components/Hero/Hero";
import Devider from "@/components/Devider/Devider";
import Teraphy from "@/Layouts/Teraphy";
import Csakra from "@/Layouts/Csakra";
import Reflex from "@/Layouts/Reflex";
import Noi from "@/Layouts/Noi";
import About from "@/Layouts/About/About";
import Gallery from "@/Layouts/Gallery/Gallery";
import Review from "@/Layouts/Review/Review";
import Contact from "@/Layouts/Contact/Contact";
import style from "./page.module.css";

export default function Home() {
  return (
    <>
      <main className={style.main}>
        <Hero />
        <Teraphy />
        <Devider />
        <Csakra />
        <Devider />
        <Reflex />
        <Devider />
        <Noi />
        <Devider />
        <About />
        <Devider />
        <Gallery />
        <Devider />
        <Review />
        <Devider />
        <Contact />
      </main>
    </>
  );
}
