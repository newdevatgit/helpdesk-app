import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header at the top */}
      <Header />

      {/* Sidebar + Main content side-by-side */}
      <div className="flex flex-1">
        <Sidebar className="w-[250px]" />

        <div className="flex flex-col flex-1">
          <main className="flex-1 p-6 overflow-auto bg-white">
            {children || <Outlet />}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
