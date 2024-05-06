import EditUserPageComponent from "./components/EditUserPageComponent";
import axiosInstance from "../../axiosInstance";

const fetchUser = async (userId) => {
  const { data } = await axiosInstance.get(`/api/users/${userId}`);
  return data;
};

const updateUserApiRequest = async (userId, name, lastName, email, isAdmin) => {
  const { data } = await axiosInstance.put(`/api/users/${userId}`, {
    name,
    lastName,
    email,
    isAdmin,
  });
  return data;
};

const AdminEditUserPage = () => {
  return (
    <EditUserPageComponent
      updateUserApiRequest={updateUserApiRequest}
      fetchUser={fetchUser}
    />
  );
};

export default AdminEditUserPage;
