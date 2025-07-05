import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    let role = 'user';
    if (username === 'admin') {
      role = 'admin';
    } else if (username === 'otuser') {
      role = 'ot';
    } else if (username === 'techuser') {
      role = 'tech';
    }
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
    <div className="flex justify-center items-center min-h-screen bg-teal-300">
      <div className="bg-[#EFEDED80] p-12 rounded-[10px] shadow-md w-[50vw] h-[70vh] text-center">
        <h2 className="text-2xl font-bold mb-8">Helpdesk System</h2>
        <form onSubmit={handleSignIn} className="flex flex-col items-center gap-4">
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-[320px] p-2 border text-lg"
          />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-[320px] p-2 border text-lg"
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-10 py-2 rounded-[10px] text-lg mt-2"
          >
            Sign In
          </button>
        </form>
        <div className="flex justify-between mt-6 text-sm w-[320px] mx-auto">
          <span className="text-red-500 cursor-pointer"
          onClick={() => navigate('/forgot-password')}
          >Forgot password</span>
          <Link to="/signup" className="text-black hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
