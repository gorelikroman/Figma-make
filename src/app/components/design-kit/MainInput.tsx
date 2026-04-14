import React, { useId, useState, useRef, useEffect } from 'react';

export interface MainInputProps {
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  obligatory?: boolean;
  description?: string;
  maxLength?: number;
  leftIcon?: string;
  rightIcon?: string;
  className?: string;
  containerClassName?: string;
  inputId?: string;
  name?: string;
  type?: string;
  readonly?: boolean;
  value?: string;
  clearIcon?: string;
  clearIconPosition?: 'left' | 'right';
  status?: 'default' | 'error' | 'success';
  onChange?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onRightIconClick?: () => void;
}

export const MainInput: React.FC<MainInputProps> = ({
  placeholder = 'Placeholder',
  disabled = false,
  label = '',
  obligatory = false,
  description = '',
  maxLength = 0,
  leftIcon = '',
  rightIcon = '',
  className = '',
  containerClassName = '',
  inputId = '',
  name = '',
  type = 'text',
  readonly = false,
  value = '',
  clearIcon = '',
  clearIconPosition = '',
  status = 'default',
  onChange,
  onFocus,
  onBlur,
  onRightIconClick,
}) => {
  const autoId = useId();
  const resolvedId = inputId || `main-input-${autoId}`;
  const [inputValue, setInputValue] = useState(value);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Update line height for vertical centering
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.lineHeight = `${inputRef.current.offsetHeight}px`;
      inputRef.current.style.paddingTop = '0';
      inputRef.current.style.paddingBottom = '0';
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    onChange?.(newValue);
  };

  const handleClear = () => {
    setInputValue('');
    onChange?.('');
    inputRef.current?.focus();
  };

  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.();
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur?.();
  };

  // Determine if icons are present
  const hasValue = inputValue.trim().length > 0;
  const showClearIcon = clearIcon && clearIconPosition && hasValue && !disabled;
  const hasLeftIcon = leftIcon || (showClearIcon && clearIconPosition === 'left');
  const hasRightIcon = rightIcon || (showClearIcon && clearIconPosition === 'right');

  // Calculate padding based on icons
  let paddingClasses = '';
  if (hasLeftIcon && hasRightIcon) {
    paddingClasses = '!pl-[44px] !pr-[44px] lg:!pl-[48px] lg:!pr-[48px]';
  } else if (hasLeftIcon) {
    paddingClasses = '!pl-[44px] !pr-3 lg:!pl-[48px] lg:!pr-4';
  } else if (hasRightIcon) {
    paddingClasses = '!pl-3 !pr-[44px] lg:!pl-4 lg:!pr-[48px]';
  } else {
    paddingClasses = '!px-3 lg:!px-4';
  }

  // Base classes
  let baseClasses = '';
  if (disabled) {
    baseClasses = 'w-full h-[48px] lg:h-[60px] !bg-[var(--mapped-surface-disabled)] !border !border-[var(--mapped-border-disabled)] rounded-[8px] lg:rounded-[16px] font-header text-[16px] !text-[var(--mapped-text-disabled)] !placeholder:text-[var(--mapped-text-disabled)] cursor-not-allowed transition-all duration-300 overflow-hidden text-ellipsis whitespace-nowrap';
  } else {
    baseClasses = 'w-full h-[48px] lg:h-[60px] !bg-[var(--mapped-surface-background)] rounded-[8px] lg:rounded-[16px] font-header text-[16px] !text-[var(--mapped-text-secondary)] focus:!text-[var(--mapped-text-primary)] !placeholder:text-[var(--mapped-text-tertiary)] focus:outline-none transition-all duration-300 overflow-hidden text-ellipsis whitespace-nowrap';
  }

  // Border classes based on status and focus
  let borderClasses = '';
  if (status === 'error') {
    borderClasses = isFocused ? '!border-2 !border-[var(--mapped-border-error)]' : '!border !border-[var(--mapped-border-error)]';
  } else if (status === 'success') {
    borderClasses = isFocused ? '!border-2 !border-[var(--mapped-border-success)]' : '!border !border-[var(--mapped-border-success)]';
  } else {
    borderClasses = isFocused ? '!border-2 !border-[var(--brand-green-dark-400)]' : '!border !border-[var(--mapped-border-default)]';
  }

  // Description color based on status
  let descriptionColor = '#8c94a3';
  if (status === 'error') descriptionColor = 'var(--mapped-text-error)';
  if (status === 'success') descriptionColor = 'var(--mapped-text-success)';

  return (
    <div className={`flex flex-col gap-2 w-full ${containerClassName}`}>
      {label && (
        <label 
          htmlFor={resolvedId}
          className="font-body text-[16px] text-[#616975] leading-none flex items-center gap-1"
        >
          {label}
          {obligatory && (
            <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
              <path d="M5.21544 1.02414L5.79144 2.06414L3.56744 2.99214L5.80744 3.90414L5.19944 4.97614L3.26344 3.56814L3.51944 5.98414H2.31944L2.55944 3.56814L0.623438 4.99214L-0.000562429 3.90414L2.22344 2.97614L-0.000562429 2.08014L0.591438 1.00814L2.57544 2.43214L2.31944 0.00014019H3.53544L3.26344 2.43214L5.21544 1.02414Z" fill="#CC0000"/>
            </svg>
          )}
        </label>
      )}

      <div className={`relative w-full ${containerClassName}`}>
        {/* Left Icon */}
        {leftIcon && !showClearIcon && (
          <div className="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-[24px] h-[24px] pointer-events-none">
            <img src={leftIcon} alt="" className="w-full h-full object-contain" />
          </div>
        )}

        {/* Left Clear Icon */}
        {showClearIcon && clearIconPosition === 'left' && (
          <div 
            className="absolute left-3 lg:left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-[24px] h-[24px] cursor-pointer"
            onClick={handleClear}
          >
            <img src={clearIcon} alt="" className="w-full h-full object-contain pointer-events-none" />
          </div>
        )}

        {/* Input Field */}
        <input
          ref={inputRef}
          type={type}
          id={resolvedId}
          name={name || undefined}
          placeholder={placeholder}
          value={inputValue}
          maxLength={maxLength > 0 ? maxLength : undefined}
          className={`${baseClasses} ${borderClasses} ${paddingClasses} ${className}`}
          disabled={disabled}
          readOnly={readonly}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        {/* Right Icon */}
        {rightIcon && !showClearIcon && (
          <div 
            className={`absolute right-3 lg:right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-[24px] h-[24px] ${onRightIconClick ? 'cursor-pointer' : 'pointer-events-none'}`}
            onClick={onRightIconClick}
          >
            <img src={rightIcon} alt="" className="w-full h-full object-contain pointer-events-none" />
          </div>
        )}

        {/* Right Clear Icon */}
        {showClearIcon && clearIconPosition === 'right' && (
          <div 
            className="absolute right-3 lg:right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-[24px] h-[24px] cursor-pointer"
            onClick={handleClear}
          >
            <img src={clearIcon} alt="" className="w-full h-full object-contain pointer-events-none" />
          </div>
        )}
      </div>

      {/* Bottom section: Description and Counter */}
      {(description || maxLength > 0) && (
        <div className="flex items-start gap-1 w-full">
          {description && (
            <p 
              className="font-body text-[12px] leading-[1.4] flex-1"
              style={{ color: descriptionColor }}
            >
              {description}
            </p>
          )}

          {maxLength > 0 && (
            <p className="font-body text-[12px] text-[#8c94a3] leading-[1.4] whitespace-nowrap flex-shrink-0">
              {inputValue.length}/{maxLength}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
