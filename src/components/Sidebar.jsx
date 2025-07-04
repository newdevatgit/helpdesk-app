import { FaTachometerAlt, FaTicketAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-[250px] bg-gray-200 h-screen p-6 text-black">
      <h1 className="text-2xl font-bold text-teal-600 mb-10">Helpdesk</h1>
      <nav className="flex flex-col gap-6">
        <Link to="/" className="flex items-center gap-2 hover:text-teal-600">
          <FaTachometerAlt /> Dashboard
        </Link>
        <Link to="/new-ticket" className="flex items-center gap-2 hover:text-teal-600">
          <FaTicketAlt /> New Ticket
        </Link>
        <Link to="/my-tickets" className="flex items-center gap-2 hover:text-teal-600">
          <FaTicketAlt /> My Tickets
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
