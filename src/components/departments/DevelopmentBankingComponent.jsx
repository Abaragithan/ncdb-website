import { useState } from 'react';
import {
    BanknotesIcon,
    BuildingOfficeIcon,
    UserGroupIcon,
    ChartBarIcon,
    ArrowRightIcon,
    CheckCircleIcon,
    DocumentTextIcon,
    CalculatorIcon,
    BuildingLibraryIcon,
    DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';
import DepartmentLayout from '../layout/DepartmentLayout';

const DevelopmentBankingComponent = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const heroConfig = {
        title: "Empowering Communities Through",
        description: "Comprehensive development banking solutions designed to uplift cooperative societies and drive sustainable economic growth.",
        imageSrc: "/images/development banking.jpg",
        badgeIcon: BuildingLibraryIcon,
        badgeText: "Development Banking Services",
        highlightText: "Inclusive Finance"
    };

    const metrics = [
        { id: 1, metric: "LKR500+ Cr", label: "Development Loans Disbursed", icon: "💰" },
        { id: 2, metric: "5000+", label: "Beneficiaries Supported", icon: "👥" },
        { id: 3, metric: "200+", label: "Villages Developed", icon: "🏘️" },
        { id: 4, metric: "LKR10+ Cr", label: "Grants Distributed", icon: "🎯" }
    ];

    const missionConfig = {
        mission: "To empower communities through inclusive financial solutions that foster sustainable development, economic growth, and improved quality of life.",
        icon: BanknotesIcon,
        title: "Our Development Mission"
    };

    const tabs = [
        { id: 'overview', label: 'Overview', shortLabel: 'Overview', icon: <BuildingLibraryIcon className="h-5 w-5" /> },
        { id: 'programs', label: 'Programs', shortLabel: 'Programs', icon: <DocumentTextIcon className="h-5 w-5" /> },
        { id: 'grants', label: 'Grants', shortLabel: 'Grants', icon: <BanknotesIcon className="h-5 w-5" /> },
    ];

    const developmentPrograms = [
        {
            id: 1,
            name: "Integrated Village Development Program",
            description: "Comprehensive development program focusing on infrastructure activation and economic upliftment of rural communities.",
            icon: <BuildingOfficeIcon className="h-8 w-8 text-blue-600" />,
            features: ["Agriculture Credit", "Infrastructure Development", "Food Security"]
        },
        {
            id: 2,
            name: "Departmental Loan Modification Program",
            description: "Tailored credit solutions designed to optimize existing loan structures for better financial management.",
            icon: <DocumentTextIcon className="h-8 w-8 text-blue-600" />,
            features: ["Emergency Funds", "Housing Credit", "Agriculture Loans"]
        },
        {
            id: 3,
            name: "Asset Optimization Program",
            description: "Strategic reactivation and optimal utilization of cooperative assets and vehicles.",
            icon: <CalculatorIcon className="h-8 w-8 text-blue-600" />,
            features: ["Asset Valuation", "Repair Services", "Rental Management"]
        }
    ];

    const grants = [
        {
            id: 1,
            name: "Agricultural Development Grant",
            amount: "Up to LKR50,000",
            eligibility: "Farmers & Agricultural Cooperatives",
            purpose: "Modern farming equipment, irrigation systems",
            icon: "🌱"
        },
        {
            id: 2,
            name: "Small Business Start-up Grant",
            amount: "Up to LKR1,00,000",
            eligibility: "New Entrepreneurs",
            purpose: "Business establishment, initial inventory",
            icon: "🚀"
        },
        {
            id: 3,
            name: "Women Entrepreneurship Grant",
            amount: "Up to LKR75,000",
            eligibility: "Women Entrepreneurs",
            purpose: "Women-led business ventures",
            icon: "👩‍💼"
        }
    ];

    const contactInfo = {
        phone: "1800-123-4567",
        email: "development@ncdb.coop",
        address: "Elders Home Complex, Kandy Road, Kaithady, Jaffna 40000",
        hours: "Monday - Friday: 9:00 AM - 5:00 PM"
    };

    return (
        <DepartmentLayout
            heroConfig={heroConfig}
            metrics={metrics}
            missionConfig={missionConfig}
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
        >
            {activeTab === 'overview' && (
                <div className="space-y-8 md:space-y-12">
                    <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">Development Banking Overview</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div>
                                <p className="text-blue-700 text-base md:text-lg mb-6 leading-relaxed">
                                    NCDB's Development Banking unit is dedicated to fostering sustainable economic growth and social welfare through targeted financial solutions. We work closely with communities, cooperatives, and individuals to provide the financial resources needed for development and progress.
                                </p>
                                <p className="text-blue-700 text-base md:text-lg leading-relaxed">
                                    Our approach combines traditional banking services with innovative development programs designed to address specific community needs, empower entrepreneurs, support education, and improve overall quality of life.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl md:rounded-2xl p-6 md:p-8">
                                <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-6">Our Approach</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Community needs assessment and analysis",
                                        "Customized financial solutions",
                                        "Sustainable development focus",
                                        "Regular monitoring and evaluation",
                                        "Capacity building and training"
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
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8 text-center">Featured Development Programs</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {developmentPrograms.map((program) => (
                                <div key={program.id} className="bg-white rounded-xl md:rounded-2xl shadow-lg border border-blue-100 p-6 md:p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                                    <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-xl bg-blue-50 mb-4 md:mb-6">
                                        {program.icon}
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">{program.name}</h3>
                                    <p className="text-blue-600 text-sm md:text-base mb-4 md:mb-6">{program.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {program.features.map((feature, index) => (
                                            <span key={index} className="px-2 py-1 md:px-3 md:py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'programs' && (
                <div className="space-y-8 md:space-y-12">
                    <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Development Programs</h2>
                        <div className="space-y-6 md:space-y-8">
                            {developmentPrograms.map((program) => (
                                <div key={program.id} className="bg-gradient-to-r from-blue-50 to-white rounded-xl md:rounded-2xl p-6 md:p-8 border border-blue-100">
                                    <div className="flex flex-col md:flex-row md:items-start">
                                        <div className="flex-shrink-0 mb-4 md:mb-0">
                                            {program.icon}
                                        </div>
                                        <div className="md:ml-6">
                                            <h3 className="text-lg md:text-2xl font-bold text-blue-900 mb-3">{program.name}</h3>
                                            <p className="text-blue-700 text-sm md:text-base mb-4 md:mb-6">{program.description}</p>
                                            {program.features.length > 0 && (
                                                <div className="bg-white rounded-xl p-4 md:p-6">
                                                    <h4 className="font-semibold text-blue-900 mb-3 md:mb-4">Key Components:</h4>
                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                                                        {program.features.map((feature, index) => (
                                                            <div key={index} className="flex items-center">
                                                                <div className="h-2 w-2 rounded-full bg-blue-500 mr-2 md:mr-3"></div>
                                                                <span className="text-blue-700 text-sm md:text-base">{feature}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'grants' && (
                <div className="space-y-8 md:space-y-12">
                    <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Grants & Financial Assistance</h2>
                        <p className="text-blue-600 text-base md:text-lg mb-6 md:mb-8 max-w-3xl">
                            NCDB provides various grants and subsidies to support community development, entrepreneurship, education, and agricultural growth.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
                            {grants.map((grant) => (
                                <div key={grant.id} className="bg-gradient-to-br from-blue-50 to-white rounded-xl md:rounded-2xl shadow-lg border border-blue-100 p-6 md:p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 md:mb-6">
                                        <div className="flex items-center space-x-3 md:space-x-4 mb-4 md:mb-0">
                                            <div className="text-2xl md:text-3xl">{grant.icon}</div>
                                            <div>
                                                <h3 className="text-base md:text-lg lg:text-xl font-bold text-blue-900">{grant.name}</h3>
                                                <div className="flex items-center text-blue-600 text-xs md:text-sm mt-1">
                                                    <UserGroupIcon className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                                                    <span>Eligibility: {grant.eligibility}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-2 px-4 rounded-lg text-sm md:text-base">
                                            {grant.amount}
                                        </span>
                                    </div>
                                    <p className="text-blue-700 text-sm md:text-base mb-4 md:mb-6">{grant.purpose}</p>
                                    <button className="text-blue-700 hover:text-blue-900 font-semibold flex items-center group text-sm md:text-base">
                                        Apply for Grant
                                        <ArrowRightIcon className="h-4 w-4 md:h-5 md:w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gradient-to-r from-blue-800 to-indigo-800 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-white">
                            <div className="flex flex-col md:flex-row items-center justify-between">
                                <div className="mb-6 md:mb-0 md:mr-8">
                                    <h3 className="text-lg md:text-2xl font-bold mb-4">Need Help with Grant Application?</h3>
                                    <p className="text-blue-100 text-base md:text-lg">
                                        Our development banking specialists are available to guide you through the grant application process and help you identify the most suitable financial assistance program.
                                    </p>
                                </div>
                                <button className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
                                    Schedule Consultation
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </DepartmentLayout>
    );
};

export default DevelopmentBankingComponent;