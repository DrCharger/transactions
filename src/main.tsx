import React from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import store from "./store";

import Transactions from "./routes/Transactions";
import Login from "./routes/Login";
import ErrorPage from "./ErrorPage";
import { StyledMain } from "./styled/Styled";
import { ChakraProvider } from "@chakra-ui/react";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/transactions",
    element: <Transactions />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <StyledMain>
          <RouterProvider router={router} />
        </StyledMain>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
