import ProductsPageComponent from "./components/ProductsPageComponent";

import axiosInstance from "../../axiosInstance";

const fetchProducts = async (abctrl) => {
  const { data } = await axiosInstance.get("/api/products/admin", {
    signal: abctrl.signal,
  });
  return data;
};

const deleteProduct = async (productId) => {
  const { data } = await axiosInstance.delete(
    `/api/products/admin/${productId}`
  );
  return data;
};

const AdminProductsPage = () => {
  return (
    <ProductsPageComponent
      fetchProducts={fetchProducts}
      deleteProduct={deleteProduct}
    />
  );
};

export default AdminProductsPage;
