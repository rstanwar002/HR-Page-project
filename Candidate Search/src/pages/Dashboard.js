import Bg from "../components/Bg";
import RectangleCopy from "../components/RectangleCopy";
import Background1 from "../components/Background1";
import Background2 from "../components/Background2";
import Background3 from "../components/Background3";
import Background from "../components/Background";
import PieChart from "../components/PieChart";
import Component1 from "../components/Component1";
import RectangleComponent from "../components/RectangleComponent";
import RectangleComponent1 from "../components/RectangleComponent1";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="web-background">
        <div className="web-background-child" />
      </div>
      <div className="navigationsidebarexpanded">
        <Bg />
        <div className="navigation-sidebar-expande">
          <div className="image-1">
            <img className="image-1-icon" alt="" src="/image-1@2x.png" />
          </div>
          <img
            className="iconnavigationhamburger"
            alt=""
            src="/iconnavigationhamburger.svg"
          />
        </div>
        <div className="project-05">
          <div className="link">IOTASK project update</div>
          <div className="line">
            <div className="mask" />
            <div className="uifillsblue">
              <div className="rectangle-copy" />
            </div>
          </div>
        </div>
        <div className="project-04">
          <div className="link">IOTASK content creation</div>
          <div className="line">
            <div className="mask" />
            <div className="uifillsblue">
              <div className="rectangle-copy1" />
            </div>
          </div>
        </div>
        <img className="separator-icon" alt="" src="/separator.svg" />
        <img
          className="navigationsidebarexpanded-child"
          alt=""
          src="/line-3.svg"
        />
        <div className="navigation">
          <div className="link2">DASHBOARD</div>
          <div className="badgecounterinfolight">
            <div className="background" />
            <div className="background1" />
            <b className="b">2</b>
          </div>
          <img
            className="iconnavigationhamburger"
            alt=""
            src="/dashboard.svg"
          />
        </div>
        <div className="navigation1">
          <div className="link2">POST JOB</div>
          <div className="badgecounterinfolight">
            <div className="background" />
            <div className="background1" />
            <b className="b">2</b>
          </div>
          <img className="iconnavigationhamburger" alt="" src="/jobs.svg" />
        </div>
        <div className="navigation2">
          <div className="link2">POST INTERNSHIP</div>
          <div className="badgecounterinfolight">
            <div className="background" />
            <div className="background1" />
            <b className="b">2</b>
          </div>
          <img className="internship-icon" alt="" src="/internship.svg" />
        </div>
        <div className="navigation3">
          <div className="link2">APPLICATION</div>
          <div className="badgecounterinfolight">
            <div className="background" />
            <div className="background1" />
            <b className="b">2</b>
          </div>
          <img
            className="iconnavigationhamburger"
            alt=""
            src="/application.svg"
          />
        </div>
      </div>
      <div className="navigation-top-header">
        <div className="fillsshadow-round">
          <RectangleCopy />
          <div className="page-title">Dashboard</div>
          <div className="avatar-parent">
            <img className="avatar-icon" alt="" src="/avatar.svg" />
            <div className="search">
              <div className="search-for-task-and-parent">
                <div className="search-for-task">Search for Jobs and etc.</div>
                <img className="icon-search" alt="" src="/icon--search.svg" />
              </div>
            </div>
            <div className="rectangle-parent">
              <div className="group-child" />
              <img
                className="notification-icon"
                alt=""
                src="/001notification.svg"
              />
              <div className="wrapper">
                <b className="b4">2</b>
              </div>
            </div>
          </div>
        </div>
        <img className="line-icon" alt="" src="/line.svg" />
      </div>
      <div className="card">
        <Background1 />
        <div className="job-posts">Total Application</div>
        <b className="b5">4,561</b>
        <b className="b6">-4.4%</b>
        <img className="graph-2-icon" alt="" src="/graph-2.svg" />
      </div>
      <div className="card1">
        <Background2 />
        <div className="job-posts">No of Meetings</div>
        <b className="b5">125</b>
        <b className="b8">+1.5%</b>
        <img className="graph-2-icon" alt="" src="/graph-3.svg" />
      </div>
      <div className="card2">
        <Background3 />
        <div className="job-posts">No of Hirings</div>
        <b className="b5">2,456</b>
        <b className="b10">+4.5%</b>
        <img className="graph-2-icon" alt="" src="/graph-6.svg" />
      </div>
      <div className="card3">
        <Background />
        <div className="job-posts">Job Posts</div>
        <b className="b5">2,456</b>
        <b className="b10">+2.5%</b>
        <img className="graph-icon" alt="" src="/graph.svg" />
      </div>
      <div className="piechart-parent">
        <PieChart />
        <div className="application-responce-parent">
          <b className="application-responce">Application Responce</b>
          <div className="download-report">Download Report</div>
        </div>
      </div>
      <Component1 />
      <div className="component-3">
        <RectangleComponent />
        <img className="component-3-child" alt="" src="/group-27.svg" />
        <div className="welcome-to-hire-container">
          <p className="welcome-to-hire">Welcome To Hire karma</p>
          <p className="john-doe">
            <b>John Doe</b>
          </p>
        </div>
      </div>
      <div className="footer">
        <RectangleComponent1 />
        <div className="image-1-parent">
          <div className="image-11">
            <img className="image-1-icon" alt="" src="/image-11@2x.png" />
          </div>
          <div className="all-rights-reserved">
            © 2021 All Rights Reserved to Hire karma | Version 0.1
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
