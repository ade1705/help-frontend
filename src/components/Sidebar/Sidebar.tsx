import React, {Component} from 'react';
import SidebarCategory from "./SidebarCategory";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons";
import {faClock} from "@fortawesome/free-regular-svg-icons";
const sidebarData = [
	{
		name: "Categories",
		options: [
			'Handy Man', 'House Cleaning', 'Massage Therapy', 'Personal Training', 'Dog Walking'
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

const sidebarCategories = sidebarData.map((category:any, index: number) =>
	<SidebarCategory category={category} key={index}/>
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
