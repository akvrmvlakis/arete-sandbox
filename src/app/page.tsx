import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  const photos = [
    {
      itemImageSrc: "/projects/manor.jpeg",
      thumbnailImageSrc: "/projects/manor.jpeg",
      alt: "Manor media",
      title: "Manor.",
      link: "https://manor.studio/",
    },
    {
      itemImageSrc: "/projects/ink.jpeg",
      thumbnailImageSrc: "/projects/ink.jpeg",
      alt: "Ink",
      title: "Ink.",
      link: "https://www.ink.studio/",
    },
    {
      itemImageSrc: "/projects/thog.jpeg",
      thumbnailImageSrc: "/projects/thog.jpeg",
      alt: "Thog",
      title: "Thog.",
      link: "https://thehandofgod.co/",
    },
  ];
  const photos2 = [
    {
      itemImageSrc: "/projects/manor1.jpeg",
      thumbnailImageSrc: "/projects/manor1.jpeg",
      alt: "Manor media",
      title: "Manor media",
      link: "https://manor.studio/",
    },
    {
      itemImageSrc: "/projects/ink1.jpeg",
      thumbnailImageSrc: "/projects/ink1.jpeg",
      alt: "Ink",
      title: "ink.studio",
      link: "https://www.ink.studio/",
    },
    {
      itemImageSrc: "/projects/thog1.jpeg",
      thumbnailImageSrc: "/projects/thog1.jpeg",
      alt: "Thog",
      title: "Thog",
      link: "https://thehandofgod.co/",
    },
  ];

  return (
    <div className="bg-black flex z-10 w-full flex-col justify-center items-center ">
      <Hero />
      <main className="bg-PANTONE_5 z-30 w-full flex flex-col text-[Helvetica Neue Regular]">
        {/* <section>Project slide</section> */}
        <section id="projects" className="w-full m-auto bg-red">
          <Gallery data={photos} />
        </section>
        <section id="services" className="px-1 md:px-8 m-auto">
          <Services />
        </section>
        <section id="projects" className="w-full h-full m-auto bg-red">
          <Gallery data={photos2} />
        </section>
        <section id="about" className="px-1 w-full md:px-8 m-auto">
          <About />
        </section>
        <section
          id="contact"
          className="w-full px-1 md:px-8 m-auto border-t-[2px] h-[80vh] border-t-white"
        >
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
