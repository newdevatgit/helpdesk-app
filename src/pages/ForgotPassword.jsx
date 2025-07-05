import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending reset link
    if (email) {
      alert('If this email exists, a password reset link has been sent.');
      navigate('/signin');
    } else {
      alert('Please enter your email.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-teal-300">
      <div className="bg-cyan-100 p-10 rounded shadow-md w-[400px] text-center">
        <h2 className="text-xl font-bold mb-4">Forgot Password</h2>
        <p className="mb-6">
          Don’t worry. Enter your email below and we will send you a link to change your password.
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full mb-2"
          >
            Submit
          </button>
        </form>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
          onClick={() => navigate('/signin')}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;