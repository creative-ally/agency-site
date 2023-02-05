'use client';

import React, { Suspense } from 'react';
import Footer from '../Sharedd/Footer';
import Header from '../Sharedd/Header';
import LoadingSpinner from '../Sharedd/LoadingSpinner';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <Suspense
        fallback={
          <>
            <LoadingSpinner />
          </>
        }
      >
        {children}
      </Suspense>
      <Footer />
    </div>
  );
};

export default MainLayout;
