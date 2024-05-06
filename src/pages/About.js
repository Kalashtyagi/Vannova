import service from "../assets/img/service/support-img.jpg";
import Header from "../component/Header/Header";
function About() {
  return (
    <>
      <div
        data-aos="zoom-out-up"
        className="support-company-area support-padding fix"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="right-caption">
                <div className="section-tittle section-tittle2">
                  <span style={{ marginTop: "20px" }}> About us</span>
                  <h2>Navigating the Human Resource</h2>
                  {/* <h2>What can we do?</h2> */}
                </div>
                <div className="support-caption">
                  <p className="pera-top">
                    <b>Vannova</b> has the real world experience to advise any
                    firm, from start-ups to huge multinationals, with  years of
                    experience in managing, selling, operating, and advising for
                    technology and data services companies globally.
                  </p>
                  <p>
                    Our service covers a broad range of specialized fields, such
                    as hiring, talent acquisition, Insurance and digital
                    marketing and web designing. Modern technology and process
                    techniques are combined by our industry specialists to offer
                    more effective business practices. With the help of our
                    solutions, we want to increase your output, market reach,
                    competitiveness, and total ROI.
                  </p>

                  <h5>
                    To meet your needs - the client, we adapt our solutions. In
                    order to comply with your business standards, we adapt our
                    technology and data solutions.
                  </h5>
                  <br />

                  <h3>High-quality client services</h3>
                  <p>
                    The foundation of how we provide our solutions is
                    industry-leading customer service.
                  </p>
                  <h3>Unmatched Support</h3>
                  <p>
                    In providing them with high-quality solutions and
                    round-the-clock support, we work hand in hand with our
                    customers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="support-location-img">
                <img src={service} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="apply-process-area apply-bg pt-50 pb-50">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-12">
                <div className="right-caption">
                  <div className="section-tittle section-tittle2">
                    <span>WORK PROCESS</span>
                    <h2>How We Work</h2>
                  </div>
                  <div className="support-caption">
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
        <div className="apply-process-area1 apply-bg pt-10 pb-10">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-12">
                <div className="right-caption">
                  <div className="section-tittle section-tittle2">
                    <span>
                      A Great Team With Great Ideas That Deliver Results
                    </span>
                    <h2>WHAT WE CAN DO</h2>
                  </div>
                  <div className="support-caption">
                    <p className="pera-top">
                      <b>We Love What We Do:</b> Our team has many years of
                      experience and every member enjoys delivering solutions
                      that make a difference to our clients.
                    </p>
                    <p className="pera-top">
                      <b>24/7 Support:</b> In today’s competitive world you need
                      a partner that is ready to support you at any hour of the
                      day – that’s what sets us apart.
                    </p>
                    <p className="pera-top">
                      <b>Professional Team:</b> Every team member takes pride in
                      what they deliver and exudes professionalism making sure
                      we deliver the very best client service possible.
                    </p>
                    <p className="pera-top">
                      <b>Agile Thinking:</b>As a company, we easily adapt to
                      changing needs and challenges. Our ability to be agile
                      ensures we can change our service delivery at short notice
                      to suit your needs.
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
      </div>
    </>
  );
}
export default About;
