import React from "react";

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) {
  const navSections = [
    {
      title: "Getting Started",
      items: [
        { icon: "fas fa-home", text: "Home", active: true },
        { icon: "fas fa-book", text: "Introduction" },
        { icon: "fas fa-download", text: "Installation" }
      ]
    },
    {
      title: "Configuration",
      items: [
        { icon: "fas fa-sliders-h", text: "Basic Config" },
        { icon: "fas fa-keyboard", text: "Keybindings" },
        { icon: "fas fa-desktop", text: "Monitors" }
      ]
    },
    {
      title: "Theming",
      items: [
        { icon: "fas fa-paint-brush", text: "Colors & Appearance" },
        { icon: "fas fa-border-all", text: "Borders" },
        { icon: "fas fa-magic", text: "Animations" }
      ]
    },
    {
      title: "Plugins",
      items: [
        { icon: "fas fa-puzzle-piece", text: "Plugin Gallery" },
        { icon: "fas fa-code", text: "Creating Plugins" }
      ]
    },
    {
      title: "Community",
      items: [
        { icon: "fas fa-laptop-code", text: "Dotfiles" },
        { icon: "fas fa-question-circle", text: "FAQ" }
      ]
    }
  ];

  return (
    <aside 
      className={`fixed top-[57px] w-64 h-[calc(100vh-57px)] bg-hypr-sidebar border-r border-hypr-border transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 transition-transform duration-300 overflow-y-auto z-40`}
    >
      <nav className="py-6 px-4">
        {navSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-6">
            <p className="text-xs uppercase text-gray-400 font-semibold tracking-wider mb-2">
              {section.title}
            </p>
            <ul className="space-y-1">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <a 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      // On mobile, close sidebar when clicking an item
                      if (window.innerWidth < 1024) {
                        setIsSidebarOpen(false);
                      }
                    }}
                    className={`flex items-center px-2 py-1.5 rounded-md ${
                      item.active 
                        ? 'text-hypr-accent bg-hypr-accent/10' 
                        : 'hover:bg-hypr-bg/30 transition'
                    }`}
                  >
                    <i className={`${item.icon} w-5`}></i>
                    <span>{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
