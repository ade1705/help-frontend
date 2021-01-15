import { Reducer } from 'redux';
import {ListingActions, ListingActionTypes} from "../actions";

interface ICategoryState {
	readonly selectedCategory: string[];
}

const initialCategoryState: ICategoryState = {
	selectedCategory: [],
};

const categoriesReducer: Reducer<ICategoryState, ListingActions> = (
	state = initialCategoryState,
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

export default categoriesReducer
