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
        						<a href="http://www.nasa.gov/home/index.html" target="_blank" title="NASA"></a>
        					</div>

        <ul class="footerInfo">
        <li>Curator: NASA Research and Education Support Services</li>
        <li>NASA Official: <a href="mailto:andrew.garza@nasa.gov" onclick="NewWindow('mailMessage.html','name','600','380','yes',2,2);return false">Drew Garza</a></li>
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
          				<li><a title="NASA Web Privacy Policy and Important Notices" href="http://www.nasa.gov/about/highlights/HP_Privacy.html" target="_blank">NASA Web Privacy Policy and Important Notices</a></li>
          				<li><a href="research_pub.html">NASA Research</a></li>
          				<li><a href="contact_pub.html">Contact Us</a></li>
          				<li><a href="help_pub.html">Help</a></li>
          				<li><a title="Use this link to download Adobe Reader. Opens in new window." target="_blank" href="http://get.adobe.com/reader">Download
          						Adobe Reader</a></li>
          			</ul>
          </div>
        </div>
      </div>
    </div>
)

export default Footer
