'use client';

import React, { Suspense } from 'react';
import Footer from '../shared/footer';
import Header from '../shared/header';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-black text-white">
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
