import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (username && password && email) {
      localStorage.setItem('user', JSON.stringify({ username, password, email }));
      alert('Sign up successful! Please sign in.');
      navigate('/signin');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-teal-300 px-4">
      <div className="bg-[#EFEDED80] p-6 sm:p-10 rounded shadow-md w-full max-w-md sm:max-w-lg lg:max-w-2xl text-center">
        <h1 className="text-xl sm:text-2xl font-bold mb-2">Helpdesk System</h1>
        <p className="mb-6 text-sm sm:text-base">Sign up here</p>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-4 border rounded text-sm sm:text-base"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded text-sm sm:text-base"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-6 border rounded text-sm sm:text-base"
        />
        <button
          onClick={handleSignUp}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full mb-4 text-sm sm:text-base"
        >
          Sign Up
        </button>
        <div className="flex justify-between items-center text-xs sm:text-sm">
          <span
            className="text-orange-500 cursor-pointer"
            onClick={() => navigate('/forgot-password')}
          >
            Forgot password
          </span>
          <span
            className="text-black cursor-pointer"
            onClick={() => navigate('/signin')}
          >
            Sign In
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
