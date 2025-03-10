import { ModeToggle } from "@/components/theme-switch";

const Header = () => {
  return (
    <header
      id="header"
      className="flex justify-between items-center px-6 py-3 bg-white/10 dark:bg-white/5 backdrop-blur-xl backdrop-brightness-125 text-white/90 dark:text-white shadow-md"
    >
      <div className="max-w-7xl mx-auto flex justify-between w-full">
        <div className="flex items-center space-x-3">
          <img src="/vercel.svg" alt="Logo" className="w-9 h-9" />
          <h1 className="text-xl font-semibold text-black dark:text-white">
            Forgify
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
