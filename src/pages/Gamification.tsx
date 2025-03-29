
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, Clock, Users, Award, CheckCircle2 } from "lucide-react";

const Gamification = () => {
  const [activeTab, setActiveTab] = useState("quizzes");
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Gamification</h1>
        <p className="text-muted-foreground">
          Test your knowledge with interactive quizzes and compete with peers.
        </p>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full max-w-md grid-cols-3 mb-6">
          <TabsTrigger value="quizzes">Quizzes</TabsTrigger>
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>
        
        <TabsContent value="quizzes">
          <QuizzesTab />
        </TabsContent>
        
        <TabsContent value="leaderboard">
          <LeaderboardTab />
        </TabsContent>
        
        <TabsContent value="achievements">
          <AchievementsTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

const QuizzesTab = () => {
  const availableQuizzes = [
    {
      id: 1,
      title: "Data Structures Fundamentals",
      description: "Test your knowledge of arrays, linked lists, stacks, and queues.",
      difficulty: "Medium",
      questions: 10,
      timeLimit: 15,
      points: 100,
    },
    {
      id: 2,
      title: "Computer Networks Basics",
      description: "Quiz covering OSI model, TCP/IP, and network protocols.",
      difficulty: "Hard",
      questions: 15,
      timeLimit: 20,
      points: 150,
    },
    {
      id: 3,
      title: "Web Development Essentials",
      description: "HTML, CSS, and JavaScript fundamentals quiz.",
      difficulty: "Easy",
      questions: 8,
      timeLimit: 10,
      points: 80,
    },
    {
      id: 4,
      title: "Database Management Systems",
      description: "SQL queries, normalization, and database design principles.",
      difficulty: "Medium",
      questions: 12,
      timeLimit: 18,
      points: 120,
    },
  ];
  
  const completedQuizzes = [
    {
      id: 5,
      title: "Programming Basics",
      description: "Variables, data types, loops, and conditionals.",
      difficulty: "Easy",
      questions: 10,
      score: 90,
      points: 80,
      dateTaken: "2023-10-15",
    },
    {
      id: 6,
      title: "Object-Oriented Programming",
      description: "Classes, objects, inheritance, and polymorphism.",
      difficulty: "Medium",
      questions: 12,
      score: 75,
      points: 100,
      dateTaken: "2023-10-10",
    }
  ];
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'hard': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Available Quizzes</h2>
        <Button variant="outline">
          <CheckCircle2 className="mr-2 h-4 w-4" />
          Show All
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {availableQuizzes.map((quiz) => (
          <Card key={quiz.id} className="ghibli-card">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>{quiz.title}</CardTitle>
                <Badge className={getDifficultyColor(quiz.difficulty)}>
                  {quiz.difficulty}
                </Badge>
              </div>
              <CardDescription>{quiz.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between text-sm mb-4">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{quiz.timeLimit} min</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-1 text-amber-500" />
                  <span>{quiz.points} points</span>
                </div>
                <div>
                  {quiz.questions} questions
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Start Quiz</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-6">Completed Quizzes</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {completedQuizzes.map((quiz) => (
            <Card key={quiz.id} className="ghibli-card">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{quiz.title}</CardTitle>
                  <Badge className={getDifficultyColor(quiz.difficulty)}>
                    {quiz.difficulty}
                  </Badge>
                </div>
                <CardDescription>{quiz.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Score: {quiz.score}%</span>
                      <span className="text-sm font-medium">{quiz.points} points earned</span>
                    </div>
                    <Progress value={quiz.score} className="h-2" />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Completed on {new Date(quiz.dateTaken).toLocaleDateString()}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Review Answers</Button>
                <Button>Retry Quiz</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const LeaderboardTab = () => {
  const leaderboardData = [
    { rank: 1, name: "Alex Johnson", points: 1250, badges: 8 },
    { rank: 2, name: "Sophia Chen", points: 1120, badges: 7 },
    { rank: 3, name: "Raj Patel", points: 980, badges: 6 },
    { rank: 4, name: "Emma Wilson", points: 870, badges: 5 },
    { rank: 5, name: "Miguel Santos", points: 810, badges: 5 },
    { rank: 6, name: "Aisha Khan", points: 790, badges: 4 },
    { rank: 7, name: "You", points: 750, badges: 4, isCurrentUser: true },
    { rank: 8, name: "David Lee", points: 720, badges: 4 },
    { rank: 9, name: "Olivia Brown", points: 690, badges: 3 },
    { rank: 10, name: "Jamal Williams", points: 650, badges: 3 },
  ];
  
  return (
    <div className="space-y-6">
      <Card className="ghibli-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-amber-500" />
            Leaderboard
          </CardTitle>
          <CardDescription>
            Top performers based on quiz points and achievements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {leaderboardData.map((entry) => (
              <div 
                key={entry.rank}
                className={`flex items-center p-3 rounded-lg ${
                  entry.isCurrentUser 
                    ? "bg-primary/10 border border-primary/30" 
                    : "hover:bg-muted/50"
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                  entry.rank === 1 ? "bg-amber-500 text-white" :
                  entry.rank === 2 ? "bg-gray-400 text-white" :
                  entry.rank === 3 ? "bg-amber-700 text-white" :
                  "bg-muted text-foreground"
                }`}>
                  {entry.rank}
                </div>
                <div className="flex-1">
                  <div className="font-medium">{entry.name}</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-1" />
                    <span>{entry.badges}</span>
                  </div>
                  <div className="text-right font-semibold">
                    {entry.points} pts
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="ghibli-card">
          <CardHeader>
            <CardTitle>Weekly Progress</CardTitle>
            <CardDescription>Points earned this week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px] flex items-center justify-center">
              <p className="text-muted-foreground text-center">
                Weekly progress chart would go here
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card className="ghibli-card">
          <CardHeader>
            <CardTitle>Your Statistics</CardTitle>
            <CardDescription>Quiz performance and badges</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="border rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">750</div>
                <div className="text-sm text-muted-foreground">Total Points</div>
              </div>
              <div className="border rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">82%</div>
                <div className="text-sm text-muted-foreground">Avg. Score</div>
              </div>
              <div className="border rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">12</div>
                <div className="text-sm text-muted-foreground">Quizzes Taken</div>
              </div>
              <div className="border rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">4</div>
                <div className="text-sm text-muted-foreground">Badges Earned</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const AchievementsTab = () => {
  const achievements = [
    {
      id: 1,
      name: "First Steps",
      description: "Complete your first quiz",
      icon: "🏆",
      earned: true,
      progress: 100,
      date: "2023-09-10",
    },
    {
      id: 2,
      name: "Quick Learner",
      description: "Complete 5 quizzes",
      icon: "🚀",
      earned: true,
      progress: 100,
      date: "2023-09-28",
    },
    {
      id: 3,
      name: "Knowledge Seeker",
      description: "Complete 10 quizzes",
      icon: "📚",
      earned: false,
      progress: 80,
    },
    {
      id: 4,
      name: "Perfect Score",
      description: "Get 100% on any quiz",
      icon: "⭐",
      earned: false,
      progress: 0,
    },
    {
      id: 5,
      name: "Speed Demon",
      description: "Complete a quiz in half the allotted time",
      icon: "⚡",
      earned: true,
      progress: 100,
      date: "2023-10-05",
    },
    {
      id: 6,
      name: "Top of the Class",
      description: "Reach the top 3 on the leaderboard",
      icon: "🥇",
      earned: false,
      progress: 0,
    },
  ];
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((achievement) => (
          <Card 
            key={achievement.id} 
            className={`ghibli-card ${achievement.earned ? "border-primary/50" : "opacity-75"}`}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="text-3xl">{achievement.icon}</div>
                  <CardTitle>{achievement.name}</CardTitle>
                </div>
                {achievement.earned && (
                  <Badge className="bg-primary">Earned</Badge>
                )}
              </div>
              <CardDescription>{achievement.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{achievement.progress}%</span>
                </div>
                <Progress value={achievement.progress} className="h-2" />
                {achievement.earned && achievement.date && (
                  <div className="text-xs text-muted-foreground mt-2">
                    Earned on {new Date(achievement.date).toLocaleDateString()}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card className="ghibli-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-primary" />
            Your Badge Collection
          </CardTitle>
          <CardDescription>
            Special achievements you've unlocked
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="text-4xl">🏆</div>
            </div>
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="text-4xl">🚀</div>
            </div>
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="text-4xl">⚡</div>
            </div>
            <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center opacity-40">
              <div className="text-4xl">📚</div>
            </div>
            <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center opacity-40">
              <div className="text-4xl">⭐</div>
            </div>
            <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center opacity-40">
              <div className="text-4xl">🥇</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Gamification;
