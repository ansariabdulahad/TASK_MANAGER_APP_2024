import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth-slice';
import taskSlice from './slices/task-slice';
import categorySlice from './slices/category-slice';

const store = configureStore({
    reducer: {
        auth: authSlice,
        tasks: taskSlice,
        category: categorySlice
    }
});

export default store;