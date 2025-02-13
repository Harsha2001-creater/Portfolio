import React from 'react';
import { Menu, X, Mail, Github, Linkedin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-black/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-white text-xl font-bold">Sri Harsha</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-blue-400 transition">Home</a>
            <a href="#about" className="text-white hover:text-blue-400 transition">About</a>
            <a href="#skills" className="text-white hover:text-blue-400 transition">Skills</a>
            <a href="#experience" className="text-white hover:text-blue-400 transition">Experience</a>
            <a href="#projects" className="text-white hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="text-white hover:text-blue-400 transition">Contact</a>
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="mailto:msriharshavardhan2001@gmail.com" className="text-white hover:text-blue-400">
              <Mail size={20} />
            </a>
            <a href="https://github.com/Harsha2001-creater" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/sriharshavardhanm" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
              <Linkedin size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 pt-4 pb-3">
              <a href="#home" className="text-white hover:text-blue-400">Home</a>
              <a href="#about" className="text-white hover:text-blue-400">About</a>
              <a href="#skills" className="text-white hover:text-blue-400">Skills</a>
              <a href="#experience" className="text-white hover:text-blue-400">Experience</a>
              <a href="#projects" className="text-white hover:text-blue-400">Projects</a>
              <a href="#contact" className="text-white hover:text-blue-400">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;