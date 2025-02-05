import { createSlice } from '@reduxjs/toolkit';
import topicsSlice from "../topics/topicsSlice";

const quizzesSlice = createSlice({
	name: 'quizzesSlice',
	initialState: {
		quizzes: {},
	},
	reducers: {
		addQuiz: (state, action) => {
			const { id, name, topicId, cardIds:[]} = action.payload;
			state.quizzes[id] = {id, name, topicId, topicIds: []};
		}
	}
});

export default quizzesSlice.reducer;
export const selectQuizzes = (state) => state.quizzes.quizzes;
export const {addQuiz} = quizzesSlice.actions;
