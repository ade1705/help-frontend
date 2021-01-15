import React, {Component} from 'react';
import {Link} from "react-router-dom";
import logo from '../logo.png';

class Header extends Component {
	render() {
		return <div className="header flex border-b py-3 justify-center">
			<div className="w-full flex container justify-between">
				<div className="flex items-center">
					<Link to={"/"} className="mr-6"> <img src={logo} className="h-100" width="80"/> </Link>
					<Link to={"/contact"} className="mr-6"> Find Help </Link>
					<Link to={"/"} className="mr-6"> Browse Categories </Link>
				</div>
				<div>
					<Link to={"/"} className="pr-3 py-1 mr-3  border-r border-gray-400"> For Contractors </Link>
					<Link to={"/"} className=""> Sign In </Link>
				</div>
			</div>
		</div>;
	}
}

export default Header;
