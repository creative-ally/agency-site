'use client';

import React, { Suspense } from 'react';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import LoadingSpinner from '../Shared/LoadingSpinner';

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
