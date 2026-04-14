import React from 'react';

export interface MainProgressBarProps {
  percentage?: number;
  className?: string;
  progressBarId?: string;
}

export const MainProgressBar: React.FC<MainProgressBarProps> = ({
  percentage = 0,
  className = '',
  progressBarId = '',
}) => {
  // Clamp percentage between 0-100
  const clampedPercentage = Math.max(0, Math.min(100, percentage));

  return (
    <div 
      id={progressBarId || undefined}
      className={`w-full h-[8px] bg-[#f1f1f1] rounded-full overflow-hidden relative ${className}`}
    >
      {/* Progress Fill */}
      <div 
        className="h-full rounded-full transition-all duration-300 ease-out"
        style={{
          width: `${clampedPercentage}%`,
          backgroundImage: 'linear-gradient(90deg, rgba(21, 150, 124, 1) 0%, rgba(114, 179, 62, 1) 100%)',
        }}
      />
    </div>
  );
};
