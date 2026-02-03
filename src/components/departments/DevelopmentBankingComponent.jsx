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
    DevicePhoneMobileIcon,
    WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';
import DepartmentLayout from '../layout/DepartmentLayout';

const DevelopmentBankingComponent = () => {
    const [activeTab, setActiveTab] = useState('overview');

    // Content from document
    const heroConfig = {
        title: "Collective Resources for",
        description: "Supporting cooperative societies with people-centred resources to strengthen livelihoods and local economies.",
        imageSrc: "/images/development banking.jpg",
        badgeIcon: BuildingLibraryIcon,
        badgeText: "Development Banking Unit",
        highlightText: "Shared Development",
        slogan: "Collective Resources for Shared Development"
    };

    const missionConfig = {
        mission: "The Development Banking Unit plays a strategic role in facilitating access to resources for cooperative societies and their members, with the aim of strengthening livelihoods and productive capacity. Beyond credit, the unit works with cooperatives to implement joint development initiatives, supporting infrastructure, technology adoption, and institutional strengthening. Several NCDB pilot initiatives serve as learning models for wider cooperative development.",
        icon: BanknotesIcon,
        title: "Our Development Approach"
    };

    const tabs = [
        { id: 'overview', label: 'Overview', shortLabel: 'Overview', icon: <BuildingLibraryIcon className="h-5 w-5" /> },
        { id: 'approach', label: 'Our Approach', shortLabel: 'Approach', icon: <ChartBarIcon className="h-5 w-5" /> },
        { id: 'programs', label: 'Key Programs', shortLabel: 'Programs', icon: <DocumentTextIcon className="h-5 w-5" /> },
        { id: 'initiatives', label: 'Pilot Initiatives', shortLabel: 'Initiatives', icon: <WrenchScrewdriverIcon className="h-5 w-5" /> }
    ];

    // Our Approach from document
    const approachPoints = [
        "Working through cooperative structures that prioritise member needs",
        "Prioritising livelihood stability over short-term returns",
        "Linking finance with technical and institutional support",
        "Piloting, learning, and scaling collective solutions"
    ];

    // Key Development Programmes from document
    const developmentPrograms = [
        {
            id: 1,
            name: "Cooperative Livelihood Support Programmes",
            description: "Comprehensive support for sustainable livelihood development in cooperative communities",
            icon: <UserGroupIcon className="h-8 w-8 text-blue-600" />,
            features: ["Income generation", "Skill development", "Market access"]
        },
        {
            id: 2,
            name: "Agro-processing & Value Addition Initiatives",
            description: "Support for adding value to agricultural products through processing and packaging",
            icon: <BuildingOfficeIcon className="h-8 w-8 text-blue-600" />,
            features: ["Processing facilities", "Quality enhancement", "Market linkages"]
        },
        {
            id: 3,
            name: "Community-based Industrial Projects",
            description: "Development of small-scale industrial projects within cooperative communities",
            icon: <WrenchScrewdriverIcon className="h-8 w-8 text-blue-600" />,
            features: ["Infrastructure development", "Technology adoption", "Capacity building"]
        },
        {
            id: 4,
            name: "Recovery & Resilience Programmes",
            description: "Programmes supporting community recovery and building resilience to shocks",
            icon: <ChartBarIcon className="h-8 w-8 text-blue-600" />,
            features: ["Disaster recovery", "Climate resilience", "Social protection"]
        },
        {
            id: 5,
            name: "Youth & Women-led Cooperative Enterprises",
            description: "Special support for enterprises led by youth and women in cooperative sectors",
            icon: <UserGroupIcon className="h-8 w-8 text-blue-600" />,
            features: ["Entrepreneurship training", "Start-up financing", "Mentorship"]
        }
    ];

    const pilotInitiatives = [
        {
            id: 1,
            name: "Integrated Cooperative Development Model",
            location: "Jaffna District",
            focus: "Combining finance, technology, and marketing support",
            status: "Ongoing",
            impact: "15 cooperative societies participating"
        },
        {
            id: 2,
            name: "Climate-Smart Agriculture Financing",
            location: "Kilinochchi District",
            focus: "Financing for climate-resilient agricultural practices",
            status: "Completed",
            impact: "200+ farmers benefited"
        },
        {
            id: 3,
            name: "Digital Financial Inclusion Pilot",
            location: "Mannar District",
            focus: "Digital banking services for remote cooperatives",
            status: "Ongoing",
            impact: "10 cooperative societies digitized"
        }
    ];

    const metrics = [
        { id: 1, metric: "50+", label: "Cooperative Societies Supported", icon: "🏦" },
        { id: 2, metric: "5000+", label: "Livelihoods Strengthened", icon: "👥" },
        { id: 3, metric: "25+", label: "Pilot Initiatives", icon: "🚀" },
        { id: 4, metric: "LKR100+ Cr", label: "Development Resources Mobilized", icon: "💰" }
    ];

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
                                    NCDB's Development Banking Unit facilitates access to resources for cooperative societies and their members, with the primary aim of strengthening livelihoods and productive capacity. We go beyond traditional credit to implement joint development initiatives.
                                </p>
                                <p className="text-blue-700 text-base md:text-lg leading-relaxed">
                                    Our work supports infrastructure development, technology adoption, and institutional strengthening within cooperative societies. Several NCDB pilot initiatives serve as learning models for wider cooperative development across the region.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl md:rounded-2xl p-6 md:p-8">
                                <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-6">Strategic Focus Areas</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Strengthening cooperative capital base",
                                        "Enhancing productive capacity",
                                        "Supporting livelihood diversification",
                                        "Building cooperative infrastructure",
                                        "Promoting technology adoption"
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
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8 text-center">Key Development Programmes</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {developmentPrograms.slice(0, 3).map((program) => (
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

            {activeTab === 'approach' && (
                <div className="space-y-8 md:space-y-12">
                    <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Our Development Approach</h2>

                        <div className="mb-8 md:mb-12">
                            <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4 md:mb-6">Guiding Principles</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                {approachPoints.map((point, index) => (
                                    <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-xl md:rounded-2xl p-6 md:p-8 border border-blue-100">
                                        <div className="flex items-start">
                                            <div className="flex-shrink-0 h-8 w-8 md:h-10 md:w-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold mr-4">
                                                {index + 1}
                                            </div>
                                            <p className="text-blue-700 text-base md:text-lg">{point}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-800 to-indigo-800 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-white">
                            <div className="flex flex-col md:flex-row items-center justify-between">
                                <div className="mb-6 md:mb-0 md:mr-8">
                                    <h3 className="text-lg md:text-2xl font-bold mb-4">Beyond Traditional Banking</h3>
                                    <p className="text-blue-100 text-base md:text-lg">
                                        Our development banking approach integrates financial services with technical support, capacity building, and market linkages to create holistic solutions for cooperative development.
                                    </p>
                                </div>
                                <button className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
                                    Explore Partnership Opportunities
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'programs' && (
                <div className="space-y-8 md:space-y-12">
                    <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Key Development Programmes</h2>

                        <div className="space-y-6 md:space-y-8">
                            {developmentPrograms.map((program) => (
                                <div key={program.id} className="bg-gradient-to-r from-blue-50 to-white rounded-xl md:rounded-2xl p-6 md:p-8 border border-blue-100 hover:shadow-lg transition-all duration-300">
                                    <div className="flex flex-col md:flex-row md:items-start">
                                        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                                            <div className="h-16 w-16 md:h-20 md:w-20 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                                                {program.icon}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg md:text-2xl font-bold text-blue-900 mb-3">{program.name}</h3>
                                            <p className="text-blue-700 text-sm md:text-base mb-4 md:mb-6">{program.description}</p>
                                            <div className="bg-white/80 rounded-xl p-4 md:p-6">
                                                <h4 className="font-semibold text-blue-900 mb-3 md:mb-4">Key Components:</h4>
                                                <div className="flex flex-wrap gap-3 md:gap-4">
                                                    {program.features.map((feature, index) => (
                                                        <div key={index} className="flex items-center">
                                                            <div className="h-2 w-2 rounded-full bg-blue-500 mr-2 md:mr-3"></div>
                                                            <span className="text-blue-700 text-sm md:text-base">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'initiatives' && (
                <div className="space-y-8 md:space-y-12">
                    <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Pilot Initiatives & Learning Models</h2>

                        <p className="text-blue-600 text-base md:text-lg mb-8 md:mb-12 max-w-3xl">
                            Our pilot initiatives serve as learning models for wider cooperative development, testing innovative approaches before scaling up successful models.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {pilotInitiatives.map((initiative) => (
                                <div key={initiative.id} className="bg-gradient-to-br from-white to-blue-50 rounded-xl md:rounded-2xl shadow-lg border border-blue-100 p-6 md:p-8 hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-center justify-between mb-4 md:mb-6">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${initiative.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                                            {initiative.status}
                                        </span>
                                        <span className="text-blue-600 text-xs md:text-sm">{initiative.location}</span>
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">{initiative.name}</h3>
                                    <p className="text-blue-600 text-sm md:text-base mb-4 md:mb-6">{initiative.focus}</p>
                                    <div className="mb-4 md:mb-6">
                                        <h4 className="font-semibold text-blue-900 mb-1 md:mb-2 text-sm md:text-base">Impact:</h4>
                                        <p className="text-blue-700 text-sm md:text-base">{initiative.impact}</p>
                                    </div>
                                    <button className="text-blue-700 hover:text-blue-900 font-semibold flex items-center group text-sm md:text-base">
                                        Learn More
                                        <ArrowRightIcon className="h-4 w-4 md:h-5 md:w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </DepartmentLayout>
    );
};

export default DevelopmentBankingComponent;