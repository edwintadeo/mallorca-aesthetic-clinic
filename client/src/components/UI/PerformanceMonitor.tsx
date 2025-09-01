import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number | null; // Largest Contentful Paint
  fid: number | null; // First Input Delay
  cls: number | null; // Cumulative Layout Shift
  fcp: number | null; // First Contentful Paint
  ttfb: number | null; // Time to First Byte
  loadTime: number | null;
}

export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    loadTime: null
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Solo mostrar en desarrollo
    if (process.env.NODE_ENV !== 'development') return;

    const measurePerformance = () => {
      if (!('performance' in window)) return;

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      // FCP (First Contentful Paint)
      const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const fcp = fcpEntry ? fcpEntry.startTime : null;

      // LCP (Largest Contentful Paint)
      const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
      const lcp = lcpEntries.length > 0 ? lcpEntries[lcpEntries.length - 1].startTime : null;

      // CLS (Cumulative Layout Shift)
      let cls = 0;
      const clsEntries = performance.getEntriesByType('layout-shift');
      clsEntries.forEach(entry => {
        if (!(entry as any).hadRecentInput) {
          cls += (entry as any).value;
        }
      });

      // TTFB (Time to First Byte)
      const ttfb = navigation ? navigation.responseStart - navigation.requestStart : null;

      // Load Time
      const loadTime = navigation ? navigation.loadEventEnd - navigation.fetchStart : null;

      setMetrics({
        lcp,
        fid: null, // FID requires user interaction
        cls: cls > 0 ? cls : null,
        fcp,
        ttfb,
        loadTime
      });
    };

    // Medir después de que la página esté completamente cargada
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Medir LCP después de un delay
    setTimeout(measurePerformance, 2000);

    // Mostrar/ocultar con Ctrl+Shift+P
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('load', measurePerformance);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!isVisible || process.env.NODE_ENV !== 'development') {
    return null;
  }

  const getScoreColor = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'text-gray-500';
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.poor) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreLabel = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'N/A';
    if (value <= thresholds.good) return 'Bueno';
    if (value <= thresholds.poor) return 'Necesita mejora';
    return 'Pobre';
  };

  return (
    <div className="fixed bottom-4 left-4 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-luxury p-4 z-50 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-luxury-sans font-semibold text-gray-900">
          Performance Monitor
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
        >
          ×
        </button>
      </div>

      <div className="space-y-2 text-xs">
        {/* LCP */}
        <div className="flex justify-between items-center">
          <span className="text-gray-600">LCP:</span>
          <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>
            {metrics.lcp ? `${Math.round(metrics.lcp)}ms` : 'N/A'}
          </span>
          <span className={`text-xs ${getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}`}>
            {getScoreLabel(metrics.lcp, { good: 2500, poor: 4000 })}
          </span>
        </div>

        {/* FCP */}
        <div className="flex justify-between items-center">
          <span className="text-gray-600">FCP:</span>
          <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>
            {metrics.fcp ? `${Math.round(metrics.fcp)}ms` : 'N/A'}
          </span>
          <span className={`text-xs ${getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}`}>
            {getScoreLabel(metrics.fcp, { good: 1800, poor: 3000 })}
          </span>
        </div>

        {/* CLS */}
        <div className="flex justify-between items-center">
          <span className="text-gray-600">CLS:</span>
          <span className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}>
            {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}
          </span>
          <span className={`text-xs ${getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}`}>
            {getScoreLabel(metrics.cls, { good: 0.1, poor: 0.25 })}
          </span>
        </div>

        {/* TTFB */}
        <div className="flex justify-between items-center">
          <span className="text-gray-600">TTFB:</span>
          <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>
            {metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : 'N/A'}
          </span>
          <span className={`text-xs ${getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}`}>
            {getScoreLabel(metrics.ttfb, { good: 800, poor: 1800 })}
          </span>
        </div>

        {/* Load Time */}
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Load:</span>
          <span className={getScoreColor(metrics.loadTime, { good: 2000, poor: 4000 })}>
            {metrics.loadTime ? `${Math.round(metrics.loadTime)}ms` : 'N/A'}
          </span>
          <span className={`text-xs ${getScoreColor(metrics.loadTime, { good: 2000, poor: 4000 })}`}>
            {getScoreLabel(metrics.loadTime, { good: 2000, poor: 4000 })}
          </span>
        </div>
      </div>

      <div className="mt-3 pt-2 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          Presiona <kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs">Ctrl+Shift+P</kbd> para mostrar/ocultar
        </p>
      </div>
    </div>
  );
}