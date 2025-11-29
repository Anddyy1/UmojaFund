import React from "react";
import { formatDistanceToNow } from "date-fns";

export default function ActivityFeed({ items = [] }) {
  return (
    <div className="space-y-3">
      {items.map((it) => (
        <div key={it.id} className="flex justify-between items-center p-3 bg-emerald-50 rounded-xl border border-emerald-100">
          <div>
            <p className="font-medium text-emerald-800">{it.name}</p>
            <p className="text-sm text-emerald-600">{it.campaign}</p>
          </div>
          <div className="text-right">
            <div className="text-emerald-600 font-semibold">${it.amount}</div>
            <div className="text-xs text-emerald-500">
              {formatDistanceToNow(new Date(it.createdAt || new Date()), { addSuffix: true })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}