import logo2 from "../../assets/img/logo/logo2.jpeg";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import "../../../src/assets/css/slicknav.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { useState } from "react";
// import '../../assets/css/style.css'
function Header() {
  const navLinkStyles = {
    fontFamily: "Bahnschrift SemiBold Condensed",
    fontSize: "8px", // Adjust the font size as needed
    color: "white", // Set the text color
  };
  const navDropdownTitleStyles = {
    fontFamily: "Bahnschrift SemiBold Condensed", // Set your preferred font for the title
    fontSize: "28px", // Set the font size as needed
    color: "white", // Set the text color to white
  };
  // const expand = "lg";
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState("");
  const [activeService, setActiveService] = useState("");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    navigate(link);
  };
  const handleServiceClick = (service) => {
    setActiveService(service);
    setActiveLink("");
    navigate(service);

    // You can also navigate to the respective service page here if needed
  };

  const isLinkActive = (link) => link === activeLink;
  const isServiceActive = (service) => service === activeService;

  return (
    <>
      <Navbar
        expand="lg"
        style={{
          backgroundColor: "#14284b",
          fontFamily: "Bahnschrift SemiBold Condensed",
        }}
        sticky="top"
      >
        <Container>
          <Navbar.Brand onClick={() => navigate("/")}>
            <div style={{ padding: "auto", textAlign: "center" }}>
              <img src={logo2} alt="Logo" style={{ cursor: "pointer" }} />
              {/* <h6 style={{ color: "white" }}>vannova</h6> */}
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-center flex-grow-1 pe-1">
              <Nav.Link
                onClick={() => handleLinkClick("/home")}
                style={{
                  color: isLinkActive("/home") ? "orange" : "white",
                  fontSize: "22px",
                  marginLeft: "20px",
                  fontFamily: "Bahnschrift SemiBold Condensed",
                }}
              >
                Home
              </Nav.Link>
              <Nav.Link
                onClick={() => handleLinkClick("/about")}
                style={{
                  color: isLinkActive("/about") ? "orange" : "white",
                  fontSize: "22px",
                  marginLeft: "20px",
                  // textDecoration: isLinkActive("/about") ? "underline" : "none",
                }}
              >
                About
              </Nav.Link>

              <NavDropdown
                title="Service"
                id="basic-nav-dropdown"
                // style={{ marginLeft: "20px" }}
                style={{
                  color: isServiceActive("rpo") ? "orange" : "white",
                  marginLeft: "20px",
                }}
              >
                <NavDropdown.Item
                  className="header-hover"
                  onClick={() => handleServiceClick("/rpo")}

                  // onClick={() => handleLinkClick("/rpo")}
                >
                  <u>Recruitment Process Outsourcing</u>
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="header-hover"
                  onClick={() => handleServiceClick("/insurance")}
                >
                  <u> Insurance Process Outsourcing</u>
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="header-hover"
                  onClick={() => handleServiceClick("/digital")}
                >
                  <u>Digital Marketing</u>
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="header-hover"
                  onClick={() => handleServiceClick("/web")}
                >
                  <u>Web Development</u>
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                style={{
                  color: isLinkActive("/contact") ? "orange" : "white",
                  fontSize: "22px",
                  marginLeft: "20px",
                  // textDecoration: isLinkActive("/contact")
                  //   ? "underline"
                  //   : "none",
                }}
                onClick={() => handleLinkClick("/contact")}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <script src="assets/js/vendor/modernizr-3.5.0.min.js"></script>
      <script src="assets/js/vendor/jquery-1.12.4.min.js"></script>
      <script src="assets/js/popper.min.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>

      <script src="assets/js/jquery.slicknav.min.js"></script>

      <script src="assets/js/owl.carousel.min.js"></script>
      <script src="assets/js/slick.min.js"></script>
      <script src="assets/js/price_rangs.js"></script>

      <script src="assets/js/wow.min.js"></script>
      <script src="assets/js/animated.headline.js"></script>
      <script src="assets/js/jquery.magnific-popup.js"></script>

      <script src="assets/js/jquery.scrollUp.min.js"></script>
      <script src="assets/js/jquery.nice-select.min.js"></script>
      <script src="assets/js/jquery.sticky.js"></script>

      <script src="assets/js/contact.js"></script>
      <script src="assets/js/jquery.form.js"></script>
      <script src="assets/js/jquery.validate.min.js"></script>
      <script src="assets/js/mail-script.js"></script>
      <script src="assets/js/jquery.ajaxchimp.min.js"></script>

      <script src="assets/js/plugins.js"></script>
      <script src="assets/js/main.js"></script>
    </>
  );
}
export default Header;
