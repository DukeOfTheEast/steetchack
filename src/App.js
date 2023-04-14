import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Landingpage from "./components/pages/Landingpage";
import Signup from "./components/pages/Signup";
import Signin from "./components/pages/Signin";
import Forgotpass from "./components/pages/Forgotpass";
import Resetpass from "./components/pages/Resetpass";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgot" element={<Forgotpass />} />
        <Route path="/reset" element={<Resetpass />} />
      </Routes>
    </div>
  );
}

export default App;
