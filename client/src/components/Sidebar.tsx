import React from "react";

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface NavItem {
  icon: string;
  text: string;
  href?: string;
  active?: boolean;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

export default function Sidebar({ isSidebarOpen, setIsSidebarOpen }: SidebarProps) {
  const navSections: NavSection[] = [
    {
      title: "Navigation",
      items: [
        { icon: "fas fa-home", text: "Home", href: "#", active: true },
        { icon: "fas fa-user", text: "About Me", href: "#about" },
        { icon: "fas fa-code-branch", text: "Projects", href: "#projects" },
        { icon: "fas fa-cogs", text: "Skills", href: "#skills" },
        { icon: "fas fa-envelope", text: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Programming Skills",
      items: [
        { icon: "fab fa-python", text: "Python" },
        { icon: "fab fa-js", text: "JavaScript" },
        { icon: "fab fa-html5", text: "HTML/CSS" },
        { icon: "fab fa-react", text: "React" },
        { icon: "fas fa-database", text: "Data Science" }
      ]
    },
    {
      title: "Other Skills",
      items: [
        { icon: "fas fa-chess", text: "Chess" },
        { icon: "fas fa-dumbbell", text: "Calisthenics" },
        { icon: "fas fa-brain", text: "Strategic Thinking" }
      ]
    },
    {
      title: "Connect",
      items: [
        { icon: "fab fa-github", text: "GitHub", href: "https://github.com" },
        { icon: "fab fa-linkedin", text: "LinkedIn", href: "https://linkedin.com" },
        { icon: "fas fa-envelope", text: "Email", href: "mailto:haaziq@example.com" }
      ]
    }
  ];

  return (
    <aside 
      className={`fixed top-[57px] w-64 h-[calc(100vh-57px)] bg-hypr-sidebar border-r border-hypr-border transform ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 transition-transform duration-300 overflow-y-auto z-40`}
    >
      <div className="p-6 text-center mb-2">
        <div className="w-24 h-24 rounded-full bg-hypr-primary/20 mx-auto flex items-center justify-center mb-3">
          <i className="fas fa-user text-hypr-accent text-3xl"></i>
        </div>
        <h2 className="text-xl font-bold text-hypr-accent">Haaziq</h2>
        <p className="text-sm text-hypr-text/70 mt-1">Computer Science Student</p>
      </div>
      
      <nav className="py-4 px-4">
        {navSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-6">
            <p className="text-xs uppercase text-gray-400 font-semibold tracking-wider mb-2">
              {section.title}
            </p>
            <ul className="space-y-1">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <a 
                    href={item.href || "#"}
                    onClick={(e) => {
                      if (!item.href) e.preventDefault();
                      // On mobile, close sidebar when clicking an item
                      if (window.innerWidth < 1024) {
                        setIsSidebarOpen(false);
                      }
                    }}
                    className={`flex items-center px-2 py-1.5 rounded-md ${
                      item.active 
                        ? 'text-hypr-accent bg-hypr-accent/10' 
                        : 'hover:bg-hypr-accent/10 hover:text-hypr-accent transition'
                    }`}
                    target={item.href?.startsWith('http') ? '_blank' : undefined}
                    rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
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
