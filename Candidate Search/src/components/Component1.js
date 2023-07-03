import "./Component1.css";
const Component1 = () => {
  return (
    <div className="component-1">
      <div className="recent-job-posts-parent">
        <b className="recent-job-posts">Recent Job Posts</b>
        <div className="tabmenu">
          <div className="active">
            <div className="today">Today</div>
          </div>
          <div className="monthly">Monthly</div>
          <div className="weekly">Weekly</div>
        </div>
      </div>
      <div className="frame-group">
        <div className="job-title-parent">
          <div className="job-title">Job Title</div>
          <div className="category">Category</div>
          <div className="openings">Openings</div>
          <div className="applications">Applications</div>
          <div className="status">Status</div>
        </div>
        <div className="row03">
          <div className="background12" />
          <div className="borderbot" />
          <div className="ui-ux-designer">UI UX Designer</div>
          <div className="full-time">Full Time</div>
          <div className="div6">12</div>
          <div className="div7">135</div>
          <div className="badgetextsuccesslight">
            <b className="today">Active</b>
          </div>
        </div>
        <div className="row03">
          <div className="background12" />
          <div className="borderbot" />
          <div className="ui-ux-designer">Full Stack Dev</div>
          <div className="full-time">Full Time</div>
          <div className="div6">08</div>
          <div className="div7">100</div>
          <div className="badgetextsuccesslight1">
            <b className="today">Inactive</b>
          </div>
        </div>
        <div className="row03">
          <div className="background12" />
          <div className="borderbot" />
          <div className="ui-ux-designer">DevOps</div>
          <div className="full-time">Internship</div>
          <div className="div6">12</div>
          <div className="div7">05</div>
          <div className="badgetextsuccesslight">
            <b className="today">Active</b>
          </div>
        </div>
        <div className="row03">
          <div className="background12" />
          <div className="borderbot" />
          <div className="ui-ux-designer">Android Dev</div>
          <div className="full-time">Full Time</div>
          <div className="div6">04</div>
          <div className="div7">45</div>
          <div className="badgetextsuccesslight">
            <b className="today">Active</b>
          </div>
        </div>
        <div className="row03">
          <div className="background12" />
          <div className="borderbot4" />
          <div className="ui-ux-designer">IOS Developer</div>
          <div className="full-time">Full Time</div>
          <div className="div6">18</div>
          <div className="div7">96</div>
          <div className="badgetextsuccesslight1">
            <b className="today">Inactive</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component1;
