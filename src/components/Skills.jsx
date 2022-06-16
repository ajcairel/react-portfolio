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
                Skills
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 text-white mx-auto">
                I am always willing to learn more so this is an ever-growing list.
              </p>
            </div>
            <div className="grid grid-rows-3 grid-flow-col sm:grid-rows-5 place-items-center">
              {skills.map((skill, idx) => (
                <div key={idx} className="p-2 sm:w-1/2 w-full">
                  <div className="bg-black-800 rounded flex h-full">
                      {skill}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}