import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  Search,
  Star,
  Video,
  Building2,
  Lightbulb,
  Target,
  Award,
  Plus,
  User,
  X,
  Eye,
  Edit3,
  Share2
} from 'lucide-react';
import { EventType } from '../types';

const Events: React.FC = () => {
  const [activeTab, setActiveTab] = useState('browse');
  const [filter, setFilter] = useState<EventType | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showEventDetail, setShowEventDetail] = useState<any>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  
  // Get events from Redux store
  const { isLoading } = useSelector((state: RootState) => state.events);
  
  // Combined events data (public events + user's events)
  const allEvents = [
    // Public events - Upcoming
      {
        id: '1',
        title: 'Founder Mastermind Retreat',
        description: 'Join 20 handpicked founders for a 3-day intensive mastermind in Napa Valley. Deep dive into scaling challenges, fundraising strategies, and building high-performing teams.',
      type: 'retreat' as EventType,
        location: 'Napa Valley, CA',
        startDate: new Date('2024-02-15T09:00:00'),
        endDate: new Date('2024-02-17T17:00:00'),
        maxAttendees: 20,
        attendees: ['15'],
        organizerId: '1',
        isActive: true,
      createdAt: new Date(),
      isMyEvent: false,
      status: 'upcoming',
      price: 0,
      tags: ['Retreat', 'Mastermind', 'Networking'],
      agenda: [
        'Day 1: Welcome & Introductions',
        'Day 2: Scaling Challenges Workshop',
        'Day 3: Fundraising Strategies'
      ]
      },
      {
        id: '2',
        title: 'AI & ML Startup Pitch Night',
        description: 'Watch 10 AI/ML startups pitch to a panel of VCs and industry experts. Network with fellow founders and investors over drinks and dinner.',
      type: 'pitch-event' as EventType,
        location: 'San Francisco, CA',
        virtualLink: 'https://zoom.us/j/123456789',
        startDate: new Date('2024-01-25T18:00:00'),
        endDate: new Date('2024-01-25T21:00:00'),
        maxAttendees: 100,
        attendees: ['75'],
        organizerId: '2',
        isActive: true,
      createdAt: new Date(),
      isMyEvent: false,
      status: 'upcoming',
      price: 25,
      tags: ['Pitch', 'AI/ML', 'Investors'],
      agenda: [
        '6:00 PM - Welcome & Introductions',
        '6:30 PM - Pitch Session 1',
        '8:00 PM - Networking Break',
        '8:30 PM - Pitch Session 2',
        '9:30 PM - Panel Discussion'
      ]
      },
      {
        id: '3',
        title: 'Product-Market Fit Workshop',
        description: 'Learn the frameworks and strategies used by successful startups to achieve product-market fit. Interactive workshop with case studies and hands-on exercises.',
      type: 'workshop' as EventType,
        location: 'Virtual',
        virtualLink: 'https://zoom.us/j/987654321',
        startDate: new Date('2024-01-30T14:00:00'),
        endDate: new Date('2024-01-30T17:00:00'),
        maxAttendees: 50,
        attendees: ['32'],
        organizerId: '3',
        isActive: true,
      createdAt: new Date(),
      isMyEvent: false,
      status: 'upcoming',
      price: 0,
      tags: ['Workshop', 'Product', 'Strategy'],
      agenda: [
        '2:00 PM - Introduction to PMF',
        '2:30 PM - Case Studies',
        '3:30 PM - Hands-on Exercises',
        '4:30 PM - Q&A Session'
      ]
      },
      {
        id: '4',
        title: 'Founder Speed Dating',
        description: 'Speed networking event where founders can quickly meet potential co-founders, advisors, and partners. 5-minute structured conversations.',
      type: 'networking' as EventType,
        location: 'New York, NY',
        startDate: new Date('2024-02-05T19:00:00'),
        endDate: new Date('2024-02-05T22:00:00'),
        maxAttendees: 40,
        attendees: ['28'],
        organizerId: '4',
        isActive: true,
      createdAt: new Date(),
      isMyEvent: false,
      status: 'upcoming',
      price: 15,
      tags: ['Networking', 'Co-founder', 'Speed Dating'],
      agenda: [
        '7:00 PM - Registration',
        '7:30 PM - Speed Dating Rounds',
        '9:00 PM - Extended Conversations',
        '10:00 PM - Match Results'
      ]
    },
    {
      id: '6',
      title: 'FinTech Innovation Summit',
      description: 'Explore the latest trends in financial technology with industry leaders, successful fintech founders, and regulatory experts.',
      type: 'conference' as EventType,
      location: 'London, UK',
      startDate: new Date('2024-02-20T09:00:00'),
      endDate: new Date('2024-02-20T18:00:00'),
      maxAttendees: 200,
      attendees: ['156'],
      organizerId: '5',
      isActive: true,
      createdAt: new Date(),
      isMyEvent: false,
      status: 'upcoming',
      price: 150,
      tags: ['FinTech', 'Innovation', 'Summit'],
      agenda: [
        '9:00 AM - Keynote: Future of Banking',
        '10:30 AM - Panel: Regulatory Challenges',
        '2:00 PM - Startup Showcase',
        '4:00 PM - Networking Session'
      ]
    },
    {
      id: '7',
      title: 'Climate Tech Accelerator Demo Day',
      description: 'Watch 15 climate tech startups present their solutions to investors and industry experts. Focus on sustainability and environmental impact.',
      type: 'pitch-event' as EventType,
      location: 'Virtual',
      virtualLink: 'https://zoom.us/j/climate-demo',
      startDate: new Date('2024-02-10T14:00:00'),
      endDate: new Date('2024-02-10T17:00:00'),
      maxAttendees: 150,
      attendees: ['89'],
      organizerId: '6',
      isActive: true,
      createdAt: new Date(),
      isMyEvent: false,
      status: 'upcoming',
      price: 0,
      tags: ['Climate Tech', 'Demo Day', 'Sustainability'],
      agenda: [
        '2:00 PM - Welcome & Overview',
        '2:15 PM - Startup Pitches (5 min each)',
        '4:00 PM - Investor Panel',
        '4:30 PM - Networking Breakout Rooms'
      ]
    },
    {
      id: '8',
      title: 'Remote Team Building Workshop',
      description: 'Learn strategies for building and managing high-performing remote teams. Interactive session with proven frameworks and tools.',
      type: 'workshop' as EventType,
      location: 'Virtual',
      virtualLink: 'https://zoom.us/j/remote-teams',
      startDate: new Date('2024-02-08T10:00:00'),
      endDate: new Date('2024-02-08T12:00:00'),
      maxAttendees: 30,
      attendees: ['18'],
      organizerId: '7',
      isActive: true,
      createdAt: new Date(),
      isMyEvent: false,
      status: 'upcoming',
      price: 50,
      tags: ['Remote Work', 'Team Building', 'Management'],
      agenda: [
        '10:00 AM - Remote Team Challenges',
        '10:30 AM - Best Practices Workshop',
        '11:00 AM - Tools & Technologies',
        '11:30 AM - Q&A & Discussion'
      ]
    },
    {
      id: '9',
      title: 'EdTech Innovation Meetup',
      description: 'Connect with education technology innovators, investors, and educators. Share insights on the future of learning.',
      type: 'networking' as EventType,
      location: 'Austin, TX',
      startDate: new Date('2024-02-12T18:00:00'),
      endDate: new Date('2024-02-12T21:00:00'),
      maxAttendees: 60,
      attendees: ['42'],
      organizerId: '8',
      isActive: true,
      createdAt: new Date(),
      isMyEvent: false,
      status: 'upcoming',
      price: 20,
      tags: ['EdTech', 'Innovation', 'Networking'],
      agenda: [
        '6:00 PM - Registration & Welcome',
        '6:30 PM - Lightning Talks',
        '7:30 PM - Networking Session',
        '8:30 PM - Panel Discussion'
      ]
    },
    {
      id: '10',
      title: 'HealthTech Startup Bootcamp',
      description: 'Intensive 2-day bootcamp for healthtech entrepreneurs. Learn about regulatory requirements, market validation, and funding strategies.',
      type: 'workshop' as EventType,
      location: 'Boston, MA',
      startDate: new Date('2024-02-22T09:00:00'),
      endDate: new Date('2024-02-23T17:00:00'),
      maxAttendees: 25,
      attendees: ['12'],
      organizerId: '9',
      isActive: true,
      createdAt: new Date(),
      isMyEvent: false,
      status: 'upcoming',
      price: 200,
      tags: ['HealthTech', 'Bootcamp', 'Regulatory'],
      agenda: [
        'Day 1: Market Research & Validation',
        'Day 2: Regulatory & Funding Strategies'
      ]
    },
    // User's events
    {
      id: '5',
      title: 'AI & Healthcare Panel',
      description: 'Panel discussion on the future of AI in healthcare with industry experts and successful founders.',
      type: 'conference' as EventType,
      location: 'Virtual',
      virtualLink: 'https://zoom.us/j/ai-healthcare',
      startDate: new Date('2024-02-01T19:00:00'),
      endDate: new Date('2024-02-01T21:00:00'),
      maxAttendees: 100,
      attendees: ['0'],
      organizerId: 'current-user',
      isActive: true,
      createdAt: new Date(),
      isMyEvent: true,
      status: 'draft',
      price: 0,
      tags: ['AI', 'Healthcare', 'Panel'],
      agenda: [
        '7:00 PM - Welcome & Introductions',
        '7:15 PM - Panel Discussion',
        '8:15 PM - Q&A Session',
        '8:45 PM - Networking Breakout Rooms'
      ]
    },
    {
      id: '11',
      title: 'My Startup Pitch Practice',
      description: 'Practice your startup pitch with fellow entrepreneurs and get feedback from experienced founders.',
      type: 'workshop' as EventType,
      location: 'Virtual',
      virtualLink: 'https://zoom.us/j/pitch-practice',
      startDate: new Date('2024-02-14T19:00:00'),
      endDate: new Date('2024-02-14T21:00:00'),
      maxAttendees: 20,
      attendees: ['8'],
      organizerId: 'current-user',
      isActive: true,
      createdAt: new Date(),
      isMyEvent: true,
      status: 'upcoming',
      price: 0,
      tags: ['Pitch Practice', 'Feedback', 'Workshop'],
      agenda: [
        '7:00 PM - Welcome & Guidelines',
        '7:15 PM - Pitch Presentations',
        '8:30 PM - Feedback Session',
        '9:00 PM - Networking'
      ]
    },
    // Past events
    {
      id: '12',
      title: 'TechCrunch Disrupt 2023',
      description: 'Annual startup conference featuring the latest innovations, investor meetings, and networking opportunities.',
      type: 'conference' as EventType,
      location: 'San Francisco, CA',
      startDate: new Date('2023-09-19T09:00:00'),
      endDate: new Date('2023-09-21T18:00:00'),
      maxAttendees: 5000,
      attendees: ['4800'],
      organizerId: '10',
      isActive: false,
      createdAt: new Date(),
      isMyEvent: false,
      status: 'completed',
      price: 500,
      tags: ['Conference', 'TechCrunch', 'Innovation'],
      agenda: [
        'Day 1: Keynotes & Panels',
        'Day 2: Startup Battlefield',
        'Day 3: Networking & Demos'
      ]
    },
    {
      id: '13',
      title: 'Y Combinator Demo Day',
      description: 'Watch the latest Y Combinator batch present their startups to investors and the tech community.',
      type: 'pitch-event' as EventType,
      location: 'Virtual',
      virtualLink: 'https://zoom.us/j/yc-demo',
      startDate: new Date('2023-08-15T14:00:00'),
      endDate: new Date('2023-08-15T18:00:00'),
      maxAttendees: 1000,
      attendees: ['950'],
      organizerId: '11',
      isActive: false,
      createdAt: new Date(),
      isMyEvent: false,
      status: 'completed',
      price: 0,
      tags: ['Y Combinator', 'Demo Day', 'Startups'],
      agenda: [
        '2:00 PM - Welcome & Overview',
        '2:15 PM - Startup Presentations',
        '4:00 PM - Investor Q&A',
        '5:00 PM - Networking'
      ]
    },
    {
      id: '14',
      title: 'SaaS Growth Strategies Workshop',
      description: 'Learn proven strategies for growing SaaS businesses from industry experts and successful founders.',
      type: 'workshop' as EventType,
      location: 'Virtual',
      virtualLink: 'https://zoom.us/j/saas-growth',
      startDate: new Date('2023-07-20T10:00:00'),
      endDate: new Date('2023-07-20T16:00:00'),
      maxAttendees: 50,
      attendees: ['45'],
      organizerId: '12',
      isActive: false,
      createdAt: new Date(),
      isMyEvent: false,
      status: 'completed',
      price: 100,
      tags: ['SaaS', 'Growth', 'Workshop'],
      agenda: [
        '10:00 AM - Growth Frameworks',
        '12:00 PM - Case Studies',
        '2:00 PM - Hands-on Exercises',
        '4:00 PM - Q&A Session'
      ]
    }
  ];


  const getEventTypeIcon = (type: EventType) => {
    const icons = {
      'networking': Users,
      'pitch-event': Target,
      'workshop': Lightbulb,
      'retreat': Building2,
      'conference': Award,
      'mastermind': Star
    };
    return icons[type] || Users;
  };

  const getEventTypeColor = (type: EventType) => {
    const colors = {
      'networking': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200',
      'pitch-event': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200',
      'workshop': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200',
      'retreat': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-200',
      'conference': 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200',
      'mastermind': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-200'
    };
    return colors[type] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
  };

  const getEventGradient = (type: EventType) => {
    const gradients = {
      'networking': 'from-blue-500 to-purple-600',
      'pitch-event': 'from-green-500 to-teal-600',
      'workshop': 'from-purple-500 to-pink-600',
      'retreat': 'from-orange-500 to-red-600',
      'conference': 'from-red-500 to-pink-600',
      'mastermind': 'from-indigo-500 to-blue-600'
    };
    return gradients[type] || 'from-gray-500 to-gray-600';
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  const isUpcoming = (event: any) => {
    return event.startDate > new Date();
  };

  const isPast = (event: any) => {
    return event.endDate < new Date();
  };

  const handleCreateEvent = () => {
    setShowCreateModal(true);
  };

  const handleJoinEvent = (eventId: string) => {
    console.log('Joining event:', eventId);
    // TODO: Implement join event functionality
  };

  const handleViewEvent = (event: any) => {
    setShowEventDetail(event);
  };

  const handleEditEvent = (eventId: string) => {
    console.log('Editing event:', eventId);
    // TODO: Implement edit event functionality
  };


  const handleShareEvent = (eventId: string) => {
    console.log('Sharing event:', eventId);
    // TODO: Implement share event functionality
  };

  // Filter events based on active tab and other criteria
  const getFilteredEvents = () => {
    let baseEvents = allEvents;
    
    // Filter by tab
    switch (activeTab) {
      case 'browse':
        baseEvents = allEvents.filter(event => !event.isMyEvent && isUpcoming(event));
        break;
      case 'my-events':
        baseEvents = allEvents.filter(event => event.isMyEvent);
        break;
      case 'past':
        baseEvents = allEvents.filter(event => isPast(event));
        break;
      default:
        baseEvents = allEvents.filter(event => isUpcoming(event));
    }
    
    // Apply search and type filters
    return baseEvents.filter(event => {
    const matchesFilter = filter === 'all' || event.type === filter;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
  });
  };

  const filteredEvents = getFilteredEvents();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-8xl mx-auto px-6 py-12">
        {/* Ultra-Premium Header */}
        <div className="mb-12">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/30 p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
                    Events & Networking
        </h1>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    Discover, create, and join amazing founder events
        </p>
                </div>
      </div>

              <button
                onClick={handleCreateEvent}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Plus className="w-6 h-6" />
                <span>Create Event</span>
              </button>
            </div>

            {/* Premium Search and Filter */}
            <div className="flex items-center space-x-4">
              <div className="relative group flex-1">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-600/50">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
                    placeholder="Search events, topics, locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-6 py-4 bg-transparent text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none rounded-2xl"
                  />
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="relative bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-600/50">
                  <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value as EventType | 'all')}
                    className="pl-6 pr-8 py-4 bg-transparent text-gray-800 dark:text-white focus:outline-none rounded-2xl appearance-none cursor-pointer"
                  >
                    <option value="all">All Types</option>
                    <option value="networking">Networking</option>
                    <option value="pitch-event">Pitch Event</option>
                    <option value="workshop">Workshop</option>
                    <option value="retreat">Retreat</option>
                    <option value="conference">Conference</option>
                    <option value="mastermind">Mastermind</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Tabs */}
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/30 mb-8 overflow-hidden">
          <div className="flex border-b border-gray-200/50 dark:border-gray-700/50">
            {[
              { id: 'browse', label: 'Browse Events', icon: Calendar, count: allEvents.filter(e => !e.isMyEvent && isUpcoming(e)).length },
              { id: 'my-events', label: 'My Events', icon: User, count: allEvents.filter(e => e.isMyEvent).length },
              { id: 'past', label: 'Past Events', icon: Clock, count: allEvents.filter(e => isPast(e)).length }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
              <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center space-x-3 py-6 px-8 font-semibold transition-all duration-300 relative ${
                    activeTab === tab.id
                      ? 'text-blue-600 dark:text-blue-400 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white hover:bg-gray-50/50 dark:hover:bg-gray-700/50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-lg">{tab.label}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    activeTab === tab.id 
                      ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300' 
                      : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
                  }`}>
                    {tab.count}
                  </span>
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                  )}
              </button>
              );
            })}
        </div>
      </div>

      {/* Events Grid */}
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/30">
          <div className="p-8">
            {isLoading ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6 animate-pulse flex items-center justify-center">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  Loading Events...
                </h2>
              </div>
            ) : filteredEvents.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Calendar className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  No events found
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {activeTab === 'browse' ? 'Check back later for new events or try adjusting your search criteria.' :
                   activeTab === 'my-events' ? 'You haven\'t created any events yet.' :
                   'No past events to display.'}
                </p>
                {activeTab === 'browse' && (
                  <button 
                    onClick={handleCreateEvent}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
                  >
                    Create Event
                  </button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event: any) => {
          const EventIcon = getEventTypeIcon(event.type);
          const attendancePercentage = (event.attendees.length / event.maxAttendees) * 100;
                  const eventGradient = getEventGradient(event.type);
          
          return (
            <div
              key={event.id}
                      className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-2 hover:scale-[1.02] border border-white/20 dark:border-gray-700/30 overflow-hidden cursor-pointer"
                      onClick={() => handleViewEvent(event)}
                    >
                      {/* Event Header with Gradient */}
                      <div className={`relative h-32 bg-gradient-to-br ${eventGradient} overflow-hidden`}>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                        
                        {/* Event Icon */}
                        <div className="absolute top-4 left-4">
                          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                            <EventIcon className="w-6 h-6 text-white" />
                          </div>
                    </div>
                        
                        {/* Event Type Badge */}
                        <div className="absolute top-4 right-4">
                          <span className={`px-3 py-1.5 rounded-xl text-xs font-bold shadow-lg backdrop-blur-sm ${getEventTypeColor(event.type)}`}>
                          {event.type.replace('-', ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}
                        </span>
                      </div>
                        
                        {/* Price */}
                        <div className="absolute bottom-4 right-4">
                          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl px-3 py-1.5 shadow-lg">
                            <span className="text-sm font-bold text-gray-800 dark:text-white">
                              {event.price === 0 ? 'Free' : `$${event.price}`}
                            </span>
                    </div>
                  </div>
                </div>

                      {/* Event Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 line-clamp-2">
                          {event.title}
                        </h3>
                        
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>

              {/* Event Details */}
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(event.startDate)}</span>
                  </div>
                          <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{formatTime(event.startDate)} - {formatTime(event.endDate)}</span>
                  </div>
                          <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm">
                    <MapPin className="w-4 h-4" />
                            <span className="truncate">{event.location}</span>
                  </div>
                          <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 text-sm">
                    <Users className="w-4 h-4" />
                    <span>{event.attendees.length}/{event.maxAttendees} attendees</span>
                  </div>
                </div>

                {/* Attendance Bar */}
                <div className="mb-6">
                          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-2">
                    <span>Attendance</span>
                    <span>{Math.round(attendancePercentage)}% full</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                              className={`bg-gradient-to-r ${eventGradient} h-2 rounded-full transition-all duration-300`}
                      style={{ width: `${attendancePercentage}%` }}
                    ></div>
                  </div>
                </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {event.tags.slice(0, 3).map((tag: string, index: number) => (
                            <span
                              key={index}
                              className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-lg text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                          {event.isMyEvent ? (
                            <>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleEditEvent(event.id);
                                }}
                                className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                              >
                                <Edit3 className="w-4 h-4" />
                                <span>Edit</span>
                              </button>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleShareEvent(event.id);
                                }}
                                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-xl transition-colors"
                              >
                                <Share2 className="w-4 h-4" />
                              </button>
                            </>
                          ) : (
                            <>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleJoinEvent(event.id);
                                }}
                                className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2"
                              >
                    <Calendar className="w-4 h-4" />
                                <span>Join</span>
                  </button>
                  {event.virtualLink && (
                                <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-xl transition-colors">
                      <Video className="w-4 h-4" />
                    </button>
                  )}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleViewEvent(event);
                                }}
                                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-xl transition-colors"
                              >
                                <Eye className="w-4 h-4" />
                  </button>
                            </>
                          )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
            )}
          </div>
        </div>

        {/* Event Detail Modal */}
        {showEventDetail && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20 dark:border-gray-700/30">
              <div className="relative p-8 border-b border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
                
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${getEventGradient(showEventDetail.type)} rounded-2xl flex items-center justify-center shadow-xl`}>
                      {React.createElement(getEventTypeIcon(showEventDetail.type), { className: "w-8 h-8 text-white" })}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                        {showEventDetail.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 text-lg">
                        {showEventDetail.type.replace('-', ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())} Event
                      </p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setShowEventDetail(null)}
                    className="w-10 h-10 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-2xl flex items-center justify-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200/50 dark:border-gray-600/50"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="mb-8">
                      <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                        {showEventDetail.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-5 h-5 text-gray-500" />
                          <span className="text-gray-700 dark:text-gray-300">
                            {formatDate(showEventDetail.startDate)} at {formatTime(showEventDetail.startDate)}
                          </span>
      </div>

                        <div className="flex items-center space-x-3">
                          <MapPin className="w-5 h-5 text-gray-500" />
                          <span className="text-gray-700 dark:text-gray-300">
                            {showEventDetail.location}
                          </span>
      </div>

                        <div className="flex items-center space-x-3">
                          <Users className="w-5 h-5 text-gray-500" />
                          <span className="text-gray-700 dark:text-gray-300">
                            {showEventDetail.attendees.length} / {showEventDetail.maxAttendees} attendees
                          </span>
      </div>

                        <div className="flex items-center space-x-3">
                          <Star className="w-5 h-5 text-gray-500" />
                          <span className="text-gray-700 dark:text-gray-300">
                            {showEventDetail.price === 0 ? 'Free' : `$${showEventDetail.price}`}
                          </span>
                        </div>
      </div>

                      {showEventDetail.agenda && (
                        <div className="mb-8">
                          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                            Agenda
                          </h3>
                          <div className="space-y-3">
                            {showEventDetail.agenda.map((item: string, index: number) => (
                              <div key={index} className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                                <span className="text-gray-700 dark:text-gray-300">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
      </div>

                  <div className="lg:col-span-1">
                    <div className="bg-gray-50/80 dark:bg-gray-700/50 rounded-2xl p-6 mb-6 border border-gray-200/50 dark:border-gray-600/50">
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
                        Event Details
                      </h3>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Type:</span>
                          <span className="font-medium text-gray-800 dark:text-white">
                            {showEventDetail.type.replace('-', ' ').replace(/\b\w/g, (l: string) => l.toUpperCase())}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                          <span className="font-medium text-gray-800 dark:text-white">
                            {Math.round((showEventDetail.endDate - showEventDetail.startDate) / (1000 * 60 * 60))} hours
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Capacity:</span>
                          <span className="font-medium text-gray-800 dark:text-white">
                            {showEventDetail.maxAttendees} people
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 dark:text-gray-400">Status:</span>
                          <span className={`px-2 py-1 rounded-lg text-xs font-bold ${
                            showEventDetail.status === 'upcoming' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200' :
                            showEventDetail.status === 'draft' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200' :
                            'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                          }`}>
                            {showEventDetail.status}
                          </span>
                        </div>
                      </div>
      </div>

                    <div className="space-y-3">
                      {showEventDetail.isMyEvent ? (
                        <>
                          <button 
                            onClick={() => handleEditEvent(showEventDetail.id)}
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-2xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                          >
                            Edit Event
                          </button>
                          <button 
                            onClick={() => handleShareEvent(showEventDetail.id)}
                            className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-3 px-4 rounded-2xl font-semibold transition-all duration-300"
                          >
                            Share Event
                          </button>
                        </>
                      ) : (
                        <>
                          <button 
                            onClick={() => handleJoinEvent(showEventDetail.id)}
                            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-4 rounded-2xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
                          >
                            Join Event
                          </button>
                          <button 
                            onClick={() => handleShareEvent(showEventDetail.id)}
                            className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 py-3 px-4 rounded-2xl font-semibold transition-all duration-300"
                          >
                            Share Event
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Create Event Modal */}
        {showCreateModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-3xl max-w-2xl w-full border border-white/20 dark:border-gray-700/30">
              <div className="relative p-8 border-b border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
                
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Plus className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                        Create New Event
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Organize an amazing founder event
                      </p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setShowCreateModal(false)}
                    className="w-10 h-10 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-2xl flex items-center justify-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200/50 dark:border-gray-600/50"
                  >
                    <X className="w-5 h-5" />
          </button>
                </div>
              </div>
              
              <div className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Event Title *
                      </label>
                      <input
                        type="text"
                        placeholder="Enter event title"
                        className="w-full px-4 py-3 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Event Type *
                      </label>
                      <select className="w-full px-4 py-3 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-gray-800 dark:text-white">
                        <option value="">Select event type</option>
                        <option value="networking">Networking</option>
                        <option value="workshop">Workshop</option>
                        <option value="pitch-event">Pitch Event</option>
                        <option value="conference">Conference</option>
                        <option value="retreat">Retreat</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Description *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Describe your event..."
                      className="w-full px-4 py-3 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Location *
                      </label>
                      <input
                        type="text"
                        placeholder="Enter location or 'Virtual'"
                        className="w-full px-4 py-3 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Max Attendees
                      </label>
                      <input
                        type="number"
                        placeholder="50"
                        className="w-full px-4 py-3 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Start Date & Time *
                      </label>
                      <input
                        type="datetime-local"
                        className="w-full px-4 py-3 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-gray-800 dark:text-white"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        End Date & Time *
                      </label>
                      <input
                        type="datetime-local"
                        className="w-full px-4 py-3 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-gray-800 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Price (USD)
                    </label>
                    <input
                      type="number"
                      placeholder="0 (Free event)"
                      className="w-full px-4 py-3 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Tags (comma-separated)
                    </label>
                    <input
                      type="text"
                      placeholder="AI, Networking, Workshop"
                      className="w-full px-4 py-3 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    />
                  </div>

                  <div className="flex space-x-4 pt-6">
                    <button
                      type="button"
                      onClick={() => setShowCreateModal(false)}
                      className="flex-1 px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl transition-all duration-300"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        handleCreateEvent();
                      }}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Create Event
                    </button>
                  </div>
                </form>
              </div>
            </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Events;
