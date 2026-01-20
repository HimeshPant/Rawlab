import React from "react";
import { cva } from "class-variance-authority";
// Using relative path to utils to be safe (assuming utils is at src/lib/utils.js)
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black",
  {
    variants: {
      variant: {
        // Primary gradient button
        primary:
          "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:opacity-90 shadow-lg shadow-blue-500/30",
        // Outline/Secondary button
        outline:
          "bg-white/10 border border-white/20 text-white hover:bg-white/20",
        // Simple white/black button
        default: "bg-white text-black hover:bg-grayz-200",
      },
      size: {
        default: "px-6 py-3 text-base", // Hero/CTA size
        sm: "px-4 py-2 text-sm", // Header size
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

/**
 * A reusable Button component with variants.
 * Can act as a <button> or <a> tag.
 * @param {object} props
 * @param {'primary' | 'outline' | 'default'} props.variant - The button style
 * @param {'default' | 'sm'} props.size - The button size
 * @param {string} [props.as='button'] - Renders 'a' tag if 'a' is passed
 * @param {string} [props.className] - Additional classes
 */
const LandingButton = React.forwardRef(
  ({ className, variant, size, as = "button", ...props }, ref) => {
    const Comp = as; // as="a" renders an <a> tag
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
LandingButton.displayName = "LandingButton";

export default LandingButton;
