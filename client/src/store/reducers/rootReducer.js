// Cấu hình persist cho các reducer
// Redux-persist giúp mình có thể tùy chọn lưu hoặc không lưu state nào của reducer dưới localStorage mà không cần phải làm thủ công
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import userReducer from "./userReducer.";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import persistReducer from "redux-persist/es/persistReducer";

const commonConfig = {
  storage,
  stateReconciler: autoMergeLevel2,
};

const authConfig = {
  ...commonConfig,
  key: "auth",
  whitelist: ["isLoggedIn", "token"],
  // whitelist: nghĩa là mình có thể giữ những state nào dưới local
  // blacklist: thì ngược lại với whitelist, sẽ không lưu những giá trị đó dưới local
};

const rootReducer = combineReducers({
  auth: persistReducer(authConfig, authReducer),
  user: userReducer,
});

export default rootReducer;
