import React, { useState, useEffect } from 'react';
import { 
  Users, 
  MessageCircle, 
  Video, 
  Calendar,
  Star,
  Search,
  UserCheck,
  Clock,
  X
} from 'lucide-react';
import { Match, MatchStatus } from '../types';

const Connections: React.FC = () => {
  const [connections, setConnections] = useState<Match[]>([]);
  const [filter, setFilter] = useState<MatchStatus | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - replace with API calls
  useEffect(() => {
    const mockConnections: Match[] = [
      {
        id: '1',
        founderId: '1',
        matchId: '2',
        compatibilityScore: 92,
        status: 'connected',
        mutualConnections: ['John Doe', 'Jane Smith', 'Mike Johnson'],
        sharedInterests: ['AI/ML', 'SaaS', 'Product Management'],
        introductionMessage: 'Great to connect! I saw we both worked on AI-powered products.',
        createdAt: new Date('2024-01-15'),
        updatedAt: new Date('2024-01-20')
      },
      {
        id: '2',
        founderId: '1',
        matchId: '3',
        compatibilityScore: 88,
        status: 'accepted',
        mutualConnections: ['Sarah Wilson'],
        sharedInterests: ['Healthcare', 'Machine Learning'],
        introductionMessage: 'Excited to explore potential collaboration opportunities!',
        createdAt: new Date('2024-01-18'),
        updatedAt: new Date('2024-01-19')
      },
      {
        id: '3',
        founderId: '1',
        matchId: '4',
        compatibilityScore: 85,
        status: 'pending',
        mutualConnections: [],
        sharedInterests: ['Fintech', 'Blockchain'],
        createdAt: new Date('2024-01-20'),
        updatedAt: new Date('2024-01-20')
      }
    ];

    setConnections(mockConnections);
  }, []);

  const getStatusColor = (status: MatchStatus) => {
    const colors = {
      'pending': 'bg-yellow-100 text-yellow-800',
      'accepted': 'bg-green-100 text-green-800',
      'connected': 'bg-blue-100 text-blue-800',
      'declined': 'bg-red-100 text-red-800',
      'blocked': 'bg-gray-100 text-gray-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const getStatusIcon = (status: MatchStatus) => {
    const icons = {
      'pending': Clock,
      'accepted': UserCheck,
      'connected': Users,
      'declined': X,
      'blocked': X
    };
    return icons[status] || Clock;
  };

  const filteredConnections = connections.filter(connection => {
    const matchesFilter = filter === 'all' || connection.status === filter;
    const matchesSearch = connection.sharedInterests.some(interest => 
      interest.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Your Founder Network
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Connect, collaborate, and build meaningful relationships with fellow founders
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by interests, company, or skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div className="flex space-x-2">
            {['all', 'connected', 'accepted', 'pending'].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status as MatchStatus | 'all')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === status
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Connections Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredConnections.map((connection) => {
          const StatusIcon = getStatusIcon(connection.status);
          
          return (
            <div
              key={connection.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {connection.matchId.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        Founder {connection.matchId}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {connection.compatibilityScore}% compatibility
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 ${getStatusColor(connection.status)}`}>
                      <StatusIcon className="w-3 h-3" />
                      <span>{connection.status}</span>
                    </div>
                  </div>
                </div>

                {connection.introductionMessage && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                    "{connection.introductionMessage}"
                  </p>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2 flex items-center">
                    <Star className="w-4 h-4 mr-2" />
                    Shared Interests
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {connection.sharedInterests.map((interest, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                {connection.mutualConnections.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2 flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Mutual Connections
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {connection.mutualConnections.join(', ')}
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>Message</span>
                  </button>
                  <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors">
                    <Video className="w-4 h-4" />
                  </button>
                  <button className="px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors">
                    <Calendar className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredConnections.length === 0 && (
        <div className="text-center py-20">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
            <Users className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            {filter === 'all' ? 'No connections yet' : `No ${filter} connections`}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Start discovering amazing founders and building your network.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200">
            Start Discovering
          </button>
        </div>
      )}
    </div>
  );
};

export default Connections;
