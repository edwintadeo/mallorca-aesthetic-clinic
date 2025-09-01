import { useEffect } from 'react';

interface CriticalCSSProps {
  className?: string;
}

export default function CriticalCSS({ className = '' }: CriticalCSSProps) {
  useEffect(() => {
    // Inject critical CSS inline
    const criticalCSS = `
      /* Critical CSS for above-the-fold content */
      .font-body { font-family: 'Gotham', -apple-system, BlinkMacSystemFont, sans-serif; }
      .antialiased { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
      
      /* Critical layout styles */
      .min-h-screen { min-height: 100vh; }
      .bg-gradient-to-b { background-image: linear-gradient(to bottom, var(--tw-gradient-stops)); }
      .from-pearl { --tw-gradient-from: #f8f6f0; --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(248, 246, 240, 0)); }
      .to-white { --tw-gradient-to: #ffffff; }
      
      /* Critical typography */
      .title-luxury { font-family: 'Orpheus Pro', 'Cormorant Garamond', serif; font-weight: 400; }
      .body-refined { font-family: 'Gotham', sans-serif; line-height: 1.8; }
      
      /* Critical colors */
      :root {
        --gold-deep: #A57D24;
        --gold-light: #D4AF37;
        --turquoise: #008578;
        --pearl: #F8F6F0;
        --dark-neutral: #3A3A3A;
      }
      
      /* Critical floating navbar */
      .floating-navbar {
        position: fixed;
        top: 1rem;
        left: 50%;
        transform: translateX(-50%);
        z-index: 50;
        backdrop-filter: blur(20px);
        background: rgba(255, 255, 255, 0.9);
        border: 1px solid rgba(165, 125, 36, 0.2);
        border-radius: 2rem;
        padding: 0.75rem 2rem;
        transition: all 0.3s ease;
      }
      
      /* Critical hero section */
      .cinematic-hero {
        position: relative;
        height: 100vh;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .hero-video {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -1;
      }
      
      .hero-content {
        text-align: center;
        color: white;
        z-index: 1;
        max-width: 4xl;
        margin: 0 auto;
        padding: 0 2rem;
      }
      
      /* Critical button styles */
      .cta-enhanced {
        background: linear-gradient(135deg, var(--gold-deep), var(--gold-light));
        color: white;
        border: none;
        border-radius: 2rem;
        padding: 1rem 2rem;
        font-family: 'Gotham', sans-serif;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        transition: all 0.3s ease;
        cursor: pointer;
      }
      
      .cta-enhanced:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(165, 125, 36, 0.3);
      }
      
      /* Critical loading states */
      .luxury-skeleton {
        background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
        background-size: 200% 100%;
        animation: skeleton-shimmer 1.5s infinite;
        border-radius: 0.5rem;
      }
      
      @keyframes skeleton-shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
      
      /* Critical responsive */
      @media (max-width: 768px) {
        .floating-navbar {
          top: 0.5rem;
          left: 1rem;
          right: 1rem;
          transform: none;
          padding: 0.5rem 1rem;
        }
        
        .hero-content {
          padding: 0 1rem;
        }
        
        .cinematic-hero {
          height: 80vh;
        }
      }
    `;

    // Create style element
    const styleElement = document.createElement('style');
    styleElement.textContent = criticalCSS;
    styleElement.setAttribute('data-critical', 'true');
    
    // Insert at the beginning of head
    const head = document.head;
    head.insertBefore(styleElement, head.firstChild);

    // Load non-critical CSS asynchronously
    const loadNonCriticalCSS = () => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/assets/non-critical.css';
      link.media = 'print';
      link.onload = () => {
        link.media = 'all';
      };
      document.head.appendChild(link);
    };

    // Load after page load
    if (document.readyState === 'complete') {
      loadNonCriticalCSS();
    } else {
      window.addEventListener('load', loadNonCriticalCSS);
    }

    return () => {
      // Cleanup
      const criticalStyle = document.querySelector('style[data-critical="true"]');
      if (criticalStyle) {
        criticalStyle.remove();
      }
    };
  }, []);

  return (
    <div className={`critical-css ${className}`}>
      {/* This component is invisible but injects critical CSS */}
    </div>
  );
}

// Utility function to extract critical CSS
export function extractCriticalCSS(html: string, css: string): string {
  // This would be implemented with a tool like critical
  // For now, return the full CSS
  return css;
}

// Utility function to inline critical CSS
export function inlineCriticalCSS(criticalCSS: string): string {
  return `<style>${criticalCSS}</style>`;
}
