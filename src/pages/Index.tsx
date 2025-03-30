
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, BookOpen, Brain, Activity, Users, BarChart } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Index() {
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
            <Link to="/sign-in">Sign In</Link>
          </Button>
          <Button asChild>
            <Link to="/sign-up">Sign Up</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8 md:py-16 flex flex-col items-center justify-center">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="mb-10 relative rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="/lovable-uploads/5df6dd4d-4a32-4474-9680-4347151776a0.png" 
              alt="VIT Bhopal Statue" 
              className="h-96 md:h-[500px] w-full object-cover object-center"
            />
            <div className="absolute inset-0 dark:bg-black/40 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-ghibli-deep-blue dark:text-ghibli-sky-blue dark:glow-pulse">
            Welcome to EDU-VIT
          </h1>
          
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
            Your personalized learning companion with Studio Ghibli magic. 
            Track your study time, learn through videos, compete in quizzes, 
            and nurture your mental well-being.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="ghibli-card p-6 dark:glow-rose">
              <div className="text-ghibli-forest-green dark:text-ghibli-soft-green text-xl font-semibold mb-3">
                For Students
              </div>
              <p className="mb-4">Access personalized learning resources, track your study time, participate in gamified quizzes, and connect with peers.</p>
              <Button asChild size="lg">
                <Link to="/sign-up?role=student">Join as Student</Link>
              </Button>
            </div>
            
            <div className="ghibli-card p-6 dark:glow-green">
              <div className="text-ghibli-deep-blue dark:text-ghibli-sky-blue text-xl font-semibold mb-3">
                For Mentors
              </div>
              <p className="mb-4">Create learning materials, assess student progress, provide personalized feedback, and guide your students.</p>
              <Button asChild size="lg" variant="outline">
                <Link to="/sign-up?role=mentor">Join as Mentor</Link>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="ghibli-card p-4 dark:glow-rose">
              <h2 className="font-semibold mb-2">Personalized Learning</h2>
              <p className="text-sm">Study videos and materials tailored to your needs</p>
            </div>
            <div className="ghibli-card p-4 dark:glow-green">
              <h2 className="font-semibold mb-2">Gamified Learning</h2>
              <p className="text-sm">Fun quizzes with leaderboards for healthy competition</p>
            </div>
            <div className="ghibli-card p-4 dark:glow-rose">
              <h2 className="font-semibold mb-2">Smart Assessment</h2>
              <p className="text-sm">AI-powered feedback and personalized improvement tips</p>
            </div>
            <div className="ghibli-card p-4 dark:glow-green">
              <h2 className="font-semibold mb-2">Mental Well-being</h2>
              <p className="text-sm">Resources to support your mental health journey</p>
            </div>
          </div>
        </div>

        {/* Feature Cards from Original Design */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-500" />
                Learning Resources
              </CardTitle>
              <CardDescription>
                Access course materials, lectures, and study guides
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Explore an extensive library of educational resources carefully curated for VIT Bhopal students.
              </p>
            </CardContent>
            <CardFooter>
              <Link to="/learning" className="w-full">
                <Button className="w-full">Explore Learning</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart className="h-5 w-5 text-green-500" />
                Assessments
              </CardTitle>
              <CardDescription>
                Test your knowledge with quizzes and practice tests
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Prepare for exams with practice assessments that mimic the real test environment.
              </p>
            </CardContent>
            <CardFooter>
              <Link to="/assessment" className="w-full">
                <Button className="w-full">Take Assessment</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-amber-500" />
                Gamified Learning
              </CardTitle>
              <CardDescription>
                Make learning fun with games, challenges, and rewards
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Engage with interactive quizzes, climb leaderboards, earn badges, and compete with peers in a fun learning environment.
              </p>
            </CardContent>
            <CardFooter>
              <Link to="/gamified-learning" className="w-full">
                <Button className="w-full bg-amber-500 hover:bg-amber-600">Gamified Learning</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5 text-purple-500" />
                Mental Health
              </CardTitle>
              <CardDescription>
                Resources for mental wellbeing and stress management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Access tools and support for maintaining good mental health during your academic journey.
              </p>
            </CardContent>
            <CardFooter>
              <Link to="/mental-health" className="w-full">
                <Button className="w-full">Mental Health</Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-indigo-500" />
                Community
              </CardTitle>
              <CardDescription>
                Connect with peers, mentors, and alumni
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Join discussion forums, participate in group studies, and network with the VIT Bhopal community.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Coming Soon</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-red-500" />
                Performance Tracking
              </CardTitle>
              <CardDescription>
                Monitor your academic progress and performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Track your grades, attendance, and learning outcomes with comprehensive analytics.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Coming Soon</Button>
            </CardFooter>
          </Card>
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
    </div>
  );
}
