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
  CheckCircleIcon,
  UsersIcon,
  ScaleIcon,
  BanknotesIcon
} from '@heroicons/react/24/outline';
import DepartmentLayout from '../components/layout/DepartmentLayout';
import ContentTabs from '../components/common/ContentTabs';
import InfoCards from '../components/common/InfoCards';
import Board from '../components/about/Board';

// About page content - This would be fetched from WordPress API
const ABOUT_CONTENT = {
  hero: {
    title: "Building Communities Through Shared Cooperation",
    description: "For decades, we've been at the forefront of cooperative banking, driving sustainable development and economic growth across Northern Sri Lanka.",
    imageSrc: "/images/aboutus.jpg",
    badgeIcon: BuildingOfficeIcon,
    badgeText: "About NCDB",
    highlightText: "Cooperative Banking"
  },
  metrics: [
    { id: 1, metric: "1200+", label: "Member Societies", icon: "🤝" },
    { id: 2, metric: "LKR500+ Cr", label: "Assets Managed", icon: "💰" },
    { id: 3, metric: "50+", label: "Branches", icon: "🏢" },
    { id: 4, metric: "25+", label: "Years of Service", icon: "📅" }
  ],
  missionConfig: {
    mission: "To become the premier cooperative banking institution in South Asia, recognized for empowering communities through innovative financial solutions and sustainable development initiatives.",
    icon: EyeIcon,
    title: "Our Vision"
  },
  tabs: [
    { id: 'overview', label: 'Overview', icon: <BuildingOfficeIcon className="h-5 w-5" /> },
    { id: 'vision_mission', label: 'Vision & Mission', icon: <EyeIcon className="h-5 w-5" /> },
    { id: 'international', label: 'International Network', icon: <GlobeAltIcon className="h-5 w-5" /> },
    { id: 'team', label: 'Our Team', icon: <UserGroupIcon className="h-5 w-5" /> }
  ],

  // NCDB Specific Content from your requirements
  ncdbContent: {
    // About NCDB section
    aboutTitle: "About NCDB",
    aboutStatement: `The Northern Cooperative Development Bank (NCDB) serves as the provincial apex institution for cooperative societies in the Northern Province, fostering sector-wise development across Agriculture, Fisheries, Palmyra, and Dairy.`,
    aboutParagraph2: `Guided by the principles of cooperation and collective responsibility, NCDB works closely with grassroots cooperative societies to strengthen rural livelihoods, enhance local production systems, and promote inclusive and sustainable community development.`,
    aboutParagraph3: `Through solidarity-based finance, capacity building, and institutional support, NCDB enables communities to retain control over their resources, reinforce self-reliance, and advance shared prosperity rooted in dignity and cooperation.`,

    // Additional intro (from "About NCDB – After Explore")
    introductoryStatement: `Founded on 30 August 2019, the Northern Cooperative Development Bank (NCDB) stands as a collective institution rooted in the cooperative movement, working to uplift the livelihoods of people in the Northern Province through shared effort, mutual support, and locally driven development.`,

    impactTitle: "Our Impact",

    // Vision section
    vision: {
      title: "Our Vision",
      statement: `"A Prosperous North through Cooperative Actions"`,
      objectives: [
        "Strengthen Cooperative Institutions",
        "Expand Cooperative Credit and Mutual Finance",
        "Promote Cooperative-Led Production and Industry",
        "Improve Market Access through Collective Action",
        "Build People-Centred Human Capital"
      ]
    },

    // Mission section
    mission: {
      title: "Our Mission",
      statement: `"To provide strategic guidance for the development of the cooperative movement through credit expansion, industrial development, improved marketing and human resource development through an investment of people"`,
      focusAreas: [
        "Cooperative Finance and Credit Support",
        "Enterprise and Industrial Development",
        "Marketing and Supply Chain Strengthening",
        "Capacity Building and Leadership Development",
        "Inclusive and Sustainable Livelihood Development"
      ]
    },

    // Core Values
    coreValues: [
      {
        title: "Solidarity",
        description: "Standing together to address shared challenges and advance collective well-being",
        icon: <HeartIcon className="h-8 w-8 text-white" />
      },
      {
        title: "Democratic Participation",
        description: "People-centred decision-making rooted in cooperative ownership",
        icon: <UsersIcon className="h-8 w-8 text-white" />
      },
      {
        title: "Equity and Inclusion",
        description: "Ensuring fair access and opportunities for all cooperative members",
        icon: <ScaleIcon className="h-8 w-8 text-white" />
      },
      {
        title: "Self-Reliance",
        description: "Strengthening local capacities and community control over resources",
        icon: <LightBulbIcon className="h-8 w-8 text-white" />
      },
      {
        title: "Accountability to Communities",
        description: "Remaining answerable to the people and cooperatives we serve",
        icon: <ShieldCheckIcon className="h-8 w-8 text-white" />
      }
    ],

    // International Network
    internationalNetwork: {
      title: "National and International Networks",
      description: "NCDB actively collaborates with cooperative institutions both nationally and internationally to share knowledge, resources, and best practices.",
      networks: [
        {
          name: "Works in Solidarity with Cooperatives in other Provinces",
          description: "Collaborating with cooperative societies across different regions",
          impact: "Cross-provincial partnerships"
        },
        {
          name: "Facilitates Exchanges with Cooperatives",
          description: "Knowledge sharing and exchange programs",
          impact: "Best practices dissemination"
        },
        {
          name: "Exposure Visits for Future Cooperative Members",
          description: "Educational visits and learning opportunities",
          impact: "Next generation empowerment"
        },
        {
          name: "Active Participants in Cooperatives Forums",
          description: "Engagement in national and international cooperative forums",
          impact: "Policy influence"
        },
        {
          name: "Collaborates with Cooperatives Internationally for Research",
          description: "Joint research initiatives with global partners",
          impact: "Innovative solutions"
        },
        {
          name: "Supported by an International Advisory Group",
          description: "Guidance from global cooperative experts",
          impact: "Strategic direction"
        }
      ]
    },

    teamSection: {
      title: "Our Team",
      description: "Meet the dedicated professionals who guide NCDB's strategic direction and ensure our commitment to cooperative banking excellence."
    }
  }
};

const About = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { hero, metrics, missionConfig, tabs, ncdbContent } = ABOUT_CONTENT;

  return (
    <DepartmentLayout
      heroConfig={hero}
      metrics={metrics}
      missionConfig={missionConfig}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {/* Custom tabs since DepartmentLayout doesn't pass tabs prop */}
      <ContentTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} columns={4} />

      {activeTab === 'overview' && (
        <div className="space-y-8 md:space-y-12">
          {/* Introductory Statement */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
            <p className="text-blue-700 text-lg md:text-xl italic leading-relaxed text-center">
              "{ncdbContent.introductoryStatement}"
            </p>
          </div>

          {/* Main About Content */}
          <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">
              {ncdbContent.aboutTitle}
            </h2>
            <div className="space-y-6">
              <p className="text-blue-700 text-base md:text-lg leading-relaxed">
                {ncdbContent.aboutStatement}
              </p>
              <p className="text-blue-700 text-base md:text-lg leading-relaxed">
                {ncdbContent.aboutParagraph2}
              </p>
              <p className="text-blue-700 text-base md:text-lg leading-relaxed">
                {ncdbContent.aboutParagraph3}
              </p>
            </div>

            <div className="mt-8 md:mt-12">
              <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-6">
                {ncdbContent.impactTitle}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <div className="text-center bg-gradient-to-br from-blue-50 to-white rounded-xl p-4 md:p-6">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 mb-2">1200+</div>
                  <div className="text-blue-800 font-semibold text-sm md:text-base">Member Societies</div>
                </div>
                <div className="text-center bg-gradient-to-br from-blue-50 to-white rounded-xl p-4 md:p-6">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 mb-2">LKR500+ Cr</div>
                  <div className="text-blue-800 font-semibold text-sm md:text-base">Assets Managed</div>
                </div>
                <div className="text-center bg-gradient-to-br from-blue-50 to-white rounded-xl p-4 md:p-6">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 mb-2">50+</div>
                  <div className="text-blue-800 font-semibold text-sm md:text-base">Branches</div>
                </div>
                <div className="text-center bg-gradient-to-br from-blue-50 to-white rounded-xl p-4 md:p-6">
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-700 mb-2">5+</div>
                  <div className="text-blue-800 font-semibold text-sm md:text-base">Years of Service</div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8 text-center">
              Our Core Values
            </h2>
            <InfoCards cards={ncdbContent.coreValues} columns={5} />
          </div>
        </div>
      )}

      {activeTab === 'vision_mission' && (
        <div className="space-y-8 md:space-y-12">
          {/* Vision Section */}
          <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-8 lg:p-12 text-white">
            <div className="flex items-center mb-6 md:mb-8">
              <EyeIcon className="h-8 w-8 md:h-12 md:w-12 text-blue-300 mr-3 md:mr-4" />
              <h2 className="text-2xl md:text-3xl font-bold">
                {ncdbContent.vision.title}
              </h2>
            </div>
            <p className="text-lg md:text-xl lg:text-2xl font-bold italic leading-relaxed mb-6 md:mb-8">
              {ncdbContent.vision.statement}
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Strategic Objectives</h3>
              <ul className="space-y-2 md:space-y-3">
                {ncdbContent.vision.objectives.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-2 w-2 rounded-full bg-blue-300 mr-2 md:mr-3 mt-2"></div>
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mission Section */}
          <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
            <div className="flex items-center mb-6 md:mb-8">
              <RocketLaunchIcon className="h-8 w-8 md:h-12 md:w-12 text-blue-600 mr-3 md:mr-4" />
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                {ncdbContent.mission.title}
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              <div>
                <p className="text-blue-700 text-lg md:text-xl italic leading-relaxed mb-6">
                  {ncdbContent.mission.statement}
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl md:rounded-2xl p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-6">Mission Focus Areas</h3>
                <div className="space-y-3 md:space-y-4">
                  {ncdbContent.mission.focusAreas.map((area, index) => (
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
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                {ncdbContent.internationalNetwork.title}
              </h2>
            </div>
            <p className="text-blue-600 text-base md:text-lg mb-6 md:mb-8 max-w-3xl">
              {ncdbContent.internationalNetwork.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {ncdbContent.internationalNetwork.networks.map((network, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-blue-50 rounded-xl md:rounded-2xl shadow-lg border border-blue-100 p-4 md:p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-xl bg-blue-100 text-blue-600 font-bold text-base md:text-lg mb-3 md:mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-blue-900 mb-2 md:mb-3">{network.name}</h3>
                  <p className="text-blue-600 text-xs md:text-sm mb-2 md:mb-4">{network.description}</p>
                  <div className="text-blue-700 text-xs md:text-sm font-semibold">
                    {network.impact}
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
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">
              {ncdbContent.teamSection.title}
            </h2>
            <p className="text-blue-600 text-base md:text-lg mb-6 md:mb-8 max-w-3xl">
              {ncdbContent.teamSection.description}
            </p>
            <Board />
          </div>
        </div>
      )}
    </DepartmentLayout>
  );
};

export default About;