import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  name: string;
  email: string;
}

interface UserState {
  isAuthenticated: boolean;
  user: User | null;
}

const user:User ={
  name:"john doe",
  email:"email@gmail.com"
} 

const initialState: UserState = {
  isAuthenticated: false,
  user: null,
};



const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
