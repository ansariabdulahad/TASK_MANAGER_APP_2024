import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth-slice';
import taskSlice from './slices/task-slice';

const store = configureStore({
    reducer: {
        auth: authSlice,
        tasks: taskSlice
    }
});

export default store;