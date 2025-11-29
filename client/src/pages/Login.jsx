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

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      const res = await login(formData);
      console.log("LOGIN SUCCESS:", res.data);

      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.error("LOGIN ERROR:", error?.response?.data || error);
      setErrorMsg(error?.response?.data?.message || "Login failed");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-amber-50 flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-md mx-auto space-y-8 bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-emerald-100 transition-all animate-fadeIn">

        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center items-center mb-4 sm:mb-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg sm:text-xl">U</span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-emerald-900">Welcome back</h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-emerald-600">
            Continue your journey to make an impact
          </p>
        </div>

        {/* Error Message */}
        {errorMsg && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
            {errorMsg}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="mt-6 sm:mt-8 space-y-5 sm:space-y-6">

          <div className="space-y-4 sm:space-y-5">

            {/* Email */}
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
                className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition bg-emerald-50/50 text-sm sm:text-base"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="password" className="block text-sm font-medium text-emerald-700">
                  Password
                </label>
                <Link to="/forgot-password" className="text-xs sm:text-sm text-amber-600 hover:text-amber-500 font-medium">
                  Forgot password?
                </Link>
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 pr-12 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition bg-emerald-50/50 text-sm sm:text-base"
                />

                {/* Toggle password */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs sm:text-sm text-emerald-600 hover:text-emerald-800"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-emerald-700 text-sm">
              <input type="checkbox" className="w-4 h-4 rounded text-emerald-600" />
              Remember me
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-gradient-to-r from-emerald-500 to-amber-500 text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all transform hover:-translate-y-0.5 text-sm sm:text-base ${
              loading ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Signing in..." : "Sign in to your account"}
          </button>
        </form>

        {/* Divider */}
        <div className="relative mt-6 sm:mt-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-emerald-200"></div>
          </div>
          <div className="relative flex justify-center text-xs sm:text-sm">
            <span className="px-3 bg-white text-emerald-600">New to UmojaFund?</span>
          </div>
        </div>

        {/* Register Link */}
        <div className="text-center">
          <Link
            to="/register"
            className="w-full inline-block border-2 border-emerald-500 text-emerald-600 py-3 px-4 rounded-xl font-semibold hover:bg-emerald-50 transition-all text-sm sm:text-base"
          >
            Create your account
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-xs sm:text-sm text-emerald-600 bg-emerald-50 rounded-lg p-3">
            🔒 Your information is secure. We never share your data with third parties.
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-3 text-[10px] sm:text-xs text-emerald-500">
            <span>✅ 48K+ Campaigns</span>
            <span>✅ $2.1M+ Raised</span>
            <span>✅ 82% Success Rate</span>
          </div>
        </div>

      </div>
    </div>
  );
}
