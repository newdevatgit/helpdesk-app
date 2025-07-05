import React, { useState } from 'react';

const sections = [
  {
    title: 'General',
    items: [
      { label: 'Language', type: 'language' },
      { label: 'Data Backup', type: 'checkbox', key: 'backup' },
    ],
  },
  {
    title: 'Connect To',
    items: [
      { label: 'GoDash', type: 'checkbox', key: 'godash' },
      { label: 'SuperController', type: 'checkbox', key: 'supercontroller' },
    ],
  },
  {
    title: 'Email',
    items: [
      { label: 'Enable SMTP', type: 'checkbox', key: 'smtp' },
    ],
  },
  {
    title: 'Authorization',
    items: [
      { label: 'Edit authorization', type: 'checkbox', key: 'editAuth' },
      { label: 'Authority Level', type: 'checkbox', key: 'authLevel' },
    ],
  },
  {
    title: 'Notification',
    items: [
      { label: 'Enable Notification', type: 'checkbox', key: 'notification' },
    ],
  },
];

const initialState = {
  backup: true,
  godash: true,
  supercontroller: true,
  smtp: true,
  editAuth: true,
  authLevel: false,
  notification: true,
};

const AdminSetting = () => {
  const [open, setOpen] = useState({
    General: true,
    'Connect To': true,
    Email: true,
    Authorization: true,
    Notification: true,
  });
  const [state, setState] = useState(initialState);
  const [language, setLanguage] = useState('BM');

  const toggleSection = (title) => {
    setOpen((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Setting</h2>
      <div className="flex flex-col gap-3">
        {sections.map((section) => (
          <div key={section.title}>
            <button
              className="w-full text-left bg-teal-400 text-white px-4 py-2 font-semibold rounded-t flex justify-between items-center"
              onClick={() => toggleSection(section.title)}
            >
              {section.title}
              <span>{open[section.title] ? '▾' : '▸'}</span>
            </button>
            {open[section.title] && (
              <div className="bg-gray-100 px-6 py-2">
                {section.items.map((item) => (
                  <div key={item.label} className="flex items-center justify-between py-2 border-b last:border-b-0">
                    {item.type === 'language' ? (
                      <>
                        <span>{item.label}</span>
                        <div className="flex gap-2">
                          <button
                            className={`px-2 py-1 rounded ${language === 'BM' ? 'bg-black text-white' : 'bg-gray-200'}`}
                            onClick={() => setLanguage('BM')}
                            type="button"
                          >
                            BM
                          </button>
                          <button
                            className={`px-2 py-1 rounded ${language === 'BI' ? 'bg-black text-white' : 'bg-gray-200'}`}
                            onClick={() => setLanguage('BI')}
                            type="button"
                          >
                            BI
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <span>{item.label}</span>
                        <input
                          type="checkbox"
                          checked={!!state[item.key]}
                          onChange={() =>
                            setState((prev) => ({
                              ...prev,
                              [item.key]: !prev[item.key],
                            }))
                          }
                        />
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminSetting;