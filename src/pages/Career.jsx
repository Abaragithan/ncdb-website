import { useState } from 'react';
import {
  BriefcaseIcon,
  MapPinIcon,
  CalendarIcon,
  AcademicCapIcon,
  CheckCircleIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import DepartmentLayout from '../components/layout/DepartmentLayout';
import ContentTabs from '../components/common/ContentTabs';
import FilterTabs from '../components/common/FilterTabs';

const Career = () => {
  const [activeTab, setActiveTab] = useState('openings');
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const heroConfig = {
    title: "Build Your Career in",
    description: "Join our mission to empower communities through innovative financial solutions and make a meaningful impact on cooperative development.",
    imageSrc: "/images/career2.jpg",
    badgeIcon: BriefcaseIcon,
    badgeText: "Careers at NCDB",
    highlightText: "Cooperative Banking"
  };

  const metrics = [
    { id: 1, metric: "6+", label: "Current Openings", icon: "📋" },
    { id: 2, metric: "50+", label: "Team Members", icon: "👥" },
    { id: 3, metric: "6", label: "Departments", icon: "🏢" },
    { id: 4, metric: "25+", label: "Interns Trained", icon: "🎓" }
  ];

  const tabs = [
    { id: 'openings', label: 'Job Openings', icon: <BriefcaseIcon className="h-5 w-5" /> },
    { id: 'benefits', label: 'Benefits', icon: <CheckCircleIcon className="h-5 w-5" /> },
    { id: 'culture', label: 'Our Culture', icon: <UserGroupIcon className="h-5 w-5" /> }
  ];

  const jobs = [
    {
      id: 1,
      title: "Internship Program",
      department: "Development Banking",
      type: "Internship",
      location: "Jaffna, Sri Lanka",
      experience: "0-1 years",
      education: "Bachelor's in Banking/Finance",
      description: "6-month internship program for fresh graduates to gain hands-on experience in development banking."
    },
    {
      id: 2,
      title: "Marketing Specialist",
      department: "Marketing & Sales",
      type: "Full-Time",
      location: "Colombo, Sri Lanka",
      experience: "3-5 years",
      education: "MBA in Marketing",
      description: "Lead marketing initiatives for cooperative products and services across multiple channels."
    },
    {
      id: 3,
      title: "Research Analyst",
      department: "Research & Development",
      type: "Full-Time",
      location: "Colombo, Sri Lanka",
      experience: "2-4 years",
      education: "Master's in Economics/Statistics",
      description: "Conduct research on cooperative development and economic impact studies."
    },
    {
      id: 4,
      title: "Financial Analyst",
      department: "Finance Department",
      type: "Full-Time",
      location: "Jaffna, Sri Lanka",
      experience: "3-5 years",
      education: "CPA/CMA Qualified",
      description: "Analyze financial data and prepare reports for cooperative banking operations."
    },
    {
      id: 5,
      title: "HR Coordinator",
      department: "Human Resources",
      type: "Part-Time",
      location: "Remote",
      experience: "2-3 years",
      education: "Bachelor's in HR Management",
      description: "Support HR functions including recruitment, training, and employee engagement."
    },
    {
      id: 6,
      title: "Technical Support Officer",
      department: "Technical Unit",
      type: "Full-Time",
      location: "Kilinochchi, Sri Lanka",
      experience: "1-2 years",
      education: "Diploma in Engineering",
      description: "Provide technical support for cooperative machinery and equipment."
    }
  ];

  const departments = [
    { id: 'all', name: 'All Departments', count: jobs.length },
    { id: 'development', name: 'Development Banking', count: jobs.filter(j => j.department.includes('Development')).length },
    { id: 'marketing', name: 'Marketing & Sales', count: jobs.filter(j => j.department.includes('Marketing')).length },
    { id: 'research', name: 'Research & Development', count: jobs.filter(j => j.department.includes('Research')).length },
    { id: 'finance', name: 'Finance', count: jobs.filter(j => j.department.includes('Finance')).length },
    { id: 'hr', name: 'Human Resources', count: jobs.filter(j => j.department.includes('HR')).length },
    { id: 'technical', name: 'Technical Unit', count: jobs.filter(j => j.department.includes('Technical')).length }
  ];

  const filteredJobs = selectedDepartment === 'all'
    ? jobs
    : jobs.filter(job => {
      if (selectedDepartment === 'development') return job.department.includes('Development');
      if (selectedDepartment === 'marketing') return job.department.includes('Marketing');
      if (selectedDepartment === 'research') return job.department.includes('Research');
      if (selectedDepartment === 'finance') return job.department.includes('Finance');
      if (selectedDepartment === 'hr') return job.department.includes('HR');
      if (selectedDepartment === 'technical') return job.department.includes('Technical');
      return true;
    });

  const benefits = [
    {
      title: "Health & Wellness",
      items: ["Comprehensive Health Insurance", "Annual Health Checkups", "Wellness Programs"],
      icon: "🏥"
    },
    {
      title: "Financial Security",
      items: ["Competitive Salary", "Performance Bonus", "Retirement Plans", "Loan Facilities"],
      icon: "💰"
    },
    {
      title: "Work-Life Balance",
      items: ["Flexible Work Hours", "Paid Time Off", "Maternity/Paternity Leave", "Remote Work Options"],
      icon: "⚖️"
    },
    {
      title: "Career Growth",
      items: ["Training & Development", "Mentorship Programs", "Career Advancement", "Educational Assistance"],
      icon: "📈"
    }
  ];

  return (
    <DepartmentLayout
      heroConfig={heroConfig}
      metrics={metrics}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      <ContentTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} columns={3} />

      {activeTab === 'openings' && (
        <div className="space-y-8 md:space-y-12">
          <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Current Job Openings</h2>

            <FilterTabs
              filters={departments}
              activeFilter={selectedDepartment}
              onFilterChange={setSelectedDepartment}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredJobs.map((job) => (
                <div key={job.id} className="bg-gradient-to-br from-white to-blue-50 rounded-xl md:rounded-2xl shadow-lg border border-blue-100 p-6 md:p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4 md:mb-6">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-1 md:mb-2">{job.title}</h3>
                      <p className="text-blue-600 text-sm md:text-base">{job.department}</p>
                    </div>
                    <span className={`px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-medium ${job.type === 'Full-Time' ? 'bg-green-100 text-green-800' :
                      job.type === 'Part-Time' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                      {job.type}
                    </span>
                  </div>

                  <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                    <div className="flex items-center text-blue-600 text-sm">
                      <MapPinIcon className="h-4 w-4 mr-2" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-blue-600 text-sm">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      <span>Experience: {job.experience}</span>
                    </div>
                    <div className="flex items-center text-blue-600 text-sm">
                      <AcademicCapIcon className="h-4 w-4 mr-2" />
                      <span>{job.education}</span>
                    </div>
                  </div>

                  <p className="text-blue-700 text-sm mb-4 md:mb-6">{job.description.substring(0, 100)}...</p>

                  <div className="flex gap-3 md:gap-4">
                    <button
                      onClick={() => setSelectedJob(job)}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-2 px-4 md:py-3 md:px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] text-sm md:text-base"
                    >
                      View Details
                    </button>
                    <button className="flex-1 bg-white text-blue-700 border border-blue-300 hover:bg-blue-50 font-medium py-2 px-4 md:py-3 md:px-6 rounded-lg transition-colors text-sm md:text-base">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'benefits' && (
        <div className="space-y-8 md:space-y-12">
          <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Employee Benefits</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-blue-50 rounded-xl md:rounded-2xl shadow-lg border border-blue-100 p-6 md:p-8">
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4">{benefit.icon}</div>
                  <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-3 md:mb-4">{benefit.title}</h3>
                  <ul className="space-y-1 md:space-y-2">
                    {benefit.items.map((item, idx) => (
                      <li key={idx} className="text-blue-600 text-sm md:text-base">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </DepartmentLayout>
  );
};

export default Career;