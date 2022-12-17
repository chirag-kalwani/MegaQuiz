import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    prefer: {
        categories: "any",
        difficulty: "any",
        url: null,
        done: false,
        fullDone: false,
    }
}

export const preferencesSlice = createSlice({
    name: 'preferences',
    initialState,
    reducers: {
        setPreferences: (state, action) => {
            const [categories, difficulty] = action.payload
            let cat = "", dat = "";
            if (categories !== 'any')
                cat = `&category=${categories}`;
            if (difficulty !== "any")
                dat = `&difficulty=${difficulty}`;
            state.prefer.url = `https://opentdb.com/api.php?amount=10${cat}${dat}`;
            state.prefer.done = true;
        },
        setFullDone: (state) => {
            state.prefer.fullDone = true;
        }
    },
})

export const {setPreferences, setFullDone} = preferencesSlice.actions

export default preferencesSlice.reducer