import { createSlice } from '@reduxjs/toolkit';

const transportServices = createSlice({
    name: 'transportServices',
    initialState: {
        isSearch: false,
        previousBikeResults: {},
        currentTFLService: {}

    },
    reducers: {
        setCurrentTFLService: (state, action) =>  {
            state.currentTFLService = action.payload
        },
        setPreviousResults: (state, action) => {
            state.previousBikeResults = action.payload
        },
        setIsSearch: (state, action) => {
            state.isSearch = action.payload
        }
    }
})

export const selectCurrentTFLService = (state) => state.transportServices.currentTFLService

export const selectPreviousBikeResults = (state) => state.transportServices.previousBikeResults

export const selectIsSearch = (state) => state.transportServices.isSearch

export const { setCurrentTFLService, setPreviousResults, setIsSearch } = transportServices.actions

export default transportServices.reducer
