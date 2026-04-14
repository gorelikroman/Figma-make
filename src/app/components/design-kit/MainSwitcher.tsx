import React, { useState } from 'react';

export interface MainSwitcherProps {
  firstValue: string;
  secondValue: string;
  selectedValue?: string;
  disabled?: boolean;
  className?: string;
  switcherId?: string;
  onChange?: (value: string) => void;
}

export const MainSwitcher: React.FC<MainSwitcherProps> = ({
  firstValue,
  secondValue,
  selectedValue,
  disabled = false,
  className = '',
  switcherId = '',
  onChange,
}) => {
  const [selected, setSelected] = useState(selectedValue || firstValue);
  const [isAnimating, setIsAnimating] = useState(false);

  const isFirstSelected = selected === firstValue;

  const handleSelect = (value: string) => {
    if (disabled || isAnimating || selected === value) return;

    setIsAnimating(true);
    setSelected(value);
    onChange?.(value);

    // Reset animation state after 200ms
    setTimeout(() => {
      setIsAnimating(false);
    }, 200);
  };

  return (
    <div 
      id={switcherId || undefined}
      className={`w-full ${className}`}
    >
      {/* Switcher Track */}
      <div 
        className={`relative flex items-center bg-[var(--mapped-surface-card)] p-1 rounded-[16px] h-[52px] lg:h-[60px] ${
          disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        }`}
      >
        {/* Sliding Background */}
        <div 
          className="absolute top-1/2 left-1 w-[calc(50%-4px)] h-[44px] lg:h-[52px] rounded-[12px] z-[1] transition-all duration-200"
          style={{
            transform: `translateY(-50%) ${!isFirstSelected ? 'translateX(calc(100% + 4px))' : ''} ${isAnimating ? 'scale(0.95)' : ''}`,
            backgroundImage: 'var(--bg-primary-green-gradient)',
          }}
        />

        {/* First Option */}
        <div 
          onClick={() => handleSelect(firstValue)}
          className={`flex-1 flex items-center justify-center h-[52px] lg:h-[60px] px-0 text-center whitespace-nowrap relative z-[2] select-none transition-all duration-200 ${
            isFirstSelected 
              ? 'text-white font-medium' 
              : 'text-[var(--mapped-text-tertiary)] font-normal'
          } ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        >
          {firstValue}
        </div>

        {/* Second Option */}
        <div 
          onClick={() => handleSelect(secondValue)}
          className={`flex-1 flex items-center justify-center h-[52px] lg:h-[60px] px-0 text-center whitespace-nowrap relative z-[2] select-none transition-all duration-200 ${
            !isFirstSelected 
              ? 'text-white font-medium' 
              : 'text-[var(--mapped-text-tertiary)] font-normal'
          } ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        >
          {secondValue}
        </div>
      </div>
    </div>
  );
};
