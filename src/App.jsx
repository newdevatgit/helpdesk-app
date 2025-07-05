import { Routes, Route, Outlet } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/user/Dashboard';
import NewTicket from './pages/user/NewTicket';
import OtMyTickets from './pages/ot/OtMyTickets';
import PrivateRoute from './utils/PrivateRoute'; // ✅ Import it
import UserProfile from './pages/UserProfile';
import ProfileSettings from './pages/ProfileSettings';
import OTDashboard from './pages/ot/OTDashboard';
import TicketApproval from './pages/ot/TicketApproval';
import Performance from './pages/ot/Performance';
import UserMyTickets from './pages/user/MyTickets';

// Wrapper to use Outlet inside MainLayout
function MainLayoutWrapper() {
  return (
    <PrivateRoute> {/* ✅ Wrap all protected routes */}
      <MainLayout>
        <Outlet />
      </MainLayout>
    </PrivateRoute>
  );
}

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Protected Routes */}
      <Route path="/" element={<MainLayoutWrapper />}>
        <Route index element={<Dashboard />} />
        <Route path="new-ticket" element={<NewTicket />} />
        <Route path="my-tickets" element={
          <PrivateRoute>
            {localStorage.getItem('role') === 'ot' ? <OtMyTickets /> : <UserMyTickets />}
          </PrivateRoute>
        } />
        <Route path="user-profile" element={<UserProfile />} />
        <Route path="profile-settings" element={<ProfileSettings />} />
        <Route path="ot-dashboard" element={
          <PrivateRoute requiredRole="ot">
            <OTDashboard />
          </PrivateRoute>
        } />
        <Route path="ticket-approval" element={
          <PrivateRoute requiredRole="ot">
            <TicketApproval />
          </PrivateRoute>
        } />
        <Route path="performance" element={
          <PrivateRoute requiredRole="ot">
            <Performance />
          </PrivateRoute>
        } />
      </Route>
    </Routes>
  );
}

export default App;
