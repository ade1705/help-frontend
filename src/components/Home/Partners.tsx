import React, {Component} from 'react';
import logo from '../../logo.png';

class Partners extends Component {
	render() {
		return <div className="flex justify-between items-center py-8">
			<p>Partners we currently work with</p>
			<div className="flex justify-between">
				<img src={logo} className="h-10 ml-6"/>
				<img src={logo} className="h-10 ml-6"/>
				<img src={logo} className="h-10 ml-6"/>
				<img src={logo} className="h-10 ml-6"/>
				<img src={logo} className="h-10 ml-6"/>
			</div>
		</div>;
	}
}

export default Partners;
