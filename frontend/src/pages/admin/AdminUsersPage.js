import UsersPageComponent from "./components/UsersPageComponent";

import axiosInstance from "../../axiosInstance";

const fetchUsers = async (abctrl) => {
  const { data } = await axiosInstance.get("/api/users", {
    signal: abctrl.signal,
  });
  return data;
};

const deleteUser = async (userId) => {
  const { data } = await axiosInstance.delete(`/api/users/${userId}`);
  return data;
};

const AdminUsersPage = () => {
  return <UsersPageComponent fetchUsers={fetchUsers} deleteUser={deleteUser} />;
};

export default AdminUsersPage;
