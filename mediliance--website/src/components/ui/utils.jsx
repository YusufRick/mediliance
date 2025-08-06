/**
 * Utility function to combine class names conditionally.
 * Example: cn("base", condition && "conditional", "always")
 * Output: "base conditional always" (if condition is true)
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
