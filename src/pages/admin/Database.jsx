import React, { useState } from 'react';

const tabs = [
  { label: 'User', key: 'user' },
  { label: 'Operation Team', key: 'ot' },
  { label: 'Technical Support', key: 'tech' },
];

const data = {
  user: [
    { id: 'U001', name: 'Sara', department: 'HR', speciality: 'Recruitment' },
    { id: 'U002', name: 'John', department: 'Finance', speciality: 'Payroll' },
  ],
  ot: [
    { id: 'OT001', name: 'Zain', department: 'Ops', speciality: 'Logistics' },
    { id: 'OT002', name: 'Mira', department: 'Ops', speciality: 'Scheduling' },
  ],
  tech: [
    { id: 'ABC123', name: 'Abu', department: 'IT', speciality: 'Software' },
    { id: 'ABC124', name: 'Ahmad', department: 'Software', speciality: 'Networking' },
    { id: 'ABC125', name: 'Ali', department: 'Technical', speciality: 'Hardware' },
  ],
};

const AdminDatabase = () => {
  const [activeTab, setActiveTab] = useState('user');
  const [search, setSearch] = useState('');

  const filtered = data[activeTab].filter(
    row =>
      row.id.toLowerCase().includes(search.toLowerCase()) ||
      row.name.toLowerCase().includes(search.toLowerCase()) ||
      row.department.toLowerCase().includes(search.toLowerCase()) ||
      row.speciality.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Database</h2>
      <div className="flex border-b mb-4">
        {tabs.map(tab => (
          <button
            key={tab.key}
            className={`px-6 py-2 font-semibold border-t border-l border-r rounded-t ${activeTab === tab.key ? 'bg-teal-300' : 'bg-gray-100'}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mb-2 flex items-center gap-2">
        <input
          type="text"
          placeholder="Find ticket"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="border rounded px-2 py-1"
        />
        <button className="bg-gray-300 px-2 py-1 rounded">🔍</button>
      </div>
      <div className="mb-2 text-sm">
        Show: <select className="border rounded px-1 py-0.5"><option>10</option></select> Entries
      </div>
      <table className="w-full bg-white rounded shadow text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2"><input type="checkbox" disabled /></th>
            <th className="p-2">Staff ID</th>
            <th className="p-2">Name</th>
            <th className="p-2">Department</th>
            <th className="p-2">Speciality</th>
            <th className="p-2">Setting</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map(row => (
            <tr key={row.id} className="border-t">
              <td className="p-2"><input type="checkbox" /></td>
              <td className="p-2">{row.id}</td>
              <td className="p-2">{row.name}</td>
              <td className="p-2">{row.department}</td>
              <td className="p-2">{row.speciality}</td>
              <td className="p-2 flex gap-2">
                <button title="Edit" className="text-green-600">✏️</button>
                <button title="Delete" className="text-red-600">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-sm text-gray-600 mt-2">Showing 1 to {filtered.length} of {filtered.length} entries</div>
    </div>
  );
};

export default AdminDatabase;