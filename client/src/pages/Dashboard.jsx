import Sidebar from "../components/Sidebar";
import Layout from "../layouts/Layout";
import useAuth from "../hooks/useAuth";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <Layout>
      <Sidebar />

      <div className="flex-1 ml-6 bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-10 border border-emerald-100">
        <h1 className="text-4xl font-bold text-emerald-900 mb-3">
          Welcome back, {user?.name}! 🌞
        </h1>

        <p className="text-emerald-700 text-lg mb-8">
          Here's your fundraising dashboard - let's make an impact together!
        </p>

        {/* FUNDING OVERVIEW */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 rounded-2xl p-6 hover:shadow-lg transition-all">
            <h2 className="text-xl font-semibold text-emerald-800 mb-2">Total Raised</h2>
            <p className="text-3xl font-bold text-emerald-600">$2,450</p>
            <p className="text-emerald-600 text-sm">Across all campaigns</p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 rounded-2xl p-6 hover:shadow-lg transition-all">
            <h2 className="text-xl font-semibold text-amber-800 mb-2">Active Campaigns</h2>
            <p className="text-3xl font-bold text-amber-600">3</p>
            <p className="text-amber-600 text-sm">Currently fundraising</p>
          </div>

          <div className="bg-gradient-to-br from-emerald-50 to-amber-50 border border-emerald-200 rounded-2xl p-6 hover:shadow-lg transition-all">
            <h2 className="text-xl font-semibold text-emerald-800 mb-2">Total Backers</h2>
            <p className="text-3xl font-bold text-amber-600">47</p>
            <p className="text-emerald-600 text-sm">Supporting your causes</p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-emerald-50 border border-amber-200 rounded-2xl p-6 hover:shadow-lg transition-all">
            <h2 className="text-xl font-semibold text-amber-800 mb-2">Success Rate</h2>
            <p className="text-3xl font-bold text-emerald-600">67%</p>
            <p className="text-amber-600 text-sm">Campaigns funded</p>
          </div>
        </div>

        {/* RECENT ACTIVITY & QUICK ACTIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* RECENT CONTRIBUTIONS */}
          <div className="bg-white border border-emerald-200 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-emerald-900 mb-4">Recent Contributions</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                <div>
                  <p className="font-medium text-emerald-800">Sarah M.</p>
                  <p className="text-sm text-emerald-600">Education Fund Campaign</p>
                </div>
                <span className="text-emerald-600 font-semibold">$50</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-amber-50 rounded-xl border border-amber-100">
                <div>
                  <p className="font-medium text-amber-800">John D.</p>
                  <p className="text-sm text-amber-600">Community Garden</p>
                </div>
                <span className="text-amber-600 font-semibold">$25</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                <div>
                  <p className="font-medium text-emerald-800">Alex K.</p>
                  <p className="text-sm text-emerald-600">Medical Emergency Fund</p>
                </div>
                <span className="text-emerald-600 font-semibold">$100</span>
              </div>
            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div className="bg-white border border-emerald-200 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold text-emerald-900 mb-4">Quick Actions</h2>
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

        {/* CAMPAIGN PROGRESS */}
        <div className="mt-8 bg-white border border-emerald-200 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-emerald-900 mb-4">Campaign Progress</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-emerald-800">Education Fund</span>
                <span className="text-emerald-600">$1,200/$2,000</span>
              </div>
              <div className="w-full bg-emerald-100 rounded-full h-3">
                <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-3 rounded-full" style={{width: '60%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-amber-800">Community Garden</span>
                <span className="text-amber-600">$750/$1,500</span>
              </div>
              <div className="w-full bg-amber-100 rounded-full h-3">
                <div className="bg-gradient-to-r from-amber-400 to-amber-600 h-3 rounded-full" style={{width: '50%'}}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-emerald-800">Medical Emergency</span>
                <span className="text-emerald-600">$500/$800</span>
              </div>
              <div className="w-full bg-emerald-100 rounded-full h-3">
                <div className="bg-gradient-to-r from-emerald-400 to-amber-500 h-3 rounded-full" style={{width: '62%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}