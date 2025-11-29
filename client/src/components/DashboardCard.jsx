import React from "react";

export default function DashboardCard({ title, value, sub }) {
  return (
    <div className="bg-gradient-to-br from-white/60 to-white/40 border border-emerald-200 rounded-2xl p-5 md:p-6 hover:shadow-lg transition-all">
      <h3 className="text-lg md:text-xl font-semibold text-emerald-800 mb-2">{title}</h3>
      <div className="text-2xl md:text-3xl font-bold text-emerald-600">{value}</div>
      {sub && <div className="text-sm text-emerald-600 mt-1">{sub}</div>}
    </div>
  );
}
