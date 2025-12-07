import { ArrowRightIcon, BanknotesIcon, ChartBarIcon, CheckCircleIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import InfoCards from "../common/InfoCards";
import { Link } from "react-router-dom";

const CooperativeBenefits = () => {
    const benefits = [
        {
            title: "Community Ownership",
            description: "Members collectively own and control the cooperative, ensuring democratic decision-making.",
            icon: <UserGroupIcon className="h-8 w-8 " />
        },
        {
            title: "Financial Inclusion",
            description: "Access to banking services and financial products tailored for cooperative societies.",
            icon: <BanknotesIcon className="h-8 w-8" />
        },
        {
            title: "Technical Support",
            description: "Expert guidance and technological solutions to enhance cooperative operations.",
            icon: <CheckCircleIcon className="h-8 w-8" />
        },
        {
            title: "Sustainable Growth",
            description: "Long-term development programs focused on community prosperity and stability.",
            icon: <ChartBarIcon className="h-8 w-8" />
        }
    ];

    return (
        <section className="py-12 md:py-20 bg-gradient-to-br from-blue-900 to-indigo-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Benefits of Cooperation</h2>
                    <p className="text-blue-200 text-base md:text-lg max-w-2xl mx-auto">
                        Join the cooperative movement and experience the power of collective banking
                    </p>
                </div>

                <InfoCards
                    cards={benefits}
                    columns={4}
                    cardClassName="bg-white/10 backdrop-blur-sm border-white/20 hover:border-white/40 hover:bg-white/15 text-white"
                />

                <div className="mt-12 md:mt-16 text-center">
                    <Link
                        to="/about"
                        className="inline-flex items-center bg-white text-blue-900 hover:bg-blue-50 font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg text-base md:text-lg transition-all duration-300 transform hover:scale-[1.02]"
                    >
                        Learn About Membership
                        <ArrowRightIcon className="h-5 w-5 ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CooperativeBenefits;
