import React, { useState } from 'react';

export interface IconButtonProps {
  color?: 'neutral' | 'outline' | 'primary' | 'simple';
  style?: 'rectangle' | 'circular';
  disabled?: boolean;
  className?: string;
  id?: string;
  icon?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

// CSS variable values for each configuration
const colorConfig = {
  neutral: {
    idle: {
      background: 'var(--mapped-surface-card)',
      borderColor: 'var(--mapped-border-white)',
      borderWidth: '1px',
      iconColor: 'var(--mapped-icons-primary)',
      boxShadow: '0 12px 18px 0 rgba(206,208,216,0.698), 0 -12px 16px 0 rgba(255,255,255,0.816)',
    },
    hover: {
      background: 'var(--mapped-surface-card)',
      borderColor: 'var(--mapped-border-white)',
      borderWidth: '1px',
      iconColor: 'var(--mapped-icons-primary)',
      boxShadow: 'none',
    },
    disabled: {
      background: 'var(--mapped-surface-card)',
      borderColor: 'var(--mapped-border-white)',
      borderWidth: '1px',
      iconColor: 'var(--mapped-icons-disabled)',
      boxShadow: 'none',
    }
  },
  outline: {
    idle: {
      background: 'transparent',
      borderColor: 'var(--mapped-border-subtle)',
      borderWidth: '1px',
      iconColor: 'var(--mapped-icons-primary)',
      boxShadow: 'none',
    },
    hover: {
      background: 'var(--mapped-surface-selected)',
      borderColor: 'var(--mapped-border-white)',
      borderWidth: '1px',
      iconColor: 'var(--mapped-icons-primary)',
      boxShadow: 'none',
    },
    disabled: {
      background: 'transparent',
      borderColor: 'var(--mapped-border-disabled)',
      borderWidth: '1px',
      iconColor: 'var(--mapped-icons-disabled)',
      boxShadow: 'none',
    }
  },
  primary: {
    idle: {
      background: 'linear-gradient(to right, var(--alias-primary-400), var(--alias-secondary-400))',
      borderColor: 'var(--mapped-border-white)',
      borderWidth: '1px',
      iconColor: 'var(--mapped-icons-on-primary)',
      boxShadow: '0 2px 8px 0 rgba(0,0,0,0.15)',
    },
    hover: {
      background: 'linear-gradient(to right, var(--alias-primary-400), var(--alias-secondary-400))',
      borderColor: 'var(--mapped-border-white)',
      borderWidth: '1px',
      iconColor: 'var(--mapped-icons-on-primary)',
      boxShadow: 'inset 0 0 12px 0 #cdeb9c',
    },
    disabled: {
      background: 'transparent',
      borderColor: 'var(--mapped-border-white)',
      borderWidth: '1px',
      iconColor: 'var(--mapped-icons-disabled)',
      boxShadow: 'none',
    }
  },
  simple: {
    idle: {
      background: 'var(--mapped-surface-card)',
      borderColor: 'var(--mapped-border-white)',
      borderWidth: '1px',
      iconColor: 'var(--mapped-icons-primary)',
      boxShadow: '0 12px 18px 0 rgba(206,208,216,0.698), 0 -12px 16px 0 rgba(255,255,255,0.816)',
    },
    hover: {
      background: 'var(--mapped-surface-card)',
      borderColor: 'var(--mapped-border-white)',
      borderWidth: '1px',
      iconColor: 'var(--mapped-icons-primary)',
      boxShadow: 'none',
    },
    disabled: {
      background: 'var(--mapped-surface-card)',
      borderColor: 'var(--mapped-border-white)',
      borderWidth: '1px',
      iconColor: 'var(--mapped-icons-disabled)',
      boxShadow: 'none',
    }
  }
};

export const IconButton: React.FC<IconButtonProps> = ({
  color = 'neutral',
  style = 'rectangle',
  disabled = false,
  className = '',
  id = '',
  icon = '',
  onClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Default arrow icon SVG
  const iconSvg = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 11.0727C3.48789 11.0727 3.07275 11.4879 3.07275 12C3.07275 12.5121 3.48789 12.9273 4 12.9273L4 12L4 11.0727ZM20.6557 12.6557C21.0178 12.2936 21.0178 11.7064 20.6557 11.3443L14.7547 5.44333C14.3925 5.08121 13.8054 5.08121 13.4433 5.44333C13.0812 5.80544 13.0812 6.39255 13.4433 6.75466L18.6887 12L13.4433 17.2453C13.0812 17.6075 13.0812 18.1946 13.4433 18.5567C13.8054 18.9188 14.3925 18.9188 14.7547 18.5567L20.6557 12.6557ZM4 12L4 12.9273L20 12.9273L20 12L20 11.0727L4 11.0727L4 12Z" fill="currentColor"/></svg>';

  // Get style configuration
  const config = colorConfig[color] || colorConfig.neutral;
  const currentStyle = disabled 
    ? config.disabled 
    : (isHovered ? config.hover : config.idle);

  // Border radius
  const borderRadius = style === 'circular' ? '50%' : '16px';

  // Button styles
  const buttonStyle: React.CSSProperties = {
    background: currentStyle.background,
    borderColor: currentStyle.borderColor,
    borderWidth: currentStyle.borderWidth,
    borderStyle: 'solid',
    boxShadow: currentStyle.boxShadow,
    transition: 'all 300ms ease-in-out',
    cursor: disabled ? 'not-allowed' : 'pointer',
    borderRadius,
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
  };

  // Icon styles
  const iconStyle: React.CSSProperties = {
    color: currentStyle.iconColor,
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
  };

  return (
    <button
      id={id}
      className={className}
      style={buttonStyle}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => !disabled && setIsHovered(false)}
    >
      <span style={iconStyle}>
        {icon ? (
          <img src={icon} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain', pointerEvents: 'none' }} />
        ) : (
          <span dangerouslySetInnerHTML={{ __html: iconSvg }} />
        )}
      </span>
    </button>
  );
};
