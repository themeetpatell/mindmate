import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
  Plus,
  LogOut,
  User,
  Settings,
  ChevronDown
} from 'lucide-react';
import { logoutUser } from '../store/slices/authSlice.js';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();
  const userMenuRef = useRef(null);

  const navItems = [
    { path: '/home', label: 'Home', icon: Home },
    { path: '/matching', label: 'AI Matching', icon: Brain, isHighlighted: true },
    { path: '/pitches', label: 'Pitching', icon: MessageCircle },
    { path: '/connections', label: 'Connections', icon: Users },
    { path: '/events', label: 'Events', icon: Calendar },
  ];

  // Handle logout
  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
      navigate('/');
      setIsUserMenuOpen(false);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/home" className="navbar-brand">
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
                className={`navbar-link ${isActive ? 'active' : ''} ${
                  item.isHighlighted ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600' : ''
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="hidden sm:inline">{item.label}</span>
                {item.isHighlighted && (
                  <span className="ml-1 px-2 py-0.5 text-xs bg-white/20 rounded-full">
                    AI
                  </span>
                )}
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

        {/* User Menu */}
        <div className="relative" ref={userMenuRef}>
          <button
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            className={`navbar-avatar ${location.pathname === '/profile' ? 'active' : ''} flex items-center space-x-1`}
          >
            <span>{user?.firstName?.charAt(0) || 'U'}</span>
            <ChevronDown className="w-3 h-3" />
          </button>

          {/* User Dropdown Menu */}
          {isUserMenuOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
              <div className="px-4 py-2 border-b border-gray-100">
                <p className="text-sm font-semibold text-gray-900">
                  {user?.firstName} {user?.lastName}
                </p>
                <p className="text-xs text-gray-500">{user?.email}</p>
              </div>
              
              <Link
                to="/profile"
                onClick={() => setIsUserMenuOpen(false)}
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                <User className="w-4 h-4 mr-3" />
                Profile
              </Link>
              
              <button
                onClick={() => {
                  setIsUserMenuOpen(false);
                  // Add settings functionality later
                }}
                className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
              >
                <Settings className="w-4 h-4 mr-3" />
                Settings
              </button>
              
              <div className="border-t border-gray-100 my-1"></div>
              
              <button
                onClick={handleLogout}
                className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
              >
                <LogOut className="w-4 h-4 mr-3" />
                Logout
              </button>
            </div>
          )}
        </div>

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
                  className={`navbar-link ${isActive ? 'active' : ''} ${
                    item.isHighlighted ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600' : ''
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                  {item.isHighlighted && (
                    <span className="ml-1 px-2 py-0.5 text-xs bg-white/20 rounded-full">
                      AI
                    </span>
                  )}
                </Link>
              );
            })}
            
            {/* Mobile Logout */}
            <div className="border-t border-gray-200 pt-2 mt-2">
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="flex items-center w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg"
              >
                <LogOut className="w-5 h-5 mr-3" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;