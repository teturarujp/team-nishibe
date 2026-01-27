import { useLocation, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Loading } from "./loading";

export const Transition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [location.key]);

  return (
    <>
      <AnimatePresence>
        {loading && <Loading />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <Routes location={location}>
          {children}
        </Routes>
      </AnimatePresence>
    </>
  );
};



