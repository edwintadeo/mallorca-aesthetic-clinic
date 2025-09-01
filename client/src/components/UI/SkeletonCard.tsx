import { Card } from "@/components/UI/card";

export default function SkeletonCard() {
  return (
    <Card className="h-full animate-pulse">
      <div className="aspect-[4/3] bg-gray-200 rounded-t-lg" />
      <div className="p-6 space-y-3">
        <div className="h-6 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
        <div className="h-10 bg-gray-200 rounded w-32 mt-4" />
      </div>
    </Card>
  );
}