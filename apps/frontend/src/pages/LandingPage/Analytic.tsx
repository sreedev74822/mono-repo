import { motion } from "framer-motion";
import { TrendingUp, Users, Briefcase, Target } from "lucide-react";

export default function Analytic() {
  const statsData = [
    {
      icon: Users,
      title: "Employees",
      value: 120,
      growth: "+8%",
      color: "text-blue-600"
    },
    {
      icon: Briefcase,
      title: "Open Jobs",
      value: 35,
      growth: "+5%",
      color: "text-green-600"
    },
    {
      icon: Target,
      title: "Revenue",
      value: "$45,000",
      growth: "+12%",
      color: "text-purple-600"
    },
    {
      icon: TrendingUp,
      title: "New Applicants",
      value: 280,
      growth: "+15%",
      color: "text-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Platform{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Analytics
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Real-time insights and data-driven results that showcase your platform
            performance.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center p-6 bg-white rounded-2xl shadow hover:shadow-lg transition-all"
              >
                {/* Icon */}
                <div
                  className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 ${item.color} mr-4`}
                >
                  <Icon className="w-6 h-6 text-current" />
                </div>

                {/* Stats Info */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-2xl font-bold text-gray-900">{item.value}</p>
                  <p
                    className={`text-sm font-medium ${
                      item.growth.includes("+") ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {item.growth} growth
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
