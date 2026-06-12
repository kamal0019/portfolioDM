import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Data Analyst</h4>
                <h5>AssessInfra Technology Pvt. Ltd.</h5>
              </div>
              <h3>2026–Present</h3>
            </div>
            <p>
              Provides end-to-end assessment services, including exam planning, execution, and post-exam support. Focuses on secure, scalable, and reliable exam delivery systems for institutions and organizations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Associate – AI Content Moderation</h4>
                <h5>Brickred Systems Pvt. Ltd.</h5>
              </div>
              <h3>2023–2025</h3>
            </div>
            <p>
              Analyzed large datasets of AI-generated content to ensure compliance with quality and safety standards. Performed data validation, classification, and pattern identification to improve content accuracy. Documented findings and supported reporting for process improvement.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>EDI Analyst</h4>
                <h5>A3Logics India Pvt. Ltd.</h5>
              </div>
              <h3>2022–2023</h3>
            </div>
            <p>
              Performed data testing, validation, and monitoring of EDI files in a Salesforce environment. Ensured data accuracy, consistency, and compliance during data exchange processes. Maintained structured documentation and supported clients in resolving data issues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
