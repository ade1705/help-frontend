import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";

interface Props {
	category: any
}

interface State {
	showAccordion: boolean;
}

const categoryOptions = (options:string[]) => {
	return options.map((option:string) =>
		<div className="font-semibold block py-1">
			<input className="mr-3 leading-tight" type="checkbox"/>
			<span className="">{option}</span>
		</div>
	);
};

class SidebarCategory extends Component<Props, State> {
	state: State = {
		showAccordion: false
	};

	showAccordion = () => this.setState({ showAccordion: !this.state.showAccordion });

	render() {
		return <div className="p-6 bg-gray-200 rounded mb-4">
			<div className="flex justify-between mb-5" role="button" onClick={this.showAccordion}>
				<p className="font-semibold">{this.props.category.name} </p>
				{this.state.showAccordion && <FontAwesomeIcon icon={faChevronUp} className="text-gray-600"/> }
				{!this.state.showAccordion && <FontAwesomeIcon icon={faChevronDown} className="text-gray-600"/> }
			</div>
			{this.state.showAccordion &&
	      <div>
		      {categoryOptions(this.props.category.options)}
	      </div>
			}
		</div>;
	}
}

export default SidebarCategory;
