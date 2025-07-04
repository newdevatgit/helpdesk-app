import { FaBell, FaCog, FaUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="w-full h-[90px] bg-teal-600 flex justify-between items-center px-6 text-white">
      <h1 className="text-2xl font-bold">Helpdesk</h1>
      <div className="flex items-center gap-4">
        <FaBell className="cursor-pointer" />
        <FaCog className="cursor-pointer" />
        <FaUserCircle className="text-2xl" />
        <div className="bg-pink-500 w-8 h-8 rounded-full flex items-center justify-center font-bold">
          A
        </div>
      </div>
    </header>
  );
};

export default Header;
