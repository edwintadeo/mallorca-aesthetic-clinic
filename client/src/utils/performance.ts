// Performance monitoring utilities

export const reportWebVitals = (metric: any) => {
  if (metric.label === 'web-vital') {
    console.log(`${metric.name}: ${metric.value}`);
    
    // Send to analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', metric.name, {
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        event_label: metric.id,
        non_interaction: true,
      });
    }
  }
};

// Lazy load images with Intersection Observer
export const lazyLoadImages = () => {
  const images = document.querySelectorAll('img[data-lazy]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        const src = img.dataset.src;
        
        if (src) {
          img.src = src;
          img.removeAttribute('data-lazy');
          imageObserver.unobserve(img);
        }
      }
    });
  }, {
    rootMargin: '50px',
  });
  
  images.forEach((img) => imageObserver.observe(img));
};

// Preload critical resources
export const preloadCriticalAssets = () => {
  const criticalAssets = [
    '/fonts/cormorant-garamond-v16-latin-regular.woff2',
    '/fonts/inter-v12-latin-regular.woff2',
  ];
  
  criticalAssets.forEach((asset) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = asset;
    link.as = asset.endsWith('.woff2') ? 'font' : 'image';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

// Enable browser cache hints
export const setCacheHeaders = () => {
  // This would typically be done server-side, but we can hint the browser
  if ('caches' in window) {
    caches.open('mac-v1').then((cache) => {
      cache.addAll([
        '/',
        '/tratamientos',
        '/nosotros',
        '/contacto',
        '/blog',
      ]);
    });
  }
};