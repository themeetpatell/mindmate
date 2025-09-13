"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateRefreshToken = exports.authenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        res.status(401).json({
            success: false,
            message: 'Access token required'
        });
        return;
    }
    try {
        const secret = process.env.JWT_SECRET || 'your-secret-key';
        const decoded = jsonwebtoken_1.default.verify(token, secret);
        req.user = {
            id: decoded.id,
            email: decoded.email,
            firstName: decoded.firstName,
            lastName: decoded.lastName
        };
        next();
    }
    catch (error) {
        res.status(403).json({
            success: false,
            message: 'Invalid or expired token'
        });
        return;
    }
};
exports.authenticateToken = authenticateToken;
const authenticateRefreshToken = (req, res, next) => {
    const { refreshToken } = req.body;
    if (!refreshToken) {
        res.status(401).json({
            success: false,
            message: 'Refresh token required'
        });
        return;
    }
    try {
        const secret = process.env.JWT_REFRESH_SECRET || 'your-refresh-secret-key';
        const decoded = jsonwebtoken_1.default.verify(refreshToken, secret);
        req.user = {
            id: decoded.id,
            email: decoded.email,
            firstName: decoded.firstName,
            lastName: decoded.lastName
        };
        next();
    }
    catch (error) {
        res.status(403).json({
            success: false,
            message: 'Invalid or expired refresh token'
        });
        return;
    }
};
exports.authenticateRefreshToken = authenticateRefreshToken;
//# sourceMappingURL=auth.js.map