import { useContext } from "react";

import { AuthContextProps, AuthContext } from "../contexts/auth";


export function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within as AuthProvider');
  }

  return context;
}