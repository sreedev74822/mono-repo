import { Navigate,Outlet,useLocation } from "react-router-dom";

export const ProtectedRoute = ({requiredRole}:any) => {
    return <Outlet/>
}