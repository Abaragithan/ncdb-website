import PropTypes from 'prop-types';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const InfoCards = ({ cards, columns = 3, cardClassName = '', linkComponent: Link = 'div' }) => {
    const gridCols = {
        1: 'grid-cols-1',
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
    };

    return (
        <div className={`grid ${gridCols[columns]} gap-6 md:gap-8`}>
            {cards.map((card, index) => {
                const Content = (
                    <div className={`bg-gradient-to-br from-white to-blue-50 rounded-xl md:rounded-2xl shadow-lg border border-blue-100 p-6 md:p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300 ${cardClassName}`}>
                        {card.icon && (
                            <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 mb-4 md:mb-6">
                                {card.icon}
                            </div>
                        )}
                        <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">{card.title}</h3>
                        {card.description && (
                            <p className="text-blue-600 text-sm md:text-base mb-4 md:mb-6">{card.description}</p>
                        )}
                        {card.features && (
                            <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                                {card.features.map((feature, idx) => (
                                    <span key={idx} className="px-2 py-1 md:px-3 md:py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        )}
                        {card.linkText && (
                            <div className="text-blue-700 hover:text-blue-900 font-semibold flex items-center group">
                                {card.linkText}
                                <ArrowRightIcon className="h-4 w-4 md:h-5 md:w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </div>
                        )}
                    </div>
                );

                return card.linkTo ? (
                    <Link key={index} to={card.linkTo} className="block">
                        {Content}
                    </Link>
                ) : (
                    <div key={index}>
                        {Content}
                    </div>
                );
            })}
        </div>
    );
};

InfoCards.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            description: PropTypes.string,
            icon: PropTypes.node,
            features: PropTypes.arrayOf(PropTypes.string),
            linkText: PropTypes.string,
            linkTo: PropTypes.string
        })
    ).isRequired,
    columns: PropTypes.number,
    cardClassName: PropTypes.string,
    linkComponent: PropTypes.elementType
};

export default InfoCards;