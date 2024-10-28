import Link from "next/link";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LoadingButton({ isLoading, className,link }) {
  return (
    <Button asChild disabled={isLoading} className={className}>
      {isLoading ? (
        <span>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </span>
      ) : (
        <Button>THis is button</Button>
      )}
    </Button>
  );
}
