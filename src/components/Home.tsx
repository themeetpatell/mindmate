import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
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
  X
} from 'lucide-react';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState('discover');
  const [showProfileModal, setShowProfileModal] = useState(false);
  
  // Get user data from Redux store
  const { user } = useSelector((state: RootState) => state.auth);
  const { profile } = useSelector((state: RootState) => state.profile);
  
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
  const { profiles } = useSelector((state: RootState) => state.discovery);
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
  const { connections } = useSelector((state: RootState) => state.connections);
  const stats = {
    totalMatches: connections?.length || 24,
    newMatches: connections?.filter(c => c.status === 'pending')?.length || 3,
    messages: 156, // TODO: Get from messages slice when implemented
    profileViews: 89 // TODO: Get from profile slice when implemented
  };

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Welcome back, {userProfile.name.split(' ')[0]}! 👋
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Discover amazing founders, connect with like-minded entrepreneurs, and grow your network.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-800 dark:text-white">{stats.totalMatches}</div>
                <div className="text-gray-600 dark:text-gray-400">Total Matches</div>
              </div>
              <Heart className="w-8 h-8 text-pink-500" />
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-800 dark:text-white">{stats.newMatches}</div>
                <div className="text-gray-600 dark:text-gray-400">New Matches</div>
              </div>
              <Star className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-800 dark:text-white">{stats.messages}</div>
                <div className="text-gray-600 dark:text-gray-400">Messages</div>
              </div>
              <MessageCircle className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-gray-800 dark:text-white">{stats.profileViews}</div>
                <div className="text-gray-600 dark:text-gray-400">Profile Views</div>
              </div>
              <Eye className="w-8 h-8 text-green-500" />
            </div>
          </div>
      </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg mb-8">
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { id: 'discover', label: 'Discover', icon: Search, color: 'from-blue-500 to-purple-600' },
                { id: 'matches', label: 'Matches', icon: Heart, color: 'from-pink-500 to-red-500' },
                { id: 'messages', label: 'Messages', icon: MessageCircle, color: 'from-green-500 to-blue-500' },
                { id: 'events', label: 'Events', icon: Calendar, color: 'from-purple-500 to-pink-500' }
              ].map((action) => {
                const Icon = action.icon;
                return (
                  <button
                    key={action.id}
                    onClick={() => setActiveTab(action.id)}
                    className={`flex flex-col items-center space-y-2 p-4 rounded-lg bg-gradient-to-r ${action.color} text-white hover:shadow-lg transition-all duration-200`}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="font-semibold">{action.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg mb-8">
          <div className="p-6">
            {activeTab === 'discover' && (
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Discover Founders</h2>
                  <p className="text-gray-600 dark:text-gray-400">Find amazing entrepreneurs to connect with</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {matches.map((match: any) => (
                    <div key={match.id} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                            {match.avatar}
                          </div>
                          {match.online && (
                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-bold text-gray-800 dark:text-white">{match.name}</h3>
                            {match.verified && <CheckCircle className="w-4 h-4 text-blue-500" />}
                          </div>
                          <p className="text-gray-600 dark:text-gray-400 text-sm">{match.title}</p>
                          <p className="text-gray-500 dark:text-gray-500 text-xs">{match.location}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-pink-600">{match.compatibility}%</div>
                          <div className="text-xs text-gray-500">Match</div>
                        </div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{match.bio}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {match.interests.slice(0, 3).map((interest: string, index: number) => (
                          <span key={index} className="bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-200 px-2 py-1 rounded-full text-xs">
                            {interest}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-2">
                        <button className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-200">
                          <Heart className="w-4 h-4 inline mr-2" />
                          Like
                        </button>
                        <button className="flex-1 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors">
                          <MessageCircle className="w-4 h-4 inline mr-2" />
                          Message
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'matches' && (
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Your Matches</h2>
                  <p className="text-gray-600 dark:text-gray-400">People who liked your profile back</p>
                </div>
                <div className="space-y-4">
                  {matches.map((match: any) => (
                    <div key={match.id} className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-lg transition-all duration-300">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                          {match.avatar}
                        </div>
                        {match.online && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-bold text-gray-800 dark:text-white">{match.name}</h3>
                          {match.verified && <CheckCircle className="w-4 h-4 text-blue-500" />}
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{match.title} • {match.company}</p>
                        <p className="text-gray-500 dark:text-gray-500 text-xs">Last active {match.lastActive}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-pink-600">{match.compatibility}%</div>
                        <div className="text-xs text-gray-500">Match</div>
                      </div>
                      <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-200">
                        <MessageCircle className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
        </div>
      </div>
            )}

            {activeTab === 'messages' && (
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Messages</h2>
                  <p className="text-gray-600 dark:text-gray-400">Your recent conversations</p>
                </div>
                <div className="space-y-4">
                  {matches.map((match: any) => (
                    <div key={match.id} className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-lg transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        {match.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-gray-800 dark:text-white">{match.name}</h3>
                          <span className="text-xs text-gray-500">{match.lastActive}</span>
            </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Hey! I saw your profile and I think we'd make a great team...</p>
          </div>
                      <div className="w-6 h-6 bg-pink-500 text-white text-xs rounded-full flex items-center justify-center">
              2
            </div>
          </div>
        ))}
      </div>
              </div>
            )}

            {activeTab === 'events' && (
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Events & Meetups</h2>
                  <p className="text-gray-600 dark:text-gray-400">Upcoming networking events and meetups</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Founder Meetup SF</h3>
                    <p className="text-blue-100 mb-4">Networking event for founders and investors</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>Tomorrow, 6:00 PM</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Startup Pitch Night</h3>
                    <p className="text-pink-100 mb-4">Pitch your startup to investors</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>Next Friday, 7:00 PM</span>
                    </div>
                  </div>
                </div>
            </div>
            )}

          </div>
        </div>
      </div>

      {/* Profile Modal */}
      {showProfileModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Your Profile</h3>
                <button
                  onClick={() => setShowProfileModal(false)}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                  {userProfile.avatar}
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{userProfile.name}</h2>
                <p className="text-gray-600 dark:text-gray-400">{userProfile.title} at {userProfile.company}</p>
                <p className="text-gray-500 dark:text-gray-500 text-sm">{userProfile.location}</p>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Bio</label>
                  <p className="text-gray-700 dark:text-gray-300">{userProfile.bio}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Interests</label>
                  <div className="flex flex-wrap gap-2">
                    {userProfile.interests.map((interest: string, index: number) => (
                      <span key={index} className="bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-200 px-3 py-1 rounded-full text-sm">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Achievements</label>
                  <div className="space-y-2">
                    {userProfile.achievements.map((achievement, index) => {
                      const Icon = achievement.icon;
                      return (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                          <Icon className="w-5 h-5 text-yellow-500" />
                          <div>
                            <p className="font-semibold text-gray-800 dark:text-white">{achievement.title}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{achievement.year}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
