import { useState, useEffect } from 'react';

const useAuthStatus = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  
    useEffect(() => {
      const userId = sessionStorage.getItem('userId');
      if (userId) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    }, []);
  
    const logout = () => {
      sessionStorage.removeItem('userId');
      setIsAuthenticated(false);
    };
  
    return { isAuthenticated, logout };
  };
  

export default useAuthStatus;
