"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const conversations = [
    {
        id: '1',
        participants: [
            { id: '1', name: 'John Doe', avatar: 'JD', online: true },
            { id: '2', name: 'Sarah Johnson', avatar: 'SJ', online: false }
        ],
        lastMessage: {
            content: 'Looking forward to our call tomorrow!',
            timestamp: new Date('2024-01-20T14:30:00'),
            senderId: '2'
        },
        unreadCount: 2,
        updatedAt: new Date('2024-01-20T14:30:00')
    },
    {
        id: '2',
        participants: [
            { id: '1', name: 'John Doe', avatar: 'JD', online: true },
            { id: '3', name: 'Mike Rodriguez', avatar: 'MR', online: true }
        ],
        lastMessage: {
            content: 'Thanks for the introduction!',
            timestamp: new Date('2024-01-19T16:45:00'),
            senderId: '3'
        },
        unreadCount: 0,
        updatedAt: new Date('2024-01-19T16:45:00')
    }
];
const messages = [
    {
        id: '1',
        conversationId: '1',
        senderId: '2',
        content: 'Hi John! I saw your profile and I think we\'d make a great team.',
        timestamp: new Date('2024-01-20T10:00:00'),
        type: 'text',
        read: false
    },
    {
        id: '2',
        conversationId: '1',
        senderId: '1',
        content: 'Hi Sarah! Thanks for reaching out. I\'d love to learn more about your vision.',
        timestamp: new Date('2024-01-20T10:15:00'),
        type: 'text',
        read: true
    },
    {
        id: '3',
        conversationId: '1',
        senderId: '2',
        content: 'Looking forward to our call tomorrow!',
        timestamp: new Date('2024-01-20T14:30:00'),
        type: 'text',
        read: false
    }
];
router.get('/conversations', (req, res) => {
    try {
        res.json({
            success: true,
            data: conversations
        });
    }
    catch (error) {
        console.error('Get conversations error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});
router.get('/:conversationId', (req, res) => {
    try {
        const { conversationId } = req.params;
        const conversationMessages = messages.filter(msg => msg.conversationId === conversationId);
        res.json({
            success: true,
            data: conversationMessages
        });
    }
    catch (error) {
        console.error('Get messages error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});
router.post('/send', (req, res) => {
    try {
        const { conversationId, content } = req.body;
        const newMessage = {
            id: (messages.length + 1).toString(),
            conversationId,
            senderId: '1',
            content,
            timestamp: new Date(),
            type: 'text',
            read: false
        };
        messages.push(newMessage);
        res.json({
            success: true,
            message: 'Message sent successfully',
            data: newMessage
        });
    }
    catch (error) {
        console.error('Send message error:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});
exports.default = router;
//# sourceMappingURL=messages.js.map