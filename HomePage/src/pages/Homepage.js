import FrameComponent from "../components/FrameComponent";
import Jobs110 from "../components/Jobs110";
import RectangleComponent from "../components/RectangleComponent";
import RectangleComponent1 from "../components/RectangleComponent1";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent8 from "../components/FrameComponent8";
import MicrosoftContainer from "../components/MicrosoftContainer";
import RectangleIcon2 from "../components/RectangleIcon2";
import RectangleIcon1 from "../components/RectangleIcon1";
import SeniorDesignerContainer from "../components/SeniorDesignerContainer";
import RectangleComponent2 from "../components/RectangleComponent2";
import FrameComponent10 from "../components/FrameComponent10";
import JobMatchingContainer from "../components/JobMatchingContainer";
import Footer from "../components/Footer";
import "./Homepage.css";
const Homepage = () => {
  return (
    <div className="homepage">
      <FrameComponent />
      <b className="get-the-right-container">
        <p className="get-the-right-job">
          <span className="get-the">{`Get The `}</span>
          <span>Right Job</span>
        </p>
        <p className="you-deserve">You Deserve</p>
      </b>
      <Jobs110 />
      <RectangleComponent />
      <img className="homepage-child" alt="" src="/vector-40.svg" />
      <div className="search-wrapper">
        <b className="search">Search</b>
      </div>
      <img className="vector-icon" alt="" src="/vector.svg" />
      <div className="search-title-or">Search Title or Keyword</div>
      <div className="search-location">Search Location</div>
      <img className="group-icon" alt="" src="/group.svg" />
      <RectangleComponent1 />
      <div className="one-platform-many-container">
        <p className="get-the-right-job">One Platform</p>
        <p className="get-the-right-job">
          <span>{`Many `}</span>
          <span className="solutions">Solutions</span>
        </p>
      </div>
      <FrameComponent1 />
      <FrameComponent5 />
      <FrameComponent3 />
      <FrameComponent7 />
      <FrameComponent2 />
      <FrameComponent6 />
      <FrameComponent4 />
      <FrameComponent8 />
      <div className="featured-job-circulars">Featured Job Circulars</div>
      <MicrosoftContainer
        propLeft="139px"
        propTop="1608px"
        propHeight="265px"
        propTop1="226px"
        propBackgroundColor="#f9f9ff"
        propColor="#4943da"
      />
      <div className="vector-parent">
        <RectangleIcon2 />
        <div className="frame-parent">
          <div className="ellipse-parent">
            <img className="frame-child" alt="" src="/ellipse-891@2x.png" />
            <div className="microsoft-parent">
              <div className="search">Microsoft</div>
              <div className="freelance">Freelance</div>
            </div>
          </div>
          <div className="senior-ui-designer-parent">
            <div className="senior-ui-designer">Senior UI Designer</div>
            <div className="fulltime">Fulltime</div>
          </div>
          <div className="lorem-ipsum-dolor">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            nunc ac a magna at elementum. Cras arcu varius in aliquam habitant
            fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.
          </div>
          <div className="month-parent">
            <div className="month">
              <span>$2500</span>
              <span className="month1">/month</span>
            </div>
            <div className="apply-now-wrapper">
              <div className="search">Apply Now</div>
            </div>
            <div className="month-group">
              <div className="search">
                <span>$2500</span>
                <span className="month1">/month</span>
              </div>
              <div className="frame-group">
                <div className="apply-now-container">
                  <div className="search">Apply Now</div>
                </div>
                <div className="apply-now2">Apply Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vector-group">
        <RectangleIcon1 />
        <SeniorDesignerContainer />
      </div>
      <MicrosoftContainer
        propLeft="1033px"
        propBackgroundColor="#4943da"
        propColor="#fff"
      />
      <MicrosoftContainer
        propTop="1966px"
        propHeight="270px"
        propTop1="231px"
      />
      <MicrosoftContainer
        propLeft="735px"
        propTop="1966px"
        propHeight="270px"
        propTop1="231px"
      />
      <MicrosoftContainer
        propLeft="437px"
        propTop="1966px"
        propHeight="270px"
        propTop1="231px"
      />
      <MicrosoftContainer
        propLeft="1033px"
        propTop="1966px"
        propHeight="270px"
        propTop1="231px"
      />
      <div className="find-more-jobs-wrapper">
        <div className="search">Find More Jobs</div>
      </div>
      <RectangleComponent2 />
      <FrameComponent10 />
      <JobMatchingContainer />
      <Footer />
      <div className="enter-your-email">Enter your email...</div>
      <div className="homepage-item" />
    </div>
  );
};

export default Homepage;
