import { createContext, useContext, useEffect, useState } from "react"

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false); 
    const [token, setToken] = useState(null);
    const [email, setEmail] = useState(null);
    const [name, setName] = useState(null);
    const [isRemember, setIsRemember] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const savedUserData = JSON.parse(localStorage.getItem("userData"))
        if(savedUserData) {
            setIsAuth(true);
            setToken(savedUserData.token);
            setEmail(savedUserData.email);
            setName(savedUserData.name);
            setIsRemember(savedUserData.isRemember)
        }
        setLoading(false);
    }, [])

    useEffect(() => {
        if(isRemember) {
            const userData = {token, email, name, isRemember}
            localStorage.setItem("userData", JSON.stringify(userData))
        } else {
            localStorage.removeItem("userData")
        }
    }, [isRemember, email, name, token])



    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            token,
            setToken,
            email,
            setEmail,
            name,
            setName,
            isRemember,
            setIsRemember,
            loading
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}

export default AuthProvider;