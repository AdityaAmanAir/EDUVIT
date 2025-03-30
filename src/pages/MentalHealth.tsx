
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar } from "@/components/ui/avatar";
import { HeartPulse, Users, Smile, ExternalLink, Phone, Mail, Calendar, BookOpen } from "lucide-react";

const MentalHealth = () => {
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
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="resources">Resources</TabsTrigger>
            <TabsTrigger value="support">Support Services</TabsTrigger>
            <TabsTrigger value="wellness">Wellness Tips</TabsTrigger>
          </TabsList>

          <TabsContent value="resources" className="space-y-4 mt-4">
            <ScrollArea className="h-[calc(100vh-250px)]">
              <div className="space-y-4 pr-4">
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
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="wellness" className="space-y-4 mt-4">
            <ScrollArea className="h-[calc(100vh-250px)]">
              <div className="space-y-4 pr-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Daily Mental Wellness Practices</CardTitle>
                    <CardDescription>Simple habits to improve your mental wellbeing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Card className="p-4 border border-muted">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 rounded-full p-2 mt-1">
                            <Smile className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium">Mindfulness Meditation</h3>
                            <p className="text-sm text-muted-foreground mt-1">Start with just 5 minutes daily of focused breathing to reduce stress and improve concentration.</p>
                          </div>
                        </div>
                      </Card>
                      
                      <Card className="p-4 border border-muted">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 rounded-full p-2 mt-1">
                            <Smile className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium">Gratitude Journal</h3>
                            <p className="text-sm text-muted-foreground mt-1">Write down three things you're grateful for each day to shift focus to the positive aspects of life.</p>
                          </div>
                        </div>
                      </Card>
                      
                      <Card className="p-4 border border-muted">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 rounded-full p-2 mt-1">
                            <Smile className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium">Regular Physical Activity</h3>
                            <p className="text-sm text-muted-foreground mt-1">Even a 20-minute walk can boost your mood by releasing endorphins and reducing stress hormones.</p>
                          </div>
                        </div>
                      </Card>
                      
                      <Card className="p-4 border border-muted">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 rounded-full p-2 mt-1">
                            <Smile className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium">Digital Detox</h3>
                            <p className="text-sm text-muted-foreground mt-1">Set aside time each day to disconnect from devices and social media to reduce anxiety and improve sleep.</p>
                          </div>
                        </div>
                      </Card>
                      
                      <Card className="p-4 border border-muted">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 rounded-full p-2 mt-1">
                            <Smile className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium">Sleep Hygiene</h3>
                            <p className="text-sm text-muted-foreground mt-1">Maintain a regular sleep schedule and create a relaxing bedtime routine to improve sleep quality.</p>
                          </div>
                        </div>
                      </Card>
                      
                      <Card className="p-4 border border-muted">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 rounded-full p-2 mt-1">
                            <Smile className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-medium">Social Connection</h3>
                            <p className="text-sm text-muted-foreground mt-1">Schedule time with friends or family, even briefly, to maintain social connections that support mental health.</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Stress Management Techniques</CardTitle>
                    <CardDescription>Effective strategies for managing academic stress</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="breathing">
                        <AccordionTrigger>Deep Breathing Exercises</AccordionTrigger>
                        <AccordionContent>
                          <p>Try the 4-7-8 breathing technique:</p>
                          <ol className="list-decimal pl-6 space-y-2 mt-2">
                            <li>Exhale completely through your mouth</li>
                            <li>Close your mouth and inhale quietly through your nose to a mental count of 4</li>
                            <li>Hold your breath for a count of 7</li>
                            <li>Exhale completely through your mouth to a count of 8</li>
                            <li>Repeat the cycle three more times</li>
                          </ol>
                          <p className="mt-3">Practice this technique twice daily or whenever you feel stressed.</p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="progressive">
                        <AccordionTrigger>Progressive Muscle Relaxation</AccordionTrigger>
                        <AccordionContent>
                          <p>This technique involves tensing and then releasing different muscle groups:</p>
                          <ol className="list-decimal pl-6 space-y-2 mt-2">
                            <li>Find a quiet, comfortable place to sit or lie down</li>
                            <li>Take a few deep breaths</li>
                            <li>Start with your feet: tense the muscles for 5 seconds, then release and relax for 10 seconds</li>
                            <li>Move up through your body: calves, thighs, abdomen, chest, arms, hands, shoulders, neck, and face</li>
                            <li>Notice the difference between tension and relaxation</li>
                          </ol>
                          <p className="mt-3">This exercise helps reduce physical manifestations of stress and induces a calming response.</p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="pomodoro">
                        <AccordionTrigger>The Pomodoro Technique</AccordionTrigger>
                        <AccordionContent>
                          <p>A time management method that can reduce academic stress:</p>
                          <ol className="list-decimal pl-6 space-y-2 mt-2">
                            <li>Choose a task you need to accomplish</li>
                            <li>Set a timer for 25 minutes and work on the task until the timer rings</li>
                            <li>Take a short 5-minute break</li>
                            <li>Repeat the process</li>
                            <li>After four cycles, take a longer break (15-30 minutes)</li>
                          </ol>
                          <p className="mt-3">This technique helps maintain focus, prevents burnout, and makes large tasks more manageable.</p>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="visualization">
                        <AccordionTrigger>Guided Visualization</AccordionTrigger>
                        <AccordionContent>
                          <p>A powerful technique to reduce stress and anxiety:</p>
                          <ol className="list-decimal pl-6 space-y-2 mt-2">
                            <li>Find a quiet place and close your eyes</li>
                            <li>Take several deep breaths</li>
                            <li>Imagine a peaceful scene (beach, forest, mountains)</li>
                            <li>Engage all your senses: What do you see, hear, smell, feel?</li>
                            <li>Spend 5-10 minutes immersed in this mental sanctuary</li>
                          </ol>
                          <p className="mt-3">This practice can quickly reduce stress hormones and provide mental relief during challenging times.</p>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Healthy Lifestyle Habits</CardTitle>
                    <CardDescription>Physical wellbeing supports mental health</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Card className="p-4 border border-muted">
                        <h3 className="font-medium">Nutrition for Brain Health</h3>
                        <p className="text-sm text-muted-foreground mt-1">Foods that support cognitive function and mood regulation:</p>
                        <ul className="list-disc pl-6 mt-2 text-sm space-y-1">
                          <li><span className="font-medium">Omega-3 fatty acids:</span> Fatty fish, flaxseeds, walnuts</li>
                          <li><span className="font-medium">Antioxidants:</span> Colorful fruits and vegetables</li>
                          <li><span className="font-medium">Complex carbohydrates:</span> Whole grains, legumes</li>
                          <li><span className="font-medium">Protein:</span> Lean meats, beans, nuts, dairy</li>
                          <li><span className="font-medium">Hydration:</span> Aim for 2-3 liters of water daily</li>
                        </ul>
                      </Card>

                      <Card className="p-4 border border-muted">
                        <h3 className="font-medium">Exercise for Mental Wellbeing</h3>
                        <p className="text-sm text-muted-foreground mt-1">Regular physical activity is one of the most effective ways to improve mental health:</p>
                        <ul className="list-disc pl-6 mt-2 text-sm space-y-1">
                          <li>Aim for at least 150 minutes of moderate activity per week</li>
                          <li>Include both cardio (walking, swimming) and strength training</li>
                          <li>Yoga combines physical activity with mindfulness benefits</li>
                          <li>Even brief walks between classes can boost mood and energy</li>
                          <li>VIT Bhopal's sports facilities are available for all students</li>
                        </ul>
                      </Card>

                      <Card className="p-4 border border-muted">
                        <h3 className="font-medium">Sleep Optimization</h3>
                        <p className="text-sm text-muted-foreground mt-1">Quality sleep is essential for mental health and academic performance:</p>
                        <ul className="list-disc pl-6 mt-2 text-sm space-y-1">
                          <li>Aim for 7-9 hours of sleep per night</li>
                          <li>Maintain a consistent sleep schedule, even on weekends</li>
                          <li>Create a relaxing bedtime routine</li>
                          <li>Avoid screens 1 hour before bed</li>
                          <li>Keep your sleep environment cool, dark, and quiet</li>
                          <li>Limit caffeine after 2 PM</li>
                        </ul>
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
