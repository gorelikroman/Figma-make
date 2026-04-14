import React, { useState } from 'react';

export interface MainRadioProps {
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  name?: string;
  value?: string;
  className?: string;
  radioId?: string;
  onChange?: (checked: boolean, value: string) => void;
}

export const MainRadio: React.FC<MainRadioProps> = ({
  checked = false,
  disabled = false,
  label = '',
  name = '',
  value = '',
  className = '',
  radioId = '',
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = () => {
    if (disabled) return;
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange?.(newChecked, value);
  };

  // Container classes
  const containerClasses = `relative inline-flex items-center gap-3 ${
    disabled ? 'cursor-not-allowed pointer-events-none' : 'cursor-pointer'
  } ${className}`;

  // Radio button classes
  const radioBaseClasses = 'absolute left-[2px] top-[2px] w-[20px] h-[20px] rounded-full transition-all duration-200 flex items-center justify-center';
  
  let radioStateClasses = '';
  if (disabled) {
    radioStateClasses = 'border border-[var(--mapped-border-disabled)] bg-transparent';
  } else {
    if (isChecked) {
      radioStateClasses = isHovered
        ? 'border border-[var(--mapped-border-focus)] bg-transparent'
        : 'border border-[var(--mapped-border-primary)] bg-transparent';
    } else {
      radioStateClasses = isHovered
        ? 'border border-[var(--mapped-border-focus)] bg-transparent'
        : 'border border-[var(--mapped-border-default)] bg-transparent';
    }
  }

  // Inner circle background
  const innerCircleBg = disabled 
    ? 'bg-[#ebf0f7]' 
    : isHovered
      ? 'bg-[var(--brand-green-light-500)]'
      : 'bg-[var(--mapped-surface-primary)]';

  return (
    <label 
      className={containerClasses}
      htmlFor={radioId || undefined}
      onMouseEnter={() => !disabled && setIsHovered(true)}
      onMouseLeave={() => !disabled && setIsHovered(false)}
    >
      {/* Hidden native radio */}
      <input
        type="radio"
        id={radioId || undefined}
        name={name || undefined}
        value={value || undefined}
        checked={isChecked}
        disabled={disabled}
        onChange={handleChange}
        className="sr-only"
      />

      {/* Visual radio container (24px x 24px) */}
      <div className="relative w-[24px] h-[24px] flex-shrink-0">
        {/* Radio circle */}
        <div className={`${radioBaseClasses} ${radioStateClasses}`}>
          {isChecked && (
            // Inner circle (14px x 14px)
            <div className={`w-[14px] h-[14px] rounded-full ${innerCircleBg}`} />
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
