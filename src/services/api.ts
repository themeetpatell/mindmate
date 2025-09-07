// const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

// Mock API request function - not used in mock implementation
// const apiRequest = async <T>(
//   endpoint: string,
//   options: RequestInit = {}
// ): Promise<T> => {
//   // Mock implementation
// };

// Mock Auth API - Simulates authentication without backend
export const authApi = {
  login: async (credentials: { email: string; password: string }) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock successful login
    const mockUser = {
      id: '1',
      email: credentials.email,
      firstName: 'Alex',
      lastName: 'Chen',
      isVerified: true,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    const mockTokens = {
      accessToken: 'mock-access-token-' + Date.now(),
      refreshToken: 'mock-refresh-token-' + Date.now()
    };
    
    return {
      user: mockUser,
      accessToken: mockTokens.accessToken,
      refreshToken: mockTokens.refreshToken
    };
  },

  register: async (userData: { 
    email: string; 
    password: string; 
    firstName: string; 
    lastName: string;
    company?: string;
    title?: string;
    location?: string;
    bio?: string;
  }) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock successful registration
    const mockUser = {
      id: '1',
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
      company: userData.company || '',
      title: userData.title || '',
      location: userData.location || '',
      bio: userData.bio || '',
      isVerified: false,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    const mockTokens = {
      accessToken: 'mock-access-token-' + Date.now(),
      refreshToken: 'mock-refresh-token-' + Date.now()
    };
    
    return {
      user: mockUser,
      accessToken: mockTokens.accessToken,
      refreshToken: mockTokens.refreshToken
    };
  },

  logout: async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return { success: true };
  },

  refreshToken: async (_refreshToken: string) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return {
      accessToken: 'mock-refreshed-access-token-' + Date.now()
    };
  },
};

// Mock Discovery API
export const discoveryApi = {
  getProfiles: async (_filters?: { stage?: string; industry?: string }) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Return empty array - the component will use mock data from Redux store
    return { profiles: [] };
  },

  sendPitch: async (_profileId: string, _pitch: string) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return { success: true, message: 'Pitch sent successfully' };
  },

  likeProfile: async (_profileId: string) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return { success: true, message: 'Profile liked successfully' };
  },
};

// Mock Messages API
export const messagesApi = {
  getConversations: async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return { conversations: [] };
  },

  getMessages: async (_conversationId: string) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return { messages: [] };
  },

  sendMessage: async (_conversationId: string, _content: string) => {
    await new Promise(resolve => setTimeout(resolve, 400));
    return { success: true, message: 'Message sent successfully' };
  },
};

// Mock Pitches API
export const pitchesApi = {
  getPitches: async () => {
    await new Promise(resolve => setTimeout(resolve, 600));
    return { 
      pitches: [
        {
          id: 1,
          from: {
            name: 'Sarah Johnson',
            title: 'CTO & Co-Founder',
            company: 'HealthAI',
            location: 'Boston, MA',
            avatar: 'SJ',
            verified: true
          },
          subject: 'Potential Co-Founder Opportunity',
          message: 'Hi! I saw your profile and I think we\'d make an incredible team. I\'m building HealthAI, a platform that uses AI to revolutionize healthcare diagnostics. Your experience in scaling teams and your passion for impact-driven products really resonates with me. Would love to discuss how we could potentially work together!',
          receivedAt: '2 hours ago',
          read: false,
          status: 'new',
          compatibility: 92,
          sharedInterests: ['AI/ML', 'Healthcare', 'Impact'],
          mutualConnections: 3
        },
        {
          id: 2,
          from: {
            name: 'Mike Rodriguez',
            title: 'CEO & Founder',
            company: 'EcoTech',
            location: 'Austin, TX',
            avatar: 'MR',
            verified: true
          },
          subject: 'Sustainability-Focused Partnership',
          message: 'Hey Alex! Your work at TechFlow Solutions caught my attention. I\'m building EcoTech and I think there\'s a huge opportunity for us to collaborate. Your technical background combined with my focus on sustainability could create something truly impactful. Let\'s grab a virtual coffee and explore this!',
          receivedAt: '1 day ago',
          read: true,
          status: 'replied',
          compatibility: 88,
          sharedInterests: ['Sustainability', 'Innovation', 'Impact'],
          mutualConnections: 1
        },
        {
          id: 3,
          from: {
            name: 'Emily Chen',
            title: 'VP of Product',
            company: 'DataFlow Inc',
            location: 'Seattle, WA',
            avatar: 'EC',
            verified: false
          },
          subject: 'Product Strategy Collaboration',
          message: 'Hello! I\'ve been following your journey and I\'m impressed by your product strategy skills. I\'m looking for a co-founder who can help me scale DataFlow Inc to the next level. Your experience in building and scaling products would be invaluable. Would love to discuss this opportunity!',
          receivedAt: '3 days ago',
          read: true,
          status: 'archived',
          compatibility: 85,
          sharedInterests: ['Product Strategy', 'Scaling', 'Data'],
          mutualConnections: 0
        },
        {
          id: 4,
          from: {
            name: 'David Kim',
            title: 'Founder & CEO',
            company: 'FinTech Solutions',
            location: 'San Francisco, CA',
            avatar: 'DK',
            verified: true
          },
          subject: 'Series A Funding Opportunity',
          message: 'Hi there! I\'m David, founder of FinTech Solutions. We\'re about to close our Series A and I\'m looking for a technical co-founder to join our journey. Your background in fintech and your track record of building scalable systems is exactly what we need. We\'re already generating $2M ARR and have 50+ enterprise clients. Would love to chat!',
          receivedAt: '5 hours ago',
          read: false,
          status: 'new',
          compatibility: 94,
          sharedInterests: ['Fintech', 'Scaling', 'Enterprise'],
          mutualConnections: 5
        },
        {
          id: 5,
          from: {
            name: 'Lisa Wang',
            title: 'Co-Founder & CTO',
            company: 'EdTech Innovations',
            location: 'New York, NY',
            avatar: 'LW',
            verified: true
          },
          subject: 'EdTech Revolution Partnership',
          message: 'Hello! I\'m Lisa from EdTech Innovations. We\'re revolutionizing online education with AI-powered personalized learning. I\'ve been following your work and I think your expertise in AI/ML would be perfect for our mission. We\'re backed by top VCs and have partnerships with major universities. Let\'s discuss how we can change education together!',
          receivedAt: '1 day ago',
          read: true,
          status: 'replied',
          compatibility: 89,
          sharedInterests: ['AI/ML', 'Education', 'Innovation'],
          mutualConnections: 2
        },
        {
          id: 6,
          from: {
            name: 'James Thompson',
            title: 'Founder',
            company: 'GreenTech Ventures',
            location: 'Portland, OR',
            avatar: 'JT',
            verified: false
          },
          subject: 'Climate Tech Co-Founder Search',
          message: 'Hey! I\'m James, building the next generation of climate technology solutions. We\'re developing carbon capture technology that could be a game-changer. I need a technical co-founder who shares my passion for saving the planet. We have prototype funding and are ready to scale. Your engineering background would be invaluable!',
          receivedAt: '2 days ago',
          read: false,
          status: 'new',
          compatibility: 87,
          sharedInterests: ['Climate Tech', 'Sustainability', 'Innovation'],
          mutualConnections: 1
        },
        {
          id: 7,
          from: {
            name: 'Maria Garcia',
            title: 'CEO & Founder',
            company: 'Social Impact Labs',
            location: 'Miami, FL',
            avatar: 'MG',
            verified: true
          },
          subject: 'Social Impact Technology Partnership',
          message: 'Hi! I\'m Maria, founder of Social Impact Labs. We\'re building technology solutions to address social inequality and create positive change. I\'ve been impressed by your commitment to impact-driven products. We\'re looking for a technical co-founder to help us scale our platform that connects nonprofits with resources. Would love to explore this together!',
          receivedAt: '3 days ago',
          read: true,
          status: 'archived',
          compatibility: 91,
          sharedInterests: ['Social Impact', 'Nonprofit', 'Technology'],
          mutualConnections: 4
        },
        {
          id: 8,
          from: {
            name: 'Alex Chen',
            title: 'Co-Founder & CTO',
            company: 'Blockchain Innovations',
            location: 'Singapore',
            avatar: 'AC',
            verified: true
          },
          subject: 'Web3 Infrastructure Opportunity',
          message: 'Hello! I\'m Alex from Blockchain Innovations. We\'re building the next generation of Web3 infrastructure that will power the decentralized future. Your experience with distributed systems and your forward-thinking approach to technology makes you an ideal co-founder. We\'re already working with major DeFi protocols. Let\'s build the future together!',
          receivedAt: '4 days ago',
          read: true,
          status: 'replied',
          compatibility: 86,
          sharedInterests: ['Blockchain', 'Web3', 'DeFi'],
          mutualConnections: 3
        },
        {
          id: 9,
          from: {
            name: 'Rachel Green',
            title: 'Founder & CEO',
            company: 'WellnessTech',
            location: 'Los Angeles, CA',
            avatar: 'RG',
            verified: false
          },
          subject: 'Mental Health Tech Co-Founder',
          message: 'Hi there! I\'m Rachel, building WellnessTech - a platform that uses AI to provide personalized mental health support. The mental health crisis is real, and I believe technology can help. I need a technical co-founder who understands both the technology and the human side of this challenge. We have early traction and are ready to scale. Let\'s make mental health accessible to everyone!',
          receivedAt: '5 days ago',
          read: false,
          status: 'new',
          compatibility: 93,
          sharedInterests: ['Mental Health', 'AI/ML', 'Wellness'],
          mutualConnections: 2
        },
        {
          id: 10,
          from: {
            name: 'Tom Wilson',
            title: 'Co-Founder',
            company: 'AgriTech Solutions',
            location: 'Denver, CO',
            avatar: 'TW',
            verified: true
          },
          subject: 'Agricultural Technology Partnership',
          message: 'Hello! I\'m Tom from AgriTech Solutions. We\'re using IoT and AI to revolutionize farming and help feed the world sustainably. Your background in IoT and data analytics would be perfect for our mission. We\'re working with farmers across the Midwest and have proven results. Looking for a technical co-founder to help us scale globally. Let\'s talk!',
          receivedAt: '1 week ago',
          read: true,
          status: 'archived',
          compatibility: 84,
          sharedInterests: ['IoT', 'Agriculture', 'Sustainability'],
          mutualConnections: 1
        }
      ]
    };
  },

  replyToPitch: async (_pitchId: string, _reply: string) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return { success: true, message: 'Reply sent successfully' };
  },

  markAsRead: async (_pitchId: string) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return { success: true };
  },
};

// Mock Events API
export const eventsApi = {
  getEvents: async () => {
    await new Promise(resolve => setTimeout(resolve, 700));
    return { 
      events: [
        {
          id: '1',
          title: 'Founder Mastermind Retreat',
          description: 'Join 20 handpicked founders for a 3-day intensive mastermind in Napa Valley.',
          type: 'retreat',
          location: 'Napa Valley, CA',
          startDate: new Date('2024-02-15T09:00:00'),
          endDate: new Date('2024-02-17T17:00:00'),
          maxAttendees: 20,
          attendees: ['15'],
          organizerId: '1',
          isActive: true,
          createdAt: new Date(),
          isMyEvent: false,
          status: 'upcoming',
          price: 0,
          tags: ['Retreat', 'Mastermind', 'Networking']
        },
        {
          id: '2',
          title: 'AI & ML Startup Pitch Night',
          description: 'Watch 10 AI/ML startups pitch to a panel of VCs and industry experts.',
          type: 'pitch-event',
          location: 'San Francisco, CA',
          startDate: new Date('2024-01-25T18:00:00'),
          endDate: new Date('2024-01-25T21:00:00'),
          maxAttendees: 100,
          attendees: ['75'],
          organizerId: '2',
          isActive: true,
          createdAt: new Date(),
          isMyEvent: false,
          status: 'upcoming',
          price: 25,
          tags: ['Pitch', 'AI/ML', 'Investors']
        },
        {
          id: '5',
          title: 'AI & Healthcare Panel',
          description: 'Panel discussion on the future of AI in healthcare with industry experts.',
          type: 'conference',
          location: 'Virtual',
          startDate: new Date('2024-02-01T19:00:00'),
          endDate: new Date('2024-02-01T21:00:00'),
          maxAttendees: 100,
          attendees: ['0'],
          organizerId: 'current-user',
          isActive: true,
          createdAt: new Date(),
          isMyEvent: true,
          status: 'draft',
          price: 0,
          tags: ['AI', 'Healthcare', 'Panel']
        }
      ]
    };
  },

  createEvent: async (eventData: any) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    return { success: true, event: { id: Date.now(), ...eventData } };
  },

  joinEvent: async (_eventId: string) => {
    await new Promise(resolve => setTimeout(resolve, 400));
    return { success: true, message: 'Joined event successfully' };
  },

  leaveEvent: async (_eventId: string) => {
    await new Promise(resolve => setTimeout(resolve, 400));
    return { success: true, message: 'Left event successfully' };
  },
};

// Mock Profile API
export const profileApi = {
  getProfile: async () => {
    await new Promise(resolve => setTimeout(resolve, 600));
    return { profile: null }; // Will use mock data from Redux store
  },

  updateProfile: async (profileData: any) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    return { success: true, profile: profileData };
  },

  uploadAvatar: async (file: File) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { success: true, url: URL.createObjectURL(file) };
  },
};

export { ApiError };
