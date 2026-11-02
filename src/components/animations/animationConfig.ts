/**
 * Shared Animation Configuration
 * Single source of truth for easing curves, durations, and responsive travel distances.
 */

export const ANIMATION_CONFIG = {
  // Cubic-bezier curve for smooth, decelerating spring-like momentum
  ease: [0.22, 1, 0.36, 1] as const,
  
  // Standard durations in seconds
  durations: {
    fast: 0.4,
    base: 0.65,
    slow: 0.85,
    counter: 1.4,
  },

  // Responsive travel distances (pixels)
  distance: {
    desktop: 24,
    mobile: 14,
  },

  // Default scroll-linked offsets for useScroll (mutable array compatible with Motion)
  scrollOffsets: {
    standard: ["start 0.9", "start 0.4"] as ["start 0.9", "start 0.4"],
    subtle: ["start 0.95", "start 0.55"] as ["start 0.95", "start 0.55"],
    tight: ["start 0.85", "start 0.45"] as ["start 0.85", "start 0.45"],
  },
};
