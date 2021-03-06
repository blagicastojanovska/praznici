import { useEffect, useState } from "react";
import Loader from "../loader/Loader";

const Layout = ({ children }) => {
  const [isSSRLoading, setSSRLoading] = useState(true);

  useEffect(() => {
    setSSRLoading(false);
  }, []);

  isSSRLoading && <Loader />;

  return children;
};

export default Layout;
