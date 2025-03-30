
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Learning from './pages/Learning';
import Assessment from './pages/Assessment';
import MentalHealth from './pages/MentalHealth';
import Gamification from './pages/Gamification';
import MentalWellbeing from './pages/MentalWellbeing';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import Layout from './components/layout/Layout';
import ChatBot from './components/ChatBot/ChatBot';

import './App.css';

function App() {
  const routes = [
    {
      path: '/',
      element: <Index />,
    },
    {
      path: '/sign-in',
      element: <SignIn />,
    },
    {
      path: '/sign-up',
      element: <SignUp />,
    },
    {
      path: '/dashboard',
      element: (
        <Layout>
          <Dashboard />
        </Layout>
      ),
    },
    {
      path: '/profile',
      element: (
        <Layout>
          <Profile />
        </Layout>
      ),
    },
    {
      path: '/learning',
      element: (
        <Layout>
          <Learning />
        </Layout>
      ),
    },
    {
      path: '/assessment',
      element: (
        <Layout>
          <Assessment />
        </Layout>
      ),
    },
    {
      path: '/mental-health',
      element: (
        <Layout>
          <MentalHealth />
        </Layout>
      ),
    },
    {
      path: '/gamification',
      element: (
        <Layout>
          <Gamification />
        </Layout>
      ),
    },
    {
      path: '/mental-wellbeing',
      element: (
        <Layout>
          <MentalWellbeing />
        </Layout>
      ),
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ];

  const router = createBrowserRouter(routes);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
      <Toaster />
      <ChatBot />
    </ThemeProvider>
  );
}

export default App;
