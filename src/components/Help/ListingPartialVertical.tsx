import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark, faHandRock, faStar} from "@fortawesome/free-solid-svg-icons";
import {Listing} from "./ListingInterface";

interface Props {
	listing: Listing
}

class ListingPartialVertical extends Component<Props> {
	render() {
		return (
			<div className="w-4/12 border-b border-gray-300 item items-center p-3">
				<div className="">
					<img src={this.props.listing.logo}  />
				</div>
				<div className="">
					<div className="-mt-8 mb-5 flex justify-between px-2">
						<small className="py-1 pr-4 pl-2 bg-red-200 text-red-900 rounded-full font-semibold text-">
							<FontAwesomeIcon icon={faHandRock}/> Super Helper
						</small>
						<small className="py-1 pr-4  pl-2 bg-green-200 rounded-full font-semibold">
							<div className="rounded-full h-2 w-2 flex items-center justify-center inline-flex bg-green-700 mr-2">&nbsp;</div>
							<span className="text-green-900">{this.props.listing.category}</span>
						</small>
					</div>
					<div className="flex justify-between">
						<div className="text-xl font-semibold leading-none">{this.props.listing.name}</div>
						<FontAwesomeIcon icon={faBookmark} />
					</div>
					<div>
									<span className="text-yellow-500 mr-3">
										{this.props.listing.rating} &nbsp;
										<FontAwesomeIcon icon={faStar}/>
										<FontAwesomeIcon icon={faStar}/>
										<FontAwesomeIcon icon={faStar}/>
										<FontAwesomeIcon icon={faStar}/>
									</span>
						<span className="text-gray-600">{this.props.listing.reviews} reviews</span>
					</div>
				</div>
				<div className="">
					<span className="text-2xl font-semibold">${this.props.listing.price}</span><small>/hour</small>
				</div>
			</div>
		);
	}
}

export default ListingPartialVertical;
