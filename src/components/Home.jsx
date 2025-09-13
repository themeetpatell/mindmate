import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Search, 
  Heart,
  MessageCircle,
  Calendar,
  Star,
  CheckCircle,
  Eye,
  Trophy,
  Mountain,
  X,
  Brain,
  Sparkles,
  Zap,
  Crown,
  Shield,
  Globe,
  Target,
  Plus,
  Send,
  ThumbsUp
} from 'lucide-react';

const Home = () => {
  const [activeTab, setActiveTab] = useState('discover');
  const [showProfileModal, setShowProfileModal] = useState(false);
  
  // Get user data from Redux store
  const { user } = useSelector((state) => state.auth);
  const { profile } = useSelector((state) => state.profile);
  
  // Use Redux data or fallback to default values
  const userProfile = {
    name: user?.firstName && user?.lastName ? `${user.firstName} ${user.lastName}` : 'Alex Chen',
    title: profile?.title || 'CEO & Co-Founder',
    company: profile?.company || 'TechFlow Solutions',
    location: profile?.location || 'San Francisco, CA',
    bio: profile?.bio || 'Passionate about building products that matter. Love hiking, cooking, and connecting with like-minded entrepreneurs.',
    avatar: user?.firstName && user?.lastName ? `${user.firstName[0]}${user.lastName[0]}` : 'AC',
    verified: true,
    points: 1250,
    level: 'Expert',
    badges: ['Early Adopter', 'Networker', 'Visionary'],
    interests: profile?.values || ['Hiking', 'Cooking', 'Photography', 'Startups', 'AI/ML'],
    achievements: [
      { title: 'Raised $15M Series A', year: 2023, icon: Trophy },
      { title: 'Built 50+ person team', year: 2022, icon: Users },
      { title: 'Hiked 20+ 14ers', year: 2023, icon: Mountain }
    ]
  };

  // Get matches from Redux store or use defaults
  const { profiles } = useSelector((state) => state.discovery);
  const matches = profiles?.length > 0 ? profiles.slice(0, 6).map(profile => ({
    id: profile.founder.id,
    name: `${profile.founder.title} at ${profile.founder.company}`,
    title: profile.founder.title,
    company: profile.founder.company,
    location: profile.founder.location,
    bio: profile.founder.bio,
    avatar: profile.founder.title[0] + profile.founder.company[0],
    compatibility: Math.round(profile.compatibilityScore),
    lastActive: '2 hours ago',
    verified: profile.founder.verification.overallScore > 0.7,
    interests: profile.founder.values || [],
    online: true
  })) : [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'CTO & Co-Founder',
      company: 'HealthAI',
      location: 'Boston, MA',
      bio: 'AI researcher turned entrepreneur. Love music, cooking, and building healthcare solutions.',
      avatar: 'SJ',
      compatibility: 92,
      lastActive: '2 hours ago',
      verified: true,
      interests: ['Music', 'Cooking', 'AI/ML', 'Healthcare'],
      online: true
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      title: 'CEO & Founder',
      company: 'EcoTech',
      location: 'Austin, TX',
      bio: 'Environmentalist turned entrepreneur. Rock climbing, yoga, and sustainable living enthusiast.',
      avatar: 'MR',
      compatibility: 88,
      lastActive: '1 day ago',
      verified: true,
      interests: ['Rock Climbing', 'Yoga', 'Sustainability', 'Adventure'],
      online: false
    }
  ];

  // Get stats from Redux store or use defaults
  const { connections } = useSelector((state) => state.connections);
  const stats = {
    totalMatches: connections?.length || 24,
    newMatches: connections?.filter(c => c.status === 'pending')?.length || 3,
    messages: 156,
    profileViews: 89
  };

  return (
    <div className="main-content">
      <div className="container">
        {/* Welcome Section */}
        <div className="section">
        <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-up">
            Welcome back, {userProfile.name.split(' ')[0]}! 👋
          </h1>
            <p className="text-lg text-gray-600 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Discover amazing people, connect with like-minded individuals, and grow your network.
          </p>
        </div>

        {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="card p-6 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-pink-500">
                <Heart className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900">{stats.totalMatches}</span>
              </div>
              <h3 className="text-sm text-gray-600">Total Matches</h3>
          </div>

            <div className="card p-6 animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-orange-500">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900">{stats.newMatches}</span>
              </div>
              <h3 className="text-sm text-gray-600">New Matches</h3>
            </div>

            <div className="card p-6 animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-blue-500">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900">{stats.messages}</span>
              </div>
              <h3 className="text-sm text-gray-600">Messages</h3>
            </div>

            <div className="card p-6 animate-scale-in" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-green-500">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900">{stats.profileViews}</span>
              </div>
              <h3 className="text-sm text-gray-600">Profile Views</h3>
            </div>
          </div>

          {/* AI-Powered Dating Revolution Card */}
          <div className="card-elevated p-8 mb-8 animate-slide-up" style={{ background: 'linear-gradient(135deg, #8B5CF6, #3B82F6)', animationDelay: '0.6s' }}>
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-white/20 mr-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">AI-Powered Dating Revolution</h2>
        </div>
            <p className="text-white/90 text-lg mb-6">
              Experience the future of dating with deep psychological profiling and cosmic compatibility
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-white/20">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Deep Psychology</h3>
                  <p className="text-white/80 text-sm">Advanced AI analyzes personality traits, attachment styles, and emotional intelligence</p>
          </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-white/20">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Cosmic Alignment</h3>
                  <p className="text-white/80 text-sm">Discover soulmate connections through zodiac compatibility and energy matching</p>
            </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-lg bg-white/20">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Unique Matching</h3>
                  <p className="text-white/80 text-sm">Beyond typical dating apps - find twin flames, growth partners, and karmic connections</p>
            </div>
              </div>
            </div>
            <button className="btn btn-primary btn-lg">
              <Brain className="w-5 h-5" />
              Start AI Matching
            </button>
        </div>

        {/* Quick Actions */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 animate-slide-up">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link to="/matching" className="card p-6 text-center hover:shadow-md transition-shadow animate-scale-in" style={{ animationDelay: '0.8s' }}>
                <div className="p-3 rounded-lg bg-blue-100 mx-auto mb-3 w-fit">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">AI Matching</h3>
                </Link>
              <Link to="/discovery" className="card p-6 text-center hover:shadow-md transition-shadow animate-scale-in" style={{ animationDelay: '0.9s' }}>
                <div className="p-3 rounded-lg bg-purple-100 mx-auto mb-3 w-fit">
                  <Search className="w-6 h-6 text-purple-600" />
          </div>
                <h3 className="font-semibold text-gray-900">Discovery</h3>
              </Link>
              <Link to="/messages" className="card p-6 text-center hover:shadow-md transition-shadow animate-scale-in" style={{ animationDelay: '1.0s' }}>
                <div className="p-3 rounded-lg bg-pink-100 mx-auto mb-3 w-fit">
                  <Heart className="w-6 h-6 text-pink-600" />
        </div>
                <h3 className="font-semibold text-gray-900">Messages</h3>
              </Link>
              <Link to="/events" className="card p-6 text-center hover:shadow-md transition-shadow animate-scale-in" style={{ animationDelay: '1.1s' }}>
                <div className="p-3 rounded-lg bg-green-100 mx-auto mb-3 w-fit">
                  <MessageCircle className="w-6 h-6 text-green-600" />
            </div>
                <h3 className="font-semibold text-gray-900">Events</h3>
              </Link>
          </div>
        </div>

          {/* Recent Matches */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Recent Matches</h2>
              <Link to="/matching" className="text-primary-blue hover:text-primary-purple font-medium">
                View All
              </Link>
                </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {matches.map((match) => (
                <div key={match.id} className="card p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="avatar avatar-lg">
                      <span>{match.avatar}</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-gray-900">{match.name}</h3>
                        {match.verified && (
                          <CheckCircle className="w-4 h-4 text-blue-500" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{match.location}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-green-600">{match.compatibility}%</div>
                      <div className="text-xs text-gray-500">Match</div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{match.bio}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {match.interests.slice(0, 3).map((interest, index) => (
                      <span key={index} className="badge badge-secondary text-xs">
                        {interest}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <button className="btn btn-primary btn-sm flex-1">
                      <Heart className="w-4 h-4" />
                      Like
                    </button>
                    <button className="btn btn-secondary btn-sm flex-1">
                      <MessageCircle className="w-4 h-4" />
                      Message
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;