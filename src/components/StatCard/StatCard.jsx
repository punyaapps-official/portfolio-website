import React from 'react';

function StatCard({ value, label }) {
  return (
    <div className="p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg text-center">
      <div className="text-3xl font-extrabold">{value}</div>
      <div className="text-neutral-600 dark:text-neutral-300 mt-1">{label}</div>
    </div>
  );
}

export default StatCard;
