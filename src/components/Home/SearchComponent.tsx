import React, {Component} from 'react';

class SearchComponent extends Component {
	render() {
		return <div>
			<div className="flex items-center bg-white p-4 px-6 shadow-xl">
				<div className="w-full">
					<span className="text-gray-600 font-bold">SEARCH</span>
					<input
						className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-2 leading-tight focus:outline-none"
						type="text" placeholder="Job title or keyword" aria-label="Full name"/>
				</div>
				<div className="w-full border-l border-gray-300 pl-6">
					<span className="text-gray-600 font-bold">LOCATION</span>
					<input
						className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-2 Leading-tight focus:outline-none"
						type="text" placeholder="Choose Location" aria-label="Full name"/>
				</div>
				<button
					className="flex-shrink-0 bg-red-600 hover:bg-red-800 py-3 rounded-full text-sm text-white py-2 px-12"
					type="button">
					Search
				</button>
			</div>
		</div>;
	}
}

export default SearchComponent;
