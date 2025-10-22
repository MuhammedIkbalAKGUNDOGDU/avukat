import { ReactNode } from "react";
import { useFadeIn } from "@/hooks/use-animation";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

export function AnimatedText({
  children,
  className,
  delay = 0,
  as: Component = "div",
}: AnimatedTextProps) {
  const { ref, isVisible } = useFadeIn(delay);

  return (
    <Component
      ref={ref}
      className={cn(
        "transition-all duration-600 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className
      )}
    >
      {children}
    </Component>
  );
}
