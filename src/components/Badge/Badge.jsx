import React from 'react';

function Badge({ children }) {
  return <span className="inline-flex px-2 py-1 rounded-full text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">{children}</span>;
}

export default Badge;
