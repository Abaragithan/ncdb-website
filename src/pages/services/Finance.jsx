import React, { useState } from 'react';
import {
  BanknotesIcon,
  ChartBarIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  CalculatorIcon,
  CurrencyDollarIcon,
  DocumentChartBarIcon,
  DocumentMagnifyingGlassIcon,
  AcademicCapIcon,
  BriefcaseIcon
} from '@heroicons/react/24/outline';

const Finance = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Finance department team data
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      position: "Finance Director",
      department: "Finance Department",
      experience: "15+ years in banking and finance",
      education: "MBA in Finance, CPA",
      bio: "Leads financial strategy and oversees all finance operations. Extensive experience in cooperative banking and regulatory compliance.",
      expertise: ["Strategic Planning", "Regulatory Compliance", "Risk Management"]
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      position: "Financial Controller",
      department: "Finance Department",
      experience: "12 years in financial management",
      education: "Masters in Accounting, CMA",
      bio: "Manages financial reporting, budgeting, and compliance. Ensures accuracy and transparency in all financial statements.",
      expertise: ["Financial Reporting", "Budgeting", "Compliance"]
    },
    {
      id: 3,
      name: "David Chen",
      position: "Treasury Manager",
      department: "Finance Department",
      experience: "10 years in treasury operations",
      education: "BS in Finance, CFA Level III",
      bio: "Oversees liquidity management, investments, and fund allocation. Focuses on optimizing financial performance.",
      expertise: ["Treasury Management", "Investments", "Liquidity"]
    },
    {
      id: 4,
      name: "Sarah Williams",
      position: "Financial Analyst",
      department: "Finance Department",
      experience: "8 years in financial analysis",
      education: "MS in Financial Engineering",
      bio: "Provides insights and analyses for strategic decision-making. Specializes in risk assessment and cost optimization.",
      expertise: ["Financial Analysis", "Risk Assessment", "Cost Optimization"]
    }
  ];

  // Reports data
  const reports = [
    { id: 1, title: "Annual Financial Report 2023", type: "PDF", size: "4.2 MB", date: "March 15, 2024" },
    { id: 2, title: "Q1 Financial Statements 2024", type: "PDF", size: "2.1 MB", date: "April 30, 2024" },
    { id: 3, title: "Investor Presentation Q1 2024", type: "PPT", size: "5.7 MB", date: "May 10, 2024" },
    { id: 4, title: "Regulatory Compliance Report", type: "PDF", size: "3.8 MB", date: "February 28, 2024" },
    { id: 5, title: "Annual Budget Plan 2024", type: "PDF", size: "3.5 MB", date: "December 15, 2023" },
    { id: 6, title: "Sustainability & CSR Report", type: "PDF", size: "6.2 MB", date: "June 5, 2024" }
  ];

  // Policies data
  const policies = [
    { id: 1, title: "Financial Governance Policy", category: "Governance", lastUpdated: "Jan 2024", icon: <ShieldCheckIcon className="h-6 w-6" /> },
    { id: 2, title: "Risk Management Framework", category: "Risk", lastUpdated: "Mar 2024", icon: <ChartBarIcon className="h-6 w-6" /> },
    { id: 3, title: "Investment Policy Statement", category: "Investment", lastUpdated: "Feb 2024", icon: <CurrencyDollarIcon className="h-6 w-6" /> },
    { id: 4, title: "Compliance & Ethics Policy", category: "Compliance", lastUpdated: "Dec 2023", icon: <DocumentChartBarIcon className="h-6 w-6" /> },
    { id: 5, title: "Budget Control Procedures", category: "Operations", lastUpdated: "Nov 2023", icon: <CalculatorIcon className="h-6 w-6" /> },
    { id: 6, title: "Financial Disclosure Standards", category: "Transparency", lastUpdated: "Jan 2024", icon: <DocumentMagnifyingGlassIcon className="h-6 w-6" /> }
  ];

  // Contact information
  const contactInfo = {
    phone: "+94 212 232 673",
    email: "finance@ncdb.coop",
    address: "Elders Home Complex, Kandy Road, Kaithady, Jaffna 40000",
    hours: "Monday - Friday: 9:00 AM - 5:00 PM",
    inquiryEmail: "inquiries.finance@ncdb.coop"
  };

  // Key financial metrics
  const financialMetrics = [
    { id: 1, metric: "₹500+ Cr", label: "Assets Under Management", icon: "💼" },
    { id: 2, metric: "1200+", label: "Societies Served", icon: "🏦" },
    { id: 3, metric: "99.8%", label: "Audit Compliance", icon: "✅" },
    { id: 4, metric: "25+", label: "Years of Excellence", icon: "⭐" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/80 z-10"></div>
        <img
          src="/images/finance.jpg"
          alt="Finance Department"
          className="w-full h-full object-cover"
        />

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <BanknotesIcon className="h-5 w-5 text-white" />
              <span className="text-white text-sm font-medium">Financial Services Department</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              Financial Stewardship for <span className="text-blue-300">Sustainable Growth</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
              Driving NCDB's financial stability, growth, and long-term sustainability through transparency, innovation, and fiscal responsibility.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Financial Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {financialMetrics.map((item) => (
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
              <BanknotesIcon className="h-16 w-16 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-8">Our Financial Mission</h2>
            <p className="text-2xl md:text-3xl font-bold text-white italic leading-relaxed">
              "To be the most trusted financial partner for cooperative societies and communities, ensuring sustainable growth through transparency, innovation, and fiscal responsibility."
            </p>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="bg-white rounded-2xl shadow-lg border border-blue-100 mb-12 overflow-hidden">
          <nav className="flex flex-wrap">
            {[
              { id: 'overview', label: 'Overview', icon: <BanknotesIcon className="h-5 w-5" /> },
              { id: 'responsibilities', label: 'Responsibilities', icon: <BriefcaseIcon className="h-5 w-5" /> },
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
                <h2 className="text-3xl font-bold text-blue-900 mb-8">About the Finance Department</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <p className="text-blue-700 text-lg mb-6 leading-relaxed">
                      The Finance Department at NCDB plays a critical role in driving the bank's financial stability, growth, and long-term sustainability. It is responsible for managing the bank's resources, ensuring regulatory compliance, maintaining transparency, and providing accurate and timely financial information to support strategic decision-making.
                    </p>
                    <p className="text-blue-700 text-lg leading-relaxed">
                      Our Finance team operates as the backbone of NCDB, overseeing budgeting, forecasting, financial reporting, treasury management, investment decisions, and cost control. We ensure that every financial activity aligns with the bank's mission of empowering cooperative societies and strengthening community-based development.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-blue-900 mb-6">Core Principles</h3>
                    <ul className="space-y-4">
                      {[
                        "Transparency in all financial operations",
                        "Prudent risk management and compliance",
                        "Strategic resource allocation",
                        "Sustainable financial growth",
                        "Stakeholder value creation"
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
                <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Key Financial Functions</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg border border-blue-100 p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                    <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 mb-6">
                      <CurrencyDollarIcon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Treasury Management</h3>
                    <p className="text-blue-600">Optimizing liquidity, investments, and fund allocation for maximum financial performance.</p>
                  </div>

                  <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-lg border border-indigo-100 p-8 hover:shadow-xl hover:border-indigo-300 transition-all duration-300">
                    <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 mb-6">
                      <ChartBarIcon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Financial Reporting</h3>
                    <p className="text-blue-600">Accurate and transparent financial statements and compliance reporting.</p>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-50 to-white rounded-2xl shadow-lg border border-cyan-100 p-8 hover:shadow-xl hover:border-cyan-300 transition-all duration-300">
                    <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-700 mb-6">
                      <ShieldCheckIcon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Risk & Compliance</h3>
                    <p className="text-blue-600">Ensuring adherence to all financial regulations and risk management protocols.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Responsibilities Tab */}
          {activeTab === 'responsibilities' && (
            <div className="space-y-12">
              <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Key Functions of the Finance Department</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Financial Planning & Budgeting",
                      description: "Preparing annual budgets and aligning them with organisational goals.",
                      icon: <CalculatorIcon className="h-8 w-8 text-blue-600" />,
                      color: "blue"
                    },
                    {
                      title: "Financial Reporting",
                      description: "Timely preparation and presentation of financial statements, MIS reports, and compliance reports.",
                      icon: <DocumentChartBarIcon className="h-8 w-8 text-blue-600" />,
                      color: "indigo"
                    },
                    {
                      title: "Treasury & Fund Management",
                      description: "Managing liquidity, investments, and reserves for optimal performance.",
                      icon: <CurrencyDollarIcon className="h-8 w-8 text-blue-600" />,
                      color: "cyan"
                    },
                    {
                      title: "Regulatory Compliance",
                      description: "Ensuring adherence to all financial and cooperative banking regulations.",
                      icon: <ShieldCheckIcon className="h-8 w-8 text-blue-600" />,
                      color: "blue"
                    },
                    {
                      title: "Cost & Risk Management",
                      description: "Identifying cost efficiencies and mitigating financial risks.",
                      icon: <ChartBarIcon className="h-8 w-8 text-blue-600" />,
                      color: "indigo"
                    },
                    {
                      title: "Strategic Growth Support",
                      description: "Providing financial insights for new initiatives and investments.",
                      icon: <BriefcaseIcon className="h-8 w-8 text-blue-600" />,
                      color: "cyan"
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg border border-blue-100 p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                      <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-blue-50 mb-6">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-blue-900 mb-4">{item.title}</h3>
                      <p className="text-blue-600">{item.description}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-6">Our Commitment</h3>
                  <p className="text-blue-700 text-lg leading-relaxed">
                    The Finance Department is committed to upholding the highest standards of financial integrity and transparency. We continuously work to optimize resource allocation, manage risks effectively, and provide the financial insights necessary for NCDB to fulfill its mission of empowering cooperative societies and communities.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Team Tab */}
          {activeTab === 'team' && (
            <div className="space-y-12">
              <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Meet Our Finance Team</h2>
                <p className="text-blue-600 text-lg mb-12 max-w-3xl">
                  Our experienced finance professionals bring together diverse expertise in banking, accounting, treasury management, and financial analysis to drive NCDB's success.
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
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Reports & Publications</h2>
                <p className="text-blue-600 text-lg mb-8 max-w-3xl">
                  Access our latest financial reports, statements, and publications. All documents are available for download in PDF format.
                </p>

                <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg border border-blue-100 overflow-hidden mb-12">
                  <div className="px-8 py-6 bg-blue-50 border-b border-blue-100">
                    <h3 className="text-lg font-semibold text-blue-900">Latest Financial Reports</h3>
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
                      <h3 className="text-2xl font-bold mb-4">Investor Relations</h3>
                      <p className="text-blue-100 text-lg max-w-2xl">For investor-specific information and detailed financial data, please visit our Investor Relations portal or contact our investor relations team.</p>
                    </div>
                    <button className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
                      Investor Portal
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Policies & Compliance Tab */}
          {activeTab === 'policies' && (
            <div className="space-y-12">
              <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Policies & Compliance</h2>
                <p className="text-blue-600 text-lg mb-8 max-w-3xl">
                  NCDB maintains rigorous financial policies and governance standards to ensure transparency, accountability, and regulatory compliance.
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
                      <p className="text-blue-600 mb-6">Detailed policy outlining procedures, standards, and compliance requirements for {policy.category.toLowerCase()} operations.</p>
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
                      <h3 className="text-2xl font-bold text-blue-900 mb-6">Compliance Updates</h3>
                      <p className="text-blue-700 text-lg mb-4">
                        NCDB is fully compliant with all regulatory requirements as of June 2024. Our most recent regulatory audit was completed successfully in May 2024 with zero critical findings.
                      </p>
                      <p className="text-blue-600 mb-6">
                        For the latest compliance updates, subscribe to our regulatory newsletter.
                      </p>
                      <button className="bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02]">
                        Subscribe to Updates
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
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Contact the Finance Department</h2>
                <p className="text-blue-600 text-lg mb-12 max-w-3xl">
                  Get in touch with our Finance team for inquiries, support, or additional information. We're here to help with all your financial matters.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                  <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg border border-blue-100 p-8 text-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 mb-6 mx-auto">
                      <PhoneIcon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Phone</h3>
                    <p className="text-blue-700 text-xl font-semibold mb-2">{contactInfo.phone}</p>
                    <p className="text-blue-500">For general inquiries and support</p>
                  </div>

                  <div className="bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-lg border border-indigo-100 p-8 text-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 mb-6 mx-auto">
                      <EnvelopeIcon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-4">Email</h3>
                    <p className="text-blue-700 text-lg font-semibold mb-2">{contactInfo.email}</p>
                    <p className="text-blue-500 text-sm">For detailed inquiries: {contactInfo.inquiryEmail}</p>
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
                    <h3 className="text-3xl font-bold mb-6">Have a Specific Inquiry?</h3>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                      Fill out our contact form and a member of our Finance team will get back to you within 24-48 hours with detailed assistance.
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
  )
}

export default Finance