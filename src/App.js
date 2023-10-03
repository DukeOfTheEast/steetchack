import { Routes, Route } from "react-router-dom";
// import { useState, useRef } from "react";

import "./App.css";
import Landingpage from "./components/pages/Landingpage";
import Signup from "./components/pages/Signup";
import Signin from "./components/pages/Signin";
import Forgotpass from "./components/pages/Forgotpass";
import Resetpass from "./components/pages/Resetpass";
// import Sidebar from "./components/Sidebar";
import Dashboard from "./components/pages/allDashboard/Dashboard";
import DashboardLayout from "./components/Dashboardlayout";
import Customfolder from "./components/pages/allDashboard/Customfolder";
import Orders from "./components/pages/allDashboard/Orders";
import Addtask from "./components/pages/allDashboard/Addtask";
import Catalogue from "./components/pages/allDashboard/Catalogue";
import Settings from "./components/pages/allDashboard/Settings";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/steetchack" element={<Landingpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgot" element={<Forgotpass />} />
        <Route path="/reset" element={<Resetpass />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="customer-folder" element={<Customfolder />} />
          <Route path="orders" element={<Orders />} />
          <Route path="add-task" element={<Addtask />} />
          <Route path="catalogue" element={<Catalogue />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
