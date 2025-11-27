import Layout from "../layouts/Layout";
import Sidebar from "../components/Sidebar";

export default function Projects() {
  return (
    <Layout>
      <Sidebar />

      <div className="flex-1 ml-6 bg-white/70 backdrop-blur-md shadow-xl p-10 rounded-2xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Projects 📁</h1>
        <p className="text-gray-700">You don't have any projects yet.</p>
      </div>
    </Layout>
  );
}
