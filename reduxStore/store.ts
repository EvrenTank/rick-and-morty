import {configureStore} from '@reduxjs/toolkit';
import favoritesReducer from './slice.ts';

 const store = configureStore({
    reducer: {
        favoritesReducer: favoritesReducer
    }
})

export default store;