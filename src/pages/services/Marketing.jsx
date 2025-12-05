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
  PresentationChartLineIcon,
  BanknotesIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  CalculatorIcon,
  DocumentChartBarIcon,
  DocumentMagnifyingGlassIcon,
  AcademicCapIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline';

const Marketing = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedSubcategory, setSelectedSubcategory] = useState('products');

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

  // Marketing department team data
  const teamMembers = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "Marketing Director",
      department: "Marketing Department",
      experience: "12+ years in marketing and sales",
      education: "MBA in Marketing",
      bio: "Leads marketing strategy and oversees all promotional activities. Expert in cooperative sector marketing.",
      expertise: ["Strategic Marketing", "Brand Building", "Market Research"]
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Sales Manager",
      department: "Marketing Department",
      experience: "10 years in sales management",
      education: "MA in Business Administration",
      bio: "Manages sales teams and develops strategies to expand market reach and increase revenue.",
      expertise: ["Sales Strategy", "Team Management", "Client Relations"]
    },
    {
      id: 3,
      name: "David Fernando",
      position: "Digital Marketing Lead",
      department: "Marketing Department",
      experience: "8 years in digital marketing",
      education: "BS in Digital Marketing",
      bio: "Oversees digital campaigns, social media, and online presence. Focuses on modern marketing techniques.",
      expertise: ["Digital Marketing", "SEO", "Social Media"]
    },
    {
      id: 4,
      name: "Samantha Perera",
      position: "Event Coordinator",
      department: "Marketing Department",
      experience: "6 years in event management",
      education: "Diploma in Event Management",
      bio: "Organizes exhibitions, trade fairs, and promotional events to showcase cooperative products.",
      expertise: ["Event Planning", "Logistics", "Public Relations"]
    }
  ];

  // Reports data
  const reports = [
    { id: 1, title: "Marketing Strategy Report 2024", type: "PDF", size: "3.8 MB", date: "May 15, 2024" },
    { id: 2, title: "Q1 Sales Performance Report", type: "PDF", size: "2.5 MB", date: "April 30, 2024" },
    { id: 3, title: "Market Analysis Report 2023", type: "PDF", size: "4.2 MB", date: "March 10, 2024" },
    { id: 4, title: "Product Launch Campaign Report", type: "PDF", size: "3.1 MB", date: "February 28, 2024" },
    { id: 5, title: "Digital Marketing Performance", type: "PDF", size: "2.9 MB", date: "June 5, 2024" },
    { id: 6, title: "Annual Marketing Plan 2024", type: "PDF", size: "5.1 MB", date: "December 20, 2023" }
  ];

  // Policies data
  const policies = [
    { id: 1, title: "Marketing Strategy Policy", category: "Strategy", lastUpdated: "Mar 2024", icon: <ChartBarIcon className="h-6 w-6" /> },
    { id: 2, title: "Brand Guidelines", category: "Branding", lastUpdated: "Feb 2024", icon: <ShieldCheckIcon className="h-6 w-6" /> },
    { id: 3, title: "Digital Marketing Policy", category: "Digital", lastUpdated: "Jan 2024", icon: <PresentationChartLineIcon className="h-6 w-6" /> },
    { id: 4, title: "Sales Commission Structure", category: "Sales", lastUpdated: "Dec 2023", icon: <CurrencyDollarIcon className="h-6 w-6" /> },
    { id: 5, title: "Event Management Procedures", category: "Events", lastUpdated: "Nov 2023", icon: <CalendarIcon className="h-6 w-6" /> },
    { id: 6, title: "Market Research Standards", category: "Research", lastUpdated: "Jan 2024", icon: <DocumentMagnifyingGlassIcon className="h-6 w-6" /> }
  ];

  // Contact information
  const contactInfo = {
    phone: "+94 212 232 674",
    email: "marketing@ncdb.coop",
    address: "Elders Home Complex, Kandy Road, Kaithady, Jaffna 40000",
    hours: "Monday - Friday: 9:00 AM - 5:00 PM",
    inquiryEmail: "inquiries.marketing@ncdb.coop"
  };

  // Key marketing metrics
  const marketingMetrics = [
    { id: 1, metric: "₹10M+", label: "Monthly Sales", icon: "💰" },
    { id: 2, metric: "500+", label: "Retail Partners", icon: "🏪" },
    { id: 3, metric: "200+", label: "Societies Served", icon: "🤝" },
    { id: 4, metric: "25%", label: "Annual Growth", icon: "📈" }
  ];

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
              <span className="text-white text-sm font-medium">Marketing Department</span>
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
        {/* Marketing Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {marketingMetrics.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8 text-center hover:shadow-xl hover:border-blue-200 transition-all duration-300">
              <div className="text-4xl mb-4">{item.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">{item.metric}</div>
              <p className="text-blue-800 font-semibold">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-3xl shadow-2xl p-12 text-center">
            <div className="flex items-center justify-center mb-8">
              <ChartBarIcon className="h-16 w-16 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-8">Our Marketing Mission</h2>
            <p className="text-2xl md:text-3xl font-bold text-white italic leading-relaxed">
              "To create sustainable market opportunities for cooperative societies through innovative marketing strategies, expanding reach, and maximizing value for all stakeholders."
            </p>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="bg-white rounded-2xl shadow-lg border border-blue-100 mb-12 overflow-hidden">
          <nav className="flex flex-wrap">
            {[
              { id: 'overview', label: 'Overview', icon: <ChartBarIcon className="h-5 w-5" /> },
              { id: 'sales', label: 'Sales Channels', icon: <CurrencyDollarIcon className="h-5 w-5" /> },
              { id: 'team', label: 'Our Team', icon: <UserGroupIcon className="h-5 w-5" /> },
              { id: 'reports', label: 'Reports', icon: <DocumentTextIcon className="h-5 w-5" /> },
              { id: 'policies', label: 'Policies', icon: <ShieldCheckIcon className="h-5 w-5" /> },
              { id: 'contact', label: 'Contact', icon: <PhoneIcon className="h-5 w-5" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                className={`flex items-center space-x-2 px-8 py-6 font-semibold text-lg transition-all duration-300 flex-1 justify-center ${activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                  : 'text-blue-900 hover:bg-blue-50'
                  }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-12">
              <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">About the Marketing Department</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <p className="text-blue-700 text-lg mb-6 leading-relaxed">
                      The Marketing Department at NCDB plays a crucial role in expanding market reach, enhancing brand visibility, and driving revenue growth for cooperative products. We bridge the gap between cooperative societies and consumers through strategic marketing initiatives.
                    </p>
                    <p className="text-blue-700 text-lg leading-relaxed">
                      Our team develops comprehensive marketing strategies that combine traditional distribution channels with modern digital approaches. We focus on creating sustainable market opportunities, building strong brand identity, and ensuring cooperative products reach their maximum potential.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-blue-900 mb-6">Core Principles</h3>
                    <ul className="space-y-4">
                      {[
                        "Market-driven strategies for cooperative growth",
                        "Sustainable brand building and visibility",
                        "Multi-channel distribution network",
                        "Data-driven marketing decisions",
                        "Stakeholder value maximization"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                          <span className="text-blue-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Key Functions Grid */}
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Key Marketing Functions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg border border-blue-100 p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                    <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 mb-6">
                      <CurrencyDollarIcon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Sales Management</h3>
                    <p className="text-blue-600">Developing and managing sales channels to maximize revenue from cooperative products.</p>
                  </div>

                  <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-lg border border-indigo-100 p-8 hover:shadow-xl hover:border-indigo-300 transition-all duration-300">
                    <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 mb-6">
                      <ShoppingCartIcon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Purchasing Strategy</h3>
                    <p className="text-blue-600">Strategic sourcing and purchasing from cooperative societies to ensure quality supply.</p>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-50 to-white rounded-2xl shadow-lg border border-cyan-100 p-8 hover:shadow-xl hover:border-cyan-300 transition-all duration-300">
                    <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-700 mb-6">
                      <CalendarIcon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Event Management</h3>
                    <p className="text-blue-600">Organizing exhibitions and trade fairs to showcase cooperative products and create market opportunities.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Sales Channels Tab */}
          {activeTab === 'sales' && (
            <div className="space-y-12">
              <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Sales Channels & Distribution</h2>
                <p className="text-blue-600 text-lg mb-8 max-w-3xl">
                  Explore our diverse sales channels and distribution networks that connect cooperative products with markets across the region.
                </p>

                {/* Subcategory Navigation */}
                <div className="mb-12">
                  <h3 className="text-xl font-bold text-blue-900 mb-6">Select Sales Channel</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    {[
                      { key: 'products', name: 'Products', icon: '📦' },
                      { key: 'societies', name: 'Societies', icon: '🏘️' },
                      { key: 'expo', name: 'Expo', icon: '🎪' },
                      { key: 'private', name: 'Private', icon: '🏢' },
                      { key: 'hillcountry', name: 'Hill Country', icon: '⛰️' }
                    ].map((subcategory) => (
                      <button
                        key={subcategory.key}
                        className={`w-full p-4 rounded-xl transition-all duration-300 flex flex-col items-center ${selectedSubcategory === subcategory.key
                          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                          : 'bg-gradient-to-br from-white to-blue-50 text-blue-900 hover:bg-blue-50'
                          }`}
                        onClick={() => setSelectedSubcategory(subcategory.key)}
                      >
                        <span className="text-2xl mb-2">{subcategory.icon}</span>
                        <span className="font-semibold">{subcategory.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Content Display */}
                {selectedSubcategory && content[selectedSubcategory] && (
                  <div className="space-y-6">
                    <div className="flex flex-col lg:flex-row items-start justify-between gap-6 mb-6">
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold text-blue-900 mb-2">
                          {content[selectedSubcategory].heading}
                        </h2>
                        <p className="text-blue-600">{content[selectedSubcategory].description}</p>
                      </div>
                      {content[selectedSubcategory].stats && (
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                          <div className="grid grid-cols-2 gap-6">
                            {Object.entries(content[selectedSubcategory].stats).map(([key, value]) => (
                              <div key={key} className="text-center">
                                <div className="text-2xl font-bold text-blue-700">{value}</div>
                                <div className="text-blue-600 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 border border-blue-100">
                      <h4 className="text-lg font-semibold text-blue-900 mb-4">
                        {content[selectedSubcategory].heading.includes('Categories') ? 'Product List' : 'Areas Covered'}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {content[selectedSubcategory].items.map((item, index) => (
                          <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg border border-blue-100 hover:bg-blue-50 transition-colors">
                            <CheckCircleIcon className="h-5 w-5 text-blue-600 flex-shrink-0" />
                            <span className="text-blue-800 font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Performance Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
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
          )}

          {/* Team Tab */}
          {activeTab === 'team' && (
            <div className="space-y-12">
              <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Meet Our Marketing Team</h2>
                <p className="text-blue-600 text-lg mb-12 max-w-3xl">
                  Our experienced marketing professionals combine traditional marketing expertise with modern digital strategies to drive growth for cooperative products.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {teamMembers.map((member) => (
                    <div key={member.id} className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                      <div className="h-48 bg-gradient-to-r from-blue-600 to-indigo-700 flex items-center justify-center">
                        <div className="h-32 w-32 rounded-full bg-white/20 flex items-center justify-center text-white text-4xl font-bold">
                          {member.name.charAt(0)}
                        </div>
                      </div>
                      <div className="p-8">
                        <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
                        <p className="text-blue-600 font-semibold mb-2">{member.position}</p>
                        <div className="flex items-center text-blue-500 text-sm mb-4">
                          <BuildingOfficeIcon className="h-4 w-4 mr-1" />
                          <span>{member.department}</span>
                        </div>
                        <div className="mb-6">
                          <p className="text-blue-700 text-sm mb-2"><span className="font-semibold">Experience:</span> {member.experience}</p>
                          <p className="text-blue-700 text-sm"><span className="font-semibold">Education:</span> {member.education}</p>
                        </div>
                        <div className="mb-6">
                          <h4 className="font-semibold text-blue-900 mb-2">Areas of Expertise:</h4>
                          <div className="flex flex-wrap gap-2">
                            {member.expertise.map((exp, idx) => (
                              <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                                {exp}
                              </span>
                            ))}
                          </div>
                        </div>
                        <p className="text-blue-600 text-sm">{member.bio}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Reports & Publications Tab */}
          {activeTab === 'reports' && (
            <div className="space-y-12">
              <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Marketing Reports & Publications</h2>
                <p className="text-blue-600 text-lg mb-8 max-w-3xl">
                  Access our latest marketing reports, sales analyses, and campaign performance reviews. All documents are available for download in PDF format.
                </p>

                <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg border border-blue-100 overflow-hidden mb-12">
                  <div className="px-8 py-6 bg-blue-50 border-b border-blue-100">
                    <h3 className="text-lg font-semibold text-blue-900">Latest Marketing Reports</h3>
                  </div>
                  <div className="divide-y divide-blue-100">
                    {reports.map((report) => (
                      <div key={report.id} className="p-8 hover:bg-blue-50/50 transition-colors duration-200 flex flex-col sm:flex-row sm:items-center justify-between">
                        <div className="mb-4 sm:mb-0">
                          <div className="flex items-center mb-4">
                            <div className={`flex items-center justify-center h-12 w-12 rounded-xl mr-6 ${report.type === 'PDF' ? 'bg-red-100 text-red-600' : 'bg-orange-100 text-orange-600'
                              }`}>
                              <span className="font-bold">{report.type}</span>
                            </div>
                            <div>
                              <h4 className="text-lg font-medium text-blue-900">{report.title}</h4>
                              <div className="flex items-center text-blue-500 text-sm mt-2">
                                <ClockIcon className="h-4 w-4 mr-2" />
                                <span className="mr-6">Published: {report.date}</span>
                                <DocumentTextIcon className="h-4 w-4 mr-2" />
                                <span>Size: {report.size}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center">
                          <DocumentTextIcon className="h-5 w-5 mr-2" />
                          Download
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-white">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-6 md:mb-0 md:mr-8">
                      <h3 className="text-2xl font-bold mb-4">Marketing Insights</h3>
                      <p className="text-blue-100 text-lg max-w-2xl">For detailed market analysis and strategic insights, subscribe to our monthly marketing newsletter or contact our market research team.</p>
                    </div>
                    <button className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
                      Subscribe to Newsletter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Policies & Guidelines Tab */}
          {activeTab === 'policies' && (
            <div className="space-y-12">
              <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Marketing Policies & Guidelines</h2>
                <p className="text-blue-600 text-lg mb-8 max-w-3xl">
                  NCDB maintains comprehensive marketing policies to ensure consistent brand messaging, ethical practices, and effective campaign management.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {policies.map((policy) => (
                    <div key={policy.id} className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg border border-blue-100 p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                      <div className="flex items-start mb-6">
                        <div className="flex-shrink-0">
                          <div className="bg-blue-100 text-blue-600 rounded-xl p-3 mr-4">
                            {policy.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-blue-900">{policy.title}</h3>
                          <div className="flex items-center mt-3">
                            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full mr-3">
                              {policy.category}
                            </span>
                            <span className="text-blue-500 text-sm">
                              Updated: {policy.lastUpdated}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-blue-600 mb-6">Detailed guidelines and procedures for {policy.category.toLowerCase()} operations and compliance.</p>
                      <button className="text-blue-700 hover:text-blue-900 font-semibold flex items-center group">
                        View Policy
                        <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="bg-green-100 text-green-600 rounded-full p-3 mr-4">
                        <ShieldCheckIcon className="h-6 w-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-blue-900 mb-6">Brand Compliance</h3>
                      <p className="text-blue-700 text-lg mb-4">
                        All marketing activities adhere to NCDB's brand guidelines and ethical marketing standards. Regular audits ensure compliance with industry regulations.
                      </p>
                      <p className="text-blue-600 mb-6">
                        For brand usage guidelines and compliance updates, download our brand manual or contact the marketing department.
                      </p>
                      <button className="bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02]">
                        Download Brand Manual
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contact Us Tab */}
          {activeTab === 'contact' && (
            <div className="space-y-12">
              <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Contact the Marketing Department</h2>
                <p className="text-blue-600 text-lg mb-12 max-w-3xl">
                  Get in touch with our Marketing team for inquiries about sales, distribution, events, or marketing collaborations. We're here to help expand your market reach.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                  <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg border border-blue-100 p-8 text-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 mb-6 mx-auto">
                      <PhoneIcon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Phone</h3>
                    <p className="text-blue-700 text-xl font-semibold mb-2">{contactInfo.phone}</p>
                    <p className="text-blue-500">For sales inquiries and support</p>
                  </div>

                  <div className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-lg border border-indigo-100 p-8 text-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 mb-6 mx-auto">
                      <EnvelopeIcon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Email</h3>
                    <p className="text-blue-700 text-lg font-semibold mb-2">{contactInfo.email}</p>
                    <p className="text-blue-500 text-sm">For marketing inquiries: {contactInfo.inquiryEmail}</p>
                  </div>

                  <div className="bg-gradient-to-br from-white to-cyan-50 rounded-2xl shadow-lg border border-cyan-100 p-8 text-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-700 mb-6 mx-auto">
                      <MapPinIcon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Address & Hours</h3>
                    <p className="text-blue-700 mb-3">{contactInfo.address}</p>
                    <div className="flex items-center justify-center text-blue-500">
                      <ClockIcon className="h-4 w-4 mr-2" />
                      <span>{contactInfo.hours}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-white">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold mb-6">Interested in Collaboration?</h3>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                      Whether you're a cooperative society looking to expand your market reach or a business interested in our products, our marketing team is ready to help you achieve your goals.
                    </p>
                    <button className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
                      Send a Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Marketing;