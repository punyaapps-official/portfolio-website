import React from 'react';

function TechBadge({ children }) {
  return <span className="inline-block px-3 py-1 rounded-md bg-slate-800 text-slate-200 text-sm">{children}</span>;
}

export default TechBadge;
