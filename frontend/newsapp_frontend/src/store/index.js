import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducers";

const userInfoFromStorage = localStorage.getItem('account') ? JSON.parse(localStorage.getItem('account')) : null;

const initialSate={
  user: {userInfo: userInfoFromStorage}
}

const store= configureStore({
    reducer:{
        user : userReducer,
  },
  preloadedState:initialSate,

});

export default store;