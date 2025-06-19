import { Button } from "../../../../components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const NavigationSection = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", active: true },
    { label: "About", active: false },
    { label: "Projects", active: false },
    { label: "Contact", active: false },
  ];

  return (
    <header className="w-full bg-dark py-6 px-6 md:px-16 lg:px-[100px]">
      <nav className="max-w-[1240px] mx-auto w-full flex items-center justify-between">
        
        <div className="relative w-[46px] h-8">
          <div className="absolute w-[9px] h-8 bg-white left-0 top-0" />
          <div className="absolute w-[9px] h-8 bg-white left-6 top-0" />
          <div className="absolute w-3 h-3 bg-white rounded-[5.93px] top-px left-[11px]" />
          <div className="absolute w-3 h-3 bg-white rounded-[5.93px] top-[19px] left-[34px]" />
        </div>

        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {navItems.map((item, index) => (
            <Button
              key={index}
              variant={item.active ? "default" : "ghost"}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                item.active
                  ? "bg-white text-black hover:bg-white/90"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <span className="font-['Syne',Helvetica] font-medium text-sm md:text-base">
                {item.label}
              </span>
            </Button>
          ))}
        </div>

        <div className="hidden md:block">
          <Button
            variant="outline"
            className="rounded-full border border-white text-white bg-transparent hover:bg-white hover:text-black transition duration-300"
          >
            <span className="font-['Syne',Helvetica] font-medium text-sm md:text-base">
              HIRE ME
            </span>
          </Button>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 px-2 transition-all">
          {navItems.map((item, index) => (
            <Button
              key={index}
              variant={item.active ? "default" : "ghost"}
              className={`w-full justify-start px-4 py-2 rounded-full transition ${
                item.active
                  ? "bg-white text-black hover:bg-white/90"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <span className="font-['Syne',Helvetica] text-sm">{item.label}</span>
            </Button>
          ))}

          <Button
            variant="outline"
            className="w-full rounded-full border border-white text-white bg-transparent hover:bg-white hover:text-black transition"
          >
            <span className="font-['Syne',Helvetica] text-sm">HIRE ME</span>
          </Button>
        </div>
      )}
    </header>
  );
};
