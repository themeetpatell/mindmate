import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Star, 
  Clock, 
  CheckCircle,
  Reply,
  Archive,
  Flag,
  Search,
  ThumbsUp,
  ThumbsDown,
  X,
  Filter,
  TrendingUp,
  MessageCircle,
  Sparkles,
  Send,
  Bell,
  MapPin,
  Building2,
  Users,
  ChevronDown
} from 'lucide-react';
import { pitchesApi } from '../services/api';

const Pitches: React.FC = () => {
  
  const [pitches, setPitches] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPitch, setSelectedPitch] = useState<any>(null);
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [replyMessage, setReplyMessage] = useState('');
  const [filter, setFilter] = useState('all'); // all, unread, replied, archived
  const [searchQuery, setSearchQuery] = useState('');

  // Load pitches from API
  useEffect(() => {
    const loadPitches = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await pitchesApi.getPitches();
        setPitches(response.pitches);
        setLoading(false);
      } catch (err: any) {
        console.error('Failed to load pitches:', err);
        setError(err.message || 'Failed to load pitches');
        
        // Fallback to mock data for demo
        const mockPitches = [
    {
      id: 1,
      from: {
        name: 'Sarah Johnson',
        title: 'CTO & Co-Founder',
        company: 'HealthAI',
        location: 'Boston, MA',
        avatar: 'SJ',
        verified: true
      },
      subject: 'Potential Co-Founder Opportunity',
      message: 'Hi! I saw your profile and I think we\'d make an incredible team. I\'m building HealthAI, a platform that uses AI to revolutionize healthcare diagnostics. Your experience in scaling teams and your passion for impact-driven products really resonates with me. Would love to discuss how we could potentially work together!',
      receivedAt: '2 hours ago',
      read: false,
      status: 'new', // new, replied, archived
      compatibility: 92,
      sharedInterests: ['AI/ML', 'Healthcare', 'Impact'],
      mutualConnections: 3
    },
    {
      id: 2,
      from: {
        name: 'Mike Rodriguez',
        title: 'CEO & Founder',
        company: 'EcoTech',
        location: 'Austin, TX',
        avatar: 'MR',
        verified: true
      },
      subject: 'Sustainability-Focused Partnership',
      message: 'Hey Alex! Your work at TechFlow Solutions caught my attention. I\'m building EcoTech and I think there\'s a huge opportunity for us to collaborate. Your technical background combined with my focus on sustainability could create something truly impactful. Let\'s grab a virtual coffee and explore this!',
      receivedAt: '1 day ago',
      read: true,
      status: 'replied',
      compatibility: 88,
      sharedInterests: ['Sustainability', 'Innovation', 'Impact'],
      mutualConnections: 1
    },
    {
      id: 3,
      from: {
        name: 'Emily Chen',
        title: 'VP of Product',
        company: 'DataFlow Inc',
        location: 'Seattle, WA',
        avatar: 'EC',
        verified: false
      },
      subject: 'Product Strategy Collaboration',
      message: 'Hello! I\'ve been following your journey and I\'m impressed by your product strategy skills. I\'m looking for a co-founder who can help me scale DataFlow Inc to the next level. Your experience in building and scaling products would be invaluable. Would love to discuss this opportunity!',
      receivedAt: '3 days ago',
      read: true,
      status: 'archived',
      compatibility: 85,
      sharedInterests: ['Product Strategy', 'Scaling', 'Data'],
      mutualConnections: 0
    },
    {
      id: 4,
      from: {
        name: 'David Kim',
        title: 'Founder & CEO',
        company: 'FinTech Solutions',
        location: 'San Francisco, CA',
        avatar: 'DK',
        verified: true
      },
      subject: 'Series A Funding Opportunity',
      message: 'Hi there! I\'m David, founder of FinTech Solutions. We\'re about to close our Series A and I\'m looking for a technical co-founder to join our journey. Your background in fintech and your track record of building scalable systems is exactly what we need. We\'re already generating $2M ARR and have 50+ enterprise clients. Would love to chat!',
      receivedAt: '5 hours ago',
      read: false,
      status: 'new',
      compatibility: 94,
      sharedInterests: ['Fintech', 'Scaling', 'Enterprise'],
      mutualConnections: 5
    },
    {
      id: 5,
      from: {
        name: 'Lisa Wang',
        title: 'Co-Founder & CTO',
        company: 'EdTech Innovations',
        location: 'New York, NY',
        avatar: 'LW',
        verified: true
      },
      subject: 'EdTech Revolution Partnership',
      message: 'Hello! I\'m Lisa from EdTech Innovations. We\'re revolutionizing online education with AI-powered personalized learning. I\'ve been following your work and I think your expertise in AI/ML would be perfect for our mission. We\'re backed by top VCs and have partnerships with major universities. Let\'s discuss how we can change education together!',
      receivedAt: '1 day ago',
      read: true,
      status: 'replied',
      compatibility: 89,
      sharedInterests: ['AI/ML', 'Education', 'Innovation'],
      mutualConnections: 2
    },
    {
      id: 6,
      from: {
        name: 'James Thompson',
        title: 'Founder',
        company: 'GreenTech Ventures',
        location: 'Portland, OR',
        avatar: 'JT',
        verified: false
      },
      subject: 'Climate Tech Co-Founder Search',
      message: 'Hey! I\'m James, building the next generation of climate technology solutions. We\'re developing carbon capture technology that could be a game-changer. I need a technical co-founder who shares my passion for saving the planet. We have prototype funding and are ready to scale. Your engineering background would be invaluable!',
      receivedAt: '2 days ago',
      read: false,
      status: 'new',
      compatibility: 87,
      sharedInterests: ['Climate Tech', 'Sustainability', 'Innovation'],
      mutualConnections: 1
    },
    {
      id: 7,
      from: {
        name: 'Maria Garcia',
        title: 'CEO & Founder',
        company: 'Social Impact Labs',
        location: 'Miami, FL',
        avatar: 'MG',
        verified: true
      },
      subject: 'Social Impact Technology Partnership',
      message: 'Hi! I\'m Maria, founder of Social Impact Labs. We\'re building technology solutions to address social inequality and create positive change. I\'ve been impressed by your commitment to impact-driven products. We\'re looking for a technical co-founder to help us scale our platform that connects nonprofits with resources. Would love to explore this together!',
      receivedAt: '3 days ago',
      read: true,
      status: 'archived',
      compatibility: 91,
      sharedInterests: ['Social Impact', 'Nonprofit', 'Technology'],
      mutualConnections: 4
    },
    {
      id: 8,
      from: {
        name: 'Alex Chen',
        title: 'Co-Founder & CTO',
        company: 'Blockchain Innovations',
        location: 'Singapore',
        avatar: 'AC',
        verified: true
      },
      subject: 'Web3 Infrastructure Opportunity',
      message: 'Hello! I\'m Alex from Blockchain Innovations. We\'re building the next generation of Web3 infrastructure that will power the decentralized future. Your experience with distributed systems and your forward-thinking approach to technology makes you an ideal co-founder. We\'re already working with major DeFi protocols. Let\'s build the future together!',
      receivedAt: '4 days ago',
      read: true,
      status: 'replied',
      compatibility: 86,
      sharedInterests: ['Blockchain', 'Web3', 'DeFi'],
      mutualConnections: 3
    },
    {
      id: 9,
      from: {
        name: 'Rachel Green',
        title: 'Founder & CEO',
        company: 'WellnessTech',
        location: 'Los Angeles, CA',
        avatar: 'RG',
        verified: false
      },
      subject: 'Mental Health Tech Co-Founder',
      message: 'Hi there! I\'m Rachel, building WellnessTech - a platform that uses AI to provide personalized mental health support. The mental health crisis is real, and I believe technology can help. I need a technical co-founder who understands both the technology and the human side of this challenge. We have early traction and are ready to scale. Let\'s make mental health accessible to everyone!',
      receivedAt: '5 days ago',
      read: false,
      status: 'new',
      compatibility: 93,
      sharedInterests: ['Mental Health', 'AI/ML', 'Wellness'],
      mutualConnections: 2
    },
    {
      id: 10,
      from: {
        name: 'Tom Wilson',
        title: 'Co-Founder',
        company: 'AgriTech Solutions',
        location: 'Denver, CO',
        avatar: 'TW',
        verified: true
      },
      subject: 'Agricultural Technology Partnership',
      message: 'Hello! I\'m Tom from AgriTech Solutions. We\'re using IoT and AI to revolutionize farming and help feed the world sustainably. Your background in IoT and data analytics would be perfect for our mission. We\'re working with farmers across the Midwest and have proven results. Looking for a technical co-founder to help us scale globally. Let\'s talk!',
      receivedAt: '1 week ago',
      read: true,
      status: 'archived',
      compatibility: 84,
      sharedInterests: ['IoT', 'Agriculture', 'Sustainability'],
      mutualConnections: 1
    }
  ];
        
        setPitches(mockPitches);
        setLoading(false);
      }
    };

    loadPitches();
  }, []);

  const filteredPitches = pitches.filter(pitch => {
    const matchesFilter = filter === 'all' || pitch.status === filter;
    const matchesSearch = searchQuery === '' || 
      pitch.from.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pitch.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pitch.message.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleReply = (pitch: any) => {
    setSelectedPitch(pitch);
    setShowReplyModal(true);
  };

  const handleSendReply = async () => {
    if (!replyMessage.trim() || !selectedPitch) return;
    
    try {
      await pitchesApi.replyToPitch(selectedPitch.id, replyMessage);
      
      // Update local state
      setPitches(prev => prev.map(pitch => 
        pitch.id === selectedPitch.id 
          ? { ...pitch, status: 'replied' }
          : pitch
      ));
      
      setShowReplyModal(false);
      setReplyMessage('');
      setSelectedPitch(null);
      
      alert('Reply sent successfully!');
    } catch (error: any) {
      console.error('Failed to send reply:', error);
      alert('Failed to send reply. Please try again.');
    }
  };

  const handleArchive = (pitchId: number) => {
    console.log('Archiving pitch:', pitchId);
  };

  const handleFlag = (pitchId: number) => {
    console.log('Flagging pitch:', pitchId);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mx-auto mb-6 animate-pulse flex items-center justify-center">
            <Mail className="w-10 h-10 text-white animate-pulse" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Loading your pitches...
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Fetching your latest messages and connections
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-red-500 rounded-full mx-auto mb-6 flex items-center justify-center">
            <X className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Error Loading Pitches
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {error}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

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
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-2">
                    Pitches Inbox
                  </h1>
                  <p className="text-gray-600 dark:text-gray-300 text-lg">
                    Connect with amazing founders and explore opportunities
                  </p>
                </div>
              </div>
              
              {/* Premium Search and Filter */}
              <div className="flex items-center space-x-4">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-600/50">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search pitches, founders, companies..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12 pr-6 py-4 bg-transparent text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none rounded-2xl w-80"
                    />
                  </div>
                </div>
                
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-600/50">
                    <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={filter}
                      onChange={(e) => setFilter(e.target.value)}
                      className="pl-12 pr-8 py-4 bg-transparent text-gray-800 dark:text-white focus:outline-none rounded-2xl appearance-none cursor-pointer"
                    >
                      <option value="all">All Pitches</option>
                      <option value="new">New</option>
                      <option value="replied">Replied</option>
                      <option value="archived">Archived</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Stats Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-700/50">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800 dark:text-white">
                      {filteredPitches.length}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Total Pitches</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl p-6 border border-green-200/50 dark:border-green-700/50">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Bell className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800 dark:text-white">
                      {pitches.filter(p => !p.read).length}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Unread</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-6 border border-purple-200/50 dark:border-purple-700/50">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Reply className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800 dark:text-white">
                      {pitches.filter(p => p.status === 'replied').length}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Replied</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-2xl p-6 border border-orange-200/50 dark:border-orange-700/50">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800 dark:text-white">
                      {Math.round(pitches.reduce((acc, p) => acc + p.compatibility, 0) / pitches.length)}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Avg Match</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ultra-Premium Pitches List */}
          <div className="lg:col-span-1">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/30 overflow-hidden">
              <div className="p-6 border-b border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white">Received Pitches</h2>
                </div>
              </div>
              
              <div className="max-h-[600px] overflow-y-auto">
                {filteredPitches.map((pitch) => (
                  <div
                    key={pitch.id}
                    onClick={() => setSelectedPitch(pitch)}
                    className={`group relative p-6 border-b border-gray-100/50 dark:border-gray-700/50 cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 dark:hover:from-blue-900/10 dark:hover:to-purple-900/10 ${
                      selectedPitch?.id === pitch.id ? 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-l-4 border-l-blue-500' : ''
                    } ${!pitch.read ? 'bg-gradient-to-r from-green-50/50 to-emerald-50/50 dark:from-green-900/10 dark:to-emerald-900/10' : ''}`}
                  >
                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300 rounded-none"></div>
                    
                    <div className="relative z-10 flex items-start space-x-4">
                      <div className="relative">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {pitch.from.avatar}
                        </div>
                        {!pitch.read && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          </div>
                        )}
                        {pitch.from.verified && (
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center border-2 border-white dark:border-gray-800">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-bold text-gray-800 dark:text-white truncate text-lg">
                            {pitch.from.name}
                          </h3>
                        </div>
                        
                        <p className="text-sm text-gray-600 dark:text-gray-400 truncate mb-2 font-medium">
                          {pitch.subject}
                        </p>
                        
                        <div className="flex items-center space-x-4 mb-3 text-xs text-gray-500 dark:text-gray-400">
                          <span className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{pitch.receivedAt}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Star className="w-3 h-3 text-yellow-500 fill-current" />
                            <span className="font-semibold">{pitch.compatibility}%</span>
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <span className={`px-3 py-1.5 rounded-xl text-xs font-bold shadow-sm ${
                            pitch.status === 'new' ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 dark:from-green-900/30 dark:to-emerald-900/30 dark:text-green-200' :
                            pitch.status === 'replied' ? 'bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 dark:from-blue-900/30 dark:to-indigo-900/30 dark:text-blue-200' :
                            'bg-gradient-to-r from-gray-100 to-slate-100 text-gray-800 dark:from-gray-700 dark:to-slate-700 dark:text-gray-200'
                          }`}>
                            {pitch.status}
                          </span>
                          {pitch.mutualConnections > 0 && (
                            <span className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
                              <Users className="w-3 h-3" />
                              <span>{pitch.mutualConnections}</span>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ultra-Premium Pitch Details */}
          <div className="lg:col-span-2">
            {selectedPitch ? (
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/30 overflow-hidden">
                {/* Premium Header */}
                <div className="relative p-8 border-b border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
                  
                  <div className="relative z-10 flex items-start justify-between">
                    <div className="flex items-start space-x-6">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-3xl flex items-center justify-center text-white font-bold text-2xl shadow-2xl">
                          {selectedPitch.from.avatar}
                        </div>
                        {selectedPitch.from.verified && (
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-lg">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </div>
                      
                      <div>
                        <div className="flex items-center space-x-3 mb-3">
                          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                            {selectedPitch.from.name}
                          </h2>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-400 text-xl font-semibold mb-2">
                          {selectedPitch.from.title}
                        </p>
                        
                        <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 mb-4">
                          <Building2 className="w-4 h-4" />
                          <span className="font-medium">{selectedPitch.from.company}</span>
                          <span>•</span>
                          <MapPin className="w-4 h-4" />
                          <span className="font-medium">{selectedPitch.from.location}</span>
                        </div>
                        
                        <div className="flex items-center space-x-6">
                          <div className="flex items-center space-x-2 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg">
                            <Star className="w-5 h-5 text-yellow-500 fill-current" />
                            <span className="text-lg font-bold text-gray-800 dark:text-white">
                              {selectedPitch.compatibility}% match
                            </span>
                          </div>
                          
                          <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                            <Users className="w-5 h-5" />
                            <span className="font-medium">{selectedPitch.mutualConnections} mutual connections</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => handleReply(selectedPitch)}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        <Reply className="w-5 h-5" />
                        <span>Reply</span>
                      </button>
                      
                      <button
                        onClick={() => handleArchive(selectedPitch.id)}
                        className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 px-4 py-3 rounded-2xl font-semibold hover:bg-white dark:hover:bg-gray-600 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl border border-gray-200/50 dark:border-gray-600/50"
                      >
                        <Archive className="w-5 h-5" />
                      </button>
                      
                      <button
                        onClick={() => handleFlag(selectedPitch.id)}
                        className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 px-4 py-3 rounded-2xl font-semibold hover:bg-white dark:hover:bg-gray-600 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl border border-gray-200/50 dark:border-gray-600/50"
                      >
                        <Flag className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Premium Content */}
                <div className="p-8">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                      {selectedPitch.subject}
                    </h3>
                    <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span className="font-medium">Received {selectedPitch.receivedAt}</span>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-gray-50/80 to-blue-50/80 dark:from-gray-700/50 dark:to-blue-900/20 rounded-3xl p-8 mb-8 border border-gray-200/50 dark:border-gray-600/50">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                      {selectedPitch.message}
                    </p>
                  </div>
                  
                  {/* Enhanced Shared Interests */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center space-x-2">
                      <Sparkles className="w-5 h-5 text-purple-500" />
                      <span>Shared Interests</span>
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedPitch.sharedInterests.map((interest: string, index: number) => (
                        <span
                          key={index}
                          className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-800 dark:text-purple-200 px-4 py-2 rounded-2xl text-sm font-semibold border border-purple-200/50 dark:border-purple-700/50 shadow-sm"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Premium Action Buttons */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105">
                      <ThumbsUp className="w-6 h-6" />
                      <span>Accept Pitch</span>
                    </button>
                    
                    <button className="bg-gradient-to-r from-gray-500 to-slate-600 hover:from-gray-600 hover:to-slate-700 text-white py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105">
                      <ThumbsDown className="w-6 h-6" />
                      <span>Decline</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/30 p-16 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <MessageCircle className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  Select a Pitch
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  Choose a pitch from the list to view details and respond
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Ultra-Premium Reply Modal */}
      {showReplyModal && selectedPitch && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-3xl shadow-3xl max-w-3xl w-full border border-white/20 dark:border-gray-700/30 overflow-hidden">
            {/* Premium Modal Header */}
            <div className="relative p-8 border-b border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
              
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Reply className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      Reply to {selectedPitch.from.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Send a thoughtful response to their pitch
                    </p>
                  </div>
                </div>
                
                <button
                  onClick={() => setShowReplyModal(false)}
                  className="w-10 h-10 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-2xl flex items-center justify-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200/50 dark:border-gray-600/50"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Premium Modal Content */}
            <div className="p-8">
              <div className="mb-6">
                <label className="block text-lg font-semibold text-gray-800 dark:text-white mb-4">
                  Your Reply
                </label>
                <div className="relative">
                  <textarea
                    value={replyMessage}
                    onChange={(e) => setReplyMessage(e.target.value)}
                    placeholder="Write your thoughtful reply here..."
                    className="w-full h-40 p-6 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 rounded-2xl text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-lg leading-relaxed shadow-lg"
                  />
                  <div className="absolute bottom-4 right-4 text-sm text-gray-400 dark:text-gray-500">
                    {replyMessage.length}/500
                  </div>
                </div>
              </div>
              
              {/* Premium Action Buttons */}
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowReplyModal(false)}
                  className="flex-1 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-semibold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200/50 dark:border-gray-600/50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSendReply}
                  disabled={!replyMessage.trim()}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Reply</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pitches;
