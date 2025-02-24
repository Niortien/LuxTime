import Image from "next/image";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
export default function Home() {
  return (
    <div  className=" flex flex-col">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}
