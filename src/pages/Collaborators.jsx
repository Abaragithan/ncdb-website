import { useState } from 'react';
import {
  BuildingOfficeIcon,
  ChartBarIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import { Handshake } from '@mui/icons-material';
import DepartmentLayout from '../components/layout/DepartmentLayout';
import ContentTabs from '../components/common/ContentTabs';
import InfoCards from '../components/common/InfoCards';

const Collaborators = () => {
  const [activeTab, setActiveTab] = useState('partners');

  const heroConfig = {
    title: "Building",
    description: "Collaborating with leading institutions to deliver comprehensive financial solutions and drive sustainable development across Northern Sri Lanka.",
    imageSrc: "/images/col2.jpg",
    badgeIcon: Handshake,
    badgeText: "Partnerships & Collaborations",
    highlightText: "Strategic Partnerships"
  };

  const metrics = [
    { id: 1, metric: "LKR500+ Cr", label: "Joint Funding Deployed", icon: "💰" },
    { id: 2, metric: "200+", label: "Joint Projects", icon: "🤝" },
    { id: 3, metric: "15+", label: "Years of Partnership", icon: "📅" },
    { id: 4, metric: "100K+", label: "Beneficiaries Reached", icon: "👥" }
  ];

  const tabs = [
    { id: 'partners', label: 'Our Partners', icon: <BuildingOfficeIcon className="h-5 w-5" /> },
    { id: 'impact', label: 'Partnership Impact', icon: <ChartBarIcon className="h-5 w-5" /> },
    { id: 'opportunities', label: 'Collaboration Opportunities', icon: <Handshake className="h-5 w-5" /> }
  ];

  const collaborators = [
    {
      title: "Bank of Ceylon",
      description: "Sri Lanka's largest state-owned commercial bank",
      features: ["Loan Syndication", "Fund Transfer", "Infrastructure Development"],
      linkText: "Visit Website"
    },
    {
      title: "National Development Bank (NDB)",
      description: "Leading development bank supporting SME growth",
      features: ["SME Financing", "Technical Assistance", "Capacity Building"],
      linkText: "Visit Website"
    },
    {
      title: "Samurdhi Authority",
      description: "National poverty alleviation program",
      features: ["Social Welfare", "Community Development", "Livelihood Support"],
      linkText: "Visit Website"
    },
    {
      title: "World Bank",
      description: "Global financial institution for development projects",
      features: ["Project Funding", "Technical Expertise", "Research Collaboration"],
      linkText: "Visit Website"
    },
    {
      title: "United Nations Development Programme",
      description: "United Nations' global development network",
      features: ["Sustainable Development", "Capacity Building", "Innovation Support"],
      linkText: "Visit Website"
    },
    {
      title: "Microfinance Institutions of Sri Lanka",
      description: "Network of microfinance institutions across Sri Lanka",
      features: ["Micro Credit", "Entrepreneurship", "Rural Finance"],
      linkText: "Visit Website"
    }
  ];

  const partnershipImpact = [
    {
      title: "Financial Access",
      description: "Expanding loan accessibility and financial services to underserved communities through collaborative initiatives.",
      icon: <ChartBarIcon className="h-8 w-8 text-white" />
    },
    {
      title: "Economic Growth",
      description: "Supporting small enterprises and promoting sustainable business development through strategic partnerships.",
      icon: <UserGroupIcon className="h-8 w-8 text-white" />
    },
    {
      title: "Community Impact",
      description: "Building financial literacy and empowering local communities for long-term prosperity through collaborative programs.",
      icon: <ShieldCheckIcon className="h-8 w-8 text-white" />
    }
  ];

  const collaborationOpportunities = [
    {
      title: "Research Partnerships",
      description: "Collaborate on research projects focusing on cooperative development, rural finance, and sustainable agriculture.",
      linkText: "Submit Research Proposal"
    },
    {
      title: "Funding Partnerships",
      description: "Join us in funding innovative projects that create sustainable impact in cooperative communities.",
      linkText: "Explore Funding Opportunities"
    },
    {
      title: "Technical Partnerships",
      description: "Share technical expertise in areas such as agricultural technology, financial systems, and digital solutions.",
      linkText: "Propose Technical Collaboration"
    }
  ];

  return (
    <DepartmentLayout
      heroConfig={heroConfig}
      metrics={metrics}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      <ContentTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} columns={3} />

      {activeTab === 'partners' && (
        <div className="space-y-8 md:space-y-12">
          <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Our Strategic Partners</h2>
            <p className="text-blue-600 text-base md:text-lg mb-8 md:mb-12 max-w-3xl">
              NCDB collaborates with leading financial institutions, government organizations, and international development agencies to deliver comprehensive financial solutions and drive economic growth in Sri Lanka's Northern Province.
            </p>

            <InfoCards cards={collaborators} columns={3} />
          </div>
        </div>
      )}

      {activeTab === 'impact' && (
        <div className="space-y-8 md:space-y-12">
          <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Partnership Impact</h2>

            <div className="mb-8 md:mb-12">
              <InfoCards cards={partnershipImpact} columns={3} />
            </div>

            <div className="bg-gradient-to-r from-blue-800 to-indigo-800 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Success Stories</h3>
                  <div className="space-y-3 md:space-y-4">
                    {[
                      "Joint microfinance program reaching 50,000+ rural entrepreneurs",
                      "Agricultural development project increasing crop yields by 40%",
                      "Women entrepreneurship initiative creating 2,000+ new businesses",
                      "Youth employment program providing skills training to 5,000+ individuals",
                    ].map((story, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 md:h-6 md:w-6 text-blue-300 mr-2 md:mr-3 flex-shrink-0" />
                        <span className="text-blue-100 text-sm md:text-base">{story}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'opportunities' && (
        <div className="space-y-8 md:space-y-12">
          <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Collaboration Opportunities</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              <div>
                <p className="text-blue-600 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                  We are always looking for new partners to collaborate on innovative projects that support cooperative development and community empowerment.
                </p>

                <InfoCards cards={collaborationOpportunities} columns={1} />
              </div>

              <div className="bg-gradient-to-r from-blue-800 to-indigo-800 rounded-xl md:rounded-2xl p-6 md:p-8 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Become a Partner</h3>
                <p className="text-blue-100 text-sm md:text-base mb-6">
                  Interested in collaborating with NCDB? We welcome partnerships with organizations that share our commitment to cooperative development and community empowerment.
                </p>

                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 md:h-6 md:w-6 text-blue-300 mr-2 md:mr-3" />
                    <span className="text-sm md:text-base">Align with our mission and values</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 md:h-6 md:w-6 text-blue-300 mr-2 md:mr-3" />
                    <span className="text-sm md:text-base">Bring complementary expertise or resources</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 md:h-6 md:w-6 text-blue-300 mr-2 md:mr-3" />
                    <span className="text-sm md:text-base">Commit to measurable impact</span>
                  </div>
                </div>

                <button className="w-full bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02]">
                  Contact Partnership Team
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </DepartmentLayout>
  );
};

export default Collaborators;