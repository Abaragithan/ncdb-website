import { ArrowRightIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Hero content - This would come from WordPress API
const HERO_CONTENT = {
    slogan: "Where Cooperatives Grow Together",
    badgeText: "Cooperative Development Bank",
    ctaButton: "Explore",
    ctaLink: "/about",
    homeBio: "Providing customised cooperative solutions and institutional support to member societies for shared livelihoods and sustainable community development."
};

const HeroSectionComponent = ({ content = HERO_CONTENT }) => {
    return (
        <div className="relative overflow-hidden">
            {/* Background image with gradient overlay */}
            <div className="absolute inset-0">
                <img
                    src="/images/slide1.jpg"
                    alt="Cooperatives Grow Together"
                    className="w-full h-full object-cover"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/60"></div>
            </div>

            {/* Content */}
            <div className="relative min-h-[75vh] md:min-h-[90vh] flex items-center">
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
                                <span className="text-white text-sm font-medium">
                                    {content.badgeText}
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                                {content.slogan}
                            </h1>

                            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-xl leading-relaxed">
                                {content.homeBio}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to={content.ctaLink}
                                    className="inline-flex items-center justify-center bg-white text-blue-700 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                                >
                                    {content.ctaButton}
                                    <ArrowRightIcon className="h-5 w-5 ml-2" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSectionComponent;