import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Landingpage from "./components/pages/Landingpage";
import Signup from "./components/pages/Signup";
import Signin from "./components/pages/Signin";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/landing" element={<Landingpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
