import { Routes, Route } from "react-router-dom";
// import { useState, useRef } from "react";

import "./App.css";
import Landingpage from "./components/pages/Landingpage";
import Signup from "./components/pages/Signup";
import Signin from "./components/pages/Signin";
import Forgotpass from "./components/pages/Forgotpass";
import Resetpass from "./components/pages/Resetpass";
import Dashboard from "./components/pages/Dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgot" element={<Forgotpass />} />
        <Route path="/reset" element={<Resetpass />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
