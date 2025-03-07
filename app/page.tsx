import Hero from "@/components/home/Hero";
import About from "@/components/home/About"
import Collection from "@/components/home/Collection";
import Trendy from "@/components/home/Trendy";
import Articles from "@/components/home/Articles";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <div className="max-h-auto">
      <Hero />
      <About />
      <Collection />
      <Trendy />
      <Articles/>
      <Footer/>
    </div>
  );
}
