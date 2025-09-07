// Core User Types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  profileImage?: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Enhanced Founder Profile Types
export interface FounderProfile {
  id: string;
  userId: string;
  
  // Basic Information
  title: string; // CEO, CTO, COO, etc.
  company: string;
  companyStage: CompanyStage;
  industry: Industry;
  location: string;
  timezone: string;
  
  // Personal Branding
  bio: string;
  vision: string;
  mission: string;
  values: string[];
  personality: PersonalityTraits;
  
  // Professional Details
  skills: Skill[];
  achievements: Achievement[];
  experience: WorkExperience[];
  education: Education[];
  certifications: Certification[];
  
  // Company Information
  funding: FundingInfo;
  teamSize: number;
  companyMetrics: CompanyMetrics;
  companyCulture: CompanyCulture;
  
  // Multimedia Content
  media: MediaContent;
  
  // Social Proof & Verification
  verification: VerificationStatus;
  endorsements: Endorsement[];
  recommendations: Recommendation[];
  
  // Preferences & Goals
  lookingFor: LookingFor;
  availability: Availability;
  goals: Goal[];
  
  // Social Links
  socialLinks: SocialLinks;
  
  // Analytics & Insights
  analytics: ProfileAnalytics;
  
  // System Fields
  isActive: boolean;
  isPublic: boolean;
  completionScore: number;
  lastActive: Date;
  createdAt: Date;
  updatedAt: Date;
}

// Enums and Union Types
export type CompanyStage = 
  | 'idea'
  | 'mvp'
  | 'seed'
  | 'series-a'
  | 'series-b'
  | 'series-c'
  | 'growth'
  | 'exit'
  | 'enterprise';

export type Industry = 
  | 'fintech'
  | 'healthtech'
  | 'edtech'
  | 'saas'
  | 'ecommerce'
  | 'ai-ml'
  | 'blockchain'
  | 'biotech'
  | 'cleantech'
  | 'hardware'
  | 'media'
  | 'real-estate'
  | 'sustainability'
  | 'other';

export type FounderArchetype = 
  | 'hacker'
  | 'hustler'
  | 'designer'
  | 'strategist'
  | 'operator'
  | 'visionary';

export type Availability = 
  | 'actively-looking'
  | 'open-to-opportunities'
  | 'not-looking'
  | 'exploring';

// Enhanced Profile Types
export interface PersonalityTraits {
  leadership: number; // 1-10
  creativity: number;
  riskTolerance: number;
  communication: number;
  adaptability: number;
  workStyle: 'collaborative' | 'independent' | 'mixed';
  decisionMaking: 'data-driven' | 'intuitive' | 'balanced';
  conflictResolution: 'direct' | 'diplomatic' | 'avoidant';
}

export interface WorkExperience {
  id: string;
  company: string;
  title: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  isCurrent: boolean;
  description: string;
  achievements: string[];
  skills: string[];
  companySize: 'startup' | 'small' | 'medium' | 'large' | 'enterprise';
  industry: Industry;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: Date;
  endDate?: Date;
  gpa?: number;
  achievements: string[];
  activities: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: Date;
  expiryDate?: Date;
  credentialId?: string;
  verificationUrl?: string;
}

export interface CompanyMetrics {
  revenue?: number;
  monthlyRecurringRevenue?: number;
  customerCount?: number;
  growthRate?: number;
  burnRate?: number;
  runway?: number;
  valuation?: number;
  lastUpdated: Date;
}

export interface CompanyCulture {
  values: string[];
  workEnvironment: 'remote' | 'hybrid' | 'office';
  teamSize: string;
  diversity: number; // 1-10
  workLifeBalance: number; // 1-10
  perks: string[];
  benefits: string[];
}

export interface MediaContent {
  profilePhotos: ProfilePhoto[];
  coverPhoto?: string;
  pitchVideo?: PitchVideo;
  companyPhotos: CompanyPhoto[];
  documents: Document[];
  socialProof: SocialProof[];
}

export interface ProfilePhoto {
  id: string;
  url: string;
  isPrimary: boolean;
  caption?: string;
  uploadedAt: Date;
  verified: boolean;
}

export interface PitchVideo {
  id: string;
  url: string;
  thumbnail: string;
  duration: number;
  description: string;
  uploadedAt: Date;
}

export interface CompanyPhoto {
  id: string;
  url: string;
  caption: string;
  category: 'office' | 'team' | 'product' | 'event' | 'other';
  uploadedAt: Date;
}

export interface Document {
  id: string;
  name: string;
  url: string;
  type: 'pitch-deck' | 'business-plan' | 'financials' | 'legal' | 'other';
  size: number;
  uploadedAt: Date;
  isPublic: boolean;
}

export interface SocialProof {
  id: string;
  type: 'press' | 'award' | 'testimonial' | 'media';
  title: string;
  description: string;
  url?: string;
  date: Date;
  source: string;
}

export interface VerificationStatus {
  email: boolean;
  phone: boolean;
  identity: boolean;
  company: boolean;
  funding: boolean;
  achievements: boolean;
  overallScore: number;
  verifiedAt?: Date;
}

export interface Endorsement {
  id: string;
  endorserId: string;
  endorserName: string;
  endorserTitle: string;
  endorserCompany: string;
  skill: string;
  message: string;
  relationship: 'colleague' | 'mentor' | 'investor' | 'customer' | 'other';
  createdAt: Date;
}

export interface Recommendation {
  id: string;
  recommenderId: string;
  recommenderName: string;
  recommenderTitle: string;
  recommenderCompany: string;
  message: string;
  relationship: 'colleague' | 'mentor' | 'investor' | 'customer' | 'other';
  rating: number; // 1-5
  createdAt: Date;
}

export interface Goal {
  id: string;
  title: string;
  description: string;
  category: 'career' | 'business' | 'personal' | 'financial';
  priority: 'high' | 'medium' | 'low';
  targetDate?: Date;
  progress: number; // 0-100
  createdAt: Date;
}

export interface SocialLinks {
  website?: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  angelList?: string;
  crunchbase?: string;
  medium?: string;
  youtube?: string;
  instagram?: string;
  facebook?: string;
}

export interface ProfileAnalytics {
  views: number;
  likes: number;
  shares: number;
  messages: number;
  connections: number;
  profileCompleteness: number;
  lastViewed: Date;
  topSkills: string[];
  topIndustries: string[];
  engagementScore: number;
}

// Supporting Types
export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: SkillLevel;
}

export type SkillCategory = 
  | 'technical'
  | 'business'
  | 'design'
  | 'marketing'
  | 'operations'
  | 'leadership'
  | 'personal';

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface Achievement {
  id: string;
  title: string;
  description: string;
  year: number;
  category: AchievementCategory;
}

export type AchievementCategory = 
  | 'funding'
  | 'product'
  | 'growth'
  | 'team'
  | 'awards'
  | 'partnerships'
  | 'exit'
  | 'personal';

export interface FundingInfo {
  totalRaised: number;
  lastRound: string;
  investors: string[];
  valuation?: number;
}

export interface LookingFor {
  roles: string[];
  industries: Industry[];
  stages: CompanyStage[];
  locations: string[];
  archetypes: FounderArchetype[];
}

// Matching and Compatibility Types
export interface CompatibilityScore {
  id: string;
  founderId: string;
  matchId: string;
  overallScore: number;
  visionAlignment: number;
  skillComplementarity: number;
  industryFit: number;
  stageCompatibility: number;
  locationProximity: number;
  valuesAlignment: number;
  calculatedAt: Date;
}

export interface Match {
  id: string;
  founderId: string;
  matchId: string;
  compatibilityScore: number;
  status: MatchStatus;
  mutualConnections: string[];
  sharedInterests: string[];
  introductionMessage?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type MatchStatus = 
  | 'pending'
  | 'accepted'
  | 'declined'
  | 'connected'
  | 'blocked';

// Discovery and Networking Types
export interface DiscoveryProfile {
  founder: FounderProfile;
  compatibilityScore: number;
  mutualConnections: number;
  sharedInterests: string[];
  introductionSuggestions: string[];
}

export interface WarmIntroduction {
  id: string;
  fromFounderId: string;
  toFounderId: string;
  message: string;
  status: IntroductionStatus;
  createdAt: Date;
}

export type IntroductionStatus = 
  | 'pending'
  | 'accepted'
  | 'declined'
  | 'expired';

// Events and Networking
export interface FounderEvent {
  id: string;
  title: string;
  description: string;
  type: EventType;
  location: string;
  virtualLink?: string;
  startDate: Date;
  endDate: Date;
  maxAttendees: number;
  attendees: string[];
  organizerId: string;
  isActive: boolean;
  createdAt: Date;
}

export type EventType = 
  | 'networking'
  | 'pitch-event'
  | 'workshop'
  | 'retreat'
  | 'conference'
  | 'mastermind';

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Form Types
export interface CreateFounderProfileData {
  title: string;
  company: string;
  companyStage: CompanyStage;
  industry: Industry;
  location: string;
  bio: string;
  vision: string;
  values: string[];
  skills: Omit<Skill, 'id'>[];
  achievements: Omit<Achievement, 'id'>[];
  funding: FundingInfo;
  teamSize: number;
  lookingFor: LookingFor;
  availability: Availability;
  pitchDeck?: string;
  linkedInUrl?: string;
  twitterUrl?: string;
  website?: string;
}

export type UpdateFounderProfileData = Partial<CreateFounderProfileData>;

// Search and Filter Types
export interface SearchFilters {
  industries?: Industry[];
  stages?: CompanyStage[];
  locations?: string[];
  archetypes?: FounderArchetype[];
  skills?: string[];
  minCompatibilityScore?: number;
  availability?: Availability[];
}

export interface SearchQuery {
  query?: string;
  filters: SearchFilters;
  page: number;
  limit: number;
  sortBy?: 'compatibility' | 'recent' | 'mutual-connections';
  sortOrder?: 'asc' | 'desc';
}
