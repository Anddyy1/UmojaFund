export default function SkeletonLoader({ className = "" }) {
  return (
    <div
      className={`bg-gray-200 dark:bg-gray-700 animate-pulse rounded-lg ${className}`}
    />
  );
}