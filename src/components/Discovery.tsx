import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import {
  Star,
  MapPin,
  Building2,
  Coffee,
  Sparkles,
  Camera,
  Music,
  Plane,
  Gamepad2,
  BookOpen,
  Palette,
  Dumbbell,
  ChefHat,
  Mountain,
  Car,
  Send,
  Eye,
  Lightbulb,
  XCircle,
  Heart,
  Award,
  Globe,
  Briefcase,
  GraduationCap,
  Zap,
  Shield,
  Linkedin,
  Twitter,
  ExternalLink,
  CheckCircle
} from 'lucide-react';
import { CompanyStage } from '../types';

const Discovery: React.FC = () => {
  // Get profiles from Redux store
  const { profiles: reduxProfiles, isLoading, error: reduxError } = useSelector((state: RootState) => state.discovery);
  
  const [selectedProfile, setSelectedProfile] = useState<any | null>(null);
  const [showPitchModal, setShowPitchModal] = useState(false);
  const [pitchContent, setPitchContent] = useState('');
  const [sentPitches, setSentPitches] = useState<string[]>([]);
  const [filterStage, setFilterStage] = useState<string>('all');
  const [filterIndustry, setFilterIndustry] = useState<string>('all');
  
  // Use Redux finalProfiles or fallback to mock data
  const loading = isLoading;
  const error = reduxError;

  // Enhanced mock data with LinkedIn-style profiles
  const mockProfiles: any[] = [
      {
        founder: {
          id: '1',
          userId: '1',
          title: 'CEO & Co-Founder',
          company: 'TechFlow Solutions',
        companyStage: 'series-a' as CompanyStage,
        industry: 'technology',
          location: 'San Francisco, CA',
        bio: 'Adventure-seeking entrepreneur who loves hiking, cooking, and building products that matter. When I\'m not coding, you\'ll find me exploring new trails or experimenting with fusion cuisine.',
        interests: ['Hiking', 'Coffee', 'Photography', 'Startups'],
        profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
        firstName: 'Alex',
        lastName: 'Chen',
        experience: [
          { role: 'CEO & Co-Founder', company: 'TechFlow Solutions', duration: '2 years' },
          { role: 'Senior Engineer', company: 'Google', duration: '4 years' },
          { role: 'Software Engineer', company: 'Microsoft', duration: '2 years' }
        ],
        education: [
          { degree: 'MS Computer Science', school: 'Stanford University', year: '2018' },
          { degree: 'BS Computer Science', school: 'UC Berkeley', year: '2016' }
          ],
          achievements: [
          { title: 'Forbes 30 Under 30', year: '2023' },
          { title: 'Series A Funding', amount: '$15M', year: '2023' }
        ],
        socialLinks: {
          linkedin: 'https://linkedin.com/in/alexchen',
          twitter: 'https://twitter.com/alexchen',
          website: 'https://techflow.com'
        },
        metrics: {
          connections: 2500,
        mutualConnections: 3,
          profileViews: 1200,
          posts: 45
        }
      },
      compatibilityScore: 92,
      mutualConnections: 3,
      sharedInterests: ['Startups', 'Technology', 'Innovation']
      },
      {
        founder: {
          id: '2',
          userId: '2',
          title: 'CTO & Co-Founder',
          company: 'HealthAI',
        companyStage: 'series-b' as CompanyStage,
        industry: 'healthcare',
          location: 'Boston, MA',
        bio: 'Passionate about using AI to save lives. When I\'m not in the lab, I\'m playing guitar, reading sci-fi, or trying new restaurants. Looking for co-founders who share my vision of democratizing healthcare.',
        interests: ['Music', 'Cooking', 'AI/ML', 'Healthcare'],
        profileImage: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
        firstName: 'Sarah',
        lastName: 'Johnson',
        experience: [
          { role: 'CTO & Co-Founder', company: 'HealthAI', duration: '3 years' },
          { role: 'AI Research Lead', company: 'MIT', duration: '2 years' },
          { role: 'Data Scientist', company: 'IBM Watson', duration: '3 years' }
        ],
        education: [
          { degree: 'PhD Artificial Intelligence', school: 'MIT', year: '2020' },
          { degree: 'MS Computer Science', school: 'Harvard', year: '2017' }
          ],
          achievements: [
          { title: 'MIT Technology Review Innovator', year: '2022' },
          { title: 'Series B Funding', amount: '$50M', year: '2023' }
        ],
        socialLinks: {
          linkedin: 'https://linkedin.com/in/sarahjohnson',
          twitter: 'https://twitter.com/sarahj_ai',
          website: 'https://healthai.com'
        },
        metrics: {
          connections: 3200,
        mutualConnections: 2,
          profileViews: 2100,
          posts: 67
        }
      },
      compatibilityScore: 88,
      mutualConnections: 2,
      sharedInterests: ['AI/ML', 'Healthcare', 'Innovation']
      },
      {
        founder: {
          id: '3',
          userId: '3',
          title: 'CEO & Founder',
          company: 'EcoTech',
        companyStage: 'seed' as CompanyStage,
        industry: 'sustainability',
          location: 'Austin, TX',
        bio: 'Environmentalist turned entrepreneur. I spend my weekends rock climbing, practicing yoga, and experimenting with sustainable living. Building the future of green technology, one innovation at a time.',
        interests: ['Rock Climbing', 'Yoga', 'Sustainability', 'Outdoor Sports'],
        profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
        firstName: 'Marcus',
        lastName: 'Rodriguez',
        experience: [
          { role: 'CEO & Founder', company: 'EcoTech', duration: '1 year' },
          { role: 'Sustainability Consultant', company: 'McKinsey', duration: '3 years' },
          { role: 'Environmental Engineer', company: 'Tesla', duration: '2 years' }
        ],
        education: [
          { degree: 'MBA', school: 'Wharton', year: '2021' },
          { degree: 'BS Environmental Engineering', school: 'UT Austin', year: '2018' }
          ],
          achievements: [
          { title: 'Seed Funding', amount: '$5M', year: '2023' },
          { title: 'Green Tech Award', year: '2023' }
        ],
        socialLinks: {
          linkedin: 'https://linkedin.com/in/marcusrodriguez',
          twitter: 'https://twitter.com/marcus_eco',
          website: 'https://ecotech.com'
        },
        metrics: {
          connections: 1800,
          mutualConnections: 1,
          profileViews: 890,
          posts: 23
        }
        },
        compatibilityScore: 85,
        mutualConnections: 1,
      sharedInterests: ['Sustainability', 'Innovation', 'Outdoor Sports']
    }
  ];

  const finalProfiles = reduxProfiles?.length > 0 ? reduxProfiles : mockProfiles;

  const handleViewProfile = (profile: any) => {
    setSelectedProfile(profile);
  };

  const handlePitchProfile = (profile: any) => {
    setSelectedProfile(profile);
    setShowPitchModal(true);
  };

  const handleSubmitPitch = async () => {
    if (!selectedProfile || !pitchContent.trim()) return;
    
    try {
      console.log('Sending anonymous pitch to:', selectedProfile.founder.id, pitchContent);
      
      setSentPitches([...sentPitches, selectedProfile.founder.id]);
      setShowPitchModal(false);
      setPitchContent('');
      setSelectedProfile(null);
      
      alert('Your anonymous pitch has been sent! They\'ll see it in their inbox.');
    } catch (error: any) {
      console.error('Failed to send pitch:', error);
      alert('Failed to send pitch. Please try again.');
    }
  };

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
      'Startups': Building2,
      'AI/ML': Zap,
      'Healthcare': Shield,
      'Sustainability': Globe,
      'Outdoor Sports': Mountain
    };
    return iconMap[interest] || Star;
  };

  const filteredProfiles = finalProfiles.filter((profile: any) => {
    const stageMatch = filterStage === 'all' || profile.founder.companyStage === filterStage;
    const industryMatch = filterIndustry === 'all' || profile.founder.industry === filterIndustry;
    return stageMatch && industryMatch;
  }).sort((a: any, b: any) => b.compatibilityScore - a.compatibilityScore);

  const getStageColor = (stage: CompanyStage) => {
    const colors = {
      'idea': 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200',
      'mvp': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'seed': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      'series-a': 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
      'series-b': 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
      'series-c': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
      'growth': 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200',
      'exit': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
      'enterprise': 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200'
    };
    return colors[stage] || 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
  };

  const getStageLabel = (stage: CompanyStage) => {
    const labels = {
      'idea': 'IDEA STAGE',
      'mvp': 'MVP',
      'seed': 'SEED',
      'series-a': 'SERIES A',
      'series-b': 'SERIES B',
      'series-c': 'SERIES C',
      'growth': 'GROWTH',
      'exit': 'EXIT',
      'enterprise': 'ENTERPRISE'
    };
    return labels[stage] || stage.toUpperCase();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mx-auto mb-8 animate-pulse flex items-center justify-center">
            <Lightbulb className="w-12 h-12 text-white animate-pulse" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Discovering Amazing Founders
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Our AI is analyzing compatibility and finding your perfect matches
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-red-500 rounded-full mx-auto mb-8 flex items-center justify-center">
            <XCircle className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Error Loading Profiles
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            {error}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-900">
      {/* Enhanced Header Section */}
      <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="space-y-3">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
            <div>
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Discover Founders
              </h1>
                  <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">
                    Connect with visionary entrepreneurs
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-full">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-blue-700 dark:text-blue-300 font-semibold">
                    {filteredProfiles.length} founders found
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-purple-50 dark:bg-purple-900/30 px-3 py-1.5 rounded-full">
                  <Send className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                  <span className="text-purple-700 dark:text-purple-300 font-semibold">
                    {sentPitches.length} pitches sent
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              {/* Proximity View Selector */}
              <div className="flex bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-1.5 shadow-inner">
                <button className="flex items-center space-x-2 px-5 py-3 rounded-lg transition-all duration-300 bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg transform scale-105">
                  <MapPin className="w-4 h-4" />
                  <span className="font-semibold">Proximity View</span>
                </button>
          </div>

              {/* Enhanced Filters */}
              <div className="flex space-x-3">
                <div className="relative">
            <select
              value={filterStage}
              onChange={(e) => setFilterStage(e.target.value)}
                    className="appearance-none bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-600 rounded-xl px-5 py-3 pr-10 text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm hover:shadow-md transition-all"
            >
              <option value="all">All Stages</option>
                    <option value="idea">Idea Stage</option>
              <option value="mvp">MVP</option>
              <option value="seed">Seed</option>
              <option value="series-a">Series A</option>
              <option value="series-b">Series B</option>
                    <option value="series-c">Series C</option>
            </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
            
                <div className="relative">
            <select
              value={filterIndustry}
              onChange={(e) => setFilterIndustry(e.target.value)}
                    className="appearance-none bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-600 rounded-xl px-5 py-3 pr-10 text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm hover:shadow-md transition-all"
            >
              <option value="all">All Industries</option>
                    <option value="technology">Technology</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="sustainability">Sustainability</option>
              <option value="fintech">Fintech</option>
                    <option value="education">Education</option>
            </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Superb Card View */}
      <div className="max-w-8xl mx-auto px-6 py-12">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800 dark:text-white">
                  {filteredProfiles.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Total Founders</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800 dark:text-white">
                  {new Set(filteredProfiles.map((p: any) => p.founder.location)).size}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Locations</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                <Send className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800 dark:text-white">
                  {sentPitches.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Pitches Sent</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-800 dark:text-white">
                  {Math.round(filteredProfiles.reduce((acc: number, p: any) => acc + p.compatibilityScore, 0) / filteredProfiles.length)}%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Avg Match</div>
              </div>
            </div>
          </div>
        </div>

        {/* Superb Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProfiles.map((profile: any) => (
            <div key={profile.founder.id} className="group">
              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-[1.03] border border-gray-200/30 dark:border-gray-700/30 overflow-hidden relative">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full translate-y-12 -translate-x-12"></div>
                </div>

                {/* Profile Header with Dynamic Gradient */}
                <div className="relative h-48 bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-600 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-300"></div>
                  
                  {/* Profile Image */}
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                    <div className="w-24 h-24 rounded-2xl border-4 border-white dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-700 shadow-2xl">
                      <img
                        src={profile.founder.profileImage}
                        alt={`${profile.founder.firstName} ${profile.founder.lastName}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Compatibility Score */}
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center space-x-2 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-bold text-gray-800 dark:text-white">
                        {profile.compatibilityScore}%
                      </span>
                    </div>
                  </div>

                  {/* Company Stage Badge */}
                  <div className="absolute bottom-4 right-4">
                    <span className={`px-3 py-1.5 rounded-xl text-xs font-bold shadow-lg backdrop-blur-sm ${getStageColor(profile.founder.companyStage)}`}>
                      {getStageLabel(profile.founder.companyStage)}
                    </span>
                  </div>
                    </div>

                {/* Profile Content */}
                <div className="pt-16 px-6 pb-6 relative z-10">
                  {/* Name and Title */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                      {profile.founder.firstName} {profile.founder.lastName}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 font-semibold text-sm">
                      {profile.founder.title}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs font-medium">
                      {profile.founder.company}
                    </p>
                  </div>

                  {/* Location */}
                  <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm mb-4">
                    <MapPin className="w-4 h-4 mr-2 text-indigo-500" />
                    <span className="font-medium">{profile.founder.location}</span>
                </div>

                  {/* Bio */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 line-clamp-3 leading-relaxed text-center">
                    {profile.founder.bio}
                  </p>

                  {/* Interests */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {profile.founder.interests.slice(0, 2).map((interest: string, idx: number) => {
                        const Icon = getInterestIcon(interest);
                        return (
                          <span
                            key={idx}
                            className="flex items-center space-x-1 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1.5 rounded-lg text-xs font-semibold border border-indigo-200 dark:border-indigo-700/50"
                          >
                            <Icon className="w-3 h-3" />
                            <span>{interest}</span>
                          </span>
                        );
                      })}
                      {profile.founder.interests.length > 2 && (
                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1.5 rounded-lg text-xs font-semibold">
                          +{profile.founder.interests.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="text-center bg-gray-50/80 dark:bg-gray-700/50 rounded-xl p-3">
                      <div className="text-lg font-bold text-gray-800 dark:text-white">
                        {Math.floor(profile.founder.metrics.connections / 1000)}k
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Connections</div>
                    </div>
                    <div className="text-center bg-gray-50/80 dark:bg-gray-700/50 rounded-xl p-3">
                      <div className="text-lg font-bold text-gray-800 dark:text-white">
                        {profile.mutualConnections}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Mutual</div>
                    </div>
                    <div className="text-center bg-gray-50/80 dark:bg-gray-700/50 rounded-xl p-3">
                      <div className="text-lg font-bold text-gray-800 dark:text-white">
                        {Math.floor(profile.founder.metrics.profileViews / 1000)}k
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Views</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button
                      onClick={() => handleViewProfile(profile)}
                      className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Profile</span>
                    </button>
                    <button
                      onClick={() => handlePitchProfile(profile)}
                      disabled={sentPitches.includes(profile.founder.id)}
                      className="w-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      {sentPitches.includes(profile.founder.id) ? (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          <span>Pitched</span>
                        </>
                      ) : (
                        <>
                      <Send className="w-4 h-4" />
                          <span>Send Pitch</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-indigo-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-700 rounded-3xl pointer-events-none"></div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Profile Detail Modal */}
      {selectedProfile && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Header */}
              <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 relative">
                <button
                  onClick={() => setSelectedProfile(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <XCircle className="w-6 h-6" />
                    </button>
                <div className="absolute -bottom-16 left-8">
                  <div className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 overflow-hidden bg-white dark:bg-gray-700">
                    <img
                      src={selectedProfile.founder.profileImage}
                      alt={`${selectedProfile.founder.firstName} ${selectedProfile.founder.lastName}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-20 px-8 pb-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                      {selectedProfile.founder.firstName} {selectedProfile.founder.lastName}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 font-medium">
                      {selectedProfile.founder.title}
                    </p>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                      {selectedProfile.founder.company}
                    </p>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mt-2">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span>{selectedProfile.founder.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1 bg-yellow-100 dark:bg-yellow-900/30 rounded-full px-4 py-2">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <span className="text-lg font-bold text-yellow-800 dark:text-yellow-200">
                        {selectedProfile.compatibilityScore}% Match
                      </span>
          </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-bold ${getStageColor(selectedProfile.founder.companyStage)}`}>
                      {getStageLabel(selectedProfile.founder.companyStage)}
                    </span>
                  </div>
                </div>

                {/* Bio */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">About</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedProfile.founder.bio}
                  </p>
                  </div>
                  
                {/* Experience */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <Briefcase className="w-5 h-5 mr-2" />
                    Experience
                  </h3>
                  <div className="space-y-4">
                    {selectedProfile.founder.experience.map((exp: any, index: number) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <div>
                          <h4 className="font-semibold text-gray-800 dark:text-white">{exp.role}</h4>
                          <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{exp.duration}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                      </div>
                      
                {/* Education */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    Education
                  </h3>
                  <div className="space-y-4">
                    {selectedProfile.founder.education.map((edu: any, index: number) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-white">{edu.degree}</h4>
                          <p className="text-gray-600 dark:text-gray-300">{edu.school}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{edu.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    Achievements
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProfile.founder.achievements.map((achievement: any, index: number) => (
                      <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 dark:text-white">{achievement.title}</h4>
                        {achievement.amount && (
                          <p className="text-green-600 dark:text-green-400 font-medium">{achievement.amount}</p>
                        )}
                        <p className="text-sm text-gray-500 dark:text-gray-400">{achievement.year}</p>
                      </div>
                    ))}
                      </div>
                    </div>
                    
                {/* Interests */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <Heart className="w-5 h-5 mr-2" />
                    Interests
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProfile.founder.interests.map((interest: string, index: number) => {
                          const Icon = getInterestIcon(interest);
                          return (
                            <span
                              key={index}
                          className="flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full font-medium"
                            >
                          <Icon className="w-4 h-4" />
                              <span>{interest}</span>
                            </span>
                          );
                        })}
                  </div>
                      </div>
                      
                {/* Social Links */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
                    <Globe className="w-5 h-5 mr-2" />
                    Connect
                  </h3>
                  <div className="flex space-x-4">
                    {selectedProfile.founder.socialLinks.linkedin && (
                      <a
                        href={selectedProfile.founder.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                        <span>LinkedIn</span>
                      </a>
                    )}
                    {selectedProfile.founder.socialLinks.twitter && (
                      <a
                        href={selectedProfile.founder.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                        <span>Twitter</span>
                      </a>
                    )}
                    {selectedProfile.founder.socialLinks.website && (
                      <a
                        href={selectedProfile.founder.socialLinks.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Website</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                        <button
                    onClick={() => handlePitchProfile(selectedProfile)}
                    disabled={sentPitches.includes(selectedProfile.founder.id)}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2"
                  >
                    {sentPitches.includes(selectedProfile.founder.id) ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span>Pitch Sent</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Anonymous Pitch</span>
                      </>
                    )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
        )}

      {/* Pitch Modal */}
      {showPitchModal && selectedProfile && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Send Anonymous Pitch
                </h3>
                <button
                  onClick={() => setShowPitchModal(false)}
                  className="w-8 h-8 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 transition-colors"
                >
                  <XCircle className="w-5 h-5" />
                </button>
              </div>

              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700">
                    <img
                      src={selectedProfile.founder.profileImage}
                      alt={`${selectedProfile.founder.firstName} ${selectedProfile.founder.lastName}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      {selectedProfile.founder.firstName} {selectedProfile.founder.lastName}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {selectedProfile.founder.title} at {selectedProfile.founder.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Your pitch will be sent anonymously. They won't see your identity until they respond.
              </p>
            </div>
            
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Pitch
                </label>
                <textarea
                  value={pitchContent}
                  onChange={(e) => setPitchContent(e.target.value)}
                  placeholder="Introduce yourself and explain why you'd like to connect..."
                  className="w-full h-32 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                />
                <div className="text-right text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {pitchContent.length}/500
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowPitchModal(false)}
                  className="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmitPitch}
                  disabled={!pitchContent.trim() || pitchContent.length > 500}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Pitch</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Discovery;