import { Button } from "@/components/ui/button";
import { Crosshair, Menu as MenuIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut", delay: 0.15 }}
      className="fixed left-0 top-0 z-50 w-full px-4 py-4 md:px-6"
    >
      <div className="tech-panel mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <a href="/" className="flex items-center gap-3">
          <span className="symbol-mark h-11 w-11 shrink-0" />
          <div>
            <p className="terminal-label">Signal / JACX</p>
            <span className="mt-1 flex items-center gap-2 text-xl font-semibold uppercase tracking-[0.28em] text-white">
              <Crosshair className="h-4 w-4 text-[#d4ff42]" />
              Dev Archive
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-3 md:flex">
          <a href="/about" className="tech-button">
            Bio Log
          </a>
          <a href="/menu">
            <Button variant="outline" className="border-[rgba(255,216,77,0.26)] text-[#fff7d1]">
              Menu
            </Button>
          </a>
        </div>

        <a href="/menu" className="tech-button md:hidden">
          <MenuIcon className="h-4 w-4" />
          Menu
        </a>
      </div>
    </motion.nav>
  );
}
