// File: src/pages/MyTickets.jsx
import React, { useState } from 'react';

const tickets = [
  { id: '1234', subject: 'Login issue', status: 'In Progress', team: 'Tech support', date: '13/08/21', rate: 3 },
  { id: '1124', subject: 'New ticket issue', status: 'On hold', team: 'Operation Team', date: '14/08/21', rate: 4 },
  { id: '1224', subject: 'New request', status: 'Closed', team: 'Tech support', date: '13/08/21', rate: 5 },
  { id: '1244', subject: 'Ticket submission', status: 'In Progress', team: 'Operation Team', date: '14/08/21', rate: 2 },
  { id: '1114', subject: 'Login issue', status: 'In Progress', team: 'Tech support', date: '3/08/21', rate: 1 },
];

const statusColors = {
  'In Progress': 'bg-green-800',
  'On hold': 'bg-blue-800',
  'Closed': 'bg-gray-800',
};

const StarRating = ({ count }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span key={i}>{i < count ? '⭐' : '☆'}</span>
      ))}
    </div>
  );
};

const TicketModal = ({ ticket, onClose }) => {
  if (!ticket) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="bg-white rounded shadow-lg p-8 min-w-[350px] max-w-[90vw]">
        <h3 className="text-xl font-semibold mb-4 text-center">Ticket Details</h3>
        <div className="mb-4 text-sm">
          <div><strong>Ticket No:</strong> {ticket.id}</div>
          <div><strong>Date:</strong> {ticket.date}</div>
          <div><strong>Name:</strong> {/* Add user name if available */}</div>
          <div><strong>Dept:</strong> {/* Add department if available */}</div>
          <br />
          <div><strong>Title:</strong> {ticket.subject}</div>
          <div><strong>Description:</strong> {/* Add description if available */}</div>
          <div><strong>Category:</strong> {/* Add category if available */}</div>
          <div><strong>Type:</strong> {/* Add type if available */}</div>
          <div><strong>Priority:</strong> {/* Add priority if available */}</div>
          <div><strong>Status:</strong> {ticket.status}</div>
          <div><strong>Attachment:</strong> {/* Add attachment if available */}</div>
        </div>
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-1 rounded block mx-auto"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const MyTickets = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);

  return (
    <div className="p-2 ">
      <h2 className="text-2xl font-semibold text-center mb-6">List of Ticket</h2>
      <div className="flex items-center gap-4 mb-4">
        <input type="text" placeholder="Find ticket" className="bg-gray-200 border rounded px-3 py-1" />
        <select className="bg-gray-200 border rounded px-2 py-1">
          <option value="10">Show: 10</option>
          <option value="25">Show: 25</option>
        </select>
      </div>
      <table className="min-w-full text-left border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Ticket No.</th>
            <th className="px-4 py-2">Subject</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Support by</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Rate</th>
          </tr>
        </thead>
        <tbody className='bg-gray-200'>
          {tickets.map((ticket) => (
            <tr key={ticket.id} className="border-t border-gray-200">
              <td
                className="px-4 py-2 text-blue-600 underline cursor-pointer"
                onClick={() => setSelectedTicket(ticket)}
              >
                {ticket.id}
              </td>
              <td className="px-4 py-2">{ticket.subject}</td>
              <td className="px-4 py-2">
                <span className={`text-white px-3 py-1 rounded ${statusColors[ticket.status]}`}>
                  {ticket.status}
                </span>
              </td>
              <td className="px-4 py-2">{ticket.team}</td>
              <td className="px-4 py-2">{ticket.date}</td>
              <td className="px-4 py-2">
                <StarRating count={ticket.rate} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 text-sm text-gray-600">Showing 1 to 5 of 5 entries</div>
      <TicketModal ticket={selectedTicket} onClose={() => setSelectedTicket(null)} />
    </div>
  );
};

export default MyTickets;