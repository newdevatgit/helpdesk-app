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
              <button title="Approve" className="text-green-600"><svg width="20" height="20" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.4911 18.2766L0.366101 10.1516C-0.122034 9.66351 -0.122034 8.87206 0.366101 8.38387L2.13383 6.6161C2.62196 6.12792 3.41346 6.12792 3.9016 6.6161L9.37499 12.0894L21.0984 0.366101C21.5865 -0.122034 22.378 -0.122034 22.8662 0.366101L24.6339 2.13387C25.122 2.62201 25.122 3.41346 24.6339 3.90165L10.2589 18.2767C9.77069 18.7648 8.97924 18.7648 8.4911 18.2766Z" fill="black" />
              </svg>
              </button>
              <button title="Reject" className="text-red-600"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C18.636 0 24 5.364 24 12C24 18.636 18.636 24 12 24C5.364 24 0 18.636 0 12C0 5.364 5.364 0 12 0ZM16.308 6L12 10.308L7.692 6L6 7.692L10.308 12L6 16.308L7.692 18L12 13.692L16.308 18L18 16.308L13.692 12L18 7.692L16.308 6Z" fill="black" />
              </svg>
              </button>
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