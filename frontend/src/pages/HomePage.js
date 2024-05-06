import HomePageComponent from "./components/HomePageComponent";
import { useSelector } from "react-redux";
import axiosInstance from "../../axiosInstance";

const getBestsellers = async () => {
  const { data } = await axiosInstance.get("/api/products/bestsellers");
  return data;
};

const HomePage = () => {
  const { categories } = useSelector((state) => state.getCategories);

  return (
    <HomePageComponent
      categories={categories}
      getBestsellers={getBestsellers}
    />
  );
};

export default HomePage;
