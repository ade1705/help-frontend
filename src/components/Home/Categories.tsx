import React, {Component} from 'react';
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const categories = [
	{
		type: 'Business Development',
		color: 'red'
	},
	{
		type: 'Business Development',
		color: 'orange'
	},
	{
		type: 'Business Development',
		color: 'yellow'
	},
	{
		type: 'Business Development',
		color: 'green'
	},
	{
		type: 'Business Development',
		color: 'teal'
	},
	{
		type: 'Business Development',
		color: 'blue'
	},
	{
		type: 'Business Development',
		color: 'indigo'
	},
	{
		type: 'Business Development',
		color: 'purple'
	},
	{
		type: 'Business Development',
		color: 'pink'
	},
];
const listItems = categories.map((category) =>
	<div className="p-2 my-4">
		<span className="py-3 rounded-lg pl-6 pr-8 bg-white shadow-2xl text-2xl font-bold lowercase">
			<div className={`rounded-full h-6 w-6 flex items-center justify-center inline-flex bg-${category.color}-700 mr-2`}>&nbsp;</div>
			Design
		</span>
	</div>
);

class Categories extends Component {
	render() {
		return <div className="py-12">
			<div className="py-6">
				<h1 className="text-4xl font-extrabold leading-none">Explore<br/>by category</h1>
			</div>
			<div className="flex flex-wrap flex-row-reverse ">
				{listItems}
			</div>
		</div>;
	}
}

export default Categories;
