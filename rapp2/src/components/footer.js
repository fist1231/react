import React from 'react'
/*import footerImg from '../../public/footer.jpg'*/
import './footer.css'

/*const styles = {
        backgroundImage: 'url(' + footerImg + ')',
        height: '220px',
        marginTop: '6px',
        marginBottom: '6px',
        resizeMode: 'repeat',
}*/


const Footer = () => (
    <div className="footer">
      <div className="container-fluid footerContainer">
      <div className="row footerContent">
        <div className="col-9">
        <div className="nasaFooterLogo">
        						<span></span>
        					</div>

        <ul className="footerInfo">
        <li>Curator: NASA Research and Education Support Services</li>
        <li>NASA Official: Name Goes Here</li>
      </ul>
        </div>
        <div className="col-3">
          <div className="nspiresLogo">
           </div>
        </div>
        </div>
        <div className="row">
          <div className="col">
          <ul className="footerLinks">
          				<li><span className="staticLink staticLink600">NASA Web Privacy Policy and Important Notices</span></li>
          				<li><span className="staticLink staticLink600">NASA Research</span></li>
          				<li><span className="staticLink staticLink600">Contact Us</span></li>
          				<li><span className="staticLink staticLink600">Help</span></li>
          				<li><span className="staticLink staticLink600">Download Adobe Reader</span></li>
          			</ul>
          </div>
        </div>
      </div>
    </div>
)

export default Footer
