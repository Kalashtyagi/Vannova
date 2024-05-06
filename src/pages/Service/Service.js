// import applybg from "../../assets/img/gallery/dark.png"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Service() {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div
        className="our-services "
        style={{ marginTop: "20px", marginBottom: "30px" }}
        data-aos="zoom-out"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div data-aos="flip-up" className="section-tittle text-center">
                <span style={{ color: "orange" }}>services</span>
                <h2 style={{ color: " #28395a" }}>
                  {" "}
                  We Provide The Best Services For You
                </h2>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-contnet-center">
            <div
              className="col-xl-6 col-lg-6 col-md-4 col-sm-6"
              onClick={() => navigate("/rpo")}
              data-aos="zoom-out-up"
            >
              <div
                className="single-services text-center mb-30"
                style={{ border: "1px solid #e5f0d5" }}
              >
                <div className="services-ion">
                  <span className="flaticon-tour"></span>
                </div>
                <div className="services-cap">
                  <h5>
                    <a>Recruitment Process Outsourcing</a>
                  </h5>
                  <span>
                    At Redwood we help companies and agencies take the heavy
                    lifting.
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-4 col-sm-6"
              data-aos="zoom-out-up"
            >
              <div
                onClick={() => navigate("/manual")}
                className="single-services text-center mb-30"
                style={{ border: "1px solid #e5f0d5" }}
              >
                <div className="services-ion ">
                  <span className="flaticon-cms"></span>
                </div>
                <div className="services-cap">
                  <h5>
                    <a>Manual Job Posting</a>
                  </h5>
                  <span>
                    Manual Job Posting Services for Non-Integrated Job Media
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-4 col-sm-6"
              data-aos="zoom-out-up"
            >
              <div
                onClick={() => navigate("/highVolume")}
                className="single-services text-center mb-30"
                style={{ border: "1px solid #e5f0d5" }}
              >
                <div className="services-ion ">
                  <span className="flaticon-cms"></span>
                </div>
                <div className="services-cap">
                  <h5>
                    <a>High Volume Craigslist Job Posting</a>
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
                onClick={() => navigate("/ofcc")}
                className="single-services text-center mb-30"
                style={{ border: "1px solid #e5f0d5" }}
              >
                <div className="services-ion">
                  <span className="flaticon-report"></span>
                </div>
                <div className="services-cap">
                  <h5>
                    <a>OFCCP Compliance Job Posting</a>
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
                onClick={() => navigate("/resume")}
                className="single-services text-center mb-30"
                style={{ border: "1px solid #e5f0d5" }}
              >
                <div className="services-ion ">
                  <span className="flaticon-cms"></span>
                </div>
                <div className="services-cap">
                  <h5>
                    <a>Resume Search Services</a>
                  </h5>
                  <span>
                    Resume Search Services across all industry resume databases.
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-4 col-sm-6"
              data-aos="zoom-out-up"
            >
              <div
                onClick={() => navigate("/media")}
                className="single-services text-center mb-30"
                style={{ border: "1px solid #e5f0d5" }}
              >
                <div className="services-ion">
                  <span className="flaticon-app"></span>
                </div>
                <div className="services-cap">
                  <h5>
                    <a>Recruitment Media Buying</a>
                  </h5>
                  <span>
                    Consolidating your recruitment media spend helps your
                    company gain a higher.
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
export default Service;
