
import { Github, Linkedin, Download, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-purple-300">
            Portfolio
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-200 hover:text-purple-300 transition-colors"
            >
              Sobre Mim
            </button>
            <button 
              onClick={() => scrollToSection('technologies')}
              className="text-gray-200 hover:text-purple-300 transition-colors"
            >
              Tecnologias
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-200 hover:text-purple-300 transition-colors"
            >
              Projetos
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-gray-200 hover:text-purple-300 transition-colors"
            >
              Experiências
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className="text-gray-200 hover:text-purple-300 transition-colors"
            >
              Formações
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:text-purple-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-200 hover:text-purple-300 transition-colors"
            >
              Sobre Mim
            </button>
            <button 
              onClick={() => scrollToSection('technologies')}
              className="block w-full text-left text-gray-200 hover:text-purple-300 transition-colors"
            >
              Tecnologias
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left text-gray-200 hover:text-purple-300 transition-colors"
            >
              Projetos
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="block w-full text-left text-gray-200 hover:text-purple-300 transition-colors"
            >
              Experiências
            </button>
            <button 
              onClick={() => scrollToSection('education')}
              className="block w-full text-left text-gray-200 hover:text-purple-300 transition-colors"
            >
              Formações
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
