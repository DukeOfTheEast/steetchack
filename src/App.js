import "./App.css";
import Navbar from "./components/Navbar";
import logo from "./img/logo.png";

// import Signup from "./components/pages/Signup";

function App() {
  return (
    <div>
      <div className="navbar">
        <img src={logo} alt="logoimage" />
        <Navbar />
      </div>
    </div>
  );
}

export default App;
