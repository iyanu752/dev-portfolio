import { Menu, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-black text-white">
  
            <div className="flex items-center cursor-pointer hover:text-gray-300 space-x-2 font-future">
            <Sparkles className="w-5 h-5" />
            <span className="text-lg font-semibold tracking-wide uppercase">
                JACX
            </span>
            </div>

      <div className="hidden md:flex items-center font-future space-x-6">
        <Button
          variant="ghost"
          className="text-white hover:text-gray-300 hover:bg-transparent"
        >
          MENU
        </Button>
        {/* <Search className="w-5 h-5 cursor-pointer hover:text-gray-300" /> */}
      </div>


      <div className="flex md:hidden items-center font-future space-x-4">
        <Menu className="w-6 h-6 cursor-pointer hover:text-gray-300" />
        {/* <Search className="w-5 h-5 cursor-pointer hover:text-gray-300" /> */}
      </div>
    </nav>
  )
}
