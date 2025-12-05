import PropTypes from 'prop-types';

const TabNavigation = ({ tabs, activeTab, onTabChange }) => {
    return (
        <div className="bg-white rounded-lg md:rounded-2xl shadow-lg border border-blue-100 mb-8 md:mb-12 overflow-hidden">
            <nav className="flex flex-col sm:flex-row sm:flex-wrap">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`flex items-center justify-center space-x-2 px-4 py-4 sm:px-6 sm:py-6 font-semibold text-base sm:text-lg transition-all duration-300 flex-1 min-w-[160px] ${activeTab === tab.id
                                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                                : 'text-blue-900 hover:bg-blue-50'
                            }`}
                        onClick={() => onTabChange(tab.id)}
                    >
                        <div className="h-5 w-5">{tab.icon}</div>
                        <span className="hidden sm:inline">{tab.label}</span>
                        <span className="sm:hidden">{tab.shortLabel || tab.label}</span>
                    </button>
                ))}
            </nav>
        </div>
    );
};

TabNavigation.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            shortLabel: PropTypes.string,
            icon: PropTypes.node.isRequired
        })
    ).isRequired,
    activeTab: PropTypes.string.isRequired,
    onTabChange: PropTypes.func.isRequired
};

export default TabNavigation;