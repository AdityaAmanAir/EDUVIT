
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <main className="flex-1 p-4 md:p-6 ghibli-container">
          <div className="absolute top-0 left-0 w-full h-full -z-20 opacity-25 pointer-events-none">
            <img 
              src="/lovable-uploads/9794d0af-4953-4b93-b70f-57552cdddeec.png" 
              alt="VIT Bhopal Campus" 
              className="w-full h-full object-cover object-center"
            />
          </div>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
