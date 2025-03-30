import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  HeartPulse, Users, Smile, ExternalLink, Phone, 
  Mail, Calendar, BookOpen, CheckCircle2, 
  BrainCircuit, PencilRuler, Dumbbell, ClipboardCheck, 
  SunMoon, BookMarked, MessageCircle 
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

const MentalHealth = () => {
  const [openSelfCheck, setOpenSelfCheck] = useState(false);
  const [anxietyScore, setAnxietyScore] = useState(0);
  const [stressScore, setStressScore] = useState(0);
  
  return (
    <div className="container mx-auto p-4">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Mental Wellbeing</h1>
            <p className="text-muted-foreground mt-1">Resources and support for your mental health journey</p>
          </div>
          <Button className="mt-2 md:mt-0">
            <HeartPulse className="mr-2 h-4 w-4" />
            Book Appointment
          </Button>
        </div>

        <Tabs defaultValue="resources" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="support">Support Services</TabsTrigger>
            <TabsTrigger value="wellness">Wellness Tips</TabsTrigger>
            <TabsTrigger value="academic">Academic Balance</TabsTrigger>
          </TabsList>

          <TabsContent value="resources" className="space-y-4 mt-4">
            <ScrollArea className="h-[calc(100vh-250px)]">
              <div className="space-y-4 pr-4">
                {/* Self-assessment tool */}
                <Card className="border-primary/20">
                  <CardHeader className="bg-primary/5 rounded-t-lg">
                    <CardTitle className="flex items-center">
                      <ClipboardCheck className="h-5 w-5 mr-2 text-primary" />
                      Self-Assessment Tools
                    </CardTitle>
                    <CardDescription>Simple checks to understand your current mental state</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Collapsible
                      open={openSelfCheck}
                      onOpenChange={setOpenSelfCheck}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between space-x-4 px-4">
                        <h4 className="text-sm font-semibold">
                          Quick Mental Wellbeing Check
                        </h4>
                        <CollapsibleTrigger asChild>
                          <Button variant="ghost" size="sm" className="w-9 p-0">
                            <MessageCircle className="h-4 w-4" />
                            <span className="sr-only">Toggle</span>
                          </Button>
                        </CollapsibleTrigger>
                      </div>
                      
                      <CollapsibleContent className="space-y-4">
                        <div className="rounded-md border px-4 py-3 font-mono text-sm">
                          <p className="text-muted-foreground mb-3">
                            This is a simplified, non-diagnostic tool. For proper assessment, please consult a mental health professional.
                          </p>
                          
                          <div className="space-y-4">
                            <div>
                              <h3 className="font-medium">Anxiety Level</h3>
                              <div className="flex items-center mt-2">
                                <span className="text-xs text-muted-foreground mr-2 w-6">Low</span>
                                <Progress value={anxietyScore * 10} className="flex-1" />
                                <span className="text-xs text-muted-foreground ml-2 w-6">High</span>
                              </div>
                              <div className="flex justify-between mt-2">
                                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                                  <Button
                                    key={value}
                                    variant={anxietyScore === value ? "default" : "outline"}
                                    size="sm"
                                    className="h-8 w-8 p-0"
                                    onClick={() => setAnxietyScore(value)}
                                  >
                                    {value}
                                  </Button>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h3 className="font-medium">Stress Level</h3>
                              <div className="flex items-center mt-2">
                                <span className="text-xs text-muted-foreground mr-2 w-6">Low</span>
                                <Progress value={stressScore * 10} className="flex-1" />
                                <span className="text-xs text-muted-foreground ml-2 w-6">High</span>
                              </div>
                              <div className="flex justify-between mt-2">
                                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                                  <Button
                                    key={value}
                                    variant={stressScore === value ? "default" : "outline"}
                                    size="sm"
                                    className="h-8 w-8 p-0"
                                    onClick={() => setStressScore(value)}
                                  >
                                    {value}
                                  </Button>
                                ))}
                              </div>
                            </div>
                            
                            <div className="mt-4">
                              <h3 className="font-medium mb-2">Quick Analysis</h3>
                              <div className={cn(
                                "rounded-lg p-3",
                                (anxietyScore > 7 || stressScore > 7) 
                                  ? "bg-red-500/10 text-red-700 dark:text-red-300" 
                                  : (anxietyScore > 4 || stressScore > 4)
                                    ? "bg-yellow-500/10 text-yellow-700 dark:text-yellow-300"
                                    : "bg-green-500/10 text-green-700 dark:text-green-300"
                              )}>
                                {(anxietyScore > 7 || stressScore > 7) && (
                                  <p>Your scores indicate you may be experiencing high levels of distress. Consider scheduling an appointment with a counselor soon.</p>
                                )}
                                {(anxietyScore <= 7 && stressScore <= 7) && (anxietyScore > 4 || stressScore > 4) && (
                                  <p>Your scores suggest moderate stress or anxiety. Exploring stress management techniques could be helpful.</p>
                                )}
                                {(anxietyScore <= 4 && stressScore <= 4) && (
                                  <p>Your scores suggest you're managing well at the moment. Continue practicing healthy habits!</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Understanding Mental Health</CardTitle>
                    <CardDescription>Key concepts and research-backed information</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>What is mental health?</AccordionTrigger>
                        <AccordionContent>
                          Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Common mental health challenges for students</AccordionTrigger>
                        <AccordionContent>
                          <ul className="list-disc pl-6 space-y-2">
                            <li><span className="font-medium">Academic stress:</span> Pressure to perform well, heavy workload, and fear of failure</li>
                            <li><span className="font-medium">Anxiety:</span> Excessive worry about exams, presentations, or social situations</li>
                            <li><span className="font-medium">Depression:</span> Persistent feelings of sadness, hopelessness, or lack of motivation</li>
                            <li><span className="font-medium">Burnout:</span> Physical and emotional exhaustion from prolonged stress</li>
                            <li><span className="font-medium">Social isolation:</span> Difficulty building connections, especially for international students</li>
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>How to recognize warning signs</AccordionTrigger>
                        <AccordionContent>
                          <p>Look out for these potential warning signs:</p>
                          <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>Persistent feelings of sadness or emptiness</li>
                            <li>Withdrawal from friends, family, and regular activities</li>
                            <li>Significant changes in eating or sleeping patterns</li>
                            <li>Difficulty concentrating or making decisions</li>
                            <li>Unexplained physical problems like headaches or stomach pain</li>
                            <li>Increased use of alcohol or drugs</li>
                            <li>Thoughts of self-harm or suicide</li>
                          </ul>
                          <p className="mt-3 text-muted-foreground">If you or someone you know is experiencing these signs, please reach out for professional help.</p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>

                {/* New Research Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BrainCircuit className="h-5 w-5 mr-2 text-primary" />
                      Latest Research & Insights
                    </CardTitle>
                    <CardDescription>Recent findings in mental health science</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Card className="border border-muted p-4">
                      <h3 className="font-medium text-lg">Journal of College Mental Health (2023)</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Research shows that 15-20 minutes of mindfulness meditation can significantly improve focus and reduce test anxiety in college students.
                      </p>
                      <div className="flex justify-between items-center mt-3">
                        <span className="text-xs text-muted-foreground">doi: 10.1080/xxxxx</span>
                        <Button variant="link" className="h-auto p-0">Read Summary</Button>
                      </div>
                    </Card>
                    
                    <Card className="border border-muted p-4">
                      <h3 className="font-medium text-lg">Nature Human Behaviour (2023)</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Social connection is as important for health as diet and exercise, with strong social ties linked to better mental health outcomes among students.
                      </p>
                      <div className="flex justify-between items-center mt-3">
                        <span className="text-xs text-muted-foreground">doi: 10.1038/xxxxx</span>
                        <Button variant="link" className="h-auto p-0">Read Summary</Button>
                      </div>
                    </Card>
                    
                    <Card className="border border-muted p-4">
                      <h3 className="font-medium text-lg">Frontiers in Psychology (2022)</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Regular physical activity of 30+ minutes, 3 times weekly, improves mood and cognitive function in university students by up to 25%.
                      </p>
                      <div className="flex justify-between items-center mt-3">
                        <span className="text-xs text-muted-foreground">doi: 10.3389/xxxxx</span>
                        <Button variant="link" className="h-auto p-0">Read Summary</Button>
                      </div>
                    </Card>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Online Learning Resources</CardTitle>
                    <CardDescription>Free courses and educational materials</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <Card className="overflow-hidden">
                        <div className="p-6">
                          <BookOpen className="h-8 w-8 mb-2 text-primary" />
                          <h3 className="text-xl font-medium">Coursera: Mind Control</h3>
                          <p className="text-sm text-muted-foreground mt-1">Learn how to manage stress and build resilience through mindfulness techniques</p>
                        </div>
                        <div className="bg-muted p-4 flex justify-between items-center">
                          <span className="text-sm font-medium">Free course</span>
                          <Button variant="outline" size="sm" className="h-8">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Access
                          </Button>
                        </div>
                      </Card>

                      <Card className="overflow-hidden">
                        <div className="p-6">
                          <BookOpen className="h-8 w-8 mb-2 text-primary" />
                          <h3 className="text-xl font-medium">Udemy: Student Mental Health</h3>
                          <p className="text-sm text-muted-foreground mt-1">Comprehensive guide to maintaining mental wellbeing during academic life</p>
                        </div>
                        <div className="bg-muted p-4 flex justify-between items-center">
                          <span className="text-sm font-medium">Free access</span>
                          <Button variant="outline" size="sm" className="h-8">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Access
                          </Button>
                        </div>
                      </Card>
                    </div>

                    <Card className="p-6">
                      <h3 className="text-xl font-medium">Recommended Books & Articles</h3>
                      <div className="mt-4 space-y-3">
                        <div className="flex items-start gap-3">
                          <BookOpen className="h-5 w-5 text-muted-foreground mt-0.5" />
                          <div>
                            <p className="font-medium">Why We Sleep by Matthew Walker</p>
                            <p className="text-sm text-muted-foreground">Explores the critical role of sleep in cognitive function and mental health</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <BookOpen className="h-5 w-5 text-muted-foreground mt-0.5" />
                          <div>
                            <p className="font-medium">Atomic Habits by James Clear</p>
                            <p className="text-sm text-muted-foreground">Learn how to build good habits and break bad ones</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <BookOpen className="h-5 w-5 text-muted-foreground mt-0.5" />
                          <div>
                            <p className="font-medium">The Happiness Trap by Russ Harris</p>
                            <p className="text-sm text-muted-foreground">Introduction to ACT (Acceptance and Commitment Therapy)</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Digital Tools & Apps</CardTitle>
                    <CardDescription>Applications to support your mental wellbeing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      <Card className="p-4 border border-muted">
                        <h3 className="font-medium">Headspace</h3>
                        <p className="text-sm text-muted-foreground mt-1">Guided meditation and mindfulness exercises</p>
                        <Button variant="link" className="p-0 h-auto mt-2 text-primary">Learn more</Button>
                      </Card>
                      <Card className="p-4 border border-muted">
                        <h3 className="font-medium">Calm</h3>
                        <p className="text-sm text-muted-foreground mt-1">Sleep stories, meditation, and relaxation</p>
                        <Button variant="link" className="p-0 h-auto mt-2 text-primary">Learn more</Button>
                      </Card>
                      <Card className="p-4 border border-muted">
                        <h3 className="font-medium">Woebot</h3>
                        <p className="text-sm text-muted-foreground mt-1">AI-based cognitive behavioral therapy</p>
                        <Button variant="link" className="p-0 h-auto mt-2 text-primary">Learn more</Button>
                      </Card>
                      <Card className="p-4 border border-muted">
                        <h3 className="font-medium">Daylio</h3>
                        <p className="text-sm text-muted-foreground mt-1">Mood tracking and journaling app</p>
                        <Button variant="link" className="p-0 h-auto mt-2 text-primary">Learn more</Button>
                      </Card>
                      <Card className="p-4 border border-muted">
                        <h3 className="font-medium">Forest</h3>
                        <p className="text-sm text-muted-foreground mt-1">Focus time and digital wellbeing</p>
                        <Button variant="link" className="p-0 h-auto mt-2 text-primary">Learn more</Button>
                      </Card>
                      <Card className="p-4 border border-muted">
                        <h3 className="font-medium">Todoist</h3>
                        <p className="text-sm text-muted-foreground mt-1">Task management to reduce cognitive load</p>
                        <Button variant="link" className="p-0 h-auto mt-2 text-primary">Learn more</Button>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
                
                {/* New Resources */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookMarked className="h-5 w-5 mr-2 text-primary" />
                      Specialized Resources
                    </CardTitle>
                    <CardDescription>Support for specific challenges</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <Card className="p-4 border border-muted">
                        <h3 className="font-medium">For International Students</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Resources for cultural adjustment, homesickness, and building community
                        </p>
                        <ul className="text-sm mt-2 space-y-1">
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                            <span>Cultural adjustment workshops</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                            <span>Language exchange partners</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                            <span>International student buddy program</span>
                          </li>
                        </ul>
                      </Card>
                      
                      <Card className="p-4 border border-muted">
                        <h3 className="font-medium">For First-Year Students</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Help with transition to university life and independent living
                        </p>
                        <ul className="text-sm mt-2 space-y-1">
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                            <span>Freshman orientation counseling</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                            <span>Time management workshops</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                            <span>Peer mentorship programs</span>
                          </li>
                        </ul>
                      </Card>
                      
                      <Card className="p-4 border border-muted">
                        <h3 className="font-medium">For Graduate Students</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Support for research stress, work-life balance, and career planning
                        </p>
                        <ul className="text-sm mt-2 space-y-1">
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                            <span>Research and thesis support groups</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                            <span>Career counseling services</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                            <span>Work-life balance coaching</span>
                          </li>
                        </ul>
                      </Card>
                      
                      <Card className="p-4 border border-muted">
                        <h3 className="font-medium">For LGBTQ+ Students</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Resources for identity, community, and specific challenges
                        </p>
                        <ul className="text-sm mt-2 space-y-1">
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                            <span>LGBTQ+ support groups</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                            <span>Identity-affirming counseling</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                            <span>Campus Safe Zone program</span>
                          </li>
                        </ul>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="support" className="space-y-4 mt-4">
            <ScrollArea className="h-[calc(100vh-250px)]">
              <div className="space-y-4 pr-4">
                <Card>
                  <CardHeader>
                    <CardTitle>VIT Bhopal Counseling Services</CardTitle>
                    <CardDescription>Professional support available on campus</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>VIT Bhopal offers free, confidential counseling services to all students. Our professional counselors can help with:</p>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Academic stress</li>
                      <li>Adjustment issues</li>
                      <li>Relationship concerns</li>
                      <li>Anxiety and depression</li>
                      <li>Time management and study skills</li>
                      <li>Self-esteem and confidence</li>
                    </ul>

                    <div className="bg-muted rounded-lg p-4 mt-4">
                      <h3 className="font-medium text-lg">Contact Information</h3>
                      <div className="space-y-2 mt-2">
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span>counseling@vitbhopal.ac.in</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span>+91 xxx-xxx-xxxx</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>Monday-Friday, 9:00 AM - 5:00 PM</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-col sm:flex-row gap-4">
                      <Card className="flex-1 p-4">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-10 w-10">
                            <div className="flex h-full w-full items-center justify-center bg-primary text-primary-foreground">
                              DR
                            </div>
                          </Avatar>
                          <div>
                            <h4 className="font-medium">Dr. Ravi Kumar</h4>
                            <p className="text-sm text-muted-foreground">Head Counselor</p>
                          </div>
                        </div>
                      </Card>
                      <Card className="flex-1 p-4">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-10 w-10">
                            <div className="flex h-full w-full items-center justify-center bg-primary text-primary-foreground">
                              SM
                            </div>
                          </Avatar>
                          <div>
                            <h4 className="font-medium">Ms. Sonia Mehta</h4>
                            <p className="text-sm text-muted-foreground">Wellness Counselor</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>24/7 Helplines & Crisis Support</CardTitle>
                    <CardDescription>Emergency resources when you need immediate help</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 rounded-lg p-4">
                        <h3 className="text-red-700 dark:text-red-400 font-medium">If you're experiencing a mental health emergency:</h3>
                        <p className="text-sm mt-1">If you or someone you know is in immediate danger, call emergency services: <span className="font-bold">112</span></p>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <Card className="p-4">
                          <h3 className="font-medium">TISS iCall</h3>
                          <p className="text-sm text-muted-foreground mt-1">Psychosocial helpline that offers counseling by trained professionals</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Phone className="h-4 w-4" />
                            <span>+91-9152987821</span>
                          </div>
                        </Card>
                        <Card className="p-4">
                          <h3 className="font-medium">Vandrevala Foundation</h3>
                          <p className="text-sm text-muted-foreground mt-1">24/7 mental health helpline and support</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Phone className="h-4 w-4" />
                            <span>+91-9999666555</span>
                          </div>
                        </Card>
                        <Card className="p-4">
                          <h3 className="font-medium">AASRA</h3>
                          <p className="text-sm text-muted-foreground mt-1">24-hour crisis intervention and suicide prevention</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Phone className="h-4 w-4" />
                            <span>+91-9820466726</span>
                          </div>
                        </Card>
                        <Card className="p-4">
                          <h3 className="font-medium">Mann Samvad</h3>
                          <p className="text-sm text-muted-foreground mt-1">National mental health helpline</p>
                          <div className="flex items-center gap-2 mt-2">
                            <Phone className="h-4 w-4" />
                            <span>14416</span>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Peer Support Groups</CardTitle>
                    <CardDescription>Connect with others who understand what you're going through</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Card className="p-4 mb-4">
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-primary" />
                        <h3 className="font-medium">VIT Mental Health Collective</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">Student-led support group that meets weekly to discuss mental health challenges and share coping strategies.</p>
                      <div className="mt-3 flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>Thursdays, 5:30 PM - Academic Block, Room 204</span>
                      </div>
                    </Card>

                    <Card className="p-4 mb-4">
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-primary" />
                        <h3 className="font-medium">Anxiety Management Group</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">Focused on sharing and learning techniques to manage anxiety, especially around exams and presentations.</p>
                      <div className="mt-3 flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>Tuesdays, 4:00 PM - Student Center</span>
                      </div>
                    </Card>

                    <Card className="p-4">
                      <div className="flex items-center gap-3">
                        <Users className="h-5 w-5 text-primary" />
                        <h3 className="font-medium">International Students Circle</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">Support group for international students dealing with cultural adjustment, homesickness, and academic pressure.</p>
                      <div className="mt-3 flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>Fridays, 6:00 PM - International Student Office</span>
                      </div>
                    </Card>
                  </CardContent>
                </Card>
                
                {/* New Card for Online Support */}
                <Card>
                  <CardHeader className="bg-primary/5 rounded-t-lg">
                    <CardTitle className="flex items-center">
                      <Users className="h-5 w-5 mr-2 text-primary" />
                      Online Support Communities
                    </CardTitle>
                    <CardDescription>Virtual spaces where you can find support</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-4">
                    <Card className="p-4 border border-muted">
                      <h3 className="font-medium">7 Cups</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Free emotional support through trained listeners and online therapy with licensed therapists.
                      </p>
                      <Button variant="outline" size="sm" className="mt-3">
                        <ExternalLink className="h-3.5 w-3.5 mr-2" />
                        Visit Site
                      </Button>
                    </Card>
                    
                    <Card className="p-4 border border-muted">
                      <h3 className="font-medium">TalkLife</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        A supportive social network where you can share your mental health journey with peers from around the world.
                      </p>
                      <Button variant="outline" size="sm" className="mt-3">
                        <ExternalLink className="h-3.5 w-3.5 mr-2" />
                        Visit Site
                      </Button>
                    </Card>
                    
                    <Card className="p-4 border border-muted">
                      <h3 className="font-medium">The Mighty</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        A digital health community that publishes real stories by real people facing health challenges and disabilities.
                      </p>
                      <Button variant="outline" size="sm" className="mt-3">
                        <ExternalLink className="h-3.5 w-3.5 mr-2" />
                        Visit Site
                      </Button>
                    </Card>
                    
                    <Card className="p-4 border border-muted">
                      <h3 className="font-medium">Reddit Mental Health Communities</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Subreddits like r/mentalhealth, r/anxiety, and r/depression offer community support and discussion.
                      </p>
                      <Button variant="outline" size="sm" className="mt-3">
                        <ExternalLink className="h-3.5 w-3.5 mr-2" />
                        Visit Site
                      </Button>
                    </Card>
                  </CardContent>
                </Card>
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="wellness" className="space-y-4 mt-4">
            <ScrollArea className="h-[calc(100vh-2
