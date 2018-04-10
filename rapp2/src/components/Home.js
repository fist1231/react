import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Login from '../Login'
import PrivateRoute, { AuthButton } from '../PrivateRoute'

import SecureHome from '../components/SecureHome'


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Home = () => (
  <div>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/SecureHome" component={SecureHome} />


    <div className="container-fluid ">
      <div className="pubHome">
	<h2>NASA Research Opportunities</h2>
	<p>Supporting research in science and technology is an
		important part of NASA's overall mission. NASA solicits this
		research through the release of various research announcements in
		a wide range of science and technology disciplines. NASA uses a
		peer review process to evaluate and select research proposals
		submitted in response to these research announcements.
		Researchers can help NASA achieve national research objectives by
		submitting research proposals and conducting awarded research.
		This site facilitates the search for NASA research opportunities.</p>
	<h3>NASA Research</h3>
	<div className="titleUnderBar"></div>
	<div className="dataDisplayRow">
		<div className="leftContentW50">
			<h4 className="homeSubTitle">

				<Link to='/solicitations'>Solicitations</Link>
			</h4>
			<p>
				Search for and view open, closed, past, and future NASA
				research announcements. The full text of the <Link to='/solicitations'>solicitation announcements</Link> can be viewed and downloaded.
			</p>
			<p>Solicitations and selected proposals for years prior to
				NSPIRES implementation, January 1, 2005, were posted manually;
				therefore, some postings for years 2000-2004 may not be as
				complete as those posted through the NSPIRES system from 2005
				to the present.</p>
		</div>
		<div className="middleCol"></div>
		<div className="rightContentW50">
			<h4 className="homeSubTitle">Getting Started</h4>
			<p>To submit a research proposal to NASA, individuals and
				the organizations with which they are affiliated must be
				registered in NSPIRES. Individuals may register at any time.</p>
			<p>
				Organizations are required to have a valid registration with
				the System for Award Management (SAM) before they can register
				in NSPIRES. See <Link to='/'>Registration Information</Link> for more details on user and organization
				registration.
			</p>
		</div>
	</div>
	<div className="dataDisplayRow">
		<fieldset>
			<legend>
				<span className="label">WARNING:</span>
			</legend>
			This is a U.S. Government computer. By accessing and using the
			computer system, you are consenting to the use of system
			monitoring. Unauthorized use of, or access to, this computer
			system may subject you to disciplinary action and criminal
			prosecution.
		</fieldset>
	</div>
</div>
    </div>
  </div>
)

export default Home
