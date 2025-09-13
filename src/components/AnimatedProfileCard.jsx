import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  X, 
  Star, 
  Eye, 
  MessageCircle, 
  MapPin, 
  Calendar,
  CheckCircle,
  Sparkles,
  Zap,
  Crown,
  Shield,
  Globe
} from 'lucide-react';

const AnimatedProfileCard = ({ 
  match, 
  onLike, 
  onPass, 
  onSuperLike, 
  onViewProfile,
  isActive = true 
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleLike = () => {
    if (onLike) onLike(match);
  };

  const handlePass = () => {
    if (onPass) onPass(match);
  };

  const handleSuperLike = () => {
    if (onSuperLike) onSuperLike(match);
  };

  const handleViewProfile = () => {
    if (onViewProfile) onViewProfile(match);
  };

  const getCompatibilityColor = (score) => {
    if (score >= 90) return 'from-green-400 to-emerald-500';
    if (score >= 80) return 'from-blue-400 to-cyan-500';
    if (score >= 70) return 'from-yellow-400 to-orange-500';
    return 'from-gray-400 to-gray-500';
  };

  const getCompatibilityText = (score) => {
    if (score >= 90) return 'Soulmate';
    if (score >= 80) return 'Perfect Match';
    if (score >= 70) return 'Great Match';
    return 'Good Match';
  };

  const getUniquenessText = (score) => {
    if (score >= 90) return 'Twin Flame';
    if (score >= 80) return 'Karmic Connection';
    if (score >= 70) return 'Growth Partner';
    return 'Energy Match';
  };

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-full max-w-md mx-auto"
        >
          <motion.div
            className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden"
            style={{ perspective: '1000px' }}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Front of card */}
            <div className="relative">
              {/* Header with compatibility score */}
              <div className={`h-32 bg-gradient-to-r ${getCompatibilityColor(match.overallScore)} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 right-4 text-white">
                  <div className="text-right">
                    <div className="text-3xl font-bold">{match.overallScore}%</div>
                    <div className="text-sm opacity-90">{getCompatibilityText(match.overallScore)}</div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-5 h-5" />
                    <span className="text-sm font-medium">{getUniquenessText(match.uniquenessScore)}</span>
                  </div>
                </div>
              </div>

              {/* Profile content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                      {match.matchId}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      AI-Powered Match
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-500">Online</span>
                  </div>
                </div>

                {/* AI Compatibility Breakdown */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">AI Compatibility</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(match.aiCompatibility).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <span className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <div className="flex items-center space-x-1">
                          <div className="w-16 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                              style={{ width: `${value}%` }}
                            ></div>
                          </div>
                          <span className="text-xs font-medium text-gray-700 dark:text-gray-300 w-8">
                            {value}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cosmic Alignment */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Cosmic Alignment</h4>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-gray-600 dark:text-gray-400">Overall Cosmic Score</span>
                    <span className="text-sm font-bold text-purple-600">{match.cosmicAlignment.cosmicScore}%</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Zodiac</span>
                      <span className="font-medium">{match.cosmicAlignment.zodiacCompatibility}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Chakra</span>
                      <span className="font-medium">{match.cosmicAlignment.chakraAlignment}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Life Path</span>
                      <span className="font-medium">{match.cosmicAlignment.lifePathNumbers}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Elements</span>
                      <span className="font-medium">{match.cosmicAlignment.elementalBalance}%</span>
                    </div>
                  </div>
                </div>

                {/* Energy Vibe */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Energy Vibe</h4>
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-1">
                        <Zap className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Energy</div>
                      <div className="text-sm font-bold text-yellow-600">{match.energyVibe.energyLevel}%</div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center mb-1">
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Vibration</div>
                      <div className="text-sm font-bold text-pink-600">{match.energyVibe.vibrationMatch}%</div>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mb-1">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">Aura</div>
                      <div className="text-sm font-bold text-blue-600">{match.energyVibe.auraCompatibility}%</div>
                    </div>
                  </div>
                </div>

                {/* Growth Potential */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Growth Potential</h4>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Evolution Score</span>
                      <span className="text-lg font-bold text-green-600">{match.growthPotential.evolutionScore}%</span>
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      High potential for mutual growth and learning
                    </div>
                  </div>
                </div>

                {/* AI Insights Preview */}
                {match.matchInsights && match.matchInsights.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">AI Insights</h4>
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        {match.matchInsights[0].insight}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs text-purple-600 dark:text-purple-400">
                          {match.matchInsights[0].category}
                        </span>
                        <span className="text-xs text-gray-500">
                          {Math.round(match.matchInsights[0].confidence * 100)}% confidence
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action buttons */}
                <div className="flex space-x-3">
                  <button
                    onClick={handlePass}
                    className="flex-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-3 px-4 rounded-xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center justify-center space-x-2"
                  >
                    <X className="w-5 h-5" />
                    <span>Pass</span>
                  </button>
                  
                  <button
                    onClick={handleSuperLike}
                    className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 px-4 rounded-xl font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <Star className="w-5 h-5" />
                    <span>Super Like</span>
                  </button>
                  
                  <button
                    onClick={handleLike}
                    className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <Heart className="w-5 h-5" />
                    <span>Like</span>
                  </button>
                </div>

                {/* View Profile Button */}
                <button
                  onClick={handleViewProfile}
                  className="w-full mt-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Full Profile</span>
                </button>
              </div>
            </div>

            {/* Back of card - Detailed view */}
            <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-3xl p-6" style={{ transform: 'rotateY(180deg)' }}>
              <div className="h-full overflow-y-auto">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Detailed Analysis</h3>
                
                {/* Psychological Match Details */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">Psychological Match</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Attachment Compatibility</span>
                      <span className="text-sm font-medium">{match.psychologicalMatch.attachmentCompatibility}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Love Language Alignment</span>
                      <span className="text-sm font-medium">{match.psychologicalMatch.loveLanguageAlignment}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Communication Compatibility</span>
                      <span className="text-sm font-medium">{match.psychologicalMatch.communicationCompatibility}%</span>
                    </div>
                  </div>
                </div>

                {/* Lifestyle Match Details */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">Lifestyle Match</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Daily Routine</span>
                      <span className="text-sm font-medium">{match.lifestyleMatch.dailyRoutine}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Social Preferences</span>
                      <span className="text-sm font-medium">{match.lifestyleMatch.socialPreferences}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">Work-Life Balance</span>
                      <span className="text-sm font-medium">{match.lifestyleMatch.workLifeBalance}%</span>
                    </div>
                  </div>
                </div>

                {/* Conversation Starters */}
                {match.conversationStarters && match.conversationStarters.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">Conversation Starters</h4>
                    <div className="space-y-2">
                      {match.conversationStarters.slice(0, 3).map((starter, index) => (
                        <div key={index} className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                          <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">{starter.question}</p>
                          <div className="flex justify-between">
                            <span className="text-xs text-blue-600 dark:text-blue-400">{starter.category}</span>
                            <span className="text-xs text-gray-500">{starter.difficulty}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Date Ideas */}
                {match.dateIdeas && match.dateIdeas.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">Date Ideas</h4>
                    <div className="space-y-2">
                      {match.dateIdeas.slice(0, 2).map((idea, index) => (
                        <div key={index} className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                          <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{idea.title}</h5>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">{idea.description}</p>
                          <div className="flex justify-between text-xs">
                            <span className="text-green-600 dark:text-green-400">{idea.category}</span>
                            <span className="text-gray-500">{idea.duration}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Flip back button */}
                <button
                  onClick={() => setIsFlipped(false)}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-xl font-medium hover:from-purple-600 hover:to-pink-600 transition-all"
                >
                  Back to Overview
                </button>
              </div>
            </div>
          </motion.div>

          {/* Flip button */}
          <button
            onClick={() => setIsFlipped(!isFlipped)}
            className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
            title={isFlipped ? "Show overview" : "Show details"}
          >
            <Eye className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { AnimatedProfileCard };
