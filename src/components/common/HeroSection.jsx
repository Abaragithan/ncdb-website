import PropTypes from 'prop-types';

const HeroSection = ({
    title,
    subtitle,
    description,
    imageSrc,
    badgeIcon: BadgeIcon,
    badgeText,
    highlightText
}) => {
    return (
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/80 z-10"></div>
            <img
                src={imageSrc}
                alt={title}
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 sm:px-6 lg:px-8 xl:px-24">
                <div className="max-w-5xl">
                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-4 md:mb-6">
                        {BadgeIcon && <BadgeIcon className="h-4 w-4 md:h-5 md:w-5 text-white" />}
                        <span className="text-white text-xs md:text-sm font-medium">{badgeText}</span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 md:mb-4 leading-snug md:leading-tight">
                        {title} {highlightText && (
                            <span className="text-blue-300">{highlightText}</span>
                        )}
                    </h1>
                    <p className="text-sm md:text-base lg:text-xl text-blue-100 max-w-2xl leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

HeroSection.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    description: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    badgeIcon: PropTypes.elementType,
    badgeText: PropTypes.string.isRequired,
    highlightText: PropTypes.string
};

export default HeroSection;