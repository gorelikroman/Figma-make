import React, { useState } from 'react';

export interface MainCheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  status?: 'default' | 'indeterminate';
  label?: string;
  className?: string;
  checkboxId?: string;
  onChange?: (checked: boolean) => void;
}

export const MainCheckbox: React.FC<MainCheckboxProps> = ({
  checked = false,
  disabled = false,
  status = 'default',
  label = '',
  className = '',
  checkboxId = '',
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = () => {
    if (disabled) return;
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange?.(newChecked);
  };

  // Container classes
  const containerClasses = `relative inline-flex items-center gap-3 ${
    disabled ? 'cursor-not-allowed pointer-events-none' : 'cursor-pointer'
  } ${className}`;

  // Box classes
  const boxBaseClasses = 'absolute left-[2px] top-[2px] w-[20px] h-[20px] rounded-[2px] transition-all duration-200 flex items-center justify-center';
  
  let boxStateClasses = '';
  if (disabled) {
    boxStateClasses = isChecked 
      ? 'bg-[#ebf0f7] border-0' 
      : 'border border-[var(--mapped-border-disabled)] bg-transparent';
  } else {
    if (isChecked) {
      boxStateClasses = isHovered
        ? 'bg-[var(--brand-green-light-500)] border-0'
        : 'bg-[var(--mapped-surface-primary)] border-0';
    } else {
      boxStateClasses = isHovered
        ? 'border border-[var(--mapped-border-focus)] bg-transparent'
        : 'border border-[var(--mapped-border-default)] bg-transparent';
    }
  }

  // Checkmark SVG
  const CheckmarkIcon = () => (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M10 3L4.5 8.5L2 6" 
        stroke={disabled ? '#d1d6e3' : 'white'} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <label 
      className={containerClasses}
      htmlFor={checkboxId || undefined}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => !disabled && setIsHovered(false)}
    >
      {/* Hidden native checkbox */}
      <input
        type="checkbox"
        id={checkboxId || undefined}
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
        className="sr-only"
      />

      {/* Visual checkbox container (24px x 24px) */}
      <div className="relative w-[24px] h-[24px] flex-shrink-0">
        {/* Checkbox box */}
        <div className={`${boxBaseClasses} ${boxStateClasses}`}>
          {isChecked && (
            <>
              {status === 'indeterminate' ? (
                // Indeterminate symbol (horizontal bar)
                <div 
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[10px] h-[2px] rounded-[35px]"
                  style={{ backgroundColor: disabled ? '#d1d6e3' : 'white' }}
                />
              ) : (
                // Checkmark icon
                <div className="w-[12px] h-[12px] flex items-center justify-center">
                  <CheckmarkIcon />
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {label && (
        <span 
          className={`font-body text-[18px] leading-[23px] select-none ${
            disabled ? 'text-[var(--mapped-text-disabled)]' : 'text-[var(--mapped-text-primary)]'
          }`}
        >
          {label}
        </span>
      )}
    </label>
  );
};
