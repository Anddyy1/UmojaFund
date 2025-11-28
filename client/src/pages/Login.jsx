import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await login(formData);

      console.log("LOGIN SUCCESS:", res.data);

      // 🔥 THE FIX: Redirect after login
      navigate("/dashboard", { replace: true });

    } catch (error) {
      console.error("LOGIN ERROR:", error?.response?.data || error);
      alert(error?.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* ONLY CHANGE: Added mx-auto to center the container */}
      <div className="max-w-md w-full mx-auto space-y-8 bg-white rounded-2xl shadow-xl p-8 border border-emerald-100">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">U</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-emerald-900">Welcome back</h2>
          <p className="mt-3 text-emerald-600">
            Continue your journey to make an impact
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-emerald-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition bg-emerald-50/50"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="password" className="block text-sm font-medium text-emerald-700">
                  Password
                </label>
                <Link to="/forgot-password" className="text-sm text-amber-600 hover:text-amber-500 font-medium">
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition bg-emerald-50/50"
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-emerald-500 to-amber-500 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all transform hover:-translate-y-0.5"
          >
            Sign in to your account
          </button>
        </form>

        {/* Divider */}
        <div className="relative mt-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-emerald-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-3 bg-white text-emerald-600">New to UmojaFund?</span>
          </div>
        </div>

        {/* Register Link */}
        <div className="text-center">
          <Link 
            to="/register" 
            className="w-full inline-block border-2 border-emerald-500 text-emerald-600 py-3 px-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all"
          >
            Create your account
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 text-center">
          <p className="text-xs text-emerald-600 bg-emerald-50 rounded-lg p-3">
            🔒 Your information is secure. We never share your data with third parties.
          </p>
          <div className="mt-4 flex justify-center space-x-6 text-xs text-emerald-500">
            <span>✅ 48K+ Campaigns</span>
            <span>✅ $2.1M+ Raised</span>
            <span>✅ 82% Success Rate</span>
          </div>
        </div>
      </div>
    </div>
  );
}