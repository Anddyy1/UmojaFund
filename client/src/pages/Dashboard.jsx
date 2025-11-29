// client/src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Layout from "../layouts/Layout";
import useAuth from "../hooks/useAuth";
import useDashboard from "../hooks/useDashboard";
import useSocket from "../hooks/useSocket";
import DashboardCard from "../components/DashboardCard";
import Skeleton from "../components/SkeletonLoader";
import ActivityFeed from "../components/ActivityFeed";
import DarkModeToggle from "../components/DarkModeToggle";
import MobileSidebarToggle from "../components/MobileSidebarToggle";

export default function Dashboard() {
  const { user } = useAuth();
  const { data, loading, refetch, setData } = useDashboard();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    refetch();
  }, [refetch]);

  // Handle real-time incoming contributions
  useSocket((contribution) => {
    // Prepend to recent contributions
    setData((prev) => ({
      ...prev,
      recentContribs: [contribution, ...(prev.recentContribs || [])].slice(0, 10),
      totalBackers: prev.totalBackers + 1,
      totalRaised: (Number(prev.totalRaised) || 0) + Number(contribution.amount || 0),
    }));
  });

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        {/* Mobile toggle + Darkmode aligned with Home style */}
        <div className="flex items-center justify-between px-2 lg:hidden">
          <MobileSidebarToggle onToggle={() => setSidebarOpen((s) => !s)} />
          <div className="flex items-center gap-3">
            <DarkModeToggle />
          </div>
        </div>

        <Sidebar className={`${sidebarOpen ? "block" : "hidden lg:block"}`} />

        <div className="flex-1 ml-6 
                bg-white/70 dark:bg-gray-800/70 
                backdrop-blur-md shadow-xl rounded-2xl p-10 
                border border-emerald-100 dark:border-gray-700 
                transition-colors">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-900 mb-3">
                Welcome back, {user?.name}! 🌞
              </h1>
              <p className="text-emerald-700 text-base sm:text-lg mb-6">
                Here's your fundraising dashboard - let's make an impact together!
              </p>
            </div>
            <div className="hidden lg:block">
              <DarkModeToggle />
            </div>
          </div>

          {/* Funding overview: use DashboardCard */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            {loading ? (
              <>
                <div><Skeleton className="h-14 w-full" /></div>
                <div><Skeleton className="h-14 w-full" /></div>
                <div><Skeleton className="h-14 w-full" /></div>
                <div><Skeleton className="h-14 w-full" /></div>
              </>
            ) : (
              <>
                <DashboardCard title="Total Raised" value={`$${data.totalRaised}`} sub="Across all campaigns" />
                <DashboardCard title="Active Campaigns" value={data.activeCampaigns} sub="Currently fundraising" />
                <DashboardCard title="Total Backers" value={data.totalBackers} sub="Supporting your causes" />
                <DashboardCard title="Success Rate" value={`${data.successRate}%`} sub="Campaigns funded" />
              </>
            )}
          </div>

          {/* RECENT ACTIVITY & QUICK ACTIONS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white border border-emerald-200 rounded-2xl p-5 sm:p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl md:text-2xl font-semibold text-emerald-900">Recent Contributions</h2>
                <button onClick={() => refetch()} className="text-sm text-emerald-600 hover:underline">Refresh</button>
              </div>

              {loading ? (
                <div className="space-y-3">
                  <Skeleton className="h-16 w-full rounded-xl" />
                  <Skeleton className="h-16 w-full rounded-xl" />
                  <Skeleton className="h-16 w-full rounded-xl" />
                </div>
              ) : (
                <ActivityFeed items={data.recentContribs || []} />
              )}
            </div>

            <div className="bg-white border border-emerald-200 rounded-2xl p-5 sm:p-6">
              <h2 className="text-xl md:text-2xl font-semibold text-emerald-900 mb-4">Quick Actions</h2>

              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-emerald-500 to-amber-500 hover:from-emerald-600 hover:to-amber-600 text-white py-3 px-4 rounded-xl font-semibold transition-all transform hover:-translate-y-0.5 text-left shadow-md">
                  🚀 Start New Campaign
                </button>

                <button className="w-full bg-gradient-to-r from-emerald-400 to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 text-white py-3 px-4 rounded-xl font-semibold transition-all transform hover:-translate-y-0.5 text-left shadow-md">
                  📊 View Campaign Analytics
                </button>

                <button className="w-full bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white py-3 px-4 rounded-xl font-semibold transition-all transform hover:-translate-y-0.5 text-left shadow-md">
                  💬 Engage with Backers
                </button>

                <button className="w-full bg-gradient-to-r from-emerald-400 to-amber-500 hover:from-emerald-500 hover:to-amber-600 text-white py-3 px-4 rounded-xl font-semibold transition-all transform hover:-translate-y-0.5 text-left shadow-md">
                  📢 Share Your Campaign
                </button>
              </div>
            </div>
          </div>

          {/* Campaign Progress */}
          <div className="mt-8 bg-white border border-emerald-200 rounded-2xl p-5 sm:p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-emerald-900 mb-4">Campaign Progress</h2>

            <div className="space-y-4">
              {/* Render three progress items — consistent with before */}
              {[
                { id: "edu", title: "Education Fund", progress: 60, raised: "$1,200", goal: "$2,000", color: "emerald" },
                { id: "garden", title: "Community Garden", progress: 50, raised: "$750", goal: "$1,500", color: "amber" },
                { id: "med", title: "Medical Emergency", progress: 62, raised: "$500", goal: "$800", color: "emerald" },
              ].map((item) => (
                <div key={item.id}>
                  <div className="flex justify-between mb-2 text-sm sm:text-base">
                    <span className={`font-medium ${item.color === "amber" ? "text-amber-800" : "text-emerald-800"}`}>{item.title}</span>
                    <span className={item.color === "amber" ? "text-amber-600" : "text-emerald-600"}>{`${item.raised}/${item.goal}`}</span>
                  </div>

                  <div className={`w-full ${item.color === "amber" ? "bg-amber-100" : "bg-emerald-100"} rounded-full h-2.5 sm:h-3`}>
                    <div
                      className={`h-2.5 sm:h-3 rounded-full ${item.color === "amber" ? "bg-gradient-to-r from-amber-400 to-amber-600" : "bg-gradient-to-r from-emerald-400 to-emerald-600"}`}
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}