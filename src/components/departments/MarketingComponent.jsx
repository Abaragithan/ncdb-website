import { useState } from 'react';
import {
    ShoppingCartIcon,
    CurrencyDollarIcon,
    CalendarIcon,
    ChartBarIcon,
    CheckCircleIcon,
    PhoneIcon,

} from '@heroicons/react/24/outline';
import DepartmentLayout from '../layout/DepartmentLayout';
import ContactInfo from '../common/ContactInfo';

const MarketingComponent = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [selectedSubcategory, setSelectedSubcategory] = useState('products');

    const heroConfig = {
        title: "Driving",
        description: "Strategic marketing solutions and sales channels designed to maximize market reach and profitability for cooperative products.",
        imageSrc: "/images/marketing.jpg",
        badgeIcon: ChartBarIcon,
        badgeText: "Marketing Department",
        highlightText: "Market Growth for Cooperatives"
    };

    const metrics = [
        { id: 1, metric: "LKR10M+", label: "Monthly Sales", icon: "💰" },
        { id: 2, metric: "500+", label: "Retail Partners", icon: "🏪" },
        { id: 3, metric: "200+", label: "Societies Served", icon: "🤝" },
        { id: 4, metric: "25%", label: "Annual Growth", icon: "📈" }
    ];

    const missionConfig = {
        mission: "To create sustainable market opportunities for cooperative societies through innovative marketing strategies, expanding reach, and maximizing value for all stakeholders.",
        icon: ChartBarIcon,
        title: "Our Marketing Mission"
    };

    const tabs = [
        { id: 'overview', label: 'Overview', shortLabel: 'Overview', icon: <ChartBarIcon className="h-5 w-5" /> },
        { id: 'sales', label: 'Sales Channels', shortLabel: 'Sales', icon: <CurrencyDollarIcon className="h-5 w-5" /> },
        { id: 'contact', label: 'Contact', shortLabel: 'Contact', icon: <PhoneIcon className="h-5 w-5" /> }
    ];

    const content = {
        products: {
            heading: "Product Categories",
            items: ["Rice", "Flour", "Sugar", "Spices", "Tea", "Coconut Products"],
            description: "Our diverse product range includes agricultural commodities and value-added products sourced from cooperative societies.",
            stats: { monthlySales: "LKR2.5M", growth: "+12%" }
        },
        societies: {
            heading: "District Distribution",
            items: ["Jaffna District", "Kilinochchi", "Mannar", "Mullaitivu", "Vavuniya"],
            description: "Network of cooperative societies across Northern Province supporting local production and distribution.",
            stats: { societies: "200+", coverage: "95%" }
        },
        expo: {
            heading: "Trade Expositions",
            items: ["Annual Cooperative Expo", "Agricultural Fair", "Food Processing Expo"],
            description: "Major exhibitions showcasing cooperative products and connecting with buyers.",
            stats: { visitors: "10,000+", deals: "LKR5M+" }
        }
    };

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
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">About the Marketing Department</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div>
                                <p className="text-blue-700 text-base md:text-lg mb-6 leading-relaxed">
                                    The Marketing Department at NCDB plays a crucial role in expanding market reach, enhancing brand visibility, and driving revenue growth for cooperative products. We bridge the gap between cooperative societies and consumers through strategic marketing initiatives.
                                </p>
                                <p className="text-blue-700 text-base md:text-lg leading-relaxed">
                                    Our team develops comprehensive marketing strategies that combine traditional distribution channels with modern digital approaches. We focus on creating sustainable market opportunities, building strong brand identity, and ensuring cooperative products reach their maximum potential.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl md:rounded-2xl p-6 md:p-8">
                                <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-6">Core Principles</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Market-driven strategies for cooperative growth",
                                        "Sustainable brand building and visibility",
                                        "Multi-channel distribution network",
                                        "Data-driven marketing decisions",
                                        "Stakeholder value maximization"
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
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8 text-center">Key Marketing Functions</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl md:rounded-2xl shadow-lg border border-blue-100 p-6 md:p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                                <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 mb-4 md:mb-6">
                                    <CurrencyDollarIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">Sales Management</h3>
                                <p className="text-blue-600 text-sm md:text-base">Developing and managing sales channels to maximize revenue from cooperative products.</p>
                            </div>

                            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl md:rounded-2xl shadow-lg border border-indigo-100 p-6 md:p-8 hover:shadow-xl hover:border-indigo-300 transition-all duration-300">
                                <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 mb-4 md:mb-6">
                                    <ShoppingCartIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">Purchasing Strategy</h3>
                                <p className="text-blue-600 text-sm md:text-base">Strategic sourcing and purchasing from cooperative societies to ensure quality supply.</p>
                            </div>

                            <div className="bg-gradient-to-br from-cyan-50 to-white rounded-xl md:rounded-2xl shadow-lg border border-cyan-100 p-6 md:p-8 hover:shadow-xl hover:border-cyan-300 transition-all duration-300">
                                <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-700 mb-4 md:mb-6">
                                    <CalendarIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">Event Management</h3>
                                <p className="text-blue-600 text-sm md:text-base">Organizing exhibitions and trade fairs to showcase cooperative products and create market opportunities.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'sales' && (
                <div className="space-y-8 md:space-y-12">
                    <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Sales Channels & Distribution</h2>
                        <p className="text-blue-600 text-base md:text-lg mb-6 md:mb-8 max-w-3xl">
                            Explore our diverse sales channels and distribution networks that connect cooperative products with markets across the region.
                        </p>

                        {/* Subcategory Navigation */}
                        <div className="mb-8 md:mb-12">
                            <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-4 md:mb-6">Select Sales Channel</h3>
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
                                {[
                                    { key: 'products', name: 'Products', icon: '📦' },
                                    { key: 'societies', name: 'Societies', icon: '🏘️' },
                                    { key: 'expo', name: 'Expo', icon: '🎪' },
                                    { key: 'private', name: 'Private', icon: '🏢' },
                                    { key: 'hillcountry', name: 'Hill Country', icon: '⛰️' }
                                ].map((subcategory) => (
                                    <button
                                        key={subcategory.key}
                                        className={`w-full p-3 md:p-4 rounded-lg md:rounded-xl transition-all duration-300 flex flex-col items-center ${selectedSubcategory === subcategory.key
                                                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                                                : 'bg-gradient-to-br from-white to-blue-50 text-blue-900 hover:bg-blue-50'
                                            }`}
                                        onClick={() => setSelectedSubcategory(subcategory.key)}
                                    >
                                        <span className="text-xl md:text-2xl mb-1 md:mb-2">{subcategory.icon}</span>
                                        <span className="font-semibold text-xs md:text-sm">{subcategory.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Content Display */}
                        {selectedSubcategory && content[selectedSubcategory] && (
                            <div className="space-y-4 md:space-y-6">
                                <div className="flex flex-col lg:flex-row items-start justify-between gap-4 md:gap-6 mb-4 md:mb-6">
                                    <div className="flex-1">
                                        <h2 className="text-lg md:text-2xl font-bold text-blue-900 mb-1 md:mb-2">
                                            {content[selectedSubcategory].heading}
                                        </h2>
                                        <p className="text-blue-600 text-sm md:text-base">{content[selectedSubcategory].description}</p>
                                    </div>
                                    {content[selectedSubcategory].stats && (
                                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg md:rounded-xl p-4 md:p-6">
                                            <div className="grid grid-cols-2 gap-4 md:gap-6">
                                                {Object.entries(content[selectedSubcategory].stats).map(([key, value]) => (
                                                    <div key={key} className="text-center">
                                                        <div className="text-lg md:text-2xl font-bold text-blue-700">{value}</div>
                                                        <div className="text-blue-600 text-xs md:text-sm capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg md:rounded-xl p-4 md:p-6 lg:p-8 border border-blue-100">
                                    <h4 className="text-base md:text-lg font-semibold text-blue-900 mb-3 md:mb-4">
                                        {content[selectedSubcategory].heading.includes('Categories') ? 'Product List' : 'Areas Covered'}
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                                        {content[selectedSubcategory].items.map((item, index) => (
                                            <div key={index} className="flex items-center space-x-2 p-3 bg-white rounded-lg border border-blue-100 hover:bg-blue-50 transition-colors">
                                                <CheckCircleIcon className="h-4 w-4 md:h-5 md:w-5 text-blue-600 flex-shrink-0" />
                                                <span className="text-blue-800 font-medium text-sm md:text-base">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {activeTab === 'contact' && (
                <div className="space-y-8 md:space-y-12">
                    <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Contact the Marketing Department</h2>
                        <p className="text-blue-600 text-base md:text-lg mb-8 md:mb-12 max-w-3xl">
                            Get in touch with our Marketing team for inquiries about sales, distribution, events, or marketing collaborations. We're here to help expand your market reach.
                        </p>

                        <ContactInfo contactInfo={contactInfo} />
                    </div>
                </div>
            )}
        </DepartmentLayout>
    );
};

export default MarketingComponent;