// Core User Types
export const User = {
  id: '',
  email: '',
  firstName: '',
  lastName: '',
  profileImage: '',
  isVerified: false,
  psychologicalProfile: null,
  gamificationProfile: null,
  safetyScore: 0,
  premiumTier: 'free',
  globalLocation: null,
  createdAt: new Date(),
  updatedAt: new Date()
};

// Enhanced Founder Profile Types
export const FounderProfile = {
  id: '',
  userId: '',
  title: '',
  company: '',
  companyStage: '',
  industry: '',
  location: '',
  timezone: '',
  bio: '',
  vision: '',
  mission: '',
  values: [],
  personality: null,
  skills: [],
  achievements: [],
  experience: [],
  education: [],
  certifications: [],
  funding: null,
  teamSize: 0,
  companyMetrics: null,
  companyCulture: null,
  media: null,
  verification: null,
  endorsements: [],
  recommendations: [],
  lookingFor: null,
  availability: '',
  goals: [],
  socialLinks: null,
  analytics: null,
  isActive: true,
  isPublic: true,
  completionScore: 0,
  lastActive: new Date(),
  createdAt: new Date(),
  updatedAt: new Date()
};

// Enums and Union Types
export const CompanyStage = {
  IDEA: 'idea',
  MVP: 'mvp',
  SEED: 'seed',
  SERIES_A: 'series-a',
  SERIES_B: 'series-b',
  SERIES_C: 'series-c',
  GROWTH: 'growth',
  EXIT: 'exit',
  ENTERPRISE: 'enterprise'
};

export const Industry = {
  FINTECH: 'fintech',
  HEALTHTECH: 'healthtech',
  EDTECH: 'edtech',
  SAAS: 'saas',
  ECOMMERCE: 'ecommerce',
  AI_ML: 'ai-ml',
  BLOCKCHAIN: 'blockchain',
  BIOTECH: 'biotech',
  CLEANTECH: 'cleantech',
  HARDWARE: 'hardware',
  MEDIA: 'media',
  REAL_ESTATE: 'real-estate',
  SUSTAINABILITY: 'sustainability',
  OTHER: 'other'
};

export const FounderArchetype = {
  HACKER: 'hacker',
  HUSTLER: 'hustler',
  DESIGNER: 'designer',
  STRATEGIST: 'strategist',
  OPERATOR: 'operator',
  VISIONARY: 'visionary'
};

export const Availability = {
  ACTIVELY_LOOKING: 'actively-looking',
  OPEN_TO_OPPORTUNITIES: 'open-to-opportunities',
  NOT_LOOKING: 'not-looking',
  EXPLORING: 'exploring'
};

// Enhanced Profile Types
export const PersonalityTraits = {
  leadership: 0,
  creativity: 0,
  riskTolerance: 0,
  communication: 0,
  adaptability: 0,
  workStyle: 'collaborative',
  decisionMaking: 'data-driven',
  conflictResolution: 'direct'
};

export const WorkExperience = {
  id: '',
  company: '',
  title: '',
  location: '',
  startDate: new Date(),
  endDate: null,
  isCurrent: false,
  description: '',
  achievements: [],
  skills: [],
  companySize: 'startup',
  industry: ''
};

export const Education = {
  id: '',
  institution: '',
  degree: '',
  field: '',
  startDate: new Date(),
  endDate: null,
  gpa: null,
  achievements: [],
  activities: []
};

export const Certification = {
  id: '',
  name: '',
  issuer: '',
  issueDate: new Date(),
  expiryDate: null,
  credentialId: '',
  verificationUrl: ''
};

export const CompanyMetrics = {
  revenue: null,
  monthlyRecurringRevenue: null,
  customerCount: null,
  growthRate: null,
  burnRate: null,
  runway: null,
  valuation: null,
  lastUpdated: new Date()
};

export const CompanyCulture = {
  values: [],
  workEnvironment: 'remote',
  teamSize: '',
  diversity: 0,
  workLifeBalance: 0,
  perks: [],
  benefits: []
};

export const MediaContent = {
  profilePhotos: [],
  coverPhoto: '',
  pitchVideo: null,
  companyPhotos: [],
  documents: [],
  socialProof: []
};

export const ProfilePhoto = {
  id: '',
  url: '',
  isPrimary: false,
  caption: '',
  uploadedAt: new Date(),
  verified: false
};

export const PitchVideo = {
  id: '',
  url: '',
  thumbnail: '',
  duration: 0,
  description: '',
  uploadedAt: new Date()
};

export const CompanyPhoto = {
  id: '',
  url: '',
  caption: '',
  category: 'office',
  uploadedAt: new Date()
};

export const Document = {
  id: '',
  name: '',
  url: '',
  type: 'pitch-deck',
  size: 0,
  uploadedAt: new Date(),
  isPublic: false
};

export const SocialProof = {
  id: '',
  type: 'press',
  title: '',
  description: '',
  url: '',
  date: new Date(),
  source: ''
};

export const VerificationStatus = {
  email: false,
  phone: false,
  identity: false,
  company: false,
  funding: false,
  achievements: false,
  overallScore: 0,
  verifiedAt: null
};

export const Endorsement = {
  id: '',
  endorserId: '',
  endorserName: '',
  endorserTitle: '',
  endorserCompany: '',
  skill: '',
  message: '',
  relationship: 'colleague',
  createdAt: new Date()
};

export const Recommendation = {
  id: '',
  recommenderId: '',
  recommenderName: '',
  recommenderTitle: '',
  recommenderCompany: '',
  message: '',
  relationship: 'colleague',
  rating: 0,
  createdAt: new Date()
};

export const Goal = {
  id: '',
  title: '',
  description: '',
  category: 'career',
  priority: 'high',
  targetDate: null,
  progress: 0,
  createdAt: new Date()
};

export const SocialLinks = {
  website: '',
  linkedin: '',
  twitter: '',
  github: '',
  angelList: '',
  crunchbase: '',
  medium: '',
  youtube: '',
  instagram: '',
  facebook: ''
};

export const ProfileAnalytics = {
  views: 0,
  likes: 0,
  shares: 0,
  messages: 0,
  connections: 0,
  profileCompleteness: 0,
  lastViewed: new Date(),
  topSkills: [],
  topIndustries: [],
  engagementScore: 0
};

// Supporting Types
export const Skill = {
  id: '',
  name: '',
  category: 'technical',
  level: 'beginner'
};

export const SkillCategory = {
  TECHNICAL: 'technical',
  BUSINESS: 'business',
  DESIGN: 'design',
  MARKETING: 'marketing',
  OPERATIONS: 'operations',
  LEADERSHIP: 'leadership',
  PERSONAL: 'personal'
};

export const SkillLevel = {
  BEGINNER: 'beginner',
  INTERMEDIATE: 'intermediate',
  ADVANCED: 'advanced',
  EXPERT: 'expert'
};

export const Achievement = {
  id: '',
  title: '',
  description: '',
  year: 0,
  category: 'funding'
};

export const AchievementCategory = {
  FUNDING: 'funding',
  PRODUCT: 'product',
  GROWTH: 'growth',
  TEAM: 'team',
  AWARDS: 'awards',
  PARTNERSHIPS: 'partnerships',
  EXIT: 'exit',
  PERSONAL: 'personal',
  DATING: 'dating',
  SOCIAL: 'social',
  PROFILE: 'profile',
  SAFETY: 'safety',
  PREMIUM: 'premium',
  COMMUNITY: 'community'
};

export const FundingInfo = {
  totalRaised: 0,
  lastRound: '',
  investors: [],
  valuation: null
};

export const LookingFor = {
  roles: [],
  industries: [],
  stages: [],
  locations: [],
  archetypes: []
};

// Matching and Compatibility Types
export const CompatibilityScore = {
  id: '',
  founderId: '',
  matchId: '',
  overallScore: 0,
  visionAlignment: 0,
  skillComplementarity: 0,
  industryFit: 0,
  stageCompatibility: 0,
  locationProximity: 0,
  valuesAlignment: 0,
  calculatedAt: new Date()
};

export const Match = {
  id: '',
  founderId: '',
  matchId: '',
  compatibilityScore: 0,
  status: 'pending',
  mutualConnections: [],
  sharedInterests: [],
  introductionMessage: '',
  createdAt: new Date(),
  updatedAt: new Date()
};

export const MatchStatus = {
  PENDING: 'pending',
  ACCEPTED: 'accepted',
  DECLINED: 'declined',
  CONNECTED: 'connected',
  BLOCKED: 'blocked'
};

// Discovery and Networking Types
export const DiscoveryProfile = {
  founder: null,
  compatibilityScore: 0,
  mutualConnections: 0,
  sharedInterests: [],
  introductionSuggestions: []
};

export const WarmIntroduction = {
  id: '',
  fromFounderId: '',
  toFounderId: '',
  message: '',
  status: 'pending',
  createdAt: new Date()
};

export const IntroductionStatus = {
  PENDING: 'pending',
  ACCEPTED: 'accepted',
  DECLINED: 'declined',
  EXPIRED: 'expired'
};

// Events and Networking
export const FounderEvent = {
  id: '',
  title: '',
  description: '',
  type: 'networking',
  location: '',
  virtualLink: '',
  startDate: new Date(),
  endDate: new Date(),
  maxAttendees: 0,
  attendees: [],
  organizerId: '',
  isActive: true,
  createdAt: new Date()
};

export const EventType = {
  NETWORKING: 'networking',
  PITCH_EVENT: 'pitch-event',
  WORKSHOP: 'workshop',
  RETREAT: 'retreat',
  CONFERENCE: 'conference',
  MASTERMIND: 'mastermind'
};

// API Response Types
export const ApiResponse = {
  success: false,
  data: null,
  error: '',
  message: ''
};

export const AuthResponse = {
  user: null,
  accessToken: '',
  refreshToken: ''
};

export const PaginatedResponse = {
  data: [],
  pagination: {
    page: 0,
    limit: 0,
    total: 0,
    totalPages: 0
  }
};

// Form Types
export const CreateFounderProfileData = {
  title: '',
  company: '',
  companyStage: '',
  industry: '',
  location: '',
  bio: '',
  vision: '',
  values: [],
  skills: [],
  achievements: [],
  funding: null,
  teamSize: 0,
  lookingFor: null,
  availability: '',
  pitchDeck: '',
  linkedInUrl: '',
  twitterUrl: '',
  website: ''
};

// Search and Filter Types
export const SearchFilters = {
  industries: [],
  stages: [],
  locations: [],
  archetypes: [],
  skills: [],
  minCompatibilityScore: 0,
  availability: []
};

export const SearchQuery = {
  query: '',
  filters: null,
  page: 0,
  limit: 0,
  sortBy: 'compatibility',
  sortOrder: 'desc'
};

// AI-Powered Psychological Profiling Types
export const PsychologicalProfile = {
  id: '',
  userId: '',
  bigFive: null,
  attachmentStyle: 'secure',
  loveLanguage: [],
  communicationStyle: 'direct',
  conflictResolution: 'collaborative',
  relationshipGoals: [],
  datingStyle: 'traditional',
  intimacyLevel: 'all',
  socialEnergy: 'ambivert',
  personalityInsights: [],
  compatibilityFactors: [],
  growthAreas: [],
  strengths: [],
  behavioralPatterns: [],
  emotionalIntelligence: null,
  overallScore: 0,
  confidence: 0,
  authenticity: 0,
  emotionalMaturity: 0,
  createdAt: new Date(),
  updatedAt: new Date()
};

export const BigFiveTraits = {
  openness: 0,
  conscientiousness: 0,
  extraversion: 0,
  agreeableness: 0,
  neuroticism: 0
};

export const AttachmentStyle = {
  SECURE: 'secure',
  ANXIOUS: 'anxious',
  AVOIDANT: 'avoidant',
  DISORGANIZED: 'disorganized'
};

export const LoveLanguage = {
  WORDS: 'words',
  ACTS: 'acts',
  GIFTS: 'gifts',
  TIME: 'time',
  TOUCH: 'touch'
};

export const CommunicationStyle = {
  DIRECT: 'direct',
  DIPLOMATIC: 'diplomatic',
  ANALYTICAL: 'analytical',
  EXPRESSIVE: 'expressive'
};

export const ConflictResolutionStyle = {
  COLLABORATIVE: 'collaborative',
  COMPETITIVE: 'competitive',
  ACCOMMODATING: 'accommodating',
  AVOIDANT: 'avoidant',
  COMPROMISING: 'compromising'
};

export const RelationshipGoal = {
  MARRIAGE: 'marriage',
  LONG_TERM: 'long-term',
  CASUAL: 'casual',
  EXPLORING: 'exploring',
  FRIENDSHIP: 'friendship'
};

export const DatingStyle = {
  TRADITIONAL: 'traditional',
  MODERN: 'modern',
  ADVENTUROUS: 'adventurous',
  LOW_KEY: 'low-key',
  EXCLUSIVE: 'exclusive'
};

export const IntimacyLevel = {
  PHYSICAL: 'physical',
  EMOTIONAL: 'emotional',
  INTELLECTUAL: 'intellectual',
  SPIRITUAL: 'spiritual',
  ALL: 'all'
};

export const SocialEnergy = {
  INTROVERT: 'introvert',
  EXTROVERT: 'extrovert',
  AMBIVERT: 'ambivert'
};

export const PersonalityInsight = {
  id: '',
  category: '',
  insight: '',
  confidence: 0,
  evidence: [],
  aiGenerated: false
};

export const CompatibilityFactor = {
  id: '',
  factor: '',
  importance: 0,
  description: '',
  aiReasoning: ''
};

export const GrowthArea = {
  id: '',
  area: '',
  currentLevel: 0,
  potentialLevel: 0,
  suggestions: []
};

export const BehavioralPattern = {
  id: '',
  pattern: '',
  frequency: 0,
  context: '',
  aiAnalysis: ''
};

export const EmotionalIntelligence = {
  selfAwareness: 0,
  selfRegulation: 0,
  motivation: 0,
  empathy: 0,
  socialSkills: 0,
  overall: 0
};

// Gamification System Types
export const GamificationProfile = {
  id: '',
  userId: '',
  level: 1,
  experience: 0,
  experienceToNext: 100,
  achievements: [],
  badges: [],
  streakDays: 0,
  socialScore: 0,
  communityRank: 0,
  influencePoints: 0,
  datingActivity: null,
  matchQuality: 0,
  conversationQuality: 0,
  unlockedFeatures: [],
  premiumCredits: 0,
  specialAccess: [],
  createdAt: new Date(),
  updatedAt: new Date()
};

export const Badge = {
  id: '',
  name: '',
  icon: '',
  description: '',
  category: 'personality',
  rarity: 'bronze',
  earnedAt: new Date(),
  isActive: true
};

export const AchievementRarity = {
  COMMON: 'common',
  UNCOMMON: 'uncommon',
  RARE: 'rare',
  EPIC: 'epic',
  LEGENDARY: 'legendary'
};

export const BadgeCategory = {
  PERSONALITY: 'personality',
  ACTIVITY: 'activity',
  ACHIEVEMENT: 'achievement',
  SPECIAL: 'special',
  SEASONAL: 'seasonal'
};

export const BadgeRarity = {
  BRONZE: 'bronze',
  SILVER: 'silver',
  GOLD: 'gold',
  PLATINUM: 'platinum',
  DIAMOND: 'diamond'
};

export const DatingActivity = {
  totalMatches: 0,
  qualityMatches: 0,
  conversationsStarted: 0,
  datesScheduled: 0,
  datesCompleted: 0,
  relationshipsFormed: 0,
  lastActive: new Date()
};

// Premium & Safety Types
export const PremiumTier = {
  FREE: 'free',
  SILVER: 'silver',
  GOLD: 'gold',
  PLATINUM: 'platinum',
  DIAMOND: 'diamond'
};

export const GlobalLocation = {
  country: '',
  city: '',
  timezone: '',
  coordinates: {
    lat: 0,
    lng: 0
  },
  region: '',
  language: ''
};

export const SafetyProfile = {
  id: '',
  userId: '',
  verification: null,
  backgroundCheck: null,
  identityVerification: null,
  overallSafetyScore: 0,
  trustScore: 0,
  authenticityScore: 0,
  safetySettings: null,
  reportingHistory: [],
  blockedUsers: [],
  aiSafetyAnalysis: null,
  riskFactors: [],
  createdAt: new Date(),
  updatedAt: new Date()
};

export const BackgroundCheck = {
  status: 'pending',
  provider: '',
  completedAt: null,
  results: null
};

export const BackgroundCheckResult = {
  criminalRecord: false,
  identityVerified: false,
  socialMediaAnalysis: 0,
  riskScore: 0,
  flags: [],
  details: ''
};

export const IdentityVerification = {
  status: 'pending',
  method: 'government_id',
  verifiedAt: null,
  confidence: 0
};

export const SafetySettings = {
  allowMessagesFrom: 'matches_only',
  shareLocation: false,
  shareContactInfo: false,
  requireVideoVerification: false,
  blockSuspiciousUsers: false
};

export const Report = {
  id: '',
  reporterId: '',
  reportedUserId: '',
  reason: 'harassment',
  description: '',
  status: 'pending',
  createdAt: new Date(),
  resolvedAt: null
};

export const ReportReason = {
  HARASSMENT: 'harassment',
  FAKE_PROFILE: 'fake_profile',
  INAPPROPRIATE_CONTENT: 'inappropriate_content',
  SPAM: 'spam',
  SAFETY_CONCERN: 'safety_concern',
  OTHER: 'other'
};

export const AISafetyAnalysis = {
  riskLevel: 'low',
  confidence: 0,
  factors: [],
  recommendations: [],
  lastAnalyzed: new Date()
};

export const RiskFactor = {
  factor: '',
  severity: 'low',
  description: '',
  mitigation: ''
};

// Unique Matching System Types
export const UniqueMatch = {
  id: '',
  userId: '',
  matchId: '',
  aiCompatibility: null,
  psychologicalMatch: null,
  lifestyleMatch: null,
  cosmicAlignment: null,
  energyVibe: null,
  growthPotential: null,
  overallScore: 0,
  uniquenessScore: 0,
  longTermPotential: 0,
  matchInsights: [],
  conversationStarters: [],
  dateIdeas: [],
  status: 'pending',
  createdAt: new Date(),
  updatedAt: new Date()
};

export const AICompatibility = {
  overall: 0,
  personality: 0,
  values: 0,
  communication: 0,
  lifestyle: 0,
  goals: 0,
  emotional: 0,
  intellectual: 0,
  physical: 0,
  spiritual: 0
};

export const PsychologicalMatch = {
  attachmentCompatibility: 0,
  loveLanguageAlignment: 0,
  communicationCompatibility: 0,
  conflictResolutionMatch: 0,
  emotionalIntelligenceMatch: 0
};

export const LifestyleMatch = {
  dailyRoutine: 0,
  socialPreferences: 0,
  travelStyle: 0,
  workLifeBalance: 0,
  financialValues: 0,
  familyValues: 0
};

export const CosmicAlignment = {
  zodiacCompatibility: 0,
  lifePathNumbers: 0,
  chakraAlignment: 0,
  elementalBalance: 0,
  cosmicScore: 0
};

export const EnergyVibe = {
  energyLevel: 0,
  vibrationMatch: 0,
  auraCompatibility: 0,
  spiritualAlignment: 0,
  overallVibe: 0
};

export const GrowthPotential = {
  mutualGrowth: 0,
  challengeLevel: 0,
  supportPotential: 0,
  learningOpportunity: 0,
  evolutionScore: 0
};

export const MatchInsight = {
  id: '',
  category: '',
  insight: '',
  confidence: 0,
  aiGenerated: false
};

export const ConversationStarter = {
  id: '',
  question: '',
  category: '',
  difficulty: 'easy',
  aiGenerated: false
};

export const DateIdea = {
  id: '',
  title: '',
  description: '',
  category: '',
  cost: 'free',
  duration: '',
  location: '',
  aiGenerated: false
};
