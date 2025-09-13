import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  Eye, 
  EyeOff, 
  Mail, 
  Lock, 
  User, 
  Building2, 
  MapPin,
  Heart,
  ArrowRight,
  XCircle
} from 'lucide-react';
import { loginUser, registerUser, clearError } from '../store/slices/authSlice.js';

const Auth = ({ onAuthSuccess }) => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);
  
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    company: '',
    title: '',
    location: '',
    birthDate: '',
    bio: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (isSignUp) {
      if (!formData.firstName) {
        newErrors.firstName = 'First name is required';
      }
      if (!formData.lastName) {
        newErrors.lastName = 'Last name is required';
      }
      if (!formData.company) {
        newErrors.company = 'Company is required';
      }
      if (!formData.title) {
        newErrors.title = 'Title is required';
      }
      if (!formData.location) {
        newErrors.location = 'Location is required';
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Clear any previous errors
    dispatch(clearError());
    
    try {
      if (isSignUp) {
        await dispatch(registerUser({
          email: formData.email,
          password: formData.password,
          firstName: formData.firstName,
          lastName: formData.lastName
        })).unwrap();
      } else {
        await dispatch(loginUser({
          email: formData.email,
          password: formData.password
        })).unwrap();
      }
      
      // If successful, call the success callback
      onAuthSuccess();
    } catch (error) {
      // Error is handled by Redux
      console.error('Authentication error:', error);
    }
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: 'var(--apple-gray-1)' }}
    >
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ backgroundColor: 'var(--apple-blue)' }}
          >
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h1 className="apple-text-large-title" style={{ color: 'var(--apple-gray-11)' }}>
            MindMate
          </h1>
          <p className="apple-text-body mt-2" style={{ color: 'var(--apple-gray-6)' }}>
            AI-powered dating for meaningful connections
          </p>
        </div>

        {/* Auth Form */}
        <div 
          className="apple-card"
          style={{ 
            backgroundColor: 'var(--apple-gray-2)',
            padding: 'var(--apple-space-8)',
            borderRadius: 'var(--apple-radius-extra-large)'
          }}
        >
          <div className="flex mb-6">
            <button
              onClick={() => setIsSignUp(false)}
              className={`flex-1 apple-button ${
                !isSignUp ? 'apple-button-primary' : 'apple-button-secondary'
              }`}
              style={{
                padding: 'var(--apple-space-3) var(--apple-space-4)',
                borderRadius: 'var(--apple-radius-medium)',
                marginRight: 'var(--apple-space-2)'
              }}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsSignUp(true)}
              className={`flex-1 apple-button ${
                isSignUp ? 'apple-button-primary' : 'apple-button-secondary'
              }`}
              style={{
                padding: 'var(--apple-space-3) var(--apple-space-4)',
                borderRadius: 'var(--apple-radius-medium)',
                marginLeft: 'var(--apple-space-2)'
              }}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="apple-text-callout font-semibold mb-2 block" style={{ color: 'var(--apple-gray-7)' }}>
                Email
              </label>
              <div className="relative">
                <Mail 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2"
                  style={{ color: 'var(--apple-gray-5)', width: '20px', height: '20px' }}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="apple-input"
                  style={{
                    paddingLeft: 'var(--apple-space-10)',
                    borderColor: errors.email ? 'var(--apple-red)' : 'var(--apple-gray-4)'
                  }}
                  placeholder="Enter your email"
                />
              </div>
              {errors.email && (
                <p className="apple-text-caption mt-1 flex items-center" style={{ color: 'var(--apple-red)' }}>
                  <XCircle className="w-4 h-4 mr-1" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="apple-text-callout font-semibold mb-2 block" style={{ color: 'var(--apple-gray-7)' }}>
                Password
              </label>
              <div className="relative">
                <Lock 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2"
                  style={{ color: 'var(--apple-gray-5)', width: '20px', height: '20px' }}
                />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="apple-input"
                  style={{
                    paddingLeft: 'var(--apple-space-10)',
                    paddingRight: 'var(--apple-space-12)',
                    borderColor: errors.password ? 'var(--apple-red)' : 'var(--apple-gray-4)'
                  }}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                  style={{ color: 'var(--apple-gray-5)' }}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="apple-text-caption mt-1 flex items-center" style={{ color: 'var(--apple-red)' }}>
                  <XCircle className="w-4 h-4 mr-1" />
                  {errors.password}
                </p>
              )}
            </div>

            {/* Sign Up Fields */}
            {isSignUp && (
              <>
                {/* Name Fields */}
                <div className="apple-grid apple-grid-2" style={{ gap: 'var(--apple-space-4)' }}>
                  <div>
                    <label className="apple-text-callout font-semibold mb-2 block" style={{ color: 'var(--apple-gray-7)' }}>
                      First Name
                    </label>
                    <div className="relative">
                      <User 
                        className="absolute left-3 top-1/2 transform -translate-y-1/2"
                        style={{ color: 'var(--apple-gray-5)', width: '20px', height: '20px' }}
                      />
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="apple-input"
                        style={{
                          paddingLeft: 'var(--apple-space-10)',
                          borderColor: errors.firstName ? 'var(--apple-red)' : 'var(--apple-gray-4)'
                        }}
                        placeholder="First name"
                      />
                    </div>
                    {errors.firstName && (
                      <p className="apple-text-caption mt-1 flex items-center" style={{ color: 'var(--apple-red)' }}>
                        <XCircle className="w-4 h-4 mr-1" />
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="apple-text-callout font-semibold mb-2 block" style={{ color: 'var(--apple-gray-7)' }}>
                      Last Name
                    </label>
                    <div className="relative">
                      <User 
                        className="absolute left-3 top-1/2 transform -translate-y-1/2"
                        style={{ color: 'var(--apple-gray-5)', width: '20px', height: '20px' }}
                      />
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="apple-input"
                        style={{
                          paddingLeft: 'var(--apple-space-10)',
                          borderColor: errors.lastName ? 'var(--apple-red)' : 'var(--apple-gray-4)'
                        }}
                        placeholder="Last name"
                      />
                    </div>
                    {errors.lastName && (
                      <p className="apple-text-caption mt-1 flex items-center" style={{ color: 'var(--apple-red)' }}>
                        <XCircle className="w-4 h-4 mr-1" />
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Company & Title */}
                <div className="apple-grid apple-grid-2" style={{ gap: 'var(--apple-space-4)' }}>
                  <div>
                    <label className="apple-text-callout font-semibold mb-2 block" style={{ color: 'var(--apple-gray-7)' }}>
                      Company
                    </label>
                    <div className="relative">
                      <Building2 
                        className="absolute left-3 top-1/2 transform -translate-y-1/2"
                        style={{ color: 'var(--apple-gray-5)', width: '20px', height: '20px' }}
                      />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="apple-input"
                        style={{
                          paddingLeft: 'var(--apple-space-10)',
                          borderColor: errors.company ? 'var(--apple-red)' : 'var(--apple-gray-4)'
                        }}
                        placeholder="Your company"
                      />
                    </div>
                    {errors.company && (
                      <p className="apple-text-caption mt-1 flex items-center" style={{ color: 'var(--apple-red)' }}>
                        <XCircle className="w-4 h-4 mr-1" />
                        {errors.company}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="apple-text-callout font-semibold mb-2 block" style={{ color: 'var(--apple-gray-7)' }}>
                      Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="apple-input"
                      style={{
                        borderColor: errors.title ? 'var(--apple-red)' : 'var(--apple-gray-4)'
                      }}
                      placeholder="CEO, CTO, etc."
                    />
                    {errors.title && (
                      <p className="apple-text-caption mt-1 flex items-center" style={{ color: 'var(--apple-red)' }}>
                        <XCircle className="w-4 h-4 mr-1" />
                        {errors.title}
                      </p>
                    )}
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="apple-text-callout font-semibold mb-2 block" style={{ color: 'var(--apple-gray-7)' }}>
                    Location
                  </label>
                  <div className="relative">
                    <MapPin 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2"
                      style={{ color: 'var(--apple-gray-5)', width: '20px', height: '20px' }}
                    />
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="apple-input"
                      style={{
                        paddingLeft: 'var(--apple-space-10)',
                        borderColor: errors.location ? 'var(--apple-red)' : 'var(--apple-gray-4)'
                      }}
                      placeholder="City, Country"
                    />
                  </div>
                  {errors.location && (
                    <p className="apple-text-caption mt-1 flex items-center" style={{ color: 'var(--apple-red)' }}>
                      <XCircle className="w-4 h-4 mr-1" />
                      {errors.location}
                    </p>
                  )}
                </div>

                {/* Bio */}
                <div>
                  <label className="apple-text-callout font-semibold mb-2 block" style={{ color: 'var(--apple-gray-7)' }}>
                    Bio
                  </label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    rows={3}
                    className="apple-input"
                    style={{
                      resize: 'vertical',
                      minHeight: '80px'
                    }}
                    placeholder="Tell us about yourself..."
                  />
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="apple-text-callout font-semibold mb-2 block" style={{ color: 'var(--apple-gray-7)' }}>
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock 
                      className="absolute left-3 top-1/2 transform -translate-y-1/2"
                      style={{ color: 'var(--apple-gray-5)', width: '20px', height: '20px' }}
                    />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="apple-input"
                      style={{
                        paddingLeft: 'var(--apple-space-10)',
                        borderColor: errors.confirmPassword ? 'var(--apple-red)' : 'var(--apple-gray-4)'
                      }}
                      placeholder="Confirm your password"
                    />
                  </div>
                  {errors.confirmPassword && (
                    <p className="apple-text-caption mt-1 flex items-center" style={{ color: 'var(--apple-red)' }}>
                      <XCircle className="w-4 h-4 mr-1" />
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              </>
            )}

            {/* Error Display */}
            {error && (
              <div 
                className="p-4 rounded-lg flex items-center"
                style={{ 
                  backgroundColor: 'var(--apple-red)',
                  opacity: 0.1,
                  border: '1px solid var(--apple-red)'
                }}
              >
                <XCircle className="w-5 h-5 mr-2" style={{ color: 'var(--apple-red)' }} />
                <span className="apple-text-callout" style={{ color: 'var(--apple-red)' }}>{error}</span>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="apple-button apple-button-primary w-full flex items-center justify-center space-x-2"
              style={{
                padding: 'var(--apple-space-4) var(--apple-space-6)',
                borderRadius: 'var(--apple-radius-medium)',
                fontSize: 'var(--apple-font-size-body)',
                fontWeight: '600',
                opacity: isLoading ? 0.6 : 1,
                cursor: isLoading ? 'not-allowed' : 'pointer'
              }}
            >
              {isLoading ? (
                <>
                  <div 
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                  ></div>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>{isSignUp ? 'Create Account' : 'Sign In'}</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="apple-text-callout" style={{ color: 'var(--apple-gray-6)' }}>
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="font-semibold"
                style={{ color: 'var(--apple-blue)' }}
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;