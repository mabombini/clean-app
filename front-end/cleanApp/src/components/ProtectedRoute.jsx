import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";


export default function ProtectedRoute({ children, allowedRoles = [] }) {

  const { user, role, loading } = useContext(AuthContext);

  if (loading) return <div>Loading...</div>
  
  if (!role) {
    return <Navigate to="/login" replace />;
  }

  console.log("User on processed route:", user);
  console.log("User role on protected route:", role);

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/notAuthorized" replace />;
  }

  return children;
}