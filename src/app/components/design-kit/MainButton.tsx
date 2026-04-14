import React, { useState } from 'react';

export interface MainButtonProps {
  text: string;
  style?: 'solid' | 'outline' | 'ghost';
  color?: 'primary' | 'neutral-dark' | 'neutral-medium' | 'neutral-light' | 'error' | 'warning' | 'info';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onClick?: () => void;
}

// CSS variable values for each configuration
const styleConfig = {
  primary: {
    solid: {
      idle: {
        background: 'linear-gradient(to right, var(--alias-primary-400), var(--alias-secondary-400))',
        color: 'var(--mapped-text-on-primary)',
        borderColor: 'transparent',
        borderWidth: '0px',
        boxShadow: 'none',
        hasGradient: true,
        overlayColor: '#61a333' // var(--mapped-surface-secondary)
      },
      hover: {
        background: 'var(--mapped-surface-secondary)',
        color: 'var(--mapped-text-on-primary)',
        borderColor: 'transparent',
        borderWidth: '0px',
        boxShadow: 'inset 0px 0px 35px 0px var(--alias-secondary-100)'
      }
    },
    outline: {
      idle: {
        background: 'transparent',
        color: 'var(--mapped-text-success)',
        borderColor: 'var(--mapped-text-success)',
        borderWidth: '1px',
        boxShadow: 'none'
      },
      hover: {
        background: 'var(--mapped-surface-secondary)',
        color: 'var(--mapped-text-on-primary)',
        borderColor: 'transparent',
        borderWidth: '0px',
        boxShadow: 'inset 0px 0px 35px 0px var(--alias-secondary-100)'
      }
    },
    ghost: {
      idle: {
        background: 'transparent',
        color: 'var(--mapped-text-success)',
        borderColor: 'transparent',
        borderWidth: '0px',
        boxShadow: 'none',
        textDecoration: 'underline'
      },
      hover: {
        background: 'var(--brand-green-light-50)',
        color: 'var(--mapped-text-success)',
        borderColor: 'transparent',
        borderWidth: '0px',
        boxShadow: 'none',
        textDecoration: 'underline'
      }
    }
  },
  'neutral-dark': {
    solid: {
      idle: {
        background: 'var(--mapped-surface-background-dark)',
        color: 'var(--mapped-text-on-primary)',
        borderColor: 'transparent',
        borderWidth: '0px',
        boxShadow: 'none'
      },
      hover: {
        background: 'var(--mapped-surface-secondary)',
        color: 'var(--mapped-text-on-primary)',
        borderColor: 'transparent',
        borderWidth: '0px',
        boxShadow: 'inset 0px 0px 35px 0px var(--alias-secondary-100)'
      }
    },
    outline: {
      idle: {
        background: 'transparent',
        color: 'var(--mapped-text-primary)',
        borderColor: 'var(--mapped-text-primary)',
        borderWidth: '1px',
        boxShadow: 'none'
      },
      hover: {
        background: 'var(--mapped-surface-secondary)',
        color: 'var(--mapped-text-on-primary)',
        borderColor: 'transparent',
        borderWidth: '0px',
        boxShadow: 'inset 0px 0px 35px 0px var(--alias-secondary-100)'
      }
    },
    ghost: {
      idle: {
        background: 'transparent',
        color: 'var(--mapped-text-primary)',
        borderColor: 'transparent',
        borderWidth: '0px',
        boxShadow: 'none',
        textDecoration: 'underline'
      },
      hover: {
        background: 'var(--alias-neutral-400)',
        color: 'var(--mapped-text-primary)',
        borderColor: 'transparent',
        borderWidth: '0px',
        boxShadow: 'none',
        textDecoration: 'underline'
      }
    }
  },
  'neutral-medium': {
    solid: {
      idle: {
        background: 'var(--mapped-surface-card)',
        color: 'var(--mapped-text-primary)',
        borderColor: 'var(--mapped-border-white)',
        borderWidth: '1px',
        boxShadow: 'none'
      },
      hover: {
        background: 'var(--mapped-surface-secondary)',
        color: 'var(--mapped-text-on-primary)',
        borderColor: 'transparent',
        borderWidth: '0px',
        boxShadow: 'inset 0px 0px 35px 0px var(--alias-secondary-100)'
      }
    },
    outline: {
      idle: {
        background: 'transparent',
        color: 'var(--mapped-text-tertiary)',
        borderColor: 'var(--mapped-text-tertiary)',
        borderWidth: '1px',
        boxShadow: 'none'
      },
      hover: {
        background: 'var(--mapped-surface-secondary)',
        color: 'var(--mapped-text-on-primary)',
        borderColor: 'transparent',
        borderWidth: '0px',
        boxShadow: 'inset 0px 0px 35px 0px var(--alias-secondary-100)'
      }
    },
    ghost: {
      idle: {
        background: 'transparent',
        color: 'var(--mapped-text-primary)',
        borderColor: 'transparent',
        borderWidth: '0px',
        boxShadow: 'none',
        textDecoration: 'underline'
      },
      hover: {
        background: 'var(--alias-neutral-200)',
        color: 'var(--mapped-text-tertiary)',
        borderColor: 'transparent',
        borderWidth: '0px',
        boxShadow: 'none',
        textDecoration: 'underline'
      }
    }
  },
  'neutral-light': {
    solid: {
      idle: {
        background: 'var(--mapped-surface-background)',
        color: 'var(--mapped-text-primary)',
        borderColor: 'transparent',
        borderWidth: '0px',
        boxShadow: 'none'
      },
      hover: {
        background: 'var(--mapped-surface-secondary)',
        color: 'var(--mapped-text-on-primary)',
        borderColor: 'transparent',
        borderWidth: '0px',
        boxShadow: 'inset 0px 0px 35px 0px var(--alias-secondary-100)'
      }
    },
    outline: {
      idle: {
        background: 'transparent',
        color: 'var(--mapped-text-primary)',
        borderColor: 'var(--mapped-text-primary)',
        borderWidth: '1px',
        boxShadow: 'none'
      },
      hover: {
        background: 'var(--mapped-surface-secondary)',
        color: 'var(--mapped-text-on-primary)',
        borderColor: 'transparent',
        borderWidth: '0px',
        boxShadow: 'inset 0px 0px 35px 0px var(--alias-secondary-100)'
      }
    },
    ghost: {
      idle: {
        background: 'transparent',
        color: 'var(--mapped-text-on-primary)',
        borderColor: 'transparent',
        borderWidth: '0px',
        boxShadow: 'none',
        textDecoration: 'underline'
      },
      hover: {
        background: 'var(--alias-neutral-o0-20)',
        color: 'var(--mapped-text-on-primary)',
        borderColor: 'transparent',
        borderWidth: '0px',
        boxShadow: 'none',
        textDecoration: 'underline'
      }
    }
  },
  error: {
    solid: {
      idle: {
        background: 'var(--mapped-surface-error)',
        color: 'var(--mapped-text-on-primary)',
        borderColor: 'transparent',
        borderWidth: '0px',
        boxShadow: 'none'
      },
      hover: {
        background: 'var(--mapped-surface-error-focus)',
        color: 'var(--mapped-text-on-primary)',
        borderColor: 'transparent',
        borderWidth: '0px',
        boxShadow: 'inset 0px 0px 35px 0px var(--alias-error-400)'
      }
    },
    outline: {
      idle: {
        background: 'transparent',
        color: 'var(--mapped-text-error)',
        borderColor: 'var(--mapped-text-error)',
        borderWidth: '1px',
        boxShadow: 'none'
      },
      hover: {
        background: 'var(--mapped-surface-error-focus)',
        color: 'var(--mapped-text-on-primary)',
        borderColor: 'transparent',
        borderWidth: '0px',
        boxShadow: 'inset 0px 0px 35px 0px var(--alias-error-400)'
      }
    },
    ghost: {
      idle: {
        background: 'transparent',
        color: 'var(--mapped-text-error)',
        borderColor: 'transparent',
        borderWidth: '0px',
        boxShadow: 'none',
        textDecoration: 'underline'
      },
      hover: {
        background: 'var(--alias-error-50)',
        color: 'var(--mapped-text-error)',
        borderColor: 'transparent',
        borderWidth: '0px',
        boxShadow: 'none',
        textDecoration: 'underline'
      }
    }
  },
  warning: {
    solid: {
      idle: {
        background: 'var(--mapped-surface-warning)',
        color: 'var(--mapped-text-on-primary)',
        borderColor: 'transparent',
        borderWidth: '0px',
        boxShadow: 'none'
      },
      hover: {
        background: 'var(--mapped-surface-warning-focus)',
        color: 'var(--mapped-text-on-primary)',
        borderColor: 'transparent',
        borderWidth: '0px',
        boxShadow: 'inset 0px 0px 35px 0px var(--mapped-surface-warning)'
      }
    },
    outline: {
      idle: {
        background: 'transparent',
        color: 'var(--mapped-text-warning)',
        borderColor: 'var(--mapped-text-warning)',
        borderWidth: '1px',
        boxShadow: 'none'
      },
      hover: {
        background: 'var(--mapped-surface-warning-focus)',
        color: 'var(--mapped-text-on-primary)',
        borderColor: 'transparent',
        borderWidth: '0px',
        boxShadow: 'inset 0px 0px 35px 0px var(--mapped-surface-warning)'
      }
    },
    ghost: {
      idle: {
        background: 'transparent',
        color: 'var(--mapped-text-warning)',
        borderColor: 'transparent',
        borderWidth: '0px',
        boxShadow: 'none',
        textDecoration: 'underline'
      },
      hover: {
        background: 'var(--brand-orange-100)',
        color: 'var(--mapped-text-warning)',
        borderColor: 'transparent',
        borderWidth: '0px',
        boxShadow: 'none',
        textDecoration: 'underline'
      }
    }
  },
  info: {
    solid: {
      idle: {
        background: 'var(--mapped-surface-info)',
        color: 'var(--mapped-text-on-primary)',
        borderColor: 'transparent',
        borderWidth: '0px',
        boxShadow: 'none'
      },
      hover: {
        background: 'var(--mapped-surface-info-focus)',
        color: 'var(--mapped-text-on-primary)',
        borderColor: 'transparent',
        borderWidth: '0px',
        boxShadow: 'inset 0px 0px 35px 0px var(--alias-info-300)'
      }
    },
    outline: {
      idle: {
        background: 'transparent',
        color: 'var(--mapped-text-info)',
        borderColor: 'var(--mapped-text-info)',
        borderWidth: '1px',
        boxShadow: 'none'
      },
      hover: {
        background: 'var(--mapped-surface-info-focus)',
        color: 'var(--mapped-text-on-primary)',
        borderColor: 'transparent',
        borderWidth: '0px',
        boxShadow: 'inset 0px 0px 35px 0px var(--alias-info-300)'
      }
    },
    ghost: {
      idle: {
        background: 'transparent',
        color: 'var(--mapped-text-info)',
        borderColor: 'transparent',
        borderWidth: '0px',
        boxShadow: 'none',
        textDecoration: 'underline'
      },
      hover: {
        background: 'var(--alias-info-100)',
        color: 'var(--mapped-text-info)',
        borderColor: 'transparent',
        borderWidth: '0px',
        boxShadow: 'none',
        textDecoration: 'underline'
      }
    }
  }
};

// Disabled styles
const disabledStyles = {
  solid: {
    background: 'var(--mapped-surface-disabled)',
    color: 'var(--mapped-text-on-disabled)',
    borderColor: 'transparent',
    borderWidth: '0px',
    boxShadow: 'none'
  },
  outline: {
    background: 'transparent',
    color: 'var(--mapped-text-disabled)',
    borderColor: 'var(--mapped-border-disabled)',
    borderWidth: '1px',
    boxShadow: 'none'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--mapped-text-disabled)',
    borderColor: 'transparent',
    borderWidth: '0px',
    boxShadow: 'none',
    textDecoration: 'underline'
  }
};

export const MainButton: React.FC<MainButtonProps> = ({
  text,
  style = 'solid',
  color = 'primary',
  disabled = false,
  loading = false,
  className = '',
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Get style configuration
  const config = styleConfig[color]?.[style] || styleConfig.primary.solid;
  const idleConfig = config.idle;
  const hoverConfig = config.hover;
  
  const currentStyle = disabled 
    ? disabledStyles[style] 
    : idleConfig; // Always use idle for base styles

  // Check if we need gradient overlay (for smooth transition)
  const needsOverlay = !disabled && idleConfig.hasGradient && idleConfig.overlayColor;

  // Base button styles (always idle state for gradient buttons)
  const buttonStyle: React.CSSProperties = {
    background: currentStyle.background,
    color: currentStyle.color,
    borderColor: currentStyle.borderColor,
    borderWidth: currentStyle.borderWidth,
    borderStyle: 'solid',
    boxShadow: currentStyle.boxShadow,
    transition: 'all 300ms ease-in-out, border-width 100ms ease-in-out',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontFamily: 'var(--font-family-primary)',
    position: 'relative',
    overflow: 'hidden',
  };

  // For non-gradient buttons, apply hover styles directly
  if (!needsOverlay && !disabled && isHovered) {
    buttonStyle.background = hoverConfig.background;
    buttonStyle.color = hoverConfig.color;
    buttonStyle.borderColor = hoverConfig.borderColor;
    buttonStyle.borderWidth = hoverConfig.borderWidth;
    buttonStyle.boxShadow = hoverConfig.boxShadow;
  }

  // Overlay style for gradient buttons
  const overlayStyle: React.CSSProperties = needsOverlay ? {
    position: 'absolute',
    inset: 0,
    background: idleConfig.overlayColor,
    opacity: isHovered ? 1 : 0,
    transition: 'opacity 300ms ease-in-out',
    pointerEvents: 'none',
    borderRadius: 'inherit',
    boxShadow: isHovered ? hoverConfig.boxShadow : 'none',
  } : {};

  // Text decoration for ghost buttons
  const textStyle: React.CSSProperties = {
    textDecoration: currentStyle.textDecoration || 'none',
    position: 'relative',
    zIndex: 10,
  };

  return (
    <button
      className={`
        font-header flex items-center justify-center font-medium leading-none
        px-[18px] lg:px-8 py-[17px] lg:py-5 
        text-[14px] lg:text-[22px] 
        rounded-[8px] lg:rounded-[16px]
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      style={buttonStyle}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => !disabled && setIsHovered(false)}
    >
      {/* Overlay for gradient to solid smooth transition */}
      {needsOverlay && <span style={overlayStyle} />}
      
      {/* Text content */}
      <span style={textStyle}>{text}</span>
    </button>
  );
};
