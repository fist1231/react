import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import img1 from "../images/image1.jpg";
import img2 from "../images/image2.jpg";
import img3 from "../images/image3.jpg";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PubTabs from "./pubTabs";

const styles = {
  slideContainer: {
    backgroundImage: `url(${img1})`,
    height: "400px"
  },
  slideContainer2: {
    backgroundImage: `url(${img2})`,
    height: "400px"
  },
  slideContainer3: {
    backgroundImage: `url(${img3})`,
    height: "400px"
  }
};

const Home = () => (
  <div>
    <div className="container-fluid p-0">
      <Carousel interval={5000} showThumbs={false} infiniteLoop autoPlay>
        <div style={styles.slideContainer} className="slideStyle">
          <div className="row no-gutters">
            <div className="col-md-5" />
            <div className="col-md-7">
              <div className="slideText">
                <h2>Welcome to NSPIRES</h2>
                <p>
                  Supporting research in science and technology is an important
                  part of NASA&apos;s overall mission. NASA solicits this
                  research through the release of various research announcements
                  in a wide range of science and technology disciplines.
                </p>
                <a className="btn btn-primary bannerBtn">Learn More</a>
              </div>
            </div>
          </div>
        </div>
        <div style={styles.slideContainer2} className="slideStyle">
          <div className="row no-gutters">
            <div className="col-md-5" />
            <div className="col-md-7">
              <div className="slideText">
                <h2>Solicitations</h2>
                <p>
                  Search for and view open, closed, past, and future NASA
                  research announcements. The full text of the solicitation
                  announcements can be viewed and downloaded. Solicitations and
                  selected proposals for years prior to NSPIRES implementation,
                  January 1, 2005, were posted manually; therefore, some
                  postings for years 2000-2004 may not be as complete as those
                  posted through the NSPIRES system from 2005 to the present.
                </p>
                <a className="btn btn-primary bannerBtn">Search Now</a>
              </div>
            </div>
          </div>
        </div>
        <div style={styles.slideContainer3} className="slideStyle">
          <div className="row no-gutters">
            <div className="col-md-5" />
            <div className="col-md-7">
              <div className="slideText">
                <h2>Getting Started</h2>
                <p>
                  To submit a research proposal to NASA, individuals and the
                  organizations with which they are affiliated must be
                  registered in NSPIRES. Individuals may register at any time.
                </p>
                <p>
                  Organizations are required to have a valid registration with
                  the System for Award Management (SAM) before they can register
                  in NSPIRES. See Registration Information for more details on
                  user and organization registration.{" "}
                </p>
                <a className="btn btn-primary bannerBtn">Go Now</a>
              </div>
            </div>
          </div>
        </div>
      </Carousel>

      <div className="puTabsContainer mt-3">
        <PubTabs />
      </div>
      <div className="container">
        <section className="text-center">
          <div className="featureContainer">
            <div className="row">
              <div className="col-md-4">
                <div className="">
                  <div className="flip-container">
                    <div className="flipper">
                      <div className="front">
                        <h3>
                          <i className="fa fa-file-text-o" aria-hidden="true" />{" "}
                          Solicitations
                        </h3>
                        <p>
                          Search for and view open, closed, past, and future
                          NASA research announcements.{" "}
                        </p>
                      </div>
                      <div className="back">
                        <p className="mt-4">
                          The full text of the solicitation announcements can be
                          viewed and downloaded.{" "}
                        </p>
                        <a href="#">Learn More </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="flip-container">
                  <div className="flipper">
                    <div className="front">
                      {" "}
                      <h3>
                        <i className="fa fa-power-off" aria-hidden="true" />{" "}
                        Getting Started
                      </h3>
                      <p>
                        Individuals and the organizations with which they are
                        affiliated must be registered in NSPIRES.
                      </p>
                    </div>
                    <div className="back">
                      <p className="mt-2">
                        Individuals may register at any time. Organizations are
                        required to have a valid registration with the System
                        for Award Management (SAM) before they can register in
                        NSPIRES.
                      </p>
                      <a href="#">Learn More </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4">

                  <div className="flip-container">
                    <div className="flipper">
                      <div className="front">
                        <h3>
                          <i
                            className="fa fa-question-circle"
                            aria-hidden="true"
                          />{" "}
                          NSPIRES Help Desk
                        </h3>
                        <p>
                          If you need help or have any questions regarding the
                          NSPIRES website, please contact us.
                        </p>
                      </div>
                      <div className="back">
                        <ul className="linkPub">
                          <li>Operating Hours: Mon - Fri: 9am - 5pm (EST)</li>
                          <li>Phone Number: (202) 479-9376</li>
                          <li>
                            E-mail: <a href="#">nspires-help@nasaprs.com</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

              </div>
            </div>
          </div>
        </section>

        <section className="tableContainer">
          <div className="row">
            <div className="col">
              <h3 className="text-center">
                Solicitations with NOI/Proposals Due in the Next 30 days
              </h3>
              <table className="table puTable">
                <thead className="bg-primary">
                  <tr>
                    <th scope="col">Solicitation Title</th>
                    <th scope="col">Solicitation #</th>
                    <th scope="col">Released</th>
                    <th scope="col">NOI Due</th>
                    <th scope="col">Proposal Due</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mechanics of Granular Material</td>
                    <td>
                      <a href="#">NNH122SS094N</a>
                    </td>
                    <td>02/11/2018</td>
                    <td>04/24/2018</td>
                    <td>10/24/2018</td>
                  </tr>
                  <tr>
                    <td>Near Earth Object Observations Phase II</td>
                    <td><a href="#">NNH122SS036N</a></td>
                    <td>01/31/2018</td>
                    <td>04/15/2018</td>
                    <td>10/15/2018</td>
                  </tr>
                  <tr>
                    <td>
                      New Millennium Program Space Technology - 9
                    </td>
                    <td><a href="#">NNX12AAA999N</a></td>
                    <td>04/11/2018</td>
                    <td>05/20/2018</td>
                    <td>10/24/2018</td>
                  </tr>
                  <tr>
                    <td>
                      Partnership Awards For The Integration Of Research Into Undergraduate Education (PAIR)
                    </td>
                    <td><a href="#">NRA-02-OEOP</a></td>
                    <td>04/11/2018</td>
                    <td>05/20/2018</td>
                    <td>10/24/2018</td>
                  </tr>

                  <tr>
                    <td>Solid Earth/Natural Hazards
                    </td>
                    <td><a href="#">NRA-OES 04,
												13</a></td>
                    <td>04/11/2018</td>
                    <td>05/20/2018</td>
                    <td>10/24/2018</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section>
          <div className="container text-center warningInfo">
            <h5>WARNING:</h5>

            <small>
              This is a U.S. Government computer. By accessing and using the
              computer system, you are consenting to the use of system
              monitoring. Unauthorized use of, or access to, this computer
              system may subject you to disciplinary action and criminal
              prosecution.
            </small>
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default Home;
