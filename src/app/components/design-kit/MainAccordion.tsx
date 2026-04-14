import React, { useState } from 'react';
import { IconButton } from './IconButton';

export interface MainAccordionProps {
  title: string;
  text: string;
  isOpen?: boolean;
  className?: string;
  accordionId?: string;
  titleClassName?: string;
  textClassName?: string;
  groupId?: string;
  onToggle?: (isOpen: boolean) => void;
}

// Placeholder icons - replace with actual icon paths
const PLUS_ICON = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDVWMTlNNSAxMkgxOSIgc3Ryb2tlPSIjMTUxNTE3IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4=';
const MINUS_ICON = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUgMTJIMTkiIHN0cm9rZT0iIzE1MTUxNyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+';

export const MainAccordion: React.FC<MainAccordionProps> = ({
  title,
  text,
  isOpen: initialIsOpen = false,
  className = '',
  accordionId = '',
  titleClassName = '',
  textClassName = '',
  groupId = '',
  onToggle,
}) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle?.(newState);
  };

  const defaultTitleClassName = 'font-header text-[18px] lg:text-[22px] leading-[23px] lg:leading-[29px] font-medium text-[var(--mapped-text-primary)]';
  const defaultTextClassName = 'font-body text-[16px] lg:text-[16px] leading-[24px] font-normal text-[var(--mapped-text-primary)] max-w-[750px] whitespace-pre-wrap';

  return (
    <div 
      id={accordionId || undefined}
      className={`flex flex-col w-full px-6 py-3 ${className}`}
      data-accordion-group={groupId || undefined}
    >
      {/* Header: Title + Icon Button */}
      <div 
        className="flex items-center justify-between gap-8 lg:gap-6 cursor-pointer"
        onClick={handleToggle}
      >
        <p className={`flex-1 pr-4 ${titleClassName || defaultTitleClassName}`}>
          {title}
        </p>
        <div className="flex-shrink-0">
          <IconButton
            icon={isOpen ? MINUS_ICON : PLUS_ICON}
            color="neutral"
            style="circular"
            className="p-[10px] lg:p-4"
          />
        </div>
      </div>

      {/* Content: Text (with grid animation) */}
      <div 
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'grid-rows-[1fr] opacity-100 mt-8' 
            : 'grid-rows-[0fr] opacity-0 mt-0'
        }`}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        <div className="overflow-hidden">
          <div 
            className={textClassName || defaultTextClassName}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </div>
      </div>
    </div>
  );
};
