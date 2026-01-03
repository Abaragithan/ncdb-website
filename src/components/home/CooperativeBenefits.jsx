import { ArrowRightIcon, BanknotesIcon, ChartBarIcon, CheckCircleIcon, UserGroupIcon, HeartIcon, UsersIcon, ShieldCheckIcon, ScaleIcon } from "@heroicons/react/24/outline";
import InfoCards from "../common/InfoCards";
import { Link } from "react-router-dom";

// Benefits content - This would come from WordPress API
const BENEFITS_CONTENT = {
    title: "Benefits of Cooperation",
    subtitle: "Join the cooperative movement and experience the power of collective banking",
    ctaButton: "Learn About Membership",
    ctaLink: "/about",
    benefits: [
        {
            title: "Shared Strength",
            description: "People come together to pool resources, reduce individual risk, and face challenges collectively.",
            icon: <UsersIcon className="h-8 w-8" />
        },
        {
            title: "Democratic Control",
            description: "Members participate in decisions that affect their livelihoods, ensuring fairness and shared responsibility.",
            icon: <ScaleIcon className="h-8 w-8" />
        },
        {
            title: "Equitable Access",
            description: "Cooperation enables fair access to finance, services, and opportunities, especially for small producers and rural communities.",
            icon: <BanknotesIcon className="h-8 w-8" />
        },
        {
            title: "Local Resilience",
            description: "Communities retain control over resources, strengthening self-reliance and long-term sustainability.",
            icon: <ShieldCheckIcon className="h-8 w-8" />
        },
        {
            title: "Collective Well-Being",
            description: "Economic activities are guided by social needs, prioritizing dignity, stability, and mutual support over individual gain.",
            icon: <HeartIcon className="h-8 w-8" />
        }
    ]
};

const CooperativeBenefits = () => {
    return (
        <section className="py-12 md:py-20 bg-gradient-to-br from-blue-900 to-indigo-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {BENEFITS_CONTENT.title}
                    </h2>
                    <p className="text-blue-200 text-base md:text-lg max-w-2xl mx-auto">
                        {BENEFITS_CONTENT.subtitle}
                    </p>
                </div>

                <InfoCards
                    cards={BENEFITS_CONTENT.benefits}
                    columns={4}
                    cardClassName="bg-white/10 backdrop-blur-sm border-white/20 hover:border-white/40 hover:bg-white/15 text-white"
                />

                <div className="mt-12 md:mt-16 text-center">
                    <Link
                        to={BENEFITS_CONTENT.ctaLink}
                        className="inline-flex items-center bg-white text-blue-900 hover:bg-blue-50 font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg text-base md:text-lg transition-all duration-300 transform hover:scale-[1.02]"
                    >
                        {BENEFITS_CONTENT.ctaButton}
                        <ArrowRightIcon className="h-5 w-5 ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CooperativeBenefits;