import React, { useState } from 'react';

const Board = () => {
  // State to track which category is active for team members
  const [activeCategory, setActiveCategory] = useState('board');
  
  // Team member data
  const teamData = {
    board: [
      { id: 1, name: 'Prof. Narada Fernando', title: 'Chairman', image: "/images/people1.jpg" },
      { id: 2, name: 'Mr. Jayantha Thilakarathne', title: 'Director', image: '/images/people2.jpg' },
      { id: 3, name: 'Mr. Bradley Emerson', title: 'Director', image: '/images/people3.jpg' },
      { id: 4, name: 'Dr. Ahilan Kadirgamar', title: 'Director', image: '/images/people4.jpg' },
      { id: 5, name: 'Prof. Narada Fernando', title: 'Chairman', image: "/images/people1.jpg" },
      { id: 6, name: 'Mr. Jayantha Thilakarathne', title: 'Director', image: '/images/people2.jpg' },
      { id: 7, name: 'Mr. Bradley Emerson', title: 'Director', image: '/images/people3.jpg' },
      { id: 8, name: 'Dr. Ahilan Kadirgamar', title: 'Director', image: '/images/people4.jpg' },
      { id: 9, name: 'Ms. Sarah Johnson', title: 'Chief Financial Officer', image: '/images/people5.jpg' },
      { id: 10, name: 'Mr. David Chen', title: 'Chief Operations Officer', image: '/images/people6.jpg' }
    ],
    CEO: [
      { id: 1, name: 'Ms. Sarah Johnson', title: 'Chief Financial Officer', image: '/images/people5.jpg' },
      { id: 2, name: 'Mr. David Chen', title: 'Chief Operations Officer', image: '/images/people6.jpg' }
    ],
    executives: [
      { id: 1, name: 'Ms. Sarah Johnson', title: 'Chief Financial Officer', image: '/images/people7.jpg' },
      { id: 2, name: 'Mr. David Chen', title: 'Chief Operations Officer', image: '/images/people3.jpg' },
      { id: 3, name: 'Mrs. Priya Patel', title: 'Chief Technology Officer', image: '/images/people4.jpg' }
    ]
  };

  // Categories for the sidebar
  const categories = [
    { id: 'board', name: 'Board of Directors', color: 'bg-blue-100', borderColor: 'border-blue-400' },
    { id: 'CEO', name: 'CEO', color: 'bg-blue-100', borderColor: 'border-blue-400' },
    { id: 'executives', name: 'Executive Managment', color: 'bg-blue-100', borderColor: 'border-blue-400' }
  ];

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-black-800 mb-12">Meet Our Team</h2>
        
        <div className="flex flex-col md:flex-row">
          {/* Sidebar Categories */}
          <div className="md:w-1/4 mb-6 md:mb-0">
            {categories.map((category) => (
              <div 
                key={category.id}
                className={`${category.color} ${
                  activeCategory === category.id ? `border-l-8 ${category.borderColor}` : ''
                } p-6 cursor-pointer hover:opacity-90 transition-all duration-30  ease-in-out mb-2`}
                onClick={() => setActiveCategory(category.id)}
              >
                <h3 className="text-lg font-medium text-gray-800">{category.name}</h3>
              </div>
            ))}
          </div>
          
          {/* Team Members Grid */}
          <div className="md:w-3/4 md:pl-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {teamData[activeCategory].map((member) => (
                <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-30 ">
                  <div className="p-4">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-48 object-cover object-center rounded-md"
                    />
                    <h3 className="mt-4 text-lg font-semibold text-gray-800">{member.name}</h3>
                    <p className="text-gray-600">{member.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
