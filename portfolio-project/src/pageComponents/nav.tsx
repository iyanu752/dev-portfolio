import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut", delay: 0.3 }}
        className="w-full fixed top-0 left-0 flex items-center justify-between px-6 py-4 text-white z-50 "
      >
      <div className="flex items-center cursor-pointer space-x-2 font-future">
        <Sparkles
          className="w-7 h-7" 
          style={{ stroke: "url(#sparkles-gradient)" }}
        />

        <svg width="0" height="0">
          <defs>
            <linearGradient id="sparkles-gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%">
                <animate
                  attributeName="stop-color"
                  values="#f97316;#fb923c;#3b82f6;#60a5fa;#f97316"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%">
                <animate
                  attributeName="stop-color"
                  values="#3b82f6;#60a5fa;#f97316;#fb923c;#3b82f6"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          </defs>
        </svg>

        <span className="text-xl font-semibold tracking-wide uppercase">
          JACX
        </span>
      </div>

      <div className="hidden md:flex items-center font-future space-x-6">
        <a href="/menu">
           <Button
          variant="ghost"
          className="text-lg text-white hover:text-gray-300 cursor-pointer hover:bg-transparent"
        >
          MENU
        </Button>
        </a>
       
      </div>

      <div className="flex md:hidden items-center font-future space-x-4 text-lg">
      
        <a href="/menu"> MENU</a>
      </div>
    </motion.nav>
  );
}
