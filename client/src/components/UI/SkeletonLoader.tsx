import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "card" | "image" | "button";
  count?: number;
}

export function Skeleton({ className, variant = "text", count = 1 }: SkeletonProps) {
  const baseClasses = "animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]";
  
  const variants = {
    text: "h-4 rounded-md",
    card: "h-64 rounded-lg",
    image: "aspect-video rounded-lg",
    button: "h-10 w-32 rounded-md"
  };

  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={cn(baseClasses, variants[variant], className)}
          data-testid={`skeleton-${variant}-${index}`}
        />
      ))}
    </>
  );
}

export function TreatmentCardSkeleton() {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg">
      <Skeleton variant="image" className="h-48" />
      <div className="p-6 space-y-3">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <div className="pt-4">
          <Skeleton variant="button" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export function TestimonialSkeleton() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <div className="flex items-center gap-4 mb-4">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div className="flex-1">
          <Skeleton className="h-5 w-32 mb-2" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6" />
    </div>
  );
}

export function BlogCardSkeleton() {
  return (
    <article className="bg-white rounded-xl overflow-hidden shadow-lg">
      <Skeleton variant="image" className="h-56" />
      <div className="p-6 space-y-3">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
        <div className="pt-4">
          <Skeleton className="h-4 w-32" />
        </div>
      </div>
    </article>
  );
}