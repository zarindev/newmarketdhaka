import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import { BrowserRouter as Router } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import { AppProvider } from "./context/AppProvider";
import { AuthProvider } from "./context/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// components import
import App from "./App";
import ScrollToTop from "./pages/ScrollToTop";
import Toastify from "./components/Toastify/Toastify";

const queryClient = new QueryClient();

createStore({
  data: {
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  },
  state: {
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    address: "",
    binNumber: "",
    taxNumber: "",
    phoneNumber: "",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <AppProvider>
      <AuthProvider>
        <StateMachineProvider>
          <Router>
            <ScrollToTop>
              <Toastify position="top-right" />
              <React.StrictMode>
                <App />
              </React.StrictMode>
            </ScrollToTop>
          </Router>
        </StateMachineProvider>
      </AuthProvider>
    </AppProvider>
  </QueryClientProvider>
);
