"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const aiService_1 = require("../services/aiService");
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
const aiService = aiService_1.AIService.getInstance();
router.post('/profile/:userId', auth_1.authenticateToken, async (req, res) => {
    try {
        const { userId } = req.params;
        const userData = req.body;
        const psychologicalProfile = await aiService.generatePsychologicalProfile({
            id: userId,
            ...userData
        });
        res.json({
            success: true,
            data: psychologicalProfile
        });
    }
    catch (error) {
        console.error('Error generating psychological profile:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to generate psychological profile'
        });
    }
});
router.post('/compatibility', auth_1.authenticateToken, async (req, res) => {
    try {
        const { profile1, profile2 } = req.body;
        if (!profile1 || !profile2) {
            return res.status(400).json({
                success: false,
                error: 'Both profiles are required'
            });
        }
        const compatibility = await aiService.calculateCompatibility(profile1, profile2);
        return res.json({
            success: true,
            data: compatibility
        });
    }
    catch (error) {
        console.error('Error calculating compatibility:', error);
        return res.status(500).json({
            success: false,
            error: 'Failed to calculate compatibility'
        });
    }
});
router.post('/cosmic-alignment', auth_1.authenticateToken, async (req, res) => {
    try {
        const { profile1, profile2 } = req.body;
        if (!profile1 || !profile2) {
            return res.status(400).json({
                success: false,
                error: 'Both profiles are required'
            });
        }
        const cosmicAlignment = await aiService.generateCosmicAlignment(profile1, profile2);
        return res.json({
            success: true,
            data: cosmicAlignment
        });
    }
    catch (error) {
        console.error('Error generating cosmic alignment:', error);
        return res.status(500).json({
            success: false,
            error: 'Failed to generate cosmic alignment'
        });
    }
});
router.post('/energy-vibe', auth_1.authenticateToken, async (req, res) => {
    try {
        const { profile1, profile2 } = req.body;
        if (!profile1 || !profile2) {
            return res.status(400).json({
                success: false,
                error: 'Both profiles are required'
            });
        }
        const energyVibe = await aiService.generateEnergyVibe(profile1, profile2);
        return res.json({
            success: true,
            data: energyVibe
        });
    }
    catch (error) {
        console.error('Error generating energy vibe:', error);
        return res.status(500).json({
            success: false,
            error: 'Failed to generate energy vibe'
        });
    }
});
router.post('/growth-potential', auth_1.authenticateToken, async (req, res) => {
    try {
        const { profile1, profile2 } = req.body;
        if (!profile1 || !profile2) {
            return res.status(400).json({
                success: false,
                error: 'Both profiles are required'
            });
        }
        const growthPotential = await aiService.generateGrowthPotential(profile1, profile2);
        return res.json({
            success: true,
            data: growthPotential
        });
    }
    catch (error) {
        console.error('Error generating growth potential:', error);
        return res.status(500).json({
            success: false,
            error: 'Failed to generate growth potential'
        });
    }
});
router.post('/match-insights', auth_1.authenticateToken, async (req, res) => {
    try {
        const { profile1, profile2 } = req.body;
        if (!profile1 || !profile2) {
            return res.status(400).json({
                success: false,
                error: 'Both profiles are required'
            });
        }
        const insights = await aiService.generateMatchInsights(profile1, profile2);
        return res.json({
            success: true,
            data: insights
        });
    }
    catch (error) {
        console.error('Error generating match insights:', error);
        return res.status(500).json({
            success: false,
            error: 'Failed to generate match insights'
        });
    }
});
router.post('/conversation-starters', auth_1.authenticateToken, async (req, res) => {
    try {
        const { profile1, profile2 } = req.body;
        if (!profile1 || !profile2) {
            return res.status(400).json({
                success: false,
                error: 'Both profiles are required'
            });
        }
        const starters = await aiService.generateConversationStarters(profile1, profile2);
        return res.json({
            success: true,
            data: starters
        });
    }
    catch (error) {
        console.error('Error generating conversation starters:', error);
        return res.status(500).json({
            success: false,
            error: 'Failed to generate conversation starters'
        });
    }
});
router.post('/date-ideas', auth_1.authenticateToken, async (req, res) => {
    try {
        const { profile1, profile2 } = req.body;
        if (!profile1 || !profile2) {
            return res.status(400).json({
                success: false,
                error: 'Both profiles are required'
            });
        }
        const ideas = await aiService.generateDateIdeas(profile1, profile2);
        return res.json({
            success: true,
            data: ideas
        });
    }
    catch (error) {
        console.error('Error generating date ideas:', error);
        return res.status(500).json({
            success: false,
            error: 'Failed to generate date ideas'
        });
    }
});
router.post('/unique-matches/:userId', auth_1.authenticateToken, async (req, res) => {
    try {
        const { userId } = req.params;
        const { userProfile, potentialMatches } = req.body;
        if (!userProfile || !potentialMatches) {
            return res.status(400).json({
                success: false,
                error: 'User profile and potential matches are required'
            });
        }
        const matches = [];
        for (const potentialMatch of potentialMatches) {
            try {
                const compatibility = await aiService.calculateCompatibility(userProfile, potentialMatch.psychologicalProfile);
                const cosmicAlignment = await aiService.generateCosmicAlignment(userProfile, potentialMatch.psychologicalProfile);
                const energyVibe = await aiService.generateEnergyVibe(userProfile, potentialMatch.psychologicalProfile);
                const growthPotential = await aiService.generateGrowthPotential(userProfile, potentialMatch.psychologicalProfile);
                const insights = await aiService.generateMatchInsights(userProfile, potentialMatch.psychologicalProfile);
                const conversationStarters = await aiService.generateConversationStarters(userProfile, potentialMatch.psychologicalProfile);
                const dateIdeas = await aiService.generateDateIdeas(userProfile, potentialMatch.psychologicalProfile);
                const overallScore = (compatibility.overall + cosmicAlignment.cosmicScore + energyVibe.overallVibe + growthPotential.evolutionScore) / 4;
                const uniquenessScore = (cosmicAlignment.cosmicScore + energyVibe.overallVibe + growthPotential.evolutionScore) / 3;
                const longTermPotential = (compatibility.overall + growthPotential.evolutionScore) / 2;
                matches.push({
                    id: `match_${userId}_${potentialMatch.id}_${Date.now()}`,
                    userId,
                    matchId: potentialMatch.id,
                    aiCompatibility: compatibility,
                    psychologicalMatch: {
                        attachmentCompatibility: 85,
                        loveLanguageAlignment: 80,
                        communicationCompatibility: 90,
                        conflictResolutionMatch: 75,
                        emotionalIntelligenceMatch: 88
                    },
                    lifestyleMatch: {
                        dailyRoutine: 80,
                        socialPreferences: 85,
                        travelStyle: 90,
                        workLifeBalance: 75,
                        financialValues: 88,
                        familyValues: 82
                    },
                    cosmicAlignment,
                    energyVibe,
                    growthPotential,
                    overallScore: Math.round(overallScore),
                    uniquenessScore: Math.round(uniquenessScore),
                    longTermPotential: Math.round(longTermPotential),
                    matchInsights: insights,
                    conversationStarters,
                    dateIdeas,
                    status: 'pending',
                    createdAt: new Date(),
                    updatedAt: new Date()
                });
            }
            catch (error) {
                console.error(`Error processing match for user ${potentialMatch.id}:`, error);
            }
        }
        matches.sort((a, b) => b.overallScore - a.overallScore);
        return res.json({
            success: true,
            data: matches
        });
    }
    catch (error) {
        console.error('Error generating unique matches:', error);
        return res.status(500).json({
            success: false,
            error: 'Failed to generate unique matches'
        });
    }
});
router.post('/find-matches/:type', auth_1.authenticateToken, async (req, res) => {
    try {
        const { type } = req.params;
        const { userProfile, potentialMatches } = req.body;
        if (!userProfile || !potentialMatches) {
            return res.status(400).json({
                success: false,
                error: 'User profile and potential matches are required'
            });
        }
        const allMatches = [];
        for (const potentialMatch of potentialMatches) {
            try {
                const compatibility = await aiService.calculateCompatibility(userProfile, potentialMatch.psychologicalProfile);
                const cosmicAlignment = await aiService.generateCosmicAlignment(userProfile, potentialMatch.psychologicalProfile);
                const energyVibe = await aiService.generateEnergyVibe(userProfile, potentialMatch.psychologicalProfile);
                const growthPotential = await aiService.generateGrowthPotential(userProfile, potentialMatch.psychologicalProfile);
                const overallScore = (compatibility.overall + cosmicAlignment.cosmicScore + energyVibe.overallVibe + growthPotential.evolutionScore) / 4;
                allMatches.push({
                    id: `match_${userProfile.userId}_${potentialMatch.id}_${Date.now()}`,
                    userId: userProfile.userId,
                    matchId: potentialMatch.id,
                    aiCompatibility: compatibility,
                    cosmicAlignment,
                    energyVibe,
                    growthPotential,
                    overallScore: Math.round(overallScore),
                    status: 'pending',
                    createdAt: new Date(),
                    updatedAt: new Date()
                });
            }
            catch (error) {
                console.error(`Error processing match for user ${potentialMatch.id}:`, error);
            }
        }
        let filteredMatches = [];
        switch (type) {
            case 'soulmate':
                filteredMatches = allMatches.filter(match => match.cosmicAlignment.cosmicScore >= 90);
                break;
            case 'growth':
                filteredMatches = allMatches.filter(match => match.growthPotential.evolutionScore >= 80);
                break;
            case 'energy':
                filteredMatches = allMatches.filter(match => match.energyVibe.overallVibe >= 85);
                break;
            case 'karmic':
                filteredMatches = allMatches.filter(match => match.cosmicAlignment.cosmicScore >= 75 && match.growthPotential.mutualGrowth >= 70);
                break;
            case 'twin-flame':
                filteredMatches = allMatches.filter(match => match.overallScore >= 90 && match.cosmicAlignment.cosmicScore >= 85);
                break;
            case 'adventure':
                filteredMatches = allMatches.filter(match => match.aiCompatibility.personality >= 70 && match.energyVibe.overallVibe >= 75);
                break;
            case 'intellectual':
                filteredMatches = allMatches.filter(match => match.aiCompatibility.intellectual >= 85);
                break;
            case 'spiritual':
                filteredMatches = allMatches.filter(match => match.aiCompatibility.spiritual >= 80);
                break;
            default:
                filteredMatches = allMatches;
        }
        return res.json({
            success: true,
            data: filteredMatches
        });
    }
    catch (error) {
        console.error(`Error finding ${req.params.type} matches:`, error);
        return res.status(500).json({
            success: false,
            error: `Failed to find ${req.params.type} matches`
        });
    }
});
exports.default = router;
//# sourceMappingURL=aiRoutes.js.map