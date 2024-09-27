"use client"
import { useEffect } from "react";
import Banner from "./components/Banner";
import CardImage from "./components/CardImage";
import Header from "./components/Header";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Gallery from "./components/Gallery";
import Avaliacao from "./components/Avaliacao";
import CardItens from "./components/CardItens";
import Footer from "./components/Footer";


export default function Home() {


  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
      <Header />
      <Banner />
      <div className="lg:w-7/12 w-full lg:px-0 px-5 mx-auto py-10" id="scroll-container" data-scroll-container>
        <h1 className="text-3xl text-center font-semibold text-black mb-3">Montadora profissional</h1>
        <p className="text-xl text-zinc-600 text-center lg:px-5">
          Transforme sua casa em um lar perfeito! Conte com os serviços especializados da Alfamontagem para uma montagem impecável.
        </p>
        <div className="w-full grid grid-cols-5 justify-center mt-5 pt-4 lg:gap-3 gap-4">
            <CardImage />
        </div>
        <div className="w-full mt-20">
          <h2 className="text-3xl text-black font-bold mb-8">Serviços</h2>

          <Gallery />
        </div>

        <Avaliacao />

        <div className="w-full mt-20">
         
          <h2 className="text-3xl text-black font-bold mb-8">Por que escolher a Alfamontagem</h2>

          <div className="w-full">
            <CardItens />
          </div>
        </div>
      </div>
      
     <Footer />
    </>
  );
}
