import Getstarted from "./allLandingPage/Getstarted";
import Services from "./allLandingPage/Services";
import Aboutus from "./allLandingPage/Aboutus";
import Einstein from "./allLandingPage/Einstein";
import Howitworks from "./allLandingPage/Howitworks";
import Download from "./allLandingPage/Download";
import FAQ from "./allLandingPage/FAQ";
import Reviews from "./allLandingPage/Reviews";
import Footer from "../Footer";

function Landingpage() {
  return (
    <div>
      <Getstarted />
      <Services />
      <Aboutus />
      <Einstein />
      <Howitworks />
      <Download />
      <FAQ />
      <Reviews />
      <Footer />
    </div>
  );
}

export default Landingpage;
