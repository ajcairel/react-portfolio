import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
// import DevIcon from "devicon-react-svg";
import { skills } from "../data";

export default function Skills() {
    return (
        <section id="skills">
          <div className="container px-5 py-10 mx-auto">
            <div className="text-center mb-20">
              <ChipIcon className="w-10 inline-block mb-4" />
              <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                Skills &amp; Technologies
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                I am always
              </p>
            </div>
            {/* <div className="flex flex-wrap lg:w-2/5 sm:mx-auto sm:mb-2 -mx-2"> */}
            <div className="grid grid-rows-3 grid-flow-col sm:grid-rows-5">
              {skills.map((skill) => (
                <div key={skill} className="p-2 sm:w-1/2 w-full">
                  <div className="bg-black-800 rounded flex p-4 h-full items-center">
                      {skill}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}