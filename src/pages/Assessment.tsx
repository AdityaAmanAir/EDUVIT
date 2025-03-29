
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { FileText, MessageSquare, Bot, ArrowUpRight, Clock, Calendar } from "lucide-react";

const Assessment = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Smart Assessment & Feedback</h1>
        <p className="text-muted-foreground">
          Track your assignments, view feedback, and improve your performance.
        </p>
      </div>
      
      <Tabs defaultValue="assignments">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="assignments" className="mt-6">
          <AssignmentsTab />
        </TabsContent>
        
        <TabsContent value="feedback" className="mt-6">
          <FeedbackTab />
        </TabsContent>
        
        <TabsContent value="analytics" className="mt-6">
          <AnalyticsTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

const AssignmentsTab = () => {
  const pendingAssignments = [
    {
      id: 1,
      title: "Data Structures Implementation",
      subject: "CS101",
      dueDate: "2023-10-30",
      status: "pending",
      progress: 30,
    },
    {
      id: 2,
      title: "Network Architecture Analysis",
      subject: "CN202",
      dueDate: "2023-11-05",
      status: "pending",
      progress: 60,
    },
    {
      id: 3,
      title: "Database Design Project",
      subject: "DB303",
      dueDate: "2023-11-10",
      status: "pending",
      progress: 0,
    },
  ];
  
  const completedAssignments = [
    {
      id: 4,
      title: "Algorithm Analysis Report",
      subject: "CS202",
      submittedDate: "2023-10-15",
      grade: "A",
      percentage: 92,
    },
    {
      id: 5,
      title: "Web Development Portfolio",
      subject: "WD404",
      submittedDate: "2023-10-10",
      grade: "B+",
      percentage: 87,
    },
  ];
  
  return (
    <div className="space-y-8">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Pending Assignments</h2>
          <Button variant="outline" size="sm">
            Sync with Google Classroom
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {pendingAssignments.map((assignment) => (
            <Card key={assignment.id} className="ghibli-card">
              <CardHeader>
                <div className="flex justify-between">
                  <CardTitle>{assignment.title}</CardTitle>
                  <Badge variant="outline">{assignment.subject}</Badge>
                </div>
                <CardDescription className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  Due: {new Date(assignment.dueDate).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>{assignment.progress}%</span>
                  </div>
                  <Progress value={assignment.progress} className="h-2" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">View Details</Button>
                <Button>
                  {assignment.progress > 0 ? "Continue" : "Start Assignment"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-4">Completed Assignments</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {completedAssignments.map((assignment) => (
            <Card key={assignment.id} className="ghibli-card">
              <CardHeader>
                <div className="flex justify-between">
                  <CardTitle>{assignment.title}</CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{assignment.subject}</Badge>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                      {assignment.grade}
                    </Badge>
                  </div>
                </div>
                <CardDescription className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  Submitted: {new Date(assignment.submittedDate).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Score</span>
                    <span>{assignment.percentage}%</span>
                  </div>
                  <Progress value={assignment.percentage} className="h-2" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">View Submission</Button>
                <Button variant="outline">View Feedback</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const FeedbackTab = () => {
  const aiFeedback = [
    {
      id: 1,
      title: "Algorithm Analysis Report",
      type: "AI",
      date: "2023-10-16",
      summary: "Your analysis demonstrates solid understanding of time complexity. Consider elaborating more on space complexity in future assignments.",
      strengths: ["Clear explanation of algorithms", "Good use of examples", "Proper citations"],
      improvements: ["Expand on space complexity analysis", "Include more comparative analysis"]
    },
    {
      id: 2,
      title: "Web Development Portfolio",
      type: "AI",
      date: "2023-10-11",
      summary: "Your portfolio showcases creative design skills. Focus on improving responsive layouts and code organization in future projects.",
      strengths: ["Creative UI/UX design", "Good project variety", "Clean visual presentation"],
      improvements: ["Enhance mobile responsiveness", "Improve code organization", "Add more interactive elements"]
    }
  ];
  
  const mentorFeedback = [
    {
      id: 3,
      title: "Algorithm Analysis Report",
      mentorName: "Dr. Johnson",
      date: "2023-10-17",
      message: "Well-researched report with clear explanations. For your next assignment, try to include more real-world applications of these algorithms to demonstrate practical understanding.",
    },
    {
      id: 4,
      title: "Web Development Portfolio",
      mentorName: "Prof. Patel",
      date: "2023-10-12",
      message: "Good work on your portfolio! I particularly liked your e-commerce project. Consider adding more documentation to your code and exploring accessibility features in your next projects.",
    }
  ];
  
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-4">AI-Generated Feedback</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {aiFeedback.map((feedback) => (
            <Card key={feedback.id} className="ghibli-card">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{feedback.title}</CardTitle>
                  <Badge className="bg-primary/20 text-primary">
                    <Bot className="h-3 w-3 mr-1" />
                    AI Feedback
                  </Badge>
                </div>
                <CardDescription className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {new Date(feedback.date).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Summary</h3>
                  <p className="text-sm text-muted-foreground">{feedback.summary}</p>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Strengths</h3>
                  <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                    {feedback.strengths.map((strength, i) => (
                      <li key={i}>{strength}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-medium mb-2">Areas for Improvement</h3>
                  <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                    {feedback.improvements.map((improvement, i) => (
                      <li key={i}>{improvement}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Request Detailed Analysis</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-4">Mentor Feedback</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mentorFeedback.map((feedback) => (
            <Card key={feedback.id} className="ghibli-card">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{feedback.title}</CardTitle>
                  <Badge variant="outline">
                    <MessageSquare className="h-3 w-3 mr-1" />
                    Mentor
                  </Badge>
                </div>
                <CardDescription>
                  From {feedback.mentorName} • {new Date(feedback.date).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feedback.message}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Send Reply</Button>
                <Button variant="outline">Schedule Discussion</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const AnalyticsTab = () => {
  const performanceMetrics = {
    overallGrade: "B+",
    averageScore: 87,
    submissionRate: 95,
    onTimeSubmissions: 90,
    assignmentsCompleted: 8,
    totalAssignments: 10,
  };
  
  const subjectPerformance = [
    { subject: "Computer Science", grade: "A", score: 92 },
    { subject: "Computer Networks", grade: "B+", score: 87 },
    { subject: "Database Management", grade: "B", score: 84 },
    { subject: "Web Development", grade: "A-", score: 89 },
  ];
  
  const improvementAreas = [
    { area: "Code Quality", current: 80, target: 90 },
    { area: "Documentation", current: 75, target: 85 },
    { area: "Problem Analysis", current: 85, target: 90 },
    { area: "Testing", current: 70, target: 85 },
  ];
  
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="ghibli-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Overall Grade</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-primary">{performanceMetrics.overallGrade}</div>
          </CardContent>
        </Card>
        
        <Card className="ghibli-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">{performanceMetrics.averageScore}%</div>
          </CardContent>
        </Card>
        
        <Card className="ghibli-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Submission Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">{performanceMetrics.submissionRate}%</div>
            <p className="text-xs text-muted-foreground mt-1">
              {performanceMetrics.assignmentsCompleted} of {performanceMetrics.totalAssignments} assignments
            </p>
          </CardContent>
        </Card>
        
        <Card className="ghibli-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">On-Time Submissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">{performanceMetrics.onTimeSubmissions}%</div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="ghibli-card">
          <CardHeader>
            <CardTitle>Subject Performance</CardTitle>
            <CardDescription>Your grades across different subjects</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {subjectPerformance.map((subject, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{subject.subject}</span>
                    <span className="font-medium">{subject.grade} ({subject.score}%)</span>
                  </div>
                  <Progress value={subject.score} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="ghibli-card">
          <CardHeader>
            <CardTitle>Areas for Improvement</CardTitle>
            <CardDescription>Based on AI and mentor feedback</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {improvementAreas.map((area, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{area.area}</span>
                    <span className="text-sm text-muted-foreground">
                      {area.current}% → {area.target}%
                    </span>
                  </div>
                  <div className="relative pt-1">
                    <div className="h-2 w-full bg-gray-200 rounded-full">
                      <div
                        className="h-2 rounded-full bg-primary"
                        style={{ width: `${area.current}%` }}
                      ></div>
                      <div
                        className="absolute h-4 w-1 bg-primary/50 rounded-full top-0 -mt-1"
                        style={{ left: `${area.target}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="ghibli-card">
        <CardHeader>
          <CardTitle>Performance Trend</CardTitle>
          <CardDescription>Your assignment scores over time</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="h-[300px] relative">
            {/* This would be a chart in a real application */}
            <div className="absolute inset-0 flex items-center justify-center text-center text-muted-foreground">
              <div>
                <p>Performance trend visualization would go here</p>
                <p className="text-sm mt-2">(Using recharts library)</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-center">
        <Button className="flex items-center gap-2">
          <FileText className="h-4 w-4" />
          Generate Comprehensive Report
        </Button>
      </div>
    </div>
  );
};

export default Assessment;
