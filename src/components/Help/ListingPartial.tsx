import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBookmark, faHandRock, faStar} from "@fortawesome/free-solid-svg-icons";
import {Listing} from "./ListingInterface";

interface Props {
	listing: Listing
}

class ListingPartial extends Component<Props> {
	render() {
		return (
			<div className="flex py-6 border-b border-gray-300 item items-center">
				<div className="w-2/12 pr-4">
					<img src={this.props.listing.logo}  />
				</div>
				<div className="w-5/12">
					<small className="py-1 pr-4 pl-2 bg-red-200 text-red-900 rounded-full font-semibold text-">
						<FontAwesomeIcon icon={faHandRock}/> Super Helper
					</small>
					<div className="text-xl font-semibold pt-1">{this.props.listing.name}</div>
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
				<div className="w-2/12">
					<span className="text-2xl font-semibold">${this.props.listing.price}</span><small>/hour</small>
				</div>
				<div className="w-2/12">
								<span className="py-2 pr-4  pl-2 bg-red-300 rounded-full lowercase font-semibold">
									<div className="rounded-full h-4 w-4 flex items-center justify-center inline-flex bg-red-700 mr-2">&nbsp;</div>
									{this.props.listing.category}
								</span>
				</div>
				<div className="w-1/12 text-right">
					<FontAwesomeIcon icon={faBookmark} />
				</div>
			</div>
		);
	}
}

export default ListingPartial;
