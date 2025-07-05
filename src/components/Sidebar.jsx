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
             <FaCog/> Setting
            </Link>
            <Link to="/admin-user-log-history" className={`flex items-center gap-2 hover:text-teal-600 ${location.pathname === '/admin-user-log-history' ? 'font-bold text-teal-600' : ''}`}>
              <svg width="20" height="20" viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.4167 4V32H4.08333V4H27.4167ZM30.75 0H0.75V36H30.75V0ZM24.0833 28H7.41667V26H24.0833V28ZM24.0833 24H7.41667V22H24.0833V24ZM24.0833 18H7.41667V8H24.0833V18Z" fill="black" />
              </svg>
              User Log History
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
            <Link to="/ot-tickets" className={`flex items-center gap-2 hover:text-teal-600 ${location.pathname === '/ot-tickets' ? 'font-bold text-teal-600' : ''}`}>
              <FaTicketAlt /> My Ticket
            </Link>
            <Link to="/performance" className={`flex items-center gap-2 hover:text-teal-600 ${location.pathname === '/performance' ? 'font-bold text-teal-600' : ''}`}>
              <svg width="20" height="20" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.0535 14.3119C22.9155 14.3119 22.7775 14.4312 22.6395 14.5505L22.3636 16.1009C21.9496 16.2202 21.5357 16.4587 21.2597 16.6972L19.6039 16.1009C19.4659 16.1009 19.3279 16.1009 19.1899 16.2202L17.8101 18.2477C17.6721 18.367 17.8101 18.4862 17.948 18.6055L19.4659 19.5596V20.7523L17.948 21.7064C17.8101 21.8257 17.8101 21.945 17.8101 22.0642L19.1899 24.0917C19.3279 24.211 19.4659 24.211 19.6039 24.211L21.2597 23.6147C21.6736 23.8532 21.9496 24.0917 22.3636 24.211L22.6395 25.7615C22.6395 25.8807 22.7775 26 23.0535 26H25.8132C25.9512 26 26.0892 25.8807 26.0892 25.7615L26.3652 24.211C26.7791 24.0917 27.1931 23.8532 27.469 23.6147L29.1249 24.211C29.2628 24.211 29.5388 24.211 29.5388 24.0917L30.9187 22.0642C31.0567 21.945 30.9187 21.8257 30.7807 21.7064L29.2628 20.7523V19.5596L30.7807 18.6055C30.9187 18.4862 30.9187 18.367 30.9187 18.2477L29.5388 16.2202C29.4008 16.1009 29.2628 16.1009 29.1249 16.1009L27.607 16.6972C27.1931 16.4587 26.9171 16.2202 26.3652 16.1009L26.0892 14.5505C26.0892 14.4312 25.9512 14.3119 25.8132 14.3119H23.0535ZM24.4334 18.4862C25.5372 18.4862 26.5031 19.3211 26.5031 20.2752C26.5031 21.2294 25.5372 22.0642 24.4334 22.0642C23.3295 22.0642 22.3636 21.2294 22.3636 20.2752C22.3636 19.3211 23.3295 18.4862 24.4334 18.4862ZM15.7403 23.8532H0.97583L28.5729 0V12.7615C27.331 12.2844 25.9512 11.9266 24.4334 11.9266C19.0519 11.9266 14.7744 15.6239 14.7744 20.2752C14.7744 21.5872 15.0503 22.7798 15.7403 23.8532Z" fill="black" />
              </svg>
              Performance
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
