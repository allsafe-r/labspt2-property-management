import React from 'react';
// import PropTypes from 'prop-types';
import Wave from './Wave';
import { Link } from 'react-router-dom';

import '../general.css';

const IndexPage = () => (
	<div>
		<div className="Hero">
			<div className="HeroGroup">
				<h1>
					Property management <br />made easier.
				</h1>
				<p>Manage tasks, payments, work orders anywhere, anytime. </p>
				<Link to={'/'}>
						<button className="request-demo-button">Request a demo</button>
				</Link>				
				<Wave />
			</div>
		</div>
	</div>
);


export default IndexPage;
