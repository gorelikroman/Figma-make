import React from 'react';

export interface BreadcrumbItem {
  title: string;
  uri?: string | null;
  breadcrumbs_title?: string;
}

export interface MainBreadcrumbsProps {
  items: (string | BreadcrumbItem)[];
  mainPath?: string;
  className?: string;
}

export const MainBreadcrumbs: React.FC<MainBreadcrumbsProps> = ({
  items = [],
  mainPath = '',
  className = '',
}) => {
  // Normalize items (convert strings to objects)
  const normalizedItems: BreadcrumbItem[] = items.map(item => {
    if (typeof item === 'string') {
      return { title: item, uri: null };
    }
    return {
      title: item.title || '',
      uri: item.uri || null,
      breadcrumbs_title: item.breadcrumbs_title,
    };
  });

  if (normalizedItems.length === 0) {
    return null;
  }

  return (
    <div className={`flex flex-wrap gap-2 items-center font-body text-[14px] leading-[21px] whitespace-nowrap ${className}`}>
      {normalizedItems.map((item, index) => {
        const isLast = index === normalizedItems.length - 1;
        const shouldBeLink = !isLast && item.uri;

        if (isLast) {
          // Last item (no separator, no link)
          return (
            <span 
              key={index}
              className="text-[var(--mapped-text-link)] leading-[21px] shrink-0"
            >
              {item.title}
            </span>
          );
        }

        // Breadcrumb Item Group (item + separator)
        return (
          <div key={index} className="flex items-center shrink-0">
            {shouldBeLink ? (
              <a
                href={mainPath + item.uri}
                title={item.breadcrumbs_title}
                className="text-[var(--mapped-text-tertiary)] leading-[21px] hover:text-[var(--mapped-text-link)] transition-colors duration-200"
              >
                {item.title}
              </a>
            ) : (
              <span className="text-[var(--mapped-text-tertiary)] leading-[21px]">
                {item.title}
              </span>
            )}
            <span className="text-[var(--mapped-text-disabled)] leading-[21px] ml-2">/</span>
          </div>
        );
      })}
    </div>
  );
};
