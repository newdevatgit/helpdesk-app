// File: src/pages/Dashboard.jsx
const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Dashboard Heading */}
      <h1 className="text-2xl text-center font-serif font-semibold text-black">Dashboard</h1>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        <div className="w-[248px] h-[273px] bg-blue-500 text-[#05386B] rounded-xl shadow-md p-4 text-center">
          <h2 className="text-md font-semibold">Total Tickets</h2>
          <p className="text-[96px] font-[400] mt-4">12</p>
        </div>
        <div className="w-[248px] h-[273px] bg-green-500 text-[#05386B] rounded-xl shadow-md p-4 text-center">
          <h2 className="text-md font-semibold">Total Solved</h2>
          <p className="text-[96px] font-[400] mt-4">8</p>
        </div>
        <div className="w-[248px] h-[273px] bg-red-500 text-[#05386B] rounded-xl shadow-md p-4 text-center">
          <h2 className="text-md font-semibold leading-tight">Total Awaiting<br />Approval</h2>
          <p className="text-[96px] font-[400] mt-2">2</p>
        </div>
        <div className="w-[248px] h-[273px] bg-yellow-300 text-[#05386B] rounded-xl shadow-md p-4 text-center">
          <h2 className="text-md font-semibold leading-tight">Total in<br />Progress</h2>
          <p className="text-[96px] font-[400] mt-2">2</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;