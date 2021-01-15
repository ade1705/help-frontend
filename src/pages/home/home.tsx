import React, {Component} from 'react';
import Hero from "../../components/Home/Hero";
import Categories from "../../components/Home/Categories";
import HelpOffered from "../../components/Home/HelpOffered";

class Home extends Component {
	render() {
		return (
			<div className="flex justify-center flex-col">
				<Hero/>
				<div className="flex items-center justify-center">
					<div className="container">
						<Categories/>
						<HelpOffered/>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
