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
        <Nav tabs>

          <NavItem>
          <div className="bgBlue">
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
            Site News

            </NavLink>
            </div>
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
                  <p>NSPIRES is the new system for preparing and submitting
                  research proposals directly to NASA. NSPIRES is expected to
                  become operational in early 2013. Check back here for news
                  updates and more information.</p>
                  <span className="float-right"><a href="#"><i className="fa fa-arrow-circle-right"></i>Continue</a></span>
                </div>
              </div>

              <div className="media">
                <div className="media-body bgLight">
                  <h5 className="mt-0">News Title 2</h5>
                  <p>This is a test for Iteration 6.5 </p>
                  <span className="float-right"><a href="#"><i className="fa fa-arrow-circle-right"></i>Continue</a></span>
                </div>
              </div>
            </Col>
          </Row>


          </TabPane>
          <TabPane tabId="2">


          <Row>
            <Col sm="11">

            <div className="bannerLoginContainer">
                <h3>Member Login</h3>
                <div className="inputGroup">
                  <input required="" type="text"/> <label>Username</label>
                </div>
                <div className="inputGroup">
                  <input required="" type="password"/> <label>Password</label>
                </div>
                <div className="loginBtnContainer">
                  <button onClick={() => parent.location='members.html'} type="button" className="mainBtn" name="" title="Login" value="Login">Login</button>
                </div>
                <p>
                  <a className="login" href="login_forgot_email.html" title="Forgot Password">Forgot password?</a> <a className="login" href="about_registration_pub.html" title="Register Now"> Register Now!</a>
                </p>
              </div>
            </Col>
          </Row>

          </TabPane>
        </TabContent>
      </div>
    );
  }
}
