const TechDashboard = () => (
  <div className="p-6">
    <h2 className="text-center text-xl font-semibold mb-4">Technical Support Dashboard</h2>
    {/* Add dashboard cards and charts as per your screenshot */}
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
    {/* Add more dashboard content as needed */}
  </div>
);

export default TechDashboard;