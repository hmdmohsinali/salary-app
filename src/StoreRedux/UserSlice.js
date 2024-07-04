// reducers/userReducer.js
import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    activeUsers: [],
  },
  reducers: {

    Adduser: (state, action) => {
      state.users = action.payload;
    },
    AddNewuser: (state, action) => {
      state.users = [action.payload, ...state.users];
    },
    updateUserStatus: (state, action) => {
      let data = action.payload;
      let index = state.users.findIndex((obj) =>
        obj.uid === data.uid
      )
      if (index !== -1) {
        state.users[index] = data;

      }
    },
    deleteUser: (state, action) => {
      let id = action.payload;
      const updatedUsers = state.users.filter(function (user) {
        return user.uid !== id;
      });
      state.users = updatedUsers;
    },
    addActiveUsers: (state, action) => {
      state.activeUsers = action.payload;
      state.loading = false;

    }

  },
});

export const selectUsers = (state) => state.user.users;
export const selectActiveUsers = (state) => state.user.activeUsers;

export const { Adduser, updateUserStatus, deleteUser, addActiveUsers , AddNewuser } = userSlice.actions; // actions
export default userSlice.reducer;
