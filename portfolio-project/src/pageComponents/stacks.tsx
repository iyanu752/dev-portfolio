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
} from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";

export default function Stacks() {
  type Stack = {
    id: number;
    title: string;
    link: string;
    category: string;
    icon: React.ReactNode;
  };

const stacks: Stack[] = [
  { id: 1, title: "React", link: "https://react.dev/", category: "FRONTEND", icon: <SiReact className="text-white w-40 h-40 p-4" /> },
  { id: 2, title: "Angular",  link: "https://angular.dev/", category: "FRONTEND", icon: <SiAngular className="text-white w-40 h-40 p-4" /> },
  { id: 3, title: "Node Js",  link: "https://nodejs.org/en", category: "BACKEND", icon: <SiNodedotjs className="text-white w-40 h-40 p-4" /> },
  { id: 4, title: "Nest Js",  link: "https://nestjs.com/", category: "BACKEND", icon: <SiNestjs className="text-white w-40 h-40 p-4" /> },
  { id: 5, title: "Express",  link: "https://expressjs.com/", category: "BACKEND", icon: <SiExpress className="text-white w-40 h-40 p-4" /> },
  { id: 6, title: "Python",  link: "https://www.python.org/", category: "BACKEND", icon: <SiPython className="text-white   w-40 h-40 p-4" /> },
  { id: 7, title: "MongoDB",  link: "https://www.mongodb.com/", category: "DATABASE", icon: <SiMongodb className="text-white  w-40 h-40 p-4" /> },
  { id: 8, title: "Vite",  link: "https://vite.dev/", category: "BUILD", icon: <SiVite className="text-white w-40 h-40 p-4" /> },
  { id: 9, title: "Git",  link: "https://git-scm.com/", category: "VERSION CONTROL", icon: <SiGit className="text-white w-40 h-40 p-4" /> },
];


  const renderCard = (stack: Stack, aspect = "aspect-[4/3]") => (
    <a key={stack.id} href={stack.link}>
      <Card className="relative group bg-[#171717] cursor-pointer overflow-hidden hover:bg-[#222] transition">

        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
          <LiquidChrome
            baseColor={[1, 0.1, 0]}
            speed={0.37}
            amplitude={0.32}
            interactive={false}
          />
        </div>


        <div
          className={`${aspect} rounded-t-lg overflow-hidden relative flex items-center justify-center`}
        >

          <div className="absolute top-4 left-4 z-10">
            <Badge className="bg-black p-3 rounded-full border border-white text-white">
              {stack.category}
            </Badge>
          </div>


          <div className="relative z-10">{stack.icon}</div>


          <div className="absolute bottom-4 left-4 right-4 text-white z-10">
            <h3 className="text-3xl mb-1 font-future font-light sm:text-3xl md:text-4xl lg:text-5xl">
              {stack.title}
            </h3>
          </div>

            <div
              className="absolute top-4 right-4 z-10 transform translate-x-20 opacity-0 
                        group-hover:translate-x-0 group-hover:opacity-100 
                        transition-all duration-500 ease-out"
            >
              <button
                className="w-14 h-14 flex items-center justify-center rounded-full 
                          bg-white text-black shadow-lg 
                          hover:bg-orange-500 hover:text-white transition-colors"
              >
                <FiArrowUpRight size={22} />
              </button>
            </div>
        </div>
      </Card>
    </a>
  );

  return (
    <div className="bg-black py-10 px-4 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {stacks.slice(0, 2).map((stack) => renderCard(stack, "aspect-[5/3]"))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {stacks.slice(2, 5).map((stack) => renderCard(stack))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {stacks.slice(5, 8).map((stack) => renderCard(stack))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stacks.slice(8, 9).map((stack) => renderCard(stack))}
      </div>
    </div>
  );
}
