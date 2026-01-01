import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff, AlertCircle, CheckCircle, Upload, UserCheck } from "lucide-react";

export default function SignUp() {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "",
    avatar: null as File | null,
    avatarPreview: "" as string,
    showPassword: false,
    loading: false,
    errors: {} as { fullName?: string; email?: string; password?: string; role?: string; submit?: string },
    success: false
  });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, files } = e.target as any;
    if (name === "avatar") {
      const file = files[0];
      if (file) {
        setFormState((prev) => ({
          ...prev,
          avatar: file,
          avatarPreview: URL.createObjectURL(file),
        }));
      }
    } else {
      setFormState((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Form validation
  const validateForm = () => {
    let valid = true;
    const errors: any = {};

    if (!formState.fullName.trim()) {
      errors.fullName = "Full Name is required";
      valid = false;
    }

    if (!formState.email.trim()) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formState.email)) {
      errors.email = "Invalid email address";
      valid = false;
    }

    if (!formState.password.trim()) {
      errors.password = "Password is required";
      valid = false;
    } else if (formState.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
      valid = false;
    }

    if (!formState.role) {
      errors.role = "Please select a role";
      valid = false;
    }

    setFormState((prev) => ({ ...prev, errors }));
    return valid;
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormState((prev) => ({ ...prev, loading: true, success: false }));

    // Simulate API call
    setTimeout(() => {
      setFormState((prev) => ({
        ...prev,
        loading: false,
        success: true
      }));
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
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Create Account</h2>
          <p className="text-gray-700">Sign up to your job portal</p>
        </div>

        {/* Success Message */}
        {formState.success && (
          <div className="mb-4 flex items-center justify-center text-green-600 font-medium space-x-2">
            <CheckCircle className="w-5 h-5" />
            <span>Account created successfully!</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <div className="relative">
              <UserCheck className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                name="fullName"
                value={formState.fullName}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className={`w-full pl-10 pr-4 py-3 rounded-xl border text-gray-900
                  ${formState.errors.fullName ? "border-red-500" : "border-gray-300"} 
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition`}
              />
            </div>
            {formState.errors.fullName && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" /> {formState.errors.fullName}
              </p>
            )}
          </div>

          {/* Email */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className={`w-full pl-10 pr-4 py-3 rounded-xl border text-gray-900
                  ${formState.errors.email ? "border-red-500" : "border-gray-300"} 
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition`}
              />
            </div>
            {formState.errors.email && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" /> {formState.errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type={formState.showPassword ? "text" : "password"}
                name="password"
                value={formState.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className={`w-full pl-10 pr-12 py-3 rounded-xl border text-gray-900
                  ${formState.errors.password ? "border-red-500" : "border-gray-300"} 
                  focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition`}
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
                <AlertCircle className="w-4 h-4 mr-1" /> {formState.errors.password}
              </p>
            )}
          </div>

          {/* Role */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
            <select
              name="role"
              value={formState.role}
              onChange={handleInputChange}
              className={`w-full py-3 px-4 rounded-xl border text-gray-900
                ${formState.errors.role ? "border-red-500" : "border-gray-300"} 
                focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition`}
            >
              <option value="">Select your role</option>
              <option value="job-seeker">Job Seeker</option>
              <option value="employer">Employer</option>
            </select>
            {formState.errors.role && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1" /> {formState.errors.role}
              </p>
            )}
          </div>

          {/* Avatar */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">Avatar</label>
            <label className="flex items-center space-x-3 cursor-pointer bg-gray-100 px-4 py-3 rounded-xl hover:bg-gray-200 transition">
              <Upload className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700">
                {formState.avatar ? formState.avatar.name : "Upload your avatar"}
              </span>
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={handleInputChange}
                className="hidden"
              />
            </label>
            {/* Image Preview */}
            {formState.avatarPreview && (
              <img
                src={formState.avatarPreview}
                alt="Avatar Preview"
                className="mt-3 w-24 h-24 rounded-full object-cover border border-gray-300"
              />
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={formState.loading}
            className={`w-full py-3 rounded-xl font-semibold text-lg shadow-lg transition-all
              ${formState.loading
                ? "bg-blue-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white"
              }`}
          >
            {formState.loading ? "Creating Account..." : "Sign Up"}
          </button>

          {/* Already have account */}
          <div className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="#" className="text-blue-600 font-medium hover:underline">
              Sign In
            </a>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
