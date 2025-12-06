import { Link } from 'react-router-dom';
import {
  BanknotesIcon,
  UserGroupIcon,
  ChartBarIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  NewspaperIcon
} from '@heroicons/react/24/outline';
import MetricCards from '../components/common/MetricCards';
import InfoCards from '../components/common/InfoCards';
import HeroSectionComponent from '../components/HerosectionComponent';

const Home = () => {
  // Hard-coded news data
  const newsPosts = [
    {
      id: 1,
      title: "New Branch Opening in Colombo",
      excerpt: "NCDB announces the opening of its 51st branch in Colombo, expanding our reach to serve more cooperative societies.",
      date: "2024-01-15T10:30:00",
      slug: "new-branch-opening-colombo"
    },
    {
      id: 2,
      title: "Annual Cooperative Summit 2024",
      excerpt: "Join us for the largest gathering of cooperative societies in Sri Lanka. Registrations now open for all member societies.",
      date: "2024-01-10T14:45:00",
      slug: "annual-cooperative-summit-2024"
    },
    {
      id: 3,
      title: "Digital Banking Platform Launch",
      excerpt: "Introducing our new digital banking platform for cooperative societies. Streamlined operations and better financial management.",
      date: "2024-01-05T09:15:00",
      slug: "digital-banking-platform-launch"
    },
    {
      id: 4,
      title: "Sustainable Agriculture Initiative",
      excerpt: "New funding program launched for sustainable agriculture cooperatives. Special interest rates and technical support available.",
      date: "2023-12-28T11:20:00",
      slug: "sustainable-agriculture-initiative"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <HeroSectionComponent />

      <StatsSection />
      <ServicesOverview />

      {/* News & Updates Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
              <NewspaperIcon className="h-5 w-5" />
              <span className="text-sm font-medium">Latest Updates</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">News & Updates</h2>
            <p className="text-blue-600 text-base md:text-lg max-w-2xl mx-auto">
              Latest announcements and news from NCDB
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>

                  <Link
                    to={`/news/${post.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read More
                    <ArrowRightIcon className="h-4 w-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/mediaroom"
              className="inline-flex items-center bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-6 rounded-lg text-base transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
            >
              View All Updates
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <CooperativeBenefits />
      <CTASection />
    </div>
  );
};

export default Home;

// Stats Section Component
const StatsSection = () => {
  const metrics = [
    {
      id: 1,
      metric: "1200+",
      label: "Member Societies",
      icon: "🏢",
      description: "Actively supported"
    },
    {
      id: 2,
      metric: "LKR500+ Cr",
      label: "Assets Managed",
      icon: "💰",
      description: "Financial strength"
    },
    {
      id: 3,
      metric: "50+",
      label: "Branches",
      icon: "🏪",
      description: "Nationwide presence"
    },
    {
      id: 4,
      metric: "25+",
      label: "Years of Service",
      icon: "📅",
      description: "Trusted experience"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Cooperative Impact</h2>
          <p className="text-blue-600 text-base md:text-lg max-w-2xl mx-auto">
            Driving sustainable development through trusted banking partnerships
          </p>
        </div>

        <MetricCards metrics={metrics} columns={4} />
      </div>
    </section>
  );
};

// Services Overview Component
const ServicesOverview = () => {
  const services = [
    {
      title: "Development Banking",
      description: "Specialized financial solutions for cooperative societies including loans, grants, and credit facilities.",
      icon: "🏦",
      features: ["Loans", "Grants", "Credit Programs"],
      linkText: "Explore Service",
      linkTo: "/developmentBanking"
    },
    {
      title: "Research & Development",
      description: "Market research, innovation programs, and technical support for cooperative growth.",
      icon: "🔬",
      features: ["Research", "Innovation", "Support"],
      linkText: "Explore Service",
      linkTo: "/research"
    },
    {
      title: "Marketing",
      description: "Comprehensive marketing solutions to expand cooperative products' market reach.",
      icon: "📈",
      features: ["Sales", "Distribution", "Promotion"],
      linkText: "Explore Service",
      linkTo: "/marketing"
    },
    {
      title: "Technical Support",
      description: "Technical expertise and innovation support for cooperative machinery and equipment.",
      icon: "🔧",
      features: ["Technology", "Support", "Training"],
      linkText: "Explore Service",
      linkTo: "/technology"
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Comprehensive Services</h2>
          <p className="text-blue-600 text-base md:text-lg max-w-2xl mx-auto">
            Tailored solutions designed specifically for cooperative societies and their members
          </p>
        </div>

        <InfoCards cards={services} columns={4} />
      </div>
    </section>
  );
};

// Cooperative Benefits Section
const CooperativeBenefits = () => {
  const benefits = [
    {
      title: "Community Ownership",
      description: "Members collectively own and control the cooperative, ensuring democratic decision-making.",
      icon: <UserGroupIcon className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Financial Inclusion",
      description: "Access to banking services and financial products tailored for cooperative societies.",
      icon: <BanknotesIcon className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Technical Support",
      description: "Expert guidance and technological solutions to enhance cooperative operations.",
      icon: <CheckCircleIcon className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Sustainable Growth",
      description: "Long-term development programs focused on community prosperity and stability.",
      icon: <ChartBarIcon className="h-8 w-8 text-blue-600" />
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Benefits of Cooperation</h2>
          <p className="text-blue-200 text-base md:text-lg max-w-2xl mx-auto">
            Join the cooperative movement and experience the power of collective banking
          </p>
        </div>

        <InfoCards
          cards={benefits}
          columns={4}
          cardClassName="bg-white/10 backdrop-blur-sm border-white/20 hover:border-white/40 hover:bg-white/15 text-white"
        />

        <div className="mt-12 md:mt-16 text-center">
          <Link
            to="/about"
            className="inline-flex items-center bg-white text-blue-900 hover:bg-blue-50 font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg text-base md:text-lg transition-all duration-300 transform hover:scale-[1.02]"
          >
            Learn About Membership
            <ArrowRightIcon className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

// CTA Section Component
const CTASection = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4 md:mb-6">
            Ready to Join the Cooperative Movement?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-blue-600 mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            Become a member society or partner with NCDB to drive sustainable development and economic growth in your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contribute"
              className="bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg text-base md:text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
            >
              Contribute Now
            </Link>
            <Link
              to="/collaborators"
              className="bg-white text-blue-600 hover:bg-blue-50 border-2 border-blue-200 font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg text-base md:text-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Become a Collaborator
            </Link>
          </div>
          <p className="text-blue-500 text-sm md:text-base mt-6">
            Contact our membership team at membership@ncdb.coop
          </p>
        </div>
      </div>
    </section>
  );
};