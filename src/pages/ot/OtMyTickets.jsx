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
        <button className="bg-gray-300 px-2 py-1 rounded"><svg width="20" height="20" viewBox="0 0 34 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.9527 19.3935C27.0103 16.9158 27.9318 13.8439 27.533 10.7923C27.1342 7.74072 25.4445 4.93455 22.8018 2.9352C20.1591 0.93585 16.7585 -0.109228 13.2802 0.00904609C9.80188 0.12732 6.50243 1.40022 4.04195 3.5731C1.58147 5.74597 0.14141 8.65856 0.00987351 11.7282C-0.121663 14.7978 1.06503 17.798 3.33252 20.1287C5.60002 22.4593 8.78111 23.9485 12.2394 24.2983C15.6976 24.648 19.178 23.8326 21.9842 22.015H21.9821C22.0458 22.0901 22.1138 22.1613 22.1903 22.2307L30.3713 29.4502C30.7697 29.8021 31.3102 29.9998 31.8739 30C32.4376 30.0002 32.9782 29.8027 33.377 29.4511C33.7757 29.0995 33.9998 28.6225 34 28.1251C34.0002 27.6277 33.7765 27.1505 33.378 26.7987L25.1971 19.5792C25.1211 19.5113 25.0394 19.4486 24.9527 19.3917V19.3935ZM25.5009 12.1853C25.5009 13.5397 25.1987 14.8808 24.6113 16.1321C24.024 17.3834 23.1631 18.5204 22.0779 19.4781C20.9926 20.4358 19.7043 21.1955 18.2863 21.7138C16.8684 22.2321 15.3487 22.4988 13.8139 22.4988C12.2791 22.4988 10.7594 22.2321 9.34144 21.7138C7.9235 21.1955 6.63513 20.4358 5.54989 19.4781C4.46464 18.5204 3.60378 17.3834 3.01645 16.1321C2.42912 14.8808 2.12683 13.5397 2.12683 12.1853C2.12683 9.44996 3.35814 6.82666 5.54989 4.89249C7.74164 2.95832 10.7143 1.87172 13.8139 1.87172C16.9135 1.87172 19.8861 2.95832 22.0779 4.89249C24.2696 6.82666 25.5009 9.44996 25.5009 12.1853Z" fill="black" fill-opacity="0.89"/>
</svg>
</button>
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
                <button title="View and Update" className="text-blue-600" onClick={() => setSelectedTicket(t)}><svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.13 9L16.39 7.74C16.83 7.3 17.39 7.06 18 7V6L12 0H2C0.89 0 0 0.89 0 2V16C0 16.5304 0.210714 17.0391 0.585786 17.4142C0.960859 17.7893 1.46957 18 2 18H8V16.13L8.13 16H2V2H9V9H15.13ZM11 1.5L16.5 7H11V1.5ZM16.13 10.83L18.17 12.87L12.04 19H10V16.96L16.13 10.83ZM19.85 11.19L18.87 12.17L16.83 10.13L17.81 9.15C18 8.95 18.33 8.95 18.53 9.15L19.85 10.47C20.05 10.67 20.05 11 19.85 11.19Z" fill="black" />
                </svg>
                </button>
                <button title="Create team" className="text-green-600"><svg width="28" height="18" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.1667 15.4286V18H8.16667V15.4286C8.16667 15.4286 8.16667 10.2857 15.1667 10.2857C22.1667 10.2857 22.1667 15.4286 22.1667 15.4286ZM18.6667 3.85714C18.6667 3.09427 18.4614 2.34853 18.0768 1.71423C17.6922 1.07993 17.1456 0.585547 16.5061 0.293609C15.8665 0.00167125 15.1628 -0.0747131 14.4839 0.0741156C13.8049 0.222944 13.1813 0.590301 12.6918 1.12973C12.2023 1.66916 11.869 2.35644 11.7339 3.10465C11.5989 3.85287 11.6682 4.62841 11.9331 5.33321C12.198 6.03801 12.6466 6.64041 13.2222 7.06424C13.7977 7.48807 14.4744 7.71429 15.1667 7.71429C16.0949 7.71429 16.9852 7.30791 17.6415 6.58456C18.2979 5.8612 18.6667 4.88012 18.6667 3.85714ZM22.4 10.3629C23.0377 11.0112 23.5519 11.7931 23.9124 12.6629C24.273 13.5326 24.4727 14.4728 24.5 15.4286V18H28V15.4286C28 15.4286 28 10.9929 22.4 10.3629ZM21 1.46718e-06C20.6475 0.000233941 20.2972 0.0609614 19.9617 0.180001C20.6442 1.25868 21.0102 2.54209 21.0102 3.85714C21.0102 5.17219 20.6442 6.45561 19.9617 7.53429C20.2972 7.65333 20.6475 7.71405 21 7.71429C21.9283 7.71429 22.8185 7.30791 23.4749 6.58456C24.1313 5.8612 24.5 4.88012 24.5 3.85714C24.5 2.83417 24.1313 1.85309 23.4749 1.12973C22.8185 0.406378 21.9283 1.46718e-06 21 1.46718e-06ZM9.33333 6.42857H5.83333V2.57143H3.5V6.42857H0V9H3.5V12.8571H5.83333V9H9.33333V6.42857Z" fill="black" />
                </svg>
                </button>
                <button title="Download" className="text-red-600"><svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 18H14V15.8824H0V18ZM14 6.35294H10V0H4V6.35294H0L7 13.7647L14 6.35294Z" fill="black" />
                </svg>
                </button>
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