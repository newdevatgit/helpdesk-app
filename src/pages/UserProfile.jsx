import React from 'react';
import { Link } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';

const UserProfile = () => {
    return (
        <div className="p-6 bg-teal-500">
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
                        <svg width="20" height="20" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.4515 15.1579L25.4045 13.0358C26.0865 12.2947 26.9545 11.8905 27.9 11.7895V10.1053L18.6 0H3.1C1.3795 0 0 1.49895 0 3.36842V26.9474C0 27.8407 0.326606 28.6975 0.907969 29.3292C1.48933 29.9609 2.27783 30.3158 3.1 30.3158H12.4V27.1663L12.6015 26.9474H3.1V3.36842H13.95V15.1579H23.4515ZM17.05 2.52632L25.575 11.7895H17.05V2.52632ZM25.0015 18.24L28.1635 21.6758L18.662 32H15.5V28.5642L25.0015 18.24ZM30.7675 18.8463L29.2485 20.4968L26.0865 17.0611L27.6055 15.4105C27.9 15.0737 28.4115 15.0737 28.7215 15.4105L30.7675 17.6337C31.0775 17.9705 31.0775 18.5263 30.7675 18.8463Z" fill="black" />
                        </svg>

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
                        <div className="text-left">
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