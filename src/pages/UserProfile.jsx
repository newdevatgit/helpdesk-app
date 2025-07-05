import React from 'react';
import { Link } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';

const UserProfile = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-6">User Profile</h2>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Profile Card */}
        <div className="relative bg-white rounded-lg shadow-md p-6 w-80">
          {/* Settings icon in top-right */}
          <Link
            to="/profile-settings"
            className="absolute top-3 right-3"
            title="Profile Settings"
          >
            <FiSettings size={20} className="text-gray-500 hover:text-primary" />
          </Link>
          {/* User avatar and info */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-4">
              {/* You can use a user icon here */}
              <svg
                className="w-12 h-12 text-gray-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
              </svg>
            </div>
            <div className="text-center">
              <div className="font-semibold">Username</div>
              <div className="text-sm text-gray-600">Contact Number</div>
              <div className="text-sm text-gray-600">Email</div>
              <div className="text-sm text-gray-600">Department</div>
            </div>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="bg-white shadow-md rounded-lg p-6 w-full lg:w-1/2">
          <h3 className="text-md font-semibold mb-2">Give Your Feedback</h3>
          <textarea
            placeholder="[Lorem ipsum]"
            className="w-full h-24 p-2 border border-gray-300 rounded mb-4"
          ></textarea>
          <div className="flex justify-center space-x-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className="text-gray-400 text-xl">
                ★
              </span>
            ))}
          </div>
          <button className="bg-teal-500 text-white px-4 py-2 rounded">
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;