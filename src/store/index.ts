import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import counterReducer from "./reducer/counter";
//移动端持久化
import AsyncStorage from '@react-native-async-storage/async-storage';
// 合并所有的reducer
export const rootReducer = combineReducers({
  counter: counterReducer,
});
//持久化配置
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist:[]
}

// 实现loggerMiddleware,注意这里的函数嵌套结构
const loggerMiddleware = (store:any) => (next:any) => (action:any) => {
  console.log("action", action);
  //中间如果有异步请求，会等待异步请求完成
  const result = next(action);
  console.log("result", result);
  return result;
};
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
    devTools: false,
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        // 注意关闭serializableCheck,否则会报错
        serializableCheck: false,
      }).concat(loggerMiddleware),
})

export const persistor = persistStore(store);
