import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PropTypes from "prop-types";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "80vh" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

MainLayout.propTypes = {};

export default MainLayout;