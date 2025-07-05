import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBell, FaCog, FaUserCircle } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

const Header = () => {
  const [language, setLanguage] = useState('BM');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('role'); // if you store role
    // ...remove any other auth info...
    navigate('/signin');
  };

  return (
    <header className="w-auto h-[90px] bg-teal-600 flex justify-between items-center px-6 text-white">
      <h1 className="text-2xl font-bold">Helpdesk</h1>
      <div className="flex items-center gap-4">
        {/* Language Switcher */}
        <div className="flex gap-1 bg-black rounded px-1 py-0.5">
          <button
            className={`text-xs px-2 py-0.5 rounded ${language === 'BM' ? 'bg-white text-black' : 'text-white'}`}
            onClick={() => setLanguage('BM')}
          >
            BM
          </button>
          <button
            className={`text-xs px-2 py-0.5 rounded ${language === 'BI' ? 'bg-white text-black' : 'text-white'}`}
            onClick={() => setLanguage('BI')}
          >
            BI
          </button>
        </div>
        <FaBell size={20} className="text-black cursor-pointer hover:text-white" />
        <Link to="/user-profile" title="User Profile">
          <FaUserCircle size={20} className="text-black cursor-pointer hover:text-white hover:text-primary" />
        </Link>
        {/* Logout Button */}
        <button onClick={handleLogout} title="Logout">
          <FiLogOut size={20} className="text-black hover:text-white" />
        </button>
      </div>
    </header>
  );
};

export default Header;
