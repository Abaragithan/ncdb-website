import React, { useState } from 'react';
import {
  NewspaperIcon,
  MegaphoneIcon,
  PhotoIcon,
  DocumentTextIcon,
  CalendarIcon,
  ArrowDownTrayIcon,
  ArrowRightIcon,
  VideoCameraIcon
} from '@heroicons/react/24/outline';

const Mediaroom = () => {
  const [activeTab, setActiveTab] = useState('news');

  const mediaData = {
    news: [
      {
        id: 1,
        title: "NCDB Secures ₹50 Crore Funding for Cooperative Development",
        date: "March 10, 2025",
        description: "NCDB has received significant funding from international development partners to expand cooperative banking services in Northern Sri Lanka.",
        category: "Funding Announcement"
      },
      {
        id: 2,
        title: "New Technology Initiatives for Green Farming Launched",
        date: "February 25, 2025",
        description: "NCDB launches innovative technology programs supporting sustainable agriculture practices among cooperative societies.",
        category: "Technology Innovation"
      },
      {
        id: 3,
        title: "NCDB Recognized for Excellence in Cooperative Banking",
        date: "January 15, 2025",
        description: "NCDB receives national recognition for outstanding contributions to cooperative development and community empowerment.",
        category: "Awards & Recognition"
      }
    ],
    pressReleases: [
      {
        id: 1,
        title: "NCDB Expands Services to 200 New Cooperative Societies",
        date: "March 5, 2025",
        description: "Official announcement regarding the expansion of NCDB's banking services to additional cooperative societies across Northern Province.",
        downloadLink: "/documents/expansion_press_release.pdf"
      },
      {
        id: 2,
        title: "Annual Financial Results 2024",
        date: "February 20, 2025",
        description: "Press release detailing NCDB's financial performance and achievements for the fiscal year 2024.",
        downloadLink: "/documents/annual_results_2024.pdf"
      }
    ],
    mediaResources: [
      {
        id: 1,
        title: "NCDB 2024 Annual Report",
        type: "PDF",
        size: "4.2 MB",
        downloadLink: "/documents/NCDB_Annual_Report_2024.pdf"
      },
      {
        id: 2,
        title: "NCDB Corporate Brochure",
        type: "PDF",
        size: "2.1 MB",
        downloadLink: "/documents/NCDB_Brochure_2024.pdf"
      },
      {
        id: 3,
        title: "NCDB Logo Pack",
        type: "ZIP",
        size: "15.7 MB",
        downloadLink: "/assets/NCDB_Logos.zip"
      },
      {
        id: 4,
        title: "Brand Guidelines",
        type: "PDF",
        size: "8.3 MB",
        downloadLink: "/documents/NCDB_Brand_Guidelines.pdf"
      }
    ],
    gallery: [
      {
        id: 1,
        title: "Cooperative Society Meeting",
        category: "Events",
        image: "/images/people1.jpg"
      },
      {
        id: 2,
        title: "Agricultural Training Program",
        category: "Training",
        image: "/images/people2.jpg"
      },
      {
        id: 3,
        title: "Community Development Workshop",
        category: "Workshops",
        image: "/images/people3.jpg"
      },
      {
        id: 4,
        title: "Leadership Conference",
        category: "Conferences",
        image: "/images/people4.jpg"
      },
      {
        id: 5,
        title: "Field Visit to Cooperative Farms",
        category: "Field Visits",
        image: "/images/people5.jpg"
      },
      {
        id: 6,
        title: "Awards Ceremony",
        category: "Events",
        image: "/images/people6.jpg"
      }
    ]
  };

  const categories = [
    {
      id: 'news',
      name: 'News & Updates',
      icon: <NewspaperIcon className="h-8 w-8" />,
      description: 'Latest news and announcements from NCDB'
    },
    {
      id: 'pressReleases',
      name: 'Press Releases',
      icon: <MegaphoneIcon className="h-8 w-8" />,
      description: 'Official statements and press releases'
    },
    {
      id: 'mediaResources',
      name: 'Media Resources',
      icon: <DocumentTextIcon className="h-8 w-8" />,
      description: 'Downloadable resources for media'
    },
    {
      id: 'gallery',
      name: 'Photo Gallery',
      icon: <PhotoIcon className="h-8 w-8" />,
      description: 'Photos from events and activities'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/80 z-10"></div>
        <img
          src="/images/mediaroom.jpg"
          alt="Mediaroom"
          className="w-full h-full object-cover"
        />

        {/* Hero Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <NewspaperIcon className="h-5 w-5 text-white" />
              <span className="text-white text-sm font-medium">Media Room</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              Stay Updated with <span className="text-blue-300">NCDB News</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
              Access the latest news, press releases, media resources, and photo galleries from Northern Cooperative Development Bank.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Media Categories Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Media Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-lg border border-blue-100 p-8 hover:shadow-xl hover:border-blue-300 transition-all duration-300 cursor-pointer ${activeTab === category.id ? 'ring-2 ring-blue-500' : ''
                  }`}
                onClick={() => setActiveTab(category.id)}
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 mb-6">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{category.name}</h3>
                <p className="text-blue-600 text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {/* News Tab */}
          {activeTab === 'news' && (
            <div className="space-y-12">
              <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-12">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-blue-900">Latest News</h2>
                  <button className="text-blue-700 hover:text-blue-900 font-semibold flex items-center group">
                    Subscribe to Newsletter
                    <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="space-y-8">
                  {mediaData.news.map((item) => (
                    <div key={item.id} className="bg-gradient-to-br from-white to-blue-50 rounded-2xl border border-blue-100 p-8 hover:shadow-lg transition-all duration-300">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div>
                          <h3 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h3>
                          <div className="flex items-center text-blue-600 text-sm mb-4">
                            <CalendarIcon className="h-4 w-4 mr-2" />
                            <span className="mr-4">{item.date}</span>
                            <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                              {item.category}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-blue-700 mb-6">{item.description}</p>
                      <button className="text-blue-700 hover:text-blue-900 font-semibold flex items-center group">
                        Read Full Story
                        <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Press Releases Tab */}
          {activeTab === 'pressReleases' && (
            <div className="space-y-12">
              <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Press Releases</h2>

                <div className="space-y-8">
                  {mediaData.pressReleases.map((item) => (
                    <div key={item.id} className="bg-gradient-to-br from-white to-blue-50 rounded-2xl border border-blue-100 p-8 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start mb-6">
                        <MegaphoneIcon className="h-8 w-8 text-blue-600 mr-6 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h3>
                          <div className="flex items-center text-blue-600 text-sm mb-4">
                            <CalendarIcon className="h-4 w-4 mr-2" />
                            <span>{item.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-blue-700 mb-6">{item.description}</p>
                      <div className="flex items-center space-x-4">
                        <a
                          href={item.downloadLink}
                          download
                          className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02]"
                        >
                          <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                          Download PDF
                        </a>
                        <button className="text-blue-700 hover:text-blue-900 font-semibold flex items-center group">
                          View Online
                          <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Media Resources Tab */}
          {activeTab === 'mediaResources' && (
            <div className="space-y-12">
              <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Media Resources</h2>
                <p className="text-blue-600 text-lg mb-8 max-w-3xl">
                  Download official NCDB resources for media use, including annual reports, corporate brochures, logos, and brand guidelines.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {mediaData.mediaResources.map((item) => (
                    <div key={item.id} className="bg-gradient-to-br from-white to-blue-50 rounded-2xl border border-blue-100 p-8 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start mb-6">
                        <div className={`flex items-center justify-center h-12 w-12 rounded-xl mr-6 ${item.type === 'PDF' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
                          }`}>
                          <span className="font-bold">{item.type}</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
                          <p className="text-blue-600 text-sm">Size: {item.size}</p>
                        </div>
                      </div>
                      <a
                        href={item.downloadLink}
                        download
                        className="inline-flex items-center w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] justify-center"
                      >
                        <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                        Download Resource
                      </a>
                    </div>
                  ))}
                </div>

                <div className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-white">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-6 md:mb-0 md:mr-8">
                      <h3 className="text-2xl font-bold mb-4">Media Contact</h3>
                      <p className="text-blue-100 text-lg">
                        For media inquiries, interviews, or additional information, please contact our communications team.
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-blue-100 mb-2">Email: media@ncdb.coop</p>
                      <p className="text-blue-100">Phone: +94 212 232 673 (Ext. 205)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Gallery Tab */}
          {activeTab === 'gallery' && (
            <div className="space-y-12">
              <div className="bg-white rounded-3xl shadow-lg border border-blue-100 p-12">
                <h2 className="text-3xl font-bold text-blue-900 mb-8">Photo Gallery</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {mediaData.gallery.map((item) => (
                    <div key={item.id} className="bg-gradient-to-br from-white to-blue-50 rounded-2xl border border-blue-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                      <div className="h-64 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-lg font-bold text-blue-900">{item.title}</h3>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                            {item.category}
                          </span>
                        </div>
                        <button className="text-blue-700 hover:text-blue-900 font-semibold flex items-center group w-full justify-center">
                          <PhotoIcon className="h-5 w-5 mr-2" />
                          View Photo
                        </button>
                      </div>
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

export default Mediaroom;