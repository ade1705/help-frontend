import {Category, CategoryActionTypes, SELECT_CATEGORY} from "./types";

export function selectCategory(category: Category): CategoryActionTypes {
	return {
		type: SELECT_CATEGORY,
		payload: category
	}
}
