import React, { useState } from 'react';

const tickets = [
  { no: '1234', subject: 'Login issue', category: 'Access Issue', priority: 'High', date: '13/08/21', status: 'In Progress', person: 'Support 1' },
  { no: '1124', subject: 'New ticket issue', category: 'Access Issue', priority: 'Medium', date: '14/08/21', status: 'On hold', person: 'Support 2' },
  { no: '2244', subject: 'New request', category: 'Feedback', priority: 'Low', date: '13/08/21', status: 'Closed', person: 'Support 1' },
  { no: '1244', subject: 'Ticket submission', category: 'Ticketing', priority: 'High', date: '14/08/21', status: 'In Progress', person: 'Support 2' },
  { no: '1114', subject: 'Login issue', category: 'Access Issue', priority: 'High', date: '3/08/21', status: 'In Progress', person: 'Support 1' },
];

const statusColors = {
  'In Progress': 'bg-green-300 text-green-900',
  'On hold': 'bg-blue-300 text-blue-900',
  'Closed': 'bg-gray-400 text-gray-900',
};

const TicketModal = ({ ticket, onClose, onUpdate }) => {
  if (!ticket) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="bg-white rounded shadow-lg p-8 min-w-[350px] max-w-[90vw]">
        <h3 className="text-xl font-semibold mb-4 text-center">Ticket Details</h3>
        <div className="mb-4 text-sm">
          <div><strong>Ticket No:</strong> {ticket.no}</div>
          <div><strong>Date:</strong> {ticket.date}</div>
          <div><strong>Name:</strong> {/* Add user name if available */}</div>
          <div><strong>Dept:</strong> {/* Add department if available */}</div>
          <br />
          <div><strong>Title:</strong> {ticket.subject}</div>
          <div><strong>Description:</strong> {/* Add description if available */}</div>
          <div><strong>Category:</strong> {ticket.category}</div>
          <div><strong>Type:</strong> {/* Add type if available */}</div>
          <div><strong>Priority:</strong> {ticket.priority}</div>
          <div><strong>Status:</strong> {ticket.status}</div>
          <div><strong>Attachment:</strong> {/* Add attachment if available */}</div>
        </div>
        <div className="flex justify-center gap-4">
          <button
            className="bg-[#6c7cff] hover:bg-[#4d5ed6] text-white px-8 py-1 rounded"
            onClick={onUpdate}
          >
            Update
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-1 rounded"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const OtMyTickets = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);

  const handleUpdate = () => {
    // Implement update logic or navigation here
    alert('Update functionality coming soon!');
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">My Ticket</h2>
      <div className="mb-4 flex items-center gap-2">
        <input
          type="text"
          placeholder="Find ticket"
          className="border rounded px-2 py-1"
        />
        <button className="bg-gray-300 px-2 py-1 rounded">🔍</button>
      </div>
      <table className="w-full bg-white rounded shadow text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2">Ticket No.</th>
            <th className="p-2">Subject</th>
            <th className="p-2">Category</th>
            <th className="p-2">Priority</th>
            <th className="p-2">Date</th>
            <th className="p-2">Status</th>
            <th className="p-2">Person in charge</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((t) => (
            <tr key={t.no} className="border-t">
              <td
                className="p-2 underline cursor-pointer"
                onClick={() => setSelectedTicket(t)}
              >
                {t.no}
              </td>
              <td className="p-2">{t.subject}</td>
              <td className="p-2">{t.category}</td>
              <td className="p-2">{t.priority}</td>
              <td className="p-2">{t.date}</td>
              <td className="p-2">
                <span className={`px-2 py-1 rounded text-xs font-semibold ${statusColors[t.status] || 'bg-gray-200'}`}>
                  {t.status}
                </span>
              </td>
              <td className="p-2">{t.person}</td>
              <td className="p-2 flex gap-2">
                <button title="View" className="text-blue-600" onClick={() => setSelectedTicket(t)}>👁️</button>
                <button title="Edit" className="text-green-600">✏️</button>
                <button title="Delete" className="text-red-600">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-sm text-gray-600 mt-2">Showing 1 to 5 of 5 entries</div>
      <TicketModal
        ticket={selectedTicket}
        onClose={() => setSelectedTicket(null)}
        onUpdate={handleUpdate}
      />
    </div>
  );
};

export default OtMyTickets;