import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./Layout.scss";

export default function AppLayout(props) {
  return (
    <div className="auth-layout">
      <div className="content-main">
        <div className="header-layout">
          <Header />
        </div>
        <div className="content-layout">{props.children}</div>
      </div>
    </div>
  );
}
