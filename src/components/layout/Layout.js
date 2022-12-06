/* eslint-disable */

import NavHeader from "./NavHeader";
import "./Layout.css";

const Layout = (props) => {
  const { children } = props;
  return (
    <div className="layout">
      <div>
        <NavHeader />
      </div>
      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;
