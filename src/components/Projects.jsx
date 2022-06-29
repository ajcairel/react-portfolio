import { CodeIcon, ExternalLinkIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="text-gray-400 bg-gradient-to-r from-cyan-800 to-blue-500 body-font -z-1"
    >
      <div className="container px-5 py-10 mx-auto text-center lg:px-40 pb-0">
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white pt-6 pb-3">
          Apps I've Built
        </h1>
        <div className="flex flex-wrap -m-4">
          {projects.map((project, idx) => (
            <div key={idx} className="sm:w-1/2 w-100 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100 z-0">
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    {project.subtitle}
                  </h2>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
              <div className="font-medium title-font mb-4 text-white">
                <a href={project.github} target="_blank">
                  GitHub &nbsp;
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="The logo icon for GitHub"
                    title="GitHub"
                    className="w-4 inline-block mb-1"
                  />
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href={project.link} target="_blank">
                  Deployed{" "}
                  <ExternalLinkIcon className="w-4 inline-block mb-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
