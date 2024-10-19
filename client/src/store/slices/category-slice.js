import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('authToken');

// create an axios instance for interceptors
const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

// Add a request interceptor to set the Authorization header dynamically
apiClient.interceptors.request.use((config) => {
    const token = sessionStorage.getItem('authToken');

    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

const initialState = {
    isLoading: false,
    categoryList: [],
    error: null
};

export const getAllCategory = createAsyncThunk('categories/getAllCategory',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await apiClient.get('/api/categories',
                { withCredentials: true }
            );
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const createNewCategory = createAsyncThunk('categories/createNewCategory',
    async (formData, { rejectWithValue }) => {
        try {
            const { data } = await apiClient.post('/api/categories/create', formData, { withCredentials: true });
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllCategory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllCategory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.categoryList = action.payload.data;
            })
            .addCase(getAllCategory.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export default categorySlice.reducer;