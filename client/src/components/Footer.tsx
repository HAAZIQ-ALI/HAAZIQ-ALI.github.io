import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-hypr-border pt-6 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-hypr-text/60">
            Made with <i className="fas fa-heart text-hypr-accent"></i> by Haaziq
          </p>
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com" className="text-hypr-text/60 hover:text-hypr-accent" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" className="text-hypr-text/60 hover:text-hypr-accent" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:haaziq@example.com" className="text-hypr-text/60 hover:text-hypr-accent">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-xs text-hypr-text/50">© {currentYear} Haaziq. All rights reserved.</p>
        <p className="text-xs text-hypr-text/50 mt-1">Computer Science Student | Chess Player | Programming Enthusiast</p>
      </div>
    </footer>
  );
}
