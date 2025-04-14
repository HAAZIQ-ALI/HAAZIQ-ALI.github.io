import React from "react";

interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ isSidebarOpen, setIsSidebarOpen }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-hypr-bg/80 backdrop-blur-sm border-b border-hypr-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button 
            id="sidebar-toggle" 
            className="lg:hidden p-2 rounded-md text-hypr-text hover:bg-hypr-sidebar transition"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            aria-label="Toggle sidebar"
          >
            <i className="fas fa-bars"></i>
          </button>
          <a href="/" className="flex items-center space-x-3">
            <span className="text-hypr-accent text-2xl"><i className="fas fa-code"></i></span>
            <h1 className="font-bold text-xl">Haaziq</h1>
          </a>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-hypr-text hover:text-hypr-accent transition">
            <i className="fas fa-home mr-2"></i> Home
          </a>
          <a href="#about" className="text-hypr-text hover:text-hypr-accent transition">
            <i className="fas fa-user mr-2"></i> About
          </a>
          <a href="#projects" className="text-hypr-text hover:text-hypr-accent transition">
            <i className="fas fa-code-branch mr-2"></i> Projects
          </a>
          <a href="#skills" className="text-hypr-text hover:text-hypr-accent transition">
            <i className="fas fa-cogs mr-2"></i> Skills
          </a>
          <a href="#contact" className="text-hypr-text hover:text-hypr-accent transition">
            <i className="fas fa-envelope mr-2"></i> Contact
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-hypr-text hover:text-hypr-accent transition"
            aria-label="GitHub"
          >
            <i className="fab fa-github text-xl"></i>
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-hypr-text hover:text-hypr-accent transition"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin text-xl"></i>
          </a>
        </div>
      </div>
    </header>
  );
}
