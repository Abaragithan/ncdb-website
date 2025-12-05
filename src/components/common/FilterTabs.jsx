import PropTypes from 'prop-types';

const FilterTabs = ({ filters, activeFilter, onFilterChange, className = '' }) => {
    return (
        <div className={`mb-6 md:mb-8 ${className}`}>
            <h3 className="text-lg md:text-xl font-semibold text-blue-900 mb-4">Filter by Category</h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
                {filters.map((filter) => (
                    <button
                        key={filter.id}
                        className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base transition-all duration-300 ${activeFilter === filter.id
                            ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                            : 'bg-blue-50 text-blue-900 hover:bg-blue-100'
                            }`}
                        onClick={() => onFilterChange(filter.id)}
                    >
                        <div className="flex items-center space-x-2">
                            <span>{filter.name}</span>
                            {filter.count !== undefined && (
                                <span className="text-xs md:text-sm opacity-75">({filter.count})</span>
                            )}
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
};

FilterTabs.propTypes = {
    filters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            count: PropTypes.number
        })
    ).isRequired,
    activeFilter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
    className: PropTypes.string
};

export default FilterTabs;