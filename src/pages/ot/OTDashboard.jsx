import React from 'react';
import { FaUsers, FaHeadset } from 'react-icons/fa';

const summary = [
  { label: 'Total Tickets', value: 12, color: 'bg-blue-500' },
  { label: 'Total Solved', value: 8, color: 'bg-green-400' },
  { label: 'Total Awaiting Approval', value: 2, color: 'bg-red-400' },
  { label: 'Total in Progress', value: 2, color: 'bg-yellow-300' },
];

const OTDashboard = () => (
  <div className="p-4">
    <h2 className="text-center text-2xl font-semibold mb-4">Operational TeamDashboard</h2>
    {/* Summary Cards */}
    <div className="grid grid-cols-4 gap-4 mb-6">
      {summary.map((item) => (
        <div key={item.label} className={`rounded-lg shadow p-4 text-white ${item.color}`}>
          <div className="text-lg">{item.label}</div>
          <div className="text-3xl font-bold text-center">{item.value}</div>
        </div>
      ))}
    </div>
    {/* Info Cards */}
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="bg-cyan-200 rounded-lg flex items-center justify-center h-48">
        {/* Placeholder for bar chart */}
        <span><svg width="130" height="150" viewBox="0 0 269 254" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M184.844 18.564C184.844 13.7682 186.612 9.16883 189.759 5.7777C192.906 2.38656 197.174 0.481445 201.625 0.481445H235.188C239.638 0.481445 243.907 2.38656 247.054 5.7777C250.201 9.16883 251.969 13.7682 251.969 18.564V235.554H260.359C262.585 235.554 264.719 236.507 266.292 238.203C267.866 239.898 268.75 242.198 268.75 244.596C268.75 246.994 267.866 249.293 266.292 250.989C264.719 252.684 262.585 253.637 260.359 253.637H8.64062C6.41529 253.637 4.2811 252.684 2.70756 250.989C1.13401 249.293 0.25 246.994 0.25 244.596C0.25 242.198 1.13401 239.898 2.70756 238.203C4.2811 236.507 6.41529 235.554 8.64062 235.554H17.0312V181.307C17.0312 176.511 18.7993 171.912 21.9464 168.521C25.0935 165.129 29.3618 163.224 33.8125 163.224H67.375C71.8257 163.224 76.094 165.129 79.2411 168.521C82.3882 171.912 84.1562 176.511 84.1562 181.307V235.554H100.938V108.977C100.938 104.181 102.706 99.5815 105.853 96.1904C109 92.7993 113.268 90.8941 117.719 90.8941H151.281C155.732 90.8941 160 92.7993 163.147 96.1904C166.294 99.5815 168.062 104.181 168.062 108.977V235.554H184.844V18.564ZM201.625 235.554H235.188V18.564H201.625V235.554ZM151.281 235.554V108.977H117.719V235.554H151.281ZM67.375 235.554V181.307H33.8125V235.554H67.375Z" fill="#05386B" />
        </svg>
        </span>
      </div>
      <div className="bg-cyan-200 rounded-lg flex flex-row items-center justify-center h-48 gap-4">
        <div className="flex-col items-center gap-2">
          <FaHeadset className="w-[100px] h-auto text-3xl" />
          <span className="text-xl">3 Technical Supports</span>
        </div>
        <div className="flex-col items-center gap-2">
          <FaUsers className="w-[100px] h-auto  text-3xl" />
          <span className="text-xl">4 Operation Team</span>
        </div>
      </div>
    </div>
    {/* Customer Feedback */}
    <div className="bg-cyan-200 rounded-lg p-4 flex flex-col items-center">
      <div className="text-lg mb-2">Customer Feedback</div>
      <div className="flex gap-1 text-2xl text-yellow-500">
        {'★★★★★☆☆☆☆☆'.slice(0, 5).split('').map((star, i) => (
          <span key={i}>{star}</span>
        ))}
      </div>
    </div>
  </div>
);

export default OTDashboard;