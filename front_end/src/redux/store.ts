import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // adjust path as needed

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// ✅ Add these two exports:
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
