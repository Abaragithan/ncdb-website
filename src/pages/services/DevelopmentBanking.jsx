import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

const DevelopmentBanking = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Development programs data
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

  // Grants information
  const grants = [
    {
      id: 1,
      name: "Agricultural Development Grant",
      amount: "Up to ₹50,000",
      eligibility: "Farmers & Agricultural Cooperatives",
      purpose: "Modern farming equipment, irrigation systems",
      icon: "🌱"
    },
    {
      id: 2,
      name: "Small Business Start-up Grant",
      amount: "Up to ₹1,00,000",
      eligibility: "New Entrepreneurs",
      purpose: "Business establishment, initial inventory",
      icon: "🚀"
    },
    {
      id: 3,
      name: "Women Entrepreneurship Grant",
      amount: "Up to ₹75,000",
      eligibility: "Women Entrepreneurs",
      purpose: "Women-led business ventures",
      icon: "👩‍💼"
    },
    {
      id: 4,
      name: "Education Support Grant",
      amount: "Up to ₹25,000",
      eligibility: "Students from Cooperatives",
      purpose: "Higher education expenses",
      icon: "🎓"
    }
  ];

  // Success metrics
  const successMetrics = [
    { id: 1, metric: "₹50+ Cr", label: "Development Loans Disbursed", icon: "💰" },
    { id: 2, metric: "5000+", label: "Beneficiaries Supported", icon: "👥" },
    { id: 3, metric: "200+", label: "Villages Developed", icon: "🏘️" },
    { id: 4, metric: "₹10+ Cr", label: "Grants Distributed", icon: "🎯" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/80 z-10"></div>
        <img
          src="/images/development banking.jpg"
          alt="Development Banking"
          className="w-full h-full object-cover"
        />

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <BuildingLibraryIcon className="h-5 w-5 text-white" />
              <span className="text-white text-sm font-medium">Development Banking Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              Empowering Communities Through <span className="text-blue-300">Inclusive Finance</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
              Comprehensive development banking solutions designed to uplift cooperative societies and drive sustainable economic growth.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission Statement */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-3xl shadow-2xl p-12 text-center">
            <BanknotesIcon className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-8">Our Development Mission</h2>
            <p className="text-2xl md:text-3xl font-bold text-white italic leading-relaxed">
              "To empower communities through inclusive financial solutions that foster sustainable development, economic growth, and improved quality of life."
            </p>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {successMetrics.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8 text-center hover:shadow-xl hover:border-blue-200 transition-all duration-300">
              <div className="text-4xl mb-4">{item.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">{item.metric}</div>
              <p className="text-blue-800 font-semibold">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Tabs Navigation */}
        <div className="bg-white rounded-2xl shadow-lg border border-blue-100 mb-12 overflow-hidden">
          <nav className="flex flex-wrap">
            {[
              { id: 'overview', label: 'Overview', icon: <BuildingLibraryIcon className="h-5 w-5" /> },
              { id: 'programs', label: 'Programs', icon: <DocumentTextIcon className="h-5 w-5" /> },
              { id: 'grants', label: 'Grants', icon: <BanknotesIcon className="h-5 w-5" /> },
              { id: 'services', label: 'Services', icon: <CheckCircleIcon className="h-5 w-5" /> },
              { id: 'apply', label: 'Apply Now', icon: <DevicePhoneMobileIcon className="h-5 w-5" /> }
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
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Development Banking Overview</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <p className="text-blue-700 text-lg mb-6 leading-relaxed">
                      NCDB's Development Banking unit is dedicated to fostering sustainable economic growth and social welfare through targeted financial solutions. We work closely with communities, cooperatives, and individuals to provide the financial resources needed for development and progress.
                    </p>
                    <p className="text-blue-700 text-lg leading-relaxed">
                      Our approach combines traditional banking services with innovative development programs designed to address specific community needs, empower entrepreneurs, support education, and improve overall quality of life.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-blue-900 mb-6">Our Approach</h3>
                    <ul className="space-y-4">
                      {[
                        "Community needs assessment and analysis",
                        "Customized financial solutions",
                        "Sustainable development focus",
                        "Regular monitoring and evaluation",
                        "Capacity building and training"
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

              {/* Development Programs Grid */}
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Featured Development Programs</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {developmentPrograms.map((program) => (
                    <div key={program.id} className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                      <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-blue-50 mb-6">
                        {program.icon}
                      </div>
                      <h3 className="text-xl font-bold text-blue-900 mb-4">{program.name}</h3>
                      <p className="text-blue-600 mb-6">{program.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {program.features.map((feature, index) => (
                          <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
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

          {/* Programs Tab */}
          {activeTab === 'programs' && (
            <div className="space-y-12">
              <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Development Programs</h2>
                <div className="space-y-8">
                  {developmentPrograms.map((program) => (
                    <div key={program.id} className="bg-gradient-to-r from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          {program.icon}
                        </div>
                        <div className="ml-6">
                          <h3 className="text-2xl font-bold text-blue-900 mb-3">{program.name}</h3>
                          <p className="text-blue-700 mb-6">{program.description}</p>
                          {program.features.length > 0 && (
                            <div className="bg-white rounded-xl p-6">
                              <h4 className="font-semibold text-blue-900 mb-4">Key Components:</h4>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {program.features.map((feature, index) => (
                                  <div key={index} className="flex items-center">
                                    <div className="h-2 w-2 rounded-full bg-blue-500 mr-3"></div>
                                    <span className="text-blue-700">{feature}</span>
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

          {/* Grants Tab */}
          {activeTab === 'grants' && (
            <div className="space-y-12">
              <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Grants & Financial Assistance</h2>
                <p className="text-blue-600 text-lg mb-8 max-w-3xl">
                  NCDB provides various grants and subsidies to support community development, entrepreneurship, education, and agricultural growth.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  {grants.map((grant) => (
                    <div key={grant.id} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg border border-blue-100 p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center space-x-4">
                          <div className="text-3xl">{grant.icon}</div>
                          <div>
                            <h3 className="text-xl font-bold text-blue-900">{grant.name}</h3>
                            <div className="flex items-center text-blue-600 text-sm mt-1">
                              <UserGroupIcon className="h-4 w-4 mr-1" />
                              <span>Eligibility: {grant.eligibility}</span>
                            </div>
                          </div>
                        </div>
                        <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                          {grant.amount}
                        </span>
                      </div>
                      <p className="text-blue-700 mb-6">{grant.purpose}</p>
                      <button className="text-blue-700 hover:text-blue-900 font-semibold flex items-center group">
                        Apply for Grant
                        <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-white">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-6 md:mb-0 md:mr-8">
                      <h3 className="text-2xl font-bold mb-4">Need Help with Grant Application?</h3>
                      <p className="text-blue-100 text-lg">
                        Our development banking specialists are available to guide you through the grant application process and help you identify the most suitable financial assistance program.
                      </p>
                    </div>
                    <button className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
                      Schedule Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Apply Now Tab */}
          {activeTab === 'apply' && (
            <div className="space-y-12">
              <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Apply for Development Services</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 text-center border border-blue-100 hover:shadow-xl transition-all duration-300">
                    <div className="text-blue-600 mb-6">
                      <DevicePhoneMobileIcon className="h-16 w-16 mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Online Application</h3>
                    <p className="text-blue-600 mb-6">Apply for loans, grants, or accounts through our secure online portal.</p>
                    <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02]">
                      Apply Online
                    </button>
                  </div>

                  <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-8 text-center border border-indigo-100 hover:shadow-xl transition-all duration-300">
                    <div className="text-indigo-600 mb-6">
                      <UserGroupIcon className="h-16 w-16 mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Schedule Consultation</h3>
                    <p className="text-blue-600 mb-6">Book a meeting with our development banking specialists for personalized guidance.</p>
                    <button className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02]">
                      Book Appointment
                    </button>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-50 to-white rounded-2xl p-8 text-center border border-cyan-100 hover:shadow-xl transition-all duration-300">
                    <div className="text-cyan-600 mb-6">
                      <BuildingOfficeIcon className="h-16 w-16 mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Branch Visit</h3>
                    <p className="text-blue-600 mb-6">Visit your nearest NCDB branch for in-person assistance and application support.</p>
                    <button className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02]">
                      Find Branch
                    </button>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl p-12 text-white">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold mb-6">Need Help Choosing the Right Service?</h3>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                      Our development banking team is here to help you navigate through our services and find the perfect financial solution for your needs.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                      <button className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
                        Call Us: 1800-123-4567
                      </button>
                      <button className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-4 px-10 rounded-lg text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
                        Email: development@ncdb.coop
                      </button>
                    </div>
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

export default DevelopmentBanking;