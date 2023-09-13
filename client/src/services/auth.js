import axiosConfig from "../axiosConfig";
export const apiRegister = (payload) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "POST",
        url: "/api/v1/auth/register",
        data: payload,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiLogin = (payLoad) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axiosConfig({
        method: "POST",
        url: "/api/v1/auth/login",
        data: payLoad,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
