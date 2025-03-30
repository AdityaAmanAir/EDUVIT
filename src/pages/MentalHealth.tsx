
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
            <ScrollArea className="h-[calc(100vh-250px)]">
              <div className="space-y-4 pr-4">
                {/* Mindfulness Practices */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Smile className="h-5 w-5 mr-2 text-primary" />
                      Mindfulness Practices
                    </CardTitle>
                    <CardDescription>Simple techniques to stay present and reduce stress</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <Card className="p-4 border border-muted">
                        <h3 className="font-medium flex items-center">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-2 text-primary">1</div>
                          Box Breathing
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2">
                          A simple technique to calm your nervous system:
                        </p>
                        <ol className="list-decimal pl-5 text-sm mt-2 space-y-1">
                          <li>Inhale for 4 counts</li>
                          <li>Hold for 4 counts</li>
                          <li>Exhale for 4 counts</li>
                          <li>Hold for 4 counts</li>
                          <li>Repeat 5 times</li>
                        </ol>
                        <p className="text-xs text-muted-foreground mt-2">
                          Perfect before exams or presentations to reduce anxiety
                        </p>
                      </Card>
                      
                      <Card className="p-4 border border-muted">
                        <h3 className="font-medium flex items-center">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-2 text-primary">2</div>
                          5-4-3-2-1 Grounding
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2">
                          When feeling overwhelmed, identify:
                        </p>
                        <ul className="text-sm mt-2 space-y-1">
                          <li>5 things you can see</li>
                          <li>4 things you can touch</li>
                          <li>3 things you can hear</li>
                          <li>2 things you can smell</li>
                          <li>1 thing you can taste</li>
                        </ul>
                        <p className="text-xs text-muted-foreground mt-2">
                          Brings you back to the present moment during anxiety
                        </p>
                      </Card>
                      
                      <Card className="p-4 border border-muted">
                        <h3 className="font-medium flex items-center">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-2 text-primary">3</div>
                          Body Scan Meditation
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2">
                          Take 5-10 minutes to mentally scan your body from head to toe, noticing sensations without judgment.
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          Helps release physical tension you may not realize you're holding
                        </p>
                      </Card>
                      
                      <Card className="p-4 border border-muted">
                        <h3 className="font-medium flex items-center">
                          <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-2 text-primary">4</div>
                          Mindful Walking
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2">
                          While walking between classes, pay attention to each step, the sensation of your feet touching the ground, and your breathing.
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          Transforms routine walks into mindfulness practice
                        </p>
                      </Card>
                    </div>
                    
                    <Card className="p-4">
                      <h3 className="text-lg font-medium">Quick Mindfulness Timer</h3>
                      <p className="text-sm text-muted-foreground mt-1">Take a short mindfulness break right now:</p>
                      <div className="flex gap-2 mt-3">
                        <Button variant="outline" size="sm">1 minute</Button>
                        <Button variant="outline" size="sm">3 minutes</Button>
                        <Button variant="outline" size="sm">5 minutes</Button>
                        <Button variant="outline" size="sm">10 minutes</Button>
                      </div>
                    </Card>
                  </CardContent>
                </Card>
                
                {/* Physical Wellbeing */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Dumbbell className="h-5 w-5 mr-2 text-primary" />
                      Physical Wellbeing
                    </CardTitle>
                    <CardDescription>Caring for your body to support your mind</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-3">
                        <Card className="p-4 border border-muted">
                          <h3 className="font-medium">Sleep Hygiene</h3>
                          <ul className="text-sm mt-2 space-y-1.5">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5" />
                              <span>Aim for 7-9 hours of sleep per night</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5" />
                              <span>Maintain a consistent sleep schedule</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5" />
                              <span>Avoid screens 1 hour before bed</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5" />
                              <span>Keep your bedroom cool and dark</span>
                            </li>
                          </ul>
                        </Card>
                        
                        <Card className="p-4 border border-muted">
                          <h3 className="font-medium">Nutrition</h3>
                          <ul className="text-sm mt-2 space-y-1.5">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5" />
                              <span>Stay hydrated throughout the day</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5" />
                              <span>Include protein with each meal</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5" />
                              <span>Eat regular meals to maintain energy</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5" />
                              <span>Limit caffeine, especially after 2pm</span>
                            </li>
                          </ul>
                        </Card>
                        
                        <Card className="p-4 border border-muted">
                          <h3 className="font-medium">Movement</h3>
                          <ul className="text-sm mt-2 space-y-1.5">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5" />
                              <span>Aim for 30 minutes of activity daily</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5" />
                              <span>Take short walking breaks between study sessions</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5" />
                              <span>Try campus fitness classes or sports</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5" />
                              <span>Stretch regularly, especially when sitting for long periods</span>
                            </li>
                          </ul>
                        </Card>
                      </div>
                      
                      <Card className="p-4">
                        <h3 className="font-medium">Campus Fitness Resources</h3>
                        <div className="grid gap-3 mt-3 md:grid-cols-2">
                          <div className="flex items-start gap-2">
                            <div className="rounded-md bg-primary/10 p-1.5">
                              <Dumbbell className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">Campus Gym</p>
                              <p className="text-xs text-muted-foreground">Open daily from 6am to 10pm</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="rounded-md bg-primary/10 p-1.5">
                              <Users className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">Yoga Classes</p>
                              <p className="text-xs text-muted-foreground">Mon/Wed/Fri at 7am and 5pm</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="rounded-md bg-primary/10 p-1.5">
                              <Dumbbell className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">Swimming Pool</p>
                              <p className="text-xs text-muted-foreground">Open daily from 6am to 8pm</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="rounded-md bg-primary/10 p-1.5">
                              <Users className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">Intramural Sports</p>
                              <p className="text-xs text-muted-foreground">Sign up at Student Recreation Center</p>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Stress Management */}
                <Card>
                  <CardHeader>
                    <CardTitle>Stress Management Techniques</CardTitle>
                    <CardDescription>Evidence-based approaches to manage academic pressure</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Time Management Strategies</AccordionTrigger>
                        <AccordionContent className="space-y-3">
                          <div className="rounded-lg bg-muted p-3">
                            <h4 className="font-medium">Pomodoro Technique</h4>
                            <p className="text-sm mt-1">Break work into 25-minute intervals with 5-minute breaks. After 4 cycles, take a longer 15-30 minute break.</p>
                          </div>
                          
                          <div className="rounded-lg bg-muted p-3">
                            <h4 className="font-medium">Eisenhower Matrix</h4>
                            <p className="text-sm mt-1">Prioritize tasks based on urgency and importance:</p>
                            <ul className="list-disc pl-5 text-sm mt-2">
                              <li>Urgent & Important: Do these tasks first</li>
                              <li>Important but Not Urgent: Schedule these tasks</li>
                              <li>Urgent but Not Important: Delegate if possible</li>
                              <li>Neither Urgent nor Important: Eliminate these tasks</li>
                            </ul>
                          </div>
                          
                          <div className="rounded-lg bg-muted p-3">
                            <h4 className="font-medium">Time Blocking</h4>
                            <p className="text-sm mt-1">Assign specific time blocks for different activities in your day, including study time, classes, meals, exercise, and relaxation.</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Study Environment Optimization</AccordionTrigger>
                        <AccordionContent className="space-y-3">
                          <div className="grid gap-3 md:grid-cols-2">
                            <div className="rounded-lg bg-muted p-3">
                              <h4 className="font-medium">Physical Space</h4>
                              <ul className="list-disc pl-5 text-sm mt-2">
                                <li>Find a dedicated study area</li>
                                <li>Ensure proper lighting</li>
                                <li>Maintain comfortable temperature</li>
                                <li>Use ergonomic seating</li>
                                <li>Minimize clutter</li>
                              </ul>
                            </div>
                            
                            <div className="rounded-lg bg-muted p-3">
                              <h4 className="font-medium">Digital Environment</h4>
                              <ul className="list-disc pl-5 text-sm mt-2">
                                <li>Use website blockers during study sessions</li>
                                <li>Turn off non-essential notifications</li>
                                <li>Consider study-focused apps</li>
                                <li>Create separate user profiles for study</li>
                                <li>Use noise-cancelling headphones</li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="rounded-lg bg-muted p-3">
                            <h4 className="font-medium">Campus Study Spaces</h4>
                            <p className="text-sm mt-1">VIT Bhopal offers several dedicated study environments:</p>
                            <ul className="list-disc pl-5 text-sm mt-2">
                              <li><span className="font-medium">Main Library:</span> Quiet floors, group study rooms, and extended hours during exam periods</li>
                              <li><span className="font-medium">Department Reading Rooms:</span> Subject-specific resources and specialized equipment</li>
                              <li><span className="font-medium">Student Center:</span> Casual environment with coffee shop access</li>
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                      
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Cognitive Restructuring</AccordionTrigger>
                        <AccordionContent>
                          <p className="mb-3">Cognitive restructuring helps identify and challenge unhelpful thought patterns:</p>
                          
                          <div className="space-y-3">
                            <div className="rounded-lg bg-muted p-3">
                              <h4 className="font-medium">Common Thought Distortions</h4>
                              <ul className="list-disc pl-5 text-sm mt-2">
                                <li><span className="italic">Catastrophizing:</span> "If I fail this test, my whole future is ruined"</li>
                                <li><span className="italic">All-or-nothing thinking:</span> "If I don't get an A, I'm a complete failure"</li>
                                <li><span className="italic">Overgeneralization:</span> "I got one question wrong, I'm terrible at this subject"</li>
                                <li><span className="italic">Mind reading:</span> "Everyone thinks I don't belong here"</li>
                              </ul>
                            </div>
                            
                            <div className="rounded-lg bg-muted p-3">
                              <h4 className="font-medium">Challenging Negative Thoughts</h4>
                              <div className="grid gap-2 mt-2 text-sm">
                                <div className="grid grid-cols-2 gap-2">
                                  <div className="font-medium">Unhelpful Thought</div>
                                  <div className="font-medium">Balanced Alternative</div>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                  <div>"I'll never understand this material."</div>
                                  <div>"This is challenging, but with time and help, I can learn it."</div>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                  <div>"Everyone else finds this easy."</div>
                                  <div>"Many students struggle with new concepts at first."</div>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                  <div>"I have to be perfect."</div>
                                  <div>"Making mistakes is how we learn and improve."</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
                
                {/* Social Wellbeing */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="h-5 w-5 mr-2 text-primary" />
                      Social Wellbeing
                    </CardTitle>
                    <CardDescription>Building meaningful connections on campus</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p>Social connections are a key protective factor for mental health. Here are ways to build your social network at VIT Bhopal:</p>
                      
                      <div className="grid gap-4 md:grid-cols-2">
                        <Card className="p-4 border border-muted">
                          <h3 className="font-medium">Student Clubs & Organizations</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Join groups aligned with your interests, from academic societies to cultural clubs
                          </p>
                          <Button variant="outline" size="sm" className="mt-3">
                            <ExternalLink className="h-3.5 w-3.5 mr-2" />
                            Browse Campus Clubs
                          </Button>
                        </Card>
                        
                        <Card className="p-4 border border-muted">
                          <h3 className="font-medium">Volunteer Opportunities</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Give back to the community while meeting like-minded peers
                          </p>
                          <Button variant="outline" size="sm" className="mt-3">
                            <ExternalLink className="h-3.5 w-3.5 mr-2" />
                            Volunteer Programs
                          </Button>
                        </Card>
                      </div>
                      
                      <Card className="p-4">
                        <h3 className="font-medium">Social Skills Development</h3>
                        <div className="mt-3 space-y-2">
                          <div className="rounded-lg bg-muted p-3">
                            <h4 className="text-sm font-medium">Active Listening</h4>
                            <p className="text-xs text-muted-foreground mt-1">
                              Fully focus on what others are saying, ask clarifying questions, and provide thoughtful responses
                            </p>
                          </div>
                          <div className="rounded-lg bg-muted p-3">
                            <h4 className="text-sm font-medium">Joining Conversations</h4>
                            <p className="text-xs text-muted-foreground mt-1">
                              Listen first, find common ground, and contribute relevant thoughts or questions
                            </p>
                          </div>
                          <div className="rounded-lg bg-muted p-3">
                            <h4 className="text-sm font-medium">Setting Boundaries</h4>
                            <p className="text-xs text-muted-foreground mt-1">
                              Learn to politely decline when needed and communicate your needs clearly
                            </p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Digital Wellbeing */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <SunMoon className="h-5 w-5 mr-2 text-primary" />
                      Digital Wellbeing
                    </CardTitle>
                    <CardDescription>Creating a healthy relationship with technology</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p>Technology can support mental health or detract from it. Here's how to create balance:</p>
                      
                      <div className="rounded-md border p-4">
                        <h3 className="text-lg font-medium">Digital Wellness Checklist</h3>
                        <div className="space-y-2 mt-3">
                          <div className="flex items-center">
                            <div className="h-5 w-5 rounded-md border flex items-center justify-center mr-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                            </div>
                            <span className="text-sm">Set screen time limits and stick to them</span>
                          </div>
                          <div className="flex items-center">
                            <div className="h-5 w-5 rounded-md border flex items-center justify-center mr-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                            </div>
                            <span className="text-sm">Use night mode after sunset to protect sleep</span>
                          </div>
                          <div className="flex items-center">
                            <div className="h-5 w-5 rounded-md border flex items-center justify-center mr-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                            </div>
                            <span className="text-sm">Take regular tech breaks during study sessions</span>
                          </div>
                          <div className="flex items-center">
                            <div className="h-5 w-5 rounded-md border flex items-center justify-center mr-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                            </div>
                            <span className="text-sm">Create tech-free zones and times in your daily routine</span>
                          </div>
                          <div className="flex items-center">
                            <div className="h-5 w-5 rounded-md border flex items-center justify-center mr-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                            </div>
                            <span className="text-sm">Curate social media feeds to promote positivity</span>
                          </div>
                          <div className="flex items-center">
                            <div className="h-5 w-5 rounded-md border flex items-center justify-center mr-2">
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                            </div>
                            <span className="text-sm">Practice mindful technology use (ask: why am I picking up my phone?)</span>
                          </div>
                        </div>
                      </div>
                      
                      <Card className="p-4 border border-muted">
                        <h3 className="font-medium">Recommended Digital Wellbeing Apps</h3>
                        <div className="grid gap-3 mt-3 md:grid-cols-2">
                          <div className="flex items-start gap-2">
                            <div className="rounded-md bg-primary/10 p-1.5">
                              <SunMoon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">Forest</p>
                              <p className="text-xs text-muted-foreground">Plant virtual trees by staying focused</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="rounded-md bg-primary/10 p-1.5">
                              <SunMoon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">Freedom</p>
                              <p className="text-xs text-muted-foreground">Block distracting websites and apps</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="rounded-md bg-primary/10 p-1.5">
                              <SunMoon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">Insight Timer</p>
                              <p className="text-xs text-muted-foreground">Free meditation and mindfulness app</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <div className="rounded-md bg-primary/10 p-1.5">
                              <SunMoon className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-medium">Tide</p>
                              <p className="text-xs text-muted-foreground">Focus, sleep, and relaxation sounds</p>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="academic" className="space-y-4 mt-4">
            <ScrollArea className="h-[calc(100vh-250px)]">
              <div className="space-y-4 pr-4">
                {/* Academic-Mental Health Balance */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <PencilRuler className="h-5 w-5 mr-2 text-primary" />
                      Academic-Mental Health Balance
                    </CardTitle>
                    <CardDescription>Strategies to maintain wellbeing during academic pressure</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                          <AccordionTrigger>Exam Stress Management</AccordionTrigger>
                          <AccordionContent className="space-y-3">
                            <div className="rounded-lg bg-muted p-3">
                              <h4 className="font-medium">Before the Exam</h4>
                              <ul className="list-disc pl-5 text-sm mt-2">
                                <li>Create a realistic study schedule with breaks</li>
                                <li>Use active recall and spaced repetition techniques</li>
                                <li>Form study groups for collaborative learning</li>
                                <li>Maintain sleep, exercise, and nutrition routines</li>
                                <li>Practice visualization of successful performance</li>
                              </ul>
                            </div>
                            
                            <div className="rounded-lg bg-muted p-3">
                              <h4 className="font-medium">During the Exam</h4>
                              <ul className="list-disc pl-5 text-sm mt-2">
                                <li>Arrive early to avoid last-minute stress</li>
                                <li>Read all instructions carefully before starting</li>
                                <li>Use deep breathing if anxiety spikes</li>
                                <li>Skip difficult questions and return to them later</li>
                                <li>Take brief mental breaks if feeling overwhelmed</li>
                              </ul>
                            </div>
                            
                            <div className="rounded-lg bg-muted p-3">
                              <h4 className="font-medium">After the Exam</h4>
                              <ul className="list-disc pl-5 text-sm mt-2">
                                <li>Avoid immediate post-exam discussions if they cause anxiety</li>
                                <li>Reward yourself for completing the exam</li>
                                <li>Take time to rest before beginning study for next exam</li>
                                <li>Reflect on effective study strategies to repeat</li>
                                <li>Seek feedback to improve future performance</li>
                              </ul>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="item-2">
                          <AccordionTrigger>Dealing with Academic Setbacks</AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-3">
                              <p>Academic setbacks are normal and can be valuable learning experiences:</p>
                              
                              <div className="rounded-lg bg-muted p-3">
                                <h4 className="font-medium">Healthy Response to Disappointment</h4>
                                <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
                                  <div className="font-medium">Instead of...</div>
                                  <div className="font-medium">Try...</div>
                                  <div>"I'm a failure"</div>
                                  <div>"This result doesn't define my abilities"</div>
                                  <div>"I'll never get better at this"</div>
                                  <div>"What specific skills can I improve?"</div>
                                  <div>"Everyone else is doing better"</div>
                                  <div>"My journey is unique; focus on my growth"</div>
                                  <div>"This ruins everything"</div>
                                  <div>"This is one assessment in a long academic career"</div>
                                </div>
                              </div>
                              
                              <div className="rounded-lg bg-muted p-3">
                                <h4 className="font-medium">Action Plan After Setbacks</h4>
                                <ol className="list-decimal pl-5 text-sm mt-2 space-y-1">
                                  <li>Allow yourself to feel disappointed (it's normal)</li>
                                  <li>Identify specific areas for improvement</li>
                                  <li>Speak with professors during office hours</li>
                                  <li>Consider academic support services</li>
                                  <li>Adjust study strategies based on feedback</li>
                                  <li>Set realistic goals for improvement</li>
                                </ol>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                        
                        <AccordionItem value="item-3">
                          <AccordionTrigger>Perfectionism & Academic Pressure</AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-3">
                              <p>Perfectionism can negatively impact both academic performance and mental health:</p>
                              
                              <div className="rounded-lg bg-muted p-3">
                                <h4 className="font-medium">Signs of Unhealthy Perfectionism</h4>
                                <ul className="list-disc pl-5 text-sm mt-2">
                                  <li>Procrastination due to fear of starting and not being perfect</li>
                                  <li>All-or-nothing thinking (if it's not excellent, it's terrible)</li>
                                  <li>Excessive focus on mistakes rather than achievements</li>
                                  <li>Difficulty delegating or participating in group work</li>
                                  <li>Self-worth entirely dependent on achievements</li>
                                </ul>
                              </div>
                              
                              <div className="rounded-lg bg-muted p-3">
                                <h4 className="font-medium">Developing Healthier Standards</h4>
                                <ul className="list-disc pl-5 text-sm mt-2">
                                  <li>Set realistic goals based on your current abilities</li>
                                  <li>Practice self-compassion when facing challenges</li>
                                  <li>Focus on progress rather than perfection</li>
                                  <li>Celebrate improvements and small victories</li>
                                  <li>Remember that mistakes and failures are essential to learning</li>
                                </ul>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Academic Support Services */}
                <Card>
                  <CardHeader>
                    <CardTitle>Academic Support Services</CardTitle>
                    <CardDescription>Resources to help you excel while maintaining wellbeing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <Card className="p-4 border border-muted">
                          <h3 className="font-medium">Learning Center</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Offers tutoring, workshops on study skills, time management, and test-taking strategies
                          </p>
                          <div className="mt-3 flex text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>Monday-Friday, 9:00 AM - 7:00 PM</span>
                          </div>
                        </Card>
                        
                        <Card className="p-4 border border-muted">
                          <h3 className="font-medium">Writing Center</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Helps with all stages of the writing process, from brainstorming to final editing
                          </p>
                          <div className="mt-3 flex text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-2" />
                            <span>Monday-Thursday, 10:00 AM - 8:00 PM, Friday 10:00 AM - 5:00 PM</span>
                          </div>
                        </Card>
                        
                        <Card className="p-4 border border-muted">
                          <h3 className="font-medium">Academic Advisors</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Provide guidance on course selection, major requirements, and academic planning
                          </p>
                          <Button variant="outline" size="sm" className="mt-3">
                            <Calendar className="h-3.5 w-3.5 mr-2" />
                            Schedule Appointment
                          </Button>
                        </Card>
                        
                        <Card className="p-4 border border-muted">
                          <h3 className="font-medium">Disability Services</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            Facilitates accommodations for students with documented disabilities
                          </p>
                          <div className="mt-3 flex text-sm text-muted-foreground">
                            <Mail className="h-4 w-4 mr-2" />
                            <span>accessibility@vitbhopal.ac.in</span>
                          </div>
                        </Card>
                      </div>
                      
                      <Card className="p-4 bg-muted/50">
                        <h3 className="font-medium flex items-center">
                          <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
                          Academic Success Workshops
                        </h3>
                        <p className="text-sm mt-1">Upcoming sessions to enhance your academic skills:</p>
                        <div className="mt-3 space-y-2">
                          <div className="rounded-lg bg-background p-3">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-medium">Effective Note-Taking Strategies</h4>
                              <span className="text-xs text-muted-foreground">Sep 15, 2:00 PM</span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">Academic Block, Room 102</p>
                          </div>
                          <div className="rounded-lg bg-background p-3">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-medium">Mastering Time Management</h4>
                              <span className="text-xs text-muted-foreground">Sep 18, 3:30 PM</span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">Student Center, Meeting Room A</p>
                          </div>
                          <div className="rounded-lg bg-background p-3">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-medium">Research Paper Writing</h4>
                              <span className="text-xs text-muted-foreground">Sep 22, 4:00 PM</span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">Library, Conference Room</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Academic-Life Balance */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <SunMoon className="h-5 w-5 mr-2 text-primary" />
                      Academic-Life Balance
                    </CardTitle>
                    <CardDescription>Maintaining harmony between studies and personal wellbeing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-md border p-4">
                        <h3 className="text-lg font-medium">Weekly Balance Checklist</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          Use this checklist to ensure you're maintaining balance in key life areas:
                        </p>
                        <div className="space-y-3 mt-3">
                          <div className="flex items-start">
                            <div className="h-5 w-5 rounded-md border flex items-center justify-center mr-2 mt-0.5">
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                            </div>
                            <div>
                              <span className="text-sm font-medium">Physical Wellbeing</span>
                              <p className="text-xs text-muted-foreground">Did I sleep 7-9 hours most nights? Exercise at least 3 times? Eat regular, nutritious meals?</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="h-5 w-5 rounded-md border flex items-center justify-center mr-2 mt-0.5">
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                            </div>
                            <div>
                              <span className="text-sm font-medium">Social Connection</span>
                              <p className="text-xs text-muted-foreground">Did I connect meaningfully with friends or family? Participate in group activities? Reach out to someone new?</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="h-5 w-5 rounded-md border flex items-center justify-center mr-2 mt-0.5">
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                            </div>
                            <div>
                              <span className="text-sm font-medium">Leisure & Joy</span>
                              <p className="text-xs text-muted-foreground">Did I engage in activities purely for enjoyment? Take breaks from academic work? Pursue creative interests?</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="h-5 w-5 rounded-md border flex items-center justify-center mr-2 mt-0.5">
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                            </div>
                            <div>
                              <span className="text-sm font-medium">Academic Engagement</span>
                              <p className="text-xs text-muted-foreground">Did I attend all classes? Complete assignments on time? Seek help when needed? Use effective study strategies?</p>
                            </div>
                          </div>
                          <div className="flex items-start">
                            <div className="h-5 w-5 rounded-md border flex items-center justify-center mr-2 mt-0.5">
                              <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                            </div>
                            <div>
                              <span className="text-sm font-medium">Mindfulness & Reflection</span>
                              <p className="text-xs text-muted-foreground">Did I take time to process emotions? Practice mindfulness or relaxation? Reflect on my goals and values?</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <Card className="p-4">
                        <h3 className="font-medium">Boundary Setting in Academic Life</h3>
                        <div className="grid gap-3 mt-3 md:grid-cols-2">
                          <div className="rounded-lg bg-muted p-3">
                            <h4 className="text-sm font-medium">With Yourself</h4>
                            <ul className="list-disc pl-5 text-xs mt-2 space-y-1">
                              <li>Set realistic daily goals</li>
                              <li>Schedule non-negotiable breaks</li>
                              <li>Define when your academic day ends</li>
                              <li>Acknowledge when you need help</li>
                            </ul>
                          </div>
                          
                          <div className="rounded-lg bg-muted p-3">
                            <h4 className="text-sm font-medium">With Others</h4>
                            <ul className="list-disc pl-5 text-xs mt-2 space-y-1">
                              <li>Communicate your availability clearly</li>
                              <li>Learn to say no to extra commitments</li>
                              <li>Address group work expectations early</li>
                              <li>Discuss workload concerns with professors</li>
                            </ul>
                          </div>
                        </div>
                      </Card>
                      
                      <Card className="p-4">
                        <h3 className="font-medium">Signs Your Balance Needs Adjustment</h3>
                        <div className="mt-3 space-y-2">
                          <div className="rounded-lg bg-muted p-3">
                            <h4 className="text-sm font-medium">Academic Overcommitment</h4>
                            <ul className="list-disc pl-5 text-xs mt-2 space-y-1">
                              <li>Consistently sacrificing sleep for study</li>
                              <li>Dropping all extracurricular activities</li>
                              <li>Persistent feelings of overwhelm</li>
                              <li>Declining physical health</li>
                            </ul>
                          </div>
                          
                          <div className="rounded-lg bg-muted p-3">
                            <h4 className="text-sm font-medium">Academic Disengagement</h4>
                            <ul className="list-disc pl-5 text-xs mt-2 space-y-1">
                              <li>Procrastination on most assignments</li>
                              <li>Skipping classes regularly</li>
                              <li>Lack of motivation or interest</li>
                              <li>Difficulty focusing during study</li>
                            </ul>
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm font-medium">If you notice these signs:</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Consider speaking with an academic advisor, counselor, or trusted mentor to help readjust your balance before burnout occurs.
                          </p>
                        </div>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MentalHealth;

