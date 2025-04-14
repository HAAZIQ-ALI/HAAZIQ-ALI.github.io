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
            <span className="text-hypr-accent text-2xl"><i className="fas fa-terminal"></i></span>
            <h1 className="font-bold text-xl">Hyprland Wiki</h1>
          </a>
        </div>
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
            href="https://discord.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-hypr-text hover:text-hypr-accent transition"
            aria-label="Discord"
          >
            <i className="fab fa-discord text-xl"></i>
          </a>
          <button className="bg-hypr-primary hover:bg-hypr-primary/80 px-4 py-1.5 rounded-md text-sm transition">
            <i className="fas fa-download mr-1"></i> Download
          </button>
        </div>
      </div>
    </header>
  );
}
