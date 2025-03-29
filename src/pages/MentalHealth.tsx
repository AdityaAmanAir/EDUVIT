
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Heart, MessageSquare, Phone, BookOpen, Quote, Music, Video, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const MentalHealth = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Mental Health & Well-being</h1>
        <p className="text-muted-foreground">
          Resources and support for your mental well-being journey.
        </p>
      </div>
      
      <Tabs defaultValue="resources">
        <TabsList className="grid w-full max-w-md grid-cols-4">
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="motivation">Motivation</TabsTrigger>
          <TabsTrigger value="relax">Relax</TabsTrigger>
          <TabsTrigger value="connect">Connect</TabsTrigger>
        </TabsList>
        
        <TabsContent value="resources" className="mt-6">
          <ResourcesTab />
        </TabsContent>
        
        <TabsContent value="motivation" className="mt-6">
          <MotivationTab />
        </TabsContent>
        
        <TabsContent value="relax" className="mt-6">
          <RelaxTab />
        </TabsContent>
        
        <TabsContent value="connect" className="mt-6">
          <ConnectTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

const ResourcesTab = () => {
  const resources = [
    {
      id: 1,
      title: "Stress Management for Students",
      description: "Learn effective techniques to manage academic stress and maintain balance.",
      category: "Academic",
      icon: BookOpen,
      image: "/images/stress-management.jpg"
    },
    {
      id: 2,
      title: "Mindfulness for Better Focus",
      description: "Discover how mindfulness practices can improve your concentration and retention.",
      category: "Mindfulness",
      icon: Heart,
      image: "/images/mindfulness.jpg"
    },
    {
      id: 3,
      title: "Building Healthy Study Habits",
      description: "Create sustainable study routines that support your well-being and academic success.",
      category: "Academic",
      icon: BookOpen,
      image: "/images/study-habits.jpg"
    },
    {
      id: 4,
      title: "Dealing with Exam Anxiety",
      description: "Practical strategies to overcome test anxiety and perform your best.",
      category: "Mental Health",
      icon: Heart,
      image: "/images/exam-anxiety.jpg"
    },
    {
      id: 5,
      title: "Sleep and Learning",
      description: "Understand the vital connection between quality sleep and academic performance.",
      category: "Physical Health",
      icon: Heart,
      image: "/images/sleep.jpg"
    },
    {
      id: 6,
      title: "Social Connections in College",
      description: "Building meaningful relationships while balancing academic responsibilities.",
      category: "Social",
      icon: Users,
      image: "/images/social-connections.jpg"
    }
  ];
  
  const { toast } = useToast();
  
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <Card key={resource.id} className="ghibli-card overflow-hidden">
            <div className="aspect-video bg-gray-100 dark:bg-gray-800 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <resource.icon className="h-12 w-12 text-muted-foreground/50" />
              </div>
              <Badge className="absolute top-2 right-2">
                {resource.category}
              </Badge>
            </div>
            <CardHeader>
              <CardTitle>{resource.title}</CardTitle>
              <CardDescription>{resource.description}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button 
                className="w-full"
                onClick={() => toast({
                  title: "Resource Opened",
                  description: `Opening ${resource.title}`,
                })}
              >
                Read Article
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <Card className="ghibli-card">
        <CardHeader>
          <CardTitle>Personalized Recommendations</CardTitle>
          <CardDescription>Resources tailored to your needs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Based on your recent activity and study patterns, we've selected these resources that might be helpful:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>How to Maintain Focus During Long Study Sessions</li>
              <li>Time Management Strategies for Multiple Assignments</li>
              <li>Balancing Academics and Social Life</li>
            </ul>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">View Personalized Plan</Button>
        </CardFooter>
      </Card>
      
      <div className="flex justify-center">
        <Button 
          className="flex items-center gap-2"
          onClick={() => toast({
            title: "Counseling Services",
            description: "Connecting you with campus counseling resources",
          })}
        >
          <Phone className="h-4 w-4" />
          Connect with Campus Counseling Services
        </Button>
      </div>
    </div>
  );
};

const MotivationTab = () => {
  const quotes = [
    {
      text: "Education is the most powerful weapon which you can use to change the world.",
      author: "Nelson Mandela"
    },
    {
      text: "The beautiful thing about learning is that no one can take it away from you.",
      author: "B.B. King"
    },
    {
      text: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
      author: "Dr. Seuss"
    },
    {
      text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
      author: "Mahatma Gandhi"
    },
    {
      text: "The mind is not a vessel to be filled, but a fire to be kindled.",
      author: "Plutarch"
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
  ];
  
  const [currentQuote, setCurrentQuote] = useState(0);
  
  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };
  
  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
  };
  
  return (
    <div className="space-y-8">
      <Card className="ghibli-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Quote className="h-5 w-5 text-primary" />
            Daily Inspiration
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center py-8">
          <blockquote className="italic text-xl mb-4">
            "{quotes[currentQuote].text}"
          </blockquote>
          <p className="text-right font-medium">— {quotes[currentQuote].author}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={prevQuote}>Previous</Button>
          <Button variant="outline" onClick={nextQuote}>Next Quote</Button>
        </CardFooter>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="ghibli-card">
          <CardHeader>
            <CardTitle>Success Stories</CardTitle>
            <CardDescription>From VIT Bhopal alumni</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-l-4 border-primary pl-4 py-2">
              <p className="italic text-sm text-muted-foreground mb-2">
                "The challenges I faced at VIT Bhopal prepared me for my career in ways I couldn't imagine. The perseverance I learned here was invaluable."
              </p>
              <p className="text-sm font-medium">— Priya Sharma, Software Engineer at Google</p>
            </div>
            <div className="border-l-4 border-primary pl-4 py-2">
              <p className="italic text-sm text-muted-foreground mb-2">
                "My time at VIT Bhopal taught me to balance academic excellence with personal well-being. This balance has been key to my success."
              </p>
              <p className="text-sm font-medium">— Arjun Patel, Entrepreneur</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">More Success Stories</Button>
          </CardFooter>
        </Card>
        
        <Card className="ghibli-card">
          <CardHeader>
            <CardTitle>Motivational Videos</CardTitle>
            <CardDescription>Quick boosts of inspiration</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border rounded-md p-3 flex gap-3 items-center">
                <div className="flex-shrink-0 w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
                  <Video className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-sm">Overcoming Academic Challenges</h3>
                  <p className="text-xs text-muted-foreground">5:23 • Dr. Anjali Mehta</p>
                </div>
              </div>
              
              <div className="border rounded-md p-3 flex gap-3 items-center">
                <div className="flex-shrink-0 w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
                  <Video className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-sm">Finding Your Purpose in Education</h3>
                  <p className="text-xs text-muted-foreground">7:15 • Prof. Raj Kumar</p>
                </div>
              </div>
              
              <div className="border rounded-md p-3 flex gap-3 items-center">
                <div className="flex-shrink-0 w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center">
                  <Video className="h-6 w-6 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="font-medium text-sm">The Power of Persistence</h3>
                  <p className="text-xs text-muted-foreground">4:45 • Alisha Singh, Alumni</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="ghibli-card">
        <CardHeader>
          <CardTitle>Your Journal</CardTitle>
          <CardDescription>Record your thoughts and reflections</CardDescription>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Write your thoughts here..."
            className="min-h-[150px]"
          />
        </CardContent>
        <CardFooter>
          <Button className="ml-auto">Save Entry</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

const RelaxTab = () => {
  const animations = [
    { id: 1, title: "Totoro's Forest", description: "A peaceful walk through a magical forest" },
    { id: 2, title: "Spirited Away Journey", description: "Relaxing scenes from the spirit world" },
    { id: 3, title: "Howl's Moving Castle", description: "Calming moments with Sophie and Howl" },
  ];
  
  const musicTracks = [
    { id: 1, title: "Ghibli Piano Collection", artist: "Joe Hisaishi", duration: "5:20" },
    { id: 2, title: "Relaxing Study Mix", artist: "Study Beats", duration: "4:45" },
    { id: 3, title: "Nature Sounds: Rainfall", artist: "Nature Recordings", duration: "10:00" },
    { id: 4, title: "Classical Focus", artist: "Mozart", duration: "6:30" },
  ];
  
  const { toast } = useToast();
  
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Studio Ghibli Animations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {animations.map((animation) => (
            <Card key={animation.id} className="ghibli-card overflow-hidden">
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                {/* This would be an animated GIF or video in a real application */}
                <div className="text-muted-foreground">
                  {animation.title} Preview
                </div>
              </div>
              <CardHeader>
                <CardTitle>{animation.title}</CardTitle>
                <CardDescription>{animation.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button 
                  className="w-full"
                  onClick={() => toast({
                    title: "Animation Started",
                    description: `Now playing: ${animation.title}`,
                  })}
                >
                  Watch Animation
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-4">Relaxing Music</h2>
        <Card className="ghibli-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Music className="h-5 w-5 text-primary" />
              Study & Relaxation Playlist
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {musicTracks.map((track) => (
                <div
                  key={track.id}
                  className="flex items-center justify-between p-3 rounded-md hover:bg-muted/50 cursor-pointer"
                  onClick={() => toast({
                    title: "Now Playing",
                    description: `${track.title} by ${track.artist}`,
                  })}
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <Music className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{track.title}</p>
                      <p className="text-xs text-muted-foreground">{track.artist}</p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">{track.duration}</div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">View Full Playlist</Button>
          </CardFooter>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="ghibli-card">
          <CardHeader>
            <CardTitle>Breathing Exercises</CardTitle>
            <CardDescription>Quick techniques to reduce stress</CardDescription>
          </CardHeader>
          <CardContent className="text-center py-6">
            <div className="w-32 h-32 mx-auto rounded-full bg-primary/20 relative mb-4">
              <div className="absolute inset-0 animate-pulse bg-primary/20 rounded-full"></div>
              <div className="absolute inset-3 bg-background rounded-full flex items-center justify-center">
                <p className="text-sm">Breathe with me</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">
              Inhale for 4 seconds, hold for 4 seconds, exhale for 4 seconds
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">Try Different Patterns</Button>
          </CardFooter>
        </Card>
        
        <Card className="ghibli-card">
          <CardHeader>
            <CardTitle>Stress Relief Games</CardTitle>
            <CardDescription>Take a quick mental break</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline" 
                className="h-24 flex flex-col gap-2"
                onClick={() => toast({
                  title: "Game Starting",
                  description: "Loading Zen Garden...",
                })}
              >
                <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                  <span className="text-green-500 dark:text-green-300 text-lg">🌿</span>
                </div>
                <span>Zen Garden</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-24 flex flex-col gap-2"
                onClick={() => toast({
                  title: "Game Starting",
                  description: "Loading Bubble Pop...",
                })}
              >
                <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <span className="text-blue-500 dark:text-blue-300 text-lg">🫧</span>
                </div>
                <span>Bubble Pop</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-24 flex flex-col gap-2"
                onClick={() => toast({
                  title: "Game Starting",
                  description: "Loading Coloring Book...",
                })}
              >
                <div className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                  <span className="text-purple-500 dark:text-purple-300 text-lg">🎨</span>
                </div>
                <span>Coloring Book</span>
              </Button>
              
              <Button 
                variant="outline" 
                className="h-24 flex flex-col gap-2"
                onClick={() => toast({
                  title: "Game Starting",
                  description: "Loading Memory Cards...",
                })}
              >
                <div className="h-8 w-8 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center">
                  <span className="text-amber-500 dark:text-amber-300 text-lg">🃏</span>
                </div>
                <span>Memory Cards</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const ConnectTab = () => {
  const communityGroups = [
    { id: 1, name: "Study Buddies", members: 56, description: "Find partners for focused study sessions" },
    { id: 2, name: "Mindfulness Club", members: 34, description: "Practice meditation and mindfulness together" },
    { id: 3, name: "Stress Relief Squad", members: 42, description: "Share tips and support for managing stress" },
    { id: 4, name: "CS Coding Group", members: 28, description: "Collaborate on programming projects and challenges" }
  ];
  
  const upcomingEvents = [
    { 
      id: 1, 
      title: "Wellness Wednesday", 
      date: "2023-10-25", 
      time: "18:00", 
      type: "Virtual",
      description: "Join our virtual meetup for guided meditation and relaxation techniques."
    },
    {
      id: 2,
      title: "Study Sprint",
      date: "2023-10-27",
      time: "15:00",
      type: "In-person",
      description: "Two-hour focused study session with breaks and snacks provided."
    },
    {
      id: 3,
      title: "Exam Prep Support",
      date: "2023-11-02",
      time: "19:00",
      type: "Hybrid",
      description: "Get tips and emotional support as we approach midterm exams."
    }
  ];
  
  const { toast } = useToast();
  const [message, setMessage] = useState("");
  
  const handleSendMessage = () => {
    if (message.trim()) {
      toast({
        title: "Message Sent",
        description: "Your message has been sent to the community.",
      });
      setMessage("");
    }
  };
  
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="ghibli-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              Community Chat
            </CardTitle>
            <CardDescription>Connect with fellow students in real-time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border rounded-md h-[300px] mb-4 p-4 overflow-y-auto bg-muted/30">
              {/* Chat messages would appear here in a real app */}
              <div className="text-center text-muted-foreground">
                <p>Welcome to the community chat!</p>
                <p className="text-sm mt-2">Start sending messages to connect with others.</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Textarea
                placeholder="Type your message here..."
                className="resize-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button onClick={handleSendMessage}>Send</Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="ghibli-card">
          <CardHeader>
            <CardTitle>Join a Voice Call</CardTitle>
            <CardDescription>Talk with others in real-time</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="py-8 space-y-6">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="font-medium">Connect with others</p>
                <p className="text-sm text-muted-foreground mb-4">
                  Join a voice channel to talk with other students
                </p>
                <Button 
                  className="w-full"
                  onClick={() => toast({
                    title: "Voice Channel",
                    description: "Connecting to voice channel...",
                  })}
                >
                  Join Voice Channel
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-4">Community Groups</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {communityGroups.map((group) => (
            <Card key={group.id} className="ghibli-card">
              <CardHeader className="pb-3">
                <CardTitle>{group.name}</CardTitle>
                <CardDescription>{group.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  {group.members} members
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="outline">Join Group</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingEvents.map((event) => (
            <Card key={event.id} className="ghibli-card">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{event.title}</CardTitle>
                  <Badge>{event.type}</Badge>
                </div>
                <CardDescription>
                  {new Date(`${event.date}T${event.time}`).toLocaleString(undefined, {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "2-digit"
                  })}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{event.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">More Info</Button>
                <Button>RSVP</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentalHealth;
