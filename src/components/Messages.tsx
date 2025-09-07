import React, { useState } from 'react';
import { 
  MessageCircle, 
  Send, 
  Phone, 
  Video, 
  Mic, 
  Smile, 
  Search,
  Clock,
  CheckCircle,
  CheckCircle2,
  Plus,
  Paperclip,
  Star,
  Archive,
  MoreVertical,
  MapPin,
  Users
} from 'lucide-react';

const Messages: React.FC = () => {
  const [selectedConversation, setSelectedConversation] = useState<any>(null);
  const [messageText, setMessageText] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all'); // all, unread, starred, archived

  const conversations = [
    {
      id: 1,
      user: {
        name: 'Sarah Johnson',
        title: 'CTO & Co-Founder',
        company: 'HealthAI',
        location: 'Boston, MA',
        avatar: 'SJ',
        verified: true,
        online: true,
        mutualConnections: 12,
        sharedInterests: ['AI/ML', 'Healthcare', 'Scaling'],
        lastActive: 'Active now'
      },
      lastMessage: 'That sounds amazing! I\'d love to discuss this further.',
      lastMessageTime: '2 min ago',
      unreadCount: 2,
      isStarred: false,
      isArchived: false,
      messages: [
        {
          id: 1,
          text: 'Hi Alex! I saw your pitch and I\'m really interested in exploring this opportunity.',
          sender: 'other',
          timestamp: '10:30 AM',
          status: 'delivered',
          type: 'text'
        },
        {
          id: 2,
          text: 'That\'s great to hear! What aspects of the collaboration interest you most?',
          sender: 'me',
          timestamp: '10:32 AM',
          status: 'read',
          type: 'text'
        },
        {
          id: 3,
          text: 'I\'m particularly excited about the AI integration possibilities and your team\'s expertise in scaling products.',
          sender: 'other',
          timestamp: '10:35 AM',
          status: 'delivered',
          type: 'text'
        },
        {
          id: 4,
          text: 'That sounds amazing! I\'d love to discuss this further.',
          sender: 'other',
          timestamp: '2 min ago',
          status: 'delivered',
          type: 'text'
        }
      ]
    },
    {
      id: 2,
      user: {
        name: 'Mike Rodriguez',
        title: 'CEO & Founder',
        company: 'EcoTech',
        location: 'Austin, TX',
        avatar: 'MR',
        verified: true,
        online: false,
        mutualConnections: 8,
        sharedInterests: ['Sustainability', 'Climate Tech', 'Innovation'],
        lastActive: '2 hours ago'
      },
      lastMessage: 'Let\'s schedule a call for next week.',
      lastMessageTime: '1 hour ago',
      unreadCount: 0,
      isStarred: true,
      isArchived: false,
      messages: [
        {
          id: 1,
          text: 'Hey Mike! Thanks for your interest in the sustainability partnership.',
          sender: 'me',
          timestamp: '9:15 AM',
          status: 'read',
          type: 'text'
        },
        {
          id: 2,
          text: 'Absolutely! I think there\'s huge potential here. Let\'s schedule a call for next week.',
          sender: 'other',
          timestamp: '1 hour ago',
          status: 'read',
          type: 'text'
        }
      ]
    },
    {
      id: 3,
      user: {
        name: 'Emily Chen',
        title: 'VP of Product',
        company: 'DataFlow Inc',
        location: 'Seattle, WA',
        avatar: 'EC',
        verified: false,
        online: true,
        mutualConnections: 5,
        sharedInterests: ['Product Strategy', 'Data Analytics', 'Scaling'],
        lastActive: 'Active now'
      },
      lastMessage: 'I\'ll send you the deck tomorrow.',
      lastMessageTime: '3 hours ago',
      unreadCount: 1,
      isStarred: false,
      isArchived: false,
      messages: [
        {
          id: 1,
          text: 'Hi Emily! I\'d love to learn more about DataFlow Inc.',
          sender: 'me',
          timestamp: '8:00 AM',
          status: 'read',
          type: 'text'
        },
        {
          id: 2,
          text: 'Sure! I\'ll send you the deck tomorrow.',
          sender: 'other',
          timestamp: '3 hours ago',
          status: 'delivered',
          type: 'text'
        }
      ]
    },
    {
      id: 4,
      user: {
        name: 'David Kim',
        title: 'Founder & CEO',
        company: 'FinTech Solutions',
        location: 'San Francisco, CA',
        avatar: 'DK',
        verified: true,
        online: false,
        mutualConnections: 15,
        sharedInterests: ['FinTech', 'Blockchain', 'Enterprise'],
        lastActive: '1 day ago'
      },
      lastMessage: 'The Series A round is looking very promising!',
      lastMessageTime: '1 day ago',
      unreadCount: 0,
      isStarred: false,
      isArchived: false,
      messages: [
        {
          id: 1,
          text: 'Hi David! Congratulations on the Series A progress.',
          sender: 'me',
          timestamp: 'Yesterday',
          status: 'read',
          type: 'text'
        },
        {
          id: 2,
          text: 'The Series A round is looking very promising!',
          sender: 'other',
          timestamp: '1 day ago',
          status: 'read',
          type: 'text'
        }
      ]
    },
    {
      id: 5,
      user: {
        name: 'Lisa Wang',
        title: 'Co-Founder & CTO',
        company: 'EdTech Innovations',
        location: 'New York, NY',
        avatar: 'LW',
        verified: true,
        online: true,
        mutualConnections: 7,
        sharedInterests: ['EdTech', 'AI/ML', 'Education'],
        lastActive: 'Active now'
      },
      lastMessage: 'The AI-powered learning platform is gaining traction!',
      lastMessageTime: '4 hours ago',
      unreadCount: 3,
      isStarred: false,
      isArchived: false,
      messages: [
        {
          id: 1,
          text: 'Hi Lisa! How\'s the EdTech platform coming along?',
          sender: 'me',
          timestamp: '5 hours ago',
          status: 'read',
          type: 'text'
        },
        {
          id: 2,
          text: 'The AI-powered learning platform is gaining traction!',
          sender: 'other',
          timestamp: '4 hours ago',
          status: 'delivered',
          type: 'text'
        }
      ]
    },
    {
      id: 6,
      user: {
        name: 'James Thompson',
        title: 'Founder',
        company: 'GreenTech Ventures',
        location: 'Portland, OR',
        avatar: 'JT',
        verified: false,
        online: false,
        mutualConnections: 3,
        sharedInterests: ['Climate Tech', 'Sustainability', 'Innovation'],
        lastActive: '3 days ago'
      },
      lastMessage: 'The carbon capture prototype is ready for testing.',
      lastMessageTime: '3 days ago',
      unreadCount: 0,
      isStarred: false,
      isArchived: true,
      messages: [
        {
          id: 1,
          text: 'Hi James! Excited about the carbon capture technology.',
          sender: 'me',
          timestamp: '3 days ago',
          status: 'read',
          type: 'text'
        },
        {
          id: 2,
          text: 'The carbon capture prototype is ready for testing.',
          sender: 'other',
          timestamp: '3 days ago',
          status: 'read',
          type: 'text'
        }
      ]
    }
  ];

  const filteredConversations = conversations.filter(conv => {
    const matchesSearch = conv.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         conv.lastMessage.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         conv.user.company.toLowerCase().includes(searchQuery.toLowerCase());
    
    switch (activeFilter) {
      case 'unread':
        return matchesSearch && conv.unreadCount > 0;
      case 'starred':
        return matchesSearch && conv.isStarred;
      case 'archived':
        return matchesSearch && conv.isArchived;
      default:
        return matchesSearch && !conv.isArchived;
    }
  });

  const handleSendMessage = () => {
    if (!messageText.trim() || !selectedConversation) return;
    
    const newMessage = {
      id: Date.now(),
      text: messageText,
      sender: 'me',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      status: 'sending'
    };
    
    // Add message to conversation
    selectedConversation.messages.push(newMessage);
    setMessageText('');
  };

  const handleVoiceMessage = () => {
    setIsRecording(!isRecording);
    // Simulate recording
    if (!isRecording) {
      setTimeout(() => {
        setIsRecording(false);
        // Add voice message to conversation
      }, 3000);
    }
  };

  const handleVideoCall = () => {
    console.log('Starting video call with', selectedConversation?.user.name);
  };

  const handleVoiceCall = () => {
    console.log('Starting voice call with', selectedConversation?.user.name);
  };

  const getMessageStatusIcon = (status: string) => {
    switch (status) {
      case 'sending':
        return <Clock className="w-4 h-4 text-gray-400" />;
      case 'delivered':
        return <CheckCircle className="w-4 h-4 text-gray-400" />;
      case 'read':
        return <CheckCircle2 className="w-4 h-4 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {/* Ultra-Premium Header */}
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/30 p-8 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  Messages
                </h1>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  {conversations.length} conversations • {conversations.reduce((acc, conv) => acc + conv.unreadCount, 0)} unread
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => console.log('New message modal')}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <Plus className="w-5 h-5" />
                <span>New Message</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Premium Conversations Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/30 overflow-hidden">
              {/* Premium Search and Filter */}
              <div className="p-6 border-b border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20">
                <div className="relative mb-4">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  />
                </div>
                
                {/* Premium Filter Tabs */}
                <div className="flex space-x-1 bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm rounded-xl p-1">
                  {[
                    { id: 'all', label: 'All', count: conversations.filter(c => !c.isArchived).length },
                    { id: 'unread', label: 'Unread', count: conversations.filter(c => c.unreadCount > 0).length },
                    { id: 'starred', label: 'Starred', count: conversations.filter(c => c.isStarred).length },
                    { id: 'archived', label: 'Archived', count: conversations.filter(c => c.isArchived).length }
                  ].map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setActiveFilter(filter.id)}
                      className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        activeFilter === filter.id
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-600/80'
                      }`}
                    >
                      {filter.label} ({filter.count})
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Premium Conversations List */}
              <div className="max-h-[600px] overflow-y-auto">
                {filteredConversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation)}
                    className={`p-4 border-b border-gray-100/50 dark:border-gray-700/50 cursor-pointer hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300 group ${
                      selectedConversation?.id === conversation.id 
                        ? 'bg-gradient-to-r from-blue-100/80 to-purple-100/80 dark:from-blue-900/30 dark:to-purple-900/30 border-l-4 border-blue-500' 
                        : ''
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="relative">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-105 transition-transform duration-300">
                          {conversation.user.avatar}
                        </div>
                        {conversation.user.online && (
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-3 border-white dark:border-gray-800 rounded-full shadow-lg">
                            <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
                          </div>
                        )}
                        {conversation.isStarred && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                            <Star className="w-3 h-3 text-white fill-current" />
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-bold text-gray-800 dark:text-white truncate text-lg">
                            {conversation.user.name}
                          </h3>
                          {conversation.user.verified && (
                            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                              <CheckCircle className="w-3 h-3 text-white" />
                            </div>
                          )}
                          {conversation.unreadCount > 0 && (
                            <span className="bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center font-bold shadow-lg">
                              {conversation.unreadCount}
                            </span>
                          )}
                        </div>
                        
                        <p className="text-sm text-gray-600 dark:text-gray-400 truncate mb-2 font-medium">
                          {conversation.user.title} • {conversation.user.company}
                        </p>
                        
                        <p className="text-sm text-gray-700 dark:text-gray-300 truncate mb-2">
                          {conversation.lastMessage}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                            {conversation.lastMessageTime}
                          </span>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {conversation.user.mutualConnections} mutual
                            </span>
                            <div className="flex space-x-1">
                              {conversation.user.sharedInterests.slice(0, 2).map((interest: string, index: number) => (
                                <span
                                  key={index}
                                  className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-lg text-xs font-medium"
                                >
                                  {interest}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Premium Chat Area */}
          <div className="lg:col-span-3">
            {selectedConversation ? (
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/30 h-[700px] flex flex-col overflow-hidden">
                {/* Premium Chat Header */}
                <div className="p-6 border-b border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-pink-50/50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-2xl">
                          {selectedConversation.user.avatar}
                        </div>
                        {selectedConversation.user.online && (
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-3 border-white dark:border-gray-800 rounded-full shadow-lg">
                            <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
                          </div>
                        )}
                      </div>
                      
                      <div>
                        <div className="flex items-center space-x-3 mb-1">
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                            {selectedConversation.user.name}
                          </h3>
                          {selectedConversation.user.verified && (
                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                              <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                          )}
                          <div className="flex items-center space-x-2">
                            <button
                              onClick={() => {
                                // Toggle star
                                const updatedConv = { ...selectedConversation, isStarred: !selectedConversation.isStarred };
                                setSelectedConversation(updatedConv);
                              }}
                              className={`p-2 rounded-xl transition-all duration-300 ${
                                selectedConversation.isStarred
                                  ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400'
                                  : 'bg-gray-100 text-gray-400 hover:bg-yellow-100 hover:text-yellow-600 dark:bg-gray-700 dark:hover:bg-yellow-900/30'
                              }`}
                            >
                              <Star className={`w-5 h-5 ${selectedConversation.isStarred ? 'fill-current' : ''}`} />
                            </button>
                            <button className="p-2 rounded-xl bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300">
                              <Archive className="w-5 h-5" />
                            </button>
                          </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">
                          {selectedConversation.user.title} • {selectedConversation.user.company}
                        </p>
                        <div className="flex items-center space-x-4 mt-2">
                          <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                            <Users className="w-4 h-4" />
                            <span>{selectedConversation.user.mutualConnections} mutual connections</span>
                          </div>
                          <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span>{selectedConversation.user.location}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-sm text-gray-500 dark:text-gray-400">
                            <Clock className="w-4 h-4" />
                            <span>{selectedConversation.user.lastActive}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={handleVoiceCall}
                        className="p-3 rounded-2xl bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200/50 dark:border-gray-600/50"
                      >
                        <Phone className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                      </button>
                      
                      <button
                        onClick={handleVideoCall}
                        className="p-3 rounded-2xl bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200/50 dark:border-gray-600/50"
                      >
                        <Video className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                      </button>
                      
                      <button className="p-3 rounded-2xl bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200/50 dark:border-gray-600/50">
                        <MoreVertical className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Premium Messages Area */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-gray-50/50 to-white/50 dark:from-gray-800/50 dark:to-gray-900/50">
                  {selectedConversation.messages.map((message: any) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'} group`}
                    >
                      <div className={`max-w-lg px-6 py-4 rounded-3xl shadow-lg transition-all duration-300 group-hover:shadow-xl ${
                        message.sender === 'me'
                          ? 'bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 text-white ml-12'
                          : 'bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm text-gray-800 dark:text-gray-200 mr-12 border border-gray-200/50 dark:border-gray-600/50'
                      }`}>
                        <p className="text-base leading-relaxed mb-2">{message.text}</p>
                        <div className="flex items-center justify-between">
                          <span className={`text-sm ${
                            message.sender === 'me' ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'
                          }`}>
                            {message.timestamp}
                          </span>
                          {message.sender === 'me' && (
                            <div className="ml-3 flex items-center space-x-1">
                              {getMessageStatusIcon(message.status)}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Premium Message Input */}
                <div className="p-6 border-t border-gray-200/50 dark:border-gray-700/50 bg-gradient-to-r from-blue-50/30 via-purple-50/30 to-pink-50/30 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10">
                  <div className="flex items-center space-x-4">
                    <button className="p-3 rounded-2xl bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200/50 dark:border-gray-600/50">
                      <Plus className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                    </button>
                    
                    <button className="p-3 rounded-2xl bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200/50 dark:border-gray-600/50">
                      <Paperclip className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                    </button>
                    
                    <div className="flex-1 relative">
                      <input
                        type="text"
                        value={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Type a message..."
                        className="w-full px-6 py-4 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-lg"
                      />
                    </div>
                    
                    <button
                      onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                      className="p-3 rounded-2xl bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200/50 dark:border-gray-600/50"
                    >
                      <Smile className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                    </button>
                    
                    <button
                      onClick={handleVoiceMessage}
                      className={`p-3 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl border ${
                        isRecording
                          ? 'bg-red-500 text-white border-red-400'
                          : 'bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-gray-600 border-gray-200/50 dark:border-gray-600/50'
                      }`}
                    >
                      <Mic className="w-6 h-6" />
                    </button>
                    
                    <button
                      onClick={handleSendMessage}
                      disabled={!messageText.trim()}
                      className="p-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white transition-all duration-300 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
                    >
                      <Send className="w-6 h-6" />
                    </button>
                  </div>
                  
                  {isRecording && (
                    <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-2xl border border-red-200/50 dark:border-red-800/50">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-red-700 dark:text-red-300 font-medium">Recording voice message...</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/30 h-[700px] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                    <MessageCircle className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    Select a Conversation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                    Choose a conversation from the list to start messaging
                  </p>
                  <button
                    onClick={() => console.log('Start new conversation')}
                    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-3 mx-auto"
                  >
                    <Plus className="w-6 h-6" />
                    <span>Start New Conversation</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
