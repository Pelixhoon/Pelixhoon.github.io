import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 bg-black body-font">
      <div className="container px-5 py-14 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
            className="mx-auto inline-block w-10 mb-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
          <p className="sm:text-4xl text-4xl font-medium title-font mb-4 text-white">
            개발에 참여한 프로젝트
          </p>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-xl">
            학회활동, 팀프로젝트, 해커톤 등에서 직접 개발에 참여한 활동들입니다
          </p>
        </div>
        <div className="flex-col flex-wrap m-4 items-center">
          {projects.map((project) => (
            <div className="flex relative sm:w-100% p-36">
              <img
                alt="image"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={project.image}
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                <h2 className="tracking-widest font-pp1 text-xl title-font font-medium text-blue-400 mb-1">
                  {project.subtitle}
                </h2>
                <h1 className="title-font text-3xl font-gm1 font-medium text-white mb-3">
                  {project.title}
                </h1>
                <p className="leading-relaxed text-xl">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
