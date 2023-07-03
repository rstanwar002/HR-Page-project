import "./FrameComponent1.css";
const FrameComponent1 = () => {
  return (
    <div className="frame-div">
      <div className="frame-parent1">
        <div className="marketing-communication-parent">
          <div className="marketing-communication-container">
            <p className="marketing">{`Marketing &`}</p>
            <p className="marketing">Communication</p>
          </div>
          <div className="jobs-available">237 Jobs Available</div>
        </div>
        <img className="vector-icon1" alt="" src="/vector1.svg" />
      </div>
    </div>
  );
};

export default FrameComponent1;
