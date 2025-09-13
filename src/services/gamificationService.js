export class GamificationService {
  static instance = null;

  static getInstance() {
    if (!GamificationService.instance) {
      GamificationService.instance = new GamificationService();
    }
    return GamificationService.instance;
  }

  // Initialize gamification profile for new user
  createGamificationProfile(userId) {
    return {
      id: `gamification_${userId}`,
      userId,
      level: 1,
      experience: 0,
      experienceToNext: 100,
      achievements: [],
      badges: [],
      streakDays: 0,
      socialScore: 0,
      communityRank: 0,
      influencePoints: 0,
      datingActivity: {
        totalMatches: 0,
        qualityMatches: 0,
        conversationsStarted: 0,
        datesScheduled: 0,
        datesCompleted: 0,
        relationshipsFormed: 0,
        lastActive: new Date()
      },
      matchQuality: 0,
      conversationQuality: 0,
      unlockedFeatures: ['basic_matching'],
      premiumCredits: 0,
      specialAccess: [],
      createdAt: new Date(),
      updatedAt: new Date()
    };
  }

  // Award experience points for various actions
  awardExperience(profile, action, points) {
    const newProfile = { ...profile };
    newProfile.experience += points;
    
    // Check for level up
    while (newProfile.experience >= newProfile.experienceToNext) {
      newProfile.experience -= newProfile.experienceToNext;
      newProfile.level += 1;
      newProfile.experienceToNext = this.calculateExperienceToNext(newProfile.level);
      
      // Unlock new features based on level
      this.unlockLevelFeatures(newProfile);
    }

    // Update activity based on action
    this.updateActivityForAction(newProfile, action);
    
    // Check for achievements
    this.checkAchievements(newProfile, action);
    
    newProfile.updatedAt = new Date();
    return newProfile;
  }

  // Check and award achievements
  checkAchievements(profile, action) {
    const newAchievements = [];
    
    // Profile completion achievements
    if (action === 'profile_completed' && !this.hasAchievement(profile, 'profile_master')) {
      newAchievements.push(this.createAchievement(
        'profile_master',
        'Profile Master',
        'Complete your profile with all sections filled',
        'profile',
        'common',
        50
      ));
    }

    // Matching achievements
    if (action === 'match_made' && profile.datingActivity.totalMatches === 1) {
      newAchievements.push(this.createAchievement(
        'first_match',
        'First Connection',
        'Make your first match',
        'dating',
        'common',
        25
      ));
    }

    if (action === 'match_made' && profile.datingActivity.totalMatches === 10) {
      newAchievements.push(this.createAchievement(
        'match_maker',
        'Match Maker',
        'Make 10 matches',
        'dating',
        'uncommon',
        100
      ));
    }

    if (action === 'match_made' && profile.datingActivity.totalMatches === 50) {
      newAchievements.push(this.createAchievement(
        'dating_expert',
        'Dating Expert',
        'Make 50 matches',
        'dating',
        'rare',
        250
      ));
    }

    // Conversation achievements
    if (action === 'conversation_started' && profile.datingActivity.conversationsStarted === 1) {
      newAchievements.push(this.createAchievement(
        'conversation_starter',
        'Conversation Starter',
        'Start your first conversation',
        'social',
        'common',
        30
      ));
    }

    if (action === 'conversation_started' && profile.datingActivity.conversationsStarted === 25) {
      newAchievements.push(this.createAchievement(
        'social_butterfly',
        'Social Butterfly',
        'Start 25 conversations',
        'social',
        'uncommon',
        150
      ));
    }

    // Date achievements
    if (action === 'date_scheduled' && profile.datingActivity.datesScheduled === 1) {
      newAchievements.push(this.createAchievement(
        'date_planner',
        'Date Planner',
        'Schedule your first date',
        'dating',
        'common',
        40
      ));
    }

    if (action === 'date_completed' && profile.datingActivity.datesCompleted === 1) {
      newAchievements.push(this.createAchievement(
        'first_date',
        'First Date',
        'Complete your first date',
        'dating',
        'common',
        50
      ));
    }

    if (action === 'date_completed' && profile.datingActivity.datesCompleted === 10) {
      newAchievements.push(this.createAchievement(
        'serial_dater',
        'Serial Dater',
        'Complete 10 dates',
        'dating',
        'rare',
        300
      ));
    }

    // Relationship achievements
    if (action === 'relationship_formed' && profile.datingActivity.relationshipsFormed === 1) {
      newAchievements.push(this.createAchievement(
        'relationship_builder',
        'Relationship Builder',
        'Form your first relationship',
        'dating',
        'epic',
        500
      ));
    }

    // Streak achievements
    if (action === 'daily_login' && profile.streakDays === 7) {
      newAchievements.push(this.createAchievement(
        'week_warrior',
        'Week Warrior',
        'Maintain a 7-day login streak',
        'community',
        'uncommon',
        100
      ));
    }

    if (action === 'daily_login' && profile.streakDays === 30) {
      newAchievements.push(this.createAchievement(
        'month_master',
        'Month Master',
        'Maintain a 30-day login streak',
        'community',
        'rare',
        500
      ));
    }

    // Quality achievements
    if (profile.matchQuality > 80 && !this.hasAchievement(profile, 'quality_matcher')) {
      newAchievements.push(this.createAchievement(
        'quality_matcher',
        'Quality Matcher',
        'Maintain high match quality (80%+)',
        'dating',
        'uncommon',
        200
      ));
    }

    // Add new achievements to profile
    newAchievements.forEach(achievement => {
      if (!this.hasAchievement(profile, achievement.id)) {
        profile.achievements.push(achievement);
        profile.influencePoints += achievement.points;
      }
    });

    return newAchievements;
  }

  // Award badges based on achievements and behavior
  awardBadges(profile) {
    const newBadges = [];

    // Personality badges based on psychological profile
    if (profile.datingActivity.totalMatches > 20) {
      newBadges.push(this.createBadge(
        'popular',
        'Popular',
        '👑',
        'You\'re a popular match!',
        'personality',
        'gold'
      ));
    }

    // Activity badges
    if (profile.datingActivity.conversationsStarted > 50) {
      newBadges.push(this.createBadge(
        'conversationalist',
        'Conversationalist',
        '💬',
        'Master of conversations',
        'activity',
        'silver'
      ));
    }

    // Achievement badges
    if (profile.achievements.length >= 10) {
      newBadges.push(this.createBadge(
        'achiever',
        'Achiever',
        '🏆',
        'Earned 10+ achievements',
        'achievement',
        'platinum'
      ));
    }

    // Special badges
    if (profile.level >= 20) {
      newBadges.push(this.createBadge(
        'veteran',
        'Veteran',
        '⭐',
        'Reached level 20',
        'special',
        'diamond'
      ));
    }

    // Add new badges to profile
    newBadges.forEach(badge => {
      if (!this.hasBadge(profile, badge.id)) {
        profile.badges.push(badge);
      }
    });

    return newBadges;
  }

  // Calculate social score based on various factors
  calculateSocialScore(profile) {
    let score = 0;
    
    // Base score from level
    score += profile.level * 10;
    
    // Activity score
    score += profile.datingActivity.totalMatches * 5;
    score += profile.datingActivity.conversationsStarted * 3;
    score += profile.datingActivity.datesCompleted * 10;
    score += profile.datingActivity.relationshipsFormed * 50;
    
    // Quality bonuses
    score += profile.matchQuality * 2;
    score += profile.conversationQuality * 2;
    
    // Achievement bonuses
    score += profile.achievements.reduce((sum, achievement) => sum + achievement.points, 0);
    
    // Streak bonus
    score += profile.streakDays * 2;
    
    return Math.min(score, 10000); // Cap at 10,000
  }

  // Calculate community rank based on social score
  calculateCommunityRank(profile, allProfiles) {
    const sortedProfiles = allProfiles
      .map(p => ({ ...p, socialScore: this.calculateSocialScore(p) }))
      .sort((a, b) => b.socialScore - a.socialScore);
    
    const userIndex = sortedProfiles.findIndex(p => p.userId === profile.userId);
    return userIndex + 1;
  }

  // Unlock features based on level
  unlockLevelFeatures(profile) {
    const level = profile.level;
    
    if (level >= 5 && !profile.unlockedFeatures.includes('advanced_matching')) {
      profile.unlockedFeatures.push('advanced_matching');
    }
    
    if (level >= 10 && !profile.unlockedFeatures.includes('premium_filters')) {
      profile.unlockedFeatures.push('premium_filters');
    }
    
    if (level >= 15 && !profile.unlockedFeatures.includes('ai_insights')) {
      profile.unlockedFeatures.push('ai_insights');
    }
    
    if (level >= 20 && !profile.unlockedFeatures.includes('exclusive_events')) {
      profile.unlockedFeatures.push('exclusive_events');
    }
    
    if (level >= 25 && !profile.unlockedFeatures.includes('vip_support')) {
      profile.unlockedFeatures.push('vip_support');
    }
  }

  // Calculate experience needed for next level
  calculateExperienceToNext(level) {
    return Math.floor(100 * Math.pow(1.2, level - 1));
  }

  // Update activity based on action
  updateActivityForAction(profile, action) {
    switch (action) {
      case 'match_made':
        profile.datingActivity.totalMatches += 1;
        break;
      case 'quality_match':
        profile.datingActivity.qualityMatches += 1;
        break;
      case 'conversation_started':
        profile.datingActivity.conversationsStarted += 1;
        break;
      case 'date_scheduled':
        profile.datingActivity.datesScheduled += 1;
        break;
      case 'date_completed':
        profile.datingActivity.datesCompleted += 1;
        break;
      case 'relationship_formed':
        profile.datingActivity.relationshipsFormed += 1;
        break;
      case 'daily_login':
        profile.streakDays += 1;
        break;
    }
    profile.datingActivity.lastActive = new Date();
  }

  // Check if user has specific achievement
  hasAchievement(profile, achievementId) {
    return profile.achievements.some(achievement => achievement.id === achievementId);
  }

  // Check if user has specific badge
  hasBadge(profile, badgeId) {
    return profile.badges.some(badge => badge.id === badgeId);
  }

  // Create achievement object
  createAchievement(id, name, description, category, rarity, points) {
    return {
      id,
      name,
      description,
      category,
      rarity,
      points,
      unlockedAt: new Date(),
      progress: 100,
      maxProgress: 100
    };
  }

  // Create badge object
  createBadge(id, name, icon, description, category, rarity) {
    return {
      id,
      name,
      icon,
      description,
      category,
      rarity,
      earnedAt: new Date(),
      isActive: true
    };
  }

  // Get leaderboard data
  getLeaderboard(profiles, type) {
    return profiles
      .map(profile => ({
        ...profile,
        socialScore: this.calculateSocialScore(profile)
      }))
      .sort((a, b) => {
        switch (type) {
          case 'social':
            return b.socialScore - a.socialScore;
          case 'matches':
            return b.datingActivity.totalMatches - a.datingActivity.totalMatches;
          case 'conversations':
            return b.datingActivity.conversationsStarted - a.datingActivity.conversationsStarted;
          case 'dates':
            return b.datingActivity.datesCompleted - a.datingActivity.datesCompleted;
          default:
            return b.socialScore - a.socialScore;
        }
      });
  }

  // Get daily challenges
  getDailyChallenges(profile) {
    const challenges = [
      {
        id: 'daily_login',
        title: 'Daily Login',
        description: 'Log in to the app today',
        reward: 10,
        completed: false
      },
      {
        id: 'send_message',
        title: 'Send a Message',
        description: 'Send a message to a match',
        reward: 15,
        completed: false
      },
      {
        id: 'update_profile',
        title: 'Update Profile',
        description: 'Add new photos or update bio',
        reward: 20,
        completed: false
      }
    ];

    return challenges;
  }

  // Get weekly challenges
  getWeeklyChallenges(profile) {
    const challenges = [
      {
        id: 'make_matches',
        title: 'Match Maker',
        description: 'Make 5 new matches this week',
        reward: 100,
        progress: profile.datingActivity.totalMatches,
        target: 5,
        completed: false
      },
      {
        id: 'start_conversations',
        title: 'Conversation Starter',
        description: 'Start 3 conversations this week',
        reward: 75,
        progress: profile.datingActivity.conversationsStarted,
        target: 3,
        completed: false
      },
      {
        id: 'complete_dates',
        title: 'Date Night',
        description: 'Complete 2 dates this week',
        reward: 150,
        progress: profile.datingActivity.datesCompleted,
        target: 2,
        completed: false
      }
    ];

    return challenges;
  }
}
