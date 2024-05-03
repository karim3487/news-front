import { combineReducers } from "@reduxjs/toolkit";
import { newsApi } from "@/entities/news/api/api.ts";
import { categoriesApi } from "@/entities/category/api/api.ts";
import newsReducer from "@/entities/news/model/newsSlice";

export const rootReducer = combineReducers({
  news: newsReducer,
  [newsApi.reducerPath]: newsApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
});
