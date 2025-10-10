import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import LiquidChrome from "@/effects/Backgrounds/LiquidChrome/LiquidChrome";
import {
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiNestjs,
  SiMongodb,
  SiVite,
  SiGit,
  SiPython,
  SiExpress,
  SiTypescript,
  SiJavascript,
  SiGrafana,
  // SiAzuredevops,
} from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";
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
    { id: 1, title: "React", link: "https://react.dev/", category: "FRONTEND", icon: <SiReact className="w-20 h-20" />, color: "#61DAFB" },
    { id: 2, title: "Angular", link: "https://angular.dev/", category: "FRONTEND", icon: <SiAngular className="w-20 h-20" />, color: "#DD0031" },
    { id: 3, title: "TypeScript", link: "https://www.typescriptlang.org/", category: "LANGUAGE", icon: <SiTypescript className="w-20 h-20" />, color: "#3178C6" },
    { id: 4, title: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", category: "LANGUAGE", icon: <SiJavascript className="w-20 h-20" />, color: "#F7DF1E" },
    { id: 5, title: "Node.js", link: "https://nodejs.org/en", category: "BACKEND", icon: <SiNodedotjs className="w-20 h-20" />, color: "#339933" },
    { id: 6, title: "Nest.js", link: "https://nestjs.com/", category: "BACKEND", icon: <SiNestjs className="w-20 h-20" />, color: "#E0234E" },
    { id: 7, title: "Express", link: "https://expressjs.com/", category: "BACKEND", icon: <SiExpress className="w-20 h-20" />, color: "#FFFFFF" },
    { id: 8, title: "Python", link: "https://www.python.org/", category: "LANGUAGE", icon: <SiPython className="w-20 h-20" />, color: "#3776AB" },
    { id: 9, title: "MongoDB", link: "https://www.mongodb.com/", category: "DATABASE", icon: <SiMongodb className="w-20 h-20" />, color: "#47A248" },
    { id: 10, title: "Vite", link: "https://vite.dev/", category: "BUILD", icon: <SiVite className="w-20 h-20" />, color: "#646CFF" },
    { id: 11, title: "Git", link: "https://git-scm.com/", category: "DEVOPS", icon: <SiGit className="w-20 h-20" />, color: "#F05032" },
    { id: 12, title: "Grafana", link: "https://grafana.com/", category: "MONITORING", icon: <SiGrafana className="w-20 h-20" />, color: "#F46800" },
    // { id: 13, title: "Azure DevOps", link: "https://azure.microsoft.com/en-us/products/devops", category: "DEVOPS", icon: <SiAzuredevops className="w-20 h-20" />, color: "#0078D7" },
  ];

  const categories = ["ALL", ...Array.from(new Set(stacks.map(s => s.category)))];

  const filteredStacks = selectedCategory === "ALL" 
    ? stacks 
    : stacks.filter(s => s.category === selectedCategory);

  return (
    <div className="min-h-screen bg-black py-5 px-4 md:px-10">
      {/* Header */}

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto mb-12 flex items-center justify-center flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-white text-black scale-105"
                : "bg-zinc-900 text-gray-400 hover:bg-zinc-800 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Stack Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredStacks.map((stack) => (
            <a
              key={stack.id}
              href={stack.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="relative bg-zinc-900 border-zinc-800 overflow-hidden h-64 hover:border-zinc-700 transition-all duration-500">
                {/* Liquid Chrome Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <LiquidChrome
                    baseColor={[1, 0.3, 0]}
                    speed={0.4}
                    amplitude={0.35}
                    interactive={false}
                  />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col p-6 z-10">
                  {/* Category Badge */}
                  <Badge 
                    className="self-start mb-4 bg-black/80 backdrop-blur-sm border border-zinc-700 text-white px-3 py-1 text-xs"
                  >
                    {stack.category}
                  </Badge>

                  {/* Icon */}
                  <div className="flex-1 flex items-center justify-center">
                    <div 
                      className="transition-all duration-500 group-hover:scale-110"
                      style={{ color: "white" }}
                    >
                      {stack.icon}
                    </div>
                  </div>

                  {/* Title and Arrow */}
                  <div className="flex items-end justify-between">
                    <h3 className="text-2xl font-semibold text-white font-future">
                      {stack.title}
                    </h3>
                    <div
                      className="w-10 h-10 flex items-center justify-center rounded-full 
                                bg-white text-black opacity-0 group-hover:opacity-100 
                                transform translate-x-4 group-hover:translate-x-0
                                transition-all duration-500"
                    >
                      <FiArrowUpRight size={20} />
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${stack.color} 0%, transparent 70%)`
                  }}
                />
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}