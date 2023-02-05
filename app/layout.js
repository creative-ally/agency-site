import Footer from '@/components/Sharedd/Footer';
import Header from '@/components/Sharedd/Header';
import { Suspense } from 'react';
import '../styles/globals.css';
import Loading from './loading';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="flex flex-col min-h-screen overflow-x-hidden">
        <Header />
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
