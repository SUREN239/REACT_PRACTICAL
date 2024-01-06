import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "./ThemeReducer";

export const Store = configureStore({
    reducer: ThemeReducer
})