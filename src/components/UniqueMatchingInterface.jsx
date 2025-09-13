import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProfileModal from './ProfileModal.jsx';
import { 
  RefreshCw, 
  Settings, 
  Filter, 
  Heart, 
  X, 
  Star, 
  Eye,
  Brain,
  Sparkles,
  Zap,
  Crown,
  Shield,
  Globe,
  Target,
  Users,
  MessageCircle,
  Calendar,
  Trophy,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Share,
  Bookmark,
  Flag,
  MoreVertical,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  BarChart3,
  Activity,
  Clock,
  MapPin,
  Briefcase,
  GraduationCap,
  Music,
  Camera,
  Coffee,
  Gamepad2,
  Palette,
  Dumbbell,
  Plane,
  Car,
  Home,
  Utensils
} from 'lucide-react';

const UniqueMatchingInterface = ({ 
  currentUser, 
  matches, 
  onLike, 
  onPass, 
  onSuperLike, 
  onViewProfile, 
  onRefresh 
}) => {
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [matchType, setMatchType] = useState('all');
  const [showStats, setShowStats] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedTab, setSelectedTab] = useState('overview');

  const currentMatch = matches?.[currentMatchIndex];

  const matchTypes = [
    { id: 'all', label: 'All Matches', icon: Users, color: '#3B82F6', count: matches?.length || 0 },
    { id: 'soulmate', label: 'Soulmates', icon: Heart, color: '#EC4899', count: matches?.filter(m => m.cosmicAlignment?.cosmicScore >= 90).length || 0 },
    { id: 'twin-flame', label: 'Twin Flames', icon: Sparkles, color: '#F59E0B', count: matches?.filter(m => m.uniquenessScore >= 90).length || 0 },
    { id: 'growth', label: 'Growth Partners', icon: Target, color: '#10B981', count: matches?.filter(m => m.growthPotential?.evolutionScore >= 80).length || 0 },
    { id: 'energy', label: 'Energy Matches', icon: Zap, color: '#8B5CF6', count: matches?.filter(m => m.energyVibe?.overallVibe >= 85).length || 0 },
    { id: 'karmic', label: 'Karmic Connections', icon: Globe, color: '#06B6D4', count: matches?.filter(m => m.uniquenessScore >= 75).length || 0 }
  ];

  const mockMatches = [
    {
      id: 1,
      name: 'Sarah Johnson',
      age: 28,
      location: 'San Francisco, CA',
      distance: '2 miles away',
      photos: [
        { id: 1, url: '/api/placeholder/400/600', isMain: true },
        { id: 2, url: '/api/placeholder/400/600', isMain: false },
        { id: 3, url: '/api/placeholder/400/600', isMain: false }
      ],
      bio: 'AI researcher turned entrepreneur. Love hiking, cooking, and building healthcare solutions that matter.',
      job: 'CTO at HealthAI',
      education: 'Stanford University',
      height: '5\'6"',
      interests: ['AI/ML', 'Healthcare', 'Hiking', 'Cooking', 'Photography'],
      lifestyle: {
        exercise: 'Daily',
        drinking: 'Socially',
        smoking: 'Never',
        diet: 'Vegetarian'
      },
      compatibility: {
        overall: 92,
        personality: 88,
        lifestyle: 95,
        values: 90,
        interests: 87
      },
      cosmicAlignment: {
        cosmicScore: 94,
        zodiacCompatibility: 'Excellent',
        energyMatch: 'High',
        spiritualConnection: 'Strong'
      },
      psychologicalProfile: {
        bigFive: {
          openness: 85,
          conscientiousness: 90,
          extraversion: 75,
          agreeableness: 88,
          neuroticism: 25
        },
        loveLanguage: ['Quality Time', 'Physical Touch'],
        attachmentStyle: 'Secure',
        communicationStyle: 'Direct'
      },
      energyVibe: {
        overallVibe: 89,
        emotionalEnergy: 'High',
        socialEnergy: 'Moderate',
        creativeEnergy: 'Very High'
      },
      growthPotential: {
        evolutionScore: 87,
        learningCompatibility: 'Excellent',
        challengeLevel: 'Moderate',
        supportStyle: 'Encouraging'
      },
      uniquenessScore: 91,
      lastActive: '2 hours ago',
      verified: true,
      premium: true
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      age: 32,
      location: 'Austin, TX',
      distance: '5 miles away',
      photos: [
        { id: 1, url: '/api/placeholder/400/600', isMain: true },
        { id: 2, url: '/api/placeholder/400/600', isMain: false }
      ],
      bio: 'Environmentalist turned entrepreneur. Rock climbing, yoga, and sustainable living enthusiast.',
      job: 'CEO at EcoTech',
      education: 'MIT',
      height: '6\'0"',
      interests: ['Sustainability', 'Rock Climbing', 'Yoga', 'Adventure', 'Meditation'],
      lifestyle: {
        exercise: 'Daily',
        drinking: 'Rarely',
        smoking: 'Never',
        diet: 'Vegan'
      },
      compatibility: {
        overall: 88,
        personality: 85,
        lifestyle: 90,
        values: 92,
        interests: 86
      },
      cosmicAlignment: {
        cosmicScore: 87,
        zodiacCompatibility: 'Good',
        energyMatch: 'Moderate',
        spiritualConnection: 'Moderate'
      },
      psychologicalProfile: {
        bigFive: {
          openness: 90,
          conscientiousness: 85,
          extraversion: 70,
          agreeableness: 92,
          neuroticism: 30
        },
        loveLanguage: ['Acts of Service', 'Words of Affirmation'],
        attachmentStyle: 'Secure',
        communicationStyle: 'Diplomatic'
      },
      energyVibe: {
        overallVibe: 82,
        emotionalEnergy: 'Moderate',
        socialEnergy: 'Low',
        creativeEnergy: 'High'
      },
      growthPotential: {
        evolutionScore: 89,
        learningCompatibility: 'Very Good',
        challengeLevel: 'High',
        supportStyle: 'Supportive'
      },
      uniquenessScore: 88,
      lastActive: '1 day ago',
      verified: true,
      premium: false
    }
  ];

  const displayMatches = matches && matches.length > 0 ? matches : mockMatches;

  const handleAction = (action) => {
    if (currentMatch) {
      action(currentMatch);
      
      // Move to next match
      setTimeout(() => {
        if (currentMatchIndex < displayMatches.length - 1) {
          setCurrentMatchIndex(currentMatchIndex + 1);
        } else {
          // No more matches, refresh
          onRefresh?.();
          setCurrentMatchIndex(0);
        }
      }, 500);
    }
  };

  const handleRefresh = async () => {
    setIsLoading(true);
    await onRefresh?.();
    setCurrentMatchIndex(0);
    setIsLoading(false);
  };

  const handleNext = () => {
    if (currentMatchIndex < displayMatches.length - 1) {
      setCurrentMatchIndex(currentMatchIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentMatchIndex > 0) {
      setCurrentMatchIndex(currentMatchIndex - 1);
    }
  };

  const handleViewProfile = (match) => {
    console.log('View profile:', match.id);
    setSelectedProfile(match);
    setShowProfileModal(true);
    onViewProfile?.(match);
  };

  const handleCloseProfileModal = () => {
    setShowProfileModal(false);
    setSelectedProfile(null);
  };

  const handleLikeFromModal = (profile) => {
    handleAction(onLike);
    setShowProfileModal(false);
  };

  const handleMessageFromModal = (profile) => {
    console.log('Message profile:', profile.id);
    setShowProfileModal(false);
  };

  const handleSuperLikeFromModal = (profile) => {
    handleAction(onSuperLike);
    setShowProfileModal(false);
  };

  const getMatchTypeStats = () => {
    const stats = {
      total: displayMatches.length,
      soulmates: displayMatches.filter(m => m.cosmicAlignment?.cosmicScore >= 90).length,
      twinFlames: displayMatches.filter(m => m.uniquenessScore >= 90).length,
      growth: displayMatches.filter(m => m.growthPotential?.evolutionScore >= 80).length,
      energy: displayMatches.filter(m => m.energyVibe?.overallVibe >= 85).length,
      karmic: displayMatches.filter(m => m.uniquenessScore >= 75).length
    };
    return stats;
  };

  const stats = getMatchTypeStats();

  const getInterestIcon = (interest) => {
    const iconMap = {
      'AI/ML': Brain,
      'Healthcare': Shield,
      'Hiking': Target,
      'Cooking': Utensils,
      'Photography': Camera,
      'Sustainability': Globe,
      'Rock Climbing': Target,
      'Yoga': Activity,
      'Adventure': Plane,
      'Meditation': Activity,
      'Music': Music,
      'Art': Palette,
      'Fitness': Dumbbell,
      'Gaming': Gamepad2,
      'Travel': Plane,
      'Coffee': Coffee
    };
    return iconMap[interest] || Heart;
  };

  if (isLoading) {
    return (
      <div className="main-content">
        <div className="container">
          <div className="section">
            <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6 animate-pulse flex items-center justify-center">
            <Brain className="w-10 h-10 text-white animate-spin" />
          </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
            AI is analyzing compatibility...
          </h2>
                <p className="text-gray-600">
            Finding your perfect matches using deep psychological profiling
          </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!displayMatches || displayMatches.length === 0) {
    return (
      <div className="main-content">
        <div className="container">
          <div className="section">
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="text-center max-w-md mx-auto">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
            <Heart className="w-12 h-12 text-white" />
          </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
            No matches found
          </h2>
                <p className="text-gray-600 mb-6">
            We're working on finding more compatible matches for you. Try refreshing or adjusting your preferences.
          </p>
          <button
            onClick={handleRefresh}
                  className="btn btn-primary btn-lg"
          >
            <RefreshCw className="w-5 h-5" />
                  Refresh Matches
          </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="main-content">
      <div className="container">
        <div className="section">
      {/* Header */}
          <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">AI Matching</h1>
                <p className="text-lg text-gray-600">Discover your perfect matches through advanced AI analysis</p>
            </div>
              <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowStats(!showStats)}
                  className="btn btn-secondary"
                >
                  <BarChart3 className="w-5 h-5" />
                  Stats
              </button>
              <button
                onClick={() => setShowFilters(!showFilters)}
                  className="btn btn-secondary"
                >
                  <Filter className="w-5 h-5" />
                  Filters
              </button>
              <button
                onClick={handleRefresh}
                  className="btn btn-primary"
                >
                  <RefreshCw className="w-5 h-5" />
                  Refresh
              </button>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          {showStats && (
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
              {matchTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <div key={type.id} className="card p-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg" style={{ backgroundColor: type.color + '20' }}>
                        <Icon className="w-5 h-5" style={{ color: type.color }} />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">{type.count}</div>
                        <div className="text-sm text-gray-600">{type.label}</div>
          </div>
        </div>
      </div>
                );
              })}
            </div>
          )}

          {/* Match Type Tabs */}
          <div className="card mb-6">
            <div className="card-header">
              <div className="flex items-center space-x-8 overflow-x-auto">
          {matchTypes.map((type) => {
            const Icon = type.icon;
            return (
              <button
                key={type.id}
                onClick={() => setMatchType(type.id)}
                      className={`flex items-center space-x-2 pb-2 border-b-2 transition-colors whitespace-nowrap ${
                        matchType === type.id
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <Icon className="w-5 h-5" style={{ color: matchType === type.id ? '#3B82F6' : undefined }} />
                <span className="font-medium">{type.label}</span>
                      <span className="badge badge-secondary text-xs">{type.count}</span>
              </button>
            );
          })}
              </div>
            </div>
          </div>

          {/* Main Matching Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Card */}
            <div className="lg:col-span-2">
              <div className="card-elevated">
                <div className="relative">
                  {/* Profile Image */}
                  <div className="relative h-96 bg-gray-200 rounded-t-lg overflow-hidden">
                    <img
                      src={currentMatch?.photos?.[0]?.url || '/api/placeholder/400/600'}
                      alt={currentMatch?.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                      {currentMatch?.verified && (
                        <div className="bg-blue-500 text-white p-1 rounded-full">
                          <CheckCircle className="w-4 h-4" />
                        </div>
                      )}
                      {currentMatch?.premium && (
                        <div className="bg-yellow-500 text-white p-1 rounded-full">
                          <Crown className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                    <div className="absolute top-4 right-4 flex items-center space-x-2">
                      <button className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                        <Share className="w-5 h-5 text-gray-700" />
                      </button>
                      <button className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                        <Bookmark className="w-5 h-5 text-gray-700" />
                      </button>
                      <button className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                        <MoreVertical className="w-5 h-5 text-gray-700" />
                      </button>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h2 className="text-2xl font-bold">{currentMatch?.name}, {currentMatch?.age}</h2>
                      <p className="text-sm opacity-90">{currentMatch?.job}</p>
                      <p className="text-sm opacity-90">{currentMatch?.location}</p>
        </div>
      </div>

                  {/* Profile Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900">{currentMatch?.compatibility?.overall}%</div>
                          <div className="text-sm text-gray-600">Match</div>
                </div>
                <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900">{currentMatch?.uniquenessScore}%</div>
                          <div className="text-sm text-gray-600">Unique</div>
                </div>
                <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900">{currentMatch?.cosmicAlignment?.cosmicScore}%</div>
                          <div className="text-sm text-gray-600">Cosmic</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Last active</div>
                        <div className="text-sm font-medium text-gray-900">{currentMatch?.lastActive}</div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">{currentMatch?.bio}</p>

                    {/* Interests */}
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">Interests</h3>
                      <div className="flex flex-wrap gap-2">
                        {currentMatch?.interests?.map((interest, index) => {
                          const Icon = getInterestIcon(interest);
                          return (
                            <span key={index} className="badge badge-secondary flex items-center space-x-1">
                              <Icon className="w-3 h-3" />
                              <span>{interest}</span>
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    {/* Lifestyle */}
                    <div className="mb-4">
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">Lifestyle</h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Exercise:</span>
                          <span className="font-medium">{currentMatch?.lifestyle?.exercise}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Drinking:</span>
                          <span className="font-medium">{currentMatch?.lifestyle?.drinking}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Smoking:</span>
                          <span className="font-medium">{currentMatch?.lifestyle?.smoking}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Diet:</span>
                          <span className="font-medium">{currentMatch?.lifestyle?.diet}</span>
                        </div>
                </div>
                </div>
                </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Compatibility Breakdown */}
              <div className="card">
                <div className="card-header">
                  <h3 className="text-lg font-semibold text-gray-900">Compatibility</h3>
                </div>
                <div className="card-body">
                  <div className="space-y-4">
                    {Object.entries(currentMatch?.compatibility || {}).map(([key, value]) => (
                      key !== 'overall' && (
                        <div key={key}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                            <span className="font-medium">{value}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${value}%` }}
                            ></div>
                          </div>
                        </div>
                      )
                    ))}
                </div>
                </div>
              </div>

              {/* AI Insights */}
              <div className="card">
                <div className="card-header">
                  <h3 className="text-lg font-semibold text-gray-900">AI Insights</h3>
                </div>
                <div className="card-body">
                  <div className="space-y-4">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Brain className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-900">Personality Match</span>
                      </div>
                      <p className="text-sm text-blue-800">
                        High compatibility in openness and conscientiousness. Both value growth and learning.
                      </p>
                    </div>
                    <div className="p-3 bg-purple-50 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Sparkles className="w-4 h-4 text-purple-600" />
                        <span className="text-sm font-medium text-purple-900">Energy Alignment</span>
                      </div>
                      <p className="text-sm text-purple-800">
                        Strong creative energy match. Both thrive in innovative environments.
                      </p>
            </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Target className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium text-green-900">Growth Potential</span>
        </div>
                      <p className="text-sm text-green-800">
                        Excellent learning compatibility. Will challenge and support each other's growth.
                      </p>
              </div>
            </div>
          </div>
        </div>

              {/* Action Buttons */}
              <div className="card">
                <div className="card-body">
                  <div className="space-y-3">
          <button
            onClick={() => handleAction(onPass)}
                      className="btn btn-secondary w-full"
          >
                      <X className="w-5 h-5" />
                      Pass
          </button>
          <button
            onClick={() => handleAction(onSuperLike)}
                      className="btn btn-primary w-full"
          >
                      <Star className="w-5 h-5" />
                      Super Like
          </button>
          <button
            onClick={() => handleAction(onLike)}
                      className="btn btn-primary w-full"
                    >
                      <Heart className="w-5 h-5" />
                      Like
                    </button>
                    <button
                      onClick={() => handleViewProfile(currentMatch)}
                      className="btn btn-ghost w-full"
                    >
                      <Eye className="w-5 h-5" />
                      View Full Profile
                    </button>
                    <button
                      onClick={() => setShowDetails(!showDetails)}
                      className="btn btn-ghost w-full"
                    >
                      <Eye className="w-5 h-5" />
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="card">
                <div className="card-body">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={handlePrevious}
                      disabled={currentMatchIndex === 0}
                      className="btn btn-ghost btn-sm disabled:opacity-50"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-sm text-gray-600">
                      {currentMatchIndex + 1} of {displayMatches.length}
                    </span>
                    <button
                      onClick={handleNext}
                      disabled={currentMatchIndex === displayMatches.length - 1}
                      className="btn btn-ghost btn-sm disabled:opacity-50"
                    >
                      <ChevronRight className="w-4 h-4" />
          </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Modal */}
      <ProfileModal
        profile={selectedProfile}
        isOpen={showProfileModal}
        onClose={handleCloseProfileModal}
        onLike={handleLikeFromModal}
        onMessage={handleMessageFromModal}
        onSuperLike={handleSuperLikeFromModal}
      />
    </div>
  );
};

export default UniqueMatchingInterface;