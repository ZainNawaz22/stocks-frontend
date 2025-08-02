// Application constants

export const CHART_COLORS = {
  PRIMARY: '#2563eb',
  SECONDARY: '#7c3aed',
  SUCCESS: '#10b981',
  WARNING: '#f59e0b',
  ERROR: '#ef4444',
  INFO: '#06b6d4',
  UP: '#10b981',
  DOWN: '#ef4444',
  NEUTRAL: '#6b7280',
} as const;

// Semantic colors for financial data
export const FINANCIAL_COLORS = {
  PROFIT: '#10b981',
  LOSS: '#ef4444',
  NEUTRAL: '#6b7280',
  BULLISH: '#059669',
  BEARISH: '#dc2626',
  VOLUME_HIGH: '#7c3aed',
  VOLUME_LOW: '#a78bfa',
} as const;

// Desktop optimization constants
export const BREAKPOINTS = {
  MOBILE: 0,
  TABLET: 600,
  DESKTOP: 900,
  LARGE_DESKTOP: 1200,
  EXTRA_LARGE: 1536,
} as const;

export const LAYOUT_CONSTANTS = {
  HEADER_HEIGHT: {
    MOBILE: 56,
    DESKTOP: 64,
  },
  SIDEBAR_WIDTH: {
    COLLAPSED: 60,
    EXPANDED: 280,
  },
  CONTENT_MAX_WIDTH: 1920,
  PADDING: {
    MOBILE: 16,
    DESKTOP: 24,
    LARGE_DESKTOP: 32,
  },
  GAP: {
    MOBILE: 12,
    DESKTOP: 20,
    LARGE_DESKTOP: 24,
  },
} as const;

// Animation and transition constants
export const ANIMATIONS = {
  HOVER_TRANSFORM: 'translateY(-4px)',
  BUTTON_HOVER_TRANSFORM: 'translateY(-1px)',
  CARD_HOVER_TRANSFORM: 'translateY(-2px)',
  TRANSITION_DURATION: '0.3s',
  TRANSITION_EASING: 'cubic-bezier(0.4, 0, 0.2, 1)',
  HOVER_SHADOW: '0 8px 25px rgba(0,0,0,0.15)',
  CARD_SHADOW: '0 2px 12px rgba(0,0,0,0.08)',
  CARD_HOVER_SHADOW: '0 8px 25px rgba(0,0,0,0.15)',
  FOCUS_RING: '0 0 0 3px rgba(37, 99, 235, 0.1)',
} as const;

// Micro-interaction constants
export const MICRO_INTERACTIONS = {
  BUTTON_PRESS_SCALE: 'scale(0.98)',
  ICON_HOVER_SCALE: 'scale(1.1)',
  CARD_PRESS_SCALE: 'scale(0.995)',
  RIPPLE_DURATION: '0.6s',
  LOADING_PULSE: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
} as const;

// Desktop-specific styling constants
export const DESKTOP_STYLES = {
  BORDER_RADIUS: {
    SMALL: 8,
    MEDIUM: 12,
    LARGE: 16,
  },
  SCROLLBAR: {
    WIDTH: 8,
    TRACK_COLOR: '#f1f1f1',
    THUMB_COLOR: '#c1c1c1',
    THUMB_HOVER_COLOR: '#a1a1a1',
  },
  TYPOGRAPHY: {
    FONT_FAMILY: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  },
} as const;