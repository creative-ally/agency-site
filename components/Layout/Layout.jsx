"use client";

import { SessionProvider } from "next-auth/react";
import React, { Suspense } from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import LoadingSpinner from "../Shared/LoadingSpinner";

const MainLayout = ({ children }) => {

  return (
    <div className="flex flex-col overflow-x-hidden">
      <SessionProvider>
        <Header />
        <Suspense fallback={<>{/* <LoadingSpinner /> */}</>}>
          {children}
        </Suspense>
        <Footer />
      </SessionProvider>
    </div>
  );
};

export default MainLayout;
