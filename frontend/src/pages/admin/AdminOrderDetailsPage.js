import OrderDetailsPageComponent from "./components/OrderDetailsPageComponent";

import axiosInstance from "../../axiosInstance";

const getOrder = async (id) => {
  const { data } = await axiosInstance.get("/api/orders/user/" + id);
  return data;
};

const markAsDelivered = async (id) => {
  const { data } = await axiosInstance.put("/api/orders/delivered/" + id);
  if (data) {
    return data;
  }
};

const AdminOrderDetailsPage = () => {
  return (
    <OrderDetailsPageComponent
      getOrder={getOrder}
      markAsDelivered={markAsDelivered}
    />
  );
};

export default AdminOrderDetailsPage;
