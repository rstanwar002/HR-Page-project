import "./FrameComponent.css";
const FrameComponent = () => {
  return (
    <div className="frame-container">
      <div className="rohitsolutions-parent">
        <div className="rohitsolutions">
          <span>Rohit</span>
          <span className="solutions1">Solutions</span>
        </div>
        <img className="frame-item" alt="" src="/vector-39.svg" />
      </div>
      <div className="home-parent">
        <div className="home">Home</div>
        <div className="find-jobs">Find Jobs</div>
        <div className="find-jobs">Find Candidates</div>
        <div className="find-jobs">Articles</div>
      </div>
      <div className="log-in-parent">
        <button className="find-jobs">Log in</button>
        <div className="register-now-wrapper">
          <button className="register-now">Register</button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
