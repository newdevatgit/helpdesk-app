import React from 'react';

const ProfileSettings = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-6">User Profile</h2>
      <div className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <button className="bg-teal-500 text-white px-4 py-2 rounded">Edit Account</button>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {['Username', 'Current Password', 'New Password', 'Confirm Password', 'Email', 'Real Name', 'Access Level', 'Project Access Level'].map((label, idx) => (
            <input
              key={idx}
              type="text"
              placeholder={label}
              className="p-2 bg-gray-200 w-full"
            />
          ))}
          <button className="bg-teal-500 text-white px-4 py-2 rounded w-full">Update User</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
