import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div>
      <Toaster></Toaster>
      <div className="w-11/12 mx-auto">
        <Header></Header>
        <div className="min-h-[calc(100vh-280px)]">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
