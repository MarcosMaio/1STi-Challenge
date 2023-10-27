import Input from "@/components/Input.component";
import Title from "../components/Title.component";
import WeatherCard from "@/components/WeatherCard.component";
import { useAppContext } from "@/hooks/useAppContext.hook";
import Capitals from "@/components/Capitals.component";
import React from "react";

export default function Home() {
  const { showCard } = useAppContext();

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-14 text-dark-gray-700 open-sans`}
    >
      <section>
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <Title title="Previsão do Tempo" />
        </div>
      </section>
      <section className=' flex justify-center '>
        <div className="z-10 w-[100%] sm:w-full  items-center justify-between font-mono text-sm lg:flex py-4 sm:p-5">
          {showCard && <WeatherCard />}
        </div>
      </section>
      <section>
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex p-2">
          <Input />
        </div>
      </section>
      <section>
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex p-5">
          <Capitals />
        </div>
      </section>
    </main>
  );
}
