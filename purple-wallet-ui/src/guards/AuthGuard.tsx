import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

interface AuthGuardProps {
  children: React.ReactNode;
}

export const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const token = Cookies.get('token');

  if (!token) {
    return <Navigate to="/signin" />;
  }

  return <>{children}</>;
};
