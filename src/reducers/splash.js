import * as appType from "../constants/AppType";
const initialState = {
	isSplashed: false,
}

const splash = (state = initialState, action) => {
	switch (action.type) {
		case appType.IS_SPLASHED:
			return {
				...state,
				isSplashed: true,
			};
		default:
			return state;
	}

};
export default splash;