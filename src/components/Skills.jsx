import { ChevronDoubleUpIcon, ChipIcon } from "@heroicons/react/solid";
import { skills } from "../data";
import FadeInSection from "./FadeIn";

export default function Skills() {
  return (
    <>
    <FadeInSection>
      <section id="skills">
        <div className="container px-5 py-10 mx-auto pt-0">
          <div className="text-center mb-15">
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 pt-6">
              Skills
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 text-white mx-auto pb-5">
              I am always looking to improve on these skills as well as learn
              new ones, so this is an ever-growing list.
            </p>
          </div>
          <div className="grid grid-rows-3 grid-flow-col sm:grid-rows-5 place-items-center">
            {skills.map((skill, idx) => (
              <div key={idx} className="p-2 sm:w-1/2 w-full">
                <div className="bg-black-800 rounded flex h-full">{skill}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </FadeInSection>
      <div class="relative h-0 w-full">
        <div class="absolute bottom-0 right-0 h-16 w-16 pt-5">
          <a href="#top">
            <ChevronDoubleUpIcon className="animate-bounce w-8 h-8 ml-1 bg-gray-800 rounded border-0" />
          </a>
        </div>
      </div>
    </>
  );
}
