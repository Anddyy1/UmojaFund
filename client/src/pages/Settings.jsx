import Layout from "../layouts/Layout";
import Sidebar from "../components/Sidebar";

export default function Settings() {
  return (
    <Layout>
      <Sidebar />

      <div className="flex-1 ml-6 bg-white/70 backdrop-blur-md shadow-xl p-10 rounded-2xl border border-emerald-100">
        <h1 className="text-3xl font-bold text-emerald-900 mb-8">Account Settings ⚙️</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-emerald-200 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-emerald-900 mb-4">Settings Menu</h3>
              <nav className="space-y-2">
                <button className="w-full text-left py-3 px-4 bg-gradient-to-r from-emerald-50 to-amber-50 text-emerald-700 font-medium rounded-xl border border-emerald-200">
                  Profile Information
                </button>
                <button className="w-full text-left py-3 px-4 text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all">
                  Payment Methods
                </button>
                <button className="w-full text-left py-3 px-4 text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all">
                  Notification Settings
                </button>
                <button className="w-full text-left py-3 px-4 text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all">
                  Security & Privacy
                </button>
                <button className="w-full text-left py-3 px-4 text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all">
                  Withdrawal Settings
                </button>
              </nav>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Information Section */}
            <div className="bg-white border border-emerald-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-emerald-900 mb-6">Profile Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    J
                  </div>
                  <div>
                    <button className="bg-gradient-to-r from-emerald-500 to-amber-500 hover:from-emerald-600 hover:to-amber-600 text-white py-2 px-4 rounded-xl font-medium transition-all transform hover:-translate-y-0.5 shadow-md">
                      Change Photo
                    </button>
                    <p className="text-sm text-emerald-500 mt-2">JPG, PNG or GIF, max 5MB</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-emerald-700 font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      defaultValue="John Doe"
                      className="w-full p-3 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition bg-emerald-50/50"
                    />
                  </div>
                  <div>
                    <label className="block text-emerald-700 font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      defaultValue="john.doe@example.com"
                      className="w-full p-3 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition bg-emerald-50/50"
                    />
                  </div>
                  <div>
                    <label className="block text-emerald-700 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      defaultValue="+254 712 345 678"
                      className="w-full p-3 border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition bg-amber-50/50"
                    />
                  </div>
                  <div>
                    <label className="block text-emerald-700 font-medium mb-2">Location</label>
                    <input
                      type="text"
                      defaultValue="Nairobi, Kenya"
                      className="w-full p-3 border border-amber-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition bg-amber-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-emerald-700 font-medium mb-2">Bio</label>
                  <textarea
                    rows="4"
                    placeholder="Tell the community about yourself and your mission..."
                    className="w-full p-3 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition bg-emerald-50/50"
                    defaultValue="Passionate about community development and education. Running campaigns to support underprivileged students."
                  ></textarea>
                </div>

                <button className="bg-gradient-to-r from-emerald-500 to-amber-500 hover:from-emerald-600 hover:to-amber-600 text-white py-3 px-6 rounded-xl font-semibold transition-all transform hover:-translate-y-0.5 shadow-md">
                  Save Changes
                </button>
              </div>
            </div>

            {/* Account Preferences */}
            <div className="bg-white border border-emerald-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-emerald-900 mb-6">Account Preferences</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                  <div>
                    <h4 className="font-medium text-emerald-800">Email Notifications</h4>
                    <p className="text-sm text-emerald-600">Receive updates about your campaigns and contributions</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-emerald-200 peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-emerald-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                  </label>
                </div>

                <div className="flex justify-between items-center p-4 bg-amber-50 rounded-xl border border-amber-100">
                  <div>
                    <h4 className="font-medium text-amber-800">SMS Notifications</h4>
                    <p className="text-sm text-amber-600">Get important alerts via text message</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-amber-200 peer-focus:ring-4 peer-focus:ring-amber-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-amber-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-amber-500"></div>
                  </label>
                </div>

                <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                  <div>
                    <h4 className="font-medium text-emerald-800">Public Profile</h4>
                    <p className="text-sm text-emerald-600">Allow others to see your profile and campaign activity</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-emerald-200 peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-emerald-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Security Settings */}
            <div className="bg-white border border-emerald-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-emerald-900 mb-6">Security Settings</h3>
              
              <div className="space-y-4">
                <button className="w-full text-left p-4 border border-emerald-200 rounded-xl hover:bg-emerald-50 transition-all">
                  <div className="font-medium text-emerald-800">Change Password</div>
                  <div className="text-sm text-emerald-600">Update your password regularly for security</div>
                </button>

                <button className="w-full text-left p-4 border border-amber-200 rounded-xl hover:bg-amber-50 transition-all">
                  <div className="font-medium text-amber-800">Two-Factor Authentication</div>
                  <div className="text-sm text-amber-600">Add an extra layer of security to your account</div>
                </button>

                <button className="w-full text-left p-4 border border-emerald-200 rounded-xl hover:bg-emerald-50 transition-all">
                  <div className="font-medium text-emerald-800">Connected Devices</div>
                  <div className="text-sm text-emerald-600">Manage devices that have access to your account</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}