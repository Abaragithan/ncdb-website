import PropTypes from 'prop-types';

const ContentTabs = ({ tabs, activeTab, onTabChange, columns = 'auto' }) => {
    const gridCols = {
        auto: 'grid-cols-auto',
        1: 'grid-cols-1',
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4',
        5: 'grid-cols-5'
    };

    return (
        <div className="bg-white rounded-lg md:rounded-2xl shadow-lg border border-blue-100 mb-8 md:mb-12 overflow-hidden">
            <nav className={`grid ${gridCols[columns]}`}>
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`flex items-center justify-center space-x-2 px-4 py-4 md:px-8 md:py-6 font-semibold text-base md:text-lg transition-all duration-300 ${activeTab === tab.id
                            ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                            : 'text-blue-900 hover:bg-blue-50'
                            }`}
                        onClick={() => onTabChange(tab.id)}
                    >
                        {tab.icon}
                        <span>{tab.label}</span>
                    </button>
                ))}
            </nav>
        </div>
    );
};

ContentTabs.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            icon: PropTypes.node.isRequired
        })
    ).isRequired,
    activeTab: PropTypes.string.isRequired,
    onTabChange: PropTypes.func.isRequired,
    columns: PropTypes.oneOf(['auto', 1, 2, 3, 4, 5])
};

export default ContentTabs;