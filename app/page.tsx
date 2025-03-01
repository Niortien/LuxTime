import Image from "next/image";
import Header from "./Header";
import Main from "./Main"
import Collection from "./Collection";
import Trendy from "./Trendy";


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
