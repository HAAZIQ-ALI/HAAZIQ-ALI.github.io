import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-hypr-border pt-6 mt-12">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-hypr-text/60">
            Made with <i className="fas fa-heart text-hypr-accent"></i> by the Hyprland community
          </p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-hypr-text/60 hover:text-hypr-accent">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="text-hypr-text/60 hover:text-hypr-accent">
            <i className="fab fa-discord"></i>
          </a>
          <a href="#" className="text-hypr-text/60 hover:text-hypr-accent">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-hypr-text/60 hover:text-hypr-accent">
            <i className="fab fa-reddit"></i>
          </a>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-xs text-hypr-text/50">© {currentYear} Hyprland. All rights reserved.</p>
      </div>
    </footer>
  );
}
