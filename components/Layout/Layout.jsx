'use client';

import React, { Suspense } from 'react';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <Suspense
        fallback={
          <>
            <p>loading....</p>
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
