import {Listing} from "../../components/Help/ListingInterface";

export enum ListingActionTypes {
	GET_ALL = 'GET_ALL',
}

export enum ListingActionTypes {
	GET_ALL = 'GET_ALL',
}

export interface ListingsGetAllAction {
	type: ListingActionTypes.GET_ALL;
	listings: Listing[];
}

export type ArticleAction = {
	type: string;
	article: IArticle;
};



export type ListingActions = ListingsGetAllAction;
