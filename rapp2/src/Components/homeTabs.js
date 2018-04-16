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
      <div>
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
                    </div></a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action flex-column align-items-start"
                  >

                    <p className="mb-1">
                      <span className="mr-3">Need Program Manager Confirmation for proposal: Test_075. For solicitation: NEWTEST0013FC</span>
                        <span class="badge badge-light">03/20/2018</span>
                    </p>

                  </a>
                  <a
                    href="#"
                    className="list-group-item list-group-item-action flex-column align-items-start"
                  >
                  <small className="text-muted">
                    03/10/2018
                  </small>
                    <p className="mb-1">
                      <a href="#">Need Collaborator Confirmation for proposal:Studies of the Dynamics, Control, and Evaporation of Three-Dimensional Droplet Arrays</a>
                    </p>

                  </a>

                  <a
                    href="#"
                    className="list-group-item list-group-item-action flex-column align-items-start"
                  >
                  <small className="text-muted">
                    02/05/2018
                  </small>
                    <p className="mb-1">
                      <a href="#">Need Collaborator Confirmation for proposal:Micropropulsion and Control Technologies for On-Orbit NanoSat Positioning</a>
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
    <h5 className="mt-0">Media heading</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
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
