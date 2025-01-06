import { configureStore } from "@reduxjs/toolkit";
import btnSlice from "./slices/btnSlice"
export const store=configureStore({
    reducer:{
        btn:btnSlice
    }
})