export const getStateFromStorage = () => {
	try {
		const stateStorage = localStorage.getItem('state');
		if (stateStorage === null) {
			return {};
		}
		return JSON.parse(stateStorage);
	} catch (error) {
		return {};
	}
};

export const setStateToStorage = (state) => {
	try {
		const stateData = JSON.stringify(state);
		localStorage.setItem('state', stateData);
	} catch (error) {
		console.error(error);
	}
};
