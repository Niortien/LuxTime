import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Collection from "@/components/home/Collection";
import Trendy from "@/components/home/Trendy";
import SquareList from "@/components/home/SquareList";

export default function Home() {
  return (
    <div className="max-h-auto">
      <Hero />
      <About />
      <SquareList />
      <Collection />
      <Trendy />
    </div>
  );
}
