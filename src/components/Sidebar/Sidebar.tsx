import React, {Component} from 'react';
import SidebarCategory from "./SidebarCategory";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons";
import {faClock} from "@fortawesome/free-regular-svg-icons";
const sidebarData = [
	{
		name: "Categories",
		options: [
			"Current",
			"Bla Bla",
			"sambali Sambbali"
		]
	},
	{
		name: "Ratings",
		options: [
			"Current",
			"Bla Bla",
			"sambali Sambbali"
		]
	}
];

const sidebarCategories = sidebarData.map((category) =>
	<SidebarCategory category={category}/>
);

class Sidebar extends Component {
	render() {
		return (
			<div>
				<p className="text-gray-600 mb-5">1255 Items Found</p>
				<div>
					{sidebarCategories}
				</div>
			</div>
		);
	}
}

export default Sidebar;
