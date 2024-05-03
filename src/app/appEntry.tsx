import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@/app/providers/ThemeContext.tsx";
import { Provider } from "react-redux";
import { store } from "@/app/appStore.ts";
import BaseLayout from "@/app/layouts/BaseLayout.tsx";
import "@/shared/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <BaseLayout />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);
