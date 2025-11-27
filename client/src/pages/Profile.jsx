import Layout from "../layouts/Layout";
import Sidebar from "../components/Sidebar";
import useAuth from "../hooks/useAuth";

export default function Profile() {
  const { user } = useAuth();

  return (
    <Layout>
      <Sidebar />

      <div className="flex-1 ml-6 bg-white/70 backdrop-blur-md shadow-xl p-10 rounded-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Profile 👤</h1>

        <div className="space-y-4">
          <div>
            <span className="block text-gray-600 font-medium">Full Name</span>
            <p className="text-lg">{user?.name}</p>
          </div>

          <div>
            <span className="block text-gray-600 font-medium">Email</span>
            <p className="text-lg">{user?.email}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
