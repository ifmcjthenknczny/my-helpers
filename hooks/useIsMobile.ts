import { useEffect, useState } from "react";

const useIsMobile = () => {
  const MOBILE_WIDTH_THRESHOLD_PX = 768;
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < MOBILE_WIDTH_THRESHOLD_PX
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(max-width: ${MOBILE_WIDTH_THRESHOLD_PX}px)`
    );
    const handleMediaQueryChange = () => setIsMobile(mediaQuery.matches);

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return isMobile;
};

export default useIsMobile;
