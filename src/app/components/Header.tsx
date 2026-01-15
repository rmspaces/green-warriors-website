import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/app/components/ui/button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex items-center gap-3">
              <div>
                <h1 className="font-bold text-gray-900">Eco Sustainability Foundation</h1>
                <p className="text-sm text-[#6B7A2F]">Green Warriors Program</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-[#6B7A2F] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('program')}
              className="text-gray-700 hover:text-[#6B7A2F] transition-colors"
            >
              Program
            </button>
            <button
              onClick={() => scrollToSection('impact')}
              className="text-gray-700 hover:text-[#6B7A2F] transition-colors"
            >
              Impact
            </button>
            <button
              onClick={() => scrollToSection('donate')}
              className="text-gray-700 hover:text-[#6B7A2F] transition-colors"
            >
              Partner With Us
            </button>
            <Button
              onClick={() => scrollToSection('donate')}
              className="bg-[#6B7A2F] hover:bg-[#5A6727] text-white"
            >
              Donate Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-3 border-t border-gray-200">
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-gray-700 hover:text-[#6B7A2F] transition-colors py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('program')}
              className="text-left text-gray-700 hover:text-[#6B7A2F] transition-colors py-2"
            >
              Program
            </button>
            <button
              onClick={() => scrollToSection('impact')}
              className="text-left text-gray-700 hover:text-[#6B7A2F] transition-colors py-2"
            >
              Impact
            </button>
            <button
              onClick={() => scrollToSection('donate')}
              className="text-left text-gray-700 hover:text-[#6B7A2F] transition-colors py-2"
            >
              Partner With Us
            </button>
            <Button
              onClick={() => scrollToSection('donate')}
              className="bg-[#6B7A2F] hover:bg-[#5A6727] text-white w-full"
            >
              Donate Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}