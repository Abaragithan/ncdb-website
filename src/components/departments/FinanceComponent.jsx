import { useState } from 'react';
import {
    BanknotesIcon,
    ChartBarIcon,
    UserGroupIcon,
    DocumentTextIcon,
    ShieldCheckIcon,
    BuildingOfficeIcon,
    CheckCircleIcon,
    CurrencyDollarIcon,
    DocumentChartBarIcon,
    BriefcaseIcon,
    ClockIcon
} from '@heroicons/react/24/outline';
import DepartmentLayout from '../layout/DepartmentLayout';
import ContactInfo from '../common/ContactInfo';

const FinanceComponent = () => {
    const [activeTab, setActiveTab] = useState('overview');

    // Content from document
    const heroConfig = {
        title: "Stewarding Resources for",
        description: "Ensuring responsible resource management in service of cooperative and community goals.",
        imageSrc: "/images/finance.jpg",
        badgeIcon: BanknotesIcon,
        badgeText: "Finance Division",
        highlightText: "Collective Well‑Being",
        slogan: "Stewarding Resources for Collective Well‑Being"
    };

    const missionConfig = {
        mission: "The Finance Division safeguards the responsible use of NCDB's resources while supporting cooperative societies to strengthen their own financial practices. Its role extends beyond accounting to ensuring transparency, sustainability, and alignment with NCDB's mission, values, and collective responsibilities.",
        icon: BanknotesIcon,
        title: "Our Financial Mission"
    };

    const tabs = [
        { id: 'overview', label: 'Overview', shortLabel: 'Overview', icon: <BanknotesIcon className="h-5 w-5" /> },
        { id: 'principles', label: 'Core Principles', shortLabel: 'Principles', icon: <ShieldCheckIcon className="h-5 w-5" /> },
        { id: 'functions', label: 'Key Functions', shortLabel: 'Functions', icon: <BriefcaseIcon className="h-5 w-5" /> },
        { id: 'contact', label: 'Contact', shortLabel: 'Contact', icon: <UserGroupIcon className="h-5 w-5" /> }
    ];

    // Core Principles from document
    const corePrinciples = [
        {
            id: 1,
            principle: "Accountability to members and communities",
            description: "Ensuring transparent financial practices and reporting to all stakeholders",
            icon: <UserGroupIcon className="h-8 w-8" />
        },
        {
            id: 2,
            principle: "Transparency and ethical practice",
            description: "Maintaining open, honest, and ethical financial operations",
            icon: <ShieldCheckIcon className="h-8 w-8" />
        },
        {
            id: 3,
            principle: "Long-term sustainability",
            description: "Focusing on financial practices that ensure long-term viability",
            icon: <ClockIcon className="h-8 w-8" />
        },
        {
            id: 4,
            principle: "Supportive guidance to cooperatives",
            description: "Providing financial mentorship and support to cooperative societies",
            icon: <BuildingOfficeIcon className="h-8 w-8" />
        }
    ];

    // Key Financial Functions from document
    const financialFunctions = [
        {
            id: 1,
            name: "Financial Reporting & Compliance",
            description: "Ensuring accurate financial reporting and regulatory compliance",
            details: ["Financial statements", "Regulatory filings", "Audit coordination"]
        },
        {
            id: 2,
            name: "Budgeting & Resource Planning",
            description: "Strategic planning and allocation of financial resources",
            details: ["Annual budgeting", "Resource allocation", "Financial forecasting"]
        },
        {
            id: 3,
            name: "Cooperative Financial Guidance & Mentoring",
            description: "Supporting cooperatives in strengthening their financial practices",
            details: ["Financial training", "Advisory services", "Best practices sharing"]
        },
        {
            id: 4,
            name: "Cost Monitoring for Development Programmes",
            description: "Tracking and managing costs for development initiatives",
            details: ["Cost analysis", "Expense tracking", "Program efficiency assessment"]
        },
        {
            id: 5,
            name: "Strengthening Financial Systems within Societies",
            description: "Building robust financial systems within cooperative societies",
            details: ["System implementation", "Process improvement", "Internal controls"]
        }
    ];

    const metrics = [
        { id: 1, metric: "LKR500+ Cr", label: "Assets Managed", icon: "💼" },
        { id: 2, metric: "100%", label: "Audit Compliance", icon: "✅" },
        { id: 3, metric: "1200+", label: "Societies Supported", icon: "🏦" },
        { id: 4, metric: "25+", label: "Years of Excellence", icon: "⭐" }
    ];

    const contactInfo = {
        phone: "+94 212 232 673",
        email: "finance@ncdb.coop",
        address: "Elders Home Complex, Kandy Road, Kaithady, Jaffna 40000",
        hours: "Monday - Friday: 9:00 AM - 5:00 PM",
        inquiryEmail: "inquiries.finance@ncdb.coop"
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
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Finance Division Overview</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div>
                                <p className="text-blue-700 text-base md:text-lg mb-6 leading-relaxed">
                                    The Finance Division at NCDB safeguards the responsible use of resources while supporting cooperative societies to strengthen their own financial practices. Our role extends beyond traditional accounting to ensure transparency, sustainability, and alignment with NCDB's mission and values.
                                </p>
                                <p className="text-blue-700 text-base md:text-lg leading-relaxed">
                                    We serve as stewards of collective resources, ensuring that financial management supports the well-being of cooperative societies and their members while maintaining the highest standards of accountability and ethical practice.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl md:rounded-2xl p-6 md:p-8">
                                <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-6">Beyond Traditional Finance</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Mission-aligned financial management",
                                        "Community-centered resource allocation",
                                        "Sustainable financial practices",
                                        "Cooperative capacity building",
                                        "Ethical investment strategies"
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
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8 text-center">Our Financial Stewardship</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl md:rounded-2xl shadow-lg border border-blue-100 p-6 md:p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                                <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 mb-4 md:mb-6">
                                    <ShieldCheckIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">Resource Safeguarding</h3>
                                <p className="text-blue-600 text-sm md:text-base">Protecting and responsibly managing collective resources for community benefit.</p>
                            </div>

                            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl md:rounded-2xl shadow-lg border border-indigo-100 p-6 md:p-8 hover:shadow-xl hover:border-indigo-300 transition-all duration-300">
                                <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 mb-4 md:mb-6">
                                    <BuildingOfficeIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">Cooperative Support</h3>
                                <p className="text-blue-600 text-sm md:text-base">Strengthening financial practices within cooperative societies through guidance and mentoring.</p>
                            </div>

                            <div className="bg-gradient-to-br from-cyan-50 to-white rounded-xl md:rounded-2xl shadow-lg border border-cyan-100 p-6 md:p-8 hover:shadow-xl hover:border-cyan-300 transition-all duration-300">
                                <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-700 mb-4 md:mb-6">
                                    <ChartBarIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">Sustainable Growth</h3>
                                <p className="text-blue-600 text-sm md:text-base">Ensuring financial practices support long-term sustainability and collective well-being.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'principles' && (
                <div className="space-y-8 md:space-y-12">
                    <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Core Financial Principles</h2>
                        <p className="text-blue-600 text-base md:text-lg mb-8 md:mb-12 max-w-3xl">
                            Our financial operations are guided by principles that prioritize accountability, transparency, sustainability, and community support over profit maximization.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            {corePrinciples.map((principle) => (
                                <div key={principle.id} className="bg-gradient-to-br from-white to-blue-50 rounded-xl md:rounded-2xl shadow-lg border border-blue-100 p-6 md:p-8 hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-center space-x-4 mb-4 md:mb-6">
                                        <div className="flex-shrink-0">
                                            <div className="h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white">
                                                {principle.icon}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-bold text-blue-900">{principle.principle}</h3>
                                        </div>
                                    </div>
                                    <p className="text-blue-700 text-sm md:text-base">{principle.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-white">
                            <div className="flex flex-col md:flex-row items-center justify-between">
                                <div className="mb-6 md:mb-0 md:mr-8">
                                    <h3 className="text-lg md:text-2xl font-bold mb-4">Ethical Financial Stewardship</h3>
                                    <p className="text-emerald-100 text-base md:text-lg">
                                        Our financial practices are designed not just for compliance, but for creating value that benefits cooperative societies, their members, and the broader community we serve.
                                    </p>
                                </div>
                                <button className="bg-white text-emerald-700 hover:bg-emerald-50 font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
                                    View Financial Reports
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'functions' && (
                <div className="space-y-8 md:space-y-12">
                    <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Key Financial Functions</h2>

                        <div className="space-y-6 md:space-y-8">
                            {financialFunctions.map((func) => (
                                <div key={func.id} className="bg-gradient-to-r from-blue-50 to-white rounded-xl md:rounded-2xl p-6 md:p-8 border border-blue-100 hover:shadow-lg transition-all duration-300">
                                    <div className="flex flex-col md:flex-row md:items-start">
                                        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                                            <div className="h-16 w-16 md:h-20 md:w-20 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                                                <BanknotesIcon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg md:text-2xl font-bold text-blue-900 mb-3">{func.name}</h3>
                                            <p className="text-blue-700 text-sm md:text-base mb-4 md:mb-6">{func.description}</p>
                                            <div className="bg-white/80 rounded-xl p-4 md:p-6">
                                                <h4 className="font-semibold text-blue-900 mb-3 md:mb-4">Key Activities:</h4>
                                                <div className="flex flex-wrap gap-3 md:gap-4">
                                                    {func.details.map((detail, index) => (
                                                        <div key={index} className="flex items-center">
                                                            <div className="h-2 w-2 rounded-full bg-blue-500 mr-2 md:mr-3"></div>
                                                            <span className="text-blue-700 text-sm md:text-base">{detail}</span>
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

            {activeTab === 'contact' && (
                <div className="space-y-8 md:space-y-12">
                    <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Contact the Finance Division</h2>
                        <p className="text-blue-600 text-base md:text-lg mb-8 md:mb-12 max-w-3xl">
                            Get in touch with our Finance team for inquiries about financial reporting, cooperative financial guidance, budget planning, or financial systems support. We're here to help strengthen financial practices in cooperative societies.
                        </p>

                        <ContactInfo contactInfo={contactInfo} />
                    </div>
                </div>
            )}
        </DepartmentLayout>
    );
};

export default FinanceComponent;