import { Navigate } from "react-router-dom";

const WithAuth = ({ children }) => {
  const token =
    localStorage.getItem("Token") || sessionStorage.getItem("token");

  if (token) return children;
  else return <Navigate to={"/login"} />;
};
