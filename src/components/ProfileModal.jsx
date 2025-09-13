import React, { useState } from 'react';
import { X, Heart, MessageCircle, Star, MapPin, Calendar, Briefcase, GraduationCap, Globe, Phone, Mail, Instagram, Twitter, Linkedin, Camera, Edit3, Share2, Flag } from 'lucide-react';

const ProfileModal = ({ profile, isOpen, onClose, onLike, onMessage, onSuperLike }) => {
  const [activeTab, setActiveTab] = useState('about');
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  if (!isOpen || !profile) return null;

  const photos = profile.photos || [
    { id: 1, url: profile.photo, alt: `${profile.name}'s photo` },
    ...(profile.additionalPhotos || [])
  ];

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const tabs = [
    { id: 'about', label: 'About', icon: User },
    { id: 'photos', label: 'Photos', icon: Camera },
    { id: 'interests', label: 'Interests', icon: Heart },
    { id: 'lifestyle', label: 'Lifestyle', icon: Globe },
    { id: 'compatibility', label: 'Compatibility', icon: Star }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="relative h-80 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500">
            {/* Cover Photo */}
            <div className="absolute inset-0">
              <img 
                src={photos[currentPhotoIndex]?.url || profile.photo} 
                alt={photos[currentPhotoIndex]?.alt || `${profile.name}'s photo`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Photo Navigation */}
            {photos.length > 1 && (
              <>
                <button
                  onClick={prevPhoto}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all"
                >
                  <X className="w-5 h-5 rotate-90" />
                </button>
                <button
                  onClick={nextPhoto}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all"
                >
                  <X className="w-5 h-5 -rotate-90" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {photos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPhotoIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentPhotoIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Profile Info Overlay */}
            <div className="absolute bottom-6 left-6 text-white">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img 
                    src={profile.photo} 
                    alt={profile.name}
                    className="w-20 h-20 rounded-full border-4 border-white/30 object-cover"
                  />
                  {profile.isOnline && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-2 border-white rounded-full" />
                  )}
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{profile.name}, {profile.age}</h1>
                  <div className="flex items-center gap-2 text-white/80">
                    <MapPin className="w-4 h-4" />
                    <span>{profile.location}</span>
                    {profile.distance && (
                      <span>• {profile.distance} km away</span>
                    )}
                  </div>
                  {profile.verified && (
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-yellow-400">Verified</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="absolute top-4 left-6 flex gap-2">
            <button
              onClick={() => onLike(profile)}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all"
            >
              <Heart className="w-5 h-5" />
            </button>
            <button
              onClick={() => onMessage(profile)}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
            <button
              onClick={() => onSuperLike(profile)}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all"
            >
              <Star className="w-5 h-5" />
            </button>
            <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all">
              <Flag className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-all ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {activeTab === 'about' && (
                <div className="space-y-6">
                  {/* Basic Info */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Basic Information</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600">Age: {profile.age}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600">{profile.location}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Briefcase className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600">{profile.occupation || 'Not specified'}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <GraduationCap className="w-4 h-4 text-gray-400" />
                          <span className="text-gray-600">{profile.education || 'Not specified'}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Contact</h3>
                      <div className="space-y-3">
                        {profile.email && (
                          <div className="flex items-center gap-3">
                            <Mail className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-600">{profile.email}</span>
                          </div>
                        )}
                        {profile.phone && (
                          <div className="flex items-center gap-3">
                            <Phone className="w-4 h-4 text-gray-400" />
                            <span className="text-gray-600">{profile.phone}</span>
                          </div>
                        )}
                        {profile.website && (
                          <div className="flex items-center gap-3">
                            <Globe className="w-4 h-4 text-gray-400" />
                            <a href={profile.website} className="text-blue-600 hover:underline">{profile.website}</a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Bio */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">About</h3>
                    <p className="text-gray-600 leading-relaxed">{profile.bio || 'No bio available'}</p>
                  </div>

                  {/* Social Links */}
                  {(profile.instagram || profile.twitter || profile.linkedin) && (
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Social Media</h3>
                      <div className="flex gap-4">
                        {profile.instagram && (
                          <a href={profile.instagram} className="flex items-center gap-2 text-pink-600 hover:text-pink-700">
                            <Instagram className="w-5 h-5" />
                            <span>Instagram</span>
                          </a>
                        )}
                        {profile.twitter && (
                          <a href={profile.twitter} className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                            <Twitter className="w-5 h-5" />
                            <span>Twitter</span>
                          </a>
                        )}
                        {profile.linkedin && (
                          <a href={profile.linkedin} className="flex items-center gap-2 text-blue-700 hover:text-blue-800">
                            <Linkedin className="w-5 h-5" />
                            <span>LinkedIn</span>
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'photos' && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {photos.map((photo, index) => (
                    <div
                      key={photo.id || index}
                      className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                      onClick={() => setCurrentPhotoIndex(index)}
                    >
                      <img
                        src={photo.url}
                        alt={photo.alt || `${profile.name}'s photo ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'interests' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Hobbies & Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {(profile.interests || []).map((interest, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {(profile.skills || []).map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'lifestyle' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Lifestyle</h3>
                      <div className="space-y-3">
                        <div>
                          <span className="text-sm text-gray-500">Daily Routine</span>
                          <p className="text-gray-700">{profile.lifestyle?.dailyRoutine || 'Not specified'}</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Social Preferences</span>
                          <p className="text-gray-700">{profile.lifestyle?.socialPreferences || 'Not specified'}</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Travel Style</span>
                          <p className="text-gray-700">{profile.lifestyle?.travelStyle || 'Not specified'}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Values</h3>
                      <div className="space-y-3">
                        <div>
                          <span className="text-sm text-gray-500">Work-Life Balance</span>
                          <p className="text-gray-700">{profile.lifestyle?.workLifeBalance || 'Not specified'}</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Financial Values</span>
                          <p className="text-gray-700">{profile.lifestyle?.financialValues || 'Not specified'}</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Family Values</span>
                          <p className="text-gray-700">{profile.lifestyle?.familyValues || 'Not specified'}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'compatibility' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Compatibility Score</h3>
                    <div className="flex items-center gap-4">
                      <div className="text-4xl font-bold text-blue-600">{profile.compatibilityScore || 85}%</div>
                      <div className="flex-1">
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000"
                            style={{ width: `${profile.compatibilityScore || 85}%` }}
                          />
                        </div>
                        <p className="text-sm text-gray-600 mt-2">Based on shared interests, values, and lifestyle</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Shared Interests</h3>
                      <div className="flex flex-wrap gap-2">
                        {(profile.sharedInterests || []).map((interest, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                          >
                            {interest}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Match Insights</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Personality Match</span>
                          <span className="text-sm font-medium">{profile.personalityMatch || '85%'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Lifestyle Match</span>
                          <span className="text-sm font-medium">{profile.lifestyleMatch || '78%'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Values Match</span>
                          <span className="text-sm font-medium">{profile.valuesMatch || '92%'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
