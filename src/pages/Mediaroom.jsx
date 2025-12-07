import { useState } from 'react';
import {
  NewspaperIcon,
  MegaphoneIcon,
  PhotoIcon,
  DocumentTextIcon,
  CalendarIcon,
  ArrowDownTrayIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import DepartmentLayout from '../components/layout/DepartmentLayout';
import ContentTabs from '../components/common/ContentTabs';
import InfoCards from '../components/common/InfoCards';
import ContactInfo from '../components/common/ContactInfo';

const Mediaroom = () => {
  const [activeTab, setActiveTab] = useState('news');

  const heroConfig = {
    title: "Stay Updated with",
    description: "Access the latest news, press releases, media resources, and photo galleries from Northern Cooperative Development Bank.",
    imageSrc: "/images/mediaroom.jpg",
    badgeIcon: NewspaperIcon,
    badgeText: "Media Room",
    highlightText: "NCDB News"
  };

  const tabs = [
    { id: 'news', label: 'News & Updates', icon: <NewspaperIcon className="h-5 w-5" /> },
    { id: 'pressReleases', label: 'Press Releases', icon: <MegaphoneIcon className="h-5 w-5" /> },
    { id: 'mediaResources', label: 'Media Resources', icon: <DocumentTextIcon className="h-5 w-5" /> },
    { id: 'gallery', label: 'Photo Gallery', icon: <PhotoIcon className="h-5 w-5" /> }
  ];

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
    ]
  };

  const mediaResources = [
    {
      title: "NCDB 2024 Annual Report",
      description: "Comprehensive annual report detailing our financial performance and achievements.",
      icon: "📊",
      linkText: "Download PDF",
      downloadLink: "/documents/NCDB_Annual_Report_2024.pdf"
    },
    {
      title: "NCDB Corporate Brochure",
      description: "Overview of our services, mission, and impact.",
      icon: "📋",
      linkText: "Download PDF",
      downloadLink: "/documents/NCDB_Brochure_2024.pdf"
    },
    {
      title: "NCDB Logo Pack",
      description: "Official logos and brand assets for media use.",
      icon: "🎨",
      linkText: "Download ZIP",
      downloadLink: "/assets/NCDB_Logos.zip"
    },
    {
      title: "Brand Guidelines",
      description: "Complete brand guidelines and usage instructions.",
      icon: "📐",
      linkText: "Download PDF",
      downloadLink: "/documents/NCDB_Brand_Guidelines.pdf"
    }
  ];

  const contactInfo = {
    phone: "+94 212 232 673 (Ext. 205)",
    email: "media@ncdb.coop",
    address: "Elders Home Complex, Kandy Road, Kaithady, Jaffna 40000",
    hours: "Monday - Friday: 9:00 AM - 5:00 PM"
  };

  return (
    <DepartmentLayout
      heroConfig={heroConfig}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      <ContentTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} columns={4} />

      {activeTab === 'news' && (
        <div className="space-y-8 md:space-y-12">
          <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900">Latest News</h2>
            </div>

            <div className="space-y-6 md:space-y-8">
              {mediaData.news.map((item) => (
                <div key={item.id} className="bg-gradient-to-br from-white to-blue-50 rounded-xl md:rounded-2xl border border-blue-100 p-6 md:p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4 md:mb-6">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2 md:mb-3">{item.title}</h3>
                      <div className="flex items-center text-blue-600 text-sm mb-3 md:mb-4">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        <span className="mr-3 md:mr-4">{item.date}</span>
                        <span className="px-2 py-1 md:px-3 md:py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-blue-700 text-sm md:text-base mb-4 md:mb-6">{item.description}</p>
                  <button className="text-blue-700 hover:text-blue-900 font-semibold flex items-center group text-sm md:text-base">
                    Read Full Story
                    <ArrowRightIcon className="h-4 w-4 md:h-5 md:w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'pressReleases' && (
        <div className="space-y-8 md:space-y-12">
          <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Press Releases</h2>

            <div className="space-y-6 md:space-y-8">
              {mediaData.pressReleases.map((item) => (
                <div key={item.id} className="bg-gradient-to-br from-white to-blue-50 rounded-xl md:rounded-2xl border border-blue-100 p-6 md:p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start mb-4 md:mb-6">
                    <MegaphoneIcon className="h-6 w-6 md:h-8 md:w-8 text-blue-600 mr-4 md:mr-6 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-blue-900 mb-2 md:mb-3">{item.title}</h3>
                      <div className="flex items-center text-blue-600 text-sm mb-3 md:mb-4">
                        <CalendarIcon className="h-4 w-4 mr-2" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-blue-700 text-sm md:text-base mb-4 md:mb-6">{item.description}</p>
                  <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
                    <a
                      href={item.downloadLink}
                      download
                      className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-2 px-4 md:py-3 md:px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] text-sm md:text-base"
                    >
                      <ArrowDownTrayIcon className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                      Download PDF
                    </a>
                    <button className="text-blue-700 hover:text-blue-900 font-semibold flex items-center group text-sm md:text-base">
                      View Online
                      <ArrowRightIcon className="h-4 w-4 md:h-5 md:w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'mediaResources' && (
        <div className="space-y-8 md:space-y-12">
          <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Media Resources</h2>
            <p className="text-blue-600 text-base md:text-lg mb-6 md:mb-8 max-w-3xl">
              Download official NCDB resources for media use, including annual reports, corporate brochures, logos, and brand guidelines.
            </p>

            <InfoCards
              cards={mediaResources}
              columns={2}
              cardClassName="hover:border-blue-300 hover:shadow-xl"
            />

            <div className="mt-8 md:mt-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">Media Contact</h3>
                  <p className="text-blue-100 text-base md:text-lg">
                    For media inquiries, interviews, or additional information, please contact our communications team.
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-blue-100 mb-2">Email: {contactInfo.email}</p>
                  <p className="text-blue-100">Phone: {contactInfo.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'gallery' && (
        <div className="space-y-8 md:space-y-12">
          <div className="bg-white rounded-xl md:rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 lg:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 md:mb-8">Photo Gallery</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-gradient-to-br from-white to-blue-50 rounded-xl md:rounded-2xl border border-blue-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="h-48 md:h-64 overflow-hidden">
                    <img
                      src={`/images/people${item}.jpg`}
                      alt={`Gallery item ${item}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="flex justify-between items-start mb-3 md:mb-4">
                      <h3 className="text-base md:text-lg font-bold text-blue-900">Event Photo {item}</h3>
                      <span className="px-2 py-1 md:px-3 md:py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        Events
                      </span>
                    </div>
                    <button className="text-blue-700 hover:text-blue-900 font-semibold flex items-center group w-full justify-center text-sm md:text-base">
                      <PhotoIcon className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                      View Photo
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </DepartmentLayout>
  );
};

export default Mediaroom;