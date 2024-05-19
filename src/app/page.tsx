import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex w-full flex-col justify-center items-center bg-PANTONE_5">
      <Hero />
      <section>Project slide</section>
      <section>Services</section>
      <section>Project slide</section>
      <section>About</section>
      <section>contact</section>
      <footer className="flex items-center justify-between w-full">
        <span>mail</span>
        <span>logo</span>
        <span>menu</span>
      </footer>
    </main>
  );
}
