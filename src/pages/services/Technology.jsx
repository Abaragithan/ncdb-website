import React, { useState } from 'react';
import {
  BeakerIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
  AcademicCapIcon,
  ChartBarIcon,
  BuildingOfficeIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  CogIcon,
  TruckIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  LightBulbIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const Technology = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Food technology products
  const foodProducts = [
    { id: 1, name: "Masala Paneer", category: "Dairy", developedBy: "Food Technology Interns" },
    { id: 2, name: "Pirandai Pickle", category: "Pickles", developedBy: "Food Technology Interns" },
    { id: 3, name: "Garlic Pickle", category: "Pickles", developedBy: "Food Technology Interns" },
    { id: 4, name: "Palm Posha", category: "Snacks", developedBy: "Food Technology Interns" },
    { id: 5, name: "Avizhtha Kanchi", category: "Traditional", developedBy: "Food Technology Interns" },
    { id: 6, name: "Palmyrah Biscuits", category: "Bakery", developedBy: "Food Technology Interns" },
    { id: 7, name: "Coconut Milk Toffee", category: "Confectionery", developedBy: "Food Technology Interns" },
    { id: 8, name: "Milk Fruit Juice", category: "Beverages", developedBy: "Food Technology Interns" },
    { id: 9, name: "Choco Panattu", category: "Confectionery", developedBy: "Food Technology Interns" }
  ];

  // Automobile achievements
  const automobileAchievements = [
    { id: 1, type: "Machine", count: 23, description: "Reactivated and repaired", icon: <CogIcon className="h-8 w-8" /> },
    { id: 2, type: "Vehicle", count: 25, description: "Reactivated and repaired", icon: <TruckIcon className="h-8 w-8" /> },
    { id: 3, type: "Cooperative Society", count: 15, description: "Benefited from asset management", icon: <BuildingOfficeIcon className="h-8 w-8" /> }
  ];

  // Internship programs
  const internshipPrograms = [
    {
      id: 1,
      field: "Food Technology",
      duration: "6 months",
      students: 12,
      focus: "Product innovation & development",
      achievements: "Developed 9+ new food products",
      icon: <BeakerIcon className="h-8 w-8" />
    },
    {
      id: 2,
      field: "Green Farming Technology",
      duration: "6 months",
      students: 8,
      focus: "Sustainable farming practices",
      achievements: "Implemented organic farming solutions",
      icon: <LightBulbIcon className="h-8 w-8" />
    },
    {
      id: 3,
      field: "Automobile Technology",
      duration: "6 months",
      students: 5,
      focus: "Asset reactivation & repair",
      achievements: "Repaired cooperative machinery & vehicles",
      icon: <WrenchScrewdriverIcon className="h-8 w-8" />
    }
  ];

  // Current internship stats
  const currentInternshipStats = {
    totalCompleted: 25,
    currentActive: 8,
    foodTech: 3,
    greenFarming: 3,
    automobile: 2
  };

  // Key projects
  const keyProjects = [
    { id: 1, name: "Paddy Quality Testing", area: "Rice-based products", status: "Ongoing", icon: "🌾" },
    { id: 2, name: "Coconut Oil Production", area: "Joint Ventures", status: "Active", icon: "🥥" },
    { id: 3, name: "Rice Flour Production", area: "Joint Ventures", status: "Active", icon: "🍚" },
    { id: 4, name: "Chilli Powder Processing", area: "Local Food Items", status: "Completed", icon: "🌶️" },
    { id: 5, name: "Dairy Products Enhancement", area: "Local Food Items", status: "Ongoing", icon: "🥛" },
    { id: 6, name: "Palmyrah Products Development", area: "Local Food Items", status: "Ongoing", icon: "🌴" }
  ];

  // Technology stats
  const techStats = [
    { id: 1, value: "2", label: "Technical Units", description: "Specialized support units" },
    { id: 2, value: "48", label: "Assets Reactivated", description: "Machines & vehicles" },
    { id: 3, value: "9+", label: "New Products", description: "Food technology innovations" },
    { id: 4, value: "25", label: "Interns Trained", description: "Technical expertise development" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/80 z-10"></div>
        <img
          src="/images/technology1.jpg"
          alt="Technical Unit"
          className="w-full h-full object-cover"
        />

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <CpuChipIcon className="h-5 w-5 text-white" />
              <span className="text-white text-sm font-medium">Technical Support Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              Empowering Cooperatives Through <span className="text-blue-300">Technical Innovation</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
              Driving sustainable growth, improved product quality, and enhanced market competitiveness through specialized technical expertise.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Technology Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {techStats.map((stat) => (
            <div key={stat.id} className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8 text-center hover:shadow-xl hover:border-blue-200 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">{stat.value}</div>
              <p className="text-blue-800 font-semibold text-lg mb-2">{stat.label}</p>
              <p className="text-blue-600 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-3xl shadow-2xl p-12 text-center">
            <div className="flex items-center justify-center mb-8">
              <CpuChipIcon className="h-16 w-16 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-8">Our Technical Mission</h2>
            <p className="text-2xl md:text-3xl font-bold text-white italic leading-relaxed">
              "To empower cooperative societies through technical expertise, innovation, and resource optimization – enabling sustainable growth, improved product quality, and enhanced market competitiveness."
            </p>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="bg-white rounded-2xl shadow-lg border border-blue-100 mb-12 overflow-hidden">
          <nav className="flex flex-wrap">
            {[
              { id: 'overview', label: 'Overview', icon: <ChartBarIcon className="h-5 w-5" /> },
              { id: 'food-tech', label: 'Food Technology', icon: <BeakerIcon className="h-5 w-5" /> },
              { id: 'auto-tech', label: 'Automobile Tech', icon: <WrenchScrewdriverIcon className="h-5 w-5" /> },
              { id: 'internship', label: 'Internship Program', icon: <AcademicCapIcon className="h-5 w-5" /> },
              { id: 'projects', label: 'Key Projects', icon: <LightBulbIcon className="h-5 w-5" /> }
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
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Technical Unit Overview</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <p className="text-blue-700 text-lg mb-6 leading-relaxed">
                      The Technical Unit at NCDB is dedicated to providing specialized technical support to cooperative societies across multiple sectors. Our focus areas include food technology, automobile technology, and sustainable farming practices, all aimed at enhancing productivity, quality, and profitability for cooperatives.
                    </p>
                    <p className="text-blue-700 text-lg leading-relaxed">
                      Through our comprehensive programs and hands-on support, we help cooperative societies optimize their resources, develop new products, reactivate idle assets, and implement sustainable practices that drive long-term growth and market competitiveness.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-blue-900 mb-6">Our Technical Expertise</h3>
                    <ul className="space-y-4">
                      {[
                        "Food processing and quality enhancement",
                        "Asset reactivation and maintenance",
                        "Sustainable farming technologies",
                        "Product development and innovation",
                        "Technical training and capacity building"
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

              {/* Technical Units Grid */}
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Technical Units</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg border border-blue-100 p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                    <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 mb-6">
                      <BeakerIcon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Food Technical Unit</h3>
                    <p className="text-blue-600 mb-6">Enhancing product quality, innovation, and market competitiveness for food cooperatives.</p>
                    <button
                      onClick={() => setActiveTab('food-tech')}
                      className="text-blue-700 hover:text-blue-900 font-semibold flex items-center group"
                    >
                      Learn More
                      <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  <div className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-lg border border-indigo-100 p-8 hover:shadow-xl hover:border-indigo-300 transition-all duration-300">
                    <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 mb-6">
                      <WrenchScrewdriverIcon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Automobile Technology Unit</h3>
                    <p className="text-blue-600 mb-6">Reactivating idle assets and optimizing resource utilization for cooperatives.</p>
                    <button
                      onClick={() => setActiveTab('auto-tech')}
                      className="text-indigo-700 hover:text-indigo-900 font-semibold flex items-center group"
                    >
                      Learn More
                      <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  <div className="bg-gradient-to-br from-white to-cyan-50 rounded-2xl shadow-lg border border-cyan-100 p-8 hover:shadow-xl hover:border-cyan-300 transition-all duration-300">
                    <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-700 mb-6">
                      <AcademicCapIcon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Internship Program</h3>
                    <p className="text-blue-600 mb-6">Developing future technical experts through hands-on training and practical experience.</p>
                    <button
                      onClick={() => setActiveTab('internship')}
                      className="text-cyan-700 hover:text-cyan-900 font-semibold flex items-center group"
                    >
                      Learn More
                      <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Food Technology Tab */}
          {activeTab === 'food-tech' && (
            <div className="space-y-12">
              <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Food Technical Unit</h2>
                <p className="text-blue-600 text-lg mb-8 max-w-3xl leading-relaxed">
                  The <span className="font-bold text-blue-700">Food Technical Unit</span> supports cooperative society-owned food factories by enhancing product quality, fostering innovation, and improving market competitiveness through technical expertise and capacity building.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
                    <h3 className="text-xl font-bold text-blue-900 mb-6">Key Focus Areas</h3>
                    <ul className="space-y-4">
                      {[
                        "Enhancing product quality through rigorous quality checks",
                        "Product innovation & development for market needs",
                        "Packaging & labeling improvements",
                        "Training & capacity building for cooperative societies",
                        "Paddy quality testing and rice-based product improvement",
                        "Support for local food items development"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircleIcon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                          <span className="text-blue-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-8 border border-indigo-100">
                    <h3 className="text-xl font-bold text-blue-900 mb-6">Joint Ventures & Projects</h3>
                    <div className="space-y-4">
                      {[
                        { name: "Coconut Oil Production", status: "Active Joint Venture" },
                        { name: "Rice Flour Production", status: "Active Joint Venture" },
                        { name: "Chilli Powder Processing", status: "Completed Project" },
                        { name: "Dairy Products Enhancement", status: "Ongoing Support" },
                        { name: "Palmyrah Related Products", status: "Development Phase" }
                      ].map((project, index) => (
                        <div key={index} className="flex justify-between items-center p-4 bg-white rounded-lg border border-blue-100">
                          <span className="font-medium text-blue-800">{project.name}</span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.status.includes("Active") ? "bg-green-100 text-green-800" :
                            project.status.includes("Completed") ? "bg-blue-100 text-blue-800" :
                              project.status.includes("Ongoing") ? "bg-amber-100 text-amber-800" :
                                "bg-purple-100 text-purple-800"
                            }`}>
                            {project.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Innovative Products */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-6">Innovative Products Developed</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {foodProducts.slice(0, 5).map((product) => (
                      <div key={product.id} className="bg-white border border-blue-100 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                        <div className="h-12 w-12 mx-auto bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg mb-3">
                          {product.name.charAt(0)}
                        </div>
                        <h4 className="font-semibold text-blue-800 text-sm">{product.name}</h4>
                        <p className="text-blue-600 text-xs mt-1">{product.category}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-white">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-6 md:mb-0 md:mr-8">
                      <h3 className="text-2xl font-bold mb-4">Quality Testing Services</h3>
                      <p className="text-blue-100 text-lg">
                        Our unit provides comprehensive quality testing for paddy, rice-based products, and other local food items to ensure market standards and certification compliance.
                      </p>
                    </div>
                    <button className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
                      Request Testing
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Automobile Technology Tab */}
          {activeTab === 'auto-tech' && (
            <div className="space-y-12">
              <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Automobile Technology Unit</h2>

                <p className="text-blue-600 text-lg mb-8 max-w-3xl leading-relaxed">
                  The <span className="font-bold text-blue-700">Automobile Technology Unit</span> ensures optimal use of cooperative assets by reactivating idle machinery and vehicles, providing efficient asset management solutions, and generating rental income for owner societies.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                  {automobileAchievements.map((achievement) => (
                    <div key={achievement.id} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg border border-blue-100 p-8 text-center hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 mb-6 mx-auto">
                        {achievement.icon}
                      </div>
                      <div className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">{achievement.count}</div>
                      <h3 className="text-xl font-bold text-blue-900 mb-2">{achievement.type}s</h3>
                      <p className="text-blue-600">{achievement.description}</p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-6">Our Approach</h3>
                    <div className="space-y-6">
                      {[
                        {
                          title: "Asset Reactivation",
                          description: "Repairing unused machinery and vehicles belonging to cooperative societies to restore functionality.",
                          icon: "🔧"
                        },
                        {
                          title: "Asset Management",
                          description: "Returning repaired equipment to original societies or transferring them to other societies on rental agreements.",
                          icon: "🔄"
                        },
                        {
                          title: "Income Generation",
                          description: "Ensuring rental income benefits the owner society through strategic asset placement.",
                          icon: "💰"
                        }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start">
                          <div className="text-3xl mr-4">{item.icon}</div>
                          <div>
                            <h4 className="text-lg font-bold text-blue-900 mb-2">{item.title}</h4>
                            <p className="text-blue-600">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-6">Success Stories</h3>
                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
                      <div className="flex items-start mb-6">
                        <div className="bg-blue-100 text-blue-600 rounded-xl p-3 mr-4">
                          <CheckCircleIcon className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-blue-900">Tractor Reactivation</h4>
                          <p className="text-blue-600 mt-2">Reactivated 5 idle tractors for agricultural cooperatives, increasing farming productivity by 40%.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-blue-100 text-blue-600 rounded-xl p-3 mr-4">
                          <CheckCircleIcon className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-blue-900">Rice Mill Restoration</h4>
                          <p className="text-blue-600 mt-2">Restored 3 rice milling machines, enabling a cooperative to process 2 tons of paddy daily.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-white">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-6 md:mb-0 md:mr-8">
                      <h3 className="text-2xl font-bold mb-4">Asset Management Services</h3>
                      <p className="text-blue-100 text-lg">
                        Need help with idle machinery or vehicles? Contact our Automobile Technology Unit for assessment and reactivation services to optimize your cooperative's assets.
                      </p>
                    </div>
                    <button className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
                      Request Assessment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Internship Program Tab */}
          {activeTab === 'internship' && (
            <div className="space-y-12">
              <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Internship Program</h2>

                <p className="text-blue-600 text-lg mb-8 max-w-3xl leading-relaxed">
                  The <span className="font-bold text-blue-700">Internship Program</span> develops future technical experts by recruiting students from various technical fields for 6-month internships, providing hands-on experience and contributing to cooperative development.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 text-white text-center">
                    <div className="text-4xl font-bold mb-2">{currentInternshipStats.totalCompleted}</div>
                    <h3 className="font-bold mb-2">Students Completed</h3>
                    <p className="text-blue-100 text-sm">Total interns trained</p>
                  </div>

                  <div className="bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl p-8 text-white text-center">
                    <div className="text-4xl font-bold mb-2">{currentInternshipStats.currentActive}</div>
                    <h3 className="font-bold mb-2">Currently Active</h3>
                    <p className="text-indigo-100 text-sm">Ongoing internships</p>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-2xl p-8 text-white text-center">
                    <div className="text-4xl font-bold mb-2">3</div>
                    <h3 className="font-bold mb-2">Technical Fields</h3>
                    <p className="text-cyan-100 text-sm">Specialized areas</p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl p-8 text-white text-center">
                    <div className="text-4xl font-bold mb-2">6</div>
                    <h3 className="font-bold mb-2">Months Duration</h3>
                    <p className="text-purple-100 text-sm">Per internship program</p>
                  </div>
                </div>

                {/* Program Details */}
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Program Details by Field</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  {internshipPrograms.map((program) => (
                    <div key={program.id} className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg border border-blue-100 p-8 hover:shadow-xl transition-shadow">
                      <div className={`h-2 w-full rounded-t-lg mb-6 ${program.field === "Food Technology" ? "bg-gradient-to-r from-blue-500 to-blue-700" :
                        program.field === "Green Farming Technology" ? "bg-gradient-to-r from-green-500 to-green-700" :
                          "bg-gradient-to-r from-indigo-500 to-indigo-700"
                        }`}></div>
                      <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-blue-50 mb-6 mx-auto">
                        {program.icon}
                      </div>
                      <h4 className="text-xl font-bold text-blue-900 mb-4 text-center">{program.field}</h4>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-blue-600">
                          <AcademicCapIcon className="h-5 w-5 mr-2" />
                          <span>Duration: {program.duration}</span>
                        </div>
                        <div className="flex items-center text-blue-600">
                          <UserGroupIcon className="h-5 w-5 mr-2" />
                          <span>Students: {program.students} completed</span>
                        </div>
                      </div>
                      <p className="text-blue-700 mb-4"><span className="font-semibold">Focus:</span> {program.focus}</p>
                      <p className="text-blue-700"><span className="font-semibold">Achievements:</span> {program.achievements}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-white">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-6 md:mb-0 md:mr-8">
                      <h3 className="text-2xl font-bold mb-4">Join Our Internship Program</h3>
                      <p className="text-blue-100 text-lg">
                        Are you a student in Food Technology, Green Farming, or Automobile Technology? Apply for our 6-month internship program and gain practical experience while contributing to cooperative development and community empowerment.
                      </p>
                    </div>
                    <button className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Key Projects Tab */}
          {activeTab === 'projects' && (
            <div className="space-y-12">
              <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Key Projects & Support Areas</h2>

                <div className="mb-12">
                  <h3 className="text-2xl font-bold text-blue-900 mb-6">Ongoing & Completed Projects</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {keyProjects.map((project) => (
                      <div key={project.id} className="bg-gradient-to-br from-white to-blue-50 rounded-2xl border border-blue-100 p-6 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <div className="text-2xl mr-3">{project.icon}</div>
                            <h4 className="text-lg font-bold text-blue-900">{project.name}</h4>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === "Active" ? "bg-green-100 text-green-800" :
                            project.status === "Ongoing" ? "bg-blue-100 text-blue-800" :
                              "bg-gray-100 text-gray-800"
                            }`}>
                            {project.status}
                          </span>
                        </div>
                        <p className="text-blue-600 text-sm mb-4">Area: {project.area}</p>
                        <div className="flex items-center text-blue-500 text-sm">
                          <ClockIcon className="h-4 w-4 mr-1" />
                          <span>Last updated: June 2024</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-white">
                  <div className="flex flex-col md:flex-row items-start justify-between">
                    <div className="mb-6 md:mb-0 md:mr-8">
                      <h3 className="text-2xl font-bold mb-4">Green Farming Initiatives</h3>
                      <p className="text-blue-100 text-lg mb-4">
                        Our Green Farming interns have implemented sustainable practices including charcoal compost, vermicompost, and organic pesticides for farmers' cooperative societies, promoting eco-friendly agricultural solutions.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <span className="bg-blue-500/30 px-3 py-1 rounded-full text-sm">Charcoal Compost</span>
                        <span className="bg-blue-500/30 px-3 py-1 rounded-full text-sm">Vermicompost</span>
                        <span className="bg-blue-500/30 px-3 py-1 rounded-full text-sm">Organic Pesticides</span>
                        <span className="bg-blue-500/30 px-3 py-1 rounded-full text-sm">Sustainable Farming</span>
                      </div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-6 text-center">
                      <div className="text-4xl font-bold mb-2">8</div>
                      <p className="text-blue-100">Green Farming Interns Trained</p>
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

export default Technology;