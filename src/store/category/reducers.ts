import {Category, CategoryActionTypes, CategoryState, SELECT_CATEGORY} from "./types";


const initialCategoryState: CategoryState = {
	categories: [],
	selectedCategories: [],
};

const categoryReducer = (
	state = initialCategoryState,
	action: CategoryActionTypes
): CategoryState => {
	switch (action.type) {
		case SELECT_CATEGORY:
			let filteredCategory = state.selectedCategories.filter((category:Category) => {
					return action.payload !== category
			});
			let selectedCategories = (filteredCategory.length < state.selectedCategories.length)
				? filteredCategory
				: [...state.selectedCategories, action.payload];
			return {
				...state,
				selectedCategories: selectedCategories,
			}
		default:
			return state
	}
}

export default categoryReducer;
