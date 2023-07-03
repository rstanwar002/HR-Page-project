import "./PieChart.css";
const PieChart = () => {
  return (
    <div className="piechart">
      <div className="piechart-group">
        <img className="piechart-icon" alt="" src="/piechart.svg" />
        <div className="runningline">
          <div className="div">+2,5%</div>
          <img className="line-icon1" alt="" src="/line1.svg" />
        </div>
        <div className="fixedline">
          <div className="div1">-0,5%</div>
          <img className="line-icon2" alt="" src="/line2.svg" />
        </div>
        <div className="downline">
          <div className="div2">+0,4%</div>
          <img className="line-icon3" alt="" src="/line3.svg" />
        </div>
      </div>
      <div className="frame-parent">
        <div className="labellegendlight-parent">
          <div className="labellegendlight">
            <div className="labellegendlight-child" />
            <div className="web-server-a">Shortlisted</div>
          </div>
          <div className="div3">942</div>
        </div>
        <div className="labellegendlight-group">
          <div className="labellegendlight1">
            <div className="labellegendlight-item" />
            <div className="web-server-a">Hired</div>
          </div>
          <div className="div4">25</div>
        </div>
        <div className="labellegendlight-parent">
          <div className="labellegendlight2">
            <div className="labellegendlight-inner" />
            <div className="web-server-a">Rejected</div>
          </div>
          <div className="div5">2,452</div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
