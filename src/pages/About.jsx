import React, { useState } from "react";
import Board from "../components/Board";
import {
  EyeIcon,
  RocketLaunchIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  GlobeAltIcon,
  ChartBarIcon,
  HeartIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const About = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const internationalCooperativeBanks = [
    {
      name: "Grameen Bank (Bangladesh)",
      description: "Pioneer in microfinance and community banking",
      impact: "9 million+ members"
    },
    {
      name: "Cooperative Bank of Kenya",
      description: "Leading cooperative banking in East Africa",
      impact: "15 million+ customers"
    },
    {
      name: "Rural Bank of India (Regional Rural Banks)",
      description: "Network of rural cooperative banks",
      impact: "200 million+ accounts"
    },
    {
      name: "Cooperative Bank of Rwanda",
      description: "Sustainable cooperative banking model",
      impact: "85% rural coverage"
    },
    {
      name: "Norwegian Cooperative Bank (SpareBank 1)",
      description: "Scandinavian cooperative banking excellence",
      impact: "2 million+ customers"
    },
    {
      name: "People's Bank (Sri Lanka)",
      description: "State-owned commercial and cooperative bank",
      impact: "14 million+ customers"
    },
    {
      name: "Bank for Agriculture and Agricultural Cooperatives (Thailand)",
      description: "Agricultural cooperative banking",
      impact: "6 million+ farmers"
    },
    {
      name: "Co-operative Bank of Malta",
      description: "Cooperative banking in Mediterranean region",
      impact: "40% market share"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/80 z-10"></div>
        <img
          src="/images/aboutus.jpg"
          alt="About Us"
          className="w-full h-full object-cover"
        />

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <BuildingOfficeIcon className="h-5 w-5 text-white" />
              <span className="text-white text-sm font-medium">About NCDB</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              Empowering Communities Through <span className="text-blue-300">Cooperative Banking</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
              For decades, we've been at the forefront of cooperative banking, driving sustainable development and economic growth across Northern Sri Lanka.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tabs Navigation */}
        <div className="bg-white rounded-2xl shadow-lg border border-blue-100 mb-12 overflow-hidden">
          <nav className="flex flex-wrap">
            {[
              { id: 'overview', label: 'Overview', icon: <BuildingOfficeIcon className="h-5 w-5" /> },
              { id: 'vision_mission', label: 'Vision & Mission', icon: <EyeIcon className="h-5 w-5" /> },
              { id: 'international', label: 'International Network', icon: <GlobeAltIcon className="h-5 w-5" /> },
              { id: 'team', label: 'Our Team', icon: <UserGroupIcon className="h-5 w-5" /> }
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
                <h2 className="text-3xl font-bold text-blue-900 mb-8">About NCDB</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <p className="text-blue-700 text-lg mb-6 leading-relaxed">
                      Northern Cooperative Development Bank (NCDB) is a pioneering financial institution dedicated to empowering cooperative societies and driving sustainable economic development across Northern Sri Lanka. Established with a vision to transform communities through cooperative banking, we have grown to become a trusted partner for thousands of cooperatives and their members.
                    </p>
                    <p className="text-blue-700 text-lg leading-relaxed">
                      Our institution operates on the fundamental principles of cooperation, mutual assistance, and community development. We provide comprehensive banking solutions, technical support, and capacity building programs designed specifically for cooperative societies.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-blue-900 mb-6">Our Impact</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-blue-700 mb-2">1200+</div>
                        <div className="text-blue-800 font-semibold">Member Societies</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-blue-700 mb-2">₹500+ Cr</div>
                        <div className="text-blue-800 font-semibold">Assets Managed</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-blue-700 mb-2">50+</div>
                        <div className="text-blue-800 font-semibold">Branches</div>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold text-blue-700 mb-2">25+</div>
                        <div className="text-blue-800 font-semibold">Years of Service</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Core Values */}
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    {
                      title: "Integrity",
                      description: "Upholding the highest ethical standards in all our operations",
                      icon: <ShieldCheckIcon className="h-8 w-8 text-blue-600" />
                    },
                    {
                      title: "Innovation",
                      description: "Continuously evolving to meet changing community needs",
                      icon: <LightBulbIcon className="h-8 w-8 text-blue-600" />
                    },
                    {
                      title: "Inclusion",
                      description: "Ensuring financial access for all community members",
                      icon: <UserGroupIcon className="h-8 w-8 text-blue-600" />
                    },
                    {
                      title: "Impact",
                      description: "Creating measurable positive change in communities",
                      icon: <HeartIcon className="h-8 w-8 text-blue-600" />
                    }
                  ].map((value, index) => (
                    <div key={index} className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg border border-blue-100 p-8 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-blue-50 mb-6">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-bold text-blue-900 mb-4">{value.title}</h3>
                      <p className="text-blue-600">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Vision & Mission Tab */}
          {activeTab === 'vision_mission' && (
            <div className="space-y-12">
              {/* Vision Section */}
              <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-3xl shadow-2xl p-12 text-white">
                <div className="flex items-center mb-8">
                  <EyeIcon className="h-12 w-12 text-blue-300 mr-4" />
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-2xl md:text-3xl font-bold italic leading-relaxed mb-8">
                  "To become the premier cooperative banking institution in South Asia, recognized for empowering communities through innovative financial solutions and sustainable development initiatives."
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Strategic Objectives</h3>
                  <ul className="space-y-3">
                    {[
                      "Expand financial inclusion to reach 100% of rural communities",
                      "Develop innovative banking products for cooperative societies",
                      "Establish international cooperative banking partnerships",
                      "Achieve operational excellence and sustainability"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-2 w-2 rounded-full bg-blue-300 mr-3 mt-2"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Mission Section */}
              <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-12">
                <div className="flex items-center mb-8">
                  <RocketLaunchIcon className="h-12 w-12 text-blue-600 mr-4" />
                  <h2 className="text-3xl font-bold text-blue-900">Our Mission</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <p className="text-blue-700 text-lg leading-relaxed mb-6">
                      We are committed to delivering comprehensive financial solutions that foster economic growth, enhance social well-being, and promote sustainable development across the communities we serve.
                    </p>
                    <p className="text-blue-700 text-lg leading-relaxed">
                      Our mission encompasses providing accessible banking services, developing innovative financial products, and building capacity within cooperative societies to create lasting positive impact.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-blue-900 mb-6">Mission Focus Areas</h3>
                    <div className="space-y-4">
                      {[
                        "Financial Inclusion & Accessibility",
                        "Cooperative Capacity Building",
                        "Sustainable Economic Development",
                        "Community Empowerment",
                        "Innovative Banking Solutions"
                      ].map((area, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                          <span className="text-blue-700">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* International Network Tab */}
          {activeTab === 'international' && (
            <div className="space-y-12">
              <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-12">
                <div className="flex items-center mb-8">
                  <GlobeAltIcon className="h-12 w-12 text-blue-600 mr-4" />
                  <h2 className="text-3xl font-bold text-blue-900">International Cooperative Network</h2>
                </div>
                <p className="text-blue-600 text-lg mb-8 max-w-3xl">
                  NCDB is part of a global network of cooperative banks working together to advance the cooperative movement and share best practices in community banking and sustainable development.
                </p>

                {/* Top Row - 8 of society */}
                <div className="text-center mb-12">
                  <div className="inline-block">
                    <div className="text-6xl font-bold text-blue-700 mb-4">8</div>
                    <p className="text-2xl text-blue-800">International Cooperative Banks in Our Network</p>
                  </div>
                </div>

                {/* International Banks Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {internationalCooperativeBanks.map((bank, index) => (
                    <div key={index} className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-blue-100 text-blue-600 font-bold text-lg mb-4">
                        {bank.name.charAt(0)}
                      </div>
                      <h3 className="text-lg font-bold text-blue-900 mb-3">{bank.name}</h3>
                      <p className="text-blue-600 text-sm mb-4">{bank.description}</p>
                      <div className="text-blue-700 text-sm font-semibold">
                        {bank.impact}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Global Impact */}
                <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-white">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-6">Global Cooperative Impact</h3>
                    <p className="text-blue-100 text-lg mb-8 max-w-3xl mx-auto">
                      Through our international network, we share knowledge, collaborate on research, and implement best practices to enhance cooperative banking services worldwide.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-2">1.2B+</div>
                        <p className="text-blue-200">Cooperative Members Worldwide</p>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-2">3M+</div>
                        <p className="text-blue-200">Cooperative Organizations</p>
                      </div>
                      <div className="text-center">
                        <div className="text-4xl font-bold mb-2">$3T+</div>
                        <p className="text-blue-200">Annual Cooperative Revenue</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Team Tab */}
          {activeTab === 'team' && (
            <div className="space-y-12">
              <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Our Leadership Team</h2>
                <p className="text-blue-600 text-lg mb-8 max-w-3xl">
                  Meet the dedicated professionals who guide NCDB's strategic direction and ensure our commitment to cooperative banking excellence.
                </p>
                <Board />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;