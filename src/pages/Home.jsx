import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
  NewspaperIcon
} from '@heroicons/react/24/outline';
import HeroSectionComponent from '../components/home/HeroSectionComponent';
import StatsSection from '../components/home/StatsSection';
import ServicesOverview from '../components/home/ServiceOverview';
import CooperativeBenefits from '../components/home/CooperativeBenefits';
import CTASection from '../components/home/CTASection';

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
