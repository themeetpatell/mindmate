import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Star,
  Heart,
  Share,
  MoreVertical,
  Plus,
  CheckCircle,
  Globe,
  Video,
  Camera,
  Music,
  Coffee,
  Briefcase,
  GraduationCap,
  Zap,
  Award,
  Target
} from 'lucide-react';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const events = [
    {
      id: 1,
      title: 'TechCrunch Disrupt 2024',
      description: 'The world\'s leading startup conference featuring the most innovative companies and entrepreneurs.',
      date: '2024-03-15',
      time: '09:00 AM',
      location: 'San Francisco, CA',
      venue: 'Moscone Center',
      category: 'conference',
      type: 'in-person',
      attendees: 1250,
      maxAttendees: 2000,
      price: '$299',
      organizer: 'TechCrunch',
      avatar: 'TC',
      verified: true,
      tags: ['Startup', 'Tech', 'Networking'],
      image: '/api/placeholder/400/200',
      featured: true,
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'AI & Machine Learning Workshop',
      description: 'Hands-on workshop covering the latest trends in AI and machine learning for entrepreneurs.',
      date: '2024-03-20',
      time: '02:00 PM',
      location: 'Online',
      venue: 'Zoom',
      category: 'workshop',
      type: 'virtual',
      attendees: 45,
      maxAttendees: 100,
      price: 'Free',
      organizer: 'AI Institute',
      avatar: 'AI',
      verified: true,
      tags: ['AI', 'Workshop', 'Learning'],
      image: '/api/placeholder/400/200',
      featured: false,
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Startup Pitch Night',
      description: 'Watch 10 startups pitch their ideas to a panel of investors and industry experts.',
      date: '2024-03-25',
      time: '06:00 PM',
      location: 'New York, NY',
      venue: 'WeWork Times Square',
      category: 'networking',
      type: 'in-person',
      attendees: 80,
      maxAttendees: 120,
      price: '$25',
      organizer: 'Startup Hub',
      avatar: 'SH',
      verified: false,
      tags: ['Pitch', 'Investors', 'Networking'],
      image: '/api/placeholder/400/200',
      featured: false,
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'Women in Tech Meetup',
      description: 'Monthly meetup for women in technology to network, share experiences, and support each other.',
      date: '2024-03-28',
      time: '07:00 PM',
      location: 'Austin, TX',
      venue: 'Capital Factory',
      category: 'networking',
      type: 'in-person',
      attendees: 35,
      maxAttendees: 50,
      price: 'Free',
      organizer: 'Women in Tech Austin',
      avatar: 'WT',
      verified: true,
      tags: ['Women', 'Tech', 'Community'],
      image: '/api/placeholder/400/200',
      featured: false,
      status: 'upcoming'
    },
    {
      id: 5,
      title: 'Blockchain & Crypto Summit',
      description: 'Explore the future of blockchain technology and cryptocurrency with industry leaders.',
      date: '2024-04-05',
      time: '10:00 AM',
      location: 'Miami, FL',
      venue: 'Miami Beach Convention Center',
      category: 'conference',
      type: 'in-person',
      attendees: 500,
      maxAttendees: 800,
      price: '$199',
      organizer: 'Crypto Events',
      avatar: 'CE',
      verified: true,
      tags: ['Blockchain', 'Crypto', 'Finance'],
      image: '/api/placeholder/400/200',
      featured: true,
      status: 'upcoming'
    },
    {
      id: 6,
      title: 'Coffee & Code Meetup',
      description: 'Casual meetup for developers to discuss projects, share knowledge, and network over coffee.',
      date: '2024-03-30',
      time: '10:00 AM',
      location: 'Seattle, WA',
      venue: 'Starbucks Reserve',
      category: 'networking',
      type: 'in-person',
      attendees: 15,
      maxAttendees: 25,
      price: 'Free',
      organizer: 'Seattle Devs',
      avatar: 'SD',
      verified: false,
      tags: ['Coffee', 'Code', 'Casual'],
      image: '/api/placeholder/400/200',
      featured: false,
      status: 'upcoming'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Events', icon: Globe },
    { id: 'conference', label: 'Conferences', icon: Briefcase },
    { id: 'workshop', label: 'Workshops', icon: GraduationCap },
    { id: 'networking', label: 'Networking', icon: Users },
    { id: 'virtual', label: 'Virtual', icon: Video }
  ];

  const tabs = [
    { id: 'upcoming', label: 'Upcoming', count: events.filter(e => e.status === 'upcoming').length },
    { id: 'today', label: 'Today', count: events.filter(e => e.date === new Date().toISOString().split('T')[0]).length },
    { id: 'this-week', label: 'This Week', count: events.filter(e => {
      const eventDate = new Date(e.date);
      const today = new Date();
      const weekFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
      return eventDate >= today && eventDate <= weekFromNow;
    }).length },
    { id: 'featured', label: 'Featured', count: events.filter(e => e.featured).length }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.organizer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTab = activeTab === 'upcoming' || 
                      (activeTab === 'today' && event.date === new Date().toISOString().split('T')[0]) ||
                      (activeTab === 'this-week' && (() => {
                        const eventDate = new Date(event.date);
                        const today = new Date();
                        const weekFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
                        return eventDate >= today && eventDate <= weekFromNow;
                      })()) ||
                      (activeTab === 'featured' && event.featured);
    
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    
    return matchesSearch && matchesTab && matchesCategory;
  });

  const getCategoryIcon = (category) => {
    const categoryData = categories.find(c => c.id === category);
    return categoryData ? categoryData.icon : Globe;
  };

  const getEventTypeIcon = (type) => {
    return type === 'virtual' ? Video : MapPin;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="main-content">
      <div className="container">
        <div className="section">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Events</h1>
                <p className="text-lg text-gray-600">Discover and join amazing events in your area</p>
              </div>
              <button className="btn btn-primary btn-lg">
                <Plus className="w-5 h-5" />
                Create Event
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-blue-500">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900">{events.length}</span>
              </div>
              <h3 className="text-sm text-gray-600">Total Events</h3>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-green-500">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900">
                  {events.filter(e => e.status === 'upcoming').length}
                </span>
              </div>
              <h3 className="text-sm text-gray-600">Upcoming</h3>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-purple-500">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900">
                  {events.filter(e => e.featured).length}
                </span>
              </div>
              <h3 className="text-sm text-gray-600">Featured</h3>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-orange-500">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900">
                  {events.reduce((sum, event) => sum + event.attendees, 0)}
                </span>
              </div>
              <h3 className="text-sm text-gray-600">Total Attendees</h3>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="card mb-6">
            <div className="card-body">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Search Bar */}
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search events..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="input pl-10"
                  />
                </div>
                
                {/* Filter Button */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="btn btn-secondary"
                >
                  <Filter className="w-5 h-5" />
                  Filters
                </button>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="card mb-6">
            <div className="card-header">
              <h3 className="text-lg font-semibold text-gray-900">Categories</h3>
            </div>
            <div className="card-body">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`btn btn-sm ${
                        selectedCategory === category.id ? 'btn-primary' : 'btn-secondary'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {category.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="card mb-6">
            <div className="card-header">
              <div className="flex items-center space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 pb-2 border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <span className="font-medium">{tab.label}</span>
                    <span className="badge badge-secondary text-xs">{tab.count}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Events List */}
          <div className="space-y-6">
            {filteredEvents.map((event) => {
              const CategoryIcon = getCategoryIcon(event.category);
              const TypeIcon = getEventTypeIcon(event.type);
              
              return (
                <div key={event.id} className="card hover:shadow-lg transition-shadow">
                  <div className="card-body">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start space-x-4">
                        {/* Event Image */}
                        <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                          <CategoryIcon className="w-8 h-8 text-gray-400" />
                        </div>

                        {/* Event Info */}
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-xl font-semibold text-gray-900">{event.title}</h3>
                            {event.verified && (
                              <CheckCircle className="w-5 h-5 text-blue-500" />
                            )}
                            {event.featured && (
                              <Star className="w-5 h-5 text-yellow-500" />
                            )}
                          </div>
                          
                          <p className="text-gray-600 mb-3">{event.description}</p>
                          
                          <div className="flex items-center space-x-6 text-sm text-gray-500 mb-3">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{formatDate(event.date)}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{event.time}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <TypeIcon className="w-4 h-4" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4" />
                              <span>{event.attendees}/{event.maxAttendees} attendees</span>
                            </div>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-3">
                            {event.tags.map((tag, index) => (
                              <span key={index} className="badge badge-secondary text-xs">
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Organizer */}
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <span>Organized by</span>
                            <div className="flex items-center space-x-1">
                              <div className="avatar avatar-sm">
                                <span>{event.organizer[0]}</span>
                              </div>
                              <span className="font-medium">{event.organizer}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Price and Actions */}
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900 mb-2">{event.price}</div>
                        <div className="flex items-center space-x-2">
                          <button className="btn btn-ghost btn-sm">
                            <Heart className="w-4 h-4" />
                          </button>
                          <button className="btn btn-ghost btn-sm">
                            <Share className="w-4 h-4" />
                          </button>
                          <button className="btn btn-ghost btn-sm">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-4">
                        <button className="btn btn-primary">
                          <CheckCircle className="w-4 h-4" />
                          Register
                        </button>
                        <button className="btn btn-secondary">
                          <Users className="w-4 h-4" />
                          View Attendees
                        </button>
                        <button className="btn btn-ghost">
                          <Share className="w-4 h-4" />
                          Share Event
                        </button>
                      </div>
                      
                      <div className="text-sm text-gray-500">
                        {event.attendees} of {event.maxAttendees} spots filled
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <button className="btn btn-primary btn-lg">
              <Zap className="w-5 h-5" />
              Load More Events
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;