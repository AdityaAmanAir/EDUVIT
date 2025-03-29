
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter, Clock, BookOpen, Play, ThumbsUp, Eye, CheckCircle, List, Grid3x3 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Mock data for the learning content
const videos = [
  {
    id: 1,
    title: "Introduction to Data Structures",
    subject: "Computer Science",
    duration: "15:30",
    thumbnail: "/images/video-thumbnail-1.jpg",
    views: 1240,
    likes: 89,
    completed: true,
  },
  {
    id: 2,
    title: "Network Protocols Explained",
    subject: "Computer Networks",
    duration: "22:45",
    thumbnail: "/images/video-thumbnail-2.jpg",
    views: 950,
    likes: 72,
    completed: true,
  },
  {
    id: 3,
    title: "Algorithms: Sorting Methods",
    subject: "Computer Science",
    duration: "18:20",
    thumbnail: "/images/video-thumbnail-3.jpg",
    views: 1050,
    likes: 65,
    completed: false,
  },
  {
    id: 4,
    title: "Database Design Principles",
    subject: "Database Management",
    duration: "25:15",
    thumbnail: "/images/video-thumbnail-4.jpg",
    views: 830,
    likes: 54,
    completed: false,
  },
  {
    id: 5,
    title: "Web Development Fundamentals",
    subject: "Web Technologies",
    duration: "30:10",
    thumbnail: "/images/video-thumbnail-5.jpg",
    views: 1320,
    likes: 91,
    completed: false,
  },
  {
    id: 6,
    title: "Machine Learning Concepts",
    subject: "Artificial Intelligence",
    duration: "28:40",
    thumbnail: "/images/video-thumbnail-6.jpg",
    views: 1450,
    likes: 110,
    completed: false,
  },
];

const Learning = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [activeTab, setActiveTab] = useState("all");
  
  // Filter videos based on search query and active tab
  const filteredVideos = videos.filter((video) => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          video.subject.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeTab === "all") return matchesSearch;
    if (activeTab === "completed") return matchesSearch && video.completed;
    if (activeTab === "in-progress") return matchesSearch && !video.completed;
    
    return matchesSearch;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Personalized Learning</h1>
        <p className="text-muted-foreground">
          Access educational videos and resources tailored for your courses.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search videos or topics..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter Videos</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  By Subject
                </DropdownMenuItem>
                <DropdownMenuItem>
                  By Duration
                </DropdownMenuItem>
                <DropdownMenuItem>
                  By Popularity
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Recently Added
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button
            variant="outline"
            size="icon"
            onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
          >
            {viewMode === "grid" ? (
              <List className="h-4 w-4" />
            ) : (
              <Grid3x3 className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle view</span>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="all">All Videos</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-6">
          <div className={viewMode === "grid" 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
            : "flex flex-col gap-4"
          }>
            {filteredVideos.map((video) => (
              <VideoCard key={video.id} video={video} viewMode={viewMode} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="in-progress" className="mt-6">
          <div className={viewMode === "grid" 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
            : "flex flex-col gap-4"
          }>
            {filteredVideos.filter(v => !v.completed).map((video) => (
              <VideoCard key={video.id} video={video} viewMode={viewMode} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="completed" className="mt-6">
          <div className={viewMode === "grid" 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
            : "flex flex-col gap-4"
          }>
            {filteredVideos.filter(v => v.completed).map((video) => (
              <VideoCard key={video.id} video={video} viewMode={viewMode} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface VideoCardProps {
  video: typeof videos[0];
  viewMode: "grid" | "list";
}

const VideoCard = ({ video, viewMode }: VideoCardProps) => {
  if (viewMode === "list") {
    return (
      <Card className="ghibli-card overflow-hidden flex flex-row">
        <div className="relative w-48 h-full flex-shrink-0">
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
            <BookOpen className="h-8 w-8 text-gray-400" />
          </div>
          {video.completed && (
            <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full p-1">
              <CheckCircle className="h-4 w-4" />
            </div>
          )}
        </div>
        <div className="flex flex-col flex-1">
          <CardHeader>
            <CardTitle>{video.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <p className="text-sm text-muted-foreground">{video.subject}</p>
          </CardContent>
          <CardFooter className="flex justify-between items-center pt-0">
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" /> {video.duration}
              </span>
              <span className="flex items-center gap-1">
                <Eye className="h-3 w-3" /> {video.views}
              </span>
              <span className="flex items-center gap-1">
                <ThumbsUp className="h-3 w-3" /> {video.likes}
              </span>
            </div>
            <Button size="sm">
              <Play className="h-4 w-4 mr-2" /> Watch
            </Button>
          </CardFooter>
        </div>
      </Card>
    );
  }

  return (
    <Card className="ghibli-card overflow-hidden">
      <div className="relative aspect-video bg-gray-200 flex items-center justify-center">
        <BookOpen className="h-10 w-10 text-gray-400" />
        {video.completed && (
          <div className="absolute top-2 right-2 bg-green-500 text-white rounded-full p-1">
            <CheckCircle className="h-4 w-4" />
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle>{video.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{video.subject}</p>
        <div className="flex items-center gap-4 text-sm mt-2">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" /> {video.duration}
          </span>
          <span className="flex items-center gap-1">
            <Eye className="h-3 w-3" /> {video.views}
          </span>
          <span className="flex items-center gap-1">
            <ThumbsUp className="h-3 w-3" /> {video.likes}
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Play className="h-4 w-4 mr-2" /> Watch Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Learning;
