import React from 'react';

const logs = [
  {
    no: 1,
    signIn: '130821 / 0800',
    staffId: 'XL000001',
    department: 'OT',
    activity: 'Create Team',
    signOut: '130821 / 0815',
  },
  {
    no: 2,
    signIn: '130821 / 0805',
    staffId: '',
    department: '',
    activity: '',
    signOut: '130821 / 0810',
  },
  { no: 3, signIn: '', staffId: '', department: '', activity: '', signOut: '' },
  { no: 4, signIn: '', staffId: '', department: '', activity: '', signOut: '' },
  { no: 5, signIn: '', staffId: '', department: '', activity: '', signOut: '' },
];

const UserLogHistory = () => (
  <div className="p-6">
    <h2 className="text-xl font-semibold mb-4">User Log History</h2>
    <div className="mb-2 text-sm">
      Show: <select className="border rounded px-1 py-0.5"><option>10</option></select> Entries
    </div>
    <table className="w-full bg-white rounded shadow text-left">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2">No.</th>
          <th className="p-2">Date/Sign InTime</th>
          <th className="p-2">Staff ID</th>
          <th className="p-2">Department</th>
          <th className="p-2">Activity</th>
          <th className="p-2">Date/Sign Out time</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((log) => (
          <tr key={log.no} className={log.no % 2 === 0 ? 'bg-gray-100' : ''}>
            <td className="p-2">{log.no}.</td>
            <td className="p-2">{log.signIn}</td>
            <td className="p-2">{log.staffId}</td>
            <td className="p-2">{log.department}</td>
            <td className="p-2">{log.activity}</td>
            <td className="p-2">{log.signOut}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="text-sm text-gray-600 mt-2">Showing 1 to 5 of 5 entries</div>
  </div>
);

export default UserLogHistory;