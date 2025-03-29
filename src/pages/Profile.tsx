
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { User, Book, Clock, Settings, PenTool, Upload, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  
  // Mock user data
  const userData = {
    name: "Rahul Kumar",
    regNumber: "21BCE10042",
    email: "rahul.kumar2021@vitbhopal.ac.in",
    role: "Student",
    department: "Computer Science",
    yearOfStudy: "3rd Year",
    bio: "Computer Science student interested in web development and artificial intelligence. Active member of the coding club and tech community.",
    subjects: ["Data Structures", "Computer Networks", "Database Management", "Web Development", "Machine Learning"],
    totalStudyHours: 245,
    achievements: [
      { id: 1, title: "Quiz Master", description: "Completed 10 quizzes with 90%+ score" },
      { id: 2, title: "Consistent Learner", description: "Logged study time for 30 consecutive days" }
    ]
  };
  
  const handleSaveProfile = () => {
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved.",
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Profile</h1>
        <p className="text-muted-foreground">
          View and manage your personal information.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="ghibli-card md:col-span-1">
          <CardHeader>
            <div className="flex flex-col items-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src="/images/avatar.jpg" alt={userData.name} />
                <AvatarFallback className="text-xl">
                  {userData.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <CardTitle>{userData.name}</CardTitle>
              <CardDescription className="text-center mt-1">
                {userData.regNumber} <br />
                {userData.department}, {userData.yearOfStudy}
              </CardDescription>
            </div>
            <div className="flex justify-center mt-2">
              <Badge className="bg-primary/20 text-primary">
                {userData.role}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-muted-foreground">
              {userData.bio}
            </p>
          </CardContent>
          <CardFooter className="flex flex-col gap-3">
            <Button variant="outline" className="w-full" onClick={() => setIsEditing(true)}>
              <PenTool className="mr-2 h-4 w-4" />
              Edit Profile
            </Button>
            <Button variant="outline" className="w-full">
              <Upload className="mr-2 h-4 w-4" />
              Change Photo
            </Button>
          </CardFooter>
        </Card>
        
        <div className="md:col-span-2">
          <Tabs defaultValue="info">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="info">
                <User className="mr-2 h-4 w-4" />
                Information
              </TabsTrigger>
              <TabsTrigger value="academics">
                <Book className="mr-2 h-4 w-4" />
                Academics
              </TabsTrigger>
              <TabsTrigger value="settings">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="info" className="mt-6 space-y-6">
              {isEditing ? (
                <EditProfileForm userData={userData} onSave={handleSaveProfile} onCancel={() => setIsEditing(false)} />
              ) : (
                <ProfileInfo userData={userData} />
              )}
            </TabsContent>
            
            <TabsContent value="academics" className="mt-6 space-y-6">
              <AcademicInfo userData={userData} />
            </TabsContent>
            
            <TabsContent value="settings" className="mt-6 space-y-6">
              <SettingsForm />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

interface UserData {
  name: string;
  regNumber: string;
  email: string;
  role: string;
  department: string;
  yearOfStudy: string;
  bio: string;
  subjects: string[];
  totalStudyHours: number;
  achievements: { id: number; title: string; description: string; }[];
}

const ProfileInfo = ({ userData }: { userData: UserData }) => {
  return (
    <Card className="ghibli-card">
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
        <CardDescription>Your basic profile details</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <p className="text-sm font-medium">Full Name</p>
            <p className="text-sm text-muted-foreground">{userData.name}</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-sm font-medium">Registration Number</p>
            <p className="text-sm text-muted-foreground">{userData.regNumber}</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-sm font-medium">Email</p>
            <p className="text-sm text-muted-foreground">{userData.email}</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-sm font-medium">Department</p>
            <p className="text-sm text-muted-foreground">{userData.department}</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-sm font-medium">Year of Study</p>
            <p className="text-sm text-muted-foreground">{userData.yearOfStudy}</p>
          </div>
          
          <div className="space-y-1">
            <p className="text-sm font-medium">Role</p>
            <p className="text-sm text-muted-foreground">{userData.role}</p>
          </div>
        </div>
        
        <div className="space-y-1">
          <p className="text-sm font-medium">Bio</p>
          <p className="text-sm text-muted-foreground">{userData.bio}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const EditProfileForm = ({ 
  userData, 
  onSave, 
  onCancel 
}: { 
  userData: UserData;
  onSave: () => void;
  onCancel: () => void;
}) => {
  const [formData, setFormData] = useState({
    name: userData.name,
    email: userData.email,
    department: userData.department,
    yearOfStudy: userData.yearOfStudy,
    bio: userData.bio,
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave();
  };
  
  return (
    <Card className="ghibli-card">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>Edit Profile</CardTitle>
          <CardDescription>Update your personal information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="regNumber">Registration Number</Label>
              <Input 
                id="regNumber" 
                value={userData.regNumber}
                disabled 
                className="bg-muted"
              />
              <p className="text-xs text-muted-foreground">Registration number cannot be changed</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Input 
                id="department" 
                name="department" 
                value={formData.department} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="yearOfStudy">Year of Study</Label>
              <Input 
                id="yearOfStudy" 
                name="yearOfStudy" 
                value={formData.yearOfStudy} 
                onChange={handleChange} 
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Input id="role" value={userData.role} disabled className="bg-muted" />
              <p className="text-xs text-muted-foreground">Role cannot be changed</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea 
              id="bio" 
              name="bio" 
              value={formData.bio} 
              onChange={handleChange} 
              rows={4} 
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">
            Save Changes
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

const AcademicInfo = ({ userData }: { userData: UserData }) => {
  return (
    <>
      <Card className="ghibli-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Book className="h-5 w-5 text-primary" />
            Enrolled Subjects
          </CardTitle>
          <CardDescription>Subjects you are currently studying</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {userData.subjects.map((subject, i) => (
              <Badge key={i} variant="secondary" className="px-3 py-1">
                {subject}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card className="ghibli-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Study Statistics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="border rounded-lg p-4 text-center">
              <div className="text-3xl font-bold">{userData.totalStudyHours}</div>
              <div className="text-sm text-muted-foreground">Total Hours</div>
            </div>
            <div className="border rounded-lg p-4 text-center">
              <div className="text-3xl font-bold">32</div>
              <div className="text-sm text-muted-foreground">This Month</div>
            </div>
            <div className="border rounded-lg p-4 text-center">
              <div className="text-3xl font-bold">8</div>
              <div className="text-sm text-muted-foreground">This Week</div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">View Detailed Analytics</Button>
        </CardFooter>
      </Card>
      
      <Card className="ghibli-card">
        <CardHeader>
          <CardTitle>Achievements</CardTitle>
          <CardDescription>Milestones you've reached</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {userData.achievements.map((achievement) => (
              <div key={achievement.id} className="flex items-start gap-3 border-b pb-4 last:border-0">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
};

const SettingsForm = () => {
  const { toast } = useToast();
  
  const handleSaveSettings = () => {
    toast({
      title: "Settings Updated",
      description: "Your preferences have been saved.",
    });
  };
  
  return (
    <Card className="ghibli-card">
      <CardHeader>
        <CardTitle>Account Settings</CardTitle>
        <CardDescription>Manage your account preferences</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="password">Change Password</Label>
          <Input id="password" type="password" />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input id="confirmPassword" type="password" />
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="emailNotifications" className="h-4 w-4 rounded" />
            <Label htmlFor="emailNotifications">Email Notifications</Label>
          </div>
          <p className="text-sm text-muted-foreground pl-6">
            Receive emails about assignment deadlines and feedback
          </p>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="studyReminders" className="h-4 w-4 rounded" />
            <Label htmlFor="studyReminders">Study Reminders</Label>
          </div>
          <p className="text-sm text-muted-foreground pl-6">
            Get reminders about scheduled study sessions
          </p>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="publicProfile" className="h-4 w-4 rounded" />
            <Label htmlFor="publicProfile">Public Profile</Label>
          </div>
          <p className="text-sm text-muted-foreground pl-6">
            Make your profile visible to other students
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSaveSettings} className="ml-auto">
          Save Settings
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Profile;
