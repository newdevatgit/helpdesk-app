import React from 'react';

const tickets = [
  { no: '1234', subject: 'Login issue', category: 'Access Issue', priority: 'High', date: '13/08/21' },
  { no: '1124', subject: 'New ticket issue', category: 'Access Issue', priority: 'Medium', date: '14/08/21' },
  { no: '2244', subject: 'New request', category: 'Feedback', priority: 'Low', date: '13/08/21' },
  { no: '1244', subject: 'Ticket submission', category: 'Ticketing', priority: 'High', date: '14/08/21' },
  { no: '1114', subject: 'Login issue', category: 'Access Issue', priority: 'High', date: '3/08/21' },
];

const TicketApproval = () => (
  <div className="p-6">
    <h2 className="text-xl font-semibold mb-4">Ticket Approval</h2>
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
          <th className="p-2">Action</th>
          <th className="p-2">Assign to</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((t) => (
          <tr key={t.no} className="border-t">
            <td className="p-2 underline cursor-pointer">{t.no}</td>
            <td className="p-2">{t.subject}</td>
            <td className="p-2">{t.category}</td>
            <td className="p-2">{t.priority}</td>
            <td className="p-2">{t.date}</td>
            <td className="p-2 flex gap-2">
              <button title="Approve" className="text-green-600">✔️</button>
              <button title="Reject" className="text-red-600">❌</button>
            </td>
            <td className="p-2">
              <select className="border rounded px-1">
                <option>--</option>
                <option>Support 1</option>
                <option>Support 2</option>
              </select>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="text-sm text-gray-600 mt-2">Showing 1 to 5 of 5 entries</div>
  </div>
);

export default TicketApproval;