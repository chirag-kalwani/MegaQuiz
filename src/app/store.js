import {configureStore} from '@reduxjs/toolkit';
import preferencesReducer from '../features/States/preferencesSlice'
import questionsReducer from '../features/States/questionSlice'

export const store = configureStore({
    reducer: {
        preferences: preferencesReducer,
        questions: questionsReducer,
    },
});
