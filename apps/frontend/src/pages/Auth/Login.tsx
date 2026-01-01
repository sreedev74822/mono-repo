import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, AlertCircle, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom"; // if using Next.js
// If using React Router, you can use useNavigate instead

export default function Login() {
  const router = useNavigate(); // for Next.js routing
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [formState, setFormState] = useState({
    loading: false,
    errors: {} as { email?: string; password?: string; submit?: string },
    showPassword: false,
    success: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let valid = true;
    const errors: any = {};

    if (!formData.email) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      errors.email = "Invalid email address";
      valid = false;
    }

    if (!formData.password) {
      errors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setFormState((prev) => ({ ...prev, errors }));
    return valid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setFormState((prev) => ({ ...prev, loading: true, errors: {}, success: false }));

    // Simulate API login
    setTimeout(() => {
      setFormState((prev) => ({ ...prev, loading: false, success: true }));

      // Redirect after 2 seconds
      setTimeout(() => {
        router("/dashboard"); // or your dashboard route
      }, 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl max-w-md w-full relative"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Welcome Back</h2>
          <p className="text-gray-700">Sign into your job portal</p>
        </div>

        {/* Success Message */}
        {formState.success && (
          <div className="mb-4 flex items-center justify-center text-green-600 font-medium space-x-2">
            <CheckCircle className="w-5 h-5" />
            <span>You have been successfully logged in. Redirecting to your dashboard...</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-4 py-3 rounded-xl border
                  ${formState.errors.email ? "border-red-500" : "border-gray-300"}
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition shadow-sm`}
                placeholder="Enter your email"
              />
            </div>
            {formState.errors.email && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {formState.errors.email}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type={formState.showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-12 py-3 rounded-xl border
                  ${formState.errors.password ? "border-red-500" : "border-gray-300"}
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition shadow-sm`}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() =>
                  setFormState((prev) => ({ ...prev, showPassword: !prev.showPassword }))
                }
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition"
              >
                {formState.showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
            {formState.errors.password && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" />
                {formState.errors.password}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={formState.loading}
            className={`w-full py-3 rounded-xl font-semibold text-lg shadow-lg transition-all
              ${formState.loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white"
              }`}
          >
            {formState.loading ? "Signing in..." : "Sign In"}
          </button>

          {/* Signup Link */}
          <div className="mt-4 text-center">
            <a  className="text-blue-600 font-medium hover:underline transition">
              Don't have an account? <span onClick={()=>router('/signup')}>Create Account</span>
            </a>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
