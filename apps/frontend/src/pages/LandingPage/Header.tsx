import React from 'react';
import { Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const Navigate = useNavigate();
  const isAuthenticated = true;
  const user = {
    role: 'employer',
    fullName: 'Sreedev',
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => Navigate('/')}
          >
            <div className="w-9 h-9 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-gray-900 tracking-tight">
              Job Portal
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors cursor-pointer"
              onClick={() => Navigate('/find-jobs')}
            >
              Find Jobs
            </a>
            <a
              className="text-gray-600 hover:text-blue-600 font-medium transition-colors cursor-pointer"
              onClick={() =>
                Navigate(
                  isAuthenticated && user.role === 'employer'
                    ? '/employer-dashboard'
                    : '/login'
                )
              }
            >
              For Employers
            </a>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="hidden sm:block text-sm text-gray-600">
                  Welcome, <span className="font-medium text-gray-900">{user.fullName}</span>
                </span>

                <a
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-lg text-sm font-medium shadow hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
                  href={user.role === 'employer' ? '/employer-dashboard' : '/find-jobs'}
                >
                  Dashboard
                </a>
              </div>
            ) : (
              <>
                <a
                  className="text-gray-600 hover:text-gray-900 font-medium px-4 py-2 rounded-lg transition"
                  href="/login"
                >
                  Login
                </a>
                <a
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-lg text-sm font-medium shadow hover:from-blue-700 hover:to-purple-700 transition"
                  href="/signup"
                >
                  Signup
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
