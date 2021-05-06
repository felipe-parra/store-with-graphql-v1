import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="container">
			<h5 className="text-center">Home</h5>

			<div className="row">
				<div className="col">
					<Link to="/messages/new" className="btn btn-outline-primary">
						New Message
					</Link>
				</div>
				<div className="col">
					<Link to="/messages" className="btn btn-primary">
						List Messages
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
