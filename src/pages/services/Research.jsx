import React, { useState } from 'react';
import {
  BeakerIcon,
  CalendarIcon,
  UserGroupIcon,
  DocumentTextIcon,
  ArrowRightIcon,
  AcademicCapIcon,
  ChartBarIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline';

const Research = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const categories = [
    {
      key: "researches",
      name: "Research Projects",
      icon: <BeakerIcon className="h-8 w-8" />,
      description: "Ongoing and completed research initiatives"
    },
    {
      key: "events_conferences",
      name: "Events & Conferences",
      icon: <CalendarIcon className="h-8 w-8" />,
      description: "Academic events and professional gatherings"
    },
    {
      key: "collaborations_partners",
      name: "Collaborations & Partners",
      icon: <UserGroupIcon className="h-8 w-8" />,
      description: "Research partnerships and networks"
    },
    {
      key: "publications",
      name: "Publications",
      icon: <DocumentTextIcon className="h-8 w-8" />,
      description: "Research papers and publications"
    },
  ];

  const categoryBackgrounds = {
    researches: "/images/research.png",
    events_conferences: "/images/conference.png",
    collaborations_partners: "/images/colabration.png",
    publications: "/images/publication.png",
  };

  const researchProjects = [
    {
      id: 1,
      title: "Sustainable Agriculture Practices",
      description: "Research on organic farming techniques for cooperative societies",
      status: "Ongoing",
      duration: "2024-2025",
      researchers: ["Dr. A. Perera", "Prof. S. Kumar"]
    },
    {
      id: 2,
      title: "Financial Inclusion Strategies",
      description: "Study on improving banking access in rural communities",
      status: "Completed",
      duration: "2023-2024",
      researchers: ["Dr. R. Silva", "Mr. K. Raj"]
    },
    {
      id: 3,
      title: "Cooperative Governance Models",
      description: "Analysis of effective governance structures for cooperatives",
      status: "Ongoing",
      duration: "2024-2026",
      researchers: ["Prof. M. Fernando", "Dr. S. Pathirana"]
    }
  ];

  const events = [
    {
      id: 1,
      title: "Annual Cooperative Research Symposium",
      date: "March 15-16, 2025",
      location: "Colombo, Sri Lanka",
      participants: "200+ researchers"
    },
    {
      id: 2,
      title: "Rural Development Conference",
      date: "June 10-12, 2024",
      location: "Jaffna, Sri Lanka",
      participants: "150+ participants"
    }
  ];

  const publications = [
    {
      id: 1,
      title: "Impact of Cooperative Banking on Rural Economy",
      authors: ["Perera, A.", "Silva, R."],
      journal: "Journal of Cooperative Studies",
      year: "2024"
    },
    {
      id: 2,
      title: "Sustainable Farming in Northern Sri Lanka",
      authors: ["Kumar, S.", "Fernando, M."],
      journal: "Agricultural Research Review",
      year: "2023"
    }
  ];

  const handleCategoryClick = (categoryKey) => {
    setSelectedCategory(categoryKey);
    setActiveTab('details');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/80 z-10"></div>
        <img
          src="/images/research3.jpg"
          alt="Research"
          className="w-full h-full object-cover"
        />

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <AcademicCapIcon className="h-5 w-5 text-white" />
              <span className="text-white text-sm font-medium">Research & Development</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              Advancing Cooperative <span className="text-blue-300">Knowledge & Innovation</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
              Pioneering research initiatives and knowledge sharing for sustainable cooperative development and community empowerment.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Tabs Navigation */}
        <div className="bg-white rounded-2xl shadow-lg border border-blue-100 mb-12 overflow-hidden">
          <nav className="flex flex-wrap">
            {[
              { id: 'overview', label: 'Overview', icon: <ChartBarIcon className="h-5 w-5" /> },
              { id: 'researches', label: 'Projects', icon: <BeakerIcon className="h-5 w-5" /> },
              { id: 'events_conferences', label: 'Events', icon: <CalendarIcon className="h-5 w-5" /> },
              { id: 'collaborations_partners', label: 'Partners', icon: <UserGroupIcon className="h-5 w-5" /> },
              { id: 'publications', label: 'Publications', icon: <DocumentTextIcon className="h-5 w-5" /> }
            ].map((tab) => (
              <button
                key={tab.id}
                className={`flex items-center space-x-2 px-8 py-6 font-semibold text-lg transition-all duration-300 flex-1 justify-center ${activeTab === tab.id
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                  : 'text-blue-900 hover:bg-blue-50'
                  }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-12">
              <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Research & Development Overview</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <p className="text-blue-700 text-lg mb-6 leading-relaxed">
                      The Research & Development department at NCDB is dedicated to advancing knowledge and innovation in cooperative banking and community development. Our research initiatives focus on creating sustainable solutions that empower cooperative societies and drive economic growth.
                    </p>
                    <p className="text-blue-700 text-lg leading-relaxed">
                      Through rigorous academic research, collaborative projects, and knowledge dissemination, we contribute to the evolution of cooperative models and practices that benefit communities across Northern Sri Lanka.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-blue-900 mb-6">Research Focus Areas</h3>
                    <ul className="space-y-4">
                      {[
                        "Sustainable agricultural practices",
                        "Financial inclusion strategies",
                        "Cooperative governance models",
                        "Community economic development",
                        "Technology adoption in cooperatives"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="h-2 w-2 rounded-full bg-blue-600 mr-3 mt-2"></div>
                          <span className="text-blue-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Research Categories Grid */}
              <div>
                <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Research Categories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {categories.map((category) => (
                    <div
                      key={category.key}
                      className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg border border-blue-100 p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300 cursor-pointer"
                      onClick={() => setActiveTab(category.key)}
                    >
                      <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 mb-6">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-bold text-blue-900 mb-3">{category.name}</h3>
                      <p className="text-blue-600 text-sm">{category.description}</p>
                      <button className="mt-4 text-blue-700 hover:text-blue-900 font-semibold flex items-center group">
                        Explore
                        <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Research Projects Tab */}
          {activeTab === 'researches' && (
            <div className="space-y-12">
              <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Research Projects</h2>
                <p className="text-blue-600 text-lg mb-8 max-w-3xl">
                  Our ongoing and completed research initiatives focus on developing innovative solutions for cooperative development and community empowerment.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {researchProjects.map((project) => (
                    <div key={project.id} className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg border border-blue-100 p-8 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center justify-between mb-6">
                        <span className={`px-4 py-1 rounded-full text-sm font-medium ${project.status === 'Ongoing' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                          {project.status}
                        </span>
                        <span className="text-blue-600 text-sm">{project.duration}</span>
                      </div>
                      <h3 className="text-xl font-bold text-blue-900 mb-4">{project.title}</h3>
                      <p className="text-blue-600 mb-6">{project.description}</p>
                      <div className="mb-6">
                        <h4 className="font-semibold text-blue-900 mb-2">Researchers:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.researchers.map((researcher, idx) => (
                            <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                              {researcher}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button className="text-blue-700 hover:text-blue-900 font-semibold flex items-center group">
                        View Details
                        <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Events & Conferences Tab */}
          {activeTab === 'events_conferences' && (
            <div className="space-y-12">
              <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Events & Conferences</h2>
                <p className="text-blue-600 text-lg mb-8 max-w-3xl">
                  Join us in our knowledge-sharing events and professional gatherings that bring together experts and practitioners in cooperative development.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {events.map((event) => (
                    <div key={event.id} className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg border border-blue-100 p-8 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="flex-shrink-0">
                          <CalendarIcon className="h-8 w-8 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-blue-900">{event.title}</h3>
                          <div className="flex items-center text-blue-600 text-sm mt-1">
                            <span>{event.date} • {event.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center text-blue-500 text-sm mb-6">
                        <UserGroupIcon className="h-4 w-4 mr-2" />
                        <span>{event.participants}</span>
                      </div>
                      <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02]">
                        Register Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Publications Tab */}
          {activeTab === 'publications' && (
            <div className="space-y-12">
              <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Research Publications</h2>
                <p className="text-blue-600 text-lg mb-8 max-w-3xl">
                  Access our published research papers, articles, and reports contributing to the field of cooperative development.
                </p>

                <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg border border-blue-100 overflow-hidden mb-12">
                  <div className="divide-y divide-blue-100">
                    {publications.map((publication) => (
                      <div key={publication.id} className="p-8 hover:bg-blue-50/50 transition-colors duration-200">
                        <div className="flex items-start mb-4">
                          <div className="flex-shrink-0">
                            <DocumentTextIcon className="h-8 w-8 text-blue-600" />
                          </div>
                          <div className="ml-6">
                            <h3 className="text-lg font-medium text-blue-900">{publication.title}</h3>
                            <div className="flex items-center text-blue-500 text-sm mt-2">
                              <span className="mr-4">Authors: {publication.authors.join(', ')}</span>
                              <span>Journal: {publication.journal}</span>
                            </div>
                            <div className="mt-3">
                              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                                {publication.year}
                              </span>
                            </div>
                          </div>
                        </div>
                        <button className="text-blue-700 hover:text-blue-900 font-semibold flex items-center group">
                          Download Paper
                          <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Research;