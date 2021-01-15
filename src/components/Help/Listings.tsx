import React, {Component, ReactNode} from 'react';
import ListingPartial from "./ListingPartial";
import ListingPartialVertical from './ListingPartialVertical';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronDown, faListOl, faThLarge} from "@fortawesome/free-solid-svg-icons";
import Faker from 'faker';
import {Listing} from "./ListingInterface";

const listings = [
	{
		logo: "https://source.unsplash.com/collection/3099172/1600x900",
		status: Faker.random.boolean(),
		name: Faker.company.companyName(),
		price: Faker.commerce.price(80, 200),
		rating: (Math.floor(Math.random() * (5 - 3 + 1)) + 3).toFixed(1),
		reviews: Math.floor(Math.random() * 50),
		category: ['Handy Man', 'House Cleaning', 'Massage Therapy', 'Personal Training', 'Dog Walking'][Math.floor(Math.random() * 5)]
	},
	{
		logo: "https://source.unsplash.com/collection/8960335/1600x900",
		status: Faker.random.boolean(),
		name: Faker.company.companyName(),
		price: Faker.commerce.price(80, 200),
		rating: (Math.floor(Math.random() * (5 - 3 + 1)) + 3).toFixed(1),
		reviews: Math.floor(Math.random() * 50),
		category: ['Handy Man', 'House Cleaning', 'Massage Therapy', 'Personal Training', 'Dog Walking'][Math.floor(Math.random() * 5)]
	},
	{
		logo: "https://source.unsplash.com/collection/8837810/1600x900",
		status: Faker.random.boolean(),
		name: Faker.company.companyName(),
		price: Faker.commerce.price(80, 200),
		rating: (Math.floor(Math.random() * (5 - 3 + 1)) + 3).toFixed(1),
		reviews: Math.floor(Math.random() * 50),
		category: ['Handy Man', 'House Cleaning', 'Massage Therapy', 'Personal Training', 'Dog Walking'][Math.floor(Math.random() * 5)]
	},
	{
		logo: "https://source.unsplash.com/collection/6788206/1600x900",
		status: Faker.random.boolean(),
		name: Faker.company.companyName(),
		price: Faker.commerce.price(80, 200),
		rating: (Math.floor(Math.random() * (5 - 3 + 1)) + 3).toFixed(1),
		reviews: Math.floor(Math.random() * 50),
		category: ['Handy Man', 'House Cleaning', 'Massage Therapy', 'Personal Training', 'Dog Walking'][Math.floor(Math.random() * 5)]
	},
	{
		logo: "https://source.unsplash.com/collection/1486693/1600x900",
		status: Faker.random.boolean(),
		name: Faker.company.companyName(),
		price: Faker.commerce.price(80, 200),
		rating: (Math.floor(Math.random() * (5 - 3 + 1)) + 3).toFixed(1),
		reviews: Math.floor(Math.random() * 50),
		category: ['Handy Man', 'House Cleaning', 'Massage Therapy', 'Personal Training', 'Dog Walking'][Math.floor(Math.random() * 5)]
	},
	{
		logo: "https://source.unsplash.com/collection/779416/1600x900",
		status: Faker.random.boolean(),
		name: Faker.company.companyName(),
		price: Faker.commerce.price(80, 200),
		rating: (Math.floor(Math.random() * (5 - 3 + 1)) + 3).toFixed(1),
		reviews: Math.floor(Math.random() * 50),
		category: ['Handy Man', 'House Cleaning', 'Massage Therapy', 'Personal Training', 'Dog Walking'][Math.floor(Math.random() * 5)]
	},
];

interface Props {}
enum ListingTypes {list = "list", column = "column"}
interface IState {
	viewType: ListingTypes;
	listings: Listing[]
}

interface ISortType {
	key: string;
	value: string;
	isInteger: boolean
	sortBy: string;
	direction: string;
}

const sortTypes: ISortType[] = [
	{key: 'a-z', value: 'Name - Ascending', isInteger: false, sortBy: 'name', direction: 'asc'},
	{key: 'z-a', value: 'Name - Descending', isInteger: false, sortBy: 'name', direction: 'desc'},
	{key: 'rating', value: 'Best Rating', isInteger: true, sortBy: 'rating', direction: 'desc'},
	{key: '0-9', value: 'Price - Ascending', isInteger: true, sortBy: 'price', direction: 'asc'},
	{key: '9-0', value: 'Price - Descending', isInteger: true, sortBy: 'price', direction: 'desc'},
]

const compareValues = (identifier:string) => {
	const getSortData = (key:string):ISortType | undefined => {
		return sortTypes.find(function (sortType: ISortType) {
			return sortType.key === key
		});
	}

	return function innerSort(a:any, b:any) {
		let sortData:ISortType|undefined = getSortData(identifier);
		if (sortData === undefined || !a.hasOwnProperty(sortData.sortBy) || !b.hasOwnProperty(sortData.sortBy)) {
			return 0;
		}
		let key = sortData.sortBy;

		const varA = sortData.isInteger ? parseInt(a[key]) : a[key];
		const varB = sortData.isInteger ? parseInt(b[key]) : b[key];

		let comparison = 0;
		if (varA > varB) {
			comparison = 1;
		} else if (varA < varB) {
			comparison = -1;
		}
		return (
			(sortData.direction === 'desc') ? (comparison * -1) : comparison
		);
	};
}

const listItems = (listingType: ListingTypes, listings: Listing[]): ReactNode => {
	return listings.map((listing) => {
		return listingType === ListingTypes.column ? <ListingPartialVertical listing={listing}/> :  <ListingPartial listing={listing}/>
	})
};

class Listings extends Component<Props, IState> {
	state: IState = {
		viewType: ListingTypes.list,
		listings: listings
	};

	changeViewType = (newViewType: ListingTypes):void => this.setState({ viewType: newViewType });
	isCurrentViewType = (viewType: ListingTypes):boolean => this.state.viewType === viewType;
	handleSort = (event: React.FormEvent<HTMLSelectElement>): void => {
		this.setState({ listings: listings.sort(compareValues(event.currentTarget.value)) });
	}
	render() {
		return (
			<div>
				<div className="flex">
					<div className="w-7/12">
						<a onClick={_ => this.changeViewType(ListingTypes.list)} className={`cursor-pointer mr-4 py-1 px-2 ${this.isCurrentViewType(ListingTypes.list) ? 'text-red-900 bg-red-200' : ''}`}><FontAwesomeIcon icon={faListOl} /></a>
						<a onClick={_ => this.changeViewType(ListingTypes.column)} className={`cursor-pointer mr-4 py-1 px-2 ${this.isCurrentViewType(ListingTypes.column) ? 'text-red-900 bg-red-200' : ''}`}><FontAwesomeIcon icon={faThLarge} /></a>
					</div>
					<div className="w-3/12">
					</div>
					<div className="w-2/12 text-right">
						<select className="cursor-pointer" onChange={this.handleSort} >
							{sortTypes.map((sortType) =>
								 <option value={sortType.key}>{sortType.value}</option>
							)}
						</select>
					</div>
				</div>
				<div className="flex flex-wrap">
				{listItems(this.state.viewType, this.state.listings) }
				</div>
			</div>
		);
	}
}

export default Listings;
