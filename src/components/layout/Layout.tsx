
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <main className="flex-1 p-4 md:p-6 ghibli-container">
          <div className="absolute top-0 left-0 w-full h-full -z-20 opacity-5 pointer-events-none">
            <img 
              src="/lovable-uploads/d58e0b52-0b18-46b6-977c-57fd12ac6b04.png" 
              alt="VIT Bhopal Campus" 
              className="w-full h-full object-cover"
            />
          </div>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
