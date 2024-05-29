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
        <section
          id="projects"
          className="w-full h-full m-auto max-h-[80vh] bg-red"
        >
          <Gallery />
        </section>
        <section id="services" className="container m-auto">
          <Services />
        </section>
        {/* <section
          id="projects"
          className="w-full h-full m-auto max-h-[80vh] bg-red"
        >
          <Gallery />
        </section> */}
        <section id="about" className="container m-auto">
          <About />
        </section>
        <section
          id="contact"
          className="container m-auto border-t-[2px] border-t-white"
        >
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
