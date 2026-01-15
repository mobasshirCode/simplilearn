import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Explore from "@/components/Explore";
import Speakers from "@/components/Speakers";
import Agenda from "@/components/Agenda";
import Footer from "@/components/Footer";
import Takeaway from "@/components/Takeaway";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto bg-white">
      <Hero />
      <Intro />
      <Explore />
      <Speakers />
      <Takeaway />
      <Agenda />
      <Footer />
    </main>
  );
}
