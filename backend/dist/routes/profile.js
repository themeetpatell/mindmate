"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    try {
        const profile = {
            id: '1',
            userId: '1',
            title: 'CEO & Co-Founder',
            company: 'TechFlow Solutions',
            companyStage: 'series-a',
            industry: 'saas',
            location: 'San Francisco, CA',
            bio: 'Serial entrepreneur with 10+ years building B2B SaaS platforms.',
            vision: 'Democratizing AI-powered workflow automation for businesses of all sizes.',
            values: ['Innovation', 'Transparency', 'Customer Success'],
            skills: [
                { id: '1', name: 'Product Strategy', category: 'business', level: 'expert' },
                { id: '2', name: 'Team Building', category: 'leadership', level: 'expert' }
            ],
            achievements: [
                { id: '1', title: 'Raised $15M Series A', description: 'Led successful Series A round', year: 2023, category: 'funding' }
            ],
            funding: { totalRaised: 15000000, lastRound: 'Series A', investors: ['Sequoia'] },
            teamSize: 45,
            lookingFor: {
                roles: ['CTO', 'VP Engineering'],
                industries: ['saas', 'ai-ml'],
                stages: ['series-a', 'series-b'],
                locations: ['San Francisco', 'Remote'],
                archetypes: ['hacker', 'designer']
            },
            availability: 'actively-looking',
            website: 'https://techflow.com',
            linkedInUrl: 'https://linkedin.com/in/ceo',
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        res.json({
            success: true,
            data: profile
        });
    }
    catch (error) {
        console.error('Get profile error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});
router.post('/', (req, res) => {
    try {
        const profileData = req.body;
        console.log('Creating profile:', profileData);
        res.status(201).json({
            success: true,
            message: 'Profile created successfully',
            data: { id: '1', ...profileData }
        });
    }
    catch (error) {
        console.error('Create profile error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});
router.put('/', (req, res) => {
    try {
        const profileData = req.body;
        console.log('Updating profile:', profileData);
        res.json({
            success: true,
            message: 'Profile updated successfully',
            data: { id: '1', ...profileData }
        });
    }
    catch (error) {
        console.error('Update profile error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});
router.post('/image', (req, res) => {
    try {
        const imageUrl = 'https://example.com/profile-image.jpg';
        res.json({
            success: true,
            message: 'Image uploaded successfully',
            data: { imageUrl }
        });
    }
    catch (error) {
        console.error('Upload image error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});
exports.default = router;
//# sourceMappingURL=profile.js.map