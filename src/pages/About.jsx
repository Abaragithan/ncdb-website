import { useState } from "react";
import {
  EyeIcon,
  RocketLaunchIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  GlobeAltIcon,
  HeartIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import DepartmentLayout from '../components/layout/DepartmentLayout';
import ContentTabs from '../components/common/ContentTabs';
import InfoCards from '../components/common/InfoCards';
import Board from '../components/about/Board';

const About = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const heroConfig = {
    title: "Empowering Communities Through",
    description: "For decades, we've been at the forefront of cooperative banking, driving sustainable development and economic growth across Northern Sri Lanka.",
    imageSrc: "/images/aboutus.jpg",
    badgeIcon: BuildingOfficeIcon,
    badgeText: "About NCDB",
    highlightText: "Cooperative Banking"
  };

  const metrics = [
    { id: 1, metric: "1200+", label: "Member Societies", icon: "🤝" },
    { id: 2, metric: "LKR500+ Cr", label: "Assets Managed", icon: "💰" },
    { id: 3, metric: "50+", label: "Branches", icon: "🏢" },
    { id: 4, metric: "25+", label: "Years of Service", icon: "📅" }
  ];

  const missionConfig = {
    mission: "To become the premier cooperative banking institution in South Asia, recognized for empowering communities through innovative financial solutions and sustainable development initiatives.",
    icon: EyeIcon,
    title: "Our Vision"
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <BuildingOfficeIcon className="h-5 w-5" /> },
    { id: 'vision_mission', label: 'Vision & Mission', icon: <EyeIcon className="h-5 w-5" /> },
    { id: 'international', label: 'International Network', icon: <GlobeAltIcon className="h-5 w-5" /> },
    { id: 'team', label: 'Our Team', icon: <UserGroupIcon className="h-5 w-5" /> }
  ];

  const coreValues = [
    {
      title: "Integrity",
      description: "Upholding the highest ethical standards in all our operations",
      icon: <ShieldCheckIcon className="h-8 w-8 text-white" />
    },
    {
      title: "Innovation",
      description: "Continuously evolving to meet changing community needs",
      icon: <LightBulbIcon className="h-8 w-8 text-white" />
    },
    {
      title: "Inclusion",
      description: "Ensuring financial access for all community members",
      icon: <UserGroupIcon className="h-8 w-8 text-white" />
    },
    {
      title: "Impact",
      description: "Creating measurable positive change in communities",
      icon: <HeartIcon className="h-8 w-8 text-white" />
    }
  ];

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
      name: "Rural Bank of India",
      description: "Network of rural cooperative banks",
      impact: "200 million+ accounts"
    },
    {
      name: "Cooperative Bank of Rwanda",
      description: "Sustainable cooperative banking model",
      impact: "85% rural coverage"
    }
  ];

  return (
    <DepartmentLayout
      heroConfig={heroConfig}
      metrics={metrics}
      missionConfig={missionConfig}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {/* Custom tabs since DepartmentLayout doesn't pass tabs prop */}
      <ContentTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} columns={4} />

      {activeTab === 'overview' && (
        <div className="space-y-8 md:space-y-12">
          <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">About NCDB</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <p className="text-blue-700 text-base md:text-lg mb-6 leading-relaxed">
                  Northern Cooperative Development Bank (NCDB) is a pioneering financial institution dedicated to empowering cooperative societies and driving sustainable economic development across Northern Sri Lanka.
                </p>
                <p className="text-blue-700 text-base md:text-lg leading-relaxed">
                  Our institution operates on the fundamental principles of cooperation, mutual assistance, and community development. We provide comprehensive banking solutions, technical support, and capacity building programs.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl md:rounded-2xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-6">Our Impact</h3>
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 mb-2">1200+</div>
                    <div className="text-blue-800 font-semibold text-sm md:text-base">Member Societies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 mb-2">₹500+ Cr</div>
                    <div className="text-blue-800 font-semibold text-sm md:text-base">Assets Managed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 mb-2">50+</div>
                    <div className="text-blue-800 font-semibold text-sm md:text-base">Branches</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 mb-2">25+</div>
                    <div className="text-blue-800 font-semibold text-sm md:text-base">Years of Service</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8 text-center">Our Core Values</h2>
            <InfoCards cards={coreValues} columns={4} />
          </div>
        </div>
      )}

      {activeTab === 'vision_mission' && (
        <div className="space-y-8 md:space-y-12">
          <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-8 lg:p-12 text-white">
            <div className="flex items-center mb-6 md:mb-8">
              <EyeIcon className="h-8 w-8 md:h-12 md:w-12 text-blue-300 mr-3 md:mr-4" />
              <h2 className="text-2xl md:text-3xl font-bold">Our Vision</h2>
            </div>
            <p className="text-lg md:text-xl lg:text-2xl font-bold italic leading-relaxed mb-6 md:mb-8">
              "To become the premier cooperative banking institution in South Asia, recognized for empowering communities through innovative financial solutions and sustainable development initiatives."
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Strategic Objectives</h3>
              <ul className="space-y-2 md:space-y-3">
                {[
                  "Expand financial inclusion to reach 100% of rural communities",
                  "Develop innovative banking products for cooperative societies",
                  "Establish international cooperative banking partnerships",
                  "Achieve operational excellence and sustainability"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-blue-300 mr-2 md:mr-3 mt-2"></div>
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
            <div className="flex items-center mb-6 md:mb-8">
              <RocketLaunchIcon className="h-8 w-8 md:h-12 md:w-12 text-blue-600 mr-3 md:mr-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Our Mission</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              <div>
                <p className="text-blue-700 text-base md:text-lg leading-relaxed mb-6">
                  We are committed to delivering comprehensive financial solutions that foster economic growth, enhance social well-being, and promote sustainable development across the communities we serve.
                </p>
                <p className="text-blue-700 text-base md:text-lg leading-relaxed">
                  Our mission encompasses providing accessible banking services, developing innovative financial products, and building capacity within cooperative societies to create lasting positive impact.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl md:rounded-2xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-6">Mission Focus Areas</h3>
                <div className="space-y-3 md:space-y-4">
                  {[
                    "Financial Inclusion & Accessibility",
                    "Cooperative Capacity Building",
                    "Sustainable Economic Development",
                    "Community Empowerment",
                    "Innovative Banking Solutions"
                  ].map((area, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircleIcon className="h-5 w-5 md:h-6 md:w-6 text-blue-600 mr-2 md:mr-3 flex-shrink-0" />
                      <span className="text-blue-700 text-sm md:text-base">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'international' && (
        <div className="space-y-8 md:space-y-12">
          <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
            <div className="flex items-center mb-6 md:mb-8">
              <GlobeAltIcon className="h-8 w-8 md:h-12 md:w-12 text-blue-600 mr-3 md:mr-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900">International Cooperative Network</h2>
            </div>
            <p className="text-blue-600 text-base md:text-lg mb-6 md:mb-8 max-w-3xl">
              NCDB is part of a global network of cooperative banks working together to advance the cooperative movement and share best practices in community banking and sustainable development.
            </p>

            <div className="text-center mb-8 md:mb-12">
              <div className="inline-block">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-700 mb-3 md:mb-4">8</div>
                <p className="text-lg md:text-xl lg:text-2xl text-blue-800">International Cooperative Banks in Our Network</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {internationalCooperativeBanks.map((bank, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-blue-50 rounded-xl md:rounded-2xl shadow-lg border border-blue-100 p-4 md:p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-xl bg-blue-100 text-blue-600 font-bold text-base md:text-lg mb-3 md:mb-4">
                    {bank.name.charAt(0)}
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-blue-900 mb-2 md:mb-3">{bank.name}</h3>
                  <p className="text-blue-600 text-xs md:text-sm mb-2 md:mb-4">{bank.description}</p>
                  <div className="text-blue-700 text-xs md:text-sm font-semibold">
                    {bank.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'team' && (
        <div className="space-y-8 md:space-y-12">
          <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Our Leadership Team</h2>
            <p className="text-blue-600 text-base md:text-lg mb-6 md:mb-8 max-w-3xl">
              Meet the dedicated professionals who guide NCDB's strategic direction and ensure our commitment to cooperative banking excellence.
            </p>
            <Board />
          </div>
        </div>
      )}
    </DepartmentLayout>
  );
};

export default About;