"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const events = [
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
        createdAt: new Date()
    }
];
router.get('/', (req, res) => {
    try {
        res.json({
            success: true,
            data: events
        });
    }
    catch (error) {
        console.error('Get events error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});
router.post('/:id/register', (req, res) => {
    try {
        const { id } = req.params;
        console.log(`User registering for event ${id}`);
        res.json({
            success: true,
            message: 'Successfully registered for event'
        });
    }
    catch (error) {
        console.error('Register for event error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});
router.delete('/:id/unregister', (req, res) => {
    try {
        const { id } = req.params;
        console.log(`User unregistering from event ${id}`);
        res.json({
            success: true,
            message: 'Successfully unregistered from event'
        });
    }
    catch (error) {
        console.error('Unregister from event error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});
router.post('/', (req, res) => {
    try {
        const eventData = req.body;
        console.log('Creating event:', eventData);
        res.status(201).json({
            success: true,
            message: 'Event created successfully',
            data: { id: '2', ...eventData }
        });
    }
    catch (error) {
        console.error('Create event error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});
exports.default = router;
//# sourceMappingURL=events.js.map