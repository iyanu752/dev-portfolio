import { FiArrowUpRight } from "react-icons/fi";

export default function Experience() {
  const experiences = [
    {
      name: "FULLSTACK DEVELOPER",
      place: "ATB TECH (NOTCH CRM)",
      year: "2023-PRESENT",
      link: "https://atb.tech/", 
    },
    {
      name: "FRONTEND DEVELOPER",
      place: "DEVPALLY",
      year: "2022",
      link: "https://www.linkedin.com/company/devpally/posts/?feedView=all",
    },
    {
      name: "CONTENT DEVELOPER",
      place: "UNIVERSITY OF LAGOS",
      year: "2021",
      link: "https://unilag.edu.ng/",
    },
  ];

  return (
    <div className="bg-black text-white py-10 px-4 md:px-10">
      <div className="flex flex-col md:flex-row gap-8">

        <div className="md:w-1/3 flex items-start">
          <h2 className="text-4xl md:text-5xl font-light font-future  leading-tight">
            Experience
          </h2>
        </div>


        <div className="md:w-2/3 flex flex-col gap-4">
          {experiences.map((experience, index) => (
            <a
              key={index}
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div
                className="bg-[#171717] rounded-2xl px-9 py-10 flex flex-col md:flex-row 
                           justify-between items-start md:items-center shadow-md 
                           transition hover:bg-[#1e1e1e]"
              >

                <span className="text-sm md:text-lg font-future  text-whit">
                  {experience.name}
                </span>

                <span className="text-base md:text-lg font-future  font-medium text-white mt-2 md:mt-0">
                  {experience.place}
                </span>

                <div className="flex items-center gap-3 mt-2 md:mt-0">
                  <span className="text-sm md:text-lg font-future  text-whit transition-all">
                    {experience.year}
                  </span>

 
                  <div
                    className="hidden md:flex transform translate-x-6 opacity-0 
                               group-hover:translate-x-0 group-hover:opacity-100 
                               transition-all duration-500 ease-out"
                  >
                    <button
                      className="w-12 h-12 flex items-center justify-center rounded-full 
                                 bg-white text-black shadow-lg 
                                 hover:bg-orange-500 hover:text-white transition-colors"
                    >
                      <FiArrowUpRight size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
