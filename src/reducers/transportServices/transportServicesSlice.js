import { createSlice } from '@reduxjs/toolkit';

const transportServices = createSlice({
    name: 'transportServices',
    initialState: {
        bikeResults: {},
        previousBikeResults: {},
        currentTFLService: {}

    },
    reducers: {
        setCurrentTFLService: (state, action) =>  {
            state.currentTFLService = action.payload
        }
    }
})

export const selectCurrentTFLService = (state) => state.transportServices.currentTFLService

export const { setCurrentTFLService } = transportServices.actions

export default transportServices.reducer
