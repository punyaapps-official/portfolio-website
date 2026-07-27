import React from 'react';

function Badge({ children }) {
  return <span className="inline-flex px-2 py-1 rounded-full text-xs bg-slate-800 text-slate-200">{children}</span>;
}

export default Badge;
