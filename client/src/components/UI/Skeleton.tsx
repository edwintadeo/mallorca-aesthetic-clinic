import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-muted/40",
        className
      )}
      {...props}
    />
  );
}

export function SkeletonCard() {
  return (
    <div className="rounded-lg border bg-card p-6 space-y-4">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-5/6" />
    </div>
  );
}

export function SkeletonTestimonial() {
  return (
    <div className="rounded-lg border bg-card p-6">
      <div className="flex items-start space-x-4 mb-4">
        <Skeleton className="w-12 h-12 rounded-full" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-3 w-1/4" />
        </div>
      </div>
      <Skeleton className="h-3 w-full mb-2" />
      <Skeleton className="h-3 w-5/6" />
    </div>
  );
}

export function SkeletonTreatment() {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <Skeleton className="w-full h-64" />
      <div className="absolute bottom-6 left-6 right-6 space-y-2">
        <Skeleton className="h-6 w-2/3 bg-white/20" />
        <Skeleton className="h-4 w-full bg-white/20" />
      </div>
    </div>
  );
}