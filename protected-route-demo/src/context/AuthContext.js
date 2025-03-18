import React,{useContext,useState,createContext, Children} from "react";
import { useNavigate } from "react-router-dom";

const AuthContext=createContext();
export const AuthProvider=({Children})=>{
    const[isAuthenticated,setIsAuthenticated]=useState(false);
    const navigate = useNavigate();

  const login = () => {
    setIsAuthenticated(true);
    navigate("/dashboard"); // Redirect to dashboard after login
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate("/login"); // Redirect to login after logout
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {Children}
    </AuthContext.Provider>
  );
};

// Custom Hook for using AuthContext
export const useAuth = () => useContext(AuthContext);
