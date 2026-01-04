import { useState } from 'react';
import {
  BuildingOfficeIcon,
  ChartBarIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  BookOpenIcon,
  CpuChipIcon,
  UsersIcon,
  AcademicCapIcon,
  WrenchScrewdriverIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';
import { Handshake } from '@mui/icons-material';
import DepartmentLayout from '../components/layout/DepartmentLayout';
import ContentTabs from '../components/common/ContentTabs';
import InfoCards from '../components/common/InfoCards';

// Content configuration - This would be fetched from WordPress API
const SHARED_ENDEAVOURS_CONTENT = {
  // Tab name should be "Shared Endeavours"
  pageTitle: "Shared Endeavours",
  
  hero: {
    slogan: "",
    title: "Progress Grows When We Work Together",
    description: "Building lasting relationships to strengthen cooperative knowledge, practice, and impact.",
    imageSrc: "/images/col2.jpg",
    badgeIcon: Handshake,
    badgeText: "Shared Endeavours",
    highlightText: "Collaborative Partnerships"
  },
  
  metrics: [
    { id: 1, metric: "LKR500+ Cr", label: "Joint Funding Deployed", icon: "💰" },
    { id: 2, metric: "200+", label: "Joint Projects", icon: "🤝" },
    { id: 3, metric: "15+", label: "Years of Partnership", icon: "📅" },
    { id: 4, metric: "100K+", label: "Beneficiaries Reached", icon: "👥" }
  ],
  
  tabs: [
    { id: 'partners', label: 'Our Working Partners', icon: <BuildingOfficeIcon className="h-5 w-5" /> },
    { id: 'impact', label: 'Partnership Impact', icon: <ChartBarIcon className="h-5 w-5" /> },
    { id: 'collaborate', label: 'Collaborate With NCDB', icon: <Handshake className="h-5 w-5" /> }
  ],
  
  // Our Working Partners content
  workingPartners: {
    title: "Our Working Partners",
    description: "Institutions and organizations that work alongside NCDB in research, technology, learning, and cooperative development, guided by shared values, mutual respect, and common purpose.",
    partners: [
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
    ]
  },
  
  // Partnership Impact content
  partnershipImpact: {
    title: "Partnership Impact",
    description: "Through shared endeavours, NCDB and its partners strengthen cooperative systems, enhance community knowledge, introduce appropriate technologies, and expand collective learning that benefits societies and regions alike.",
    
    keyAreas: [
      {
        title: "Financial Access (Collective & Fair)",
        description: "Collaboration helps broaden access to cooperative-friendly resources and shared financial mechanisms that enable member societies to sustain and strengthen their livelihoods responsibly.",
        icon: <ChartBarIcon className="h-8 w-8 text-white" />,
        quote: "Collaboration helps broaden access to cooperative-friendly resources and shared financial mechanisms that enable member societies to sustain and strengthen their livelihoods responsibly."
      },
      {
        title: "Inclusive Economic Growth",
        description: "Joint initiatives support locally rooted economic activity that strengthens cooperative enterprises, retains value within communities, and contributes to shared and inclusive prosperity.",
        icon: <ArrowTrendingUpIcon className="h-8 w-8 text-white" />,
        quote: "Joint initiatives support locally rooted economic activity that strengthens cooperative enterprises, retains value within communities, and contributes to shared and inclusive prosperity."
      },
      {
        title: "Community Well-Being and Social Impact",
        description: "Collaborative work improves access to services, knowledge, and opportunities, fostering stronger, more resilient communities and improved quality of life.",
        icon: <UsersIcon className="h-8 w-8 text-white" />,
        quote: "Collaborative work improves access to services, knowledge, and opportunities, fostering stronger, more resilient communities and improved quality of life."
      },
      {
        title: "Knowledge Sharing and Learning",
        description: "Partnerships enable the exchange of research, experience, and practical learning, strengthening cooperative decision-making and long-term planning.",
        icon: <BookOpenIcon className="h-8 w-8 text-white" />,
        quote: "Partnerships enable the exchange of research, experience, and practical learning, strengthening cooperative decision-making and long-term planning."
      },
      {
        title: "Technology Access and Innovation",
        description: "Shared efforts introduce appropriate, people-centred technologies that enhance productivity, safety, and sustainability across cooperative sectors.",
        icon: <CpuChipIcon className="h-8 w-8 text-white" />,
        quote: "Shared efforts introduce appropriate, people-centred technologies that enhance productivity, safety, and sustainability across cooperative sectors."
      },
      {
        title: "Institutional Strengthening",
        description: "Collaboration supports improved governance, management practices, and organisational systems within cooperative societies and related institutions.",
        icon: <ShieldCheckIcon className="h-8 w-8 text-white" />,
        quote: "Collaboration supports improved governance, management practices, and organisational systems within cooperative societies and related institutions."
      }
    ],
    
    waysOfWorking: {
      title: "Ways of Working Together",
      description: "Opportunities to jointly design and implement research, technology, learning programmes, and cooperative initiatives that respond directly to community priorities and shared challenges.",
      types: [
        {
          title: "Research and Knowledge Partnerships",
          description: "Joint studies, learning initiatives, and evidence-building activities that inform cooperative practice, planning, and policy.",
          icon: <AcademicCapIcon className="h-8 w-8 text-white" />
        },
        {
          title: "Technical Cooperation and Innovation",
          description: "Sharing technical expertise, tools, and practical solutions to strengthen cooperative production systems and service delivery.",
          icon: <WrenchScrewdriverIcon className="h-8 w-8 text-white" />
        },
        {
          title: "Capacity-Building Initiatives",
          description: "Training, mentoring, and learning programmes for cooperative members, staff, and youth, grounded in real-world practice.",
          icon: <UsersIcon className="h-8 w-8 text-white" />
        },
        {
          title: "Product and Process Development",
          description: "Collaborative efforts to improve cooperative products, services, and operational processes in ways that serve community needs.",
          icon: <LightBulbIcon className="h-8 w-8 text-white" />
        }
      ]
    }
  },
  
  // Collaborate With NCDB content
  collaborate: {
    title: "Collaborate With NCDB",
    description: `"NCDB welcomes organisations to work together in ways that reflect shared values, mutual respect, and collective responsibility for strengthening cooperative systems and community well-being. We remain open to diverse forms of collaboration that support learning, innovation, and people-centred development."`,
    
    welcomeMessage: "We welcome organisations that:",
    criteria: [
      "Share a commitment to cooperative principles and community-oriented development",
      "Contribute complementary knowledge, experience, skills, or resources",
      "Value joint learning, shared responsibility, and meaningful long-term impact"
    ],
    
    opportunities: [
      {
        title: "Research Partnerships",
        description: "Collaborate on research projects focusing on cooperative development, rural finance, and sustainable agriculture.",
        linkText: "Submit Research Proposal"
      },
      {
        title: "Technical Partnerships",
        description: "Share technical expertise in areas such as agricultural technology, financial systems, and digital solutions.",
        linkText: "Propose Technical Collaboration"
      },
      {
        title: "Capacity Development",
        description: "Join us in developing training programs and learning initiatives for cooperative societies.",
        linkText: "Explore Capacity Building"
      }
    ]
  }
};

const SharedEndeavours = () => {
  const [activeTab, setActiveTab] = useState('partners');
  const { 
    hero, 
    metrics, 
    tabs, 
    workingPartners, 
    partnershipImpact, 
    collaborate 
  } = SHARED_ENDEAVOURS_CONTENT;

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

      {activeTab === 'partners' && (
        <div className="space-y-8 md:space-y-12">
          <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">
              {workingPartners.title}
            </h2>
            <p className="text-blue-600 text-base md:text-lg mb-8 md:mb-12 max-w-3xl">
              {workingPartners.description}
            </p>

            <InfoCards cards={workingPartners.partners} columns={3} />
          </div>
        </div>
      )}

      {activeTab === 'impact' && (
        <div className="space-y-8 md:space-y-12">
          {/* Partnership Impact Overview */}
          <div className="bg-gradient-to-r from-blue-800 to-indigo-800 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
              {partnershipImpact.title}
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-8 md:mb-10 leading-relaxed">
              {partnershipImpact.description}
            </p>
          </div>

          {/* Key Areas of Impact */}
          <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
            <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-6 md:mb-8 text-center">
              Key Areas of Impact
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
              {partnershipImpact.keyAreas.map((area, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-white rounded-xl md:rounded-2xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 mb-4 md:mb-6">
                    {area.icon}
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">
                    {area.title}
                  </h4>
                  <blockquote className="text-blue-700 text-sm md:text-base italic mb-4 border-l-4 border-blue-300 pl-4 py-1">
                    "{area.quote}"
                  </blockquote>
                  <p className="text-blue-600 text-sm md:text-base">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Ways of Working Together */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12">
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-6 md:mb-8">
                {partnershipImpact.waysOfWorking.title}
              </h3>
              <p className="text-blue-700 text-base md:text-lg mb-8 md:mb-12 leading-relaxed">
                {partnershipImpact.waysOfWorking.description}
              </p>

              <h4 className="text-lg md:text-xl font-bold text-blue-900 mb-6 md:mb-8">
                Types of Collaboration
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {partnershipImpact.waysOfWorking.types.map((type, index) => (
                  <div key={index} className="bg-white rounded-xl md:rounded-2xl shadow-lg border border-blue-100 p-6 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 mb-4 md:mb-6">
                      {type.icon}
                    </div>
                    <h5 className="text-md md:text-lg font-bold text-blue-900 mb-3 md:mb-4">
                      {type.title}
                    </h5>
                    <p className="text-blue-600 text-sm md:text-base">
                      {type.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'collaborate' && (
        <div className="space-y-8 md:space-y-12">
          <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">
              {collaborate.title}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              <div>
                <blockquote className="text-blue-700 text-lg md:text-xl italic leading-relaxed mb-8 md:mb-10 border-l-4 border-blue-500 pl-6 py-4 bg-blue-50 rounded-r-xl">
                  {collaborate.description}
                </blockquote>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl md:rounded-2xl p-6 md:p-8 mb-8 md:mb-10">
                  <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4 md:mb-6">
                    {collaborate.welcomeMessage}
                  </h3>
                  <div className="space-y-3 md:space-y-4">
                    {collaborate.criteria.map((criterion, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 md:h-6 md:w-6 text-blue-600 mr-2 md:mr-3 flex-shrink-0 mt-1" />
                        <span className="text-blue-700 text-sm md:text-base">{criterion}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <InfoCards cards={collaborate.opportunities} columns={1} />
              </div>

              <div className="bg-gradient-to-r from-blue-800 to-indigo-800 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Start Collaborating Today</h3>
                <p className="text-blue-100 text-sm md:text-base mb-6 md:mb-8">
                  Interested in collaborating with NCDB? We welcome partnerships with organizations that share our commitment to cooperative development, shared learning, and community empowerment.
                </p>

                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 md:h-6 md:w-6 text-blue-300 mr-2 md:mr-3" />
                    <span className="text-sm md:text-base">Align with cooperative principles and values</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 md:h-6 md:w-6 text-blue-300 mr-2 md:mr-3" />
                    <span className="text-sm md:text-base">Bring complementary knowledge and resources</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 md:h-6 md:w-6 text-blue-300 mr-2 md:mr-3" />
                    <span className="text-sm md:text-base">Commit to meaningful, long-term community impact</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 md:h-6 md:w-6 text-blue-300 mr-2 md:mr-3" />
                    <span className="text-sm md:text-base">Value joint learning and shared responsibility</span>
                  </div>
                </div>

                <button className="w-full bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg text-base md:text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
                  Contact Partnership Team
                </button>
                
                <p className="text-blue-200 text-sm md:text-base mt-6 text-center">
                  Email: partnerships@ncdb.coop | Phone: +94 11 2 345 678
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </DepartmentLayout>
  );
};

export default SharedEndeavours;