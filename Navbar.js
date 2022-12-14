import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-900 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 font-gm2 text-2xl">
            Pelix Myunghoon Song
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 text-xl md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center  justify-center">
          <a href="#projects" className="mr-6 hover:text-white">
            참여한 프로젝트
          </a>
          <a href="#skills" className="mr-6 font-gm1 hover:text-white">
            Skills & Tools
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center text-xl font-gm1 bg-gray-900 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded mt-4 md:mt-0"
        >
          Conatact
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
