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
      <div className="container-fluid">
      <div className="row">
        <div className="col">

        </div>
        <div className="col">

        </div>
        <div className="col">
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
