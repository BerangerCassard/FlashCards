import { createSlice } from '@reduxjs/toolkit';

const cardsSlice = createSlice({
	name: 'cardsSlice',
	initialState: {
		cards: {},
	},
	reducers: {
		addCard: (state, action) => {
			const { id, front='', back='' } = action.payload;
			state.cards[id] = {id, front, back};
		}
	}
});

export default cardsSlice.reducer
export const selectCardById = (id) => (state) => state.cards.cards[id];
export const {addCard} = cardsSlice.actions;
