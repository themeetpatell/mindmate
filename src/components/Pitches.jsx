import React, { useState } from 'react';
import { 
  Send, 
  MessageCircle, 
  Search, 
  CheckCircle, 
  MoreVertical, 
  Eye, 
  Check, 
  X,
  Clock,
  User
} from 'lucide-react';

const Pitches = () => {
  const [activeTab, setActiveTab] = useState('pitches');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterBy, setFilterBy] = useState('all');
  const [selectedPitch, setSelectedPitch] = useState(null);
  const [showPitchModal, setShowPitchModal] = useState(false);
  const [showResponseModal, setShowResponseModal] = useState(false);

  const pitches = [
    {
      id: 1,
      title: "AI-Powered Dating Revolution",
      description: "Revolutionary AI matching algorithm that analyzes 50+ compatibility factors. Looking for a technical co-founder to help scale this innovative platform.",
      type: "proposal",
      status: "pending", // pending, accepted, rejected, responded
      sender: "Sarah Johnson",
      senderAvatar: "SJ",
      sentAt: "2 hours ago",
      category: "Technology",
      budget: "$50K - $100K",
      timeline: "3-6 months",
      isVerified: true,
      isOnline: true,
      priority: "high",
      proposalDetails: {
        problem: "Current dating apps use basic algorithms that don't consider deep compatibility factors",
        solution: "AI-powered matching that analyzes 50+ psychological and behavioral factors",
        market: "Dating app market worth $8.2B globally",
        ask: "Technical co-founder with AI/ML expertise",
        equity: "15-25% equity stake"
      }
    },
    {
      id: 2,
      title: "Sustainable Business Model",
      description: "How we're building a sustainable future through innovative business practices. Seeking investment for expansion.",
      type: "proposal",
      status: "accepted",
      sender: "Mike Rodriguez",
      senderAvatar: "MR",
      sentAt: "1 day ago",
      category: "Sustainability",
      budget: "$100K - $250K",
      timeline: "6-12 months",
      isVerified: false,
      isOnline: false,
      priority: "medium",
      proposalDetails: {
        problem: "Traditional business models don't prioritize environmental sustainability",
        solution: "Circular economy business model with zero waste",
        market: "Sustainable business market growing 20% annually",
        ask: "Investment for market expansion",
        equity: "10-15% equity for $150K investment"
      }
    },
    {
      id: 3,
      title: "Creative Collaboration Proposal",
      description: "Let's collaborate on an exciting new project that combines art and technology. Looking for creative partners.",
      type: "proposal",
      status: "rejected",
      sender: "Emma Wilson",
      senderAvatar: "EW",
      sentAt: "3 days ago",
      category: "Creative",
      budget: "$10K - $25K",
      timeline: "2-4 months",
      isVerified: true,
      isOnline: true,
      priority: "low",
      proposalDetails: {
        problem: "Art and technology are often siloed, missing opportunities for innovation",
        solution: "Interactive art installations using AR/VR technology",
        market: "Digital art market worth $3.5B",
        ask: "Creative collaboration and shared resources",
        equity: "Equal partnership"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              Proposals
            </h1>
            <p className="text-gray-600 text-lg">
              Review and respond to business proposals and collaboration opportunities
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-md mb-8">
          {[
            { id: 'pitches', label: 'Proposals', icon: Send },
            { id: 'conversations', label: 'Conversations', icon: MessageCircle }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 rounded-md transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 space-y-4 sm:space-y-0">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search proposals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <select
              value={filterBy}
              onChange={(e) => setFilterBy(e.target.value)}
              className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="all">All Proposals</option>
              <option value="pending">Pending</option>
              <option value="accepted">Accepted</option>
              <option value="rejected">Rejected</option>
              <option value="responded">Responded</option>
            </select>
          </div>
        </div>

        {/* Proposals Grid */}
        {activeTab === 'pitches' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {pitches.map((pitch) => (
              <div key={pitch.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                        {pitch.senderAvatar}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{pitch.sender}</h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-500">{pitch.sentAt}</span>
                          {pitch.isVerified && <CheckCircle className="w-4 h-4 text-blue-500" />}
                          {pitch.isOnline && <div className="w-2 h-2 bg-green-500 rounded-full"></div>}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        pitch.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        pitch.status === 'accepted' ? 'bg-green-100 text-green-800' :
                        pitch.status === 'rejected' ? 'bg-red-100 text-red-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {pitch.status}
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="font-bold text-lg text-gray-900 mb-2">{pitch.title}</h4>
                  <p className="text-gray-600 mb-4 line-clamp-3">{pitch.description}</p>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <span className="font-medium">Category:</span>
                      <span>{pitch.category}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="font-medium">Budget:</span>
                      <span>{pitch.budget}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">
                      {pitch.timeline}
                    </span>
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      pitch.priority === 'high' ? 'bg-red-100 text-red-800' :
                      pitch.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {pitch.priority} priority
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <button 
                      onClick={() => {
                        setSelectedPitch(pitch);
                        setShowPitchModal(true);
                      }}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center space-x-2"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View</span>
                    </button>
                    
                    {pitch.status === 'pending' && (
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => {
                            setSelectedPitch(pitch);
                            setShowResponseModal(true);
                          }}
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
                        >
                          <Check className="w-4 h-4" />
                          <span>Accept</span>
                        </button>
                        <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2">
                          <X className="w-4 h-4" />
                          <span>Reject</span>
                        </button>
                      </div>
                    )}
                    
                    {pitch.status === 'accepted' && (
                      <div className="flex items-center space-x-2">
                        <span className="px-4 py-2 bg-green-100 text-green-800 rounded-lg flex items-center space-x-2">
                          <Check className="w-4 h-4" />
                          <span>Accepted</span>
                        </span>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                          Start Conversation
                        </button>
                      </div>
                    )}
                    
                    {pitch.status === 'rejected' && (
                      <span className="px-4 py-2 bg-red-100 text-red-800 rounded-lg flex items-center space-x-2">
                        <X className="w-4 h-4" />
                        <span>Rejected</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Conversations tab */}
        {activeTab === 'conversations' && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Accepted Proposals - Conversations</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                  MR
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Mike Rodriguez - Sustainable Business Model</h4>
                  <p className="text-gray-600">Great! Let's discuss the investment terms and next steps...</p>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Accepted</span>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Continue Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View Proposal Modal */}
        {showPitchModal && selectedPitch && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">Proposal Details</h3>
                  <button 
                    onClick={() => setShowPitchModal(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {selectedPitch.senderAvatar}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900">{selectedPitch.sender}</h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-500">{selectedPitch.sentAt}</span>
                        {selectedPitch.isVerified && <CheckCircle className="w-5 h-5 text-blue-500" />}
                        {selectedPitch.isOnline && <div className="w-3 h-3 bg-green-500 rounded-full"></div>}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-2xl font-bold text-gray-900 mb-4">{selectedPitch.title}</h5>
                    <p className="text-gray-600 text-lg leading-relaxed">{selectedPitch.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h6 className="font-semibold text-gray-900 mb-2">Problem</h6>
                      <p className="text-gray-600">{selectedPitch.proposalDetails.problem}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h6 className="font-semibold text-gray-900 mb-2">Solution</h6>
                      <p className="text-gray-600">{selectedPitch.proposalDetails.solution}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h6 className="font-semibold text-gray-900 mb-2">Market</h6>
                      <p className="text-gray-600">{selectedPitch.proposalDetails.market}</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h6 className="font-semibold text-gray-900 mb-2">Ask</h6>
                      <p className="text-gray-600">{selectedPitch.proposalDetails.ask}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                    <div>
                      <span className="font-semibold text-gray-900">Budget: </span>
                      <span className="text-gray-600">{selectedPitch.budget}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Timeline: </span>
                      <span className="text-gray-600">{selectedPitch.timeline}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Equity: </span>
                      <span className="text-gray-600">{selectedPitch.proposalDetails.equity}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Response Modal */}
        {showResponseModal && selectedPitch && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-lg w-full">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Respond to Proposal</h3>
                  <button 
                    onClick={() => setShowResponseModal(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Response
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Write your response to the proposal..."
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Proposed Terms (Optional)
                    </label>
                    <textarea
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Any counter-proposals or modified terms..."
                    />
                  </div>
                  
                  <div className="flex items-center space-x-4 pt-4">
                    <button 
                      onClick={() => setShowResponseModal(false)}
                      className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={() => {
                        // Handle accept and respond
                        setShowResponseModal(false);
                        // Update proposal status to accepted
                      }}
                      className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Accept & Respond
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pitches;
