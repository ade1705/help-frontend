import React, {Component} from 'react';
import SearchComponent from "../../components/Home/SearchComponent";
import Listings from "../../components/Help/Listings";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronUp} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../components/Sidebar/Sidebar";

class Contact extends Component {
	render() {
		return (
			<div>
				<div className="flex justify-center">
					<div className="container pt-16 pb-24">
						<SearchComponent/>
					</div>
				</div>
				<div className="flex justify-center bg-white">
					<div className="container flex py-8">
						<div className="w-1/5">
							<Sidebar/>
						</div>
						<div className="w-4/5 flex pl-8">
							<Listings/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
