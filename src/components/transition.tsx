import { useEffect, useState } from "react";
import { useLocation, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Loading } from "./loading";

export const Transition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setLoading(true);

      const timer = setTimeout(() => {
        setLoading(false);
        setDisplayLocation(location);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [location, displayLocation]);

  return (
    <>
      <AnimatePresence>
        {loading && <Loading />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <Routes location={displayLocation}>
          {children}
        </Routes>
      </AnimatePresence>
    </>
  );
};

