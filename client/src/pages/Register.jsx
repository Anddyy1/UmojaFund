// client/src/pages/Register.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Register() {
  const navigate = useNavigate();
  const { registerUser } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "supporter",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      return setError("Passwords do not match.");
    }

    setLoading(true);

    try {
      await registerUser({
        name: form.name,
        email: form.email,
        password: form.password,
        accountType: form.accountType,
      });

      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError(err?.response?.data?.message || "Registration failed");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-amber-50 p-4">
      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-emerald-100">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">U</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-emerald-900">Join Our Community</h2>
          <p className="text-emerald-600 mt-2">Start your journey to make a difference today</p>
        </div>

        {error && (
          <p className="bg-red-100 text-red-700 p-3 rounded-xl mb-6 text-sm border border-red-200">
            {error}
          </p>
        )}

        {/* Account Type Selection */}
        <div className="mb-6">
          <label className="block text-emerald-700 font-medium mb-3">I want to join as a:</label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setForm({...form, accountType: 'supporter'})}
              className={`p-4 border-2 rounded-xl text-center transition-all ${
                form.accountType === 'supporter' 
                  ? 'border-emerald-500 bg-emerald-50 shadow-md' 
                  : 'border-emerald-200 hover:border-emerald-300 hover:shadow-sm'
              }`}
            >
              <div className="text-2xl mb-2">❤️</div>
              <div className="font-semibold text-emerald-800">Supporter</div>
              <div className="text-sm text-emerald-600 mt-1">Back campaigns & make impact</div>
            </button>
            <button
              type="button"
              onClick={() => setForm({...form, accountType: 'creator'})}
              className={`p-4 border-2 rounded-xl text-center transition-all ${
                form.accountType === 'creator' 
                  ? 'border-amber-500 bg-amber-50 shadow-md' 
                  : 'border-amber-200 hover:border-amber-300 hover:shadow-sm'
              }`}
            >
              <div className="text-2xl mb-2">🚀</div>
              <div className="font-semibold text-amber-800">Campaign Creator</div>
              <div className="text-sm text-amber-600 mt-1">Start fundraising campaigns</div>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-emerald-700 font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="w-full p-3 rounded-xl border border-emerald-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-emerald-50/50"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-emerald-700 font-medium mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full p-3 rounded-xl border border-emerald-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-emerald-50/50"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-emerald-700 font-medium mb-2">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                className="w-full p-3 rounded-xl border border-emerald-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-emerald-50/50"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-emerald-700 font-medium mb-2">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                className="w-full p-3 rounded-xl border border-emerald-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-emerald-50/50"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Terms Agreement */}
          <div className="flex items-start space-x-3 mt-4 p-3 bg-emerald-50 rounded-xl">
            <input
              type="checkbox"
              required
              className="mt-1 rounded focus:ring-emerald-500 text-emerald-500"
            />
            <label className="text-sm text-emerald-700">
              I agree to the <Link to="/terms" className="text-amber-600 hover:underline font-medium">Terms of Service</Link> and <Link to="/privacy" className="text-amber-600 hover:underline font-medium">Privacy Policy</Link>. I understand that UmojaFund is a platform for community fundraising.
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-emerald-500 to-amber-500 hover:from-emerald-600 hover:to-amber-600 text-white py-3 rounded-xl font-semibold transition-all transform hover:-translate-y-0.5 disabled:opacity-50 shadow-md mt-6"
          >
            {loading ? "Creating your account..." : `Join as ${form.accountType === 'creator' ? 'Campaign Creator' : 'Supporter'}`}
          </button>
        </form>

        <div className="text-center text-emerald-700 mt-6">
          <p>Already have an account?{" "}
          <Link to="/login" className="text-amber-600 font-semibold hover:underline">
            Sign in here
          </Link></p>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 text-center">
          <div className="flex justify-center space-x-6 text-xs text-emerald-500 mb-4">
            <span>✅ 48K+ Campaigns</span>
            <span>✅ $2.1M+ Raised</span>
            <span>✅ 82% Success Rate</span>
          </div>
          <p className="text-xs text-emerald-600 bg-emerald-50 rounded-lg p-3">
            🔒 Your information is secure. We never share your data with third parties.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;