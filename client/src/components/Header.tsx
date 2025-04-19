import React, { useState } from "react";

interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ isSidebarOpen, setIsSidebarOpen }: HeaderProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  // Fixed YouTube video ID
  const videoId = "OtkcJZms4mo"; // Updated to the requested video

  const togglePlayer = () => {
    setIsPlaying(!isPlaying);
  };

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
            <h1 className="font-bold text-xl">HAAZIQ ALI</h1>
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
          <button
            onClick={togglePlayer}
            className={`flex items-center text-hypr-text ${isPlaying ? 'bg-red-500 hover:bg-red-600' : 'bg-hypr-accent/80 hover:bg-hypr-accent'} px-3 py-1 rounded-md transition`}
            aria-label={isPlaying ? "Stop Music" : "Play Music"}
          >
            <i className={`fas ${isPlaying ? 'fa-stop' : 'fa-play'} mr-2`}></i> Run
          </button>
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

      {/* Hidden YouTube player for audio only */}
      {isPlaying && (
        <div className="hidden">
          <iframe 
            width="1" 
            height="1" 
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&showinfo=0&disablekb=1&fs=0&modestbranding=1&loop=1&playlist=${videoId}&iv_load_policy=3`}
            title="YouTube audio player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope" 
            loading="eager"
          ></iframe>
        </div>
      )}
    </header>
  );
}
