
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock, Target, Trophy, Calendar, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Mock data
  const studyTimeToday = 3.5;
  const studyGoal = 6;
  const progress = (studyTimeToday / studyGoal) * 100;
  
  const subjects = [
    { name: "Data Structures", time: 120, progress: 75 },
    { name: "Computer Networks", time: 90, progress: 60 },
    { name: "Machine Learning", time: 45, progress: 30 },
    { name: "Web Development", time: 60, progress: 40 },
  ];
  
  const upcomingTasks = [
    { title: "Algorithm Assignment", due: "Today", subject: "Data Structures" },
    { title: "Quiz: Network Models", due: "Tomorrow", subject: "Computer Networks" },
    { title: "Project Milestone", due: "2 days", subject: "Web Development" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your learning progress.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="ghibli-card">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Clock className="h-5 w-5 text-ghibli-deep-blue dark:text-ghibli-sky-blue" />
              Today's Study Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{studyTimeToday} hours</div>
            <Progress value={progress} className="h-2 mt-2 mb-1" />
            <p className="text-sm text-muted-foreground">
              {studyGoal - studyTimeToday} hours left to reach your daily goal
            </p>
          </CardContent>
        </Card>

        <Card className="ghibli-card">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <BookOpen className="h-5 w-5 text-ghibli-forest-green dark:text-ghibli-soft-green" />
              Learning Sessions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12</div>
            <p className="text-sm text-muted-foreground mt-2">
              Completed this week
            </p>
          </CardContent>
        </Card>

        <Card className="ghibli-card">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Trophy className="h-5 w-5 text-ghibli-warm-orange" />
              Quiz Points
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">250</div>
            <p className="text-sm text-muted-foreground mt-2">
              Rank #7 in your class
            </p>
          </CardContent>
        </Card>

        <Card className="ghibli-card">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Target className="h-5 w-5 text-ghibli-soft-pink dark:text-ghibli-soft-pink" />
              Completion Rate
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">89%</div>
            <p className="text-sm text-muted-foreground mt-2">
              Assignments completed on time
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="ghibli-card">
          <CardHeader>
            <CardTitle>Study Breakdown</CardTitle>
            <CardDescription>Time spent on each subject</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {subjects.map((subject) => (
                <div key={subject.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{subject.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {Math.floor(subject.time / 60)}h {subject.time % 60}m
                    </span>
                  </div>
                  <Progress value={subject.progress} className="h-2" />
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Button variant="outline" asChild className="w-full">
                <Link to="/learning">View All Subjects</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="ghibli-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-ghibli-deep-blue dark:text-ghibli-sky-blue" />
              Upcoming Tasks
            </CardTitle>
            <CardDescription>Your pending assignments and quizzes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingTasks.map((task, i) => (
                <div key={i} className="flex items-center justify-between border-b pb-3 last:border-0">
                  <div>
                    <div className="font-medium">{task.title}</div>
                    <div className="text-sm text-muted-foreground">{task.subject}</div>
                  </div>
                  <div className="text-sm font-medium">Due: {task.due}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <Button asChild className="flex-1">
                <Link to="/assessment">Assessment</Link>
              </Button>
              <Button variant="outline" asChild className="flex-1">
                <Link to="/gamification">Quizzes</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="ghibli-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-ghibli-forest-green dark:text-ghibli-soft-green" />
            Weekly Progress
          </CardTitle>
          <CardDescription>Your learning journey this week</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="h-[200px] relative">
            {/* This would be a chart in a real application */}
            <div className="absolute inset-0 flex items-center justify-center text-center text-muted-foreground">
              <div>
                <p>Study time visualization would go here</p>
                <p className="text-sm mt-2">(Using recharts library)</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="ghibli-card">
          <CardHeader>
            <CardTitle>Quick Links</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" asChild>
                <Link to="/learning">Videos</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/gamification">Quizzes</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/assessment">Feedback</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/mental-health">Well-being</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="ghibli-card col-span-2">
          <CardHeader>
            <CardTitle>Daily Inspiration</CardTitle>
          </CardHeader>
          <CardContent>
            <blockquote className="border-l-4 border-ghibli-sky-blue pl-4 italic">
              "The beginning is the most important part of the work."
            </blockquote>
            <div className="mt-2 text-right text-sm">— Plato</div>
            <Button className="w-full mt-4" variant="outline" asChild>
              <Link to="/mental-health">Get More Inspiration</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
