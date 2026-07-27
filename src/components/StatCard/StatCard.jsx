import React from 'react';

function StatCard({ value, label }) {
  return (
    <div className="p-4 bg-slate-900 rounded-lg text-center">
      <div className="text-3xl font-extrabold">{value}</div>
      <div className="text-slate-300 mt-1">{label}</div>
    </div>
  );
}

export default StatCard;
