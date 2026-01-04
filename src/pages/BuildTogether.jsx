import { useState } from 'react';
import {
  HeartIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  ArrowRightIcon,
  HandThumbUpIcon,
  BuildingLibraryIcon,
  ScaleIcon,
  BanknotesIcon,
  SparklesIcon,
  AcademicCapIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';
import { Favorite, Handshake } from '@mui/icons-material';
import DepartmentLayout from '../components/layout/DepartmentLayout';
import ContentTabs from '../components/common/ContentTabs';
import InfoCards from '../components/common/InfoCards';

// Content configuration - This would be fetched from WordPress API
const BUILD_TOGETHER_CONTENT = {
  pageTitle: "Build Together",

  hero: {
    title: "Shared Support for Lasting Livelihoods",
    description: "Contributions to NCDB strengthen cooperative societies, sustain livelihoods, and support community-led development through shared responsibility and solidarity.",
    imageSrc: "/images/donation-hero.jpg",
    badgeIcon: Favorite,
    badgeText: "Build Together",
    highlightText: "Shared Support"
  },

  metrics: [
    { id: 1, metric: "LKR100+ Cr", label: "Contributions Received", icon: "💰" },
    { id: 2, metric: "500+", label: "Community Projects Funded", icon: "🏗️" },
    { id: 3, metric: "50K+", label: "Livelihoods Supported", icon: "👨‍🌾" },
    { id: 4, metric: "100%", label: "Funds to Communities", icon: "🎯" }
  ],

  tabs: [
    { id: 'contribute', label: 'How to Contribute', icon: <CurrencyDollarIcon className="h-5 w-5" /> },
    { id: 'impact', label: 'Impact of Your Support', icon: <ChartBarIcon className="h-5 w-5" /> },
  ],

  // How to Contribute content
  contribute: {
    title: "How to Build Together",
    description: "Support for NCDB's work can be extended in different ways, reflecting collective responsibility and trust.",

    ways: [
      {
        title: "Contribute Funds",
        description: "Support cooperative programmes, livelihood initiatives, and community projects through direct financial contributions.",
        icon: <BanknotesIcon className="h-8 w-8 text-white" />,
        features: ["General Fund", "Specific Programmes", "Emergency Relief"],
        linkText: "Donate Now",
        linkTo: "/donate"
      },
      {
        title: "Support Specific Initiatives",
        description: "Target your support to specific sectors: agriculture, fisheries, dairy, palmyra, and rural industries.",
        icon: <SparklesIcon className="h-8 w-8 text-white" />,
        features: ["Agriculture", "Fisheries", "Dairy", "Palmyra"],
        linkText: "Choose Initiative",
        linkTo: "/initiatives"
      },
      {
        title: "Provide Technical Support",
        description: "Share your expertise aligned with cooperative development through knowledge transfer and technical assistance.",
        icon: <AcademicCapIcon className="h-8 w-8 text-white" />,
        features: ["Training", "Consulting", "Knowledge Sharing"],
        linkText: "Offer Expertise",
        linkTo: "/technical-support"
      },
      {
        title: "Partner in Collective Programmes",
        description: "Collaborate on programmes that strengthen cooperative capacity, resilience, and community development.",
        icon: <Handshake className="h-8 w-8 text-white" />,
        features: ["Joint Programmes", "Capacity Building", "Research Projects"],
        linkText: "Explore Partnerships",
        linkTo: "/partnerships"
      }
    ],

    process: {
      title: "Contribution Process",
      steps: [
        {
          step: "01",
          title: "Choose Your Support Type",
          description: "Select how you'd like to contribute - funds, specific initiative, technical support, or partnership."
        },
        {
          step: "02",
          title: "Contact Our Team",
          description: "Get in touch with our partnership team to discuss your contribution and its intended impact."
        },
        {
          step: "03",
          title: "Complete Contribution",
          description: "We'll guide you through the simple process to make your contribution official."
        },
        {
          step: "04",
          title: "Receive Regular Updates",
          description: "Get periodic reports on how your contribution is making a difference in communities."
        }
      ]
    }
  },

  // Impact of Your Support content
  impact: {
    title: "Impact of Your Support",
    description: "Every contribution, no matter the size, creates meaningful change in cooperative communities.",

    impactAreas: [
      {
        title: "Strengthened Livelihoods",
        description: "Your support helps cooperative members sustain and improve income-generating activities rooted in local production.",
        icon: <ArrowTrendingUpIcon className="h-8 w-8 text-white" />,
        metrics: ["10,000+ farmers supported", "40% income increase", "200+ new enterprises"]
      },
      {
        title: "Stronger Cooperative Institutions",
        description: "Contributions reinforce cooperative governance, shared systems, and collective capacity at the grassroots level.",
        icon: <BuildingLibraryIcon className="h-8 w-8 text-white" />,
        metrics: ["500+ societies strengthened", "100% transparent governance", "Improved financial systems"]
      },
      {
        title: "Food Security and Community Resilience",
        description: "Support enables stable food production, fair distribution, and resilience during crises and recovery periods.",
        icon: <ShieldCheckIcon className="h-8 w-8 text-white" />,
        metrics: ["50,000+ food secure households", "30% reduction in food waste", "Crisis-resistant systems"]
      },
      {
        title: "Inclusive Development",
        description: "Resources are directed towards women, youth, and small producers, ensuring fair participation and shared benefits.",
        icon: <ScaleIcon className="h-8 w-8 text-white" />,
        metrics: ["60% women participation", "Youth empowerment programmes", "Equal opportunity access"]
      },
      {
        title: "Long-Term Community Well-Being",
        description: "By working through cooperative structures, support creates lasting impact beyond individual assistance.",
        icon: <HeartIcon className="h-8 w-8 text-white" />,
        metrics: ["Sustainable development", "Community ownership", "Multi-generational impact"]
      }
    ],
  },
};

const BuildTogether = () => {
  const [activeTab, setActiveTab] = useState('contribute');
  const {
    hero,
    metrics,
    tabs,
    contribute,
    impact,
    stories
  } = BUILD_TOGETHER_CONTENT;

  return (
    <DepartmentLayout
      heroConfig={{
        title: hero.title,
        description: hero.description,
        imageSrc: hero.imageSrc,
        badgeIcon: hero.badgeIcon,
        badgeText: hero.badgeText,
        highlightText: hero.highlightText
      }}
      metrics={metrics}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      <ContentTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} columns={3} />

      {activeTab === 'contribute' && (
        <div className="space-y-8 md:space-y-12">
          <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">
              {contribute.title}
            </h2>
            <p className="text-blue-600 text-lg md:text-xl mb-8 md:mb-12 max-w-3xl">
              {contribute.description}
            </p>

            {/* Ways to Contribute */}
            <div className="mb-12 md:mb-16">
              <InfoCards cards={contribute.ways} columns={4} />
            </div>

            {/* Contribution Process */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12">
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-8 md:mb-10 text-center">
                {contribute.process.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {contribute.process.steps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="bg-white rounded-xl md:rounded-2xl shadow-lg border border-blue-100 p-6 md:p-8 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white font-bold text-lg md:text-xl mb-4 md:mb-6">
                        {step.step}
                      </div>
                      <h4 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">
                        {step.title}
                      </h4>
                      <p className="text-blue-600 text-sm md:text-base">
                        {step.description}
                      </p>
                    </div>

                    {/* Connecting line */}
                    {index < contribute.process.steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-blue-200"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 md:mt-16 text-center">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 md:py-5 md:px-10 rounded-lg text-lg md:text-xl transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl inline-flex items-center">
                Start Building Together
                <ArrowRightIcon className="h-5 w-5 md:h-6 md:w-6 ml-3" />
              </button>
              <p className="text-blue-500 text-sm md:text-base mt-4">
                Contact us at solidarity@ncdb.coop or call +94 11 2 345 679
              </p>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'impact' && (
        <div className="space-y-8 md:space-y-12">
          {/* Impact Overview */}
          <div className="bg-gradient-to-r from-blue-800 to-indigo-800 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
              {impact.title}
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-8 md:mb-10 leading-relaxed">
              {impact.description}
            </p>
          </div>

          {/* Impact Areas */}
          <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {impact.impactAreas.map((area, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-blue-50 rounded-xl md:rounded-2xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 mb-4 md:mb-6">
                    {area.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">
                    {area.title}
                  </h3>
                  <p className="text-blue-600 text-sm md:text-base mb-4">
                    {area.description}
                  </p>
                  <div className="space-y-2">
                    {area.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-blue-400 mr-2"></div>
                        <span className="text-blue-700 text-xs md:text-sm">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </DepartmentLayout>
  );
};

export default BuildTogether;