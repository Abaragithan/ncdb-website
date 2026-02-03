import { useState } from 'react';
import {
    UserGroupIcon,
    AcademicCapIcon,
    BriefcaseIcon,
    DocumentTextIcon,
    BuildingOfficeIcon,
    ShieldCheckIcon,
    CheckCircleIcon,
    ChartBarIcon,
    ArrowRightIcon
} from '@heroicons/react/24/outline';
import DepartmentLayout from '../layout/DepartmentLayout';
import ContactInfo from '../common/ContactInfo';

const HRAdminComponent = () => {
    const [activeTab, setActiveTab] = useState('overview');

    // Content from document
    const heroConfig = {
        title: "Caring for People Who",
        description: "Supporting staff and systems to sustain NCDB's cooperative mission.",
        imageSrc: "/images/hr-admin.jpg",
        badgeIcon: UserGroupIcon,
        badgeText: "HR & Administration Division",
        highlightText: "Serve Communities",
        slogan: "Caring for People Who Serve Communities"
    };

    const missionConfig = {
        mission: "The HR & Administration Division ensures that NCDB remains a values-driven workplace grounded in cooperation, accountability, and mutual respect. It supports staff well-being, organisational systems, and internal processes that enable effective service to cooperative societies.",
        icon: UserGroupIcon,
        title: "Our HR Mission"
    };

    const tabs = [
        { id: 'overview', label: 'Overview', shortLabel: 'Overview', icon: <ChartBarIcon className="h-5 w-5" /> },
        { id: 'principles', label: 'Core Principles', shortLabel: 'Principles', icon: <ShieldCheckIcon className="h-5 w-5" /> },
        { id: 'functions', label: 'Key Functions', shortLabel: 'Functions', icon: <BriefcaseIcon className="h-5 w-5" /> },
        { id: 'programs', label: 'Learning Programs', shortLabel: 'Programs', icon: <AcademicCapIcon className="h-5 w-5" /> },
        { id: 'contact', label: 'Contact', shortLabel: 'Contact', icon: <UserGroupIcon className="h-5 w-5" /> }
    ];

    // Core Principles from document
    const corePrinciples = [
        {
            id: 1,
            principle: "Respect and dignity at work",
            description: "Creating a workplace where every individual is valued and respected",
            icon: <UserGroupIcon className="h-8 w-8" />
        },
        {
            id: 2,
            principle: "Collective responsibility",
            description: "Fostering shared accountability and teamwork across the organization",
            icon: <BuildingOfficeIcon className="h-8 w-8" />
        },
        {
            id: 3,
            principle: "Learning and growth",
            description: "Supporting continuous professional development and personal growth",
            icon: <AcademicCapIcon className="h-8 w-8" />
        },
        {
            id: 4,
            principle: "Fairness and inclusion",
            description: "Ensuring equitable treatment and inclusive practices for all",
            icon: <ShieldCheckIcon className="h-8 w-8" />
        }
    ];

    // Key Functions from document
    const keyFunctions = [
        {
            id: 1,
            name: "Human Resource Management",
            description: "Comprehensive HR services for NCDB staff and cooperative societies",
            activities: ["Recruitment", "Performance management", "Employee relations"]
        },
        {
            id: 2,
            name: "Capacity Building & Staff Development",
            description: "Professional development and training programs for staff",
            activities: ["Training programs", "Skill development", "Leadership training"]
        },
        {
            id: 3,
            name: "Internship & Learning Programmes",
            description: "Programs for youth and emerging cooperative professionals",
            activities: ["Internship coordination", "Mentorship programs", "Career development"]
        },
        {
            id: 4,
            name: "Administrative & Operational Support",
            description: "Supporting organizational systems and internal processes",
            activities: ["Office management", "Facilities management", "Administrative systems"]
        },
        {
            id: 5,
            name: "Policy Implementation & Compliance",
            description: "Ensuring adherence to policies and regulatory requirements",
            activities: ["Policy development", "Compliance monitoring", "Procedure implementation"]
        },
        {
            id: 6,
            name: "Organisational Coordination",
            description: "Facilitating coordination across departments and functions",
            activities: ["Inter-department coordination", "Meeting facilitation", "Communication systems"]
        },
        {
            id: 7,
            name: "Capacity Building for Cooperatives",
            description: "Basic HR guidance for member cooperative societies",
            activities: ["HR training", "Policy guidance", "Best practices sharing"]
        }
    ];

    const learningPrograms = [
        {
            id: 1,
            name: "Cooperative Leadership Development",
            audience: "Emerging cooperative leaders",
            duration: "6 months",
            focus: "Leadership skills, cooperative principles, management"
        },
        {
            id: 2,
            name: "Technical Internship Program",
            audience: "Technical students and graduates",
            duration: "3-6 months",
            focus: "Hands-on technical training, practical experience"
        },
        {
            id: 3,
            name: "Administrative Excellence Program",
            audience: "Cooperative administrative staff",
            duration: "4 months",
            focus: "Office management, record keeping, communication"
        }
    ];

    const metrics = [
        { id: 1, metric: "200+", label: "Staff Members", icon: "👥" },
        { id: 2, metric: "50+", label: "Training Programs", icon: "📚" },
        { id: 3, metric: "100+", label: "Interns Trained", icon: "🎓" },
        { id: 4, metric: "100%", label: "Policy Compliance", icon: "✅" }
    ];

    const contactInfo = {
        phone: "+94 212 232 675",
        email: "hr@ncdb.coop",
        address: "Elders Home Complex, Kandy Road, Kaithady, Jaffna 40000",
        hours: "Monday - Friday: 9:00 AM - 5:00 PM",
        inquiryEmail: "careers@ncdb.coop"
    };

    return (
        <DepartmentLayout
            heroConfig={heroConfig}
            metrics={metrics}
            missionConfig={missionConfig}
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
        >
            {activeTab === 'overview' && (
                <div className="space-y-8 md:space-y-12">
                    <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">HR & Administration Division Overview</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                            <div>
                                <p className="text-blue-700 text-base md:text-lg mb-6 leading-relaxed">
                                    The HR & Administration Division ensures that NCDB remains a values-driven workplace grounded in cooperation, accountability, and mutual respect. We support staff well-being, organizational systems, and internal processes that enable effective service to cooperative societies.
                                </p>
                                <p className="text-blue-700 text-base md:text-lg leading-relaxed">
                                    Our division creates the foundation for NCDB's success by caring for the people who serve communities, building organizational capacity, and maintaining efficient administrative systems that support our cooperative mission.
                                </p>
                            </div>
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl md:rounded-2xl p-6 md:p-8">
                                <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-6">Our People Philosophy</h3>
                                <ul className="space-y-4">
                                    {[
                                        "People are our most valuable resource",
                                        "Values-driven workplace culture",
                                        "Continuous learning and development",
                                        "Work-life balance and well-being",
                                        "Inclusive and supportive environment"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckCircleIcon className="h-5 w-5 md:h-6 md:w-6 text-blue-600 mr-3 flex-shrink-0 mt-1" />
                                            <span className="text-blue-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8 text-center">Our Dual Focus</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl md:rounded-2xl shadow-lg border border-blue-100 p-6 md:p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                                <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 mb-4 md:mb-6">
                                    <UserGroupIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">People Development</h3>
                                <p className="text-blue-600 text-sm md:text-base">Supporting staff growth, well-being, and professional development to sustain NCDB's mission.</p>
                            </div>

                            <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl md:rounded-2xl shadow-lg border border-indigo-100 p-6 md:p-8 hover:shadow-xl hover:border-indigo-300 transition-all duration-300">
                                <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-700 mb-4 md:mb-6">
                                    <BuildingOfficeIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                </div>
                                <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">Organizational Support</h3>
                                <p className="text-blue-600 text-sm md:text-base">Maintaining efficient systems and processes that enable effective service delivery.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'principles' && (
                <div className="space-y-8 md:space-y-12">
                    <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Core HR Principles</h2>
                        <p className="text-blue-600 text-base md:text-lg mb-8 md:mb-12 max-w-3xl">
                            Our human resources practices are built on principles that create a supportive, respectful, and growth-oriented workplace aligned with cooperative values.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                            {corePrinciples.map((principle) => (
                                <div key={principle.id} className="bg-gradient-to-br from-white to-blue-50 rounded-xl md:rounded-2xl shadow-lg border border-blue-100 p-6 md:p-8 hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-center space-x-4 mb-4 md:mb-6">
                                        <div className="flex-shrink-0">
                                            <div className="h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white">
                                                {principle.icon}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-lg md:text-xl font-bold text-blue-900">{principle.principle}</h3>
                                        </div>
                                    </div>
                                    <p className="text-blue-700 text-sm md:text-base">{principle.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 bg-gradient-to-r from-purple-600 to-violet-700 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-white">
                            <div className="flex flex-col md:flex-row items-center justify-between">
                                <div className="mb-6 md:mb-0 md:mr-8">
                                    <h3 className="text-lg md:text-2xl font-bold mb-4">Values-Driven Workplace</h3>
                                    <p className="text-purple-100 text-base md:text-lg">
                                        At NCDB, we believe that how we treat our staff directly impacts how we serve our communities. Our HR practices reflect our commitment to cooperation, accountability, and mutual respect.
                                    </p>
                                </div>
                                <button className="bg-white text-purple-700 hover:bg-purple-50 font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
                                    View Career Opportunities
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'functions' && (
                <div className="space-y-8 md:space-y-12">
                    <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Key HR & Administrative Functions</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {keyFunctions.map((func) => (
                                <div key={func.id} className="bg-gradient-to-br from-white to-blue-50 rounded-xl md:rounded-2xl shadow-lg border border-blue-100 p-6 md:p-8 hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 mb-4 md:mb-6">
                                        <BriefcaseIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">{func.name}</h3>
                                    <p className="text-blue-600 text-sm md:text-base mb-4 md:mb-6">{func.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {func.activities.map((activity, index) => (
                                            <span key={index} className="px-2 py-1 md:px-3 md:py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                                                {activity}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'programs' && (
                <div className="space-y-8 md:space-y-12">
                    <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Learning & Development Programs</h2>

                        <p className="text-blue-600 text-base md:text-lg mb-8 md:mb-12 max-w-3xl">
                            We offer various learning programs for NCDB staff, cooperative society members, and emerging cooperative professionals to build capacity and develop skills.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
                            {learningPrograms.map((program) => (
                                <div key={program.id} className="bg-gradient-to-br from-white to-blue-50 rounded-xl md:rounded-2xl shadow-lg border border-blue-100 p-6 md:p-8 hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-center justify-center h-12 w-12 md:h-16 md:w-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 mb-4 md:mb-6">
                                        <AcademicCapIcon className="h-6 w-6 md:h-8 md:w-8 text-white" />
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">{program.name}</h3>
                                    <div className="space-y-3 mb-4 md:mb-6">
                                        <div className="flex items-center text-blue-600 text-sm">
                                            <UserGroupIcon className="h-4 w-4 mr-2" />
                                            <span>Audience: {program.audience}</span>
                                        </div>
                                        <div className="flex items-center text-blue-600 text-sm">
                                            <BriefcaseIcon className="h-4 w-4 mr-2" />
                                            <span>Duration: {program.duration}</span>
                                        </div>
                                    </div>
                                    <p className="text-blue-700 text-sm md:text-base mb-4 md:mb-6">
                                        <span className="font-semibold">Focus:</span> {program.focus}
                                    </p>
                                    <button className="text-blue-700 hover:text-blue-900 font-semibold flex items-center group text-sm md:text-base">
                                        Learn More
                                        <ArrowRightIcon className="h-4 w-4 md:h-5 md:w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-white">
                            <div className="flex flex-col md:flex-row items-center justify-between">
                                <div className="mb-6 md:mb-0 md:mr-8">
                                    <h3 className="text-lg md:text-2xl font-bold mb-4">Join Our Learning Community</h3>
                                    <p className="text-blue-100 text-base md:text-lg">
                                        Whether you're an NCDB staff member, cooperative society member, or emerging cooperative professional, we have learning opportunities to support your growth and development.
                                    </p>
                                </div>
                                <button className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-6 md:py-4 md:px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
                                    Explore Learning Programs
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'contact' && (
                <div className="space-y-8 md:space-y-12">
                    <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Contact HR & Administration</h2>
                        <p className="text-blue-600 text-base md:text-lg mb-8 md:mb-12 max-w-3xl">
                            Get in touch with our HR & Administration team for inquiries about careers, training programs, internships, administrative support, or HR guidance for cooperative societies.
                        </p>

                        <ContactInfo contactInfo={contactInfo} />
                    </div>
                </div>
            )}
        </DepartmentLayout>
    );
};

export default HRAdminComponent;