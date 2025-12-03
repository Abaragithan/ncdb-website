import React from 'react';
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

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <HomeCarousel />
      <StatsSection />
      <ServicesOverview />
      <CooperativeBenefits />
      <CTASection />
    </div>
  )
}

export default Home

// HomeCarousel Component
const HomeCarousel = () => {
  const slides = [
    {
      id: 1,
      image: "/images/slide1.jpg",
      title: "Empowering Cooperative Societies",
      description: "Providing comprehensive banking solutions and support to 1200+ member societies for sustainable community development.",
      cta: "Explore Membership",
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
}

// Stats Section Component
const StatsSection = () => {
  const stats = [
    {
      value: "1200+",
      label: "Member Societies",
      icon: <BuildingOfficeIcon className="h-8 w-8 text-blue-600" />,
      description: "Actively supported"
    },
    {
      value: "₹500+ Cr",
      label: "Assets Managed",
      icon: <BanknotesIcon className="h-8 w-8 text-blue-600" />,
      description: "Financial strength"
    },
    {
      value: "50+",
      label: "Branches",
      icon: <UserGroupIcon className="h-8 w-8 text-blue-600" />,
      description: "Nationwide presence"
    },
    {
      value: "25+",
      label: "Years of Service",
      icon: <ChartBarIcon className="h-8 w-8 text-blue-600" />,
      description: "Trusted experience"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Cooperative Impact</h2>
          <p className="text-blue-600 text-lg max-w-2xl mx-auto">
            Driving sustainable development through trusted banking partnerships
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-blue-50 mb-6 mx-auto">
                {stat.icon}
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold text-blue-800 mb-2">
                  {stat.label}
                </div>
                <div className="text-blue-600 text-sm">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Services Overview Component
const ServicesOverview = () => {
  const services = [
    {
      icon: "🏦",
      title: "Development Banking",
      description: "Specialized financial solutions for cooperative societies including loans, grants, and credit facilities.",
      path: "/developmentBanking",
      color: "blue",
      features: ["Loans", "Grants", "Credit Programs"]
    },
    {
      icon: "💰",
      title: "Financial Services",
      description: "Comprehensive financial management, treasury services, and investment solutions.",
      path: "/finance",
      color: "indigo",
      features: ["Treasury", "Investments", "Reporting"]
    },
    {
      icon: "🔬",
      title: "Research & Development",
      description: "Market research, innovation programs, and technical support for cooperative growth.",
      path: "/research",
      color: "cyan",
      features: ["Research", "Innovation", "Support"]
    },
    {
      icon: "🤝",
      title: "HR Solutions",
      description: "Capacity building, training programs, and human resource development services.",
      path: "/hr",
      color: "teal",
      features: ["Training", "Development", "Support"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Comprehensive Services</h2>
          <p className="text-blue-600 text-lg max-w-2xl mx-auto">
            Tailored solutions designed specifically for cooperative societies and their members
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gradient-to-b from-white to-blue-50 rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl hover:border-blue-300 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`h-16 w-16 rounded-xl bg-gradient-to-br from-${service.color}-500 to-${service.color}-700 flex items-center justify-center text-2xl text-white mb-6 shadow-lg group-hover:shadow-${service.color}-200 transition-shadow`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
              <p className="text-blue-600 mb-6">{service.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature, idx) => (
                  <span key={idx} className={`px-3 py-1 bg-${service.color}-100 text-${service.color}-800 text-xs font-medium rounded-full`}>
                    {feature}
                  </span>
                ))}
              </div>

              <Link
                to={service.path}
                className={`inline-flex items-center text-${service.color}-700 hover:text-${service.color}-900 font-semibold group`}
              >
                Explore Service
                <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Benefits of Cooperation</h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Join the cooperative movement and experience the power of collective banking
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-white/10 mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-blue-200 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/about"
            className="inline-flex items-center bg-white text-blue-900 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-[1.02]"
          >
            Learn About Membership
            <ArrowRightIcon className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// CTA Section Component
const CTASection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12 shadow-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Ready to Join the Cooperative Movement?
          </h2>
          <p className="text-xl text-blue-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Become a member society or partner with NCDB to drive sustainable development and economic growth in your community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contribute"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
            >
              Contribute Now
            </Link>
            <Link
              to="/collaborators"
              className="bg-white text-blue-600 hover:bg-blue-50 border-2 border-blue-200 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Become a Collaborator
            </Link>
          </div>
          <p className="text-blue-500 text-sm mt-6">
            Contact our membership team at membership@ncdb.coop
          </p>
        </div>
      </div>
    </section>
  );
}

export { HomeCarousel };