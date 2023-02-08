'use client';
import Footer from '@/components/Shared/Footer';
import Header from '@/components/Shared/Header';
import { Suspense } from 'react';
import '../styles/globals.css';
import Loading from './loading';
import { useState, useEffect } from "react";


export default function RootLayout({ children }) {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <html lang="en" className='dark'>
      <head />
      <body className="bg-base-100 dark:bg-dark-neutral">
        <Header theme={theme} setTheme={setTheme}/>
        <Suspense
          fallback={
            <>
              <Loading />
            </>
          }
        >
          {children}
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
