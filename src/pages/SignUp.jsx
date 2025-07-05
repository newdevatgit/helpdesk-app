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
    <div className="flex justify-center items-center min-h-screen bg-teal-300">
      <div className="bg-[#EFEDED80] p-10 rounded shadow-md w-[50vw] text-center">
        <h1 className="text-2xl font-bold mb-2">Helpdesk System</h1>
        <p className="mb-6">Sign up here</p>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-6 border rounded"
        />
        <button
          onClick={handleSignUp}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full mb-4"
        >
          Sign Up
        </button>
        <div className="flex justify-between items-center text-sm">
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
