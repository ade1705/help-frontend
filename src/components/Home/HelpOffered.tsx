import React, {Component} from 'react';
import {faChevronRight, faHeadset, faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-regular-svg-icons";

const categories = [
	{
		type: 'Business Development'
	},
	{
		type: 'Business Development'
	},
	{
		type: 'Business Development'
	},
];
const listItems = categories.map((category) =>
	<div className="w-1/2 p-2">
		<div className="bg-white h-64 p-8 shadow-2xl hover:bg-gray-100 flex flex-col justify-between" role="button">
			<div>
				<span className="py-2 pr-4  pl-2 bg-red-300 rounded-full">
					<div className="rounded-full h-4 w-4 flex items-center justify-center inline-flex bg-red-700 mr-2">&nbsp;</div>
					Design
				</span>
				<h1 className="text-xl pt-4 pr-20 font-semibold">{category.type}</h1>
				<p className="text-gray-600 py-4">
					<span className="mr-8"><FontAwesomeIcon icon={faMapMarkedAlt} /> Stockholm</span>
					<span><FontAwesomeIcon icon={faClock}/> Full-time</span>
				</p>
			</div>
			<div className="flex items-center">
				<img src="https://cdn.dribbble.com/users/1077075/screenshots/6606827/curious-1_2x.png" width="50" />
				Curious TM, 10 days ago
			</div>
		</div>
	</div>
);

class HelpOffered extends Component {
	render() {
		return (
			<div className="py-12">
				<div className="py-6">
					<h1 className="text-5xl font-extrabold leading-none">Help Offered</h1>
					<p className="pt-4">
						Find help when you need it most.
						<span className="text-red-600">
							Set customized needs here <i className="las la-battery-three-quarters"></i>
						</span>
					</p>
				</div>
				<div className="flex">
					<div className="w-1/3 pr-2">
						<div className="" role="button">
							<div>
								<img src="https://cdn.dribbble.com/users/330915/screenshots/6554409/1_new_condo.gif" />
							</div>
							<div className="-mt-12 flex flex-col">
								<span className="self-end py-2 pr-4 mr-4 pl-2 bg-red-300 rounded-full">
									<div className="rounded-full h-4 w-4 flex items-center justify-center inline-flex bg-red-700 mr-2">&nbsp;</div>
									Design
								</span>
								<h1 className="text-2xl pt-8 pr-20 font-semibold">Super BadMan Co Moving Services for $88/Hour</h1>
								<p className="text-gray-600 py-4">
									<span className="mr-8"><FontAwesomeIcon icon={faMapMarkedAlt} /> Stockholm</span>
									<span><FontAwesomeIcon icon={faClock}/> Full-time</span>
								</p>
							</div>
							<div className="flex items-center">
								<img src="https://cdn.dribbble.com/users/1077075/screenshots/6606827/curious-1_2x.png" width="50" />
								Curious TM, 10 days ago
							</div>
						</div>
					</div>
					<div className="w-2/3">
						<div className="flex flex-wrap">
							{ listItems }
							<div className="w-1/2 p-2 flex justify-center h-100 items-center text-center">
								<div>
									<p className="font-black text-6xl">+1,239</p>
									Help offered. <a className="text-red-600" href="#">Explore all helps ></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default HelpOffered;
