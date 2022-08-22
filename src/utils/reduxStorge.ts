import { storage } from './index';

export const getStateFromStorage = () => {
	const STATE = 'state';
	try {
		const stateStorage = storage.get(STATE);
		if (stateStorage === undefined) {
			return {};
		}
		return stateStorage;
	} catch (error) {
		return {};
	}
};

export const setStateToStorage = (state: {
	[index: string]: any;
}) => {
	try {
		storage.set({ key: 'state', value: state });
	} catch (error) {
		console.error(error);
	}
};
