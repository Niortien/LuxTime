"use client";

import { useEffect } from "react";
import { AlertCircle, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-card rounded-2xl p-8 md:p-12">
          {/* Error Icon */}
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="absolute inset-0 bg-destructive/10 rounded-full animate-pulse"></div>
            <div className="relative flex items-center justify-center w-full h-full">
              <AlertCircle className="w-14 h-14 text-destructive" />
            </div>
          </div>

          {/* Error Content */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">
              Something went wrong!
            </h1>
            <p className="text-muted-foreground">
              We apologize for the inconvenience. Please try again later.
            </p>

            {/* Error Details */}
            <div className="bg-muted/50 rounded-lg p-4 mt-6">
              <p className="text-sm font-mono text-muted-foreground break-all">
                {error.message || "An unexpected error occurred"}
              </p>
              {error.digest && (
                <p className="text-xs text-muted-foreground mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button
                variant="outline"
                className="w-full sm:w-auto"
                onClick={() => (window.location.href = "/")}
              >
                Go to Homepage
              </Button>
              <Button
                className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => reset()}
              >
                <RefreshCcw className="mr-2 h-4 w-4" />
                Try Again
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Help */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Need help? Contact our{" "}
            <a
              href="/support"
              className="text-primary hover:underline font-medium"
            >
              support team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
