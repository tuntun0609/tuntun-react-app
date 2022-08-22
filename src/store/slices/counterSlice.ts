import { createSlice } from '@reduxjs/toolkit';
import { getStateFromStorage } from '@/utils';

const COUNTER_VALUE_DEFAULT = 0;

export const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		value: getStateFromStorage()?.counter.value || COUNTER_VALUE_DEFAULT,
	},
	reducers: {
		increment: (state) => {
			state.value += 1;
		},
		decrement: (state) => {
			state.value -= 1;
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload;
		},
	},
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
