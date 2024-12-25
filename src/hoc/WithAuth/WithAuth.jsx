import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../zustand/useAuthStore";

const WithAuth = ({ children }) => {
  const {token} = useAuthStore();

  if (token) return children;
  else return <Navigate to={"/login"} />;
};

export {WithAuth}
