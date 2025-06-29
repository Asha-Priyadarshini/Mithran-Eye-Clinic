import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  // Get the current location using React Router's useLocation hook
  const { pathname } = useLocation();
  
  // When pathname changes (page navigation occurs), scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  // This component doesn't render anything
  return null;
}

export default ScrollToTop;
