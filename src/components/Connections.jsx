import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Users, 
  MessageCircle, 
  Heart, 
  MoreVertical,
  CheckCircle,
  Star,
  MapPin,
  Briefcase,
  Calendar,
  Globe,
  Phone,
  Video,
  Mail,
  UserPlus,
  UserMinus,
  Crown,
  Award,
  Target,
  Zap,
  Clock,
  TrendingUp,
  Eye,
  Edit,
  Trash2,
  Share,
  Bookmark,
  Flag,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  SortAsc,
  SortDesc,
  Grid,
  List,
  Plus,
  X
} from 'lucide-react';
import ProfileModal from './ProfileModal.jsx';

const Connections = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [viewMode, setViewMode] = useState('grid'); // grid or list
  const [sortBy, setSortBy] = useState('recent'); // recent, name, compatibility, mutual
  const [sortOrder, setSortOrder] = useState('desc'); // asc or desc
  const [selectedConnections, setSelectedConnections] = useState([]);
  const [showBulkActions, setShowBulkActions] = useState(false);

  const connections = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'CTO & Co-Founder',
      company: 'HealthAI',
      location: 'Boston, MA',
      avatar: 'SJ',
      compatibility: 92,
      status: 'connected',
      lastActive: '2 hours ago',
      verified: true,
      interests: ['AI/ML', 'Healthcare', 'Music'],
      mutualConnections: 12,
      online: true,
      connectionDate: '2024-01-15',
      notes: 'Met at TechCrunch Disrupt. Great conversation about AI in healthcare.',
      tags: ['AI', 'Healthcare', 'Startup'],
      email: 'sarah@healthai.com',
      phone: '+1 (555) 123-4567',
      linkedin: 'sarah-johnson-healthai',
      twitter: '@sarahj_healthai',
      website: 'healthai.com',
      bio: 'Passionate about using AI to revolutionize healthcare. 10+ years in tech, former Google engineer.',
      skills: ['Machine Learning', 'Python', 'Healthcare Tech', 'Leadership'],
      recentActivity: 'Posted about new AI breakthrough in medical diagnosis',
      lastInteraction: '2024-01-20',
      interactionType: 'message',
      priority: 'high'
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      title: 'CEO & Founder',
      company: 'EcoTech',
      location: 'Austin, TX',
      avatar: 'MR',
      compatibility: 88,
      status: 'pending',
      lastActive: '1 day ago',
      verified: true,
      interests: ['Sustainability', 'Adventure', 'Yoga'],
      mutualConnections: 8,
      online: false,
      connectionDate: '2024-01-20',
      notes: 'Environmental entrepreneur. Passionate about sustainable tech.',
      tags: ['Sustainability', 'Tech', 'Environment'],
      email: 'mike@ecotech.com',
      phone: '+1 (555) 234-5678',
      linkedin: 'mike-rodriguez-ecotech',
      twitter: '@miker_ecotech',
      website: 'ecotech.com',
      bio: 'Building the future of sustainable technology. Former Tesla engineer, climate activist.',
      skills: ['Sustainability', 'Clean Tech', 'Leadership', 'Innovation'],
      recentActivity: 'Launched new carbon tracking platform',
      lastInteraction: '2024-01-18',
      interactionType: 'email',
      priority: 'medium'
    },
    {
      id: 3,
      name: 'Emma Wilson',
      title: 'Product Manager',
      company: 'FinTech Solutions',
      location: 'New York, NY',
      avatar: 'EW',
      compatibility: 85,
      status: 'connected',
      lastActive: '3 hours ago',
      verified: true,
      interests: ['Fintech', 'Travel', 'Photography'],
      mutualConnections: 15,
      online: true,
      connectionDate: '2024-01-10',
      notes: 'Product expert with great insights on user experience.',
      tags: ['Product', 'Fintech', 'UX'],
      email: 'emma@fintechsolutions.com',
      phone: '+1 (555) 345-6789',
      linkedin: 'emma-wilson-fintech',
      twitter: '@emmaw_fintech',
      website: 'fintechsolutions.com',
      bio: 'Product manager with 8+ years in fintech. Passionate about creating user-centered financial products.',
      skills: ['Product Management', 'UX Design', 'Fintech', 'Analytics'],
      recentActivity: 'Shared insights on mobile banking trends',
      lastInteraction: '2024-01-19',
      interactionType: 'call',
      priority: 'high'
    },
    {
      id: 4,
      name: 'David Chen',
      title: 'VP of Engineering',
      company: 'CloudScale',
      location: 'Seattle, WA',
      avatar: 'DC',
      compatibility: 90,
      status: 'connected',
      lastActive: '5 hours ago',
      verified: true,
      interests: ['Cloud Computing', 'Architecture', 'Hiking'],
      mutualConnections: 20,
      online: false,
      connectionDate: '2024-01-05',
      notes: 'Cloud infrastructure expert. Very knowledgeable about scaling.',
      tags: ['Cloud', 'Engineering', 'Scaling'],
      email: 'david@cloudscale.com',
      phone: '+1 (555) 456-7890',
      linkedin: 'david-chen-cloudscale',
      twitter: '@davidc_cloud',
      website: 'cloudscale.com',
      bio: 'VP of Engineering at CloudScale. Former AWS architect, scaling expert.',
      skills: ['Cloud Architecture', 'DevOps', 'Scalability', 'Team Leadership'],
      recentActivity: 'Published article on microservices architecture',
      lastInteraction: '2024-01-17',
      interactionType: 'message',
      priority: 'medium'
    },
    {
      id: 5,
      name: 'Lisa Park',
      title: 'Marketing Director',
      company: 'GrowthCo',
      location: 'Los Angeles, CA',
      avatar: 'LP',
      compatibility: 78,
      status: 'pending',
      lastActive: '2 days ago',
      verified: false,
      interests: ['Marketing', 'Growth', 'Design'],
      mutualConnections: 5,
      online: false,
      connectionDate: '2024-01-25',
      notes: 'Growth marketing specialist. Creative approach to user acquisition.',
      tags: ['Marketing', 'Growth', 'Creative'],
      email: 'lisa@growthco.com',
      phone: '+1 (555) 567-8901',
      linkedin: 'lisa-park-growthco',
      twitter: '@lisap_growth',
      website: 'growthco.com',
      bio: 'Marketing director with expertise in growth hacking and creative campaigns.',
      skills: ['Growth Marketing', 'Digital Marketing', 'Creative Strategy', 'Analytics'],
      recentActivity: 'Launched viral marketing campaign',
      lastInteraction: '2024-01-22',
      interactionType: 'email',
      priority: 'low'
    }
  ];

  const tabs = [
    { id: 'all', label: 'All Connections', count: connections.length },
    { id: 'connected', label: 'Connected', count: connections.filter(c => c.status === 'connected').length },
    { id: 'pending', label: 'Pending', count: connections.filter(c => c.status === 'pending').length },
    { id: 'mutual', label: 'Mutual', count: connections.filter(c => c.mutualConnections > 10).length },
    { id: 'high-priority', label: 'High Priority', count: connections.filter(c => c.priority === 'high').length }
  ];

  const sortOptions = [
    { id: 'recent', label: 'Most Recent' },
    { id: 'name', label: 'Name' },
    { id: 'compatibility', label: 'Compatibility' },
    { id: 'mutual', label: 'Mutual Connections' },
    { id: 'last-interaction', label: 'Last Interaction' }
  ];

  const filteredConnections = connections.filter(connection => {
    const matchesSearch = connection.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         connection.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         connection.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         connection.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesTab = activeTab === 'all' || 
                      (activeTab === 'connected' && connection.status === 'connected') ||
                      (activeTab === 'pending' && connection.status === 'pending') ||
                      (activeTab === 'mutual' && connection.mutualConnections > 10) ||
                      (activeTab === 'high-priority' && connection.priority === 'high');
    
    return matchesSearch && matchesTab;
  }).sort((a, b) => {
    let comparison = 0;
    switch (sortBy) {
      case 'name':
        comparison = a.name.localeCompare(b.name);
        break;
      case 'compatibility':
        comparison = a.compatibility - b.compatibility;
        break;
      case 'mutual':
        comparison = a.mutualConnections - b.mutualConnections;
        break;
      case 'last-interaction':
        comparison = new Date(a.lastInteraction) - new Date(b.lastInteraction);
        break;
      default: // recent
        comparison = new Date(b.connectionDate) - new Date(a.connectionDate);
    }
    return sortOrder === 'asc' ? comparison : -comparison;
  });

  const handleConnectionAction = (connectionId, action) => {
    console.log(`${action} connection ${connectionId}`);
    // Handle connection actions here
  };

  const handleSelectConnection = (connectionId) => {
    setSelectedConnections(prev => 
      prev.includes(connectionId) 
        ? prev.filter(id => id !== connectionId)
        : [...prev, connectionId]
    );
  };

  const handleSelectAll = () => {
    if (selectedConnections.length === filteredConnections.length) {
      setSelectedConnections([]);
    } else {
      setSelectedConnections(filteredConnections.map(c => c.id));
    }
  };

  const handleBulkAction = (action) => {
    console.log(`Bulk ${action} for connections:`, selectedConnections);
    setSelectedConnections([]);
    setShowBulkActions(false);
  };

  const handleViewProfile = (connection) => {
    setSelectedProfile(connection);
    setShowProfileModal(true);
  };

  const handleCloseProfileModal = () => {
    setShowProfileModal(false);
    setSelectedProfile(null);
  };

  const handleLikeFromModal = (profile) => {
    console.log('Liked profile:', profile.id);
    setShowProfileModal(false);
  };

  const handleMessageFromModal = (profile) => {
    console.log('Message profile:', profile.id);
    setShowProfileModal(false);
  };

  const handleSuperLikeFromModal = (profile) => {
    console.log('Super liked profile:', profile.id);
    setShowProfileModal(false);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'connected': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'blocked': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="main-content">
      <div className="container">
        <div className="section">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">Connections</h1>
                <p className="text-lg text-gray-600">Manage your professional network and relationships</p>
              </div>
              <div className="flex items-center space-x-3">
                <button className="btn btn-secondary">
                  <Plus className="w-5 h-5" />
                  Add Connection
                </button>
                <button className="btn btn-primary">
                  <UserPlus className="w-5 h-5" />
                  Import Contacts
                </button>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-blue-500">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900">{connections.length}</span>
              </div>
              <h3 className="text-sm text-gray-600">Total Connections</h3>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-green-500">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900">
                  {connections.filter(c => c.status === 'connected').length}
                </span>
              </div>
              <h3 className="text-sm text-gray-600">Connected</h3>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-orange-500">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900">
                  {connections.filter(c => c.status === 'pending').length}
                </span>
              </div>
              <h3 className="text-sm text-gray-600">Pending</h3>
            </div>

            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-purple-500">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-gray-900">
                  {connections.filter(c => c.mutualConnections > 10).length}
                </span>
              </div>
              <h3 className="text-sm text-gray-600">Mutual</h3>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="card mb-6">
            <div className="card-body">
              <div className="flex flex-col lg:flex-row gap-4">
                {/* Search Bar */}
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search connections, companies, or tags..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="input pl-10"
                  />
                </div>
                
                {/* Sort Dropdown */}
                <div className="flex items-center space-x-2">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="input"
                  >
                    {sortOptions.map(option => (
                      <option key={option.id} value={option.id}>{option.label}</option>
                    ))}
                  </select>
                  <button
                    onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                    className="btn btn-ghost btn-sm"
                  >
                    {sortOrder === 'asc' ? <SortAsc className="w-4 h-4" /> : <SortDesc className="w-4 h-4" />}
                  </button>
                </div>

                {/* View Mode Toggle */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`btn btn-sm ${viewMode === 'grid' ? 'btn-primary' : 'btn-ghost'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`btn btn-sm ${viewMode === 'list' ? 'btn-primary' : 'btn-ghost'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
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

          {/* Bulk Actions */}
          {selectedConnections.length > 0 && (
            <div className="card mb-6 bg-blue-50 border-blue-200">
              <div className="card-body">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium text-blue-900">
                      {selectedConnections.length} connection{selectedConnections.length > 1 ? 's' : ''} selected
                    </span>
                    <button
                      onClick={handleSelectAll}
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      {selectedConnections.length === filteredConnections.length ? 'Deselect All' : 'Select All'}
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleBulkAction('message')}
                      className="btn btn-sm btn-secondary"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Message
                    </button>
                    <button
                      onClick={() => handleBulkAction('export')}
                      className="btn btn-sm btn-secondary"
                    >
                      <Share className="w-4 h-4" />
                      Export
                    </button>
                    <button
                      onClick={() => handleBulkAction('tag')}
                      className="btn btn-sm btn-secondary"
                    >
                      <Bookmark className="w-4 h-4" />
                      Tag
                    </button>
                    <button
                      onClick={() => setSelectedConnections([])}
                      className="btn btn-sm btn-ghost"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tabs */}
          <div className="card mb-6">
            <div className="card-header">
              <div className="flex items-center space-x-8 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 pb-2 border-b-2 transition-colors whitespace-nowrap ${
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

          {/* Connections List */}
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
            {filteredConnections.map((connection) => (
              <div key={connection.id} className={`card hover:shadow-lg transition-shadow ${selectedConnections.includes(connection.id) ? 'ring-2 ring-blue-500' : ''}`}>
                <div className="card-body">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      {/* Avatar */}
                      <div className="relative">
                        <div className="avatar avatar-lg">
                          <span>{connection.avatar}</span>
                        </div>
                        {connection.online && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                        )}
                        <div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${getPriorityColor(connection.priority)}`}></div>
                      </div>

                      {/* Connection Info */}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{connection.name}</h3>
                          {connection.verified && (
                            <CheckCircle className="w-5 h-5 text-blue-500" />
                          )}
                          <span className={`badge text-xs ${getStatusColor(connection.status)}`}>
                            {connection.status}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 mb-2">{connection.title} at {connection.company}</p>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{connection.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{connection.mutualConnections} mutual</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4" />
                            <span>{connection.compatibility}% match</span>
                          </div>
                        </div>

                        {/* Bio */}
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{connection.bio}</p>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {connection.skills.slice(0, 3).map((skill, index) => (
                            <span key={index} className="badge badge-secondary text-xs">
                              {skill}
                            </span>
                          ))}
                          {connection.skills.length > 3 && (
                            <span className="badge badge-secondary text-xs">
                              +{connection.skills.length - 3} more
                            </span>
                          )}
                        </div>

                        {/* Recent Activity */}
                        <div className="text-xs text-gray-500 mb-3">
                          <div className="flex items-center space-x-1">
                            <TrendingUp className="w-3 h-3" />
                            <span>{connection.recentActivity}</span>
                          </div>
                        </div>

                        {/* Notes */}
                        {connection.notes && (
                          <p className="text-sm text-gray-600 italic mb-3">"{connection.notes}"</p>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedConnections.includes(connection.id)}
                        onChange={() => handleSelectConnection(connection.id)}
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <button
                        onClick={() => handleViewProfile(connection)}
                        className="btn btn-ghost btn-sm"
                        title="View Profile"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      
                      <button
                        onClick={() => handleConnectionAction(connection.id, 'message')}
                        className="btn btn-ghost btn-sm"
                        title="Send Message"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </button>
                      
                      <button
                        onClick={() => handleConnectionAction(connection.id, 'call')}
                        className="btn btn-ghost btn-sm"
                        title="Call"
                      >
                        <Phone className="w-4 h-4" />
                      </button>
                      
                      <button
                        onClick={() => handleConnectionAction(connection.id, 'video')}
                        className="btn btn-ghost btn-sm"
                        title="Video Call"
                      >
                        <Video className="w-4 h-4" />
                      </button>
                      
                      <div className="relative">
                        <button
                          onClick={() => handleConnectionAction(connection.id, 'more')}
                          className="btn btn-ghost btn-sm"
                          title="More Options"
                        >
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Connection Date and Tags */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>Connected: {new Date(connection.connectionDate).toLocaleDateString()}</span>
                      <span>Last active: {connection.lastActive}</span>
                      <span>Last interaction: {new Date(connection.lastInteraction).toLocaleDateString()}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {connection.tags.map((tag, index) => (
                        <span key={index} className="badge badge-primary text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-8">
            <button className="btn btn-primary btn-lg">
              <Zap className="w-5 h-5" />
              Load More Connections
            </button>
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

export default Connections;