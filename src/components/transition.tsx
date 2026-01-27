import { useEffect, useState } from "react";
import { useLocation, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Loading } from "./loading";

export const Transition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (location.key !== displayLocation.key) {
      setLoading(true);

      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setLoading(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [location, displayLocation]);

  return (
    <>
      {/* 転移アニメーション */}
      <AnimatePresence>
        {loading && <Loading />}
      </AnimatePresence>

      {/* ページ本体 */}
      <AnimatePresence mode="wait">
        <Routes location={displayLocation}>
          {children}
        </Routes>
      </AnimatePresence>
    </>
  );
};



