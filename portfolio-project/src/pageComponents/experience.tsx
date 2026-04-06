import { ArrowUpRight } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      name: "FULLSTACK DEVELOPER",
      place: "ATB TECH / NOTCH CRM",
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
    <section className="px-4 py-18 text-white md:px-6">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.7fr_1.3fr]">
        <div className="tech-panel p-6 md:p-8">
          <span className="terminal-label">Experience</span>
          <h2 className="section-title mt-6 text-[clamp(2.8rem,7vw,5rem)]">
            Work
            <br />
            <span className="accent">Log</span>
          </h2>
          <p className="muted-copy mt-6 max-w-md text-sm leading-7">
            A short record of the environments where I shipped product work, handled interfaces, and kept learning under live constraints.
          </p>
        </div>

        <div className="space-y-4">
          {experiences.map((experience, index) => (
            <a key={experience.name} href={experience.link} target="_blank" rel="noopener noreferrer">
              <div className="tech-panel group p-5 md:p-6">
                <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto] md:items-center">
                  <div>
                    <p className="font-terminal text-[0.68rem] uppercase tracking-[0.22em] text-[#8d9a90]">
                      Record {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 text-lg font-semibold uppercase tracking-[0.14em] text-white md:text-xl">
                      {experience.name}
                    </p>
                  </div>

                  <p className="text-base uppercase tracking-[0.12em] text-[#fff5c9]">
                    {experience.place}
                  </p>

                  <div className="flex items-center justify-between gap-4 md:justify-end">
                    <span className="font-terminal text-sm uppercase tracking-[0.18em] text-[#d4ff42]">
                      {experience.year}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center border border-white/10 bg-black/30 text-[#d4ff42] transition-colors duration-200 group-hover:bg-[#d4ff42] group-hover:text-[#081007]">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
