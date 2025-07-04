import { Routes, Route, Outlet } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import NewTicket from './pages/NewTicket';
import MyTickets from './pages/MyTickets';
import PrivateRoute from './utils/PrivateRoute'; // ✅ Import it

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
        <Route path="my-tickets" element={<MyTickets />} />
      </Route>
    </Routes>
  );
}

export default App;
