import React, { useContext } from "react";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../Providers/AuthProvider";
import Loader from "../../components/shared/Loader";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";

const Main = () => {
  const { loading } = useContext(UserContext);

  if (loading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster position="top-right" />
    </div>
  );
};

export default Main;
