import OrdersPageComponent from "./components/OrdersPageComponent";

import axiosInstance from "../../axiosInstance";

const getOrders = async () => {
  const { data } = await axiosInstance.get("/api/orders/admin");
  return data;
};

const AdminOrdersPage = () => {
  return <OrdersPageComponent getOrders={getOrders} />;
};

export default AdminOrdersPage;
