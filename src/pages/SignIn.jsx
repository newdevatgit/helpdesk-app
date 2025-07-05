import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    let role = 'user';
    if (username === 'otuser') {
      role = 'ot';
    }
    localStorage.setItem('role', role);
    localStorage.setItem('isLoggedIn', 'true');

    // Redirect based on role
    if (role === 'ot') {
      navigate('/ot-dashboard');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-teal-300">
      <div className="bg-white p-8 rounded shadow-md w-[300px] text-center">
        <h2 className="text-xl font-semibold mb-4">Helpdesk System</h2>
        <form onSubmit={handleSignIn}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mb-3 border"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-4 border"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded w-full"
          >
            Sign In
          </button>
        </form>
        <div className="flex justify-between mt-4 text-sm">
          <span className="text-red-500">Forgot password</span>
          <Link to="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
