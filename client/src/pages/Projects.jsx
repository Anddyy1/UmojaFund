import Layout from "../layouts/Layout";
import Sidebar from "../components/Sidebar";

export default function Projects() {
  return (
    <Layout>
      <Sidebar />

      <div className="flex-1 ml-6 bg-white/70 backdrop-blur-md shadow-xl p-10 rounded-2xl border border-emerald-100">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-emerald-900">Your Campaigns 📁</h1>
            <p className="text-emerald-600 mt-2">Manage and track your fundraising campaigns</p>
          </div>
          <button className="bg-gradient-to-r from-emerald-500 to-amber-500 hover:from-emerald-600 hover:to-amber-600 text-white py-3 px-6 rounded-xl font-semibold transition-all transform hover:-translate-y-0.5 shadow-md">
            🚀 Start New Campaign
          </button>
        </div>

        {/* Campaign Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 rounded-2xl p-6 text-center">
            <div className="text-2xl font-bold text-emerald-600">3</div>
            <div className="text-emerald-800 font-medium">Active Campaigns</div>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 rounded-2xl p-6 text-center">
            <div className="text-2xl font-bold text-amber-600">$2,450</div>
            <div className="text-amber-800 font-medium">Total Raised</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-amber-50 border border-emerald-200 rounded-2xl p-6 text-center">
            <div className="text-2xl font-bold text-emerald-600">47</div>
            <div className="text-emerald-800 font-medium">Total Supporters</div>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-emerald-50 border border-amber-200 rounded-2xl p-6 text-center">
            <div className="text-2xl font-bold text-amber-600">67%</div>
            <div className="text-amber-800 font-medium">Success Rate</div>
          </div>
        </div>

        {/* Active Campaigns */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-emerald-900 mb-6">Active Campaigns</h2>
          <div className="grid gap-6">
            {/* Campaign 1 */}
            <div className="bg-white border border-emerald-200 rounded-2xl p-6 hover:shadow-xl transition-all">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-emerald-900 mb-2">Education Fund for Bright Future</h3>
                  <p className="text-emerald-600">Support university education for underprivileged students in rural areas</p>
                </div>
                <span className="bg-emerald-100 text-emerald-800 text-sm px-3 py-1 rounded-full font-medium">Active</span>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm text-emerald-600 mb-2">
                  <span>$1,200 raised</span>
                  <span>$2,000 goal</span>
                </div>
                <div className="w-full bg-emerald-100 rounded-full h-3">
                  <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-3 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>

              <div className="flex justify-between items-center text-sm text-emerald-600">
                <span>🕒 15 days remaining</span>
                <span>👥 28 supporters</span>
              </div>

              <div className="flex space-x-3 mt-4">
                <button className="bg-gradient-to-r from-emerald-400 to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all">
                  View Analytics
                </button>
                <button className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all">
                  Share Campaign
                </button>
                <button className="bg-gradient-to-r from-emerald-300 to-amber-400 hover:from-emerald-400 hover:to-amber-500 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all">
                  Edit Campaign
                </button>
              </div>
            </div>

            {/* Campaign 2 */}
            <div className="bg-white border border-amber-200 rounded-2xl p-6 hover:shadow-xl transition-all">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-amber-900 mb-2">Community Garden Initiative</h3>
                  <p className="text-amber-600">Urban farming project to provide fresh produce and employment</p>
                </div>
                <span className="bg-amber-100 text-amber-800 text-sm px-3 py-1 rounded-full font-medium">Active</span>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm text-amber-600 mb-2">
                  <span>$750 raised</span>
                  <span>$1,500 goal</span>
                </div>
                <div className="w-full bg-amber-100 rounded-full h-3">
                  <div className="bg-gradient-to-r from-amber-400 to-amber-600 h-3 rounded-full" style={{width: '50%'}}></div>
                </div>
              </div>

              <div className="flex justify-between items-center text-sm text-amber-600">
                <span>🕒 22 days remaining</span>
                <span>👥 15 supporters</span>
              </div>

              <div className="flex space-x-3 mt-4">
                <button className="bg-gradient-to-r from-emerald-400 to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all">
                  View Analytics
                </button>
                <button className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all">
                  Share Campaign
                </button>
                <button className="bg-gradient-to-r from-emerald-300 to-amber-400 hover:from-emerald-400 hover:to-amber-500 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all">
                  Edit Campaign
                </button>
              </div>
            </div>

            {/* Campaign 3 */}
            <div className="bg-white border border-emerald-200 rounded-2xl p-6 hover:shadow-xl transition-all">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-emerald-900 mb-2">Medical Emergency Fund</h3>
                  <p className="text-emerald-600">Urgent medical treatment for community members in critical condition</p>
                </div>
                <span className="bg-emerald-100 text-emerald-800 text-sm px-3 py-1 rounded-full font-medium">Active</span>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm text-emerald-600 mb-2">
                  <span>$500 raised</span>
                  <span>$800 goal</span>
                </div>
                <div className="w-full bg-emerald-100 rounded-full h-3">
                  <div className="bg-gradient-to-r from-emerald-400 to-amber-500 h-3 rounded-full" style={{width: '62%'}}></div>
                </div>
              </div>

              <div className="flex justify-between items-center text-sm text-emerald-600">
                <span>🕒 8 days remaining</span>
                <span>👥 12 supporters</span>
              </div>

              <div className="flex space-x-3 mt-4">
                <button className="bg-gradient-to-r from-emerald-400 to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all">
                  View Analytics
                </button>
                <button className="bg-gradient-to-r from-amber-400 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all">
                  Share Campaign
                </button>
                <button className="bg-gradient-to-r from-emerald-300 to-amber-400 hover:from-emerald-400 hover:to-amber-500 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all">
                  Edit Campaign
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Completed Campaigns */}
        <div>
          <h2 className="text-2xl font-semibold text-emerald-900 mb-6">Completed Campaigns</h2>
          <div className="grid gap-6">
            <div className="bg-gradient-to-r from-emerald-50 to-amber-50 border border-emerald-200 rounded-2xl p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-emerald-900 mb-2">School Library Project</h3>
                  <p className="text-emerald-600">Building a modern library for primary school children</p>
                </div>
                <span className="bg-emerald-100 text-emerald-800 text-sm px-3 py-1 rounded-full font-medium">Successfully Funded</span>
              </div>
              <div className="flex justify-between items-center text-sm text-emerald-600">
                <span>✅ $1,800 raised (120% of goal)</span>
                <span>📅 Completed: Jan 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}