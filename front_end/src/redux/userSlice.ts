import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from '@/utils/axiosInstance.tsx'


// Define the shape of your user data (update as needed)
interface UserData {
  id: number;
  name: string;
  email: string;
  // Add more fields as returned by your API
}

// Define the slice state
interface UserState {
  data: UserData | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

// Initial state
const initialState: UserState = {
  data: null,
  status: 'idle',
  error: null,
};

// Async thunk to fetch user
export const fetchUser = createAsyncThunk<UserData>(
  'user/fetchUser',
  async () => {
    const res = await axios.get<UserData>(`${import.meta.env.VITE_API_URL}/users/get-user/`);
    return res.data;
  }
);

// Create slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout(state) {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action: PayloadAction<UserData>) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Something went wrong';
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
