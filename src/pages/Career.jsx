import { useState } from 'react';
import {
  BriefcaseIcon,
  MapPinIcon,
  AcademicCapIcon,
  UserGroupIcon,
  LightBulbIcon,
  HeartIcon,
  ChartBarIcon,
  BuildingLibraryIcon,
  UsersIcon,
  BookOpenIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { Diversity3 } from '@mui/icons-material';
import DepartmentLayout from '../components/layout/DepartmentLayout';
import ContentTabs from '../components/common/ContentTabs';
import FilterTabs from '../components/common/FilterTabs';
import InfoCards from '../components/common/InfoCards';

// Content configuration - This would be fetched from WordPress API
const CAREER_CONTENT = {
  pageTitle: "Be Part of Our Collective",

  hero: {
    title: "Work That Serves Communities, Not Just Jobs",
    description: "Join a workplace rooted in cooperation, purpose, and shared responsibility.",
    imageSrc: "/images/career2.jpg",
    badgeIcon: Diversity3,
    badgeText: "Be Part of Our Collective",
    highlightText: "Community Service"
  },

  metrics: [
    { id: 1, metric: "6+", label: "Current Openings", icon: "📋" },
    { id: 2, metric: "50+", label: "Team Members", icon: "👥" },
    { id: 3, metric: "6", label: "Departments", icon: "🏢" },
    { id: 4, metric: "25+", label: "Interns Trained", icon: "🎓" }
  ],

  tabs: [
    { id: 'beyond', label: 'Beyond Financial Benefits', icon: <LightBulbIcon className="h-5 w-5" /> },
    { id: 'culture', label: 'Our Culture', icon: <UserGroupIcon className="h-5 w-5" /> },
    { id: 'openings', label: 'Job Openings', icon: <BriefcaseIcon className="h-5 w-5" /> }
  ],

  // Beyond Financial Benefits content
  beyondBenefits: {
    title: "Beyond Financial Benefits",
    description: "At NCDB, we offer more than just a job. We provide opportunities for meaningful impact and personal growth in a cooperative environment.",

    benefits: [
      {
        title: "Cross-Sector Learning",
        description: "Learn across sectors how people's livelihoods are strengthened through cooperative action and regional development.",
        icon: <BookOpenIcon className="h-8 w-8 text-white" />
      },
      {
        title: "Community Development Exposure",
        description: "Gain wide-ranging exposure to community development, cooperative systems, and people-centred institutional work.",
        icon: <ChartBarIcon className="h-8 w-8 text-white" />
      },
      {
        title: "National Development Contribution",
        description: "Be part of a collective effort contributing to national development, rooted in the progress of the Northern region and its communities.",
        icon: <BuildingLibraryIcon className="h-8 w-8 text-white" />
      },
      {
        title: "Community-Centered Work",
        description: "Work alongside communities, not above them, learning directly from lived realities and grassroots experiences.",
        icon: <UsersIcon className="h-8 w-8 text-white" />
      },
      {
        title: "Professional Growth",
        description: "Grow professionally in a values-driven, learning-oriented environment that prioritizes both personal and collective development.",
        icon: <AcademicCapIcon className="h-8 w-8 text-white" />
      },
      {
        title: "Purpose-Driven Work",
        description: "Experience the satisfaction of meaningful work that directly improves lives and strengthens cooperative institutions.",
        icon: <HeartIcon className="h-8 w-8 text-white" />
      }
    ]
  },

  // Our Culture content
  culture: {
    title: "Our Culture",
    description: `"NCDB fosters a cooperative work culture based on trust, participation, shared responsibility, and accountability to the communities we serve. Success is understood collectively, measured by improved livelihoods and stronger cooperative institutions."`,
  },

  // Job Openings content - Minimal version
  jobOpenings: {
    title: "Current Job Openings",
    description: "Join our collective effort to strengthen cooperative societies and drive sustainable community development.",

    jobs: [
      {
        id: 1,
        title: "Community Development Officer",
        department: "Community Engagement",
        location: "Jaffna",
        type: "Full-Time"
      },
      {
        id: 2,
        title: "Cooperative Systems Analyst",
        department: "Cooperative Development",
        location: "Colombo",
        type: "Full-Time"
      },
      {
        id: 3,
        title: "Livelihood Development Specialist",
        department: "Program Development",
        location: "Colombo",
        type: "Full-Time"
      },
      {
        id: 4,
        title: "Community Finance Coordinator",
        department: "Finance Department",
        location: "Jaffna",
        type: "Full-Time"
      },
      {
        id: 5,
        title: "Learning & Development Facilitator",
        department: "Human Resources",
        location: "Remote",
        type: "Part-Time"
      },
      {
        id: 6,
        title: "Technical Support Officer",
        department: "Technical Unit",
        location: "Kilinochchi",
        type: "Full-Time"
      }
    ],

    departments: [
      { id: 'all', name: 'All', count: 6 },
      { id: 'community', name: 'Community', count: 1 },
      { id: 'cooperative', name: 'Cooperative', count: 1 },
      { id: 'program', name: 'Program', count: 1 },
      { id: 'finance', name: 'Finance', count: 1 },
      { id: 'hr', name: 'HR', count: 1 },
      { id: 'technical', name: 'Technical', count: 1 }
    ]
  }
};

const Career = () => {
  const [activeTab, setActiveTab] = useState('openings');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const {
    hero,
    metrics,
    tabs,
    beyondBenefits,
    culture,
    jobOpenings
  } = CAREER_CONTENT;

  const filteredJobs = selectedDepartment === 'all'
    ? jobOpenings.jobs
    : jobOpenings.jobs.filter(job => {
      if (selectedDepartment === 'community') return job.department.includes('Community');
      if (selectedDepartment === 'cooperative') return job.department.includes('Cooperative');
      if (selectedDepartment === 'program') return job.department.includes('Program');
      if (selectedDepartment === 'finance') return job.department.includes('Finance');
      if (selectedDepartment === 'hr') return job.department.includes('HR');
      if (selectedDepartment === 'technical') return job.department.includes('Technical');
      return true;
    });

  return (
    <DepartmentLayout
      heroConfig={{
        title: hero.title,
        description: hero.description,
        imageSrc: hero.imageSrc,
        badgeIcon: hero.badgeIcon,
        badgeText: hero.badgeText,
        highlightText: hero.highlightText
      }}
      metrics={metrics}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      <ContentTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} columns={3} />

      {activeTab === 'openings' && (
        <div className="space-y-8 md:space-y-12">
          <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
                {jobOpenings.title}
              </h2>
              <p className="text-blue-600 text-lg max-w-2xl mx-auto">
                {jobOpenings.description}
              </p>
            </div>

            <div className="mb-8">
              <FilterTabs
                filters={jobOpenings.departments}
                activeFilter={selectedDepartment}
                onFilterChange={setSelectedDepartment}
              />
            </div>

            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <div key={job.id} className="bg-gradient-to-br from-white to-blue-50 rounded-xl border border-blue-100 p-6 hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full ${job.type === 'Full-Time' ? 'bg-green-500' : 'bg-blue-500'}`}></div>
                        <h3 className="text-lg font-semibold text-blue-900">{job.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-3 text-sm text-blue-600">
                        <span className="flex items-center">
                          <BriefcaseIcon className="h-4 w-4 mr-1" />
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <MapPinIcon className="h-4 w-4 mr-1" />
                          {job.location}
                        </span>
                        <span className={`px-2 py-1 rounded ${job.type === 'Full-Time' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] text-sm min-w-[120px]">
                      Apply Now
                      <ArrowRightIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div> 
          </div>
        </div>
      )}

      {activeTab === 'beyond' && (
        <div className="space-y-8 md:space-y-12">
          <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">
              {beyondBenefits.title}
            </h2>
            <p className="text-blue-600 text-lg md:text-xl mb-8 md:mb-12 max-w-3xl">
              {beyondBenefits.description}
            </p>

            <InfoCards
              cards={beyondBenefits.benefits}
              columns={3}
            />
          </div>
        </div>
      )}

      {activeTab === 'culture' && (
        <div className="space-y-8 md:space-y-12">
          <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">
              {culture.title}
            </h2>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10">
              <blockquote className="text-blue-700 text-lg md:text-xl lg:text-2xl italic leading-relaxed text-center">
                {culture.description}
              </blockquote>
            </div>
          </div>
        </div>
      )}
    </DepartmentLayout>
  );
};

export default Career;