import React from 'react';

const AdminDashboard = () => (
  <div className="p-6">
    <h2 className="text-center text-xl font-semibold mb-4">Admin Dashboard</h2>
    <div className="grid grid-cols-4 gap-6 mb-6">
      <div className="bg-blue-400 text-white rounded p-6 shadow text-center">
        <div className="text-lg">Total Tickets</div>
        <div className="text-4xl font-bold">12</div>
      </div>
      <div className="bg-green-400 text-white rounded p-6 shadow text-center">
        <div className="text-lg">Total Solved</div>
        <div className="text-4xl font-bold">8</div>
      </div>
      <div className="bg-red-400 text-white rounded p-6 shadow text-center">
        <div className="text-lg">Total Awaiting Approval</div>
        <div className="text-4xl font-bold">2</div>
      </div>
      <div className="bg-yellow-300 text-black rounded p-6 shadow text-center">
        <div className="text-lg">Total in Progress</div>
        <div className="text-4xl font-bold">2</div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-teal-300 rounded p-6 flex items-center justify-center" style={{ minHeight: 220 }}>
        {/* Placeholder for chart */}
        <svg width="120" height="120" viewBox="0 0 120 120">
          <rect x="20" y="80" width="15" height="30" fill="#1976d2" />
          <rect x="45" y="60" width="15" height="50" fill="#1976d2" />
          <rect x="70" y="40" width="15" height="70" fill="#1976d2" />
          <rect x="95" y="20" width="15" height="90" fill="#1976d2" />
        </svg>
      </div>
      <div className="bg-teal-300 rounded p-6 flex flex-col items-center justify-center" style={{ minHeight: 220 }}>
        <div className="flex gap-8 mb-4">
          <div className="flex flex-col items-center">
            <svg width="48" height="48" fill="currentColor" className="text-black mb-2" viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
            </svg>
            <div className="text-lg">3</div>
            <div className="text-sm">Technical Supports</div>
          </div>
          <div className="flex flex-col items-center">
            <svg width="48" height="48" fill="currentColor" className="text-black mb-2" viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"/>
              <circle cx="19" cy="19" r="3" fill="#1976d2"/>
            </svg>
            <div className="text-lg">4</div>
            <div className="text-sm">Operation Team</div>
          </div>
        </div>
        <div className="bg-teal-200 rounded p-2 w-full text-center mt-2">
          <div className="font-semibold">Customer Feedback</div>
          <div className="text-yellow-500 text-xl">
            ★★★★★
            <span className="text-gray-400">☆</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AdminDashboard;