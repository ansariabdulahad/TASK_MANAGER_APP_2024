import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

const initialState = {
    isLoading: false,
    userData: null,
    isAuthenticated: false,
    error: null
};

export const signupUser = createAsyncThunk('/user/signup',
    async (formData, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/api/user/signup', formData);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const loginUser = createAsyncThunk('/user/login',
    async (formData, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/api/user/login', formData);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.isAuthenticated = false;
            state.userData = null;

            sessionStorage.removeItem("authToken");
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.isAuthenticated = false;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = true;
                state.userData = action.payload.success && action.payload.data;

                sessionStorage.setItem('authToken', action.payload.token);
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = false;
                state.error = action.payload;
            })
    }
});

export const { logoutUser } = authSlice.actions;
export default authSlice.reducer;