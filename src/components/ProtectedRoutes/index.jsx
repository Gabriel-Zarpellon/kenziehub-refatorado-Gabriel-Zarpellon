import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoutes() {
  const { user } = useSelector((state) => state);

  return user ? <Outlet /> : <Navigate to="/" />;
}
