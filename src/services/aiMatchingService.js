class AIMatchingService {
  constructor() {
    this.baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
  }

  // Advanced AI Matching Algorithm
  async findMatches(userProfile, preferences = {}) {
    try {
      // Simulate API call with advanced matching logic
      const matches = await this.generateAdvancedMatches(userProfile, preferences);
      return matches;
    } catch (error) {
      console.error('Error finding matches:', error);
      return this.getFallbackMatches();
    }
  }

  // Generate advanced matches with AI analysis
  async generateAdvancedMatches(userProfile, preferences) {
    const mockMatches = [
      {
        id: '1',
        name: 'Sarah Chen',
        age: 26,
        location: 'San Francisco, CA',
        distance: '2.3 km',
        photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
        additionalPhotos: [
          { id: 1, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop', alt: 'Hiking' },
          { id: 2, url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop', alt: 'Cooking' },
          { id: 3, url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=400&fit=crop', alt: 'Travel' }
        ],
        bio: 'Product designer passionate about creating meaningful experiences. Love hiking, cooking, and exploring new cultures.',
        occupation: 'Senior Product Designer',
        company: 'TechFlow',
        education: 'Stanford University',
        interests: ['Design', 'Hiking', 'Cooking', 'Travel', 'Photography', 'Music'],
        skills: ['UI/UX Design', 'Figma', 'Prototyping', 'User Research', 'Illustration'],
        verified: true,
        isOnline: true,
        lastActive: '2 hours ago',
        lifestyle: {
          dailyRoutine: 'Early riser, morning yoga, focused work blocks',
          socialPreferences: 'Small intimate gatherings, outdoor activities',
          travelStyle: 'Cultural immersion, adventure travel',
          workLifeBalance: 'Structured work hours, weekend adventures',
          financialValues: 'Invest in experiences and growth',
          familyValues: 'Quality time, shared experiences'
        },
        contact: {
          email: 'sarah@example.com',
          phone: '+1 (555) 123-4567'
        },
        social: {
          instagram: 'https://instagram.com/sarahchen',
          twitter: 'https://twitter.com/sarahchen',
          linkedin: 'https://linkedin.com/in/sarahchen'
        },
        compatibilityScore: 89,
        matchType: 'soulmate',
        psychologicalProfile: {
          bigFive: {
            openness: 85,
            conscientiousness: 78,
            extraversion: 72,
            agreeableness: 88,
            neuroticism: 25
          },
          attachmentStyle: 'secure',
          loveLanguage: ['words', 'acts', 'time'],
          communicationStyle: 'diplomatic',
          emotionalIntelligence: 82,
          conflictResolution: 'collaborative'
        },
        cosmicAlignment: {
          cosmicScore: 89,
          energyMatch: 'high',
          spiritualConnection: 'strong',
          karmicConnection: 'positive'
        },
        aiInsights: {
          personalityMatch: 'High compatibility in openness and conscientiousness. Both value growth and learning.',
          energyAlignment: 'Strong creative energy match. Both thrive in innovative environments.',
          growthPotential: 'Excellent learning compatibility. Will challenge and support each other\'s growth.',
          communicationStyle: 'Both prefer diplomatic communication with high emotional intelligence.',
          sharedValues: 'Strong alignment on family values, work-life balance, and personal growth.',
          lifestyleCompatibility: 'Both enjoy outdoor activities, cultural experiences, and structured routines.'
        },
        sharedInterests: ['Design', 'Hiking', 'Travel', 'Music'],
        personalityMatch: '92%',
        lifestyleMatch: '87%',
        valuesMatch: '94%'
      },
      {
        id: '2',
        name: 'Alex Rodriguez',
        age: 29,
        location: 'New York, NY',
        distance: '5.7 km',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
        additionalPhotos: [
          { id: 1, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop', alt: 'Hiking' },
          { id: 2, url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop', alt: 'Cooking' }
        ],
        bio: 'Software engineer and entrepreneur. Love building products that make a difference. Passionate about AI and machine learning.',
        occupation: 'Senior Software Engineer',
        company: 'InnovateLab',
        education: 'MIT',
        interests: ['Technology', 'AI/ML', 'Entrepreneurship', 'Fitness', 'Reading', 'Gaming'],
        skills: ['Python', 'React', 'Machine Learning', 'Leadership', 'Public Speaking'],
        verified: true,
        isOnline: false,
        lastActive: '1 day ago',
        lifestyle: {
          dailyRoutine: 'Early riser, gym before work, focused coding sessions',
          socialPreferences: 'Tech meetups, small group discussions',
          travelStyle: 'Business travel, tech conferences',
          workLifeBalance: 'Work-focused with weekend relaxation',
          financialValues: 'Invest in technology and personal development',
          familyValues: 'Career-focused, future family planning'
        },
        contact: {
          email: 'alex@example.com',
          phone: '+1 (555) 987-6543'
        },
        social: {
          instagram: 'https://instagram.com/alexrodriguez',
          twitter: 'https://twitter.com/alexrodriguez',
          linkedin: 'https://linkedin.com/in/alexrodriguez'
        },
        compatibilityScore: 76,
        matchType: 'growth-partner',
        psychologicalProfile: {
          bigFive: {
            openness: 92,
            conscientiousness: 85,
            extraversion: 65,
            agreeableness: 78,
            neuroticism: 30
          },
          attachmentStyle: 'secure',
          loveLanguage: ['acts', 'gifts', 'time'],
          communicationStyle: 'analytical',
          emotionalIntelligence: 75,
          conflictResolution: 'collaborative'
        },
        cosmicAlignment: {
          cosmicScore: 76,
          energyMatch: 'medium',
          spiritualConnection: 'moderate',
          karmicConnection: 'learning'
        },
        aiInsights: {
          personalityMatch: 'Strong intellectual compatibility. Both highly open to new experiences.',
          energyAlignment: 'Complementary energy - one creative, one analytical.',
          growthPotential: 'Great potential for mutual learning and career growth.',
          communicationStyle: 'Different but complementary communication styles.',
          sharedValues: 'Alignment on career growth and personal development.',
          lifestyleCompatibility: 'Different lifestyles but compatible values.'
        },
        sharedInterests: ['Technology', 'Fitness', 'Reading'],
        personalityMatch: '88%',
        lifestyleMatch: '72%',
        valuesMatch: '85%'
      },
      {
        id: '3',
        name: 'Maya Patel',
        age: 24,
        location: 'Los Angeles, CA',
        distance: '8.2 km',
        photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
        additionalPhotos: [
          { id: 1, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop', alt: 'Yoga' },
          { id: 2, url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop', alt: 'Art' }
        ],
        bio: 'Artist and wellness coach. Passionate about mindfulness, creativity, and helping others find their inner peace.',
        occupation: 'Freelance Artist & Wellness Coach',
        company: 'Self-Employed',
        education: 'UCLA',
        interests: ['Art', 'Yoga', 'Meditation', 'Nature', 'Spirituality', 'Music'],
        skills: ['Painting', 'Digital Art', 'Yoga Instruction', 'Meditation', 'Life Coaching'],
        verified: true,
        isOnline: true,
        lastActive: '30 minutes ago',
        lifestyle: {
          dailyRoutine: 'Morning meditation, creative work, evening yoga',
          socialPreferences: 'Spiritual communities, art galleries',
          travelStyle: 'Solo travel, retreats, cultural immersion',
          workLifeBalance: 'Flexible schedule, work-life integration',
          financialValues: 'Value experiences over material possessions',
          familyValues: 'Spiritual growth, emotional connection'
        },
        contact: {
          email: 'maya@example.com',
          phone: '+1 (555) 456-7890'
        },
        social: {
          instagram: 'https://instagram.com/mayapatel',
          twitter: 'https://twitter.com/mayapatel',
          linkedin: 'https://linkedin.com/in/mayapatel'
        },
        compatibilityScore: 82,
        matchType: 'twin-flame',
        psychologicalProfile: {
          bigFive: {
            openness: 95,
            conscientiousness: 70,
            extraversion: 60,
            agreeableness: 92,
            neuroticism: 20
          },
          attachmentStyle: 'secure',
          loveLanguage: ['time', 'touch', 'words'],
          communicationStyle: 'expressive',
          emotionalIntelligence: 90,
          conflictResolution: 'collaborative'
        },
        cosmicAlignment: {
          cosmicScore: 82,
          energyMatch: 'high',
          spiritualConnection: 'very strong',
          karmicConnection: 'soulmate'
        },
        aiInsights: {
          personalityMatch: 'Exceptional spiritual and creative compatibility. Both highly open and emotionally intelligent.',
          energyAlignment: 'Perfect spiritual energy match. Both seek meaning and growth.',
          growthPotential: 'Incredible potential for spiritual and creative growth together.',
          communicationStyle: 'Both prefer expressive, heart-centered communication.',
          sharedValues: 'Strong alignment on spiritual growth and creative expression.',
          lifestyleCompatibility: 'Both value flexibility, creativity, and spiritual practices.'
        },
        sharedInterests: ['Art', 'Yoga', 'Music', 'Nature'],
        personalityMatch: '95%',
        lifestyleMatch: '78%',
        valuesMatch: '96%'
      }
    ];

    // Apply AI matching algorithm
    return this.applyAIMatchingAlgorithm(userProfile, mockMatches, preferences);
  }

  // Apply advanced AI matching algorithm
  applyAIMatchingAlgorithm(userProfile, matches, preferences) {
    return matches.map(match => {
      const compatibility = this.calculateCompatibility(userProfile, match);
      const matchType = this.determineMatchType(compatibility);
      const aiInsights = this.generateAIInsights(userProfile, match, compatibility);
      
      return {
        ...match,
        compatibilityScore: compatibility.overall,
        matchType,
        personalityMatch: `${compatibility.personality}%`,
        lifestyleMatch: `${compatibility.lifestyle}%`,
        valuesMatch: `${compatibility.values}%`,
        aiInsights,
        sharedInterests: this.findSharedInterests(userProfile, match)
      };
    }).sort((a, b) => b.compatibilityScore - a.compatibilityScore);
  }

  // Calculate comprehensive compatibility score
  calculateCompatibility(userProfile, match) {
    const personality = this.calculatePersonalityCompatibility(userProfile, match);
    const lifestyle = this.calculateLifestyleCompatibility(userProfile, match);
    const values = this.calculateValuesCompatibility(userProfile, match);
    const interests = this.calculateInterestsCompatibility(userProfile, match);
    
    const overall = Math.round(
      (personality * 0.3) + 
      (lifestyle * 0.25) + 
      (values * 0.25) + 
      (interests * 0.2)
    );

    return {
      overall,
      personality,
      lifestyle,
      values,
      interests
    };
  }

  // Calculate personality compatibility using Big Five traits
  calculatePersonalityCompatibility(userProfile, match) {
    if (!userProfile.psychologicalProfile || !match.psychologicalProfile) {
      return Math.floor(Math.random() * 30) + 70; // Random 70-100
    }

    const user = userProfile.psychologicalProfile.bigFive;
    const match = match.psychologicalProfile.bigFive;
    
    const openness = 100 - Math.abs(user.openness - match.openness);
    const conscientiousness = 100 - Math.abs(user.conscientiousness - match.conscientiousness);
    const extraversion = 100 - Math.abs(user.extraversion - match.extraversion);
    const agreeableness = 100 - Math.abs(user.agreeableness - match.agreeableness);
    const neuroticism = 100 - Math.abs(user.neuroticism - match.neuroticism);
    
    return Math.round((openness + conscientiousness + extraversion + agreeableness + neuroticism) / 5);
  }

  // Calculate lifestyle compatibility
  calculateLifestyleCompatibility(userProfile, match) {
    let score = 0;
    let factors = 0;

    // Work-life balance
    if (userProfile.lifestyle?.workLifeBalance && match.lifestyle?.workLifeBalance) {
      score += this.compareLifestyleValues(userProfile.lifestyle.workLifeBalance, match.lifestyle.workLifeBalance);
      factors++;
    }

    // Social preferences
    if (userProfile.lifestyle?.socialPreferences && match.lifestyle?.socialPreferences) {
      score += this.compareLifestyleValues(userProfile.lifestyle.socialPreferences, match.lifestyle.socialPreferences);
      factors++;
    }

    // Travel style
    if (userProfile.lifestyle?.travelStyle && match.lifestyle?.travelStyle) {
      score += this.compareLifestyleValues(userProfile.lifestyle.travelStyle, match.lifestyle.travelStyle);
      factors++;
    }

    return factors > 0 ? Math.round(score / factors) : Math.floor(Math.random() * 30) + 70;
  }

  // Calculate values compatibility
  calculateValuesCompatibility(userProfile, match) {
    let score = 0;
    let factors = 0;

    // Financial values
    if (userProfile.lifestyle?.financialValues && match.lifestyle?.financialValues) {
      score += this.compareLifestyleValues(userProfile.lifestyle.financialValues, match.lifestyle.financialValues);
      factors++;
    }

    // Family values
    if (userProfile.lifestyle?.familyValues && match.lifestyle?.familyValues) {
      score += this.compareLifestyleValues(userProfile.lifestyle.familyValues, match.lifestyle.familyValues);
      factors++;
    }

    return factors > 0 ? Math.round(score / factors) : Math.floor(Math.random() * 30) + 70;
  }

  // Calculate interests compatibility
  calculateInterestsCompatibility(userProfile, match) {
    if (!userProfile.interests || !match.interests) {
      return Math.floor(Math.random() * 30) + 70;
    }

    const userInterests = new Set(userProfile.interests.map(i => i.toLowerCase()));
    const matchInterests = new Set(match.interests.map(i => i.toLowerCase()));
    
    const intersection = new Set([...userInterests].filter(x => matchInterests.has(x)));
    const union = new Set([...userInterests, ...matchInterests]);
    
    const jaccardSimilarity = intersection.size / union.size;
    return Math.round(jaccardSimilarity * 100);
  }

  // Compare lifestyle values
  compareLifestyleValues(userValue, matchValue) {
    const similarity = this.calculateTextSimilarity(userValue, matchValue);
    return Math.round(similarity * 100);
  }

  // Calculate text similarity (simplified)
  calculateTextSimilarity(text1, text2) {
    const words1 = text1.toLowerCase().split(' ');
    const words2 = text2.toLowerCase().split(' ');
    
    const intersection = words1.filter(word => words2.includes(word));
    const union = [...new Set([...words1, ...words2])];
    
    return intersection.length / union.length;
  }

  // Determine match type based on compatibility
  determineMatchType(compatibility) {
    if (compatibility.overall >= 90) return 'soulmate';
    if (compatibility.overall >= 85) return 'twin-flame';
    if (compatibility.overall >= 80) return 'growth-partner';
    if (compatibility.overall >= 75) return 'energy-match';
    if (compatibility.overall >= 70) return 'karmic';
    return 'potential';
  }

  // Generate AI insights
  generateAIInsights(userProfile, match, compatibility) {
    const insights = {
      personalityMatch: this.generatePersonalityInsight(compatibility.personality),
      energyAlignment: this.generateEnergyInsight(compatibility.overall),
      growthPotential: this.generateGrowthInsight(compatibility.overall),
      communicationStyle: this.generateCommunicationInsight(userProfile, match),
      sharedValues: this.generateValuesInsight(compatibility.values),
      lifestyleCompatibility: this.generateLifestyleInsight(compatibility.lifestyle)
    };

    return insights;
  }

  // Generate specific insights
  generatePersonalityInsight(score) {
    if (score >= 90) return 'Exceptional personality compatibility. You share core traits and values.';
    if (score >= 80) return 'High personality compatibility. You complement each other well.';
    if (score >= 70) return 'Good personality compatibility with room for growth.';
    return 'Different personalities that could complement each other.';
  }

  generateEnergyInsight(score) {
    if (score >= 90) return 'Perfect energy alignment. You inspire and energize each other.';
    if (score >= 80) return 'Strong energy match. You have great chemistry together.';
    if (score >= 70) return 'Good energy compatibility with potential for growth.';
    return 'Different energy levels that could balance each other.';
  }

  generateGrowthInsight(score) {
    if (score >= 90) return 'Incredible growth potential. You will challenge and support each other.';
    if (score >= 80) return 'Excellent growth compatibility. Great potential for mutual development.';
    if (score >= 70) return 'Good growth potential with opportunities to learn together.';
    return 'Different growth paths that could complement each other.';
  }

  generateCommunicationInsight(userProfile, match) {
    const userStyle = userProfile.psychologicalProfile?.communicationStyle || 'direct';
    const matchStyle = match.psychologicalProfile?.communicationStyle || 'direct';
    
    if (userStyle === matchStyle) {
      return `Both prefer ${userStyle} communication, ensuring clear understanding.`;
    }
    return `Different communication styles (${userStyle} vs ${matchStyle}) that could complement each other.`;
  }

  generateValuesInsight(score) {
    if (score >= 90) return 'Exceptional values alignment. You share core beliefs and principles.';
    if (score >= 80) return 'Strong values compatibility. You have similar life priorities.';
    if (score >= 70) return 'Good values alignment with some differences to explore.';
    return 'Different values that could provide interesting perspectives.';
  }

  generateLifestyleInsight(score) {
    if (score >= 90) return 'Perfect lifestyle compatibility. You have similar daily routines and preferences.';
    if (score >= 80) return 'Strong lifestyle match. You enjoy similar activities and schedules.';
    if (score >= 70) return 'Good lifestyle compatibility with room for compromise.';
    return 'Different lifestyles that could provide balance and variety.';
  }

  // Find shared interests
  findSharedInterests(userProfile, match) {
    if (!userProfile.interests || !match.interests) return [];
    
    const userInterests = new Set(userProfile.interests.map(i => i.toLowerCase()));
    const matchInterests = new Set(match.interests.map(i => i.toLowerCase()));
    
    return [...userInterests].filter(interest => matchInterests.has(interest));
  }

  // Get fallback matches
  getFallbackMatches() {
    return [
      {
        id: 'fallback-1',
        name: 'Demo Match',
        age: 25,
        location: 'San Francisco, CA',
        distance: '1.0 km',
        photo: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
        bio: 'This is a demo match to show the AI matching interface.',
        compatibilityScore: 85,
        matchType: 'soulmate',
        personalityMatch: '88%',
        lifestyleMatch: '82%',
        valuesMatch: '90%'
      }
    ];
  }

  // Get match statistics
  async getMatchStatistics(userId) {
    try {
      // Simulate API call
      return {
        totalMatches: 150,
        soulmates: 12,
        twinFlames: 8,
        growthPartners: 25,
        energyMatches: 18,
        karmic: 7,
        averageCompatibility: 78,
        topMatchTypes: ['growth-partner', 'energy-match', 'soulmate']
      };
    } catch (error) {
      console.error('Error getting match statistics:', error);
      return {
        totalMatches: 0,
        soulmates: 0,
        twinFlames: 0,
        growthPartners: 0,
        energyMatches: 0,
        karmic: 0,
        averageCompatibility: 0,
        topMatchTypes: []
      };
    }
  }

  // Update match preferences
  async updateMatchPreferences(userId, preferences) {
    try {
      // Simulate API call
      console.log('Updating match preferences:', preferences);
      return { success: true };
    } catch (error) {
      console.error('Error updating match preferences:', error);
      return { success: false, error: error.message };
    }
  }
}

export default new AIMatchingService();
