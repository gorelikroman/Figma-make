/**
 * Tailwind Config with Design Tokens
 * Generated automatically from Figma tokens
 *
 * IMPORTANT: This file uses CSS variables from tokens.css
 * Import tokens.css into your main CSS file:
 * @import './tokens.css';
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./templates/**/*.{ejs,html}",
  ],
  theme: {
    extend: {
      colors: {
        // ===================================
        // BRAND TOKENS
        // Base colors (store hex values)
        // ===================================
        brand: {
          green-dark: {
            100: 'var(--brand-green-dark-100)',
            200: 'var(--brand-green-dark-200)',
            300: 'var(--brand-green-dark-300)',
            400: 'var(--brand-green-dark-400)',
            500: 'var(--brand-green-dark-500)',
            600: 'var(--brand-green-dark-600)',
            700: 'var(--brand-green-dark-700)',
            800: 'var(--brand-green-dark-800)',
            900: 'var(--brand-green-dark-900)',
            1000: 'var(--brand-green-dark-1000)',
            o500-2: 'var(--brand-green-dark-o500-2)',
            o500-5: 'var(--brand-green-dark-o500-5)',
            o500-7: 'var(--brand-green-dark-o500-7)',
            o500-10: 'var(--brand-green-dark-o500-10)',
            o500-15: 'var(--brand-green-dark-o500-15)',
            o500-20: 'var(--brand-green-dark-o500-20)',
            o500-30: 'var(--brand-green-dark-o500-30)',
            o500-50: 'var(--brand-green-dark-o500-50)'
          },
          neutral: {
            0: 'var(--brand-neutral-0)',
            50: 'var(--brand-neutral-50)',
            100: 'var(--brand-neutral-100)',
            200: 'var(--brand-neutral-200)',
            300: 'var(--brand-neutral-300)',
            400: 'var(--brand-neutral-400)',
            500: 'var(--brand-neutral-500)',
            600: 'var(--brand-neutral-600)',
            700: 'var(--brand-neutral-700)',
            800: 'var(--brand-neutral-800)',
            900: 'var(--brand-neutral-900)',
            1000: 'var(--brand-neutral-1000)',
            1100: 'var(--brand-neutral-1100)',
            1200: 'var(--brand-neutral-1200)',
            1300: 'var(--brand-neutral-1300)',
            1400: 'var(--brand-neutral-1400)',
            1500: 'var(--brand-neutral-1500)',
            1600: 'var(--brand-neutral-1600)',
            1700: 'var(--brand-neutral-1700)',
            o0-2: 'var(--brand-neutral-o0-2)',
            o0-5: 'var(--brand-neutral-o0-5)',
            o0-7: 'var(--brand-neutral-o0-7)',
            o0-10: 'var(--brand-neutral-o0-10)',
            o0-15: 'var(--brand-neutral-o0-15)',
            o0-20: 'var(--brand-neutral-o0-20)',
            o0-30: 'var(--brand-neutral-o0-30)',
            o0-50: 'var(--brand-neutral-o0-50)',
            o17-2: 'var(--brand-neutral-o17-2)',
            o17-5: 'var(--brand-neutral-o17-5)',
            o17-7: 'var(--brand-neutral-o17-7)',
            o17-10: 'var(--brand-neutral-o17-10)',
            o17-15: 'var(--brand-neutral-o17-15)',
            o17-20: 'var(--brand-neutral-o17-20)',
            o17-30: 'var(--brand-neutral-o17-30)',
            o17-50: 'var(--brand-neutral-o17-50)',
            transparent: 'var(--brand-neutral-transparent)'
          },
          green-light: {
            25: 'var(--brand-green-light-25)',
            50: 'var(--brand-green-light-50)',
            100: 'var(--brand-green-light-100)',
            200: 'var(--brand-green-light-200)',
            300: 'var(--brand-green-light-300)',
            400: 'var(--brand-green-light-400)',
            500: 'var(--brand-green-light-500)',
            600: 'var(--brand-green-light-600)',
            700: 'var(--brand-green-light-700)',
            800: 'var(--brand-green-light-800)',
            900: 'var(--brand-green-light-900)',
            o5-2: 'var(--brand-green-light-o5-2)',
            o5-5: 'var(--brand-green-light-o5-5)',
            o5-7: 'var(--brand-green-light-o5-7)',
            o5-10: 'var(--brand-green-light-o5-10)',
            o5-15: 'var(--brand-green-light-o5-15)',
            o5-20: 'var(--brand-green-light-o5-20)',
            o5-30: 'var(--brand-green-light-o5-30)',
            o5-50: 'var(--brand-green-light-o5-50)'
          },
          red: {
            50: 'var(--brand-red-50)',
            100: 'var(--brand-red-100)',
            200: 'var(--brand-red-200)',
            300: 'var(--brand-red-300)',
            400: 'var(--brand-red-400)',
            500: 'var(--brand-red-500)',
            600: 'var(--brand-red-600)',
            700: 'var(--brand-red-700)',
            800: 'var(--brand-red-800)',
            900: 'var(--brand-red-900)',
            o5-2: 'var(--brand-red-o5-2)',
            o5-5: 'var(--brand-red-o5-5)',
            o5-7: 'var(--brand-red-o5-7)',
            o5-10: 'var(--brand-red-o5-10)',
            o5-15: 'var(--brand-red-o5-15)',
            o5-20: 'var(--brand-red-o5-20)',
            o5-30: 'var(--brand-red-o5-30)',
            o5-50: 'var(--brand-red-o5-50)'
          },
          braun: {
            50: 'var(--brand-braun-50)',
            100: 'var(--brand-braun-100)',
            150: 'var(--brand-braun-150)',
            200: 'var(--brand-braun-200)',
            250: 'var(--brand-braun-250)',
            300: 'var(--brand-braun-300)',
            400: 'var(--brand-braun-400)',
            500: 'var(--brand-braun-500)',
            600: 'var(--brand-braun-600)',
            700: 'var(--brand-braun-700)',
            800: 'var(--brand-braun-800)',
            900: 'var(--brand-braun-900)',
            o500-2: 'var(--brand-braun-o500-2)',
            o500-5: 'var(--brand-braun-o500-5)',
            o500-7: 'var(--brand-braun-o500-7)',
            o500-10: 'var(--brand-braun-o500-10)',
            o500-15: 'var(--brand-braun-o500-15)',
            o500-20: 'var(--brand-braun-o500-20)',
            o500-30: 'var(--brand-braun-o500-30)',
            o500-50: 'var(--brand-braun-o500-50)'
          },
          blue: {
            50: 'var(--brand-blue-50)',
            100: 'var(--brand-blue-100)',
            150: 'var(--brand-blue-150)',
            200: 'var(--brand-blue-200)',
            250: 'var(--brand-blue-250)',
            300: 'var(--brand-blue-300)',
            400: 'var(--brand-blue-400)',
            500: 'var(--brand-blue-500)',
            600: 'var(--brand-blue-600)',
            700: 'var(--brand-blue-700)',
            800: 'var(--brand-blue-800)',
            900: 'var(--brand-blue-900)',
            o500-2: 'var(--brand-blue-o500-2)',
            o500-5: 'var(--brand-blue-o500-5)',
            o500-7: 'var(--brand-blue-o500-7)',
            o500-10: 'var(--brand-blue-o500-10)',
            o500-15: 'var(--brand-blue-o500-15)',
            o500-20: 'var(--brand-blue-o500-20)',
            o500-30: 'var(--brand-blue-o500-30)',
            o500-50: 'var(--brand-blue-o500-50)'
          },
          pink: {
            50: 'var(--brand-pink-50)',
            100: 'var(--brand-pink-100)',
            150: 'var(--brand-pink-150)',
            200: 'var(--brand-pink-200)',
            250: 'var(--brand-pink-250)',
            300: 'var(--brand-pink-300)',
            400: 'var(--brand-pink-400)',
            500: 'var(--brand-pink-500)',
            600: 'var(--brand-pink-600)',
            700: 'var(--brand-pink-700)',
            800: 'var(--brand-pink-800)',
            900: 'var(--brand-pink-900)',
            500-2: 'var(--brand-pink-500-2)',
            o500-5: 'var(--brand-pink-o500-5)',
            o500-7: 'var(--brand-pink-o500-7)',
            o500-10: 'var(--brand-pink-o500-10)',
            o500-15: 'var(--brand-pink-o500-15)',
            o500-20: 'var(--brand-pink-o500-20)',
            o500-30: 'var(--brand-pink-o500-30)',
            o500-50: 'var(--brand-pink-o500-50)'
          },
          orange: {
            50: 'var(--brand-orange-50)',
            100: 'var(--brand-orange-100)',
            150: 'var(--brand-orange-150)',
            200: 'var(--brand-orange-200)',
            250: 'var(--brand-orange-250)',
            300: 'var(--brand-orange-300)',
            400: 'var(--brand-orange-400)',
            500: 'var(--brand-orange-500)',
            550: 'var(--brand-orange-550)',
            600: 'var(--brand-orange-600)',
            700: 'var(--brand-orange-700)',
            800: 'var(--brand-orange-800)',
            900: 'var(--brand-orange-900)',
            o500-2: 'var(--brand-orange-o500-2)',
            o500-5: 'var(--brand-orange-o500-5)',
            o500-7: 'var(--brand-orange-o500-7)',
            o500-10: 'var(--brand-orange-o500-10)',
            o500-15: 'var(--brand-orange-o500-15)',
            o500-20: 'var(--brand-orange-o500-20)',
            o500-30: 'var(--brand-orange-o500-30)',
            o500-50: 'var(--brand-orange-o500-50)'
          },
          magenta: {
            50: 'var(--brand-magenta-50)',
            100: 'var(--brand-magenta-100)',
            200: 'var(--brand-magenta-200)',
            300: 'var(--brand-magenta-300)',
            400: 'var(--brand-magenta-400)',
            500: 'var(--brand-magenta-500)',
            600: 'var(--brand-magenta-600)',
            700: 'var(--brand-magenta-700)',
            800: 'var(--brand-magenta-800)',
            900: 'var(--brand-magenta-900)'
          },
          peach: {
            50: 'var(--brand-peach-50)',
            100: 'var(--brand-peach-100)',
            200: 'var(--brand-peach-200)',
            300: 'var(--brand-peach-300)',
            400: 'var(--brand-peach-400)',
            500: 'var(--brand-peach-500)',
            600: 'var(--brand-peach-600)',
            700: 'var(--brand-peach-700)',
            800: 'var(--brand-peach-800)',
            900: 'var(--brand-peach-900)'
          },
          violet: {
            25: 'var(--brand-violet-25)',
            50: 'var(--brand-violet-50)',
            100: 'var(--brand-violet-100)',
            150: 'var(--brand-violet-150)',
            200: 'var(--brand-violet-200)',
            250: 'var(--brand-violet-250)',
            300: 'var(--brand-violet-300)',
            450: 'var(--brand-violet-450)',
            500: 'var(--brand-violet-500)',
            600: 'var(--brand-violet-600)',
            700: 'var(--brand-violet-700)',
            800: 'var(--brand-violet-800)',
            900: 'var(--brand-violet-900)'
          }
        },

        // ===================================
        // ALIAS TOKENS
        // Semantic tokens → refer to brand
        // ===================================
        alias: {
          primary: {
            50: 'var(--alias-primary-50)',
            100: 'var(--alias-primary-100)',
            200: 'var(--alias-primary-200)',
            300: 'var(--alias-primary-300)',
            400: 'var(--alias-primary-400)',
            500: 'var(--alias-primary-500)',
            600: 'var(--alias-primary-600)',
            700: 'var(--alias-primary-700)',
            800: 'var(--alias-primary-800)',
            900: 'var(--alias-primary-900)',
            o500_2: 'var(--alias-primary-o500-2)',
            o500_5: 'var(--alias-primary-o500-5)',
            o500_7: 'var(--alias-primary-o500-7)',
            o500_10: 'var(--alias-primary-o500-10)',
            o500_15: 'var(--alias-primary-o500-15)',
            o500_20: 'var(--alias-primary-o500-20)',
            o500_30: 'var(--alias-primary-o500-30)',
            o500_50: 'var(--alias-primary-o500-50)'
          },
          secondary: {
            25: 'var(--alias-secondary-25)',
            50: 'var(--alias-secondary-50)',
            100: 'var(--alias-secondary-100)',
            200: 'var(--alias-secondary-200)',
            300: 'var(--alias-secondary-300)',
            400: 'var(--alias-secondary-400)',
            500: 'var(--alias-secondary-500)',
            600: 'var(--alias-secondary-600)',
            700: 'var(--alias-secondary-700)',
            800: 'var(--alias-secondary-800)',
            900: 'var(--alias-secondary-900)',
            o500_2: 'var(--alias-secondary-o500-2)',
            o500_5: 'var(--alias-secondary-o500-5)',
            o500_7: 'var(--alias-secondary-o500-7)',
            o500_10: 'var(--alias-secondary-o500-10)',
            o500_15: 'var(--alias-secondary-o500-15)',
            o500_20: 'var(--alias-secondary-o500-20)',
            o500_30: 'var(--alias-secondary-o500-30)',
            o500_50: 'var(--alias-secondary-o500-50)'
          },
          error: {
            50: 'var(--alias-error-50)',
            100: 'var(--alias-error-100)',
            200: 'var(--alias-error-200)',
            300: 'var(--alias-error-300)',
            400: 'var(--alias-error-400)',
            500: 'var(--alias-error-500)',
            600: 'var(--alias-error-600)',
            700: 'var(--alias-error-700)',
            800: 'var(--alias-error-800)',
            o500_2: 'var(--alias-error-o500-2)',
            o500_5: 'var(--alias-error-o500-5)',
            o500_7: 'var(--alias-error-o500-7)',
            o500_10: 'var(--alias-error-o500-10)',
            o500_15: 'var(--alias-error-o500-15)',
            o500_20: 'var(--alias-error-o500-20)',
            o500_30: 'var(--alias-error-o500-30)',
            o500_50: 'var(--alias-error-o500-50)'
          },
          neutral: {
            0: 'var(--alias-neutral-0)',
            50: 'var(--alias-neutral-50)',
            100: 'var(--alias-neutral-100)',
            200: 'var(--alias-neutral-200)',
            300: 'var(--alias-neutral-300)',
            400: 'var(--alias-neutral-400)',
            500: 'var(--alias-neutral-500)',
            600: 'var(--alias-neutral-600)',
            700: 'var(--alias-neutral-700)',
            800: 'var(--alias-neutral-800)',
            900: 'var(--alias-neutral-900)',
            1000: 'var(--alias-neutral-1000)',
            1100: 'var(--alias-neutral-1100)',
            1200: 'var(--alias-neutral-1200)',
            1300: 'var(--alias-neutral-1300)',
            1400: 'var(--alias-neutral-1400)',
            1500: 'var(--alias-neutral-1500)',
            1600: 'var(--alias-neutral-1600)',
            1700: 'var(--alias-neutral-1700)',
            o0_2: 'var(--alias-neutral-o0-2)',
            o0_5: 'var(--alias-neutral-o0-5)',
            o0_7: 'var(--alias-neutral-o0-7)',
            o0_10: 'var(--alias-neutral-o0-10)',
            o0_15: 'var(--alias-neutral-o0-15)',
            o0_20: 'var(--alias-neutral-o0-20)',
            o0_30: 'var(--alias-neutral-o0-30)',
            o0_50: 'var(--alias-neutral-o0-50)',
            o17_2: 'var(--alias-neutral-o17-2)',
            o17_5: 'var(--alias-neutral-o17-5)',
            o17_7: 'var(--alias-neutral-o17-7)',
            o17_10: 'var(--alias-neutral-o17-10)',
            o17_15: 'var(--alias-neutral-o17-15)',
            o17_20: 'var(--alias-neutral-o17-20)',
            o17_30: 'var(--alias-neutral-o17-30)',
            o17_50: 'var(--alias-neutral-o17-50)',
            transparent: 'var(--alias-neutral-transparent)'
          },
          info: {
            50: 'var(--alias-info-50)',
            100: 'var(--alias-info-100)',
            150: 'var(--alias-info-150)',
            200: 'var(--alias-info-200)',
            300: 'var(--alias-info-300)',
            400: 'var(--alias-info-400)',
            500: 'var(--alias-info-500)',
            600: 'var(--alias-info-600)',
            700: 'var(--alias-info-700)',
            800: 'var(--alias-info-800)',
            900: 'var(--alias-info-900)',
            o500_2: 'var(--alias-info-o500-2)',
            o500_5: 'var(--alias-info-o500-5)',
            o500_7: 'var(--alias-info-o500-7)',
            o500_10: 'var(--alias-info-o500-10)',
            o500_15: 'var(--alias-info-o500-15)',
            o500_20: 'var(--alias-info-o500-20)',
            o500_30: 'var(--alias-info-o500-30)',
            o500_50: 'var(--alias-info-o500-50)'
          },
          warning: {
            50: 'var(--alias-warning-50)',
            100: 'var(--alias-warning-100)',
            200: 'var(--alias-warning-200)',
            300: 'var(--alias-warning-300)',
            400: 'var(--alias-warning-400)',
            500: 'var(--alias-warning-500)',
            600: 'var(--alias-warning-600)',
            700: 'var(--alias-warning-700)',
            800: 'var(--alias-warning-800)',
            900: 'var(--alias-warning-900)',
            o500_2: 'var(--alias-warning-o500-2)',
            o500_5: 'var(--alias-warning-o500-5)',
            o500_7: 'var(--alias-warning-o500-7)',
            o500_10: 'var(--alias-warning-o500-10)',
            o500_15: 'var(--alias-warning-o500-15)',
            o500_20: 'var(--alias-warning-o500-20)',
            o500_30: 'var(--alias-warning-o500-30)',
            o500_50: 'var(--alias-warning-o500-50)'
          }
        },

        // ===================================
        // MAPPED TOKENS
        // Component-level tokens → refer to alias
        // ===================================
        surface: {
          background: 'var(--mapped-surface-background)',
          background_gray: 'var(--mapped-surface-background-gray)',
          card: 'var(--mapped-surface-card)',
          card_raised: 'var(--mapped-surface-card-raised)',
          overlay: 'var(--mapped-surface-overlay)',
          primary: 'var(--mapped-surface-primary)',
          secondary: 'var(--mapped-surface-secondary)',
          selected: 'var(--mapped-surface-selected)',
          error: 'var(--mapped-surface-error)',
          error_focus: 'var(--mapped-surface-error-focus)',
          warning: 'var(--mapped-surface-warning)',
          warning_focus: 'var(--mapped-surface-warning-focus)',
          warning_light: 'var(--mapped-surface-warning-light)',
          info: 'var(--mapped-surface-info)',
          info_focus: 'var(--mapped-surface-info-focus)',
          info_background: 'var(--mapped-surface-info-background)',
          success: 'var(--mapped-surface-success)',
          disabled: 'var(--mapped-surface-disabled)',
          disabled_dark: 'var(--mapped-surface-disabled-dark)',
          background_dark: 'var(--mapped-surface-background-dark)',
          green: 'var(--mapped-surface-green)',
          focus: 'var(--mapped-surface-focus)',
          inner_shadow: 'var(--mapped-surface-inner-shadow)',
          shadow: 'var(--mapped-surface-shadow)',
          footer: 'var(--mapped-surface-footer)',
          error_light: 'var(--mapped-surface-error-light)',
          info_light: 'var(--mapped-surface-info-light)'
        },
        text: {
          primary: 'var(--mapped-text-primary)',
          secondary: 'var(--mapped-text-secondary)',
          tertiary: 'var(--mapped-text-tertiary)',
          disabled: 'var(--mapped-text-disabled)',
          on_disabled: 'var(--mapped-text-on-disabled)',
          on_primary: 'var(--mapped-text-on-primary)',
          on_secondary: 'var(--mapped-text-on-secondary)',
          error: 'var(--mapped-text-error)',
          warning: 'var(--mapped-text-warning)',
          info: 'var(--mapped-text-info)',
          link: 'var(--mapped-text-link)',
          success: 'var(--mapped-text-success)',
          primary_smooth: 'var(--mapped-text-primary-smooth)'
        },
        border: {
          default: 'var(--mapped-border-default)',
          subtle: 'var(--mapped-border-subtle)',
          strong: 'var(--mapped-border-strong)',
          focus: 'var(--mapped-border-focus)',
          primary: 'var(--mapped-border-primary)',
          error: 'var(--mapped-border-error)',
          warning: 'var(--mapped-border-warning)',
          info: 'var(--mapped-border-info)',
          disabled: 'var(--mapped-border-disabled)',
          success: 'var(--mapped-border-success)',
          light: 'var(--mapped-border-light)',
          white: 'var(--mapped-border-white)',
          dark: 'var(--mapped-border-dark)'
        },
        icons: {
          primary: 'var(--mapped-icons-primary)',
          secondary: 'var(--mapped-icons-secondary)',
          tertiary: 'var(--mapped-icons-tertiary)',
          disabled: 'var(--mapped-icons-disabled)',
          on_primary: 'var(--mapped-icons-on-primary)',
          on_secondary: 'var(--mapped-icons-on-secondary)',
          brand: 'var(--mapped-icons-brand)',
          error: 'var(--mapped-icons-error)',
          warning: 'var(--mapped-icons-warning)',
          info: 'var(--mapped-icons-info)',
          success: 'var(--mapped-icons-success)',
          on_disable: 'var(--mapped-icons-on-disable)'
        },

      },

      // ===================================
      // GAP - Spacing Utilities
      // Maps to --size-gap-* CSS variables
      // From size.gap in Figma tokens
      // ===================================
      gap: {
        0: 'var(--size-gap-0)',
        2: 'var(--size-gap-2)',
        4: 'var(--size-gap-4)',
        6: 'var(--size-gap-6)',
        8: 'var(--size-gap-8)',
        10: 'var(--size-gap-10)',
        12: 'var(--size-gap-12)',
        16: 'var(--size-gap-16)',
        20: 'var(--size-gap-20)',
        24: 'var(--size-gap-24)',
        28: 'var(--size-gap-28)',
        32: 'var(--size-gap-32)',
        36: 'var(--size-gap-36)',
        40: 'var(--size-gap-40)',
        44: 'var(--size-gap-44)',
        48: 'var(--size-gap-48)',
        52: 'var(--size-gap-52)',
        60: 'var(--size-gap-60)',
        64: 'var(--size-gap-64)',
        68: 'var(--size-gap-68)',
        76: 'var(--size-gap-76)',
        84: 'var(--size-gap-84)',
        92: 'var(--size-gap-92)',
        100: 'var(--size-gap-100)',
        108: 'var(--size-gap-108)',
        116: 'var(--size-gap-116)',
        124: 'var(--size-gap-124)',
        132: 'var(--size-gap-132)',
        140: 'var(--size-gap-140)',
        148: 'var(--size-gap-148)',
        156: 'var(--size-gap-156)',
        164: 'var(--size-gap-164)',
        172: 'var(--size-gap-172)',
        180: 'var(--size-gap-180)',
        188: 'var(--size-gap-188)',
        196: 'var(--size-gap-196)',
        204: 'var(--size-gap-204)',
        212: 'var(--size-gap-212)',
        220: 'var(--size-gap-220)',
        xxl: 'var(--size-gap-vertical-xxl)',
        xl: 'var(--size-gap-vertical-xl)',
        lg: 'var(--size-gap-vertical-lg)',
        md: 'var(--size-gap-vertical-md)',
        sm: 'var(--size-gap-vertical-sm)',
        xs: 'var(--size-gap-vertical-xs)',
        xxs: 'var(--size-gap-vertical-xxs)',
      },

      // ===================================
      // BORDER RADIUS
      // Maps to --size-radius-* CSS variables
      // From size.radius in Figma tokens
      // ===================================
      borderRadius: {
        none: 'var(--size-radius-none)',
        xxs: 'var(--size-radius-xxs)',
        xs: 'var(--size-radius-xs)',
        s: 'var(--size-radius-s)',
        m: 'var(--size-radius-m)',
        l: 'var(--size-radius-l)',
        xl: 'var(--size-radius-xl)',
        xxl: 'var(--size-radius-xxl)',
        full: 'var(--size-radius-full)',
      },

      // ===================================
      // BORDER WIDTH
      // Maps to --size-border-weight-* CSS variables
      // From size['border-weight'] in Figma tokens
      // ===================================
      borderWidth: {
        0: 'var(--size-border-weight-0)',
        1: 'var(--size-border-weight-1)',
        2: 'var(--size-border-weight-2)',
      },

      // ===================================
      // TEXT STYLES - Composite Typography
      // fontSize in composite format: ['size', { lineHeight, letterSpacing, fontWeight, fontFamily }]
      // Generates classes: text-display_xl, text-header_h1, etc.
      // Responsive: CSS variables auto-switch at 768px breakpoint
      // ===================================
      fontSize: {
        display_xl: [
          'var(--typo-display-xl-size)',
          {
            lineHeight: 'var(--typo-display-xl-line)',
            letterSpacing: 'var(--typo-display-xl-track)',
            fontWeight: 'var(--typo-display-xl-weight)',
            fontFamily: 'var(--typo-display-xl-family)',
          }
        ],
        display_md: [
          'var(--typo-display-md-size)',
          {
            lineHeight: 'var(--typo-display-md-line)',
            letterSpacing: 'var(--typo-display-md-track)',
            fontWeight: 'var(--typo-display-md-weight)',
            fontFamily: 'var(--typo-display-md-family)',
          }
        ],
        header_h1: [
          'var(--typo-header-h1-size)',
          {
            lineHeight: 'var(--typo-header-h1-line)',
            letterSpacing: 'var(--typo-header-h1-track)',
            fontWeight: 'var(--typo-header-h1-weight)',
            fontFamily: 'var(--typo-header-h1-family)',
          }
        ],
        header_h2: [
          'var(--typo-header-h2-size)',
          {
            lineHeight: 'var(--typo-header-h2-line)',
            letterSpacing: 'var(--typo-header-h2-track)',
            fontWeight: 'var(--typo-header-h2-weight)',
            fontFamily: 'var(--typo-header-h2-family)',
          }
        ],
        header_h3: [
          'var(--typo-header-h3-size)',
          {
            lineHeight: 'var(--typo-header-h3-line)',
            letterSpacing: 'var(--typo-header-h3-track)',
            fontWeight: 'var(--typo-header-h3-weight)',
            fontFamily: 'var(--typo-header-h3-family)',
          }
        ],
        header_h4: [
          'var(--typo-header-h4-size)',
          {
            lineHeight: 'var(--typo-header-h4-line)',
            letterSpacing: 'var(--typo-header-h4-track)',
            fontWeight: 'var(--typo-header-h4-weight)',
            fontFamily: 'var(--typo-header-h4-family)',
          }
        ],
        header_h5: [
          'var(--typo-header-h5-size)',
          {
            lineHeight: 'var(--typo-header-h5-line)',
            letterSpacing: 'var(--typo-header-h5-track)',
            fontWeight: 'var(--typo-header-h5-weight)',
            fontFamily: 'var(--typo-header-h5-family)',
          }
        ],
        header_h6: [
          'var(--typo-header-h6-size)',
          {
            lineHeight: 'var(--typo-header-h6-line)',
            letterSpacing: 'var(--typo-header-h6-track)',
            fontWeight: 'var(--typo-header-h6-weight)',
            fontFamily: 'var(--typo-header-h6-family)',
          }
        ],
        quote_regular: [
          'var(--typo-quote-regular-size)',
          {
            lineHeight: 'var(--typo-quote-regular-line)',
            letterSpacing: 'var(--typo-quote-regular-track)',
            fontWeight: 'var(--typo-quote-regular-weight)',
            fontFamily: 'var(--typo-quote-regular-family)',
          }
        ],
        quote_medium: [
          'var(--typo-quote-medium-size)',
          {
            lineHeight: 'var(--typo-quote-medium-line)',
            letterSpacing: 'var(--typo-quote-medium-track)',
            fontWeight: 'var(--typo-quote-medium-weight)',
            fontFamily: 'var(--typo-quote-medium-family)',
          }
        ],
        title_xl_regular: [
          'var(--typo-title-xl-regular-size)',
          {
            lineHeight: 'var(--typo-title-xl-regular-line)',
            letterSpacing: 'var(--typo-title-xl-regular-track)',
            fontWeight: 'var(--typo-title-xl-regular-weight)',
            fontFamily: 'var(--typo-title-xl-regular-family)',
          }
        ],
        title_xl_medium: [
          'var(--typo-title-xl-medium-size)',
          {
            lineHeight: 'var(--typo-title-xl-medium-line)',
            letterSpacing: 'var(--typo-title-xl-medium-track)',
            fontWeight: 'var(--typo-title-xl-medium-weight)',
            fontFamily: 'var(--typo-title-xl-medium-family)',
          }
        ],
        title_lg_semibold: [
          'var(--typo-title-lg-semibold-size)',
          {
            lineHeight: 'var(--typo-title-lg-semibold-line)',
            letterSpacing: 'var(--typo-title-lg-semibold-track)',
            fontWeight: 'var(--typo-title-lg-semibold-weight)',
            fontFamily: 'var(--typo-title-lg-semibold-family)',
          }
        ],
        title_lg_medium: [
          'var(--typo-title-lg-medium-size)',
          {
            lineHeight: 'var(--typo-title-lg-medium-line)',
            letterSpacing: 'var(--typo-title-lg-medium-track)',
            fontWeight: 'var(--typo-title-lg-medium-weight)',
            fontFamily: 'var(--typo-title-lg-medium-family)',
          }
        ],
        title_lg_regular: [
          'var(--typo-title-lg-regular-size)',
          {
            lineHeight: 'var(--typo-title-lg-regular-line)',
            letterSpacing: 'var(--typo-title-lg-regular-track)',
            fontWeight: 'var(--typo-title-lg-regular-weight)',
            fontFamily: 'var(--typo-title-lg-regular-family)',
          }
        ],
        title_md_semibold: [
          'var(--typo-title-md-semibold-size)',
          {
            lineHeight: 'var(--typo-title-md-semibold-line)',
            letterSpacing: 'var(--typo-title-md-semibold-track)',
            fontWeight: 'var(--typo-title-md-semibold-weight)',
            fontFamily: 'var(--typo-title-md-semibold-family)',
          }
        ],
        title_md_regular: [
          'var(--typo-title-md-regular-size)',
          {
            lineHeight: 'var(--typo-title-md-regular-line)',
            letterSpacing: 'var(--typo-title-md-regular-track)',
            fontWeight: 'var(--typo-title-md-regular-weight)',
            fontFamily: 'var(--typo-title-md-regular-family)',
          }
        ],
        title_md_medium: [
          'var(--typo-title-md-medium-size)',
          {
            lineHeight: 'var(--typo-title-md-medium-line)',
            letterSpacing: 'var(--typo-title-md-medium-track)',
            fontWeight: 'var(--typo-title-md-medium-weight)',
            fontFamily: 'var(--typo-title-md-medium-family)',
          }
        ],
        title_sm_regular: [
          'var(--typo-title-sm-regular-size)',
          {
            lineHeight: 'var(--typo-title-sm-regular-line)',
            letterSpacing: 'var(--typo-title-sm-regular-track)',
            fontWeight: 'var(--typo-title-sm-regular-weight)',
            fontFamily: 'var(--typo-title-sm-regular-family)',
          }
        ],
        title_sm_medium: [
          'var(--typo-title-sm-medium-size)',
          {
            lineHeight: 'var(--typo-title-sm-medium-line)',
            letterSpacing: 'var(--typo-title-sm-medium-track)',
            fontWeight: 'var(--typo-title-sm-medium-weight)',
            fontFamily: 'var(--typo-title-sm-medium-family)',
          }
        ],
        title_sm_semibold: [
          'var(--typo-title-sm-semibold-size)',
          {
            lineHeight: 'var(--typo-title-sm-semibold-line)',
            letterSpacing: 'var(--typo-title-sm-semibold-track)',
            fontWeight: 'var(--typo-title-sm-semibold-weight)',
            fontFamily: 'var(--typo-title-sm-semibold-family)',
          }
        ],
        title_xs_regular: [
          'var(--typo-title-xs-regular-size)',
          {
            lineHeight: 'var(--typo-title-xs-regular-line)',
            letterSpacing: 'var(--typo-title-xs-regular-track)',
            fontWeight: 'var(--typo-title-xs-regular-weight)',
            fontFamily: 'var(--typo-title-xs-regular-family)',
          }
        ],
        title_xs_medium: [
          'var(--typo-title-xs-medium-size)',
          {
            lineHeight: 'var(--typo-title-xs-medium-line)',
            letterSpacing: 'var(--typo-title-xs-medium-track)',
            fontWeight: 'var(--typo-title-xs-medium-weight)',
            fontFamily: 'var(--typo-title-xs-medium-family)',
          }
        ],
        subtitles_lg_regular: [
          'var(--typo-subtitles-lg-regular-size)',
          {
            lineHeight: 'var(--typo-subtitles-lg-regular-line)',
            letterSpacing: 'var(--typo-subtitles-lg-regular-track)',
            fontWeight: 'var(--typo-subtitles-lg-regular-weight)',
            fontFamily: 'var(--typo-subtitles-lg-regular-family)',
          }
        ],
        subtitles_lg_medium: [
          'var(--typo-subtitles-lg-medium-size)',
          {
            lineHeight: 'var(--typo-subtitles-lg-medium-line)',
            letterSpacing: 'var(--typo-subtitles-lg-medium-track)',
            fontWeight: 'var(--typo-subtitles-lg-medium-weight)',
            fontFamily: 'var(--typo-subtitles-lg-medium-family)',
          }
        ],
        subtitles_md_semibold: [
          'var(--typo-subtitles-md-semibold-size)',
          {
            lineHeight: 'var(--typo-subtitles-md-semibold-line)',
            letterSpacing: 'var(--typo-subtitles-md-semibold-track)',
            fontWeight: 'var(--typo-subtitles-md-semibold-weight)',
            fontFamily: 'var(--typo-subtitles-md-semibold-family)',
          }
        ],
        subtitles_md_regular: [
          'var(--typo-subtitles-md-regular-size)',
          {
            lineHeight: 'var(--typo-subtitles-md-regular-line)',
            letterSpacing: 'var(--typo-subtitles-md-regular-track)',
            fontWeight: 'var(--typo-subtitles-md-regular-weight)',
            fontFamily: 'var(--typo-subtitles-md-regular-family)',
          }
        ],
        subtitles_sm_regular: [
          'var(--typo-subtitles-sm-regular-size)',
          {
            lineHeight: 'var(--typo-subtitles-sm-regular-line)',
            letterSpacing: 'var(--typo-subtitles-sm-regular-track)',
            fontWeight: 'var(--typo-subtitles-sm-regular-weight)',
            fontFamily: 'var(--typo-subtitles-sm-regular-family)',
          }
        ],
        subtitles_sm_semibold: [
          'var(--typo-subtitles-sm-semibold-size)',
          {
            lineHeight: 'var(--typo-subtitles-sm-semibold-line)',
            letterSpacing: 'var(--typo-subtitles-sm-semibold-track)',
            fontWeight: 'var(--typo-subtitles-sm-semibold-weight)',
            fontFamily: 'var(--typo-subtitles-sm-semibold-family)',
          }
        ],
        subtitles_sm_medium: [
          'var(--typo-subtitles-sm-medium-size)',
          {
            lineHeight: 'var(--typo-subtitles-sm-medium-line)',
            letterSpacing: 'var(--typo-subtitles-sm-medium-track)',
            fontWeight: 'var(--typo-subtitles-sm-medium-weight)',
            fontFamily: 'var(--typo-subtitles-sm-medium-family)',
          }
        ],
        label_l: [
          'var(--typo-label-l-size)',
          {
            lineHeight: 'var(--typo-label-l-line)',
            letterSpacing: 'var(--typo-label-l-track)',
            fontWeight: 'var(--typo-label-l-weight)',
            fontFamily: 'var(--typo-label-l-family)',
            textTransform: 'uppercase',
          }
        ],
        label_m: [
          'var(--typo-label-m-size)',
          {
            lineHeight: 'var(--typo-label-m-line)',
            letterSpacing: 'var(--typo-label-m-track)',
            fontWeight: 'var(--typo-label-m-weight)',
            fontFamily: 'var(--typo-label-m-family)',
            textTransform: 'uppercase',
          }
        ],
        label_s: [
          'var(--typo-label-s-size)',
          {
            lineHeight: 'var(--typo-label-s-line)',
            letterSpacing: 'var(--typo-label-s-track)',
            fontWeight: 'var(--typo-label-s-weight)',
            fontFamily: 'var(--typo-label-s-family)',
            textTransform: 'uppercase',
          }
        ],
        text_xl: [
          'var(--typo-text-xl-size)',
          {
            lineHeight: 'var(--typo-text-xl-line)',
            letterSpacing: 'var(--typo-text-xl-track)',
            fontWeight: 'var(--typo-text-xl-weight)',
            fontFamily: 'var(--typo-text-xl-family)',
          }
        ],
        text_l_regular: [
          'var(--typo-text-l-regular-size)',
          {
            lineHeight: 'var(--typo-text-l-regular-line)',
            letterSpacing: 'var(--typo-text-l-regular-track)',
            fontWeight: 'var(--typo-text-l-regular-weight)',
            fontFamily: 'var(--typo-text-l-regular-family)',
          }
        ],
        text_m_medium: [
          'var(--typo-text-m-medium-size)',
          {
            lineHeight: 'var(--typo-text-m-medium-line)',
            letterSpacing: 'var(--typo-text-m-medium-track)',
            fontWeight: 'var(--typo-text-m-medium-weight)',
            fontFamily: 'var(--typo-text-m-medium-family)',
          }
        ],
        text_m_regular: [
          'var(--typo-text-m-regular-size)',
          {
            lineHeight: 'var(--typo-text-m-regular-line)',
            letterSpacing: 'var(--typo-text-m-regular-track)',
            fontWeight: 'var(--typo-text-m-regular-weight)',
            fontFamily: 'var(--typo-text-m-regular-family)',
          }
        ],
        text_s: [
          'var(--typo-text-s-size)',
          {
            lineHeight: 'var(--typo-text-s-line)',
            letterSpacing: 'var(--typo-text-s-track)',
            fontWeight: 'var(--typo-text-s-weight)',
            fontFamily: 'var(--typo-text-s-family)',
          }
        ],
        text_s_semibold: [
          'var(--typo-text-s-semibold-size)',
          {
            lineHeight: 'var(--typo-text-s-semibold-line)',
            letterSpacing: 'var(--typo-text-s-semibold-track)',
            fontWeight: 'var(--typo-text-s-semibold-weight)',
            fontFamily: 'var(--typo-text-s-semibold-family)',
          }
        ],
        auxiliary_md_regular: [
          'var(--typo-auxiliary-md-regular-size)',
          {
            lineHeight: 'var(--typo-auxiliary-md-regular-line)',
            letterSpacing: 'var(--typo-auxiliary-md-regular-track)',
            fontWeight: 'var(--typo-auxiliary-md-regular-weight)',
            fontFamily: 'var(--typo-auxiliary-md-regular-family)',
          }
        ],
        auxiliary_md_medium: [
          'var(--typo-auxiliary-md-medium-size)',
          {
            lineHeight: 'var(--typo-auxiliary-md-medium-line)',
            letterSpacing: 'var(--typo-auxiliary-md-medium-track)',
            fontWeight: 'var(--typo-auxiliary-md-medium-weight)',
            fontFamily: 'var(--typo-auxiliary-md-medium-family)',
          }
        ],
        auxiliary_md_semibold: [
          'var(--typo-auxiliary-md-semibold-size)',
          {
            lineHeight: 'var(--typo-auxiliary-md-semibold-line)',
            letterSpacing: 'var(--typo-auxiliary-md-semibold-track)',
            fontWeight: 'var(--typo-auxiliary-md-semibold-weight)',
            fontFamily: 'var(--typo-auxiliary-md-semibold-family)',
          }
        ],
        auxiliary_sm_regular: [
          'var(--typo-auxiliary-sm-regular-size)',
          {
            lineHeight: 'var(--typo-auxiliary-sm-regular-line)',
            letterSpacing: 'var(--typo-auxiliary-sm-regular-track)',
            fontWeight: 'var(--typo-auxiliary-sm-regular-weight)',
            fontFamily: 'var(--typo-auxiliary-sm-regular-family)',
          }
        ],
        auxiliary_sm_medium: [
          'var(--typo-auxiliary-sm-medium-size)',
          {
            lineHeight: 'var(--typo-auxiliary-sm-medium-line)',
            letterSpacing: 'var(--typo-auxiliary-sm-medium-track)',
            fontWeight: 'var(--typo-auxiliary-sm-medium-weight)',
            fontFamily: 'var(--typo-auxiliary-sm-medium-family)',
          }
        ],
        auxiliary_sm_semibold: [
          'var(--typo-auxiliary-sm-semibold-size)',
          {
            lineHeight: 'var(--typo-auxiliary-sm-semibold-line)',
            letterSpacing: 'var(--typo-auxiliary-sm-semibold-track)',
            fontWeight: 'var(--typo-auxiliary-sm-semibold-weight)',
            fontFamily: 'var(--typo-auxiliary-sm-semibold-family)',
          }
        ],
        components_card_name: [
          'var(--typo-components-card-name-size)',
          {
            lineHeight: 'var(--typo-components-card-name-line)',
            letterSpacing: 'var(--typo-components-card-name-track)',
            fontWeight: 'var(--typo-components-card-name-weight)',
            fontFamily: 'var(--typo-components-card-name-family)',
          }
        ],      },

      // ===================================
      // FONT FAMILY
      // Semantic font family groups with CSS variable fallbacks
      // ===================================
      fontFamily: {
        header: ['var(--font-family-header, Poppins)', 'sans-serif'],
        body: ['var(--font-family-body, Roboto)', 'sans-serif'],
        title: ['var(--font-family-header, Poppins)', 'sans-serif'],
      },

      // ===================================
      // BACKGROUND IMAGES
      // ===================================
      backgroundImage: {
        'primary-green-gradient': 'linear-gradient(to right, var(--alias-primary-400), var(--alias-secondary-400))',
      },

      // ===================================
      // BOX SHADOW - Elevation Shadows
      // ===================================
      boxShadow: {
        100: '0px 2px 6px 0px var(--mapped-surface-shadow)',
        200: '0px 3px 8px 0px var(--mapped-surface-shadow)',
        300: '0px 4px 10px 0px var(--mapped-surface-shadow)',
        400: '0px 6px 14px 0px var(--mapped-surface-shadow)',
        500: '0px 8px 18px 0px var(--mapped-surface-shadow)',
        sm: '0px 2px 6px 0px var(--mapped-surface-shadow)',
        md: '0px 4px 10px 0px var(--mapped-surface-shadow)',
        lg: '0px 6px 14px 0px var(--mapped-surface-shadow)',
        xl: '0px 8px 18px 0px var(--mapped-surface-shadow)',
      },

      // ===================================
      // BACKDROP BLUR
      // ===================================
      backdropBlur: {
        32: '32px',
      },
    },
  },
  plugins: [],
}
