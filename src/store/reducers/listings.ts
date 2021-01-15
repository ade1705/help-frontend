import { Reducer } from 'redux';
import {Listing} from "../../components/Help/ListingInterface";
import {ListingActions, ListingActionTypes} from "../actions";

interface ListingState {
	readonly listings: Listing[];
}

const initialListingState: ListingState = {
	listings: [],
};

const listingsReducer: Reducer<ListingState, ListingActions> = (
	state = initialListingState,
	action
) => {
	switch (action.type) {
		case ListingActionTypes.GET_ALL: {
			return {
				...state,
				listings: action.listings,
			};
		}
		default:
			return state;
	}
};

export default listingsReducer
