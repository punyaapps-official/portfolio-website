import React from 'react';

function TechBadge({ children }) {
  return <span className="inline-block px-3 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 text-sm">{children}</span>;
}

export default TechBadge;
