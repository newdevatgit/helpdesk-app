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
import TechDashboard from './pages/tech/Dashboard';
import TechMyTickets from './pages/tech/MyTickets';
import TechPerformance from './pages/tech/Performance';
import AdminDashboard from './pages/admin/Dashboard';
import Database from './pages/admin/Database';
import Setting from './pages/admin/Setting';
import UserLogHistory from './pages/admin/UserLogHistory';
import ForgotPassword from './pages/ForgotPassword';

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
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Protected Routes */}
      <Route path="/" element={<MainLayoutWrapper />}>
        <Route index element={<Dashboard />} />
        <Route path="new-ticket" element={<NewTicket />} />
        <Route path="my-tickets" element={
          <PrivateRoute>
            <UserMyTickets />
          </PrivateRoute>
        } />
        <Route path="user-profile" element={<UserProfile />} />
        <Route path="profile-settings" element={<ProfileSettings />} />

        <Route path="ot-tickets" element={
          <PrivateRoute requiredRole="ot">
            <OtMyTickets />
          </PrivateRoute>
        } />
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
        <Route path="tech-dashboard" element={
          <PrivateRoute requiredRole="tech">
            <TechDashboard />
          </PrivateRoute>
        } />
        <Route path="tech-my-tickets" element={
          <PrivateRoute requiredRole="tech">
            <TechMyTickets />
          </PrivateRoute>
        } />
        <Route path="tech-performance" element={
          <PrivateRoute requiredRole="tech">
            <TechPerformance />
          </PrivateRoute>
        } />
        <Route path="admin-dashboard" element={
          <PrivateRoute requiredRole="admin">
            <AdminDashboard />
          </PrivateRoute>
        } />
        <Route path="admin-database" element={
          <PrivateRoute requiredRole="admin">
            <Database />
          </PrivateRoute>
        } />
        <Route path="admin-setting" element={
          <PrivateRoute requiredRole="admin">
            <Setting />
          </PrivateRoute>
        } />
        <Route path="admin-user-log-history" element={
          <PrivateRoute requiredRole="admin">
            <UserLogHistory />
          </PrivateRoute>
        } />
      </Route>
    </Routes>
  );
}

export default App;
