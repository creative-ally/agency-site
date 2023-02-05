'use client';

import React, { Suspense } from 'react';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import LoadingSpinner from '../shared/LoadingSpinner';

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
