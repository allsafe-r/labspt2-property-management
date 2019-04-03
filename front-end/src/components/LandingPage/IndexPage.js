import React from 'react';
// import PropTypes from 'prop-types';
import Wave from './Wave';
import '../../assets/css/general.css';
import { Link } from 'react-router-dom';

const IndexPage = () => (
	<div>
		<div className="Hero">
			<div className="HeroGroup">
				<h1>
					Property management <br />made easier.
				</h1>
				<p>Manage tasks, payments, work orders anywhere, anytime. </p>
				<Link to={'/register'}>
						<button>Request Demo</button>
					</Link>
          <div class="anchor-wrap">
					  <a href="#footer" class="anchor"><span></span></a>
				</div>
			</div>
		</div>
	</div>
);



export default IndexPage;
