// File: src/pages/Dashboard.jsx
const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Dashboard Heading */}
      <h1 className="text-2xl text-center font-serif font-semibold text-black">Dashboard</h1>

      {/* Stats Cards (Styled like Figma) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        <div className="w-48 h-32 bg-blue-500 text-white rounded-xl shadow-md p-4 text-center">
          <h2 className="text-md font-semibold">Total Tickets</h2>
          <p className="text-4xl font-bold mt-4">12</p>
        </div>
        <div className="w-48 h-32 bg-green-500 text-white rounded-xl shadow-md p-4 text-center">
          <h2 className="text-md font-semibold">Total Solved</h2>
          <p className="text-4xl font-bold mt-4">8</p>
        </div>
        <div className="w-48 h-32 bg-red-500 text-white rounded-xl shadow-md p-4 text-center">
          <h2 className="text-md font-semibold leading-tight">Total Awaiting<br />Approval</h2>
          <p className="text-4xl font-bold mt-2">2</p>
        </div>
        <div className="w-48 h-32 bg-yellow-300 text-black rounded-xl shadow-md p-4 text-center">
          <h2 className="text-md font-semibold leading-tight">Total in<br />Progress</h2>
          <p className="text-4xl font-bold mt-2">2</p>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-gray-500 pt-10">Footer Area</div>
    </div>
  );
};

export default Dashboard;