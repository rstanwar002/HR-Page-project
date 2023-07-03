import { useMemo } from "react";
import RectangleIcon from "./RectangleIcon";
import "./MicrosoftContainer.css";
const MicrosoftContainer = ({
  propLeft,
  propTop,
  propHeight,
  propTop1,
  propBackgroundColor,
  propColor,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      left: propLeft,
      top: propTop,
    };
  }, [propLeft, propTop]);

  const frameDiv1Style = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const frameDiv2Style = useMemo(() => {
    return {
      top: propTop1,
    };
  }, [propTop1]);

  const frameDiv3Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const applyNowStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="vector-container" style={frameDivStyle}>
      <RectangleIcon />
      <div className="frame-parent5" style={frameDiv1Style}>
        <div className="ellipse-group">
          <img className="ellipse-icon" alt="" src="/ellipse-89@2x.png" />
          <div className="microsoft-group">
            <div className="microsoft1">Microsoft</div>
            <div className="freelance1">Freelance</div>
          </div>
        </div>
        <div className="senior-ui-designer-group">
          <div className="senior-ui-designer1">Senior UI Designer</div>
          <div className="fulltime1">Fulltime</div>
        </div>
        <div className="lorem-ipsum-dolor1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
          nunc ac a magna at elementum. Cras arcu varius in aliquam habitant
          fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.
        </div>
        <div className="month-container" style={frameDiv2Style}>
          <div className="microsoft1">
            <span>$2500</span>
            <span className="month5">/month</span>
          </div>
          <div className="apply-now-frame" style={frameDiv3Style}>
            <div className="microsoft1" style={applyNowStyle}>
              Apply Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicrosoftContainer;
