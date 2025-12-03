import React, { useState } from 'react';
import {
  BriefcaseIcon,
  MapPinIcon,
  CalendarIcon,
  AcademicCapIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const Career = () => {
  const [activeTab, setActiveTab] = useState('openings');
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      id: 1,
      title: "Internship Program",
      department: "Development Banking",
      type: "Internship",
      location: "Jaffna, Sri Lanka",
      experience: "0-1 years",
      education: "Bachelor's in Banking/Finance",
      description: "6-month internship program for fresh graduates to gain hands-on experience in development banking.",
      responsibilities: [
        "Assist in loan processing and documentation",
        "Support field visits to cooperative societies",
        "Participate in financial literacy programs",
        "Contribute to research and data analysis"
      ],
      benefits: ["Stipend", "Training & Development", "Certificate", "Potential Full-time Opportunity"]
    },
    {
      id: 2,
      title: "Marketing Specialist",
      department: "Marketing & Sales",
      type: "Full-Time",
      location: "Colombo, Sri Lanka",
      experience: "3-5 years",
      education: "MBA in Marketing",
      description: "Lead marketing initiatives for cooperative products and services across multiple channels.",
      responsibilities: [
        "Develop marketing strategies for cooperative products",
        "Manage digital marketing campaigns",
        "Coordinate with sales teams",
        "Analyze market trends and competitor activities"
      ],
      benefits: ["Competitive Salary", "Performance Bonus", "Health Insurance", "Professional Development"]
    },
    {
      id: 3,
      title: "Research Analyst",
      department: "Research & Development",
      type: "Full-Time",
      location: "Colombo, Sri Lanka",
      experience: "2-4 years",
      education: "Master's in Economics/Statistics",
      description: "Conduct research on cooperative development and economic impact studies.",
      responsibilities: [
        "Design and implement research studies",
        "Analyze economic data",
        "Prepare research reports",
        "Present findings to stakeholders"
      ],
      benefits: ["Research Allowance", "Publication Support", "Conference Opportunities", "Flexible Schedule"]
    },
    {
      id: 4,
      title: "Financial Analyst",
      department: "Finance Department",
      type: "Full-Time",
      location: "Jaffna, Sri Lanka",
      experience: "3-5 years",
      education: "CPA/CMA Qualified",
      description: "Analyze financial data and prepare reports for cooperative banking operations.",
      responsibilities: [
        "Financial forecasting and budgeting",
        "Performance analysis",
        "Regulatory compliance reporting",
        "Risk assessment"
      ],
      benefits: ["Performance Bonus", "Retirement Plan", "Health Benefits", "Career Advancement"]
    },
    {
      id: 5,
      title: "HR Coordinator",
      department: "Human Resources",
      type: "Part-Time",
      location: "Remote",
      experience: "2-3 years",
      education: "Bachelor's in HR Management",
      description: "Support HR functions including recruitment, training, and employee engagement.",
      responsibilities: [
        "Coordinate recruitment processes",
        "Organize training programs",
        "Manage employee records",
        "Support performance management"
      ],
      benefits: ["Flexible Hours", "Remote Work", "Training Opportunities", "Pro-rated Benefits"]
    },
    {
      id: 6,
      title: "Technical Support Officer",
      department: "Technical Unit",
      type: "Full-Time",
      location: "Kilinochchi, Sri Lanka",
      experience: "1-2 years",
      education: "Diploma in Engineering",
      description: "Provide technical support for cooperative machinery and equipment.",
      responsibilities: [
        "Maintain cooperative equipment",
        "Provide technical training",
        "Coordinate repairs and maintenance",
        "Document technical specifications"
      ],
      benefits: ["Field Allowance", "Technical Training", "Equipment Support", "Health Insurance"]
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

  const [selectedDepartment, setSelectedDepartment] = useState('all');

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/80 z-10"></div>
        <img
          src="/images/career2.jpg"
          alt="Career"
          className="w-full h-full object-cover"
        />

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <BriefcaseIcon className="h-5 w-5 text-white" />
              <span className="text-white text-sm font-medium">Careers at NCDB</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              Build Your Career in <span className="text-blue-300">Cooperative Banking</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
              Join our mission to empower communities through innovative financial solutions and make a meaningful impact on cooperative development.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Career Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8 text-center">
            <div className="text-4xl font-bold text-blue-700 mb-2">{jobs.length}+</div>
            <p className="text-blue-800 font-semibold">Current Openings</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8 text-center">
            <div className="text-4xl font-bold text-blue-700 mb-2">50+</div>
            <p className="text-blue-800 font-semibold">Team Members</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8 text-center">
            <div className="text-4xl font-bold text-blue-700 mb-2">6</div>
            <p className="text-blue-800 font-semibold">Departments</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg border border-blue-100 p-8 text-center">
            <div className="text-4xl font-bold text-blue-700 mb-2">25+</div>
            <p className="text-blue-800 font-semibold">Interns Trained</p>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="bg-white rounded-2xl shadow-lg border border-blue-100 mb-12 overflow-hidden">
          <nav className="flex flex-wrap">
            {[
              { id: 'openings', label: 'Job Openings', icon: <BriefcaseIcon className="h-5 w-5" /> },
              { id: 'benefits', label: 'Benefits', icon: <CheckCircleIcon className="h-5 w-5" /> },
              { id: 'culture', label: 'Our Culture', icon: <UserGroupIcon className="h-5 w-5" /> },
              { id: 'apply', label: 'How to Apply', icon: <ArrowRightIcon className="h-5 w-5" /> }
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
          {/* Job Openings Tab */}
          {activeTab === 'openings' && (
            <div className="space-y-12">
              <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Current Job Openings</h2>

                {/* Department Filter */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">Filter by Department</h3>
                  <div className="flex flex-wrap gap-3">
                    {departments.map((dept) => (
                      <button
                        key={dept.id}
                        className={`px-6 py-3 rounded-full transition-all duration-300 ${selectedDepartment === dept.id
                          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                          : 'bg-blue-50 text-blue-900 hover:bg-blue-100'
                          }`}
                        onClick={() => setSelectedDepartment(dept.id)}
                      >
                        <div className="flex items-center space-x-2">
                          <span>{dept.name}</span>
                          <span className="text-sm opacity-75">({dept.count})</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Jobs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredJobs.map((job) => (
                    <div key={job.id} className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg border border-blue-100 p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3 className="text-xl font-bold text-blue-900 mb-2">{job.title}</h3>
                          <p className="text-blue-600">{job.department}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${job.type === 'Full-Time' ? 'bg-green-100 text-green-800' :
                          job.type === 'Part-Time' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'
                          }`}>
                          {job.type}
                        </span>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div className="flex items-center text-blue-600">
                          <MapPinIcon className="h-4 w-4 mr-2" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center text-blue-600">
                          <CalendarIcon className="h-4 w-4 mr-2" />
                          <span>Experience: {job.experience}</span>
                        </div>
                        <div className="flex items-center text-blue-600">
                          <AcademicCapIcon className="h-4 w-4 mr-2" />
                          <span>{job.education}</span>
                        </div>
                      </div>

                      <p className="text-blue-700 text-sm mb-6">{job.description.substring(0, 100)}...</p>

                      <div className="flex gap-4">
                        <button
                          onClick={() => setSelectedJob(job)}
                          className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
                        >
                          View Details
                        </button>
                        <button className="flex-1 bg-white text-blue-700 border border-blue-300 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition-colors">
                          Apply Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Job Details Modal */}
          {selectedJob && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-8">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h2 className="text-3xl font-bold text-blue-900 mb-2">{selectedJob.title}</h2>
                      <p className="text-blue-600 text-lg">{selectedJob.department}</p>
                    </div>
                    <button
                      onClick={() => setSelectedJob(null)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <MapPinIcon className="h-5 w-5 text-blue-600 mr-3" />
                        <span className="text-blue-700">Location: {selectedJob.location}</span>
                      </div>
                      <div className="flex items-center">
                        <CalendarIcon className="h-5 w-5 text-blue-600 mr-3" />
                        <span className="text-blue-700">Experience: {selectedJob.experience}</span>
                      </div>
                      <div className="flex items-center">
                        <AcademicCapIcon className="h-5 w-5 text-blue-600 mr-3" />
                        <span className="text-blue-700">Education: {selectedJob.education}</span>
                      </div>
                      <div className="flex items-center">
                        <BriefcaseIcon className="h-5 w-5 text-blue-600 mr-3" />
                        <span className="text-blue-700">Type: {selectedJob.type}</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                      <h3 className="text-lg font-bold text-blue-900 mb-4">Benefits</h3>
                      <div className="space-y-2">
                        {selectedJob.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center">
                            <CheckCircleIcon className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                            <span className="text-blue-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-4">Job Description</h3>
                      <p className="text-blue-700">{selectedJob.description}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-blue-900 mb-4">Key Responsibilities</h3>
                      <ul className="space-y-2">
                        {selectedJob.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="h-2 w-2 rounded-full bg-blue-600 mr-3 mt-2"></div>
                            <span className="text-blue-700">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 flex gap-4">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02]">
                      Apply for this Position
                    </button>
                    <button
                      onClick={() => setSelectedJob(null)}
                      className="flex-1 bg-white text-blue-700 border border-blue-300 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Benefits Tab */}
          {activeTab === 'benefits' && (
            <div className="space-y-12">
              <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Employee Benefits</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                  {[
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
                  ].map((benefit, index) => (
                    <div key={index} className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg border border-blue-100 p-8">
                      <div className="text-4xl mb-4">{benefit.icon}</div>
                      <h3 className="text-xl font-bold text-blue-900 mb-4">{benefit.title}</h3>
                      <ul className="space-y-2">
                        {benefit.items.map((item, idx) => (
                          <li key={idx} className="text-blue-600 text-sm">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Career;