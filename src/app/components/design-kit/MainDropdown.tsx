import React, { useState, useRef, useEffect } from 'react';

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface MainDropdownProps {
  placeholder?: string;
  className?: string;
  values: (string | DropdownOption)[];
  dropdownId?: string;
  selectedValue?: string;
  onChange?: (value: string, label: string) => void;
}

export const MainDropdown: React.FC<MainDropdownProps> = ({
  placeholder = 'Placeholder',
  className = '',
  values = [],
  dropdownId = '',
  selectedValue = '',
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(selectedValue);
  const [selectedLabel, setSelectedLabel] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Normalize values to array of objects
  const normalizedValues: DropdownOption[] = values.map(item => {
    if (typeof item === 'string') {
      return { value: item, label: item, disabled: false };
    }
    return {
      value: item.value || item.label || '',
      label: item.label || item.value || '',
      disabled: item.disabled || false,
    };
  });

  // Set initial selected label
  useEffect(() => {
    if (selected) {
      const option = normalizedValues.find(v => v.value === selected);
      if (option) {
        setSelectedLabel(option.label);
      }
    }
  }, [selected]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: DropdownOption) => {
    if (option.disabled) return;
    
    setSelected(option.value);
    setSelectedLabel(option.label);
    setIsOpen(false);
    onChange?.(option.value, option.label);
  };

  // Dropdown arrow icon (SVG base64)
  const ARROW_ICON = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01LjI5Mjg5IDkuMjk2MDdDNS42ODM0MiA4LjkwMTMxIDYuMzE2NTggOC45MDEzMSA2LjcwNzExIDkuMjk2MDdMMTIgMTQuNTU5NkwxNy4yOTI5IDkuMjk2MDdDMTcuNjgzNCA4LjkwMTMxIDE4LjMxNjYgOC45MDEzMSAxOC43MDcxIDkuMjk2MDdDMTkuMDk3NiA5LjY5MDgzIDE5LjA5NzYgMTAuMzMwOSAxOC43MDcxIDEwLjcyNTZMMTIuNzA3MSAxNi43MDM5QzEyLjMxNjYgMTcuMDk4NyAxMS42ODM0IDE3LjA5ODcgMTEuMjkyOSAxNi43MDM5TDUuMjkyODkgMTAuNzI1NkM0LjkwMjM3IDEwLjMzMDkgNC45MDIzNyA5LjY5MDgzIDUuMjkyODkgOS4yOTYwN1oiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPg==';

  return (
    <div 
      ref={dropdownRef}
      id={dropdownId || undefined}
      className={`relative w-full lg:w-[316px] ${className}`}
    >
      {/* Input Field */}
      <div className="relative" onClick={handleToggle}>
        <input
          type="text"
          readOnly
          value={selectedLabel}
          placeholder={placeholder}
          className={`w-full h-[48px] lg:h-[60px] !bg-[var(--mapped-surface-background)] rounded-[8px] lg:rounded-[16px] font-header text-[16px] cursor-pointer ${
            selectedLabel 
              ? '!text-[var(--mapped-text-primary)]' 
              : '!text-[var(--mapped-text-tertiary)]'
          } !placeholder:text-[var(--mapped-text-tertiary)] focus:outline-none transition-all duration-300 overflow-hidden text-ellipsis whitespace-nowrap !px-3 !pr-[44px] lg:!px-4 lg:!pr-[48px] ${
            isOpen 
              ? '!border-2 !border-[var(--alias-primary-300)]' 
              : '!border !border-[var(--mapped-border-default)]'
          }`}
        />
        
        {/* Arrow Icon */}
        <div 
          className="absolute right-3 lg:right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-[24px] h-[24px] pointer-events-none transition-transform duration-200"
          style={{ transform: `translateY(-50%) ${isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}` }}
        >
          <img src={ARROW_ICON} alt="" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Dropdown List */}
      {isOpen && (
        <div 
          className="absolute top-[calc(100%+4px)] left-0 z-50 !bg-[var(--mapped-surface-background)] rounded-[8px] shadow-[0px_2px_6px_0px_rgba(8,8,10,0.1)] overflow-hidden w-full max-h-[300px] overflow-y-auto custom-scrollbar"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#269c6e transparent',
          }}
        >
          <div className="flex flex-col">
            {normalizedValues.map((option, index) => (
              <div
                key={index}
                onClick={() => handleSelect(option)}
                className={`flex items-center px-2 py-3 lg:px-2 lg:py-3 transition-colors duration-200 ${
                  option.disabled 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'cursor-pointer hover:!bg-[var(--mapped-surface-selected)]'
                } ${selected === option.value ? '!bg-[var(--mapped-surface-selected)]' : ''}`}
              >
                <p className="font-header text-[16px] !text-[var(--mapped-text-primary)] leading-[21px]">
                  {option.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Custom Scrollbar Styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #269c6e, #7aba47);
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
};
