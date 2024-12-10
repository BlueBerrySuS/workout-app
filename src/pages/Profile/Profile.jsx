import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/AuthContext";

const ProfilePage = () => {
    const userContext = useAuth();

    // Если еще идет загрузка данных, показываем индикатор загрузки
    if (userContext.loading) {
        return <div>Loading...</div>; // Вы можете поставить здесь что-то более подходящее для вашего приложения
    }

    if (!userContext.isAuth) {
        return <Navigate to="/login" replace />;
    }

    return (
        <>
            <p>Token: {userContext.token}</p>
            <p>Name: {userContext.name}</p>
            <p>Email: {userContext.email}</p>
        </>
    );
};

export default ProfilePage;
