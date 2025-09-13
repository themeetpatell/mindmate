// Error handling utilities for production
export class ErrorHandler {
  static logError(error, context = {}) {
    const errorInfo = {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      context,
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error logged:', errorInfo);
    }

    // In production, send to monitoring service
    if (process.env.NODE_ENV === 'production') {
      this.sendToMonitoringService(errorInfo);
    }
  }

  static sendToMonitoringService(errorInfo) {
    // Replace with your actual monitoring service (Sentry, LogRocket, etc.)
    try {
      // Example: Send to external monitoring service
      fetch('/api/errors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(errorInfo)
      }).catch(err => {
        console.error('Failed to send error to monitoring service:', err);
      });
    } catch (err) {
      console.error('Error in error handler:', err);
    }
  }

  static handleAsyncError(asyncFn) {
    return async (...args) => {
      try {
        return await asyncFn(...args);
      } catch (error) {
        this.logError(error, { function: asyncFn.name, args });
        throw error;
      }
    };
  }

  static handlePromiseRejection(error, promise) {
    this.logError(error, { 
      type: 'unhandled_promise_rejection',
      promise: promise.toString()
    });
  }
}

// Global error handlers
export const setupGlobalErrorHandlers = () => {
  // Handle uncaught errors
  window.addEventListener('error', (event) => {
    ErrorHandler.logError(event.error, {
      type: 'uncaught_error',
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno
    });
  });

  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    ErrorHandler.handlePromiseRejection(event.reason, event.promise);
  });
};

// Performance monitoring
export class PerformanceMonitor {
  static markStart(name) {
    performance.mark(`${name}-start`);
  }

  static markEnd(name) {
    performance.mark(`${name}-end`);
    performance.measure(name, `${name}-start`, `${name}-end`);
    
    const measure = performance.getEntriesByName(name)[0];
    console.log(`${name} took ${measure.duration}ms`);
    
    return measure.duration;
  }

  static measureAsync(name, asyncFn) {
    return async (...args) => {
      this.markStart(name);
      try {
        const result = await asyncFn(...args);
        this.markEnd(name);
        return result;
      } catch (error) {
        this.markEnd(name);
        throw error;
      }
    };
  }
}
