import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Home, 
  Search, 
  Users, 
  Calendar, 
  MessageCircle,
  Heart,
  Brain,
  Plus
} from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/matching', label: 'AI Matching', icon: Brain },
    { path: '/discovery', label: 'Discovery', icon: Search },
    { path: '/messages', label: 'Messages', icon: MessageCircle },
    { path: '/connections', label: 'Connections', icon: Users },
    { path: '/events', label: 'Events', icon: Calendar },
  ];

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/" className="navbar-brand">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(45deg, var(--primary-blue), var(--primary-purple))' }}>
          <Brain className="w-5 h-5 text-white" />
        </div>
        <span className="text-gradient font-bold">MindMate</span>
      </Link>

      {/* Desktop Navigation */}
      <ul className="navbar-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <li key={item.path} className="navbar-item">
              <Link
                to={item.path}
                className={`navbar-link ${isActive ? 'active' : ''}`}
              >
                <Icon className="w-5 h-5" />
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Action Buttons */}
      <div className="navbar-actions">
        {/* Create Post Button */}
        <button className="btn btn-ghost btn-sm">
          <Plus className="w-5 h-5" />
        </button>

        {/* User Avatar */}
        <Link 
          to="/profile" 
          className={`navbar-avatar ${location.pathname === '/profile' ? 'active' : ''}`}
        >
          <span>M</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden btn btn-ghost btn-sm"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
          <div className="p-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`navbar-link ${isActive ? 'active' : ''}`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;