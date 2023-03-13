import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Landingpage from "./components/pages/Landingpage";
import Signup from "./components/pages/Signup";
import Signin from "./components/pages/Signin";
import Forgotpass from "./components/pages/Forgotpass";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/landing" element={<Landingpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgot" element={<Forgotpass />} />
      </Routes>
    </div>
  );
}

export default App;
