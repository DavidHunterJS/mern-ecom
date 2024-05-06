import { LOGIN_USER, LOGOUT_USER } from "../constants/userConstants";
import axiosInstance from "../../axiosInstance";

export const setReduxUserState = (userCreated) => (dispatch) => {
  dispatch({
    type: LOGIN_USER,
    payload: userCreated,
  });
};

export const logout = () => (dispatch) => {
  document.location.href = "/login";
  axiosInstance.get("/api/logout");
  localStorage.removeItem("userInfo");
  sessionStorage.removeItem("userInfo");
  localStorage.removeItem("cart");
  dispatch({ type: LOGOUT_USER });
};
