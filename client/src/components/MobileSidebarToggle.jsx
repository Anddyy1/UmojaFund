import React from "react";

export default function MobileSidebarToggle({ onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="lg:hidden inline-flex items-center justify-center p-2 rounded-md bg-white/80 shadow-md"
      aria-label="Toggle sidebar"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-emerald-700">
        <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}
