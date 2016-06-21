import * as appType from '../constants/AppType';
export const changeSplashed = (): Object => {
	return {
		type: appType.IS_SPLASHED
	}
}