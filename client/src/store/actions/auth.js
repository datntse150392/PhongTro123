import { apiLogin, apiRegister } from "../../services/auth";
import { actionTypes } from "./actionTypes";
export const register = (payload) => async (dispatch) => {
  try {
    const response = await apiRegister(payload);
    console.log(response);
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
        data: response.data.token,
      });
    } else {
      dispatch({
        type: actionTypes.REGISTER_FAIL,
        data: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.REGISTER_FAIL,
      data: null,
    });
  }
};

export const login = (payload) => async (dispatch) => {
  try {
    const response = await apiLogin(payload);
    console.log(response);
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        data: response?.data.token,
      });
    } else {
      dispatch({
        type: actionTypes.LOGIN_FAIL,
        data: response?.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      data: null,
    });
  }
};

// export const logout = () => (dispatch) => {
//   dispatch({
//     type: actionTypes.LOGOUT,
//     data: null,
//   });
// };

export const logout = () => ({
  type: actionTypes.LOGOUT,
});
