import { useState } from 'react';
import {
    BeakerIcon,
    WrenchScrewdriverIcon,
    AcademicCapIcon,
    ChartBarIcon,
    BuildingOfficeIcon,
    ArrowRightIcon,
    CheckCircleIcon,
    CogIcon,
    TruckIcon,
    CpuChipIcon,
} from '@heroicons/react/24/outline';
import DepartmentLayout from '../layout/DepartmentLayout';
import { Link } from 'react-router-dom';

const TechnologyComponent = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const heroConfig = {
        title: "Empowering Cooperatives Through",
        description: "Driving sustainable growth, improved product quality, and enhanced market competitiveness through specialized technical expertise.",
        imageSrc: "/images/technology1.jpg",
        badgeIcon: CpuChipIcon,
        badgeText: "Technical Support Services",
        highlightText: "Technical Innovation"
    };

    const techStats = [
        { id: 1, value: "2", label: "Technical Units", description: "Specialized support units" },
        { id: 2, value: "48", label: "Assets Reactivated", description: "Machines & vehicles" },
        { id: 3, value: "9+", label: "New Products", description: "Food technology innovations" },
        { id: 4, value: "25", label: "Interns Trained", description: "Technical expertise development" }
    ];

    const missionConfig = {
        mission: "To empower cooperative societies through technical expertise, innovation, and resource optimization – enabling sustainable growth, improved product quality, and enhanced market competitiveness.",
        icon: CpuChipIcon,
        title: "Our Technical Mission"
    };

    const tabs = [
        { id: 'overview', label: 'Overview', shortLabel: 'Overview', icon: <ChartBarIcon className="h-5 w-5" /> },
        { id: 'food-tech', label: 'Food Technology', shortLabel: 'Food Tech', icon: <BeakerIcon className="h-5 w-5" /> },
        { id: 'auto-tech', label: 'Automobile Tech', shortLabel: 'Auto Tech', icon: <WrenchScrewdriverIcon className="h-5 w-5" /> },
        { id: 'internship', label: 'Internship Program', shortLabel: 'Internship', icon: <AcademicCapIcon className="h-5 w-5" /> }
    ];

    const foodProducts = [
        { id: 1, name: "Masala Paneer", category: "Dairy" },
        { id: 2, name: "Pirandai Pickle", category: "Pickles" },
        { id: 3, name: "Garlic Pickle", category: "Pickles" },
        { id: 4, name: "Palm Posha", category: "Snacks" },
        { id: 5, name: "Avizhtha Kanchi", category: "Traditional" }
    ];

    const automobileAchievements = [
        { id: 1, type: "Machine", count: 23, description: "Reactivated and repaired", icon: <CogIcon className="h-6 w-6 md:h-8 md:w-8" /> },
        { id: 2, type: "Vehicle", count: 25, description: "Reactivated and repaired", icon: <TruckIcon className="h-6 w-6 md:h-8 md:w-8" /> },
        { id: 3, type: "Cooperative Society", count: 15, description: "Benefited from asset management", icon: <BuildingOfficeIcon className="h-6 w-6 md:h-8 md:w-8" /> }
    ];

    const currentInternshipStats = {
        totalCompleted: 25,
        currentActive: 8,
        foodTech: 3,
        greenFarming: 3,
        automobile: 2
    };

    return (
        <DepartmentLayout
            heroConfig={heroConfig}
            metrics={techStats}
            missionConfig={missionConfig}
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
        >
            {activeTab === 'overview' && (
                <div className="space-y-8 md:space-y-12">
                    <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Technical Unit Overview</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div>
                                <p className="text-blue-700 text-base md:text-lg mb-6 leading-relaxed">
                                    The Technical Unit at NCDB is dedicated to providing specialized technical support to cooperative societies across multiple sectors. Our focus areas include food technology, automobile technology, and sustainable farming practices.
                                </p>
                                <p className="text-blue-700 text-base md:text-lg leading-relaxed">
                                    Through our comprehensive programs and hands-on support, we help cooperative societies optimize their resources, develop new products, reactivate idle assets, and implement sustainable practices that drive long-term growth and market competitiveness.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl md:rounded-2xl p-6 md:p-8">
                                <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-6">Our Technical Expertise</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Food processing and quality enhancement",
                                        "Asset reactivation and maintenance",
                                        "Sustainable farming technologies",
                                        "Product development and innovation",
                                        "Technical training and capacity building"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckCircleIcon className="h-5 w-5 md:h-6 md:w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                                            <span className="text-blue-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8 text-center">Our Technical Units</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                            <div className="bg-gradient-to-br from-white to-blue-50 rounded-xl md:rounded-2xl shadow-lg border border-blue-100 p-6 md:p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                                <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 mb-4 md:mb-6">
                                    <BeakerIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">Food Technical Unit</h3>
                                <p className="text-blue-600 text-sm md:text-base mb-4 md:mb-6">Enhancing product quality, innovation, and market competitiveness for food cooperatives.</p>
                                <button
                                    onClick={() => setActiveTab('food-tech')}
                                    className="text-blue-700 hover:text-blue-900 font-semibold flex items-center group text-sm md:text-base"
                                >
                                    Learn More
                                    <ArrowRightIcon className="h-4 w-4 md:h-5 md:w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                            <div className="bg-gradient-to-br from-white to-indigo-50 rounded-xl md:rounded-2xl shadow-lg border border-indigo-100 p-6 md:p-8 hover:shadow-xl hover:border-indigo-300 transition-all duration-300">
                                <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 mb-4 md:mb-6">
                                    <WrenchScrewdriverIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">Automobile Technology Unit</h3>
                                <p className="text-blue-600 text-sm md:text-base mb-4 md:mb-6">Reactivating idle assets and optimizing resource utilization for cooperatives.</p>
                                <button
                                    onClick={() => setActiveTab('auto-tech')}
                                    className="text-indigo-700 hover:text-indigo-900 font-semibold flex items-center group text-sm md:text-base"
                                >
                                    Learn More
                                    <ArrowRightIcon className="h-4 w-4 md:h-5 md:w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>

                            <div className="bg-gradient-to-br from-white to-cyan-50 rounded-xl md:rounded-2xl shadow-lg border border-cyan-100 p-6 md:p-8 hover:shadow-xl hover:border-cyan-300 transition-all duration-300">
                                <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-700 mb-4 md:mb-6">
                                    <AcademicCapIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">Internship Program</h3>
                                <p className="text-blue-600 text-sm md:text-base mb-4 md:mb-6">Developing future technical experts through hands-on training and practical experience.</p>
                                <button
                                    onClick={() => setActiveTab('internship')}
                                    className="text-cyan-700 hover:text-cyan-900 font-semibold flex items-center group text-sm md:text-base"
                                >
                                    Learn More
                                    <ArrowRightIcon className="h-4 w-4 md:h-5 md:w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'food-tech' && (
                <div className="space-y-8 md:space-y-12">
                    <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Food Technical Unit</h2>
                        <p className="text-blue-600 text-base md:text-lg mb-6 md:mb-8 max-w-3xl leading-relaxed">
                            The Food Technical Unit supports cooperative society-owned food factories by enhancing product quality, fostering innovation, and improving market competitiveness through technical expertise and capacity building.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
                            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl md:rounded-2xl p-6 md:p-8 border border-blue-100">
                                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-4 md:mb-6">Key Focus Areas</h3>
                                <ul className="space-y-3 md:space-y-4">
                                    {[
                                        "Enhancing product quality through rigorous quality checks",
                                        "Product innovation & development for market needs",
                                        "Packaging & labeling improvements",
                                        "Training & capacity building for cooperative societies",
                                        "Paddy quality testing and rice-based product improvement",
                                        "Support for local food items development"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckCircleIcon className="h-5 w-5 md:h-6 md:w-6 text-blue-600 mr-2 md:mr-3 flex-shrink-0" />
                                            <span className="text-blue-700 text-sm md:text-base">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl md:rounded-2xl p-6 md:p-8 border border-indigo-100">
                                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-4 md:mb-6">Innovative Products</h3>
                                <div className="space-y-3 md:space-y-4">
                                    {foodProducts.map((product, index) => (
                                        <div key={index} className="flex justify-between items-center p-3 md:p-4 bg-white rounded-lg border border-blue-100">
                                            <div className="flex items-center">
                                                <div className="h-8 w-8 md:h-10 md:w-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base mr-3">
                                                    {product.name.charAt(0)}
                                                </div>
                                                <span className="font-medium text-blue-800 text-sm md:text-base">{product.name}</span>
                                            </div>
                                            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                                                {product.category}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'internship' && (
                <div className="space-y-8 md:space-y-12">
                    <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Internship Program</h2>

                        <p className="text-blue-600 text-base md:text-lg mb-6 md:mb-8 max-w-3xl leading-relaxed">
                            The Internship Program develops future technical experts by recruiting students from various technical fields for 6-month internships, providing hands-on experience and contributing to cooperative development.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
                            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 text-white text-center">
                                <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">{currentInternshipStats.totalCompleted}</div>
                                <h3 className="font-bold mb-1 md:mb-2 text-sm md:text-base">Students Completed</h3>
                                <p className="text-blue-100 text-xs md:text-sm">Total interns trained</p>
                            </div>

                            <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 text-white text-center">
                                <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">{currentInternshipStats.currentActive}</div>
                                <h3 className="font-bold mb-1 md:mb-2 text-sm md:text-base">Currently Active</h3>
                                <p className="text-indigo-100 text-xs md:text-sm">Ongoing internships</p>
                            </div>

                            <div className="bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 text-white text-center">
                                <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">3</div>
                                <h3 className="font-bold mb-1 md:mb-2 text-sm md:text-base">Technical Fields</h3>
                                <p className="text-cyan-100 text-xs md:text-sm">Specialized areas</p>
                            </div>

                            <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 text-white text-center">
                                <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 md:mb-2">6</div>
                                <h3 className="font-bold mb-1 md:mb-2 text-sm md:text-base">Months Duration</h3>
                                <p className="text-purple-100 text-xs md:text-sm">Per internship program</p>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-white">
                            <div className="flex flex-col md:flex-row items-center justify-between">
                                <div className="mb-6 md:mb-0 md:mr-8">
                                    <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">Join Our Internship Program</h3>
                                    <p className="text-blue-100 text-base md:text-lg">
                                        Are you a student in Food Technology, Green Farming, or Automobile Technology? Apply for our 6-month internship program and gain practical experience while contributing to cooperative development and community empowerment.
                                    </p>
                                </div>
                                <Link to={"/careers"} className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
                                    Apply Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </DepartmentLayout>
    );
};

export default TechnologyComponent;