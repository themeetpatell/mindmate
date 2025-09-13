"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = (0, express_1.Router)();
const users = [
    {
        id: '1',
        email: 'founder@example.com',
        password: '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj4J/4.8.8.8',
        firstName: 'John',
        lastName: 'Doe',
        isVerified: true,
        createdAt: new Date(),
        updatedAt: new Date()
    }
];
router.post('/register', [
    (0, express_validator_1.body)('email').isEmail().normalizeEmail(),
    (0, express_validator_1.body)('password').isLength({ min: 6 }),
    (0, express_validator_1.body)('firstName').trim().notEmpty(),
    (0, express_validator_1.body)('lastName').trim().notEmpty()
], async (req, res) => {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: errors.array()
            });
        }
        const { email, password, firstName, lastName } = req.body;
        const existingUser = users.find(user => user.email === email);
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: 'User already exists'
            });
        }
        const saltRounds = 12;
        const hashedPassword = await bcryptjs_1.default.hash(password, saltRounds);
        const newUser = {
            id: (users.length + 1).toString(),
            email,
            password: hashedPassword,
            firstName,
            lastName,
            isVerified: false,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        users.push(newUser);
        const jwtSecret = process.env.JWT_SECRET || 'your-secret-key';
        const jwtRefreshSecret = process.env.JWT_REFRESH_SECRET || 'your-refresh-secret-key';
        const accessToken = jsonwebtoken_1.default.sign({ id: newUser.id, email: newUser.email, firstName: newUser.firstName, lastName: newUser.lastName }, jwtSecret, { expiresIn: '15m' });
        const refreshToken = jsonwebtoken_1.default.sign({ id: newUser.id, email: newUser.email }, jwtRefreshSecret, { expiresIn: '7d' });
        return res.status(201).json({
            success: true,
            message: 'User registered successfully',
            data: {
                user: {
                    id: newUser.id,
                    email: newUser.email,
                    firstName: newUser.firstName,
                    lastName: newUser.lastName,
                    isVerified: newUser.isVerified,
                    createdAt: newUser.createdAt,
                    updatedAt: newUser.updatedAt
                },
                accessToken,
                refreshToken
            }
        });
    }
    catch (error) {
        console.error('Registration error:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});
router.post('/login', [
    (0, express_validator_1.body)('email').isEmail().normalizeEmail(),
    (0, express_validator_1.body)('password').notEmpty()
], async (req, res) => {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: 'Validation failed',
                errors: errors.array()
            });
        }
        const { email, password } = req.body;
        const user = users.find(u => u.email === email);
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }
        const isPasswordValid = await bcryptjs_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }
        const jwtSecret = process.env.JWT_SECRET || 'your-secret-key';
        const jwtRefreshSecret = process.env.JWT_REFRESH_SECRET || 'your-refresh-secret-key';
        const accessToken = jsonwebtoken_1.default.sign({ id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName }, jwtSecret, { expiresIn: '15m' });
        const refreshToken = jsonwebtoken_1.default.sign({ id: user.id, email: user.email }, jwtRefreshSecret, { expiresIn: '7d' });
        return res.json({
            success: true,
            message: 'Login successful',
            data: {
                user: {
                    id: user.id,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    isVerified: user.isVerified,
                    createdAt: user.createdAt,
                    updatedAt: user.updatedAt
                },
                accessToken,
                refreshToken
            }
        });
    }
    catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});
router.post('/logout', (req, res) => {
    res.json({
        success: true,
        message: 'Logout successful'
    });
});
router.post('/refresh', (req, res) => {
    const accessToken = 'new-mock-access-token';
    res.json({
        success: true,
        message: 'Token refreshed successfully',
        data: {
            accessToken
        }
    });
});
exports.default = router;
//# sourceMappingURL=auth.js.map