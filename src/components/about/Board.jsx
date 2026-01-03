import React, { useState } from 'react';

// Team data - This would come from WordPress API
const TEAM_DATA = {
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
    { id: 1, name: 'T Suthakaran', title: 'Chief Executive Officer', image: '/images/ceo.jpg' }
  ],
  executives: [
    { id: 1, name: 'Joseph Hasantha', title: 'Finance Manager', image: '/images/people7.jpg' },
    { id: 2, name: 'Dominic Regifton', title: 'HR and Admin Manager', image: '/images/people3.jpg' }
  ]
};

const CATEGORIES = [
  { id: 'board', name: 'Board of Directors', color: 'bg-blue-100', borderColor: 'border-blue-500', textColor: 'text-blue-900' },
  { id: 'CEO', name: 'CEO', color: 'bg-blue-100', borderColor: 'border-blue-500', textColor: 'text-blue-900' },
  { id: 'executives', name: 'Executive Management', color: 'bg-blue-100', borderColor: 'border-blue-500', textColor: 'text-blue-900' }
];

const Board = () => {
  const [activeCategory, setActiveCategory] = useState('board');

  return (
    <div className="py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar Categories */}
          <div className="md:w-1/4 mb-6 md:mb-0">
            {CATEGORIES.map((category) => (
              <div
                key={category.id}
                className={`${category.color} ${activeCategory === category.id ? `border-l-8 ${category.borderColor} bg-gradient-to-r from-blue-50 to-blue-100` : ''
                  } p-6 cursor-pointer hover:bg-blue-50 transition-all duration-300 ease-in-out mb-2 rounded-lg`}
                onClick={() => setActiveCategory(category.id)}
              >
                <h3 className={`text-lg font-medium ${category.textColor}`}>{category.name}</h3>
              </div>
            ))}
          </div>

          {/* Team Members Grid */}
          <div className="md:w-3/4 md:pl-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {TEAM_DATA[activeCategory].map((member) => (
                <div key={member.id} className="bg-white rounded-xl shadow-md border border-blue-100 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-blue-200">
                  <div className="p-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-48 object-cover object-center rounded-md"
                    />
                    <h3 className="mt-4 text-lg font-semibold text-blue-900">{member.name}</h3>
                    <p className="text-blue-600">{member.title}</p>
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