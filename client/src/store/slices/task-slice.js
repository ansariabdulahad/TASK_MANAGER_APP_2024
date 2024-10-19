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
    tasks: [],
    error: null
};

export const getAllTasks = createAsyncThunk('tasks/getAllTasks',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await apiClient.get('/api/tasks',
                { withCredentials: true }
            );
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

// get task by filter
export const getTaskByFilter = createAsyncThunk('tasks/getTaskByFilter',
    async (filterData, { rejectWithValue }) => {
        try {
            const { data } = await apiClient.get(`/api/tasks?${filterData}`,
                { withCredentials: true }
            );
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const createNewTask = createAsyncThunk('tasks/createNewTask',
    async (formData, { rejectWithValue }) => {
        try {
            const { data } = await apiClient.post('/api/tasks/create', formData, { withCredentials: true });
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const deleteTask = createAsyncThunk('tasks/deleteTask',
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await apiClient.delete(`/api/tasks/${id}`, { withCredentials: true });
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const editTask = createAsyncThunk('tasks/deleteTask',
    async ({ id, formData }, { rejectWithValue }) => {
        try {
            const { data } = await apiClient.put(`/api/tasks/${id}`, formData, { withCredentials: true });
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllTasks.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllTasks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.tasks = action.payload.data;
            })
            .addCase(getAllTasks.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(getTaskByFilter.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getTaskByFilter.fulfilled, (state, action) => {
                state.isLoading = false;
                state.tasks = action.payload.data;
            })
            .addCase(getTaskByFilter.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export default taskSlice.reducer;