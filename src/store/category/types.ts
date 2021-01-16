export interface Category {
	id: number
	categoryName: string
}

export interface CategoryState {
	categories: Category[],
	selectedCategories: Category[],
}

export const SELECT_CATEGORY = 'SELECT_CATEGORY';

interface SelectCategoryAction {
	type: typeof SELECT_CATEGORY
	payload: Category
}

export type CategoryActionTypes = SelectCategoryAction
