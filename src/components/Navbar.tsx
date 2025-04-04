import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-[#6F4E37] font-bold text-2xl">
          Café Aroma
        </a>

        {isMobile ? (
          <>
            <button
              onClick={toggleMenu}
              className="text-[#6F4E37] focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {isMenuOpen && (
              <div className="fixed inset-0 top-16 bg-white z-40 p-4">
                <nav className="flex flex-col space-y-4">
                  <a
                    href="#home"
                    className="text-[#6F4E37] hover:text-[#FFA726] text-lg py-2 border-b border-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </a>
                  <a
                    href="#menu"
                    className="text-[#6F4E37] hover:text-[#FFA726] text-lg py-2 border-b border-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Menu
                  </a>
                  <a
                    href="#about"
                    className="text-[#6F4E37] hover:text-[#FFA726] text-lg py-2 border-b border-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </a>
                  <a
                    href="#contact"
                    className="text-[#6F4E37] hover:text-[#FFA726] text-lg py-2 border-b border-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </a>
                  <div className="flex flex-col space-y-2 mt-4">
                    <Button variant="primary">Order Online</Button>
                    <Button variant="outline" className="border-[#6F4E37] text-[#6F4E37]">
                      Reserve a Table
                    </Button>
                  </div>
                </nav>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center space-x-8">
            <nav className="flex space-x-6">
              <a
                href="#home"
                className="text-[#6F4E37] hover:text-[#FFA726] relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFA726] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#menu"
                className="text-[#6F4E37] hover:text-[#FFA726] relative group"
              >
                Menu
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFA726] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#about"
                className="text-[#6F4E37] hover:text-[#FFA726] relative group"
              >
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFA726] transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a
                href="#contact"
                className="text-[#6F4E37] hover:text-[#FFA726] relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FFA726] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </nav>
            <div className="flex space-x-3">
              <Button variant="primary">Order Online</Button>
              <Button variant="outline" className="border-[#6F4E37] text-[#6F4E37]">
                Reserve a Table
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;