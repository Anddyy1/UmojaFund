import Sidebar from "../components/Sidebar";
import Layout from "../layouts/Layout";
import useAuth from "../hooks/useAuth";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <Layout>
      <Sidebar />

      <div className="flex-1 ml-6 bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Welcome back, {user?.name}! 🌞
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          We're glad to see you again. Here's what's happening today:
        </p>

        {/* DASHBOARD CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-orange-100 shadow-sm rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-orange-700 mb-2">Your Wallet</h2>
            <p className="text-gray-700">Track your savings, contributions & transactions.</p>
          </div>

          <div className="bg-yellow-100 shadow-sm rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-yellow-700 mb-2">Contributions</h2>
            <p className="text-gray-700">View your recent Chama or group contributions.</p>
          </div>

          <div className="bg-orange-200 shadow-sm rounded-xl p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-orange-800 mb-2">Your Groups</h2>
            <p className="text-gray-700">Manage the groups (Chamas) you're part of.</p>
          </div>

        </div>
      </div>
    </Layout>
  );
}
