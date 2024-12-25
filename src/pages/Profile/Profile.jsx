import { useAuthStore } from "../../zustand/useAuthStore";


const ProfilePage = () => {
  const {logout} = useAuthStore();

  return (
    <>
      <p className="bg-yellow-100 h-[100px]">Token: TEXT</p>
      <p>Name: TEXt</p>
      <p>Email: TEXT</p>
      <button onClick={() => logout()}> logout</button>
    </>
  );
};

export default ProfilePage;
