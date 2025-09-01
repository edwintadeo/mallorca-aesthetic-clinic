import { ComponentType, lazy, Suspense, ReactNode } from 'react';
import LuxurySkeleton from './LuxurySkeleton';

interface DynamicImportProps {
  children: ReactNode;
  fallback?: ReactNode;
  delay?: number;
  className?: string;
}

export default function DynamicImport({
  children,
  fallback,
  delay = 0,
  className = ''
}: DynamicImportProps) {
  return (
    <Suspense
      fallback={
        fallback || (
          <div className={`dynamic-import-fallback ${className}`}>
            <LuxurySkeleton className="dynamic-skeleton" />
          </div>
        )
      }
    >
      <DelayedComponent delay={delay}>
        {children}
      </DelayedComponent>
    </Suspense>
  );
}

interface DelayedComponentProps {
  children: ReactNode;
  delay: number;
}

function DelayedComponent({ children, delay }: DelayedComponentProps) {
  if (delay > 0) {
    // Simulate delay for testing
    return <div style={{ animationDelay: `${delay}ms` }}>{children}</div>;
  }
  return <>{children}</>;
}

// Utility function to create lazy components with error boundaries
export function createLazyComponent<T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  fallback?: ReactNode
) {
  const LazyComponent = lazy(importFunc);
  
  return function LazyWrapper(props: any) {
    return (
      <Suspense fallback={fallback || <LuxurySkeleton />}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
}

// Preload function for critical components
export function preloadComponent<T extends ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>
) {
  return () => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'script';
    link.href = importFunc.toString();
    document.head.appendChild(link);
  };
}
