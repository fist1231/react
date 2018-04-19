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

export default class HomeTabs extends React.Component {
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
      <div className="homeTabsContainer">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Reminders/Notifications <span class="badge badge-primary">3</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Site News
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <div className="list-group">
                  <a
                    href="#"
                    className="list-group-item list-group-item-action flex-column align-items-start active"
                  >
                    <div className="d-flex w-100 justify-content-between">
                      <span>3 Affiliation Requests are pending</span>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action flex-column align-items-start"
                  >
                    <p className="mb-1">
                      <span className="mr-3">
                        Need Program Manager Confirmation for proposal:
                        Test_075. For solicitation: NEWTEST0013FC
                      </span>
                      <span className="badge badge-light">03/20/2018</span>
                    </p>
                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action flex-column align-items-start"
                  >
                    <p className="mb-1">
                      <span className="mr-3">
                        Need Collaborator Confirmation for
                        proposal:Micropropulsion and Control Technologies for
                        On-Orbit NanoSat Positioning
                      </span>
                      <span className="badge badge-light">02/25/2018</span>
                    </p>
                  </a>

                  <a
                    href="#"
                    className="list-group-item list-group-item-action flex-column align-items-start"
                  >
                    <p className="mb-1">
                      <span className="mr-3">
                        Need Collaborator Confirmation for proposal:Integrated
                        strategies for the human exploration of the Moon and
                        Mars
                      </span>
                      <span className="badge badge-light">02/21/2018</span>
                    </p>
                  </a>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <div className="media">
                  <div className="media-body">
                    <h5 className="mt-0">News Title 1</h5>
                    <p>NSPIRES is the new system for preparing and submitting
                    research proposals directly to NASA. NSPIRES is expected to
                    become operational in early 2013. Check back here for news
                    updates and more information.</p>
                    <span className="float-right"><a href="#"><i className="fa fa-arrow-circle-right"></i>Continue</a></span>
                  </div>
                </div>

                <div className="media">
                  <div className="media-body">
                    <h5 className="mt-0">News Title 2</h5>
                    <p>This is a test for Iteration 6.5 </p>
                    <span className="float-right"><a href="#"><i className="fa fa-arrow-circle-right"></i>Continue</a></span>
                  </div>
                </div>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
