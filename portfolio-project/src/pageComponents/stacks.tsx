import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  SiAngular,
  SiExpress,
  SiGit,
  SiGrafana,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiTypescript,
  SiVite,
} from "react-icons/si";
import { ArrowUpRight, Cpu } from "lucide-react";
import { useState } from "react";

export default function Stacks() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  type Stack = {
    id: number;
    title: string;
    link: string;
    category: string;
    icon: React.ReactNode;
    color: string;
  };

  const stacks: Stack[] = [
    { id: 1, title: "React", link: "https://react.dev/", category: "FRONTEND", icon: <SiReact className="h-16 w-16" />, color: "#61DAFB" },
    { id: 2, title: "Angular", link: "https://angular.dev/", category: "FRONTEND", icon: <SiAngular className="h-16 w-16" />, color: "#DD0031" },
    { id: 3, title: "TypeScript", link: "https://www.typescriptlang.org/", category: "LANGUAGE", icon: <SiTypescript className="h-16 w-16" />, color: "#3178C6" },
    { id: 4, title: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", category: "LANGUAGE", icon: <SiJavascript className="h-16 w-16" />, color: "#F7DF1E" },
    { id: 5, title: "Node.js", link: "https://nodejs.org/en", category: "BACKEND", icon: <SiNodedotjs className="h-16 w-16" />, color: "#339933" },
    { id: 6, title: "Nest.js", link: "https://nestjs.com/", category: "BACKEND", icon: <SiNestjs className="h-16 w-16" />, color: "#E0234E" },
    { id: 7, title: "Express", link: "https://expressjs.com/", category: "BACKEND", icon: <SiExpress className="h-16 w-16" />, color: "#FFFFFF" },
    { id: 8, title: "Python", link: "https://www.python.org/", category: "LANGUAGE", icon: <SiPython className="h-16 w-16" />, color: "#3776AB" },
    { id: 9, title: "MongoDB", link: "https://www.mongodb.com/", category: "DATABASE", icon: <SiMongodb className="h-16 w-16" />, color: "#47A248" },
    { id: 10, title: "Vite", link: "https://vite.dev/", category: "BUILD", icon: <SiVite className="h-16 w-16" />, color: "#646CFF" },
    { id: 11, title: "Git", link: "https://git-scm.com/", category: "DEVOPS", icon: <SiGit className="h-16 w-16" />, color: "#F05032" },
    { id: 12, title: "Grafana", link: "https://grafana.com/", category: "MONITORING", icon: <SiGrafana className="h-16 w-16" />, color: "#F46800" },
  ];

  const categories = ["ALL", ...Array.from(new Set(stacks.map((stack) => stack.category)))];
  const filteredStacks =
    selectedCategory === "ALL"
      ? stacks
      : stacks.filter((stack) => stack.category === selectedCategory);

  return (
    <section className="px-4 py-6 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`tech-button ${selectedCategory === category ? "tech-button--solid" : ""}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {filteredStacks.map((stack, index) => (
            <a
              key={stack.id}
              href={stack.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="tech-panel h-full border-0 bg-transparent p-0">
                <div className="hazard-bar" />
                <div className="relative flex h-full min-h-72 flex-col p-6">
                  <Badge className="w-fit rounded-none border-[rgba(212,255,66,0.24)] bg-[rgba(212,255,66,0.08)] px-3 py-1 font-terminal text-[0.65rem] uppercase tracking-[0.22em] text-[#d4ff42]">
                    {stack.category}
                  </Badge>

                  <div className="flex flex-1 items-center justify-center">
                    <div style={{ color: stack.color }}>
                      {stack.icon}
                    </div>
                  </div>

                  <div className="flex items-end justify-between gap-4 border-t border-white/8 pt-5">
                    <div>
                      <p className="font-terminal text-[0.65rem] uppercase tracking-[0.22em] text-[#8d9a90]">
                        Module {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold uppercase tracking-[0.12em] text-white">
                        {stack.title}
                      </h3>
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center border border-white/10 bg-black/35 text-[#d4ff42] transition-colors duration-200 group-hover:bg-[#d4ff42] group-hover:text-[#081007]">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="pointer-events-none absolute right-5 top-5 text-white/10">
                    <Cpu className="h-16 w-16" />
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
