import { useEffect, useRef, useCallback } from "react";
import { ScaleLoader } from "react-spinners";

export interface InfiniteScrollTriggerProps {
  onLoadMore: () => void;
  hasMore: boolean;
  isLoading: boolean;
  loadingText?: string;
  endText?: string;
  className?: string;
  threshold?: number;
}

export function InfiniteScrollTrigger({
  onLoadMore,
  hasMore = true,
  isLoading = false,
  loadingText = "Load data",
  endText = "No more data",
  className = "",
  threshold = 0.1,
}: InfiniteScrollTriggerProps) {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && hasMore && !isLoading) {
        onLoadMore();
      }
    },
    [onLoadMore, hasMore, isLoading]
  );

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin: "50px", // Trigger sedikit lebih awal
    });

    if (triggerRef.current && observerRef.current) {
      observerRef.current.observe(triggerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleIntersection, threshold]);

  if (!hasMore && !isLoading) {
    return (
      <div className={`flex items-center justify-center py-6 ${className}`}>
        <span className="text-sm text-gray-500 font-medium">{endText}</span>
      </div>
    );
  }

  return (
    <div
      ref={triggerRef}
      className={`flex items-center justify-center py-6 ${className}`}
    >
      {isLoading ? (
        <div className="flex flex-col items-center gap-2">
          <ScaleLoader color="#000" />
          <span className="font-medium">{loadingText}</span>
        </div>
      ) : (
        <div className="h-1" />
      )}
    </div>
  );
}