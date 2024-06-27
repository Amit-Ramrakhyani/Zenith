import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authSlice'; // Import your auth slice

const store = configureStore({
    reducer: {
        auth: authReducer,
        // Add other reducers here if needed
    },
});

export default store;