// Analytics and tracking utilities
export class Analytics {
  static track(eventName, properties = {}) {
    const event = {
      name: eventName,
      properties: {
        ...properties,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent
      }
    };

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', event);
    }

    // Send to analytics service in production
    if (process.env.NODE_ENV === 'production') {
      this.sendToAnalytics(event);
    }
  }

  static sendToAnalytics(event) {
    try {
      // Replace with your actual analytics service (Google Analytics, Mixpanel, etc.)
      if (typeof gtag !== 'undefined') {
        gtag('event', event.name, event.properties);
      }
      
      // Custom analytics endpoint
      fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event)
      }).catch(err => {
        console.error('Failed to send analytics event:', err);
      });
    } catch (err) {
      console.error('Error in analytics:', err);
    }
  }

  // Common tracking events
  static trackPageView(pageName) {
    this.track('page_view', { page: pageName });
  }

  static trackUserAction(action, details = {}) {
    this.track('user_action', { action, ...details });
  }

  static trackError(error, context = {}) {
    this.track('error', { 
      error_message: error.message,
      error_stack: error.stack,
      ...context 
    });
  }

  static trackPerformance(metric, value, unit = 'ms') {
    this.track('performance', { metric, value, unit });
  }

  static trackConversion(conversionType, value = null) {
    this.track('conversion', { type: conversionType, value });
  }
}

// User engagement tracking
export class EngagementTracker {
  static startSession() {
    this.sessionStart = Date.now();
    Analytics.track('session_start');
  }

  static endSession() {
    if (this.sessionStart) {
      const duration = Date.now() - this.sessionStart;
      Analytics.track('session_end', { duration });
    }
  }

  static trackTimeOnPage(pageName) {
    if (this.pageStartTime) {
      const timeOnPage = Date.now() - this.pageStartTime;
      Analytics.track('time_on_page', { page: pageName, duration: timeOnPage });
    }
    this.pageStartTime = Date.now();
  }

  static trackScrollDepth(depth) {
    Analytics.track('scroll_depth', { depth });
  }

  static trackClick(element, context = {}) {
    Analytics.track('click', { 
      element: element,
      ...context 
    });
  }
}

// Initialize analytics
export const initializeAnalytics = () => {
  // Track page views
  EngagementTracker.trackTimeOnPage(window.location.pathname);
  
  // Track scroll depth
  let maxScrollDepth = 0;
  window.addEventListener('scroll', () => {
    const scrollDepth = Math.round(
      (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    );
    if (scrollDepth > maxScrollDepth) {
      maxScrollDepth = scrollDepth;
      EngagementTracker.trackScrollDepth(maxScrollDepth);
    }
  });

  // Track session end on page unload
  window.addEventListener('beforeunload', () => {
    EngagementTracker.endSession();
  });
};
