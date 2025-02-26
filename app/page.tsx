import Image from "next/image";
import Header from "./Header";
import Main from "./Main"
import SquareList from "./SquareList";


export default function Home() {
  return (
    <div>
      <Header/>
      <Main/>
      <SquareList></SquareList>
    
    </div>
  );
}
