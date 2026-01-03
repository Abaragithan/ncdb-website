import InfoCards from "../common/InfoCards";
import { Link } from 'react-router-dom';

// Services content - This would come from WordPress API
const SERVICES_CONTENT = {
    title: "Comprehensive Services",
    subtitle: "Tailored solutions designed specifically for cooperative societies and their members",
    services: [
        {
            title: "Development Banking",
            description: "Specialized financial solutions for cooperative societies including loans, grants, and credit facilities.",
            icon: "🏦",
            features: ["Loans", "Grants", "Credit Programs"],
            linkText: "Explore Service",
            linkTo: "/developmentBanking"
        },
        {
            title: "Research & Development",
            description: "Market research, innovation programs, and technical support for cooperative growth.",
            icon: "🔬",
            features: ["Research", "Innovation", "Support"],
            linkText: "Explore Service",
            linkTo: "/research"
        },
        {
            title: "Marketing",
            description: "Comprehensive marketing solutions to expand cooperative products' market reach.",
            icon: "📈",
            features: ["Sales", "Distribution", "Promotion"],
            linkText: "Explore Service",
            linkTo: "/marketing"
        },
        {
            title: "Technical Support",
            description: "Technical expertise and innovation support for cooperative machinery and equipment.",
            icon: "🔧",
            features: ["Technology", "Support", "Training"],
            linkText: "Explore Service",
            linkTo: "/technology"
        },
    ]
};

const ServicesOverview = () => {
    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                        {SERVICES_CONTENT.title}
                    </h2>
                    <p className="text-blue-600 text-base md:text-lg max-w-2xl mx-auto">
                        {SERVICES_CONTENT.subtitle}
                    </p>
                </div>

                <InfoCards
                    cards={SERVICES_CONTENT.services}
                    columns={4}
                    linkComponent={Link}
                />
            </div>
        </section>
    );
};

export default ServicesOverview;