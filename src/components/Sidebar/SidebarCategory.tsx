import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";
import {selectCategory} from "../../store/category/actions";
import {Category} from "../../store/category/types";

interface Props {
	category: any,
	selectCategory: any
}

interface State {
	showAccordion: boolean;
}

const categoryOptions = (options:string[], callback: any) => {
	return options.map((option:string, index:number) =>
		<div className="font-semibold block py-1" key={index}>
			<input className="mr-3 leading-tight" type="checkbox" onClick={() => callback(option)}/>
			<span className="">{option}</span>
		</div>
	);
};

class SidebarCategory extends Component<Props, State> {
	state: State = {
		showAccordion: false
	};

	showAccordion = () => this.setState({ showAccordion: !this.state.showAccordion });

	callBack = () => {
		console.log('callback')
	}
	render() {
		return <div className="p-6 bg-gray-200 rounded mb-4">
			<div className="flex justify-between mb-5" role="button" onClick={this.showAccordion}>
				<p className="font-semibold">{this.props.category.name} </p>
				{this.state.showAccordion && <FontAwesomeIcon icon={faChevronUp} className="text-gray-600"/> }
				{!this.state.showAccordion && <FontAwesomeIcon icon={faChevronDown} className="text-gray-600"/> }
			</div>
			{this.state.showAccordion &&
	      <div>
		      {categoryOptions(this.props.category.options, this.props.selectCategory)}
	      </div>
			}
		</div>;
	}
}

const mapDispatchToProps = (
	dispatch: any
) => {
	return {
		selectCategory: (category: Category) =>
			dispatch(selectCategory(category)),
	};
};

export default connect(
	null,
	mapDispatchToProps
)(SidebarCategory);
