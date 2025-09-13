import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  MapPin, 
  Heart, 
  MessageCircle, 
  X, 
  Star,
  CheckCircle,
  Globe,
  Briefcase,
  Calendar,
  Users,
  Target,
  Zap
} from 'lucide-react';

const Discovery = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    location: '',
    industry: '',
    experience: '',
    interests: []
  });

  const profiles = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'CTO & Co-Founder',
      company: 'HealthAI',
      location: 'Boston, MA',
      bio: 'AI researcher turned entrepreneur. Love music, cooking, and building healthcare solutions.',
      avatar: 'SJ',
      compatibility: 92,
      verified: true,
      interests: ['Music', 'Cooking', 'AI/ML', 'Healthcare'],
      online: true,
      distance: '2 miles away'
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
      verified: true,
      interests: ['Rock Climbing', 'Yoga', 'Sustainability', 'Adventure'],
      online: false,
      distance: '5 miles away'
    },
    {
      id: 3,
      name: 'Emma Wilson',
      title: 'Product Manager',
      company: 'FinTech Solutions',
      location: 'New York, NY',
      bio: 'Passionate about fintech and financial inclusion. Love traveling and trying new cuisines.',
      avatar: 'EW',
      compatibility: 85,
      verified: true,
      interests: ['Travel', 'Food', 'Fintech', 'Photography'],
      online: true,
      distance: '1 mile away'
    },
    {
      id: 4,
      name: 'David Chen',
      title: 'VP of Engineering',
      company: 'CloudScale',
      location: 'Seattle, WA',
      bio: 'Cloud infrastructure expert. Hiking, reading, and building scalable systems.',
      avatar: 'DC',
      compatibility: 90,
      verified: true,
      interests: ['Hiking', 'Reading', 'Cloud Computing', 'Architecture'],
      online: false,
      distance: '3 miles away'
    }
  ];

  const industries = ['Technology', 'Healthcare', 'Finance', 'Education', 'E-commerce', 'SaaS'];
  const experienceLevels = ['Entry Level', 'Mid Level', 'Senior Level', 'Executive'];

  const handleFilterChange = (key, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleInterestToggle = (interest) => {
    setSelectedFilters(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  return (
    <div className="main-content">
      <div className="container">
        <div className="section">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Discover People</h1>
            <p className="text-lg text-gray-600">Find amazing people who share your interests and values</p>
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
                    placeholder="Search by name, company, or interests..."
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

              {/* Filters Panel */}
              {showFilters && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Location Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          placeholder="City, State"
                          value={selectedFilters.location}
                          onChange={(e) => handleFilterChange('location', e.target.value)}
                          className="input pl-10"
                        />
                      </div>
                    </div>

                    {/* Industry Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                      <select
                        value={selectedFilters.industry}
                        onChange={(e) => handleFilterChange('industry', e.target.value)}
                        className="input"
                      >
                        <option value="">All Industries</option>
                        {industries.map(industry => (
                          <option key={industry} value={industry}>{industry}</option>
                        ))}
                      </select>
                    </div>

                    {/* Experience Filter */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Experience</label>
                      <select
                        value={selectedFilters.experience}
                        onChange={(e) => handleFilterChange('experience', e.target.value)}
                        className="input"
                      >
                        <option value="">All Levels</option>
                        {experienceLevels.map(level => (
                          <option key={level} value={level}>{level}</option>
                        ))}
                      </select>
                    </div>

                    {/* Clear Filters */}
                    <div className="flex items-end">
                      <button
                        onClick={() => setSelectedFilters({ location: '', industry: '', experience: '', interests: [] })}
                        className="btn btn-ghost w-full"
                      >
                        Clear All
                      </button>
                    </div>
                  </div>

                  {/* Interests Filter */}
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Interests</label>
                    <div className="flex flex-wrap gap-2">
                      {['Technology', 'Startups', 'AI/ML', 'Healthcare', 'Finance', 'Design', 'Marketing', 'Sales'].map(interest => (
                        <button
                          key={interest}
                          onClick={() => handleInterestToggle(interest)}
                          className={`badge ${
                            selectedFilters.interests.includes(interest)
                              ? 'badge-primary'
                              : 'badge-secondary'
                          }`}
                        >
                          {interest}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profiles.map((profile) => (
              <div key={profile.id} className="card hover:shadow-lg transition-shadow">
                {/* Profile Header */}
                <div className="card-body">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="avatar avatar-lg">
                          <span>{profile.avatar}</span>
                        </div>
                        {profile.online && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                        )}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-gray-900">{profile.name}</h3>
                          {profile.verified && (
                            <CheckCircle className="w-4 h-4 text-blue-500" />
                          )}
                        </div>
                        <p className="text-sm text-gray-600">{profile.title} at {profile.company}</p>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <MapPin className="w-3 h-3" />
                          <span>{profile.distance}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{profile.compatibility}%</div>
                      <div className="text-xs text-gray-500">Match</div>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-gray-700 mb-4">{profile.bio}</p>

                  {/* Interests */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {profile.interests.slice(0, 3).map((interest, index) => (
                      <span key={index} className="badge badge-secondary text-xs">
                        {interest}
                      </span>
                    ))}
                    {profile.interests.length > 3 && (
                      <span className="badge badge-secondary text-xs">
                        +{profile.interests.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <button className="btn btn-ghost btn-sm flex-1">
                      <X className="w-4 h-4" />
                      Pass
                    </button>
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
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <button className="btn btn-primary btn-lg">
              <Zap className="w-5 h-5" />
              Load More Profiles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discovery;