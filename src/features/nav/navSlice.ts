import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { Point } from 'react-native-google-places-autocomplete'

interface NavState {
	origin: Origin,
	destination: Origin | null,
	travelTimeInformation: any,
}

interface Origin {
	description: string,
	point: Point | null
}

const initialState: NavState = {
	origin: {
		description: "",
		point: null
	},
	destination: null,
	travelTimeInformation: null,
}

export const navSlice = createSlice({
	name: 'nav',
	initialState,
	reducers: {
		setOrigin: (state, action: PayloadAction<Origin>) => {
			state.origin = action.payload
		},
		setDestination: (state, action: PayloadAction<Origin | null>) => {
			state.destination = action.payload
		},
		setTravelTimeInformation: (state, action: PayloadAction<any>) => {
			state.travelTimeInformation = action.payload
		},
	},
})

export const { setOrigin, setDestination, setTravelTimeInformation } = navSlice.actions

export const selectOrigin = (state: RootState) => state.nav.origin
export const selectDestination = (state: RootState) => state.nav.destination
export const selectTravelTimeInformation = (state: RootState) => state.nav.travelTimeInformation

export default navSlice.reducer