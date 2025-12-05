import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { motion } from 'framer-motion';
import {
  BuildingOfficeIcon,
  BanknotesIcon,
  UserGroupIcon,
  ChartBarIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import HeroSection from '../components/common/HeroSection';
import MetricCards from '../components/common/MetricCards';
import InfoCards from '../components/common/InfoCards';
import { fetchPostsByCategory } from '../api/wordpressAPI';

const Home = () => {
  useEffect(() => {
    fetchPostsByCategory(1).then((data) => {
      console.log('data', data);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <HomeCarousel />
      <StatsSection />
      <ServicesOverview />
      <CooperativeBenefits />
      <CTASection />
    </div>
  );
};

export default Home;

// HomeCarousel Component
const HomeCarousel = () => {
  const slides = [
    {
      id: 1,
      image: "/images/slide1.jpg",
      title: "Empowering Cooperative Societies",
      description: "Providing comprehensive banking solutions and support to 1200+ member societies for sustainable community development.",
      cta: "Explore",
      path: "/about",
      gradient: "from-blue-900/80 to-blue-800/60"
    },
    {
      id: 2,
      image: "/images/slide2.jpg",
      title: "Financial Solutions for Development",
      description: "Specialized development banking services designed to uplift communities and drive economic growth.",
      cta: "View Services",
      path: "/developmentBanking",
      gradient: "from-blue-800/80 to-indigo-900/60"
    },
    {
      id: 3,
      image: "/images/slide3.jpeg",
      title: "Innovation in Cooperative Banking",
      description: "Leveraging technology and expertise to deliver cutting-edge solutions for cooperative societies.",
      cta: "Discover Innovation",
      path: "/technology",
      gradient: "from-indigo-900/80 to-blue-900/60"
    },
  ];

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet bg-white/50',
          bulletActiveClass: 'swiper-pagination-bullet-active bg-blue-600'
        }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-[75vh] md:h-[90vh]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} z-10`}></div>
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                  >
                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                      <BuildingOfficeIcon className="h-5 w-5 text-white" />
                      <span className="text-white text-sm font-medium">Cooperative Development Bank</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-xl leading-relaxed">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        to={slide.path}
                        className="inline-flex items-center justify-center bg-white text-blue-700 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                      >
                        {slide.cta}
                        <ArrowRightIcon className="h-5 w-5 ml-2" />
                      </Link>
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
                      >
                        Contact Us
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

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

export { HomeCarousel };