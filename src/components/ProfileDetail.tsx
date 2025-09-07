import React, { useState } from 'react';
import { 
  User, 
  Building2, 
  Phone, 
  Heart,
  MessageCircle,
  Star,
  Trophy,
  Users,
  CheckCircle,
  XCircle,
  MoreHorizontal,
  Camera,
  Video,
  Music,
  BookOpen,
  Coffee,
  Mountain,
  Plane,
  Gamepad2,
  Palette,
  Dumbbell,
  ChefHat,
  Car,
  Sparkles
} from 'lucide-react';

interface ProfileDetailProps {
  profile: any;
  onClose: () => void;
}

const ProfileDetail: React.FC<ProfileDetailProps> = ({ profile, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showContactModal, setShowContactModal] = useState(false);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: User },
    { id: 'professional', label: 'Professional', icon: Building2 },
    { id: 'personal', label: 'Personal', icon: Heart },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'interests', label: 'Interests', icon: Star }
  ];

  const getInterestIcon = (interest: string) => {
    const iconMap: { [key: string]: any } = {
      'Hiking': Mountain,
      'Coffee': Coffee,
      'Photography': Camera,
      'Music': Music,
      'Cooking': ChefHat,
      'Reading': BookOpen,
      'Rock Climbing': Mountain,
      'Yoga': Sparkles,
      'Gaming': Gamepad2,
      'Travel': Plane,
      'Art': Palette,
      'Fitness': Dumbbell,
      'Cars': Car,
      'Startups': Building2
    };
    return iconMap[interest] || Star;
  };

  const handleContact = () => {
    setShowContactModal(true);
  };


  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative">
          <div className="h-48 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 rounded-t-xl"></div>
          <div className="absolute inset-0 bg-black/20 rounded-t-xl"></div>
          
          {/* Profile Image */}
          <div className="absolute -bottom-16 left-8">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-4xl border-4 border-white dark:border-gray-800">
              {profile.avatar}
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex items-center space-x-2">
            <button
              onClick={handleContact}
              className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-semibold hover:bg-white/30 transition-colors flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contact</span>
            </button>
            
            <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-semibold hover:bg-white/30 transition-colors flex items-center space-x-2">
              <Heart className="w-4 h-4" />
              <span>Like</span>
            </button>
            
            <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
            
            <button
              onClick={onClose}
              className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-white/30 transition-colors"
            >
              <XCircle className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Profile Info */}
        <div className="pt-20 px-8 pb-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                  {profile.name}
                </h1>
                {profile.verified && <CheckCircle className="w-8 h-8 text-blue-500" />}
              </div>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
                {profile.title}
              </p>
              
              <p className="text-gray-500 dark:text-gray-500 mb-4">
                {profile.company} • {profile.location}
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                    {profile.compatibility}% compatibility
                  </span>
                </div>
                
                <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                  <Users className="w-5 h-5" />
                  <span>{profile.mutualConnections} mutual connections</span>
                </div>
              </div>
            </div>
            
            <div className="text-right">
              <div className="bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 text-pink-800 dark:text-pink-200 px-4 py-2 rounded-full text-sm font-semibold mb-2">
                {profile.level} Level
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {profile.points} points
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 dark:border-gray-700 mb-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-3 font-semibold transition-colors ${
                    activeTab === tab.id
                      ? 'text-pink-600 border-b-2 border-pink-600'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="space-y-6">
            {activeTab === 'overview' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">About</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  {profile.bio}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Core Values</h4>
                    <div className="flex flex-wrap gap-2">
                      {profile.values?.map((value: string, index: number) => (
                        <span
                          key={index}
                          className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {value}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Looking For</h4>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <p>• Co-founder with technical expertise</p>
                      <p>• Someone passionate about impact</p>
                      <p>• Experience in scaling teams</p>
                      <p>• Shared values and vision</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'professional' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Professional Background</h3>
                
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Current Role</h4>
                    <p className="text-gray-700 dark:text-gray-300">{profile.title} at {profile.company}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">San Francisco, CA • 2020 - Present</p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Previous Experience</h4>
                    <div className="space-y-3">
                      <div>
                        <p className="font-medium text-gray-800 dark:text-white">Senior Product Manager</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Google • 2018 - 2020</p>
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 dark:text-white">Product Analyst</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Facebook • 2016 - 2018</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Education</h4>
                    <p className="text-gray-700 dark:text-gray-300">MBA, Stanford Graduate School of Business</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">2014 - 2016</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'personal' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Personal Life</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Hobbies & Interests</h4>
                    <div className="flex flex-wrap gap-2">
                      {profile.interests?.map((interest: string, index: number) => {
                        const Icon = getInterestIcon(interest);
                        return (
                          <span
                            key={index}
                            className="bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-200 px-3 py-2 rounded-full text-sm font-medium flex items-center space-x-1"
                          >
                            <Icon className="w-4 h-4" />
                            <span>{interest}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Lifestyle</h4>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <p>• Early riser (5:30 AM)</p>
                      <p>• Fitness enthusiast</p>
                      <p>• Coffee connoisseur</p>
                      <p>• Weekend hiker</p>
                      <p>• Dog lover</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Achievements & Awards</h3>
                
                <div className="space-y-4">
                  {profile.achievements?.map((achievement: any, index: number) => {
                    const Icon = achievement.icon;
                    return (
                      <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800 dark:text-white">{achievement.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{achievement.description}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{achievement.year}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'interests' && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Interests & Passions</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {profile.interests?.map((interest: string, index: number) => {
                    const Icon = getInterestIcon(interest);
                    return (
                      <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                        <Icon className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                        <p className="font-medium text-gray-800 dark:text-white">{interest}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Contact Modal */}
        {showContactModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-60">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-md w-full">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">Contact {profile.name}</h3>
              </div>
              
              <div className="p-6 space-y-4">
                <button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
                
                <button className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Voice Call</span>
                </button>
                
                <button className="w-full bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center space-x-2">
                  <Video className="w-5 h-5" />
                  <span>Video Call</span>
                </button>
              </div>
              
              <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => setShowContactModal(false)}
                  className="w-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileDetail;
