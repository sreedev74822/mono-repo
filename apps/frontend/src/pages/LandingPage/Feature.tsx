import { categories, employees, jobSeekersFeatures, jobTypes, navigationMenu, salaryRanges } from '../../utils/data';

export default function Feature() {
    return (
        <section className='py-20 bg-white relative overflow-hidden'>
            <div className='container mx-auto px-4 relative z-10'>
                {/* Section Header */}
                <div className='text-center mb-16'>
                    <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
                        Everything you Need to
                        <span className='block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                            Succeed
                        </span>
                    </h2>
                    <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                        Whether you are looking for your next opportunity or the perfect candidate, we have the tools and features to make it happen
                    </p>
                </div>

                <div className='grid md:grid-cols-2 gap-16 lg:gap-24'>
                    {/* Job Seekers Section */}
                    <div>
                        <div className='text-center mb-12'>
                            <h3 className='text-3xl font-bold text-gray-900 mb-4'>
                                For Job Seekers
                            </h3>
                            <div className='w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-blue-300'/>
                        </div>
                        <div className='space-y-6'>
                            {jobSeekersFeatures.map((value: any, index) => {
                                const Icon = value.icon;
                                return (
                                    <div
                                        key={index}
                                        className='group flex items-start space-x-4 p-6 rounded-2xl bg-gray-50 hover:bg-blue-50 transition-all duration-300 shadow-sm'
                                    >
                                        <div className='flex-shrink-0 w-12 h-12 bg-blue-100 flex items-center justify-center rounded-full'>
                                            <Icon className='w-6 h-6 text-blue-600' />
                                        </div>
                                        <div>
                                            <h4 className='text-xl font-semibold text-gray-900 mb-2'>
                                                {value.title}
                                            </h4>
                                            <p className='text-gray-600 leading-relaxed'>{value.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Employers Section */}
                    <div>
                        <div className='text-center mb-12'>
                            <h3 className='text-3xl font-bold text-gray-900 mb-4'>
                                For Employers
                            </h3>
                            <div className='w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-pink-500'/>
                        </div>
                        <div className='space-y-6'>
                            {employees.map((employee: any, index) => {
                                const Icon = employee.icon;
                                return (
                                    <div
                                        key={index}
                                        className='group flex items-start space-x-4 p-6 rounded-2xl bg-gray-50 hover:bg-purple-50 transition-all duration-300 shadow-sm'
                                    >
                                        <div className='flex-shrink-0 w-12 h-12 bg-purple-100 flex items-center justify-center rounded-full'>
                                            <Icon className='w-6 h-6 text-purple-600' />
                                        </div>
                                        <div>
                                            <h4 className='text-xl font-semibold text-gray-900 mb-2'>
                                                {employee.title}
                                            </h4>
                                            <p className='text-gray-600 leading-relaxed'>{employee.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
