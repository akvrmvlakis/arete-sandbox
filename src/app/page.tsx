import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  const photos = [
    {
      itemImageSrc: "/projects/manor.png",
      thumbnailImageSrc: "/projects/manor.png",
      alt: "Manor media",
      title: "Manor media",
    },
    {
      itemImageSrc: "/projects/ink.jpeg",
      thumbnailImageSrc: "/projects/ink.jpeg",
      alt: "Ink",
      title: "Ink",
    },
    {
      itemImageSrc: "/projects/thog.jpeg",
      thumbnailImageSrc: "/projects/thog.jpeg",
      alt: "Thog",
      title: "Thog",
    },
  ];
  const photos2 = [
    {
      itemImageSrc: "/projects/manor1.jpeg",
      thumbnailImageSrc: "/projects/manor1.jpeg",
      alt: "Manor media",
      title: "Manor media",
    },
    {
      itemImageSrc: "/projects/ink1.jpeg",
      thumbnailImageSrc: "/projects/ink1.jpeg",
      alt: "Ink",
      title: "Ink",
    },
    {
      itemImageSrc: "/projects/thog1.jpeg",
      thumbnailImageSrc: "/projects/thog1.jpeg",
      alt: "Thog",
      title: "Thog",
    },
  ];

  return (
    <div className=" bg-black flex z-10 w-full flex-col justify-center items-center bg-PANTONE_5">
      <Hero />
      <main className="bg-PANTONE_5 z-30 w-full flex flex-col z-10">
        {/* <section>Project slide</section> */}
        <section id="projects" className="w-full m-auto h-[80vh] bg-red">
          <Gallery data={photos} />
        </section>
        <section id="services" className="container h-[80vh] m-auto">
          <Services />
        </section>
        <section
          id="projects"
          className="w-full h-full m-auto max-h-[80vh] bg-red"
        >
          <Gallery data={photos2} />
        </section>
        <section id="about" className="container h-[80vh]r m-auto">
          <About />
        </section>
        <section
          id="contact"
          className="container m-auto border-t-[2px] h-[80vh] border-t-white"
        >
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
