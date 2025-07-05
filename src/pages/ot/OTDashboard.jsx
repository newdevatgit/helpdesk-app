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
    <h2 className="text-center text-2xl font-semibold mb-4">Operational Team Dashboard</h2>
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
        <span className="text-6xl text-cyan-700">📊</span>
      </div>
      <div className="bg-cyan-200 rounded-lg flex flex-col items-center justify-center h-48 gap-4">
        <div className="flex items-center gap-2">
          <FaHeadset className="text-3xl" />
          <span className="text-xl">3 Technical Supports</span>
        </div>
        <div className="flex items-center gap-2">
          <FaUsers className="text-3xl" />
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