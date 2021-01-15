import React, {Component} from 'react';
import SearchComponent from "./SearchComponent";

class Hero extends Component {
	render() {
		return <>
			<div className="h-screen-60vh flex justify-center">
				<div className="container flex justify-between">
					<div className="w-2/3 flex items-center">
						<div>
							<h1 className="text-5xl font-extrabold leading-none">Find the most <br/>helpful people to help.</h1>
							<div className="absolute w-7/12 mt-20 "><SearchComponent/></div>
						</div>
					</div>
					<div className="w-1/3">
						<img src="https://images.unsplash.com/photo-1524283077247-2f14f280ebd0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=699&q=80" />
						<p className="py-3 text-gray-600">Let John help you
							<br/> With all your welding needs from his company <span className="text-black"> Text 20</span></p>
					</div>
				</div>
			</div>
		</>;
	}
}

export default Hero;
