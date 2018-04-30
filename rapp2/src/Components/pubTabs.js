import React from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";

export default class PubTabs extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div className="container-fluid homeTabsContainer pl-0">
        <Nav tabs className="homeTabs">
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Announcements
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Login
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <div className="media">
                  <div className="media-body bgLight">
                    <h5 className="mt-0">News Title 1</h5>
                    <p>
                      NSPIRES is the new system for preparing and submitting
                      research proposals directly to NASA. NSPIRES is expected
                      to become operational in early 2013. Check back here for
                      news updates and more information.
                    </p>
                    <span className="float-right">
                      <a href="#">
                        <i className="fa fa-arrow-circle-right" />Continue
                      </a>
                    </span>
                  </div>
                </div>

                <div className="media">
                  <div className="media-body bgLight">
                    <h5 className="mt-0">News Title 2</h5>
                    <p>This is a test for Iteration 6.5 </p>
                    <span className="float-right">
                      <a href="#">
                        <i className="fa fa-arrow-circle-right" />Continue
                      </a>
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <div className="bannerLoginContainer">
                  <h3 className="text-center" >Member Login</h3>
                  <form className="container form-horizontal" action="">
                    <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="text"
                          className="form-control"
                          id="text"
                          placeholder="Username"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-12">
                        <input
                          type="password"
                          className="form-control"
                          id="pwd"
                          placeholder="Enter password"
                        />
                      </div>
                    </div>

                    <div className="form-group text-right">
                      <div className="col-sm-offset-2 col-sm-12">
                        <button type="submit" className="btn btn-primary w-100">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                  <small className="text-center">
                    <p>
                      forgot your password? <a href="#">click here</a>
                    </p>
                    <p>
                      new user? <a href="#">create new account</a>
                    </p>
                  </small>
                </div>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
