import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (username && password) {
      localStorage.setItem('user', JSON.stringify({ username, password }));
      alert('Sign up successful! Please sign in.');
      navigate('/signin');
    } else {
      alert('Please fill in both fields');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-teal-300">
      <div className="bg-white p-8 rounded shadow-md w-[300px] text-center">
        <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
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
          onClick={handleSignUp}
          className="bg-green-600 text-white px-4 py-2 rounded w-full"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
