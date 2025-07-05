import React from 'react';

const team = [
  { name: 'Technical Support 1' },
  { name: 'Technical Support 2' },
  { name: 'Technical Support 3' },
];

const TechPerformance = () => (
  <div className="p-6 flex gap-8">
    {/* Main profile card */}
    <div className="bg-white rounded shadow p-6 w-[350px]">
      <div className="flex flex-col items-center mb-4">
        <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-2">
          <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
          </svg>
        </div>
        <div className="text-lg font-semibold">Technical Support Name</div>
        <div className="bg-gray-100 rounded px-3 py-1 text-sm mt-2 w-full text-center">
          Contact No: 0123456789<br />
          Department: ABC
        </div>
      </div>
      <div className="bg-gray-100 rounded p-4 mt-4">
        <div className="font-semibold mb-2">Total Ticket Handle <span className="float-right">5</span></div>
        <div className="text-sm mb-1">Ticket Solved <span className="float-right">2</span></div>
        <div className="text-sm mb-1">Ticket Pending <span className="float-right">1</span></div>
        <div className="text-sm mb-1">Ticket in progress <span className="float-right">2</span></div>
        <div className="text-sm flex items-center mt-2">
          Rating
          <span className="ml-2 text-yellow-500">
            {'★★★★★'}
          </span>
        </div>
      </div>
    </div>
    {/* Team list */}
    <div className="flex flex-col gap-4 mt-4">
      {team.map((member, idx) => (
        <div key={idx} className="bg-white rounded shadow flex items-center p-4 gap-4 w-[250px]">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
            </svg>
          </div>
          <div className="flex-1">
            <div className="font-semibold">{member.name}</div>
            <button className="bg-teal-400 text-white px-3 py-1 rounded mt-2 text-sm hover:bg-teal-600">
              View details
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TechPerformance;