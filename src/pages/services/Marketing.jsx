import React, { useState } from "react";
import {
  ShoppingCartIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  ChartBarIcon,
  BuildingStorefrontIcon,
  UserGroupIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PresentationChartLineIcon
} from '@heroicons/react/24/outline';

const Marketing = () => {
  const [selectedCategory, setSelectedCategory] = useState('sales');
  const [selectedSubcategory, setSelectedSubcategory] = useState('products');

  const categories = [
    {
      key: 'sales',
      name: 'Sales',
      icon: <CurrencyDollarIcon className="h-8 w-8" />,
      color: 'blue'
    },
    {
      key: 'purchasing',
      name: 'Purchasing',
      icon: <ShoppingCartIcon className="h-8 w-8" />,
      color: 'indigo'
    },
    {
      key: 'events',
      name: 'Events',
      icon: <CalendarIcon className="h-8 w-8" />,
      color: 'cyan'
    },
    {
      key: 'marketing_accounts',
      name: 'Marketing & Accounts',
      icon: <ChartBarIcon className="h-8 w-8" />,
      color: 'teal'
    },
  ];

  const subcategories = {
    sales: [
      { key: 'products', name: 'Products', icon: '📦' },
      { key: 'societies', name: 'Societies', icon: '🏘️' },
      { key: 'expo', name: 'Expo', icon: '🎪' },
      { key: 'private', name: 'Private', icon: '🏢' },
      { key: 'hillcountry', name: 'Hill Country', icon: '⛰️' }
    ],
    purchasing: [
      { key: 'societies', name: 'Societies', icon: '🤝' }
    ],
    events: [
      { key: 'exhibitions', name: 'Exhibitions', icon: '🎨' },
      { key: 'others', name: 'Others', icon: '📅' }
    ],
    marketing_accounts: [
      { key: 'sales', name: 'Sales', icon: '💰' },
      { key: 'purchasing', name: 'Purchasing', icon: '🛒' }
    ]
  };

  const content = {
    products: {
      heading: "Product Categories",
      items: ["Rice", "Flour", "Sugar", "Spices", "Tea", "Coconut Products"],
      description: "Our diverse product range includes agricultural commodities and value-added products sourced from cooperative societies.",
      stats: { monthlySales: "₹2.5M", growth: "+12%" }
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
      stats: { visitors: "10,000+", deals: "₹5M+" }
    },
    private: {
      heading: "Private Retail Channels",
      items: ["FoodCity Supermarkets", "Private Retail Shops", "Small Industries"],
      description: "Strategic partnerships with private retailers for product distribution.",
      stats: { partners: "50+", revenue: "₹1.2M/month" }
    },
    hillcountry: {
      heading: "Hill Country Network",
      items: ["Nuwara Eliya", "Badulla", "Kandy", "Matale"],
      description: "Expanding our reach to hill country regions with specialized product offerings.",
      stats: { societies: "75+", growth: "+25%" }
    },
    purchasing: {
      heading: "Purchasing Statistics",
      items: ["Monthly Purchasing", "Quarterly Purchasing", "Annual Purchasing"],
      description: "Comprehensive purchasing data and analysis for strategic sourcing.",
      stats: { volume: "₹4M/month", savings: "15%" }
    }
  };

  const handleCategoryClick = (categoryKey) => {
    setSelectedCategory(categoryKey);
    setSelectedSubcategory(subcategories[categoryKey][0].key);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/80 z-10"></div>
        <img
          src="/images/marketing.jpg"
          alt="Marketing"
          className="w-full h-full object-cover"
        />

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <ChartBarIcon className="h-5 w-5 text-white" />
              <span className="text-white text-sm font-medium">Marketing & Sales</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              Driving <span className="text-blue-300">Market Growth</span> for Cooperatives
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
              Strategic marketing solutions and sales channels designed to maximize market reach and profitability for cooperative products.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Marketing Categories Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Marketing Functions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div
                key={category.key}
                className={`bg-gradient-to-br from-white to-${category.color}-50 rounded-2xl shadow-lg border border-${category.color}-100 p-8 hover:shadow-xl hover:border-${category.color}-300 transition-all duration-300 cursor-pointer ${selectedCategory === category.key ? `ring-2 ring-${category.color}-500` : ''
                  }`}
                onClick={() => handleCategoryClick(category.key)}
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 mb-6">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{category.name}</h3>
                <p className="text-blue-600 text-sm">Click to explore {category.name.toLowerCase()} functions and data</p>
              </div>
            ))}
          </div>
        </div>

        {/* Content Section */}
        {selectedCategory && (
          <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Subcategory Navigation */}
              <div className="lg:w-1/4">
                <h3 className="text-xl font-bold text-blue-900 mb-6">
                  {categories.find(c => c.key === selectedCategory)?.name} Areas
                </h3>
                <div className="space-y-3">
                  {subcategories[selectedCategory].map((subcategory) => (
                    <button
                      key={subcategory.key}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center space-x-3 ${selectedSubcategory === subcategory.key
                          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                          : 'bg-gradient-to-br from-white to-blue-50 text-blue-900 hover:bg-blue-50'
                        }`}
                      onClick={() => setSelectedSubcategory(subcategory.key)}
                    >
                      <span className="text-xl">{subcategory.icon}</span>
                      <span className="font-semibold">{subcategory.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Content Display */}
              <div className="lg:w-3/4">
                {selectedSubcategory && content[selectedSubcategory] && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h2 className="text-2xl font-bold text-blue-900 mb-2">
                          {content[selectedSubcategory].heading}
                        </h2>
                        <p className="text-blue-600">{content[selectedSubcategory].description}</p>
                      </div>
                      {content[selectedSubcategory].stats && (
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4">
                          <div className="grid grid-cols-2 gap-4">
                            {Object.entries(content[selectedSubcategory].stats).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div className="text-xl font-bold text-blue-700">{value}</div>
                                <div className="text-blue-600 text-sm">{key}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-100">
                      <h4 className="text-lg font-semibold text-blue-900 mb-4">
                        {content[selectedSubcategory].heading.includes('Categories') ? 'Product List' : 'Areas Covered'}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {content[selectedSubcategory].items.map((item, index) => (
                          <div key={index} className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-blue-100">
                            <CheckCircleIcon className="h-5 w-5 text-blue-600 flex-shrink-0" />
                            <span className="text-blue-800 font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 border border-indigo-100">
                        <h4 className="text-lg font-semibold text-blue-900 mb-4">Performance Metrics</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-blue-700">Market Reach</span>
                            <span className="font-bold text-blue-900">85%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-blue-700">Growth Rate</span>
                            <span className="font-bold text-green-600">+18%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-blue-700">Customer Satisfaction</span>
                            <span className="font-bold text-blue-900">92%</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-cyan-50 to-white rounded-xl p-6 border border-cyan-100">
                        <h4 className="text-lg font-semibold text-blue-900 mb-4">Quick Actions</h4>
                        <div className="space-y-3">
                          <button className="w-full text-left p-3 bg-white rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors">
                            <div className="flex items-center justify-between">
                              <span className="text-blue-800">Generate Sales Report</span>
                              <ArrowRightIcon className="h-4 w-4 text-blue-600" />
                            </div>
                          </button>
                          <button className="w-full text-left p-3 bg-white rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors">
                            <div className="flex items-center justify-between">
                              <span className="text-blue-800">View Analytics Dashboard</span>
                              <PresentationChartLineIcon className="h-4 w-4 text-blue-600" />
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Marketing Strategy Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Marketing Strategy</h2>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                We implement a comprehensive marketing strategy that combines traditional distribution channels with modern digital approaches to maximize market penetration and brand visibility for cooperative products.
              </p>
              <ul className="space-y-3">
                {[
                  "Multi-channel distribution network",
                  "Digital marketing campaigns",
                  "Strategic partnerships",
                  "Brand building initiatives",
                  "Market research and analysis"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircleIcon className="h-6 w-6 text-blue-300 mr-3 flex-shrink-0" />
                    <span className="text-blue-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Key Performance Indicators</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-3xl font-bold">₹10M+</div>
                  <div className="text-blue-200 text-sm">Monthly Sales</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-blue-200 text-sm">Retail Partners</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-3xl font-bold">200+</div>
                  <div className="text-blue-200 text-sm">Societies Covered</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <div className="text-3xl font-bold">25%</div>
                  <div className="text-blue-200 text-sm">Annual Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;