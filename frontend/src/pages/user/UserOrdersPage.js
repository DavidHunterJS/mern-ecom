import UserOrdersPageComponent from "./components/UserOrdersPageComponent";
import axiosInstance from "../../axiosInstance";

const getOrders = async () => {
  const { data } = await axiosInstance.get("/api/orders");
  return data;
};

const UserOrdersPage = () => {
  return <UserOrdersPageComponent getOrders={getOrders} />;
};

export default UserOrdersPage;
