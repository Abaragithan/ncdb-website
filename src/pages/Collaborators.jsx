import React, { useState } from 'react';
import {
  BuildingOfficeIcon,
  GlobeAltIcon,
  ChartBarIcon,
  UserGroupIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import { Handshake } from '@mui/icons-material';

const Collaborators = () => {
  const [activeTab, setActiveTab] = useState('partners');

  const collaborators = [
    {
      name: "Bank of Ceylon",
      role: "Loan Disbursement Partner",
      image: "/images/boc1.jpg",
      website: "https://www.boc.lk",
      description: "Sri Lanka's largest state-owned commercial bank",
      partnershipAreas: ["Loan Syndication", "Fund Transfer", "Infrastructure Development"]
    },
    {
      name: "National Development Bank (NDB)",
      role: "Microfinance Support Partner",
      image: "/images/NDB.jpg",
      website: "https://www.ndbbank.com",
      description: "Leading development bank supporting SME growth",
      partnershipAreas: ["SME Financing", "Technical Assistance", "Capacity Building"]
    },
    {
      name: "Samurdhi Authority",
      role: "Government Financial Assistance",
      image: "/images/samurdhi.jpg",
      website: "https://www.samurdhi.gov.lk",
      description: "National poverty alleviation program",
      partnershipAreas: ["Social Welfare", "Community Development", "Livelihood Support"]
    },
    {
      name: "World Bank",
      role: "International Development Funding",
      image: "/images/world.png",
      website: "https://www.worldbank.org",
      description: "Global financial institution for development projects",
      partnershipAreas: ["Project Funding", "Technical Expertise", "Research Collaboration"]
    },
    {
      name: "United Nations Development Programme (UNDP)",
      role: "Community Economic Growth Partner",
      image: "/images/UNDP.webp",
      website: "https://www.undp.org",
      description: "United Nations' global development network",
      partnershipAreas: ["Sustainable Development", "Capacity Building", "Innovation Support"]
    },
    {
      name: "Microfinance Institutions of Sri Lanka",
      role: "SME Loan Assistance",
      description: "Network of microfinance institutions across Sri Lanka",
      website: "https://www.microfinance.lk",
      partnershipAreas: ["Micro Credit", "Entrepreneurship", "Rural Finance"]
    },
  ];

  const partnershipStats = [
    { id: 1, value: "₹500+ Cr", label: "Joint Funding Deployed", description: "Collaborative financial resources" },
    { id: 2, value: "200+", label: "Joint Projects", description: "Successful collaborations" },
    { id: 3, value: "15+", label: "Years of Partnership", description: "Long-term relationships" },
    { id: 4, value: "100K+", label: "Beneficiaries Reached", description: "Community impact" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/80 z-10"></div>
        <img
          src="/images/col2.jpg"
          alt="Collaborators"
          className="w-full h-full object-cover"
        />

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Handshake className="h-5 w-5 text-white" />
              <span className="text-white text-sm font-medium">Partnerships & Collaborations</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              Building <span className="text-blue-300">Strategic Partnerships</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
              Collaborating with leading institutions to deliver comprehensive financial solutions and drive sustainable development across Northern Sri Lanka.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Partnership Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {partnershipStats.map((stat) => (
            <div key={stat.id} className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8 text-center hover:shadow-xl hover:border-blue-200 transition-all duration-300">
              <div className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">{stat.value}</div>
              <p className="text-blue-800 font-semibold text-lg mb-2">{stat.label}</p>
              <p className="text-blue-600 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Tabs Navigation */}
        <div className="bg-white rounded-2xl shadow-lg border border-blue-100 mb-12 overflow-hidden">
          <nav className="flex flex-wrap">
            {[
              { id: 'partners', label: 'Our Partners', icon: <BuildingOfficeIcon className="h-5 w-5" /> },
              { id: 'impact', label: 'Partnership Impact', icon: <ChartBarIcon className="h-5 w-5" /> },
              { id: 'opportunities', label: 'Collaboration Opportunities', icon: <Handshake className="h-5 w-5" /> }
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
          {/* Partners Tab */}
          {activeTab === 'partners' && (
            <div className="space-y-12">
              <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Our Strategic Partners</h2>
                <p className="text-blue-600 text-lg mb-12 max-w-3xl">
                  NCDB collaborates with leading financial institutions, government organizations, and international development agencies to deliver comprehensive financial solutions and drive economic growth in Sri Lanka's Northern Province.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {collaborators.map((partner, index) => (
                    <div key={index} className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                      <div className="p-8">
                        <div className="flex items-start mb-6">
                          <div className="flex-shrink-0 mr-6">
                            {partner.image ? (
                              <img
                                src={partner.image}
                                alt={partner.name}
                                className="w-20 h-20 object-contain rounded-lg"
                              />
                            ) : (
                              <div className="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center">
                                <BuildingOfficeIcon className="h-10 w-10 text-blue-600" />
                              </div>
                            )}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-blue-900 mb-2">{partner.name}</h3>
                            <p className="text-blue-600 text-sm">{partner.role}</p>
                          </div>
                        </div>

                        <p className="text-blue-700 mb-6 text-sm">{partner.description}</p>

                        <div className="mb-6">
                          <h4 className="font-semibold text-blue-900 mb-3">Partnership Areas:</h4>
                          <div className="flex flex-wrap gap-2">
                            {partner.partnershipAreas.map((area, idx) => (
                              <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                                {area}
                              </span>
                            ))}
                          </div>
                        </div>

                        <a
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-blue-700 hover:text-blue-900 font-semibold group"
                        >
                          Visit Website
                          <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Impact Tab */}
          {activeTab === 'impact' && (
            <div className="space-y-12">
              <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Partnership Impact</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 text-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 mb-6 mx-auto">
                      <ChartBarIcon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Financial Access</h3>
                    <p className="text-blue-600">Expanding loan accessibility and financial services to underserved communities through collaborative initiatives.</p>
                  </div>

                  <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl p-8 text-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 mb-6 mx-auto">
                      <UserGroupIcon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Economic Growth</h3>
                    <p className="text-blue-600">Supporting small enterprises and promoting sustainable business development through strategic partnerships.</p>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-50 to-white rounded-2xl p-8 text-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-700 mb-6 mx-auto">
                      <ShieldCheckIcon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Community Impact</h3>
                    <p className="text-blue-600">Building financial literacy and empowering local communities for long-term prosperity through collaborative programs.</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-white">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-6">Success Stories</h3>
                      <div className="space-y-4">
                        {[
                          "Joint microfinance program reaching 50,000+ rural entrepreneurs",
                          "Agricultural development project increasing crop yields by 40%",
                          "Women entrepreneurship initiative creating 2,000+ new businesses",
                          "Youth employment program providing skills training to 5,000+ individuals"
                        ].map((story, index) => (
                          <div key={index} className="flex items-start">
                            <CheckCircleIcon className="h-6 w-6 text-blue-300 mr-3 flex-shrink-0" />
                            <span className="text-blue-100">{story}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                      <h4 className="text-xl font-bold mb-6">Partnership Metrics</h4>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span>Project Completion</span>
                            <span className="font-bold">95%</span>
                          </div>
                          <div className="w-full bg-white/20 rounded-full h-2">
                            <div className="bg-blue-300 h-2 rounded-full" style={{ width: '95%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span>Beneficiary Satisfaction</span>
                            <span className="font-bold">92%</span>
                          </div>
                          <div className="w-full bg-white/20 rounded-full h-2">
                            <div className="bg-blue-300 h-2 rounded-full" style={{ width: '92%' }}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span>Funding Utilization</span>
                            <span className="font-bold">98%</span>
                          </div>
                          <div className="w-full bg-white/20 rounded-full h-2">
                            <div className="bg-blue-300 h-2 rounded-full" style={{ width: '98%' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Opportunities Tab */}
          {activeTab === 'opportunities' && (
            <div className="space-y-12">
              <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Collaboration Opportunities</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <p className="text-blue-600 text-lg mb-6 leading-relaxed">
                      We are always looking for new partners to collaborate on innovative projects that support cooperative development and community empowerment.
                    </p>

                    <div className="space-y-6">
                      <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-100">
                        <h4 className="text-lg font-bold text-blue-900 mb-4">Research Partnerships</h4>
                        <p className="text-blue-600 mb-4">Collaborate on research projects focusing on cooperative development, rural finance, and sustainable agriculture.</p>
                        <button className="text-blue-700 hover:text-blue-900 font-semibold flex items-center group">
                          Submit Research Proposal
                          <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>

                      <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-6 border border-indigo-100">
                        <h4 className="text-lg font-bold text-blue-900 mb-4">Funding Partnerships</h4>
                        <p className="text-blue-600 mb-4">Join us in funding innovative projects that create sustainable impact in cooperative communities.</p>
                        <button className="text-indigo-700 hover:text-indigo-900 font-semibold flex items-center group">
                          Explore Funding Opportunities
                          <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>

                      <div className="bg-gradient-to-br from-cyan-50 to-white rounded-xl p-6 border border-cyan-100">
                        <h4 className="text-lg font-bold text-blue-900 mb-4">Technical Partnerships</h4>
                        <p className="text-blue-600 mb-4">Share technical expertise in areas such as agricultural technology, financial systems, and digital solutions.</p>
                        <button className="text-cyan-700 hover:text-cyan-900 font-semibold flex items-center group">
                          Propose Technical Collaboration
                          <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
                    <h3 className="text-2xl font-bold mb-6">Become a Partner</h3>
                    <p className="text-blue-100 mb-6">
                      Interested in collaborating with NCDB? We welcome partnerships with organizations that share our commitment to cooperative development and community empowerment.
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-center">
                        <CheckCircleIcon className="h-6 w-6 text-blue-300 mr-3" />
                        <span>Align with our mission and values</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircleIcon className="h-6 w-6 text-blue-300 mr-3" />
                        <span>Bring complementary expertise or resources</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircleIcon className="h-6 w-6 text-blue-300 mr-3" />
                        <span>Commit to measurable impact</span>
                      </div>
                    </div>

                    <button className="w-full bg-white text-blue-700 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02]">
                      Contact Partnership Team
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

export default Collaborators;