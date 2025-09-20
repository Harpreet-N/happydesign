import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  currentPage?: string;
  onNavigate: (page: string) => void;
}

export function Navigation({
  currentPage = "home",
  onNavigate,
}: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const navItems = [
    { id: "home", label: "Work", href: "/" },
    { id: "about", label: "About", href: "#about" },
    { id: "contact", label: "Contact", href: "/contact" },
  ];

  const handleNavClick = (id: string, href: string) => {
    if (href.startsWith("#")) {
      // Handle anchor scrolling
      const element = document.getElementById(
        href.substring(1),
      );
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      onNavigate(id);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate("home")}
            className="font-impact text-2xl tracking-tight hover:opacity-70 transition-opacity text-black"
          >
            PORTFOLIO
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() =>
                  handleNavClick(item.id, item.href)
                }
                className={`font-roboto font-medium text-base transition-colors hover:text-purple ${
                  currentPage === item.id
                    ? "text-purple"
                    : "text-black"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden hover:bg-gray-100"
            onClick={() =>
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }
          >
            {isMobileMenuOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 py-6 border-t border-gray-200/50">
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() =>
                    handleNavClick(item.id, item.href)
                  }
                  className={`text-left font-roboto font-medium text-lg transition-colors hover:text-purple ${
                    currentPage === item.id
                      ? "text-purple"
                      : "text-black"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button className="bg-dark text-white px-6 py-3 rounded-2xl font-roboto font-semibold hover:bg-black transition-colors duration-300 self-start">
                Get in touch
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}