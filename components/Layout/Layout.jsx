"use client";

import { SessionProvider } from "next-auth/react";
import React, { Suspense } from "react";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import LoadingSpinner from "../Shared/LoadingSpinner";

const MainLayout = ({ children }) => {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div className="flex flex-col overflow-x-hidden">
      <SessionProvider>
        <Header theme={theme} setTheme={setTheme} />
        <Suspense fallback={<>{/* <LoadingSpinner /> */}</>}>
          {children}
        </Suspense>
        <Footer />
      </SessionProvider>
    </div>
  );
};

export default MainLayout;
