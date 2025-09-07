import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { 
  User, 
  Building2, 
  MapPin, 
  Target, 
  Award, 
  TrendingUp,
  Edit3,
  Save,
  X,
  Star,
  Users,
  ExternalLink
} from 'lucide-react';
import { CompanyStage, Industry } from '../types';

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  
  // Get profile from Redux store
  const { profile: reduxProfile, isLoading } = useSelector((state: RootState) => state.profile);
  
  // Use Redux profile or fallback to default
  const profile: any = reduxProfile || {
    id: '1',
    userId: '1',
    title: 'CEO & Co-Founder',
    company: 'TechFlow Solutions',
    companyStage: 'series-a',
    industry: 'saas',
    location: 'San Francisco, CA',
    timezone: 'America/Los_Angeles',
    mission: 'To democratize AI-powered workflow automation for businesses of all sizes.',
    bio: 'Serial entrepreneur with 10+ years building B2B SaaS platforms. Previously founded two companies that achieved successful exits.',
    vision: 'Democratizing AI-powered workflow automation for businesses of all sizes.',
    values: ['Innovation', 'Transparency', 'Customer Success', 'Work-Life Balance'],
    personality: {
      leadership: 9,
      creativity: 8,
      riskTolerance: 7,
      communication: 9,
      adaptability: 8,
      workStyle: 'collaborative' as const,
      decisionMaking: 'data-driven' as const,
      conflictResolution: 'direct' as const
    },
    skills: [
      { id: '1', name: 'Product Strategy', category: 'business', level: 'expert' },
      { id: '2', name: 'Team Building', category: 'leadership', level: 'expert' },
      { id: '3', name: 'Fundraising', category: 'business', level: 'advanced' },
      { id: '4', name: 'JavaScript', category: 'technical', level: 'intermediate' }
    ],
    achievements: [
      { id: '1', title: 'Raised $15M Series A', description: 'Led successful Series A round', year: 2023, category: 'funding' },
      { id: '2', title: 'Built 50+ person team', description: 'Scaled team from 5 to 50+ employees', year: 2022, category: 'team' },
      { id: '3', title: 'Product of the Year', description: 'Awarded by TechCrunch', year: 2023, category: 'awards' }
    ],
    experience: [],
    education: [],
    certifications: [],
    funding: { totalRaised: 15000000, lastRound: 'Series A', investors: ['Sequoia', 'Andreessen Horowitz'] },
    teamSize: 45,
    companyMetrics: {
      revenue: 5000000,
      monthlyRecurringRevenue: 500000,
      customerCount: 2500,
      growthRate: 15,
      lastUpdated: new Date()
    },
    companyCulture: {
      values: ['Innovation', 'Transparency', 'Customer Success'],
      workEnvironment: 'hybrid' as const,
      teamSize: '45',
      diversity: 8,
      workLifeBalance: 7,
      perks: ['Health Insurance', 'Stock Options', 'Flexible Hours'],
      benefits: ['401k', 'PTO', 'Learning Budget']
    },
    media: {
      profilePhotos: [],
      companyPhotos: [],
      documents: [],
      socialProof: []
    },
    verification: {
      email: true,
      phone: true,
      identity: true,
      company: true,
      funding: true,
      achievements: true,
      overallScore: 0.9,
      verifiedAt: new Date()
    },
    endorsements: [],
    recommendations: [],
    goals: [],
    lookingFor: {
      roles: ['CTO', 'VP Engineering', 'Head of Product'],
      industries: ['saas', 'ai-ml'],
      stages: ['series-a', 'series-b'],
      locations: ['San Francisco', 'Remote'],
      archetypes: ['hacker', 'designer']
    },
    availability: 'actively-looking',
    socialLinks: {
      website: 'https://techflow.com',
      linkedin: 'https://linkedin.com/in/ceo'
    },
    analytics: {
      views: 1250,
      likes: 89,
      shares: 23,
      messages: 156,
      connections: 45,
      profileCompleteness: 85,
      lastViewed: new Date(),
      topSkills: ['Product Strategy', 'Team Building', 'Fundraising'],
      topIndustries: ['saas', 'ai-ml'],
      engagementScore: 8.5
    } as any,
    isActive: true,
    isPublic: true,
    completionScore: 85,
    lastActive: new Date(),
    createdAt: new Date(),
    updatedAt: new Date()
  };

  const getStageColor = (stage: CompanyStage) => {
    const colors = {
      'idea': 'bg-gray-100 text-gray-800',
      'mvp': 'bg-blue-100 text-blue-800',
      'seed': 'bg-green-100 text-green-800',
      'series-a': 'bg-purple-100 text-purple-800',
      'series-b': 'bg-orange-100 text-orange-800',
      'series-c': 'bg-red-100 text-red-800',
      'growth': 'bg-indigo-100 text-indigo-800',
      'exit': 'bg-yellow-100 text-yellow-800',
      'enterprise': 'bg-pink-100 text-pink-800'
    };
    return colors[stage] || 'bg-gray-100 text-gray-800';
  };

  const getIndustryIcon = (industry: Industry) => {
    const icons: Record<Industry, string> = {
      'fintech': '💰',
      'healthtech': '🏥',
      'edtech': '🎓',
      'saas': '☁️',
      'ecommerce': '🛒',
      'ai-ml': '🤖',
      'blockchain': '⛓️',
      'biotech': '🧬',
      'cleantech': '🌱',
      'hardware': '🔧',
      'media': '📺',
      'real-estate': '🏠',
      'sustainability': '🌱',
      'other': '💼'
    };
    return icons[industry] || '💼';
  };

  const handleSave = () => {
    // Implement save logic
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center py-20">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6 animate-pulse flex items-center justify-center">
            <User className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Loading Profile...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
              {profile.company.charAt(0)}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                {profile.company}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-3">
                {profile.title}
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-600 dark:text-gray-400">
                  <span>{getIndustryIcon(profile.industry)}</span>
                  <span className="capitalize">{profile.industry}</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStageColor(profile.companyStage)}`}>
                  {profile.companyStage.replace('-', ' ').toUpperCase()}
                </span>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors flex items-center space-x-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Save</span>
                </button>
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors flex items-center space-x-2"
                >
                  <X className="w-4 h-4" />
                  <span>Cancel</span>
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center space-x-2"
              >
                <Edit3 className="w-4 h-4" />
                <span>Edit Profile</span>
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
              ${(profile.funding.totalRaised / 1000000).toFixed(1)}M
            </div>
            <div className="text-gray-600 dark:text-gray-400">Total Raised</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
              {profile.teamSize}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Team Size</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
              {profile.achievements.length}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Achievements</div>
          </div>
        </div>
      </div>

      {/* Bio and Vision */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
            <User className="w-5 h-5 mr-2" />
            About
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            {profile.bio}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
            <Target className="w-5 h-5 mr-2" />
            Vision
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            {profile.vision}
          </p>
        </div>
      </div>

      {/* Skills and Values */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
            <Award className="w-5 h-5 mr-2" />
            Key Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill: any) => (
              <span
                key={skill.id}
                className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
            <Star className="w-5 h-5 mr-2" />
            Core Values
          </h3>
          <div className="flex flex-wrap gap-2">
            {profile.values.map((value: string, index: number) => (
              <span
                key={index}
                className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm"
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2" />
          Key Achievements
        </h3>
        <div className="space-y-4">
          {profile.achievements.map((achievement: any) => (
            <div key={achievement.id} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {achievement.description} • {achievement.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Looking For */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
          <Users className="w-5 h-5 mr-2" />
          Looking For
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-gray-800 dark:text-white mb-2">Roles</h4>
            <div className="flex flex-wrap gap-2">
              {profile.lookingFor.roles.map((role: string, index: number) => (
                <span
                  key={index}
                  className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-2 py-1 rounded-full text-sm"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 dark:text-white mb-2">Industries</h4>
            <div className="flex flex-wrap gap-2">
              {profile.lookingFor.industries.map((industry: string, index: number) => (
                <span
                  key={index}
                  className="bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 px-2 py-1 rounded-full text-sm"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
          <ExternalLink className="w-5 h-5 mr-2" />
          Links
        </h3>
        <div className="flex space-x-4">
          {profile.socialLinks?.website && (
            <a
              href={profile.socialLinks.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center space-x-1"
            >
              <Building2 className="w-4 h-4" />
              <span>Website</span>
            </a>
          )}
          {profile.socialLinks?.linkedin && (
            <a
              href={profile.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center space-x-1"
            >
              <User className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
