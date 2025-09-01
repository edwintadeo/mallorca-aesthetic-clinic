import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "card" | "image" | "button";
  count?: number;
}

export function Skeleton({ className, variant = "text", count = 1 }: SkeletonProps) {
  const baseClasses = "animate-pulse bg-gradient-to-r from-pearl/30 via-gold-light/15 to-pearl/30 bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite]";
  
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
    <div className="bg-pearl/20 rounded-xl overflow-hidden shadow-lg border border-gold-light/10">
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
    <div className="bg-pearl/20 rounded-xl p-6 shadow-md border border-gold-light/10">
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
    <article className="bg-pearl/20 rounded-xl overflow-hidden shadow-lg border border-gold-light/10">
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