import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="flex z-10 w-full flex-col justify-center items-center bg-PANTONE_5">
      <Hero />
      <main className="bg-PANTONE_5 z-10">
        {/* <section>Project slide</section> */}
        <section>
          <Services />
        </section>
        {/* <section>Project slide</section> */}
        <section>
          <About />
        </section>
        <section>
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
