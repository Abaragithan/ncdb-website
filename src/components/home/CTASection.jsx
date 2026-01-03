import { Link } from "react-router-dom";

// CTA content - This would come from WordPress API
const CTA_CONTENT = {
    title: "Ready to Join the Cooperative Movement?",
    description: "Become a member society or partner with NCDB to drive sustainable development and economic growth in your community.",
    primaryButton: "Contribute Now",
    secondaryButton: "Become a Collaborator",
    primaryLink: "/contribute",
    secondaryLink: "/collaborators",
    contactText: "Contact our membership team at",
    contactEmail: "membership@ncdb.coop"
};

const CTASection = () => {
    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 shadow-xl">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 mb-4 md:mb-6">
                        {CTA_CONTENT.title}
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl text-blue-600 mb-6 md:mb-10 max-w-2xl mx-auto leading-relaxed">
                        {CTA_CONTENT.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to={CTA_CONTENT.primaryLink}
                            className="bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg text-base md:text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                        >
                            {CTA_CONTENT.primaryButton}
                        </Link>
                        <Link
                            to={CTA_CONTENT.secondaryLink}
                            className="bg-white text-blue-600 hover:bg-blue-50 border-2 border-blue-200 font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg text-base md:text-lg transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                            {CTA_CONTENT.secondaryButton}
                        </Link>
                    </div>
                    <p className="text-blue-500 text-sm md:text-base mt-6">
                        {CTA_CONTENT.contactText} {CTA_CONTENT.contactEmail}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CTASection;