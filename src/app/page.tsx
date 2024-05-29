import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className=" bg-black flex z-10 w-full flex-col justify-center items-center bg-PANTONE_5">
      <Hero />
      <main className="bg-PANTONE_5 w-full flex flex-col z-10">
        {/* <section>Project slide</section> */}
        <section className="w-full m-auto">
          <Gallery />
        </section>
        <section className="container m-auto">
          <Services />
        </section>
        <section className="w-full m-auto">
          <Gallery />
        </section>
        <section className="container m-auto">
          <About />
        </section>
        <section className="container m-auto">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
