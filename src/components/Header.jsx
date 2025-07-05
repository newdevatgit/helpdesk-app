import { Link, useNavigate } from 'react-router-dom';
import { FaBell, FaCog, FaUserCircle } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

const Header = () => {
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
        <FaBell className="cursor-pointer" />
        <FaCog className="cursor-pointer" />
        <Link to="/user-profile" title="User Profile">
          <FaUserCircle size={28} className="cursor-pointer hover:text-primary" />
        </Link>
        <div className="bg-pink-500 w-8 h-8 rounded-full flex items-center justify-center font-bold">
          A
        </div>
        <button onClick={handleLogout} title="Logout">
          <FiLogOut size={24} className="hover:text-red-500" />
        </button>
      </div>
    </header>
  );
};

export default Header;
