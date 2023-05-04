import Navbar from "../Navbar";
import Footer from "../Footer";

function Resetpass() {
  return (
    <div>
      <Navbar />
      <div>
        <h1>Reset password</h1>
        <p>
          Enter the verification code that was sent to your email and enter your
          new password
        </p>
        <form>
          <input type="text" placeholder="Verification code" />
          <input type="text" placeholder="New password" />
          <input type="text" placeholder="Confirm new password" />
          <button>Reset password</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Resetpass;
