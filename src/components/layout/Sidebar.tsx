import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { 
  BookOpen, 
  Trophy, 
  ClipboardCheck, 
  Heart, 
  User, 
  Home,
  X 
} from "lucide-react";

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const items = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <Home className="h-5 w-5" />,
  },
  {
    title: "Learning",
    href: "/learning",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "Gamification",
    href: "/gamification",
    icon: <Trophy className="h-5 w-5" />,
  },
  {
    title: "Assessment",
    href: "/assessment",
    icon: <ClipboardCheck className="h-5 w-5" />,
  },
  {
    title: "Mental Health",
    href: "/mental-health",
    icon: <Heart className="h-5 w-5" />,
  },
  {
    title: "Profile",
    href: "/profile",
    icon: <User className="h-5 w-5" />,
  },
];

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  const location = useLocation();

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="left"
          className="w-[240px] border-r bg-sidebar p-0"
        >
          <div className="flex h-full flex-col">
            <div className="flex h-14 items-center border-b px-4">
              <Link
                to="/dashboard"
                className="flex items-center gap-2 font-semibold"
              >
                <div className="relative h-6 w-6 overflow-hidden rounded-full">
                  <img src="/lovable-uploads/370f0e45-9450-4d2a-8081-9a9f67c7f623.png" alt="VIT Logo" className="object-contain h-full w-full" />
                </div>
                <span>EDU-VIT</span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="ml-auto"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            <ScrollArea className="flex-1">
              <div className="px-2 py-4">
                <div className="space-y-1">
                  {items.map((item) => (
                    <Button
                      key={item.title}
                      asChild
                      variant={location.pathname === item.href ? "default" : "ghost"}
                      className={cn(
                        "w-full justify-start",
                        location.pathname === item.href
                          ? "bg-primary text-primary-foreground"
                          : "text-sidebar-foreground"
                      )}
                    >
                      <Link to={item.href}>
                        {item.icon}
                        <span className="ml-2">{item.title}</span>
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            </ScrollArea>
          </div>
        </SheetContent>
      </Sheet>
      <aside className="hidden md:block border-r w-[240px] bg-sidebar">
        <div className="flex h-full flex-col">
          <div className="flex h-14 items-center border-b px-4">
            <Link
              to="/dashboard"
              className="flex items-center gap-2 font-semibold"
            >
              <div className="relative h-6 w-6 overflow-hidden rounded-full">
                <img src="/lovable-uploads/370f0e45-9450-4d2a-8081-9a9f67c7f623.png" alt="VIT Logo" className="object-contain h-full w-full" />
              </div>
              <span>EDU-VIT</span>
            </Link>
          </div>
          <ScrollArea className="flex-1">
            <div className="px-2 py-4">
              <div className="space-y-1">
                {items.map((item) => (
                  <Button
                    key={item.title}
                    asChild
                    variant={location.pathname === item.href ? "default" : "ghost"}
                    className={cn(
                      "w-full justify-start",
                      location.pathname === item.href
                        ? "bg-primary text-primary-foreground"
                        : "text-sidebar-foreground"
                    )}
                  >
                    <Link to={item.href}>
                      {item.icon}
                      <span className="ml-2">{item.title}</span>
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
