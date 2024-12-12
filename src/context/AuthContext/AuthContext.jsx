import { createContext, useContext, useEffect, useState } from "react";
import { getProfile } from "../../utils/resOptions";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getProfile().then((res) => setData(res.data));
      setIsAuth(true);
    }
  }, []);

  useEffect(() => {
    if (!userData && isAuth) getProfile().then((res) => setData(res.data));
  }, [isAuth]);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        data,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
