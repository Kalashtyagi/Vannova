import bgapply from "../../assets/img/gallery/how-applybg.png";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Rpo() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const Navigate = useNavigate();
  return (
    <>
      <div
        className="our-services"
        // style={{ backgroundImage: `url(${bgapply})`, backgroundSize: "cover" }}
        style={{ marginBottom: "100px" }}
      >
        <div className="container" style={{ paddingTop: "50px" }}>
          <div className="row">
            <div className="col-lg-12">
              <div data-aos="flip-left" className="section-tittle text-center">
                <span style={{ color: "orange" }}>services</span>
                <h2 style={{ color: "#26317f" }}>
                  Recruitment Process outsourcing{" "}
                </h2>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-contnet-center">
            <div
              data-aos="zoom-out-up"
              className="col-xl-6 col-lg-6 col-md-4 col-sm-6"
            >
              <div
                className="single-services text-center mb-30"
                style={{ border: "1px solid #e5f0d5" }}
                onClick={() => Navigate("/highVolume")}
              >
                <div className="services-ion ">
                  <span className="bi bi-list-check"></span>
                </div>
                <div className="services-cap">
                  <h5>
                    <a>Craigslist Job Posting</a>
                  </h5>
                  <span>
                    We help companies post-high job volumes to Craigslist
                    quickly, easily, and.
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-4 col-sm-6"
              data-aos="zoom-out-up"
            >
              <div
                className="single-services text-center mb-30"
                style={{ border: "1px solid #e5f0d5" }}
                onClick={() => Navigate("/manual")}
              >
                <div className="services-ion ">
                  <span className="bi bi-file-earmark-arrow-up"></span>
                </div>
                <div className="services-cap">
                  <h5>
                    <a>Manual Job Posting</a>
                  </h5>
                  <span>
                    Federal & Government Compliant Manual Job Posting Services
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-4 col-sm-6"
              data-aos="zoom-out-up"
            >
              <div
                className="single-services text-center mb-30"
                style={{ border: "1px solid #e5f0d5" }}
                onClick={() => Navigate("/resume")}
              >
                <div className="services-ion">
                  <span className="bi bi-clipboard-check"></span>
                </div>
                <div className="services-cap">
                  <h5>
                    <a>Resume Screening</a>
                  </h5>
                  <span>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-4 col-sm-6"
              data-aos="zoom-out-up"
            >
              <div
                className="single-services text-center mb-30"
                style={{ border: "1px solid #e5f0d5" }}
                onClick={() => Navigate("/multilingual")}
              >
                <div className="services-ion">
                  <span className="bi bi-translate"></span>
                </div>
                <div className="services-cap">
                  <h5>
                    <a>Multilingual Posting</a>
                  </h5>
                  <span>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Rpo;
