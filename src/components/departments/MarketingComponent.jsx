import { useState } from 'react';
import {
    ShoppingCartIcon,
    CurrencyDollarIcon,
    ShieldCheckIcon,
    ChartBarIcon,
    CheckCircleIcon,
    BuildingStorefrontIcon,
    ArrowTrendingUpIcon,
    UserGroupIcon
} from '@heroicons/react/24/outline';
import DepartmentLayout from '../layout/DepartmentLayout';
import ContactInfo from '../common/ContactInfo';

const MarketingComponent = () => {
    const [activeTab, setActiveTab] = useState('overview');

    // Content from document
    const heroConfig = {
        title: "Fair Markets Rooted in",
        description: "Strengthening cooperative markets that serve both producers and communities fairly.",
        imageSrc: "/images/marketing.jpg",
        badgeIcon: ChartBarIcon,
        badgeText: "Marketing Division",
        highlightText: "Cooperation",
        slogan: "Fair Markets Rooted in Cooperation"
    };

    const missionConfig = {
        mission: "The Marketing Division works to strengthen cooperative market networks that ensure fair returns to producers and reliable access for consumers. Unlike conventional marketing, its approach is guided by food security, trust, and long-term relationships, supporting cooperative brands and community-based market systems across the Country.",
        icon: ChartBarIcon,
        title: "Our Marketing Mission"
    };

    const tabs = [
        { id: 'overview', label: 'Overview', shortLabel: 'Overview', icon: <ChartBarIcon className="h-5 w-5" /> },
        { id: 'principles', label: 'Core Principles', shortLabel: 'Principles', icon: <ShieldCheckIcon className="h-5 w-5" /> },
        { id: 'functions', label: 'Key Functions', shortLabel: 'Functions', icon: <ShoppingCartIcon className="h-5 w-5" /> },
        { id: 'contact', label: 'Contact', shortLabel: 'Contact', icon: <UserGroupIcon className="h-5 w-5" /> }
    ];

    // Core Principles from document
    const corePrinciples = [
        {
            id: 1,
            principle: "Fair pricing over profit maximisation",
            description: "Ensuring producers receive fair compensation while keeping products affordable for consumers",
            icon: <CurrencyDollarIcon className="h-8 w-8" />
        },
        {
            id: 2,
            principle: "Producer and consumer protection",
            description: "Safeguarding the interests of both producers and consumers in market transactions",
            icon: <ShieldCheckIcon className="h-8 w-8" />
        },
        {
            id: 3,
            principle: "Transparency and trust in trade",
            description: "Building long-term relationships based on honesty and clear communication",
            icon: <ArrowTrendingUpIcon className="h-8 w-8" />
        },
        {
            id: 4,
            principle: "Local market strengthening",
            description: "Prioritizing and developing local market systems that benefit communities",
            icon: <BuildingStorefrontIcon className="h-8 w-8" />
        }
    ];

    // Key Marketing Functions from document
    const marketingFunctions = [
        {
            id: 1,
            name: "Cooperative Product Marketing",
            description: "Marketing and promoting products from cooperative societies",
            activities: ["Brand development", "Market promotion", "Sales campaigns"]
        },
        {
            id: 2,
            name: "Collective Procurement & Purchasing",
            description: "Bulk purchasing to benefit from economies of scale",
            activities: ["Supplier negotiation", "Quality assurance", "Logistics management"]
        },
        {
            id: 3,
            name: "Sales Coordination & Distribution",
            description: "Managing sales channels and distribution networks",
            activities: ["Channel management", "Inventory control", "Delivery coordination"]
        },
        {
            id: 4,
            name: "Brand Development for Cooperative Products",
            description: "Building strong brands for cooperative products",
            activities: ["Brand strategy", "Packaging design", "Market positioning"]
        },
        {
            id: 5,
            name: "Market Research & Feedback Systems",
            description: "Understanding market needs and gathering feedback",
            activities: ["Consumer research", "Market analysis", "Feedback collection"]
        }
    ];

    const metrics = [
        { id: 1, metric: "200+", label: "Cooperative Products", icon: "📦" },
        { id: 2, metric: "50+", label: "Market Outlets", icon: "🏪" },
        { id: 3, metric: "1000+", label: "Producers Supported", icon: "👩‍🌾" },
        { id: 4, metric: "25%", label: "Price Advantage", icon: "💰" }
    ];

    const contactInfo = {
        phone: "+94 212 232 674",
        email: "marketing@ncdb.coop",
        address: "Elders Home Complex, Kandy Road, Kaithady, Jaffna 40000",
        hours: "Monday - Friday: 9:00 AM - 5:00 PM",
        inquiryEmail: "inquiries.marketing@ncdb.coop"
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
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Marketing Division Overview</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div>
                                <p className="text-blue-700 text-base md:text-lg mb-6 leading-relaxed">
                                    The Marketing Division at NCDB works to strengthen cooperative market networks that ensure fair returns to producers and reliable access for consumers. Our approach differs from conventional marketing by being guided by food security, trust, and long-term relationships.
                                </p>
                                <p className="text-blue-700 text-base md:text-lg leading-relaxed">
                                    We support cooperative brands and community-based market systems across the country, creating market opportunities that benefit both producers and communities while maintaining ethical and sustainable practices.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl md:rounded-2xl p-6 md:p-8">
                                <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-6">Our Unique Approach</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Community-centered market development",
                                        "Fair trade principles implementation",
                                        "Long-term relationship building",
                                        "Food security-focused marketing",
                                        "Cooperative brand development"
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
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8 text-center">Why Cooperative Marketing Matters</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl md:rounded-2xl shadow-lg border border-blue-100 p-6 md:p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                                <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 mb-4 md:mb-6">
                                    <CurrencyDollarIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">Fair Returns</h3>
                                <p className="text-blue-600 text-sm md:text-base">Ensuring producers receive fair prices for their products, not just minimum market rates.</p>
                            </div>

                            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl md:rounded-2xl shadow-lg border border-indigo-100 p-6 md:p-8 hover:shadow-xl hover:border-indigo-300 transition-all duration-300">
                                <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 mb-4 md:mb-6">
                                    <ShieldCheckIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">Consumer Protection</h3>
                                <p className="text-blue-600 text-sm md:text-base">Providing reliable access to quality products at fair prices for consumers.</p>
                            </div>

                            <div className="bg-gradient-to-br from-cyan-50 to-white rounded-xl md:rounded-2xl shadow-lg border border-cyan-100 p-6 md:p-8 hover:shadow-xl hover:border-cyan-300 transition-all duration-300">
                                <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-700 mb-4 md:mb-6">
                                    <BuildingStorefrontIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">Market Development</h3>
                                <p className="text-blue-600 text-sm md:text-base">Building sustainable market systems that benefit entire communities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'principles' && (
                <div className="space-y-8 md:space-y-12">
                    <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Core Principles of Cooperative Marketing</h2>
                        <p className="text-blue-600 text-base md:text-lg mb-8 md:mb-12 max-w-3xl">
                            Our marketing approach is guided by principles that prioritize people and communities over profits, ensuring sustainable and ethical market development.
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

                        <div className="mt-12 bg-gradient-to-r from-amber-600 to-orange-700 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-white">
                            <div className="flex flex-col md:flex-row items-center justify-between">
                                <div className="mb-6 md:mb-0 md:mr-8">
                                    <h3 className="text-lg md:text-2xl font-bold mb-4">Beyond Conventional Marketing</h3>
                                    <p className="text-amber-100 text-base md:text-lg">
                                        Unlike conventional marketing focused solely on profit maximization, our cooperative marketing approach balances economic viability with social responsibility, community benefit, and long-term sustainability.
                                    </p>
                                </div>
                                <button className="bg-white text-amber-700 hover:bg-amber-50 font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
                                    Learn About Our Approach
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'functions' && (
                <div className="space-y-8 md:space-y-12">
                    <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Key Marketing Functions</h2>

                        <div className="space-y-6 md:space-y-8">
                            {marketingFunctions.map((func) => (
                                <div key={func.id} className="bg-gradient-to-r from-blue-50 to-white rounded-xl md:rounded-2xl p-6 md:p-8 border border-blue-100 hover:shadow-lg transition-all duration-300">
                                    <div className="flex flex-col md:flex-row md:items-start">
                                        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                                            <div className="h-16 w-16 md:h-20 md:w-20 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                                                <ShoppingCartIcon className="h-8 w-8 md:h-10 md:w-10 text-white" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg md:text-2xl font-bold text-blue-900 mb-3">{func.name}</h3>
                                            <p className="text-blue-700 text-sm md:text-base mb-4 md:mb-6">{func.description}</p>
                                            <div className="bg-white/80 rounded-xl p-4 md:p-6">
                                                <h4 className="font-semibold text-blue-900 mb-3 md:mb-4">Key Activities:</h4>
                                                <div className="flex flex-wrap gap-3 md:gap-4">
                                                    {func.activities.map((activity, index) => (
                                                        <div key={index} className="flex items-center">
                                                            <div className="h-2 w-2 rounded-full bg-blue-500 mr-2 md:mr-3"></div>
                                                            <span className="text-blue-700 text-sm md:text-base">{activity}</span>
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
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Contact the Marketing Division</h2>
                        <p className="text-blue-600 text-base md:text-lg mb-8 md:mb-12 max-w-3xl">
                            Get in touch with our Marketing team for inquiries about cooperative product marketing, market development, sales coordination, or partnership opportunities. We're here to help strengthen your cooperative's market presence.
                        </p>

                        <ContactInfo contactInfo={contactInfo} />
                    </div>
                </div>
            )}
        </DepartmentLayout>
    );
};

export default MarketingComponent;