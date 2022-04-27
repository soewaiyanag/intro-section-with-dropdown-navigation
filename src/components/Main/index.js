import React from "react";
import Texts from "./Texts";
import heroMobile from "@images/image-hero-mobile.png";
import heroDesktop from "@images/image-hero-desktop.png";

const Main = () => {
  return (
    <main
      className="sm:container flex flex-col gap-8
                    sm:flex-row sm:gap-4 sm:items-center
                    sm:mt-4"
    >
      <img className="sm:hidden" src={heroMobile} alt="hero image" />
      <img
        className="hidden w-1/2 max-h-[520px] object-contain
                  sm:block"
        src={heroDesktop}
        alt="hero image"
      />
      <Texts />
    </main>
  );
};

export default Main;
