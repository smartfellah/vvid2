import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
export function ProtectedRouteElement({ element, unAuthOnly = false }) {
  const location = useLocation();

  const authChecked = true;
  const isLogged = useSelector((store) => {
    return store.authReducer.user ? true : false;
  });

  if (!authChecked) {
    return null;
  }

  if (unAuthOnly && isLogged) {
    const redirectTo = location?.state?.from;
    return <Navigate to={redirectTo ? redirectTo : "/"} replace />;
  }

  if (!unAuthOnly && isLogged) {
    console.log("logged");
    return element;
  }

  if (!unAuthOnly && !isLogged) {
    console.log("unlogged");
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return element;
}
