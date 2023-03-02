import { Navigate } from "react-router-dom";
export function ProtectedRouteElement({ element, unAuthOnly }) {
  const isLogged = false;
  return isLogged ? element : <Navigate to="/login" replace />;
}
