import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <main style={{ display: "flex" }}>
      <section>
        <Sidebar />
      </section>
      <section style={{ flex: 1 }}>{children}</section>
    </main>
  );
};

export default Layout;
