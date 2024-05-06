import React from "react";
import { useEffect } from "react";
import "./Home.css";
import hero from "../../assets/img/hero/h1_hero.jpg";
import cv from "../../assets/img/gallery/cv_bg.jpg";
import job1 from "../../assets/img/icon/job-list1.png";
import job2 from "../../assets/img/icon/job-list2.png";
import job3 from "../../assets/img/icon/job-list3.png";
import job4 from "../../assets/img/icon/job-list4.png";
import ab from "../../assets/img/hero/about.jpg";
import applybg from "../../assets/img/gallery/how-applybg.png";
import bg from "../../assets/img/gallery/how-applybg.png";
import bg1 from "../../assets/img/background-img/bg-img-4.jpeg";
import testimonial from "../../assets/img/testmonial/testimonial-founder.png";
import cvg from "../../assets/img/gallery/cv_bg.jpg";
import bg2 from "../../assets/img/gallery/background1.jpg";
import service from "../../assets/img/service/support-img.jpg";

import blog from "../../assets/img/blog/home-blog1.jpg";
import blog1 from "../../assets/img/blog/home-blog2.jpg";

import form from "../../assets/img/icon/form.png";
import footerlogo from "../../assets/img/logo/logoo.jpeg";
import { useNavigate } from "react-router-dom";
import Header from "../../component/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const navigate = useNavigate();
  return (
    <>
      <main>
        <div
          data-aos="zoom-in"
          data-aos-duration="3000"
          className="slider-area "
        >
          <div className="slider-active">
            <div
              className="single-slider slider-height d-flex align-items-center"
              //   data-background= {hero}
              style={{
                backgroundImage: `url(${bg1})`,
                backgroundSize: "cover",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-xl-7 col-lg-9 col-md-10">
                    <div
                      data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                      className="hero__caption"
                    >
                      <h3 style={{ color: "#8ac700", fontSize: "16px" }}>
                        RPO – RECRUITMENT PROCESS OUTSOURCING
                      </h3>
                      <h2>WE’RE TAKING RPO FROM NOW TO NEXT</h2>
                      <span>
                        PeopleScout’s best-in-class RPO (Recruitment Process
                        Outsourcing) solutions enable businesses to source and
                        hire the best talent faster.
                      </span>
                    </div>
                  </div>
                  <div
                    data-aos="zoom-out-right"
                    className="col-xl-12 col-lg-12 col-md-12"
                  >
                    <div
                      onClick={() => navigate("/contact")}
                      className="hero__caption"
                    >
                      <button>Talk to an Expert</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="support-company-area support-padding fix">
          <div className="fluid-container">
            <div
              className=" aboutus row align-items-center" //   data-background= {hero}
              style={{
                backgroundImage: `url(https://www.kotaklife.com/assets/images/Insidepage-Contact-Us-01.jpg)`,
                backgroundSize: "cover",
              }}
            >
              <div className="col-xl-12 col-lg-12">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="right-caption"
                >
                  <div
                    data-aos="flip-down"
                    className="section-tittle section-tittle2"
                  >
                    <h2> About us</h2>
                    <span>Navigating the Human Resource </span>
                    {/* <h2>What can we do?</h2> */}
                  </div>
                  <div className="support-caption">
                    <div className="pera-top">
                      <p className="pera-top">
                        <b>Vannova</b> has the real world experience to advise
                        any firm, from start-ups to huge multinationals, with
                         years of experience in managing, selling, operating,
                        and advising for technology and data services companies
                        globally.
                      </p>
                      <p className="pera-top">
                        Our service covers a broad range of specialized fields,
                        such as hiring, talent acquisition, Insurance and
                        digital marketing and web designing.
                      </p>

                      <p className="pera-top">
                        Modern technology and process techniques are combined by
                        our industry specialists to offer more effective
                        business practices. With the help of our solutions, we
                        want to increase your output, market reach,
                        competitiveness, and total ROI.
                      </p>
                    </div>

                    <a
                      className="btn post-btn"
                      onClick={() => navigate("/about")}
                      style={{ color: "orange", fontSize: "22px" }}
                    >
                      Read more »
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div
          className="our-services section-pad-t30"
          style={{ backgroundImage: `url(${applybg})` }}
          // style={{background:'yellow'}}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle text-center">
                  <span style={{ color: "orange" }}>services</span>
                  <h2 style={{ color: "white" }}>
                    {" "}
                    We Provide The Best Services For You
                  </h2>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-contnet-center">
              <div
                onClick={() => navigate("/rpo")}
                className="col-xl-3 col-lg-3 col-md-4 col-sm-6"
              >
                <div className="single-services text-center mb-30">
                  <div className="services-ion">
                    <span className="flaticon-tour"></span>
                  </div>
                  <div className="services-cap">
                    <h5>
                      <a>Recruiment Process outsourcing</a>
                    </h5>
                    <span>
                      At Redwood we help companies and agencies take the heavy
                      lifting.
                    </span>
                  </div>
                </div>
              </div>
              <div
                onClick={() => navigate("/manual")}
                className="col-xl-3 col-lg-3 col-md-4 col-sm-6"
              >
                <div className="single-services text-center mb-30">
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
                onClick={() => navigate("/ofcc")}
                className="col-xl-3 col-lg-3 col-md-4 col-sm-6"
              >
                <div className="single-services text-center mb-30">
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
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                <div className="single-services text-center mb-30">
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
            <div className="row">
              <div onClick={() => navigate("/service")} className="col-lg-12">
                <div className="browse-btn2 text-center mt-50">
                  <a style={{ color: "white" }} className="border-btn2">
                    Browse All Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* <section className="three-column-block pad-sm bg-blue-dark color-white has-pattern pattern-light pattern-tr">
          <div className="card-group-primary card-group ">
            <div data-aos="zoom-out-up" className="card">
              <div className="card-body mt-4">
                <h2 className="heading-2">ENTERPRISE FULL-CYCLE RPO </h2>
                <p style={{ color: "white" }}>
                  PeopleScout’s full-cycle RPO solutions also provide strategic
                  consultation and oversight of the entire talent acquisition
                  strategy while proactively identifying key areas for
                  improvement, anticipating and planning for upcoming
                  challenges. Our commitment to excellence in service delivery
                  translates to the optimal results delivered for our clients.{" "}
                </p>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-primary btn-green toggle-panel"
                  data-panel="block_e021fd7516397af96d058b16a1a521e0-0"
                >
                  Learn More About Full-Cycle RPO{" "}
                </button>
              </div>
            </div>
            <div data-aos="zoom-out-up" className="card">
              <div className="card-body mt-4">
                <h2 className="heading-2">ON-DEMAND PROJECT RPO </h2>
                <p style={{ color: "white" }}>
                  Project-based recruitment process outsourcing solutions are
                  designed to meet the demands that internal resources may be
                  unable to accommodate. PeopleScout’s Recruiter On-Demand and
                  project-based solutions provide focused support for
                  organizations in all industries during challenging periods of
                  the recruitment cycle such as peak hiring, hard-to-fill
                  positions, compressed timeframes and more.{" "}
                </p>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-primary btn-green toggle-panel"
                  data-panel="block_e021fd7516397af96d058b16a1a521e0-1"
                >
                  Learn About On-Demand Project RPO{" "}
                </button>
              </div>
            </div>
            <div data-aos="zoom-out-up" className="card">
              <div className="card-body mt-4">
                <h2 className="heading-2">HIGH-VOLUME RPO </h2>
                <p style={{ color: "white" }}>
                  PeopleScout’s High-Volume RPO solution balances the velocity
                  of technology with a high touch candidate experience for
                  speedy, scalable high-volume hiring. Our experienced
                  high-volume recruitment teams are supported by our proprietary
                  talent acquisition suite, Affinix™, leveraging AI and
                  mobile-first tools for a modern, streamlined candidate
                  journey. We made over 335,000 hires last year, so we know a
                  thing or two about large-scale recruitment.{" "}
                </p>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-primary btn-green toggle-panel"
                  data-panel="block_e021fd7516397af96d058b16a1a521e0-2"
                >
                  Learn More About High-Volume RPO{" "}
                </button>
              </div>
            </div>
            <div data-aos="zoom-out-up" className="card">
              <div className="card-body mt-4">
                <h2 className="heading-2">MODULAR RPO </h2>
                <p style={{ color: "white" }}>
                  PeopleScout’s RPO Amplifiers is a curated suite of modular
                  recruitment solutions to help you augment your recruiting
                  teams when and where you need it most. Whether it’s focused
                  support for peak hiring seasons or onboarding hard-to-fill
                  roles, RPO Amplifiers are designed to help organizations meet
                  immediate talent goals and drive lasting business impact. Add
                  as a standalone service or combine with an existing RPO
                  engagement—whether with PeopleScout or another provider—when
                  extra support is needed.{" "}
                </p>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-primary btn-green toggle-panel"
                  data-panel="block_e021fd7516397af96d058b16a1a521e0-3"
                >
                  Learn More About RPO Amplifiers{" "}
                </button>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="image-block">
          <div
            style={{
              padding: "15px",
              backgroundImage: `url(https://www.peoplescout.com/wp-content/uploads/2023/08/Accelerate-1650x1050-1-1024x652.jpg)`,
              backgroundSize: "contain",
            }}
          >
            <div
              data-aos="zoom-out-up"
              className="col-xl-12 col-lg-12 col-md-4 col-sm-6"
            >
              <div
                style={{
                  marginLeft: "600px",
                  height: "300%",
                  padding: "60px",
                  background: " #004d71",
                  color: "white",
                }}
                className="single-services mb-30"
                onClick={() => navigate("/highVolume")}
              >
                <h5
                  style={{
                    color: "white",
                    font: "10px",
                  }}
                >
                  Ready-to-Go RPO{" "}
                </h5>
                <h2
                  style={{ font: "70px", color: "white" }}
                  className="heading-1"
                >
                  PeopleScout Accelerate for Faster Recruitment{" "}
                </h2>
                <p style={{ color: "white" }}>
                  PeopleScout Accelerate is a tech-powered, ready-to-go
                  recruitment process outsourcing (RPO) solution that combines
                  PeopleScout’s deep recruitment expertise and a pre-configured
                  Affinix™ talent acquisition technology suite—implemented in
                  just two weeks. <br />
                  <br />
                  Recruit faster with a curated suite of the essential tools for
                  creating a modern candidate experience. Gain agility,
                  streamline your recruitment process and create a world-class
                  candidate experience that is unparalleled in the industry.{" "}
                </p>
                <div className="Ready_btn" onClick={() => navigate("/contact")}>
                  <button>Talk to an Expert</button>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <div className="our-services section-pad-t30">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle text-center">
                  <span style={{ color: "orange" }}>services</span>
                  <h2 style={{ color: "#26317f" }}>
                    We Provide The Best Services For You
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
                  onClick={() => navigate("/highVolume")}
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
                  onClick={() => navigate("/manual")}
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
                  onClick={() => navigate("/resume")}
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
                  onClick={() => navigate("/multilingual")}
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

            <div className="row">
              <div onClick={() => navigate("/service")} className="col-lg-12">
                <div className="browse-btn2 text-center mt-50">
                  <a style={{ color: "orange" }} className="border-btn2">
                    Browse All Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="apply-process-area apply-bg pt-150 pb-150"
          style={{
            backgroundColor: "#ebf1fe",
            backgroundImage: `url(${bg2})`,
            backgroundPosition: "20% 20%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="right-caption">
                  <div
                    data-aos="zoom-out-down"
                    class="section-tittle section-tittle2"
                  >
                    <span>WORK PROCESS</span>
                    <h2>How We Work</h2>
                  </div>
                  <div
                    data-aos="zoom-in-up"
                    data-aos-duration="4000"
                    className="support-caption"
                  >
                    <p className="pera-top">
                      <b>Step 1-Talk To Us:</b> Understanding your challenges
                      and needs is key to finding a solution. We start all our
                      conversations by listening carefully to those needs.
                    </p>
                    <p className="pera-top">
                      <b>Step 2-Scope Your Requirement:</b> Off the back of
                      initial discussions and exploratory tasks, we go to work
                      to scope out a solution that fits your business.
                    </p>
                    <p className="pera-top">
                      <b>Step 3-Plan The Implementation:</b> Once agreed, we go
                      to work planning carefully the implementation, testing,
                      and deployment of a solution to deliver the desired
                      result.
                    </p>
                    <p className="pera-top">
                      <b>Step 3-Measure & Improve:</b> From the moment your
                      solution is in place, we carefully measure and adjust it
                      to ensure we provide the best possible return on
                      investment.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6">
                <div className="support-location-img">
                  {/* <img src={bg2} alt="" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="online-cv cv-bg section-overly pt-90 pb-120"
          //  style={{backgroundImage: `url(${applybg})` }}
          style={{ backgroundColor: "#F8F8FF" }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div data-aos="zoom-in-up" className="cv-caption text-center">
                  <p
                    className="pera1"
                    style={{ color: "orange", fontSize: "30px" }}
                  >
                    Solutions
                  </p>
                  <p className="pera2" style={{ color: "#28395a" }}>
                    {" "}
                    Recruitment Process Outsourcing Solutions
                  </p>
                </div>
                <div
                  data-aos="zoom-in-right"
                  className="col-xl-10 cv-caption text-left"
                >
                  <p className="pera-top">
                    <b style={{ fontSize: "20px" }}>Industry Leading Service</b>
                    <br />
                    Our teams provide industry-leading customer service across
                    all service lines.
                  </p>
                  <p className="pera-top">
                    <b style={{ fontSize: "20px" }}>
                      Technology Ready Solutions
                    </b>
                    <br />
                    We create synergy between outsourcing activity & integrated
                    technology systems.
                  </p>
                  <p className="pera-top">
                    <b style={{ fontSize: "20px" }}>Great Support</b>
                    <br />
                    We support our clients at every stage of our service
                    delivery.
                  </p>
                  <p className="pera-top">
                    <b style={{ fontSize: "20px" }}>Trusted Experience</b>
                    <br />
                    Our teams have extensive experience in many industries
                    delivering top quality BPO services
                  </p>
                  <p className="pera-top">
                    <b style={{ fontSize: "20px" }}>Always Innovating</b>
                    <br />
                    Our teams and leadership are continuously innovating to
                    improve our services to all customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="testimonial-area testimonial-padding">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-xl-8 col-lg-8 col-md-10">
                <div className="h1-testimonial-active dot-style">
                  <div className="single-testimonial text-center">
                    <div className="testimonial-caption ">
                      <div className="testimonial-founder  ">
                        <div className="founder-img mb-30">
                          <img
                           src={testimonial}
                            alt=""
                          />
                          <span>Margaret Lawson</span>
                          <p>Creative Director</p>
                        </div>
                      </div>
                      <div className="testimonial-top-cap">
                        <p>
                          “I am at an age where I just want to be fit and
                          healthy our bodies are our responsibility! So start
                          caring for your body and it will care for you. Eat
                          clean it will care for you and workout hard.”
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div
          className="apply-process-area apply-bg pt-150 pb-150"
          //   data-background="assets/img/gallery/how-applybg.png"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="container">
            <div className="row">
              <div data-aos="flip-left" className="col-lg-12">
                <div className="section-tittle white-text text-center">
                  <span>Apply process</span>
                  <h2> How it works</h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div data-aos="zoom-out-up" className="col-lg-4 col-md-6">
                <div className="single-process text-center mb-30">
                  <div className="process-ion">
                    <span className="flaticon-search"></span>
                  </div>
                  <div className="process-cap">
                    <h5>1. Search a job</h5>
                    <p>
                      Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                      tempor incididunt ut laborea.
                    </p>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-out-up" className="col-lg-4 col-md-6">
                <div className="single-process text-center mb-30">
                  <div className="process-ion">
                    <span className="flaticon-curriculum-vitae"></span>
                  </div>
                  <div className="process-cap">
                    <h5>2. Apply for job</h5>
                    <p>
                      Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                      tempor incididunt ut laborea.
                    </p>
                  </div>
                </div>
              </div>
              <div data-aos="zoom-out-up" className="col-lg-4 col-md-6">
                <div className="single-process text-center mb-30">
                  <div className="process-ion">
                    <span className="flaticon-tour"></span>
                  </div>
                  <div className="process-cap">
                    <h5>3. Get your job</h5>
                    <p>
                      Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                      tempor incididunt ut laborea.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-blog-area blog-h-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div
                  data-aos="zoom-in-right"
                  className="section-tittle text-center"
                >
                  <span>Our latest blog</span>
                  <h2>Our recent news</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div data-aos="flip-up" className="col-xl-6 col-lg-6 col-md-6">
                <div className="home-blog-single mb-30">
                  <div className="blog-img-cap">
                    <div className="blog-img">
                      <img src={blog} alt="" />
                      <div className="blog-date text-center">
                        <span>24</span>
                        <p>Now</p>
                      </div>
                    </div>
                    <div className="blog-cap">
                      <p>| Properties</p>
                      <h3>
                        <a href="single-blog.html">
                          Footprints in Time is perfect House in Kurashiki
                        </a>
                      </h3>
                      <a href="#" className="more-btn">
                        Read more »
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="flip-up" className="col-xl-6 col-lg-6 col-md-6">
                <div className="home-blog-single mb-30">
                  <div className="blog-img-cap">
                    <div className="blog-img">
                      <img src={blog1} alt="" />
                      <div className="blog-date text-center">
                        <span>24</span>
                        <p>Now</p>
                      </div>
                    </div>
                    <div className="blog-cap">
                      <p>| Properties</p>
                      <h3>
                        <a href="single-blog.html">
                          Footprints in Time is perfect House in Kurashiki
                        </a>
                      </h3>
                      <a href="#" className="more-btn">
                        Read more »
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

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

export default Home;
