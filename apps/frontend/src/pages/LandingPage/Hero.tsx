import { motion } from 'framer-motion';
import { Search, ArrowRight, Users, Building2, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
    const Navigate = useNavigate();
    const isAuthenticated = true;
    const user = {
        role: 'employer',
        fullName: 'Sreedev',
    };

    const stats = [
        { icon: Users, label: 'Active Users', value: '2.4m+' },
        { icon: Building2, label: 'Companies', value: '50k+' },
        { icon: TrendingUp, label: 'Jobs Posted', value: '150k+' },
    ];

    return (
        <section className="relative pt-24 pb-16 bg-white min-h-screen flex items-center overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                    >
                        Find Your Dream Job or{' '}
                        <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Perfect Hire
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
                    >
                        Connect talented professionals with innovative companies.
                        Your next career move or perfect candidate is just one click away.
                    </motion.p>

                    {/* Actions */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg"
                            onClick={() => Navigate('/find-jobs')}
                        >
                            <Search className="w-5 h-5" />
                            <span>Find Jobs</span>
                            <ArrowRight className="w-5 h-5 transition group-hover:translate-x-1" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition"
                            onClick={() =>
                                Navigate(
                                    isAuthenticated && user.role === 'employer'
                                        ? '/employer-dashboard'
                                        : '/login'
                                )
                            }
                        >
                            Post a Job
                        </motion.button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                                className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-gray-50 shadow-sm"
                            >
                                <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-2">
                                    <stat.icon className="w-6 h-6 text-blue-600" />
                                </div>
                                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-40" />
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-100 rounded-full opacity-40" />
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-50 rounded-full opacity-30 -translate-x-1/2 -translate-y-1/2" />
            </div>
        </section>
    );
}
