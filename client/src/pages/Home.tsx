import React from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import MainContent from "@/components/MainContent";

interface HomeProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Home({ isSidebarOpen, setIsSidebarOpen }: HomeProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      
      <div className="flex flex-1 relative">
        <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        
        {/* Mobile overlay when sidebar is open */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-30 lg:hidden" 
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
        
        <MainContent />
      </div>
    </div>
  );
}
