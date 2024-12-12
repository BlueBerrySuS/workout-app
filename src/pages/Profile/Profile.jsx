import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../../context/AuthContext/AuthContext";

const ProfilePage = () => {
  const userContext = useUserContext();

  return (
    <>
      <p>Token: {userContext.token}</p>
      <p>Name: {userContext.name}</p>
      <p>Email: {userContext.email}</p>
    </>
  );
};

export default ProfilePage;
