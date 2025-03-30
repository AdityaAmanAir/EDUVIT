
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Brain, Lightbulb, Heart, Sun, BookOpen, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MentalWellbeing = () => {
  const { toast } = useToast();
  const [progress, setProgress] = useState(20);

  const incrementProgress = () => {
    setProgress((prev) => Math.min(prev + 10, 100));
    if (progress >= 90) {
      toast({
        title: "Wellness Journey",
        description: "You've completed your wellness journey for today!"
      });
    }
  };

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Mental Well-being</h1>
        <p className="text-muted-foreground">
          Explore resources and practices to enhance your mental well-being during your academic journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              Cognitive Wellness
            </CardTitle>
            <CardDescription>
              Enhancing mental clarity and focus
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Cognitive wellness involves practices that help maintain mental clarity, improve focus, and enhance cognitive abilities. It's essential for academic success.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              Emotional Balance
            </CardTitle>
            <CardDescription>
              Processing and managing emotions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Emotional balance helps you navigate the ups and downs of academic life, allowing you to respond to stress in healthier ways.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Sun className="h-5 w-5 text-primary" />
              Social Connection
            </CardTitle>
            <CardDescription>
              Building meaningful relationships
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Social well-being involves creating and maintaining positive relationships that provide support during challenging times.
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Well-being Journey</CardTitle>
          <CardDescription>Track your progress through well-being practices</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Progress value={progress} className="h-2 w-full" />
          <div className="flex justify-between">
            <span className="text-xs">Beginning</span>
            <span className="text-xs">Intermediate</span>
            <span className="text-xs">Advanced</span>
          </div>
          <Button onClick={incrementProgress}>Complete Daily Practice</Button>
        </CardContent>
      </Card>

      <Tabs defaultValue="mindfulness">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="mindfulness">Mindfulness</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="research">Research</TabsTrigger>
        </TabsList>
        
        <TabsContent value="mindfulness" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" /> Mindfulness Practices
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Breathing Exercise</h3>
                <p>Practice 4-7-8 breathing: Inhale for 4 counts, hold for 7, exhale for 8. This activates your parasympathetic nervous system.</p>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Body Scan Meditation</h3>
                <p>Take 5 minutes to mentally scan your body from head to toe, noticing sensations without judgment.</p>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Mindful Study Session</h3>
                <p>Study for 25 minutes with complete focus, then take a 5-minute mindful break. Repeat 4 times.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="resources" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" /> Helpful Resources
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">VIT Counseling Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Free confidential counseling is available for all students. Visit the Student Services building or call 123-456-7890.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Headspace Student Plan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">VIT students get Headspace meditation app at 85% off. Access guided meditations designed for students.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Academic Support Center</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Get help with time management, study skills, and academic stress. Located in the Library, Room 202.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Wellness Workshops</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Free weekly workshops on topics like stress management, sleep hygiene, and healthy relationships.</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="research" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" /> Recent Research
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">The Impact of Mindfulness on Academic Performance</h3>
                <p className="text-sm text-muted-foreground">Journal of Educational Psychology, 2023</p>
                <p>Research shows that students who practice mindfulness for just 10 minutes before studying show improved retention and recall by up to 30%.</p>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Social Connection and Student Well-being</h3>
                <p className="text-sm text-muted-foreground">Higher Education Research, 2022</p>
                <p>Students who maintain regular social connections show greater resilience to academic stress and are 40% less likely to experience burnout.</p>
              </div>
              
              <Separator />
              
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Sleep Quality and Academic Achievement</h3>
                <p className="text-sm text-muted-foreground">Cognitive Science Journal, 2023</p>
                <p>Research indicates that consistent sleep patterns are more strongly correlated with higher GPA than total hours studied.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MentalWellbeing;
