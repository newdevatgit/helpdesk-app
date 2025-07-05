import { FaTachometerAlt, FaTicketAlt, FaChartLine, FaDatabase, FaCog, FaHistory } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const role = localStorage.getItem('role');
  const location = useLocation();

  return (
    <aside className="w-[250px] bg-gray-200 h-auto p-6 text-black">
      <nav className="flex flex-col gap-6">
        {role === 'admin' ? (
          <>
            <Link to="/admin-dashboard" className={`flex items-center gap-2 hover:text-teal-600 ${location.pathname === '/admin-dashboard' ? 'font-bold text-teal-600' : ''}`}>
              <FaTachometerAlt /> Dashboard
            </Link>
            <Link to="/admin-database" className={`flex items-center gap-2 hover:text-teal-600 ${location.pathname === '/admin-database' ? 'font-bold text-teal-600' : ''}`}>
              <FaDatabase /> Database
            </Link>
            <Link to="/admin-setting" className={`flex items-center gap-2 hover:text-teal-600 ${location.pathname === '/admin-setting' ? 'font-bold text-teal-600' : ''}`}>
              <FaCog /> Setting
            </Link>
            <Link to="/admin-user-log-history" className={`flex items-center gap-2 hover:text-teal-600 ${location.pathname === '/admin-user-log-history' ? 'font-bold text-teal-600' : ''}`}>
              <FaHistory /> User Log History
            </Link>
          </>
        ) : role === 'ot' ? (
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
        ) : role === 'tech' ? (
          <>
            <Link to="/tech-dashboard" className={`flex items-center gap-2 hover:text-teal-600 ${location.pathname === '/tech-dashboard' ? 'font-bold text-teal-600' : ''}`}>
              <FaTachometerAlt /> Dashboard
            </Link>
            <Link to="/tech-my-tickets" className={`flex items-center gap-2 hover:text-teal-600 ${location.pathname === '/tech-my-tickets' ? 'font-bold text-teal-600' : ''}`}>
              <FaTicketAlt /> My Ticket
            </Link>
            <Link to="/tech-performance" className={`flex items-center gap-2 hover:text-teal-600 ${location.pathname === '/tech-performance' ? 'font-bold text-teal-600' : ''}`}>
              <FaChartLine /> Performance
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
