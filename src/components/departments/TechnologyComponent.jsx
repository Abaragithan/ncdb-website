import { useState } from 'react';
import {
    BeakerIcon,
    WrenchScrewdriverIcon,
    AcademicCapIcon,
    ChartBarIcon,
    ArrowRightIcon,
    CheckCircleIcon,
    CogIcon,
    TruckIcon,
    CpuChipIcon,
    ShieldCheckIcon
} from '@heroicons/react/24/outline';
import DepartmentLayout from '../layout/DepartmentLayout';
import { Link } from 'react-router-dom';

const TechnologyComponent = () => {
    const [activeTab, setActiveTab] = useState('overview');

    // Content from document
    const heroConfig = {
        title: "Practical Technologies for",
        description: "Providing applied technical support to strengthen cooperative industries and local production systems.",
        imageSrc: "/images/technology1.jpg",
        badgeIcon: CpuChipIcon,
        badgeText: "Technology Division",
        highlightText: "Cooperative Production",
        slogan: "Practical Technologies for Cooperative Production"
    };

    const missionConfig = {
        mission: "The Technology Division provides appropriate, reliable, and sector-specific technical solutions that enhance project efficiency and sustainability. Its work supports cooperative enterprises across food processing, mechanical services, and rural industries, ensuring technology serves people, productivity, and long-term community benefit.",
        icon: CpuChipIcon,
        title: "Our Technical Mission"
    };

    const tabs = [
        { id: 'overview', label: 'Overview', shortLabel: 'Overview', icon: <ChartBarIcon className="h-5 w-5" /> },
        { id: 'food-tech', label: 'Food Technology', shortLabel: 'Food Tech', icon: <BeakerIcon className="h-5 w-5" /> },
        { id: 'mechanical', label: 'Mechanical & Automobile', shortLabel: 'Mechanical', icon: <WrenchScrewdriverIcon className="h-5 w-5" /> },
        { id: 'expertise', label: 'Technical Expertise', shortLabel: 'Expertise', icon: <CogIcon className="h-5 w-5" /> }
    ];

    // Technical Expertise from document
    const technicalExpertise = [
        "Food processing and quality systems",
        "Mechanical and automobile services",
        "Equipment selection and maintenance",
        "Production process improvement",
        "Safety and standards compliance",
        "Technical training and hands-on capacity building for cooperative members and staff"
    ];

    const techStats = [
        { id: 1, value: "2", label: "Technical Units", description: "Specialized support units" },
        { id: 2, value: "50+", label: "Cooperatives Served", description: "Across Northern Province" },
        { id: 3, value: "100+", label: "Technical Solutions", description: "Implemented successfully" },
        { id: 4, value: "500+", label: "Members Trained", description: "Technical capacity building" }
    ];

    const foodTechnologyContent = {
        unitName: "Food Technology Unit",
        description: "Supporting cooperative food processing, quality assurance, and food safety through technical expertise and innovation.",
        focusAreas: [
            "Food processing and preservation techniques",
            "Quality assurance and food safety systems",
            "Product development and innovation",
            "Packaging and labeling solutions",
            "Equipment optimization and maintenance"
        ],
        achievements: [
            "Developed 9+ new food products for cooperatives",
            "Improved food safety standards in 15+ cooperative factories",
            "Trained 200+ cooperative members in food processing",
            "Enhanced product quality and market competitiveness"
        ]
    };

    const mechanicalContent = {
        unitName: "Mechanical & Automobile Unit",
        description: "Assisting cooperatives with machinery, transport, and maintenance systems to optimize resource utilization and productivity.",
        focusAreas: [
            "Machinery maintenance and repair",
            "Vehicle fleet management",
            "Equipment procurement and installation",
            "Preventive maintenance systems",
            "Technical troubleshooting and support"
        ],
        achievements: [
            "Reactivated 48+ machines and vehicles",
            "Reduced downtime by 60% in cooperative operations",
            "Trained 150+ cooperative staff in maintenance",
            "Improved equipment lifespan and efficiency"
        ]
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
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Technology Division Overview</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div>
                                <p className="text-blue-700 text-base md:text-lg mb-6 leading-relaxed">
                                    The Technology Division at NCDB provides appropriate, reliable, and sector-specific technical solutions that enhance project efficiency and sustainability. Our work supports cooperative enterprises across food processing, mechanical services, and rural industries.
                                </p>
                                <p className="text-blue-700 text-base md:text-lg leading-relaxed">
                                    We ensure that technology serves people, productivity, and long-term community benefit. Our approach is grounded in practical, applied solutions that strengthen cooperative industries and local production systems.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl md:rounded-2xl p-6 md:p-8">
                                <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-6">Our Technical Units</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <BeakerIcon className="h-5 w-5 md:h-6 md:w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                                        <div>
                                            <span className="text-blue-800 font-semibold">Food Technology Unit</span>
                                            <p className="text-blue-700 text-sm">Supporting cooperative food processing, quality assurance, and food safety</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <WrenchScrewdriverIcon className="h-5 w-5 md:h-6 md:w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                                        <div>
                                            <span className="text-blue-800 font-semibold">Mechanical & Automobile Unit</span>
                                            <p className="text-blue-700 text-sm">Assisting cooperatives with machinery, transport, and maintenance systems</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8 text-center">Our Technical Units</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            <div
                                className="bg-gradient-to-br from-white to-blue-50 rounded-xl md:rounded-2xl shadow-lg border border-blue-100 p-6 md:p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300 cursor-pointer"
                                onClick={() => setActiveTab('food-tech')}
                            >
                                <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 mb-4 md:mb-6">
                                    <BeakerIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">Food Technology Unit</h3>
                                <p className="text-blue-600 text-sm md:text-base mb-4 md:mb-6">Supporting cooperative food processing, quality assurance, and food safety through technical expertise and innovation.</p>
                                <div className="flex items-center text-blue-700 hover:text-blue-900 font-semibold group text-sm md:text-base">
                                    <span>Explore Food Technology</span>
                                    <ArrowRightIcon className="h-4 w-4 md:h-5 md:w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>

                            <div
                                className="bg-gradient-to-br from-white to-indigo-50 rounded-xl md:rounded-2xl shadow-lg border border-indigo-100 p-6 md:p-8 hover:shadow-xl hover:border-indigo-300 transition-all duration-300 cursor-pointer"
                                onClick={() => setActiveTab('mechanical')}
                            >
                                <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 mb-4 md:mb-6">
                                    <WrenchScrewdriverIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">Mechanical & Automobile Unit</h3>
                                <p className="text-blue-600 text-sm md:text-base mb-4 md:mb-6">Assisting cooperatives with machinery, transport, and maintenance systems to optimize resource utilization and productivity.</p>
                                <div className="flex items-center text-indigo-700 hover:text-indigo-900 font-semibold group text-sm md:text-base">
                                    <span>Explore Mechanical Services</span>
                                    <ArrowRightIcon className="h-4 w-4 md:h-5 md:w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'food-tech' && (
                <div className="space-y-8 md:space-y-12">
                    <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Food Technology Unit</h2>

                        <div className="mb-8 md:mb-12">
                            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl md:rounded-2xl p-6 md:p-8 border border-blue-100 mb-6 md:mb-8">
                                <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">{foodTechnologyContent.unitName}</h3>
                                <p className="text-blue-700 text-base md:text-lg mb-6">{foodTechnologyContent.description}</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                    <div>
                                        <h4 className="font-bold text-blue-900 mb-4">Focus Areas:</h4>
                                        <ul className="space-y-3">
                                            {foodTechnologyContent.focusAreas.map((area, index) => (
                                                <li key={index} className="flex items-start">
                                                    <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                                                    <span className="text-blue-700">{area}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-blue-900 mb-4">Key Achievements:</h4>
                                        <ul className="space-y-3">
                                            {foodTechnologyContent.achievements.map((achievement, index) => (
                                                <li key={index} className="flex items-start">
                                                    <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                                                        <span className="text-blue-600 text-xs font-bold">{index + 1}</span>
                                                    </div>
                                                    <span className="text-blue-700">{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-white">
                            <div className="flex flex-col md:flex-row items-center justify-between">
                                <div className="mb-6 md:mb-0 md:mr-8">
                                    <h3 className="text-lg md:text-2xl font-bold mb-4">Need Technical Support for Your Food Cooperative?</h3>
                                    <p className="text-blue-100 text-base md:text-lg">
                                        Our food technology experts are available to help your cooperative with product development, quality improvement, processing techniques, and food safety compliance.
                                    </p>
                                </div>
                                <button className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
                                    Request Technical Assistance
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'expertise' && (
                <div className="space-y-8 md:space-y-12">
                    <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Technical Expertise</h2>

                        <p className="text-blue-600 text-base md:text-lg mb-8 md:mb-12 max-w-3xl leading-relaxed">
                            Our technical expertise covers a wide range of areas essential for cooperative development and industrial growth. We provide hands-on, practical solutions tailored to the specific needs of cooperative enterprises.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {technicalExpertise.map((expertise, index) => (
                                <div key={index} className="bg-gradient-to-br from-white to-blue-50 rounded-xl md:rounded-2xl shadow-lg border border-blue-100 p-6 md:p-8 hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 mb-4 md:mb-6">
                                        <CogIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">
                                        {expertise.split(' and ')[0].split(' for ')[0]}
                                    </h3>
                                    <p className="text-blue-600 text-sm md:text-base">{expertise}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 bg-gradient-to-r from-green-600 to-emerald-700 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-white">
                            <div className="flex flex-col md:flex-row items-center justify-between">
                                <div className="mb-6 md:mb-0 md:mr-8">
                                    <h3 className="text-lg md:text-2xl font-bold mb-4">Capacity Building & Training</h3>
                                    <p className="text-green-100 text-base md:text-lg">
                                        We provide comprehensive technical training and hands-on capacity building for cooperative members and staff, ensuring sustainable skill development and knowledge transfer.
                                    </p>
                                </div>
                                <Link
                                    to="/careers"
                                    className="bg-white text-green-700 hover:bg-green-50 font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                                >
                                    Explore Training Programs
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