import Layout from "../layouts/Layout";
import Sidebar from "../components/Sidebar";
import useAuth from "../hooks/useAuth";

export default function Profile() {
  const { user } = useAuth();

  return (
    <Layout>
      <Sidebar />

      <div className="flex-1 ml-6 bg-white/70 backdrop-blur-md shadow-xl p-10 rounded-2xl border border-emerald-100">
        <h1 className="text-3xl font-bold text-emerald-900 mb-6">Your Profile 👤</h1>

        {/* Profile Header with Stats */}
        <div className="bg-gradient-to-r from-emerald-50 to-amber-50 rounded-2xl p-6 mb-8 border border-emerald-200">
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {user?.name?.charAt(0)?.toUpperCase() || 'U'}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-emerald-900">{user?.name}</h2>
              <p className="text-emerald-600">{user?.email}</p>
              <div className="flex space-x-6 mt-3">
                <div className="text-center">
                  <div className="font-bold text-emerald-600">3</div>
                  <div className="text-sm text-emerald-700">Active Campaigns</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-amber-600">$2,450</div>
                  <div className="text-sm text-amber-700">Total Raised</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-emerald-600">47</div>
                  <div className="text-sm text-emerald-700">Supporters</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Personal Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-emerald-900 border-b border-emerald-200 pb-2">Personal Information</h3>
            
            <div className="space-y-4">
              <div>
                <span className="block text-emerald-700 font-medium mb-2">Full Name</span>
                <p className="text-lg bg-emerald-50 p-3 rounded-xl border border-emerald-100 text-emerald-800">{user?.name}</p>
              </div>

              <div>
                <span className="block text-emerald-700 font-medium mb-2">Email Address</span>
                <p className="text-lg bg-emerald-50 p-3 rounded-xl border border-emerald-100 text-emerald-800">{user?.email}</p>
              </div>

              <div>
                <span className="block text-emerald-700 font-medium mb-2">Phone Number</span>
                <p className="text-lg bg-amber-50 p-3 rounded-xl border border-amber-100 text-amber-700">+254 7XX XXX XXX</p>
              </div>

              <div>
                <span className="block text-emerald-700 font-medium mb-2">Location</span>
                <p className="text-lg bg-amber-50 p-3 rounded-xl border border-amber-100 text-amber-700">Nairobi, Kenya</p>
              </div>
            </div>
          </div>

          {/* Campaign & Account Details */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-emerald-900 border-b border-emerald-200 pb-2">Campaign Statistics</h3>
            
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200 rounded-xl p-4">
                <div className="flex justify-between items-center">
                  <span className="text-emerald-800 font-medium">Success Rate</span>
                  <span className="text-emerald-600 font-bold">67%</span>
                </div>
                <div className="w-full bg-emerald-200 rounded-full h-2 mt-2">
                  <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-2 rounded-full" style={{width: '67%'}}></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 border border-emerald-200 rounded-xl p-4 text-center">
                  <div className="text-emerald-600 font-bold text-lg">5</div>
                  <div className="text-emerald-800 text-sm">Campaigns Created</div>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 border border-amber-200 rounded-xl p-4 text-center">
                  <div className="text-amber-600 font-bold text-lg">12</div>
                  <div className="text-amber-800 text-sm">Campaigns Supported</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 rounded-xl p-4">
                <h4 className="font-semibold text-amber-800 mb-2">Verification Status</h4>
                <div className="flex items-center space-x-2">
                  <span className="bg-emerald-100 text-emerald-800 text-sm px-3 py-1 rounded-full">✓ Verified</span>
                  <span className="text-sm text-emerald-600">Identity confirmed</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-amber-50 border border-emerald-200 rounded-xl p-4">
                <h4 className="font-semibold text-emerald-800 mb-2">Member Since</h4>
                <p className="text-emerald-600">January 2024</p>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-emerald-500 to-amber-500 hover:from-emerald-600 hover:to-amber-600 text-white py-3 px-4 rounded-xl font-semibold transition-all transform hover:-translate-y-0.5 shadow-md">
              Edit Profile Information
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-emerald-900 border-b border-emerald-200 pb-2 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl border border-emerald-100">
              <div className="flex items-center space-x-3">
                <span className="text-emerald-500">✓</span>
                <div>
                  <p className="font-medium text-emerald-800">Education Fund Campaign</p>
                  <p className="text-sm text-emerald-600">Received $50 from Sarah M.</p>
                </div>
              </div>
              <span className="text-sm text-emerald-500">2 hours ago</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-amber-50 rounded-xl border border-amber-100">
              <div className="flex items-center space-x-3">
                <span className="text-amber-500">📢</span>
                <div>
                  <p className="font-medium text-amber-800">Campaign Update</p>
                  <p className="text-sm text-amber-600">Shared Community Garden progress</p>
                </div>
              </div>
              <span className="text-sm text-amber-500">1 day ago</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}