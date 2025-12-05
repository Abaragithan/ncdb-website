import PropTypes from 'prop-types';

const MetricCards = ({ metrics, columns = 4 }) => {
    const gridCols = {
        1: 'grid-cols-1',
        2: 'grid-cols-1 md:grid-cols-2',
        3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
    };

    return (
        <div className={`grid ${gridCols[columns]} gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-20`}>
            {metrics.map((item) => (
                <div
                    key={item.id}
                    className="bg-white rounded-xl md:rounded-2xl shadow-lg border border-blue-100 p-6 md:p-8 text-center hover:shadow-xl hover:border-blue-200 transition-all duration-300"
                >
                    {item.icon && (
                        <div className="text-3xl md:text-4xl mb-3 md:mb-4">{item.icon}</div>
                    )}
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-700 mb-1 md:mb-2">
                        {item.metric}
                    </div>
                    <p className="text-blue-800 font-semibold text-sm md:text-base">
                        {item.label}
                    </p>
                    {item.description && (
                        <p className="text-blue-600 text-xs md:text-sm mt-1">
                            {item.description}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
};

MetricCards.propTypes = {
    metrics: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            metric: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            icon: PropTypes.node,
            description: PropTypes.string
        })
    ).isRequired,
    columns: PropTypes.number
};

export default MetricCards;