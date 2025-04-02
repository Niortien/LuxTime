import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12">
          {/* Loading Animation */}
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 bg-primary/10 rounded-full"></div>
            <div className="relative flex items-center justify-center w-full h-full">
              <Loader2 className="w-14 h-14 text-primary animate-spin" />
            </div>
          </div>

          {/* Loading Content */}
          <div className="text-center space-y-4">
            <div className="space-y-3">
              {/* Animated loading bars */}
              <div className="h-4 w-3/4 bg-muted rounded-full mx-auto overflow-hidden">
                <div className="h-full w-1/2 bg-primary/20 rounded-full animate-[shimmer_1s_infinite]"></div>
              </div>
              <div className="h-3 w-1/2 bg-muted rounded-full mx-auto overflow-hidden">
                <div className="h-full w-1/2 bg-primary/20 rounded-full animate-[shimmer_1s_infinite]"></div>
              </div>
            </div>

            {/* Loading text */}
            <p className="text-muted-foreground animate-pulse">
              Loading amazing content...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}