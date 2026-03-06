import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role, allowedRoles = [] }) {
  if (!role) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/notAuthorized" replace />;
  }

  return children;
}