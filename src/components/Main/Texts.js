import React from "react";
import Clients from "./Clients";

const Texts = () => {
  return (
    <div
      className="px-4 text-center flex flex-col items-center gap-5
                sm:w-1/2 sm:-order-1 sm:text-left sm:items-start"
    >
      <h1 className="text-3xl font-bold sm:text-6xl">Make remote work</h1>
      <p className="text-medium-grey text-base">
        Get your team is sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </p>
      <a
        href="#"
        className="border-2 border-almost-black hover:border-almost-black
                transition-colors bg-almost-black text-white
                hover:bg-transparent hover:text-almost-black rounded-xl py-2 px-3"
      >
        Learn more
      </a>
      <Clients />
    </div>
  );
};

export default Texts;
