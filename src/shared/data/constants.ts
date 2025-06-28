/**
 * Application constants used across multiple components and pages
 */

// API Endpoints
export const API_ENDPOINTS = {
  contact: "/api/contact",
  projects: "/api/projects",
  analytics: "/api/analytics"
} as const;

// Animation Durations
export const ANIMATION_DURATIONS = {
  fast: 150,
  normal: 300,
  slow: 500,
  verySlow: 1000
} as const;

// Breakpoints (matching Tailwind CSS)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536
} as const;

// Z-Index Values
export const Z_INDEX = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modal: 1040,
  popover: 1050,
  tooltip: 1060
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  language: "portfolio-language",
  theme: "portfolio-theme",
  analytics: "portfolio-analytics"
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  network: "Network error occurred. Please try again.",
  validation: "Please check your input and try again.",
  notFound: "The requested resource was not found.",
  server: "Server error occurred. Please try again later."
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  contact: "Thank you! Your message has been sent successfully.",
  saved: "Your changes have been saved successfully."
} as const;

// File Types
export const FILE_TYPES = {
  image: ["image/jpeg", "image/png", "image/webp", "image/svg+xml"],
  document: ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]
} as const;

// Max File Sizes (in bytes)
export const MAX_FILE_SIZES = {
  image: 5 * 1024 * 1024, // 5MB
  document: 10 * 1024 * 1024 // 10MB
} as const;