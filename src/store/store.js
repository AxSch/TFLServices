import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import transportServicesReducer from '../reducers/transportServices/transportServicesSlice';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, transportServicesReducer)

export const store = configureStore({
    reducer: {
        transportServices: persistedReducer
    },
    middleware: getDefaultMiddleware()
})

export const persistor = persistStore(store);
