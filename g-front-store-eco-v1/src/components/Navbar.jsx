import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand navbar-dark bg-primary navbar-expand-lg">
			<Link to="/" className="navbar-brand">
				Home
			</Link>
			<ul className="navbar-nav mr-auto navbar-collapse">
				<li className="nav-item">
					<Link to="/messages" className="nav-link">
						Messages
					</Link>
				</li>
				<li className="nav-item">
					<Link to="/messages/new" className="nav-link">
						New Message
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
