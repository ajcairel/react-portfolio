export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Alexander Cairel
            <br className="hidden lg:inline-block" />
          </h1>
          <h3 className="sm:text-4xl text-xl mb-4 font-medium text-slate-400">
            Full Stack Developer
          </h3>
          <p className="mb-8 leading-relaxed text-white">
            I am an experienced project manager that has built technical skills
            in software engineering. My experience developing applications as
            well as working cross-functionally and has taught me to utilize all
            available resources to deliver a quality product.
          </p>
          <div className="lg:flex sm:flex-wrap">
            <div className="p-2 sm:w-1/2 w-full">
              <a
                href="https://www.linkedin.com/in/alexandercairel/"
                target="_blank"
                rel="noopener"
              >
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                    alt="The logo icon for LinkedIn"
                    title="LinkedIn"
                    className="w-6 h-6 flex-shrink-0 mr-4"
                  />
                  <span className="title-font font-medium text-white">
                    LinkedIn
                  </span>
                </div>
              </a>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <a
                href="https://docs.google.com/document/d/1ASCZa0yjUS21Lf_DBxw3Dem-qz28_rsdT7EJqRAbXRU/export?format=pdf"
                target="_blank"
                rel="noopener"
              >
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg"
                    alt="PDF"
                    title="GitHub"
                    className="w-6 h-6 flex-shrink-0 mr-4"
                  />
                  <span className="title-font font-medium text-white">
                    Resume
                  </span>
                </div>
              </a>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <a href="https://github.com/ajcairel" target="_blank" rel="noopener">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="The logo icon for GitHub"
                    title="GitHub"
                    className="w-6 h-6 flex-shrink-0 mr-4"
                  />
                  <span className="title-font font-medium text-white">
                    GitHub
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
                    Email
                  </span>
                </div>
              </a>
            </div>
          </div>
          {/* <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div> */}
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            // src="./coding.svg
            src="./Pfp.JPG"
          />
        </div>
      </div>
    </section>
  );
}
