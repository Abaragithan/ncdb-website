import { useState } from 'react';
import {
    BeakerIcon,
    UserGroupIcon,
    DocumentTextIcon,
    AcademicCapIcon,
    ArrowRightIcon,
    CheckCircleIcon,
    ChartBarIcon,
    BuildingOfficeIcon,
    CalendarIcon
} from '@heroicons/react/24/outline';
import DepartmentLayout from '../layout/DepartmentLayout';

const ResearchComponent = () => {
    const [activeTab, setActiveTab] = useState('overview');

    // Content from document
    const heroConfig = {
        title: "Understanding People's Lives to Strengthen",
        description: "Grounded research supporting cooperative solutions rooted in real community needs and lived experiences.",
        imageSrc: "/images/research3.jpg",
        badgeIcon: AcademicCapIcon,
        badgeText: "Research Unit",
        highlightText: "Cooperative Action",
        slogan: "Understanding People's Lives to Strengthen Cooperative Action"
    };

    const missionConfig = {
        mission: "The Research Unit works closely with communities, cooperative societies, and national and international knowledge partners to ensure NCDB's interventions remain relevant and responsive. Its focus is on understanding people's livelihoods, daily realities, and collective challenges, while paying close attention to social, economic, and environmental changes shaping life.",
        icon: BeakerIcon,
        title: "Our Research Focus"
    };

    const tabs = [
        { id: 'overview', label: 'Overview', shortLabel: 'Overview', icon: <ChartBarIcon className="h-5 w-5" /> },
        { id: 'focus-areas', label: 'Focus Areas', shortLabel: 'Focus', icon: <BeakerIcon className="h-5 w-5" /> },
        { id: 'projects', label: 'Research Projects', shortLabel: 'Projects', icon: <DocumentTextIcon className="h-5 w-5" /> },
        { id: 'partnerships', label: 'Partnerships', shortLabel: 'Partners', icon: <UserGroupIcon className="h-5 w-5" /> }
    ];

    // Focus Areas from document
    const focusAreas = [
        {
            id: 1,
            name: "Livelihoods and Community Studies",
            description: "Understanding daily realities and collective challenges of communities",
            icon: <UserGroupIcon className="h-8 w-8 text-blue-600" />
        },
        {
            id: 2,
            name: "Cooperative Performance & Governance Research",
            description: "Research on effective governance structures and performance metrics",
            icon: <BuildingOfficeIcon className="h-8 w-8 text-blue-600" />
        },
        {
            id: 3,
            name: "Food Security & Rural Resilience",
            description: "Studies on sustainable food systems and community resilience",
            icon: <BeakerIcon className="h-8 w-8 text-blue-600" />
        },
        {
            id: 4,
            name: "Social & Economic Impact Assessment",
            description: "Measuring the impact of cooperative interventions",
            icon: <ChartBarIcon className="h-8 w-8 text-blue-600" />
        },
        {
            id: 5,
            name: "Policy-Oriented & Action Research",
            description: "Research informing policy and practical interventions",
            icon: <DocumentTextIcon className="h-8 w-8 text-blue-600" />
        },
        {
            id: 6,
            name: "Knowledge Sharing & Learning",
            description: "Disseminating research findings and building capacity",
            icon: <AcademicCapIcon className="h-8 w-8 text-blue-600" />
        }
    ];

    const researchProjects = [
        {
            id: 1,
            title: "Livelihood Assessment in Northern Communities",
            description: "Comprehensive study of income sources, challenges, and opportunities in cooperative societies",
            status: "Ongoing",
            duration: "2024-2025",
            focusArea: "Livelihoods and Community Studies"
        },
        {
            id: 2,
            title: "Cooperative Governance Effectiveness",
            description: "Analysis of governance models and their impact on cooperative performance",
            status: "Completed",
            duration: "2023-2024",
            focusArea: "Cooperative Performance & Governance"
        },
        {
            id: 3,
            title: "Climate Resilience in Agricultural Cooperatives",
            description: "Research on adaptive strategies for climate change impacts",
            status: "Ongoing",
            duration: "2024-2026",
            focusArea: "Food Security & Rural Resilience"
        }
    ];

    const partners = [
        { id: 1, name: "University of Jaffna", type: "Academic", collaboration: "Joint research projects" },
        { id: 2, name: "Cooperative Development Authority", type: "Government", collaboration: "Policy research" },
        { id: 3, name: "International Cooperative Alliance", type: "International", collaboration: "Knowledge exchange" },
        { id: 4, name: "Local Community Organizations", type: "Community", collaboration: "Participatory research" }
    ];

    return (
        <DepartmentLayout
            heroConfig={heroConfig}
            missionConfig={missionConfig}
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
        >
            {activeTab === 'overview' && (
                <div className="space-y-8 md:space-y-12">
                    <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Research Unit Overview</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div>
                                <p className="text-blue-700 text-base md:text-lg mb-6 leading-relaxed">
                                    The Research Unit at NCDB is dedicated to understanding people's lives, livelihoods, and daily realities to strengthen cooperative action. Our work ensures that NCDB's interventions remain relevant, responsive, and grounded in real community needs.
                                </p>
                                <p className="text-blue-700 text-base md:text-lg leading-relaxed">
                                    We collaborate closely with communities, cooperative societies, and knowledge partners at national and international levels, focusing on the social, economic, and environmental changes that shape life in cooperative communities.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl md:rounded-2xl p-6 md:p-8">
                                <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-6">Our Approach</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Community-centered research methodology",
                                        "Participatory action research approaches",
                                        "Mixed-methods data collection",
                                        "Long-term longitudinal studies",
                                        "Ethical and inclusive research practices"
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
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8 text-center">Our Research Philosophy</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl md:rounded-2xl shadow-lg border border-blue-100 p-6 md:p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                                <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 mb-4 md:mb-6">
                                    <UserGroupIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">People-Centered</h3>
                                <p className="text-blue-600 text-sm md:text-base">Research rooted in real community needs and lived experiences</p>
                            </div>

                            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl md:rounded-2xl shadow-lg border border-indigo-100 p-6 md:p-8 hover:shadow-xl hover:border-indigo-300 transition-all duration-300">
                                <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 mb-4 md:mb-6">
                                    <BuildingOfficeIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">Cooperative-Focused</h3>
                                <p className="text-blue-600 text-sm md:text-base">Strengthening cooperative action through evidence-based insights</p>
                            </div>

                            <div className="bg-gradient-to-br from-cyan-50 to-white rounded-xl md:rounded-2xl shadow-lg border border-cyan-100 p-6 md:p-8 hover:shadow-xl hover:border-cyan-300 transition-all duration-300">
                                <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-700 mb-4 md:mb-6">
                                    <AcademicCapIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">Solution-Oriented</h3>
                                <p className="text-blue-600 text-sm md:text-base">Research that leads to practical, implementable solutions</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'focus-areas' && (
                <div className="space-y-8 md:space-y-12">
                    <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Research Focus Areas</h2>
                        <p className="text-blue-600 text-base md:text-lg mb-8 md:mb-12 max-w-3xl">
                            Our research is organized around six key focus areas that address the most pressing challenges and opportunities in cooperative development.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {focusAreas.map((area) => (
                                <div key={area.id} className="bg-gradient-to-br from-white to-blue-50 rounded-xl md:rounded-2xl shadow-lg border border-blue-100 p-6 md:p-8 hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-xl bg-blue-50 mb-4 md:mb-6">
                                        {area.icon}
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">{area.name}</h3>
                                    <p className="text-blue-600 text-sm md:text-base mb-4 md:mb-6">{area.description}</p>
                                    <button className="text-blue-700 hover:text-blue-900 font-semibold flex items-center group text-sm md:text-base">
                                        Explore Research
                                        <ArrowRightIcon className="h-4 w-4 md:h-5 md:w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'projects' && (
                <div className="space-y-8 md:space-y-12">
                    <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Current Research Projects</h2>
                        <p className="text-blue-600 text-base md:text-lg mb-6 md:mb-8 max-w-3xl">
                            Our ongoing research initiatives are designed to generate actionable insights for cooperative development.
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                            {researchProjects.map((project) => (
                                <div key={project.id} className="bg-gradient-to-br from-white to-blue-50 rounded-xl md:rounded-2xl shadow-lg border border-blue-100 p-6 md:p-8 hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-center justify-between mb-4 md:mb-6">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                                            {project.status}
                                        </span>
                                        <span className="text-blue-600 text-xs md:text-sm">{project.duration}</span>
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">{project.title}</h3>
                                    <p className="text-blue-600 text-sm md:text-base mb-4 md:mb-6">{project.description}</p>
                                    <div className="mb-4 md:mb-6">
                                        <span className="px-2 py-0.5 md:px-3 md:py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                                            {project.focusArea}
                                        </span>
                                    </div>
                                    <button className="text-blue-700 hover:text-blue-900 font-semibold flex items-center group text-sm md:text-base">
                                        View Research Details
                                        <ArrowRightIcon className="h-4 w-4 md:h-5 md:w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'partnerships' && (
                <div className="space-y-8 md:space-y-12">
                    <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Knowledge Partnerships</h2>
                        <p className="text-blue-600 text-base md:text-lg mb-6 md:mb-8 max-w-3xl">
                            We collaborate with a diverse network of knowledge partners to ensure our research is robust, relevant, and impactful.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            {partners.map((partner) => (
                                <div key={partner.id} className="bg-gradient-to-br from-white to-blue-50 rounded-xl md:rounded-2xl shadow-lg border border-blue-100 p-6 md:p-8 hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-center space-x-4 md:space-x-6 mb-4 md:mb-6">
                                        <div className="flex-shrink-0">
                                            <div className="h-12 w-12 md:h-16 md:w-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg md:text-xl">
                                                {partner.name.charAt(0)}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-bold text-blue-900">{partner.name}</h3>
                                            <div className="flex items-center text-blue-600 text-xs md:text-sm mt-1">
                                                <span className="px-2 py-0.5 bg-blue-100 rounded-full">{partner.type}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-blue-700 text-sm md:text-base mb-4 md:mb-6">
                                        <span className="font-semibold">Collaboration:</span> {partner.collaboration}
                                    </p>
                                    <button className="text-blue-700 hover:text-blue-900 font-semibold flex items-center group text-sm md:text-base">
                                        View Partnership Details
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

export default ResearchComponent;