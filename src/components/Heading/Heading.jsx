import React from 'react';

function Heading({ title, subtitle, level = 2 }) {
  const Tag = `h${level}`;
  return (
    <div>
      <Tag className="font-extrabold leading-tight text-neutral-900 dark:text-white">{title}</Tag>
      {subtitle && <p className="text-neutral-600 dark:text-neutral-300 mt-2">{subtitle}</p>}
    </div>
  );
}

export default Heading;
