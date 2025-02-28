import Image from "next/image";
import Header from "./Header";
import Main from "./Main"
<<<<<<< HEAD
import SquareList from "./SquareList";
import { Montserrat } from "next/font/google";
=======
import Collection from "./Collection";
import Trendy from "./Trendy";


>>>>>>> 7ca2ff855ad5dce340eceecf1ad4d95eeebd8655
export default function Home() {
  return (
    <div>
      <Header/>
      <Main/>
      <Collection></Collection>
     <Trendy></Trendy>
    
    </div>
  );
}
