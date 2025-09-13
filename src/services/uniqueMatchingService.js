import { AIPsychologyService } from './aiPsychologyService.js';

export class UniqueMatchingService {
  static instance = null;
  aiPsychologyService = null;

  constructor() {
    this.aiPsychologyService = AIPsychologyService.getInstance();
  }

  static getInstance() {
    if (!UniqueMatchingService.instance) {
      UniqueMatchingService.instance = new UniqueMatchingService();
    }
    return UniqueMatchingService.instance;
  }

  // Generate unique matches based on deep psychological profiling
  async generateUniqueMatches(user, userProfile, potentialMatches) {
    const matches = [];

    for (const potentialMatch of potentialMatches) {
      // Skip if it's the same user
      if (potentialMatch.id === user.id) continue;

      // Get psychological profile for potential match
      const matchProfile = potentialMatch.psychologicalProfile;
      if (!matchProfile) continue;

      // Calculate all compatibility dimensions
      const aiCompatibility = await this.aiPsychologyService.calculateCompatibility(userProfile, matchProfile);
      const psychologicalMatch = await this.calculatePsychologicalMatch(userProfile, matchProfile);
      const lifestyleMatch = await this.calculateLifestyleMatch(userProfile, matchProfile);
      const cosmicAlignment = await this.aiPsychologyService.generateCosmicAlignment(userProfile, matchProfile);
      const energyVibe = await this.aiPsychologyService.generateEnergyVibe(userProfile, matchProfile);
      const growthPotential = await this.aiPsychologyService.generateGrowthPotential(userProfile, matchProfile);

      // Calculate unique scores
      const overallScore = this.calculateOverallScore(aiCompatibility, psychologicalMatch, lifestyleMatch);
      const uniquenessScore = this.calculateUniquenessScore(cosmicAlignment, energyVibe, growthPotential);
      const longTermPotential = this.calculateLongTermPotential(aiCompatibility, growthPotential);

      // Generate AI insights and suggestions
      const matchInsights = await this.aiPsychologyService.generateMatchInsights(userProfile, matchProfile);
      const conversationStarters = await this.aiPsychologyService.generateConversationStarters(userProfile, matchProfile);
      const dateIdeas = await this.aiPsychologyService.generateDateIdeas(userProfile, matchProfile);

      // Only include matches above threshold
      if (overallScore >= 60) {
        const uniqueMatch = {
          id: `match_${user.id}_${potentialMatch.id}_${Date.now()}`,
          userId: user.id,
          matchId: potentialMatch.id,
          aiCompatibility,
          psychologicalMatch,
          lifestyleMatch,
          cosmicAlignment,
          energyVibe,
          growthPotential,
          overallScore,
          uniquenessScore,
          longTermPotential,
          matchInsights,
          conversationStarters,
          dateIdeas,
          status: 'pending',
          createdAt: new Date(),
          updatedAt: new Date()
        };

        matches.push(uniqueMatch);
      }
    }

    // Sort by overall score and uniqueness
    return matches.sort((a, b) => {
      const scoreA = (a.overallScore + a.uniquenessScore) / 2;
      const scoreB = (b.overallScore + b.uniquenessScore) / 2;
      return scoreB - scoreA;
    });
  }

  // Find soulmate connections based on cosmic alignment
  async findSoulmateConnections(user, userProfile, potentialMatches) {
    const matches = await this.generateUniqueMatches(user, userProfile, potentialMatches);
    
    // Filter for soulmate-level connections (90%+ cosmic alignment)
    return matches.filter(match => match.cosmicAlignment.cosmicScore >= 90);
  }

  // Find growth partners (people who challenge and help you grow)
  async findGrowthPartners(user, userProfile, potentialMatches) {
    const matches = await this.generateUniqueMatches(user, userProfile, potentialMatches);
    
    // Filter for high growth potential (80%+ growth score)
    return matches.filter(match => match.growthPotential.evolutionScore >= 80);
  }

  // Find energy matches (people with compatible energy and vibes)
  async findEnergyMatches(user, userProfile, potentialMatches) {
    const matches = await this.generateUniqueMatches(user, userProfile, potentialMatches);
    
    // Filter for high energy compatibility (85%+ vibe match)
    return matches.filter(match => match.energyVibe.overallVibe >= 85);
  }

  // Find karmic connections (people with past life connections)
  async findKarmicConnections(user, userProfile, potentialMatches) {
    const matches = await this.generateUniqueMatches(user, userProfile, potentialMatches);
    
    // Filter for karmic connections based on unique patterns
    return matches.filter(match => {
      const karmicScore = this.calculateKarmicScore(userProfile, match);
      return karmicScore >= 75;
    });
  }

  // Find twin flame connections (mirror souls)
  async findTwinFlameConnections(user, userProfile, potentialMatches) {
    const matches = await this.generateUniqueMatches(user, userProfile, potentialMatches);
    
    // Filter for twin flame connections (very high compatibility + unique patterns)
    return matches.filter(match => {
      const twinFlameScore = this.calculateTwinFlameScore(match);
      return twinFlameScore >= 90;
    });
  }

  // Find adventure partners (people for exciting experiences)
  async findAdventurePartners(user, userProfile, potentialMatches) {
    const matches = await this.generateUniqueMatches(user, userProfile, potentialMatches);
    
    // Filter for adventure compatibility
    return matches.filter(match => {
      const adventureScore = this.calculateAdventureScore(userProfile, match);
      return adventureScore >= 70;
    });
  }

  // Find intellectual matches (people for deep conversations)
  async findIntellectualMatches(user, userProfile, potentialMatches) {
    const matches = await this.generateUniqueMatches(user, userProfile, potentialMatches);
    
    // Filter for high intellectual compatibility
    return matches.filter(match => match.aiCompatibility.intellectual >= 85);
  }

  // Find spiritual matches (people for spiritual growth)
  async findSpiritualMatches(user, userProfile, potentialMatches) {
    const matches = await this.generateUniqueMatches(user, userProfile, potentialMatches);
    
    // Filter for high spiritual compatibility
    return matches.filter(match => match.aiCompatibility.spiritual >= 80);
  }

  // Calculate psychological match compatibility
  async calculatePsychologicalMatch(profile1, profile2) {
    const attachmentCompatibility = this.calculateAttachmentCompatibility(profile1, profile2);
    const loveLanguageAlignment = this.calculateLoveLanguageAlignment(profile1, profile2);
    const communicationCompatibility = this.calculateCommunicationCompatibility(profile1, profile2);
    const conflictResolutionMatch = this.calculateConflictResolutionMatch(profile1, profile2);
    const emotionalIntelligenceMatch = this.calculateEmotionalIntelligenceMatch(profile1, profile2);

    return {
      attachmentCompatibility: Math.round(attachmentCompatibility),
      loveLanguageAlignment: Math.round(loveLanguageAlignment),
      communicationCompatibility: Math.round(communicationCompatibility),
      conflictResolutionMatch: Math.round(conflictResolutionMatch),
      emotionalIntelligenceMatch: Math.round(emotionalIntelligenceMatch)
    };
  }

  // Calculate lifestyle match compatibility
  async calculateLifestyleMatch(profile1, profile2) {
    const dailyRoutine = this.calculateDailyRoutineCompatibility(profile1, profile2);
    const socialPreferences = this.calculateSocialPreferencesCompatibility(profile1, profile2);
    const travelStyle = this.calculateTravelStyleCompatibility(profile1, profile2);
    const workLifeBalance = this.calculateWorkLifeBalanceCompatibility(profile1, profile2);
    const financialValues = this.calculateFinancialValuesCompatibility(profile1, profile2);
    const familyValues = this.calculateFamilyValuesCompatibility(profile1, profile2);

    return {
      dailyRoutine: Math.round(dailyRoutine),
      socialPreferences: Math.round(socialPreferences),
      travelStyle: Math.round(travelStyle),
      workLifeBalance: Math.round(workLifeBalance),
      financialValues: Math.round(financialValues),
      familyValues: Math.round(familyValues)
    };
  }

  // Calculate overall match score
  calculateOverallScore(aiCompatibility, psychologicalMatch, lifestyleMatch) {
    const aiScore = aiCompatibility.overall;
    const psychScore = (
      psychologicalMatch.attachmentCompatibility +
      psychologicalMatch.loveLanguageAlignment +
      psychologicalMatch.communicationCompatibility +
      psychologicalMatch.conflictResolutionMatch +
      psychologicalMatch.emotionalIntelligenceMatch
    ) / 5;
    const lifestyleScore = (
      lifestyleMatch.dailyRoutine +
      lifestyleMatch.socialPreferences +
      lifestyleMatch.travelStyle +
      lifestyleMatch.workLifeBalance +
      lifestyleMatch.financialValues +
      lifestyleMatch.familyValues
    ) / 6;

    return (aiScore + psychScore + lifestyleScore) / 3;
  }

  // Calculate uniqueness score
  calculateUniquenessScore(cosmicAlignment, energyVibe, growthPotential) {
    return (
      cosmicAlignment.cosmicScore +
      energyVibe.overallVibe +
      growthPotential.evolutionScore
    ) / 3;
  }

  // Calculate long-term potential
  calculateLongTermPotential(aiCompatibility, growthPotential) {
    return (aiCompatibility.overall + growthPotential.evolutionScore) / 2;
  }

  // Calculate karmic connection score
  calculateKarmicScore(profile, match) {
    // Look for patterns that suggest karmic connections
    let score = 0;
    
    // Similar life experiences or challenges
    if (profile.growthAreas.length > 0 && match.growthPotential.mutualGrowth > 80) {
      score += 20;
    }
    
    // Complementary strengths and weaknesses
    const complementaryScore = this.calculateComplementaryScore(profile, match);
    score += complementaryScore;
    
    // Spiritual alignment
    score += match.cosmicAlignment.spiritualAlignment / 5;
    
    return Math.min(score, 100);
  }

  // Calculate twin flame score
  calculateTwinFlameScore(match) {
    // Twin flames have very high compatibility but also unique challenges
    let score = 0;
    
    // High overall compatibility
    score += match.overallScore * 0.4;
    
    // High cosmic alignment
    score += match.cosmicAlignment.cosmicScore * 0.3;
    
    // High energy vibe
    score += match.energyVibe.overallVibe * 0.2;
    
    // High growth potential (twin flames challenge each other)
    score += match.growthPotential.evolutionScore * 0.1;
    
    return Math.min(score, 100);
  }

  // Calculate adventure compatibility score
  calculateAdventureScore(profile, match) {
    let score = 0;
    
    // High openness to experience
    if (profile.bigFive.openness > 70) score += 20;
    
    // High extraversion
    if (profile.bigFive.extraversion > 70) score += 20;
    
    // Adventure-related date ideas
    const adventureDates = match.dateIdeas.filter(idea => 
      idea.category === 'Adventure' || idea.category === 'Outdoor'
    );
    score += adventureDates.length * 10;
    
    // High energy vibe
    score += match.energyVibe.overallVibe * 0.5;
    
    return Math.min(score, 100);
  }

  // Calculate complementary score
  calculateComplementaryScore(profile, match) {
    // Look for complementary personality traits
    let score = 0;
    
    // If one is high in extraversion and the other is introverted, that's complementary
    if (profile.bigFive.extraversion > 70 && match.aiCompatibility.personality < 30) {
      score += 15;
    }
    
    // If one is high in conscientiousness and the other is more spontaneous
    if (profile.bigFive.conscientiousness > 70 && match.aiCompatibility.personality < 40) {
      score += 15;
    }
    
    // If one is high in agreeableness and the other is more assertive
    if (profile.bigFive.agreeableness > 70 && match.aiCompatibility.personality < 50) {
      score += 15;
    }
    
    return Math.min(score, 45);
  }

  // Helper methods for compatibility calculations
  calculateAttachmentCompatibility(profile1, profile2) {
    // Secure attachments are compatible with all types
    if (profile1.attachmentStyle === 'secure' || profile2.attachmentStyle === 'secure') {
      return 80;
    }
    
    // Same attachment styles are compatible
    if (profile1.attachmentStyle === profile2.attachmentStyle) {
      return 70;
    }
    
    // Some combinations work better than others
    const compatiblePairs = [
      ['anxious', 'secure'],
      ['avoidant', 'secure'],
      ['anxious', 'avoidant'] // Can work with effort
    ];
    
    const pair = [profile1.attachmentStyle, profile2.attachmentStyle].sort();
    if (compatiblePairs.some(p => p[0] === pair[0] && p[1] === pair[1])) {
      return 60;
    }
    
    return 40;
  }

  calculateLoveLanguageAlignment(profile1, profile2) {
    const sharedLanguages = profile1.loveLanguage.filter(lang => 
      profile2.loveLanguage.includes(lang)
    );
    return (sharedLanguages.length / Math.max(profile1.loveLanguage.length, profile2.loveLanguage.length)) * 100;
  }

  calculateCommunicationCompatibility(profile1, profile2) {
    // Same communication styles are highly compatible
    if (profile1.communicationStyle === profile2.communicationStyle) {
      return 90;
    }
    
    // Some combinations work well together
    const compatiblePairs = [
      ['direct', 'analytical'],
      ['diplomatic', 'expressive'],
      ['analytical', 'expressive']
    ];
    
    const pair = [profile1.communicationStyle, profile2.communicationStyle].sort();
    if (compatiblePairs.some(p => p[0] === pair[0] && p[1] === pair[1])) {
      return 70;
    }
    
    return 50;
  }

  calculateConflictResolutionMatch(profile1, profile2) {
    // Collaborative is compatible with all
    if (profile1.conflictResolution === 'collaborative' || profile2.conflictResolution === 'collaborative') {
      return 80;
    }
    
    // Same styles work well
    if (profile1.conflictResolution === profile2.conflictResolution) {
      return 70;
    }
    
    // Some combinations work
    const compatiblePairs = [
      ['accommodating', 'competitive'],
      ['compromising', 'avoidant']
    ];
    
    const pair = [profile1.conflictResolution, profile2.conflictResolution].sort();
    if (compatiblePairs.some(p => p[0] === pair[0] && p[1] === pair[1])) {
      return 60;
    }
    
    return 40;
  }

  calculateEmotionalIntelligenceMatch(profile1, profile2) {
    const avg1 = (profile1.emotionalIntelligence.selfAwareness + profile1.emotionalIntelligence.empathy + profile1.emotionalIntelligence.socialSkills) / 3;
    const avg2 = (profile2.emotionalIntelligence.selfAwareness + profile2.emotionalIntelligence.empathy + profile2.emotionalIntelligence.socialSkills) / 3;
    
    // Similar emotional intelligence levels work well
    const difference = Math.abs(avg1 - avg2);
    return Math.max(0, 100 - difference);
  }

  // Lifestyle compatibility calculations
  calculateDailyRoutineCompatibility(profile1, profile2) {
    // This would be based on actual lifestyle data
    return Math.random() * 100;
  }

  calculateSocialPreferencesCompatibility(profile1, profile2) {
    if (profile1.socialEnergy === profile2.socialEnergy) {
      return 80;
    }
    
    if (profile1.socialEnergy === 'ambivert' || profile2.socialEnergy === 'ambivert') {
      return 70;
    }
    
    return 50;
  }

  calculateTravelStyleCompatibility(profile1, profile2) {
    // This would be based on travel preferences
    return Math.random() * 100;
  }

  calculateWorkLifeBalanceCompatibility(profile1, profile2) {
    // This would be based on work-life balance preferences
    return Math.random() * 100;
  }

  calculateFinancialValuesCompatibility(profile1, profile2) {
    // This would be based on financial values and goals
    return Math.random() * 100;
  }

  calculateFamilyValuesCompatibility(profile1, profile2) {
    // This would be based on family values and goals
    return Math.random() * 100;
  }
}
