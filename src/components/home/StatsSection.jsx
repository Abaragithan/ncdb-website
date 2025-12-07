import MetricCards from "../common/MetricCards";

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

export default StatsSection;