"use client";

import { ModeToggle } from "@/components/theme-switch";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header
      id="header"
      className="flex justify-between items-center p-3 bg-white/10 dark:bg-white/5 backdrop-blur-xl backdrop-brightness-125 text-white"
    >
      <div className="max-w-7xl mx-auto flex justify-between w-full">
        <div className="flex items-center space-x-2">
          {/* back button using lucide */}
          <Button
            variant="ghost"
            size="icon"
            className="cursor-pointer"
            onClick={() => window.history.back()}
          >
            <ChevronLeft className="text-black dark:text-white" />
          </Button>
          <img src="/vercel.svg" alt="Logo" className="w-8 h-8 ml-4" />
          <h1 className="text-xl font-bold text-black dark:text-white">
            Forgify
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
