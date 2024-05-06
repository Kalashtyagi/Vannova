import React from "react";
import service from "../../assets/img/service/support-img.jpg";

const Manual = () => {
  return (
    <>
      <div
        className="support-company-area support-padding fix"
        style={{ marginTop: "20px" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="right-caption">
                <div className="section-tittle section-tittle2">
                  {/* <span style={{marginTop:'20px'}}>Service</span> */}
                  <h2>Manual Job Posting</h2>
                  {/* <h2>What can we do?</h2> */}
                </div>
                <div className="support-caption">
                  <p className="pera-top">
                    The{" "}
                    <span style={{ color: "orange", fontSize: "22px" }}>
                      Manual job posting service
                    </span>{" "}
                    from Vannova is intended for any business or software
                    supplier looking for a comprehensive job posting service
                    solution.
                  </p>
                  <p>
                    Due to the frequent introduction of new job-posting media
                    boards and websites, Integration of job posting systems with
                    current vendors and businesses without the requirement for
                    technical integration is becoming more and more necessary.
                    The media used for job posting and the websites used for
                    advertising have changed significantly over time. Our manual
                    job posting service is created to give both clients and big
                    software provides a rapid and effective approach to market.
                    Our quick job posting and ability to map your needs improves
                    your accuracy and go-to-market strategy.
                    <br />
                    <br />A large skilled staff at Vannova has more than 16
                    years of experience of Manual job posting positions for
                    well-known brands in the US, the UK, Europe, and Asia. Every
                    step of our manual job posting procedure has a well-defined
                    norms. Vannova can provide remarkable accuracy throughout
                    the entire process, from accurate field mapping to posting
                    and a full quality assurance check on every job before it
                    goes live on the Internet. Additionally, we offer
                    interactive reporting solutions that make it simple for
                    customers and wholesale software providers to access
                    accurate and recent posting activity data. Our manual job
                    posting services are among the best on the market thanks to
                    quality control, accuracy, and reporting.
                  </p>

                  <br />
                </div>
              </div>
            </div>
            <div style={{ marginBottom: "20%" }} className="col-xl-6 col-lg-6">
              <div className="support-location-img">
                <img
                  src="https://media.istockphoto.com/id/1353281818/photo/group-of-businesswomen-during-a-meeting.webp?b=1&s=170667a&w=0&k=20&c=_Sgee7EL-RE2qcuo6S5B4PqYjRQZi0PDlmBuyWAxO90="
                  alt=""
                />
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default Manual;
