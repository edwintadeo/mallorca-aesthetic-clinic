import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  fmp: number | null;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  className?: string;
}

export default function PerformanceMonitor({ 
  onMetricsUpdate, 
  className = '' 
}: PerformanceMonitorProps) {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fmp: null
  });

  useEffect(() => {
    const measurePerformance = () => {
      if (!('performance' in window)) return;

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      // First Contentful Paint
      const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const fcp = fcpEntry ? fcpEntry.startTime : null;

      // Time to First Byte
      const ttfb = navigation ? navigation.responseStart - navigation.requestStart : null;

      // First Meaningful Paint (approximation)
      const fmp = navigation ? navigation.domContentLoadedEventEnd - navigation.navigationStart : null;

      const newMetrics: PerformanceMetrics = {
        fcp,
        lcp: null, // Will be updated by LCP observer
        fid: null, // Will be updated by FID observer
        cls: null, // Will be updated by CLS observer
        ttfb,
        fmp
      };

      setMetrics(newMetrics);
      onMetricsUpdate?.(newMetrics);
    };

    // Measure initial performance
    measurePerformance();

    // Set up LCP observer
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      setMetrics(prev => ({
        ...prev,
        lcp: lastEntry.startTime
      }));
    });

    try {
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      console.warn('LCP observer not supported');
    }

    // Set up FID observer
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        setMetrics(prev => ({
          ...prev,
          fid: entry.processingStart - entry.startTime
        }));
      });
    });

    try {
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      console.warn('FID observer not supported');
    }

    // Set up CLS observer
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      const entries = list.getEntries();
      
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });

      setMetrics(prev => ({
        ...prev,
        cls: clsValue
      }));
    });

    try {
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      console.warn('CLS observer not supported');
    }

    // Cleanup
    return () => {
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, [onMetricsUpdate]);

  // Log performance metrics to console in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', metrics);
    }
  }, [metrics]);

  return (
    <div className={`performance-monitor ${className}`}>
      {/* This component is invisible but monitors performance */}
    </div>
  );
}

// Utility function to get performance score
export function getPerformanceScore(metrics: PerformanceMetrics): number {
  let score = 100;
  
  // FCP scoring (0-100)
  if (metrics.fcp !== null) {
    if (metrics.fcp > 3000) score -= 30;
    else if (metrics.fcp > 2000) score -= 20;
    else if (metrics.fcp > 1500) score -= 10;
  }
  
  // LCP scoring (0-100)
  if (metrics.lcp !== null) {
    if (metrics.lcp > 4000) score -= 30;
    else if (metrics.lcp > 2500) score -= 20;
    else if (metrics.lcp > 2000) score -= 10;
  }
  
  // FID scoring (0-100)
  if (metrics.fid !== null) {
    if (metrics.fid > 300) score -= 20;
    else if (metrics.fid > 100) score -= 10;
  }
  
  // CLS scoring (0-100)
  if (metrics.cls !== null) {
    if (metrics.cls > 0.25) score -= 20;
    else if (metrics.cls > 0.1) score -= 10;
  }
  
  return Math.max(0, score);
}

// Utility function to send metrics to analytics
export function sendPerformanceMetrics(metrics: PerformanceMetrics, endpoint?: string) {
  if (!endpoint) return;
  
  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...metrics,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href
    })
  }).catch(error => {
    console.warn('Failed to send performance metrics:', error);
  });
}
