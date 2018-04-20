import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

import img1 from "../images/image1.png";
import img2 from "../images/image2.png";
import img3 from "../images/image3.png";

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

import FlipCardB from '../containers/flipCard/FlipCardB';
import FlipCardA from '../containers/flipCard/FlipCardA';

const Home = () => (
  <div>
    <div className="container-fluid p-0">
      <Carousel interval={5000} showThumbs={false} infiniteLoop>
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
                <a className="shadow-lg btn btn-primary">Learn More</a>
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
                <a className="shadow-lg btn btn-primary">Search Now</a>
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
                <a className="shadow-lg btn btn-primary">Go Now</a>
              </div>
            </div>
          </div>
        </div>
      </Carousel>



      <div className="puTabsContainer mt-3">
        <PubTabs />
      </div>
<div className="container-fluid">
<section class="features-icons text-center">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
          <FlipCardA/>
            </div>
          </div>
          <div class="col-md-4">
            <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">

              <FlipCardB />
            </div>
          </div>


          <div class="col-md-4">
            <div class="features-icons-item mx-auto mb-0 mb-lg-3">
  <FlipCardB />

            </div>
          </div>
        </div>
      </div>
    </section>







      <section>
      <div className="container text-center warningInfo">
      <h5>WARNING:</h5>

  <small>This is a U.S. Government computer. By accessing and using the
    computer system, you are consenting to the use of system monitoring.
    Unauthorized use of, or access to, this computer system may subject
    you to disciplinary action and criminal prosecution.</small>
</div>
      </section>
</div>









      </div>
    </div>

);

export default Home;
