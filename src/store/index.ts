import { configureStore, combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./reducer/counter";
// 合并所有的reducer
export const rootReducer = combineReducers({
  counter: counterReducer,
});
// 实现loggerMiddleware,注意这里的函数嵌套结构
const loggerMiddleware = (store:any) => (next:any) => (action:any) => {
  console.log("action", action);
  //中间如果有异步请求，会等待异步请求完成
  const result = next(action);
  console.log("result", result);
  return result;
};
export const store = configureStore({
    devTools: false,
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        // 注意关闭serializableCheck,否则会报错
        serializableCheck: false,
      }).concat(loggerMiddleware),
})
