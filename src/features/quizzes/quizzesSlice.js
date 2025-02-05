import { createSlice } from '@reduxjs/toolkit';

const quizzesSlice = createSlice({
	name: 'quizzesSlice',
	initialState: {
		quizzes: {},
	},
	reducers: {
		addQuiz: (state, action) => {
			const { id, name, topicId, cardIds: []} = action.payload;
			state.quizzes[id] = {id, name, topicId, cardIds: []};
		}
	}
});

export default quizzesSlice.reducer;
export const selectQuizzes = (state) => state.quizzes.quizzes;
export const {addQuiz} = quizzesSlice.actions;
