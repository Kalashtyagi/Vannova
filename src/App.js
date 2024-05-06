import Header from "./component/Header/Header";
import "../src/assets/css/style.css";
import "../src/assets/css/slick.css";
import "../src/assets/css/slicknav.css";
import "../src/assets/css/responsive.css";
import "../src/assets/css/animate.min.css";
import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/flaticon.css";
import "../src/assets/css/fontawesome-all.min.css";
import "../src/assets/css/magnific-popup.css";
import "../src/assets/css/nice-select.css";
import "../src/assets/css/owl.carousel.min.css";
import "../src/assets/css/price_rangs.css";
import "../src/assets/css/themify-icons.css";
import Home from "./pages/Home/Home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Footer from "./component/Footer/footer";
import Not from "./pages/Not";
// import Contact from './pages/Contact/Contact';
import { Suspense, lazy } from "react";
import Service from "./pages/Service/Service";
import Rpo from "./pages/CustomerServices/Rpo";
import Contact from "./pages/Contact/Contact";
import Manual from "./pages/CustomerServices/Manual";
import High_Volume from "./pages/CustomerServices/High_Volume";
import OFCC from "./pages/CustomerServices/OFCC";
import Media from "./pages/CustomerServices/Media";
import Web from "./pages/CustomerServices/Web";
import Digital from "./pages/CustomerServices/Digital";
import Insurance from "./pages/CustomerServices/Insurance";
import Craiglist from "./pages/CustomerServices/Craiglist";
import Resume from "./pages/CustomerServices/Resume";
import Multilingual from "./pages/CustomerServices/Multilingual";
import ScrollToTop from "./component/ScrollToTop";

function App() {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<Not />}></Route>

        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/manual" element={<Manual />}></Route>
        <Route path="/highVolume" element={<High_Volume />}></Route>
        <Route path="/ofcc" element={<OFCC />}></Route>
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/web" element={<Web />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/craiglist" element={<Craiglist />} />
        <Route path="/multilingual" element={<Multilingual />} />
        <Route path="/resume" element={<Resume />} />
        {/* <Route
          path='/contact'
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Contact />
            </Suspense>
          }
        ></Route> */}
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/rpo" element={<Rpo />}></Route>
        <Route path="/service" element={<Service />}></Route>
        <Route path="/media" element={<Media />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
