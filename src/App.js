import { Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Landingpage from "./components/pages/Landingpage";
import Signup from "./components/pages/Signup";

// import Signup from "./components/pages/Signup";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
