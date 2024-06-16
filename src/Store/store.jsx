import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./Slices/UserSlice";

const Store = configureStore({
   reducer: {
      user: userSlice.reducer
   }
})

export { Store }
