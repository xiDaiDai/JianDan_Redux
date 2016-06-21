import React from 'react';
import * as Drawer from '../constants/drawer';
import * as appType from '../constants/AppType';
import FreshNews from '../containers/freshNews';
const initialState = {
	title: Drawer.NEWS,
	component: FreshNews,
}

const drawer = (state = initialState, action) => {
	switch (action.type) {
		case appType.NEWS:
			return {
				...state,
				title: Drawer.NEWS,
				component: FreshNews,
			};
		case appType.TREE_NEW_BEE:
			return {
				...state,
				title: Drawer.TREE_NEW_BEE,
				component: FreshNews,
			};

		default:
			return state;
	}

};
export default drawer;