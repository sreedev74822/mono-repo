import { Briefcase } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-gray-50 text-gray-900 overflow-hidden border-t border-gray-200">
      <div className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-10">
            {/* Logo & Description */}
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 flex items-center justify-center rounded-full shadow-sm hover:shadow-md transition-shadow">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Job Portal
                </h3>
              </div>
              <p className="text-sm text-gray-700 max-w-md mx-auto leading-relaxed">
                Connecting talent professionals with innovative companies worldwide.
                Your career success is our mission.
              </p>
            </div>

            {/* Footer Info */}
            <div className="space-y-2">
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Time to Progress
              </p>
              <p className="text-xs text-gray-400">
                Made with ❤️ Happy Coding
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Optional subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </footer>
  );
}
