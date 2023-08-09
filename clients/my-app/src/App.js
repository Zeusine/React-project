import * as React from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Auth0Provider } from '@auth0/auth0-react';
import { useAuth0 } from "@auth0/auth0-react";

const Layout = () => {
  return (
    <div className="app">
      

      <Auth0Provider
      domain="dev-qyhs02gudtf6cv8j.us.auth0.com"
      clientId="JrxNfCDgMsSKGCdjMWGn6boWhSNfimSS"
      authorizationParams={{
      redirect_uri: window.location.origin
    }}>

      <Navbar />
      <Outlet />
      <Footer />

  </Auth0Provider>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Products/:id",
        element: <Products />,
      },
      {
        path: "/Product/:id",
        element: <Product />,
      },
    ],
  },
  {
    path: "/login/1",
    element: <Login />,
  },
  {
    path: "/Register", // Add a new route for the Signup component
    element: <Register />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;