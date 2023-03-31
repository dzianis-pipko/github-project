import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const LS_FAW_KEY = 'rfk'
interface GithubState {
	favourites: string[]
}

const initialState: GithubState = {
	favourites: JSON.parse(localStorage.getItem(LS_FAW_KEY) ?? '[]')
}

export const githubSlice = createSlice({
	name: 'github',
	initialState,
	reducers: {
		addFavourite(state, action: PayloadAction<string>){
			state.favourites.push(action.payload)
			localStorage.setItem(LS_FAW_KEY, JSON.stringify(state.favourites))
		},
		removeFavourite(state, action: PayloadAction<string>){
			state.favourites = state.favourites.filter(f => f !== action.payload)
			localStorage.setItem(LS_FAW_KEY, JSON.stringify(state.favourites))
		}
	}
})

export const githubActions = githubSlice.actions;
export const githubReducer = githubSlice.reducer;