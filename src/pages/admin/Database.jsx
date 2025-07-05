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
                <button className="bg-gray-300 px-2 py-1 rounded"><svg width="20" height="20" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.82 14.8784C21.4423 13.0201 22.1689 10.7162 21.8545 8.42747C21.54 6.13879 20.2077 4.03416 18.1241 2.53465C16.0405 1.03514 13.3593 0.251331 10.6168 0.340037C7.87431 0.428742 5.27285 1.38342 3.33288 3.01307C1.39291 4.64273 0.257491 6.82717 0.153781 9.12938C0.0500707 11.4316 0.985718 13.6818 2.77353 15.4298C4.56135 17.1778 7.06948 18.2946 9.79615 18.5569C12.5228 18.8193 15.2669 18.2077 17.4795 16.8445H17.4778C17.5281 16.9008 17.5817 16.9542 17.642 17.0063L24.0923 22.4209C24.4064 22.6848 24.8326 22.8331 25.277 22.8333C25.7215 22.8334 26.1478 22.6853 26.4621 22.4216C26.7765 22.1579 26.9532 21.8001 26.9534 21.4271C26.9535 21.054 26.7771 20.6961 26.463 20.4323L20.0127 15.0176C19.9528 14.9667 19.8884 14.9197 19.82 14.877V14.8784ZM20.2523 9.47221C20.2523 10.488 20.0139 11.4939 19.5509 12.4323C19.0878 13.3708 18.409 14.2235 17.5534 14.9418C16.6977 15.6601 15.6819 16.2299 14.5639 16.6186C13.4459 17.0073 12.2477 17.2074 11.0376 17.2074C9.8275 17.2074 8.62926 17.0073 7.51128 16.6186C6.3933 16.2299 5.37748 15.6601 4.52182 14.9418C3.66616 14.2235 2.98741 13.3708 2.52433 12.4323C2.06124 11.4939 1.8229 10.488 1.8229 9.47221C1.8229 7.42072 2.79373 5.45325 4.52182 4.00262C6.24991 2.552 8.5937 1.73704 11.0376 1.73704C13.4815 1.73704 15.8253 2.552 17.5534 4.00262C19.2815 5.45325 20.2523 7.42072 20.2523 9.47221Z" fill="black" fill-opacity="0.89"/>
</svg>
</button>
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
                                <button title="Edit" className="text-green-600"><svg width="20" height="20" viewBox="0 0 27 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M26.4243 3.70945C26.6329 3.95082 26.75 4.27772 26.75 4.61853C26.75 4.95934 26.6329 5.28625 26.4243 5.52762L24.0961 8.21623L19.6317 3.06562L21.9599 0.377007C22.1692 0.13561 22.453 0 22.749 0C23.0449 0 23.3288 0.13561 23.5381 0.377007L26.4243 3.70688V3.70945ZM22.518 10.0344L18.0535 4.88379L2.84542 22.4319C2.72256 22.5736 2.63007 22.7465 2.57532 22.9367L0.778384 29.1535C0.745796 29.2668 0.741169 29.3884 0.765021 29.5045C0.788873 29.6207 0.840265 29.727 0.913451 29.8114C0.986637 29.8959 1.07873 29.9552 1.17945 29.9827C1.28016 30.0102 1.38553 30.0048 1.48377 29.9673L6.87234 27.8941C7.037 27.8317 7.18679 27.7259 7.30985 27.5851L22.518 10.037V10.0344Z" fill="black" />
                                </svg>
                                </button>
                                <button title="Delete" className="text-red-600"><svg width="20" height="20" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.40798 8C9.6936 8 9.96751 8.10536 10.1695 8.29289C10.3714 8.48043 10.4849 8.73478 10.4849 9V21C10.4849 21.2652 10.3714 21.5196 10.1695 21.7071C9.96751 21.8946 9.6936 22 9.40798 22C9.12236 22 8.84844 21.8946 8.64648 21.7071C8.44452 21.5196 8.33105 21.2652 8.33105 21V9C8.33105 8.73478 8.44452 8.48043 8.64648 8.29289C8.84844 8.10536 9.12236 8 9.40798 8ZM14.7926 8C15.0782 8 15.3521 8.10536 15.5541 8.29289C15.7561 8.48043 15.8695 8.73478 15.8695 9V21C15.8695 21.2652 15.7561 21.5196 15.5541 21.7071C15.3521 21.8946 15.0782 22 14.7926 22C14.507 22 14.2331 21.8946 14.0311 21.7071C13.8291 21.5196 13.7157 21.2652 13.7157 21V9C13.7157 8.73478 13.8291 8.48043 14.0311 8.29289C14.2331 8.10536 14.507 8 14.7926 8ZM21.2541 9C21.2541 8.73478 21.1407 8.48043 20.9387 8.29289C20.7367 8.10536 20.4628 8 20.1772 8C19.8916 8 19.6177 8.10536 19.4157 8.29289C19.2137 8.48043 19.1003 8.73478 19.1003 9V21C19.1003 21.2652 19.2137 21.5196 19.4157 21.7071C19.6177 21.8946 19.8916 22 20.1772 22C20.4628 22 20.7367 21.8946 20.9387 21.7071C21.1407 21.5196 21.2541 21.2652 21.2541 21V9Z" fill="black" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M28.75 6C28.75 6.53043 28.5231 7.03914 28.1192 7.41421C27.7152 7.78929 27.1674 8 26.5962 8H25.5192V26C25.5192 27.0609 25.0654 28.0783 24.2575 28.8284C23.4497 29.5786 22.354 30 21.2115 30H8.28846C7.14599 30 6.05031 29.5786 5.24246 28.8284C4.43461 28.0783 3.98077 27.0609 3.98077 26V8H2.90385C2.33261 8 1.78477 7.78929 1.38085 7.41421C0.976922 7.03914 0.75 6.53043 0.75 6V4C0.75 3.46957 0.976922 2.96086 1.38085 2.58579C1.78477 2.21071 2.33261 2 2.90385 2H10.4423C10.4423 1.46957 10.6692 0.960859 11.0732 0.585786C11.4771 0.210714 12.0249 0 12.5962 0L16.9038 0C17.4751 0 18.0229 0.210714 18.4268 0.585786C18.8308 0.960859 19.0577 1.46957 19.0577 2H26.5962C27.1674 2 27.7152 2.21071 28.1192 2.58579C28.5231 2.96086 28.75 3.46957 28.75 4V6ZM6.38877 8L6.13462 8.118V26C6.13462 26.5304 6.36154 27.0391 6.76546 27.4142C7.16939 27.7893 7.71723 28 8.28846 28H21.2115C21.7828 28 22.3306 27.7893 22.7345 27.4142C23.1385 27.0391 23.3654 26.5304 23.3654 26V8.118L23.1112 8H6.38877ZM2.90385 6V4H26.5962V6H2.90385Z" fill="black" />
                                </svg>
                                </button>
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