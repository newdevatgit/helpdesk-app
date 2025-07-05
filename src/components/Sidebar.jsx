import { FaTachometerAlt, FaTicketAlt } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const role = localStorage.getItem('role');
  const location = useLocation();

  return (
    <aside className="w-[250px] bg-gray-200 h-auto p-6 text-black">
      {/* <h1 className="text-2xl font-bold text-teal-600 mb-10">Helpdesk</h1> */}
      <nav className="flex flex-col gap-6">
        {role === 'ot' ? (
          <>
            <Link to="/ot-dashboard" className={`flex items-center gap-2 hover:text-teal-600 ${location.pathname === '/ot-dashboard' ? 'font-bold text-teal-600' : ''}`}>
              <FaTachometerAlt /> Dashboard
            </Link>
            <Link to="/ticket-approval" className={`flex items-center gap-2 hover:text-teal-600 ${location.pathname === '/ticket-approval' ? 'font-bold text-teal-600' : ''}`}>
              <FaTicketAlt /> Ticket Approval
            </Link>
            <Link to="/my-tickets" className={`flex items-center gap-2 hover:text-teal-600 ${location.pathname === '/my-tickets' ? 'font-bold text-teal-600' : ''}`}>
              <FaTicketAlt /> My Ticket
            </Link>
            <Link to="/performance" className={`flex items-center gap-2 hover:text-teal-600 ${location.pathname === '/performance' ? 'font-bold text-teal-600' : ''}`}>
              <FaTicketAlt /> Performance
            </Link>
          </>
        ) : (
          <>
            <Link to="/" className={`flex items-center gap-2 hover:text-teal-600 ${location.pathname === '/' ? 'font-bold text-teal-600' : ''}`}>
              <FaTachometerAlt /> Dashboard
            </Link>
            <Link to="/new-ticket" className={`flex items-center gap-2 hover:text-teal-600 ${location.pathname === '/new-ticket' ? 'font-bold text-teal-600' : ''}`}>
              <FaTicketAlt /> New Ticket
            </Link>
            <Link to="/my-tickets" className={`flex items-center gap-2 hover:text-teal-600 ${location.pathname === '/my-tickets' ? 'font-bold text-teal-600' : ''}`}>
              <FaTicketAlt /> My Tickets
            </Link>
          </>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
