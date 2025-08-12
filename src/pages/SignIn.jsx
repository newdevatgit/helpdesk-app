import React, { useState } from 'react';
import { BrowserRouter as Router, useNavigate, Link, Routes, Route } from 'react-router-dom';

// The SignIn component contains the form and logic.
// It needs to be a child of a Router to use useNavigate and Link.
const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // This is a basic example. In a real app, you would have more robust auth logic.
    console.log('Attempting to sign in with:', { username, password });

    let role = 'user'; // Default role
    if (username === 'admin') {
      role = 'admin';
    } else if (username === 'otuser') {
      role = 'ot';
    } else if (username === 'techuser') {
      role = 'tech';
    }
    // In a real app, you'd use a more secure method than localStorage for session management.
    localStorage.setItem('role', role);
    localStorage.setItem('isLoggedIn', 'true');

    // Redirect based on role
    if (role === 'admin') {
      navigate('/admin-dashboard');
    } else if (role === 'ot') {
      navigate('/ot-dashboard');
    } else if (role === 'tech') {
      navigate('/tech-dashboard');
    } else {
      navigate('/');
    }
  };

  return (
    // Main container that centers the content vertically and horizontally.
    // Added padding `p-4` for small screens so the card doesn't touch the edges.
    <div className="flex justify-center items-center min-h-screen bg-teal-300 font-sans p-4">
      {/*
        The form card.
        - `w-full`: Makes it take the full width of its parent on small screens.
        - `max-w-md`: Constrains its width on medium screens and up to prevent it from being too wide.
        - `p-8`: Provides internal padding.
        - Removed fixed height to allow content to define the height.
      */}
      <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Helpdesk System</h2>
        <form onSubmit={handleSignIn} className="flex flex-col items-center gap-4">
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            // `w-full` makes the input stretch to the container's width.
            className="w-full p-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
          />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // `w-full` makes the input stretch to the container's width.
            className="w-full p-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-10 py-2 rounded-lg text-lg mt-2 w-full hover:bg-green-600 transition-colors duration-300"
          >
            Sign In
          </button>
        </form>
        {/*
          Links section.
          - `flex-col sm:flex-row`: Stacks links vertically on small screens, and horizontally on screens `sm` and larger.
          - `gap-2 sm:justify-between`: Adds space between stacked links and pushes them to the edges when horizontal.
          - `w-full`: Ensures it takes the full width of the card.
        */}
        <div className="flex flex-col sm:flex-row sm:justify-between mt-6 text-sm w-full mx-auto gap-2">
          <span
            className="text-red-500 cursor-pointer hover:underline"
            onClick={() => navigate('/forgot-password')}
          >
            Forgot password
          </span>
          <Link to="/signup" className="text-black hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;