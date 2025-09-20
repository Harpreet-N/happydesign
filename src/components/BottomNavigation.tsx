import { useState, useEffect } from 'react';

interface BottomNavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function BottomNavigation({ currentPage, onNavigate }: BottomNavigationProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { id: 'home', label: 'WORK' },
    { id: 'about', label: 'ABOUT' },
    { id: 'contact', label: 'CONTACT' }
  ];

  return (
    <>
      {/* Main Navigation */}
      <div className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}>
        <nav className="bg-black border-2 border-black brutal-shadow-lg">
          <div className="flex items-center">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`
                  px-6 py-4 font-grotesk font-bold text-sm uppercase tracking-wide hover-brutal transition-all duration-300
                  ${currentPage === item.id 
                    ? 'bg-yellow text-black' 
                    : 'bg-black text-white hover:bg-yellow hover:text-black'
                  }
                  ${index === 0 ? '' : 'border-l-2 border-black'}
                `}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </div>

      {/* Footer with Legal Links */}
      <footer className="bg-black border-t-2 border-black">
        <div className="container mx-auto px-8 md:px-16 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white font-inter text-sm">
              © 2025 Harpreet Singh Nehar. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <button
                onClick={() => onNavigate('impressum')}
                className="text-stone hover:text-yellow font-inter text-sm transition-colors duration-300"
              >
                Impressum
              </button>
              <button
                onClick={() => onNavigate('datenschutz')}
                className="text-stone hover:text-yellow font-inter text-sm transition-colors duration-300"
              >
                Datenschutz
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}