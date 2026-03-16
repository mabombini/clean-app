import { createContext, useState, useEffect } from "react";
import { checkAuth } from "../utils/checkAuth";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [userid, setUserId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    const verify = async () => {
      const result = await checkAuth();
      if (result.authenticated) {
        setUser(result.user)
        setRole(result.user.role)
        setUserId(result.user.userid)
      }
      setLoading(false);
    };

    verify();
  }, []);

  
  return (
    <AuthContext.Provider value={{ user, setUser, role, setRole, loading, setLoading, userid }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}