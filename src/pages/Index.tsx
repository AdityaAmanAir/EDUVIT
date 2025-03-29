
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/theme-toggle";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col ghibli-container">
      <header className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="relative h-8 w-8 overflow-hidden rounded-full">
            <img src="/lovable-uploads/370f0e45-9450-4d2a-8081-9a9f67c7f623.png" alt="VIT Logo" className="object-contain h-full w-full" />
          </div>
          <span className="font-bold text-lg">EDU-VIT</span>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild variant="outline">
            <Link to="/signin">Sign In</Link>
          </Button>
          <Button asChild>
            <Link to="/signup">Sign Up</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8 md:py-16 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 relative">
            <img 
              src="/lovable-uploads/5df6dd4d-4a32-4474-9680-4347151776a0.png" 
              alt="VIT Bhopal Statue" 
              className="h-64 md:h-80 mx-auto rounded-lg shadow-xl"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-ghibli-deep-blue dark:text-ghibli-sky-blue">
            Welcome to EDU-VIT
          </h1>
          
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
            Your personalized learning companion with Studio Ghibli magic. 
            Track your study time, learn through videos, compete in quizzes, 
            and nurture your mental well-being.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="ghibli-card p-6">
              <div className="text-ghibli-forest-green dark:text-ghibli-soft-green text-xl font-semibold mb-3">
                For Students
              </div>
              <p className="mb-4">Access personalized learning resources, track your study time, participate in gamified quizzes, and connect with peers.</p>
              <Button asChild size="lg">
                <Link to="/signup?role=student">Join as Student</Link>
              </Button>
            </div>
            
            <div className="ghibli-card p-6">
              <div className="text-ghibli-deep-blue dark:text-ghibli-sky-blue text-xl font-semibold mb-3">
                For Mentors
              </div>
              <p className="mb-4">Create learning materials, assess student progress, provide personalized feedback, and guide your students.</p>
              <Button asChild size="lg" variant="outline">
                <Link to="/signup?role=mentor">Join as Mentor</Link>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="ghibli-card p-4">
              <h2 className="font-semibold mb-2">Personalized Learning</h2>
              <p className="text-sm">Study videos and materials tailored to your needs</p>
            </div>
            <div className="ghibli-card p-4">
              <h2 className="font-semibold mb-2">Gamified Learning</h2>
              <p className="text-sm">Fun quizzes with leaderboards for healthy competition</p>
            </div>
            <div className="ghibli-card p-4">
              <h2 className="font-semibold mb-2">Smart Assessment</h2>
              <p className="text-sm">AI-powered feedback and personalized improvement tips</p>
            </div>
            <div className="ghibli-card p-4">
              <h2 className="font-semibold mb-2">Mental Well-being</h2>
              <p className="text-sm">Resources to support your mental health journey</p>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="container mx-auto py-6 px-4 border-t">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} EDU-VIT. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="#" className="text-sm text-gray-500 hover:text-primary">Privacy Policy</Link>
            <Link to="#" className="text-sm text-gray-500 hover:text-primary">Terms of Service</Link>
            <Link to="#" className="text-sm text-gray-500 hover:text-primary">Contact</Link>
          </div>
        </div>
      </footer>
      
      {/* Studio Ghibli inspired decorative elements */}
      <div className="leaf-decoration top-1/4 left-10 h-16 w-16 -rotate-12" style={{ backgroundImage: "url('/images/leaf1.png')" }}></div>
      <div className="leaf-decoration top-1/3 right-10 h-12 w-12 rotate-12" style={{ backgroundImage: "url('/images/leaf2.png')" }}></div>
      <div className="leaf-decoration bottom-1/4 left-20 h-14 w-14 rotate-45" style={{ backgroundImage: "url('/images/leaf3.png')" }}></div>
    </div>
  );
};

export default Index;
