import { Fragment } from "react";
const ResumeSection = () => {
  return (
    <Fragment>
      <div className="content resume">
        {/* title */}
        <div className="title">Resume</div>
        {/* content */}
        <div className="row">
          {/* experience */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="resume-title border-line-h">
              <div className="icon">
                <i className="fa fa-briefcase" />
              </div>
              <div className="name">Experience</div>
            </div>
            <div className="resume-items">
              <div className="resume-item border-line-h active">
                <div className="date">2022 - Present</div>
                <div className="name">Frontend developer</div>
                <div className="company">DACODES/DD360</div>
                <p>
                  As a Frontend Developer, I specialize in developing and
                  maintaining web applications, transforming design prototypes
                  into functional products, and ensuring compatibility across
                  all browsers. I have extensive experience in real-time
                  communication, back-office systems, code reviews, and
                  collaborating with cross-functional teams to deliver
                  high-quality software solutions.
                </p>
              </div>
              <div className="resume-item border-line-h">
                <div className="date">2020 - 2021</div>
                <div className="name">Sr. Software Developer/Founder</div>
                <div className="company">Macuvi</div>
                <p>
                  As a Senior Software Developer and Founder at Macuvi, I led
                  the development of customer-centric products, automated
                  business processes to enhance efficiency, and created web
                  applications adhering to accessibility standards. I played a
                  key role in reducing task completion times for clients and
                  developed features for tracking accounts receivable and credit
                  notifications.
                </p>
              </div>
              <div className="resume-item">
                <div className="date">2014 - 2021</div>
                <div className="name">Sr. Software Developer</div>
                <div className="company">SSIS/PRAF</div>
                <p>
                  As a Senior Software Developer at SSIS/PRAF, I specialized in
                  developing and optimizing web and mobile applications,
                  automating business processes to enhance efficiency, and
                  ensuring seamless data integration and updates. I played a
                  crucial role in reducing operational time and improving
                  service management through innovative software solutions.
                </p>
              </div>
            </div>
          </div>
          {/* education */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="resume-title border-line-h">
              <div className="icon">
                <i className="fa fa-university" />
              </div>
              <div className="name">Education</div>
            </div>
            <div className="resume-items">
              <div className="resume-item">
                <div className="date">2023</div>
                <div className="name">
                  Introduction to Blockchain Development Course: Smart Contracts
                </div>
                <div className="company">Platzi</div>
                <p>Coursework - OpenZeppelin, Solidity, Uniswap</p>
              </div>
              <div className="resume-item border-line-h">
                <div className="date">2022</div>
                <div className="name">React advanced course</div>
                <div className="company">Platzi</div>
                <p>Coursework - Git, React, Javascript, Nextjs</p>
              </div>
              <div className="resume-item border-line-h">
                <div className="date">2014</div>
                <div className="name">Catholic University of Honduras</div>
                <div className="company">Tegucigalpa, F.M</div>
                <p>{`Bachelor's`} Degree in Computer Science</p>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default ResumeSection;
