import Image from "next/image";
import Hero from "../../components/hero-section";

export default function Home() {
  return (
    <div className="bg-[#faefe2] font-outfit min-h-screen px-10.5 pb-[100px]">
      <section>
        {/* Hero */}
        <Hero />
      </section>
      <section className="min-h-screen text-black">services</section>
      <section className="min-h-screen text-black">Expert</section>
      <section className="min-h-screen text-black">workflow</section>
      <section className="min-h-screen text-black">stories</section>
      <section className="min-h-screen text-black">lets talk</section>
      <section className="min-h-screen text-black">footer</section>
    </div>
  );
}
