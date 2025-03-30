
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChatMessage } from './ChatMessage';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { useToast } from "@/hooks/use-toast";

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [storedApiKey, setStoredApiKey] = useLocalStorage('edu-vit-api-key', '');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (storedApiKey) {
      setApiKey(storedApiKey);
    }
  }, [storedApiKey]);
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      // Add welcome message when opening for the first time
      addBotMessage("👋 Hello! I'm EDU-VIT Assistant. How can I help you with our educational platform today?");
    }
  };

  const addMessage = (content: string, sender: 'user' | 'bot') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const addBotMessage = (content: string) => {
    addMessage(content, 'bot');
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    
    addMessage(inputMessage, 'user');
    setInputMessage('');
    setIsLoading(true);
    
    try {
      await processMessage(inputMessage);
    } catch (error) {
      console.error('Error processing message:', error);
      addBotMessage("Sorry, I encountered an error processing your request. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleApiKeySave = () => {
    if (apiKey.trim()) {
      setStoredApiKey(apiKey);
      toast({
        title: "API Key Saved",
        description: "Your API key has been saved securely in your browser.",
      });
    }
  };

  const processMessage = async (message: string) => {
    // Built-in bot responses
    const builtInResponses = async (query: string) => {
      const lowerQuery = query.toLowerCase();
      
      // Simple rule-based responses
      if (lowerQuery.includes('hello') || lowerQuery.includes('hi') || lowerQuery.includes('hey')) {
        return "Hello! I'm EDU-VIT Assistant. How can I help you today?";
      } else if (lowerQuery.includes('what is edu-vit')) {
        return "EDU-VIT is an educational platform specifically designed for VIT Bhopal University students. It provides resources, assessment tools, learning materials, and mental health support.";
      } else if (lowerQuery.includes('features') || lowerQuery.includes('what can you do')) {
        return "EDU-VIT offers several features including: dashboard analytics, learning resources, assessments, mental health support, gamification, and personalized profiles for students.";
      } else if (lowerQuery.includes('dashboard')) {
        return "The Dashboard provides an overview of your academic progress, upcoming assignments, and quick access to all features of EDU-VIT.";
      } else if (lowerQuery.includes('learning')) {
        return "The Learning section contains course materials, lecture notes, video lectures, and supplementary resources to help you master your subjects.";
      } else if (lowerQuery.includes('assessment')) {
        return "In the Assessment section, you can find practice quizzes, assignments, and mock exams to test your knowledge and prepare for your actual exams.";
      } else if (lowerQuery.includes('mental health') || lowerQuery.includes('wellbeing')) {
        return "The Mental Health/Wellbeing section offers resources for stress management, meditation guides, access to counseling services, and tips for maintaining a healthy study-life balance.";
      } else if (lowerQuery.includes('profile')) {
        return "Your Profile section contains your personal information, academic records, achievements, and settings to customize your EDU-VIT experience.";
      } else if (lowerQuery.includes('gamification')) {
        return "The Gamification feature makes learning fun by adding points, badges, and leaderboards to encourage engagement and reward your progress.";
      } else if (lowerQuery.includes('thank')) {
        return "You're welcome! If you have any more questions about EDU-VIT, feel free to ask.";
      } else if (lowerQuery.includes('bye') || lowerQuery.includes('goodbye')) {
        return "Goodbye! Feel free to come back if you have more questions about EDU-VIT.";
      } else {
        return "I'm sorry, I don't have specific information about that. As EDU-VIT's assistant, I can help with questions about our educational platform features, resources, and services. Could you try asking something related to our platform?";
      }
    };

    // External API (GPT) integration
    const callExternalApi = async (query: string) => {
      if (!storedApiKey) {
        return "Please save your API key first to use this feature.";
      }
      
      try {
        // This is a placeholder for an actual API call to OpenAI or similar service
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${storedApiKey}`
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
              {
                role: 'system',
                content: 'You are an assistant for EDU-VIT, an educational platform for VIT Bhopal University. Provide helpful, concise information about the platform features, educational resources, and student support services.'
              },
              {
                role: 'user',
                content: query
              }
            ],
            max_tokens: 250
          })
        });
        
        if (!response.ok) {
          throw new Error('API request failed');
        }
        
        const data = await response.json();
        return data.choices[0].message.content;
      } catch (error) {
        console.error('API Error:', error);
        return "I encountered an error connecting to the AI service. Please check your API key or try again later.";
      }
    };

    // Default to built-in responses on the "Chat with Bot" tab
    const activeTab = document.querySelector('[data-state="active"]') as HTMLElement;
    const isExternalApiTab = activeTab?.getAttribute('value') === 'external';
    
    let response;
    if (isExternalApiTab) {
      response = await callExternalApi(message);
    } else {
      response = await builtInResponses(message);
    }
    
    addBotMessage(response);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg w-80 md:w-96 h-[500px] max-h-[70vh] flex flex-col border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b dark:border-gray-700 bg-primary/10">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              EDU-VIT Assistant
            </h3>
            <Button variant="ghost" size="icon" onClick={toggleChat} className="h-8 w-8">
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <Tabs defaultValue="builtin" className="flex-1 flex flex-col">
            <TabsList className="grid grid-cols-2 mx-4 mt-2">
              <TabsTrigger value="builtin">Chat with Bot</TabsTrigger>
              <TabsTrigger value="external">Use Your API</TabsTrigger>
            </TabsList>
            
            <TabsContent value="builtin" className="flex-1 flex flex-col px-4 pt-2 pb-4">
              <div className="flex-1 overflow-y-auto">
                {messages.map((message) => (
                  <ChatMessage 
                    key={message.id} 
                    message={message.content} 
                    isUser={message.sender === 'user'} 
                  />
                ))}
                <div ref={messagesEndRef} />
              </div>
              
              <form onSubmit={handleSendMessage} className="mt-2 flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button type="submit" size="icon" disabled={isLoading}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="external" className="flex-1 flex flex-col px-4 pt-2 pb-4">
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Your API Key</label>
                <div className="flex gap-2">
                  <Input 
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="Enter OpenAI API key"
                    className="flex-1"
                  />
                  <Button onClick={handleApiKeySave} size="sm">Save</Button>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Your API key is stored locally and never sent to our servers.
                </p>
              </div>
              
              <div className="flex-1 overflow-y-auto">
                {messages.map((message) => (
                  <ChatMessage 
                    key={message.id} 
                    message={message.content} 
                    isUser={message.sender === 'user'} 
                  />
                ))}
                <div ref={messagesEndRef} />
              </div>
              
              <form onSubmit={handleSendMessage} className="mt-2 flex gap-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button type="submit" size="icon" disabled={isLoading}>
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      ) : (
        <Button 
          onClick={toggleChat} 
          variant="default" 
          size="icon" 
          className="h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 transition-all duration-300"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default ChatBot;
