import { useState } from 'react';
import PropTypes from 'prop-types';
import HeroSection from '../common/HeroSection';
import MetricCards from '../common/MetricCards';
import MissionStatement from '../common/MissionStatement';
import TabNavigation from '../common/TabNavigation';

const DepartmentLayout = ({
    heroConfig,
    metrics,
    missionConfig,
    tabs,
    children,
    activeTab,
    onTabChange,
    initialActiveTab = 'overview'
}) => {
    const [internalActiveTab, setInternalActiveTab] = useState(initialActiveTab);

    const handleTabChange = (tabId) => {
        if (onTabChange) {
            onTabChange(tabId);
        } else {
            setInternalActiveTab(tabId);
        }
    };

    const currentActiveTab = activeTab || internalActiveTab;

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <HeroSection {...heroConfig} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
                {metrics && <MetricCards metrics={metrics} />}

                {missionConfig && <MissionStatement {...missionConfig} />}

                {tabs && (
                    <TabNavigation
                        tabs={tabs}
                        activeTab={currentActiveTab}
                        onTabChange={handleTabChange}
                    />
                )}

                <div className="tab-content">
                    {children}
                </div>
            </div>
        </div>
    );
};

DepartmentLayout.propTypes = {
    heroConfig: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imageSrc: PropTypes.string.isRequired,
        badgeIcon: PropTypes.elementType,
        badgeText: PropTypes.string.isRequired,
        highlightText: PropTypes.string
    }).isRequired,
    metrics: PropTypes.array,
    missionConfig: PropTypes.shape({
        mission: PropTypes.string.isRequired,
        icon: PropTypes.elementType,
        title: PropTypes.string,
        bgColor: PropTypes.string
    }),
    tabs: PropTypes.array,
    children: PropTypes.node,
    activeTab: PropTypes.string,
    onTabChange: PropTypes.func,
    initialActiveTab: PropTypes.string
};

export default DepartmentLayout;