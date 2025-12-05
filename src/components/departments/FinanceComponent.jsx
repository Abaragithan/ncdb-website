import { useState } from 'react';
import {
    BanknotesIcon,
    ChartBarIcon,
    UserGroupIcon,
    DocumentTextIcon,
    ShieldCheckIcon,
    BuildingOfficeIcon,
    PhoneIcon,
    CheckCircleIcon,
    CurrencyDollarIcon,
    DocumentChartBarIcon,
    BriefcaseIcon
} from '@heroicons/react/24/outline';
import DepartmentLayout from '../layout/DepartmentLayout';
import ContactInfo from '../common/ContactInfo';

const FinanceComponent = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const heroConfig = {
        title: "Financial Stewardship for",
        description: "Driving NCDB's financial stability, growth, and long-term sustainability through transparency, innovation, and fiscal responsibility.",
        imageSrc: "/images/finance.jpg",
        badgeIcon: BanknotesIcon,
        badgeText: "Financial Services Department",
        highlightText: "Sustainable Growth"
    };

    const metrics = [
        { id: 1, metric: "₹500+ Cr", label: "Assets Under Management", icon: "💼" },
        { id: 2, metric: "1200+", label: "Societies Served", icon: "🏦" },
        { id: 3, metric: "99.8%", label: "Audit Compliance", icon: "✅" },
        { id: 4, metric: "25+", label: "Years of Excellence", icon: "⭐" }
    ];

    const missionConfig = {
        mission: "To be the most trusted financial partner for cooperative societies and communities, ensuring sustainable growth through transparency, innovation, and fiscal responsibility.",
        icon: BanknotesIcon,
        title: "Our Financial Mission"
    };

    const tabs = [
        { id: 'overview', label: 'Overview', shortLabel: 'Overview', icon: <BanknotesIcon className="h-5 w-5" /> },
        { id: 'responsibilities', label: 'Responsibilities', shortLabel: 'Responsibilities', icon: <BriefcaseIcon className="h-5 w-5" /> },
        { id: 'team', label: 'Our Team', shortLabel: 'Team', icon: <UserGroupIcon className="h-5 w-5" /> },
        { id: 'reports', label: 'Reports', shortLabel: 'Reports', icon: <DocumentTextIcon className="h-5 w-5" /> },
        { id: 'policies', label: 'Policies', shortLabel: 'Policies', icon: <ShieldCheckIcon className="h-5 w-5" /> },
        { id: 'contact', label: 'Contact', shortLabel: 'Contact', icon: <PhoneIcon className="h-5 w-5" /> }
    ];

    const teamMembers = [
        {
            id: 1,
            name: "Alex Johnson",
            position: "Finance Director",
            department: "Finance Department",
            experience: "15+ years in banking and finance",
            education: "MBA in Finance, CPA",
            bio: "Leads financial strategy and oversees all finance operations.",
            expertise: ["Strategic Planning", "Regulatory Compliance", "Risk Management"]
        },
        {
            id: 2,
            name: "Maria Rodriguez",
            position: "Financial Controller",
            department: "Finance Department",
            experience: "12 years in financial management",
            education: "Masters in Accounting, CMA",
            bio: "Manages financial reporting, budgeting, and compliance.",
            expertise: ["Financial Reporting", "Budgeting", "Compliance"]
        },
        {
            id: 3,
            name: "David Chen",
            position: "Treasury Manager",
            department: "Finance Department",
            experience: "10 years in treasury operations",
            education: "BS in Finance, CFA Level III",
            bio: "Oversees liquidity management, investments, and fund allocation.",
            expertise: ["Treasury Management", "Investments", "Liquidity"]
        },
        {
            id: 4,
            name: "Sarah Williams",
            position: "Financial Analyst",
            department: "Finance Department",
            experience: "8 years in financial analysis",
            education: "MS in Financial Engineering",
            bio: "Provides insights and analyses for strategic decision-making.",
            expertise: ["Financial Analysis", "Risk Assessment", "Cost Optimization"]
        }
    ];

    const reports = [
        { id: 1, title: "Annual Financial Report 2023", type: "PDF", size: "4.2 MB", date: "March 15, 2024" },
        { id: 2, title: "Q1 Financial Statements 2024", type: "PDF", size: "2.1 MB", date: "April 30, 2024" },
        { id: 3, title: "Investor Presentation Q1 2024", type: "PPT", size: "5.7 MB", date: "May 10, 2024" },
        { id: 4, title: "Regulatory Compliance Report", type: "PDF", size: "3.8 MB", date: "February 28, 2024" }
    ];

    const policies = [
        { id: 1, title: "Financial Governance Policy", category: "Governance", lastUpdated: "Jan 2024", icon: <ShieldCheckIcon className="h-6 w-6" /> },
        { id: 2, title: "Risk Management Framework", category: "Risk", lastUpdated: "Mar 2024", icon: <ChartBarIcon className="h-6 w-6" /> },
        { id: 3, title: "Investment Policy Statement", category: "Investment", lastUpdated: "Feb 2024", icon: <CurrencyDollarIcon className="h-6 w-6" /> },
        { id: 4, title: "Compliance & Ethics Policy", category: "Compliance", lastUpdated: "Dec 2023", icon: <DocumentChartBarIcon className="h-6 w-6" /> }
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
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">About the Finance Department</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div>
                                <p className="text-blue-700 text-base md:text-lg mb-6 leading-relaxed">
                                    The Finance Department at NCDB plays a critical role in driving the bank's financial stability, growth, and long-term sustainability. It is responsible for managing the bank's resources, ensuring regulatory compliance, maintaining transparency, and providing accurate and timely financial information.
                                </p>
                                <p className="text-blue-700 text-base md:text-lg leading-relaxed">
                                    Our Finance team operates as the backbone of NCDB, overseeing budgeting, forecasting, financial reporting, treasury management, investment decisions, and cost control.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl md:rounded-2xl p-6 md:p-8">
                                <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-6">Core Principles</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Transparency in all financial operations",
                                        "Prudent risk management and compliance",
                                        "Strategic resource allocation",
                                        "Sustainable financial growth",
                                        "Stakeholder value creation"
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
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8 text-center">Key Financial Functions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl md:rounded-2xl shadow-lg border border-blue-100 p-6 md:p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                                <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 mb-4 md:mb-6">
                                    <CurrencyDollarIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">Treasury Management</h3>
                                <p className="text-blue-600 text-sm md:text-base">Optimizing liquidity, investments, and fund allocation for maximum financial performance.</p>
                            </div>

                            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl md:rounded-2xl shadow-lg border border-indigo-100 p-6 md:p-8 hover:shadow-xl hover:border-indigo-300 transition-all duration-300">
                                <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 mb-4 md:mb-6">
                                    <ChartBarIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">Financial Reporting</h3>
                                <p className="text-blue-600 text-sm md:text-base">Accurate and transparent financial statements and compliance reporting.</p>
                            </div>

                            <div className="bg-gradient-to-br from-cyan-50 to-white rounded-xl md:rounded-2xl shadow-lg border border-cyan-100 p-6 md:p-8 hover:shadow-xl hover:border-cyan-300 transition-all duration-300">
                                <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-700 mb-4 md:mb-6">
                                    <ShieldCheckIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">Risk & Compliance</h3>
                                <p className="text-blue-600 text-sm md:text-base">Ensuring adherence to all financial regulations and risk management protocols.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'team' && (
                <div className="space-y-8 md:space-y-12">
                    <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Meet Our Finance Team</h2>
                        <p className="text-blue-600 text-base md:text-lg mb-8 md:mb-12 max-w-3xl">
                            Our experienced finance professionals bring together diverse expertise in banking, accounting, treasury management, and financial analysis to drive NCDB's success.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                            {teamMembers.map((member) => (
                                <div key={member.id} className="bg-gradient-to-br from-white to-blue-50 rounded-xl md:rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                                    <div className="h-32 md:h-48 bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center">
                                        <div className="h-20 w-20 md:h-32 md:w-32 rounded-full bg-white/20 flex items-center justify-center text-white text-2xl md:text-4xl font-bold">
                                            {member.name.charAt(0)}
                                        </div>
                                    </div>
                                    <div className="p-4 md:p-8">
                                        <h3 className="text-lg md:text-xl font-bold text-blue-900">{member.name}</h3>
                                        <p className="text-blue-600 font-semibold text-sm md:text-base mb-1 md:mb-2">{member.position}</p>
                                        <div className="flex items-center text-blue-500 text-xs md:text-sm mb-3 md:mb-4">
                                            <BuildingOfficeIcon className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                                            <span>{member.department}</span>
                                        </div>
                                        <div className="mb-4 md:mb-6">
                                            <p className="text-blue-700 text-xs md:text-sm mb-1 md:mb-2"><span className="font-semibold">Experience:</span> {member.experience}</p>
                                            <p className="text-blue-700 text-xs md:text-sm"><span className="font-semibold">Education:</span> {member.education}</p>
                                        </div>
                                        <div className="mb-4 md:mb-6">
                                            <h4 className="font-semibold text-blue-900 mb-1 md:mb-2 text-sm md:text-base">Areas of Expertise:</h4>
                                            <div className="flex flex-wrap gap-1 md:gap-2">
                                                {member.expertise.map((exp, idx) => (
                                                    <span key={idx} className="px-2 py-0.5 md:px-3 md:py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                                                        {exp}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-blue-600 text-xs md:text-sm">{member.bio}</p>
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
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Contact the Finance Department</h2>
                        <p className="text-blue-600 text-base md:text-lg mb-8 md:mb-12 max-w-3xl">
                            Get in touch with our Finance team for inquiries, support, or additional information. We're here to help with all your financial matters.
                        </p>

                        <ContactInfo contactInfo={contactInfo} />

                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-white">
                            <div className="text-center">
                                <h3 className="text-lg md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6">Have a Specific Inquiry?</h3>
                                <p className="text-blue-100 text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
                                    Fill out our contact form and a member of our Finance team will get back to you within 24-48 hours with detailed assistance.
                                </p>
                                <button className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-6 md:py-4 md:px-10 rounded-lg text-base md:text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
                                    Send a Message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </DepartmentLayout>
    );
};

export default FinanceComponent;