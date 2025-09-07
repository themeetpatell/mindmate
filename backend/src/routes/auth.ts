import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import { Request, Response } from 'express';

const router = Router();

// Mock user data - replace with actual database
const users = [
  {
    id: '1',
    email: 'founder@example.com',
    password: 'password123', // In real app, this would be hashed
    firstName: 'John',
    lastName: 'Doe',
    isVerified: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

// Register endpoint
router.post('/register', [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 }),
  body('firstName').trim().notEmpty(),
  body('lastName').trim().notEmpty()
], (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { email, password, firstName, lastName } = req.body;

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: 'User already exists'
      });
    }

    // Create new user (in real app, hash password)
    const newUser = {
      id: (users.length + 1).toString(),
      email,
      password, // In real app, hash this
      firstName,
      lastName,
      isVerified: false,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    users.push(newUser);

    // In real app, generate JWT tokens
    const accessToken = 'mock-access-token';
    const refreshToken = 'mock-refresh-token';

    res.status(201).json({
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
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Login endpoint
router.post('/login', [
  body('email').isEmail().normalizeEmail(),
  body('password').notEmpty()
], (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { email, password } = req.body;

    // Find user
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // In real app, generate JWT tokens
    const accessToken = 'mock-access-token';
    const refreshToken = 'mock-refresh-token';

    res.json({
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
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Logout endpoint
router.post('/logout', (req: Request, res: Response) => {
  // In real app, invalidate JWT tokens
  res.json({
    success: true,
    message: 'Logout successful'
  });
});

// Refresh token endpoint
router.post('/refresh', (req: Request, res: Response) => {
  // In real app, validate refresh token and generate new access token
  const accessToken = 'new-mock-access-token';
  
  res.json({
    success: true,
    message: 'Token refreshed successfully',
    data: {
      accessToken
    }
  });
});

export default router;
