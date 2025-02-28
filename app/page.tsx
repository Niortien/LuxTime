import Image from "next/image";
import Header from "./Header";
import Main from "./Main"
import SquareList from "./SquareList";
import { Montserrat } from "next/font/google";
export default function Home() {
  return (
    <div>
      <Header/>
      <Main/>
      <SquareList></SquareList>
    
    </div>
  );
}
