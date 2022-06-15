import { BadgeCheckIcon, CursorClickIcon } from "@heroicons/react/solid";
import React from "react";
import { socials } from "../data";

export default function Socials() {
  return (
    <section id="contact">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <CursorClickIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Socials, Resume, &amp; Email
          </h1>
          <p className="text-base text-white leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Click below to view my social media accounts, resume, and to send me an email!
          </p>
        </div>
        <div className="lg:flex sm:flex-wrap">
          <div className="p-2 sm:w-1/2 w-full">
            <a
              href="https://www.linkedin.com/in/alexandercairel/"
              target="_blank"
            >
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  alt="The logo icon for LinkedIn"
                  title="LinkedIn"
                  className="w-6 h-6 flex-shrink-0 mr-4"
                />
                <span className="title-font font-medium text-white">
                  Visit My LinkedIn
                </span>
              </div>
            </a>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <a
              href="https://docs.google.com/document/d/1ASCZa0yjUS21Lf_DBxw3Dem-qz28_rsdT7EJqRAbXRU/edit?usp=sharing"
              target="_blank"
            >
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="The logo icon for GitHub"
                  title="GitHub"
                  className="w-6 h-6 flex-shrink-0 mr-4"
                />
                <span className="title-font font-medium text-white">
                  View My Resume
                </span>
              </div>
            </a>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <a href="https://github.com/ajcairel" target="_blank">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="The logo icon for GitHub"
                  title="GitHub"
                  className="w-6 h-6 flex-shrink-0 mr-4"
                />
                <span className="title-font font-medium text-white">
                  View My GitHub
                </span>
              </div>
            </a>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <a href="mailto:alexanderjcairel@gmail.com?subject=I saw your portfolio and would like to connect!">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                  alt="The logo icon for Google"
                  title="Google"
                  className="w-6 h-6 flex-shrink-0 mr-4"
                />
                <span className="title-font font-medium text-white">
                  Send Me An Email
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
