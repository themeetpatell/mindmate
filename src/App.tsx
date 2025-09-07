import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import Discovery from './components/Discovery';
import Connections from './components/Connections';
import Events from './components/Events';
import Auth from './components/Auth';
import Pitches from './components/Pitches';
import Messages from './components/Messages';
import './App.css';

const AppContent: React.FC = () => {
  const { isAuthenticated, isLoading } = useSelector((state: RootState) => state.auth);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mx-auto mb-6 animate-pulse flex items-center justify-center">
            <div className="w-10 h-10 text-white animate-spin">⏳</div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Loading FounderMatch...
          </h2>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Auth onAuthSuccess={() => {}} />;
  }

  return (
    <Router>
      <div className="App min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/discovery" element={<Discovery />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/events" element={<Events />} />
            <Route path="/pitches" element={<Pitches />} />
            <Route path="/messages" element={<Messages />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <AppContent />
    </ThemeProvider>
  );
};

export default App;

