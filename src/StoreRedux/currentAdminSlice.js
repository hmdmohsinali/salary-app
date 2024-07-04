import { createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice(
    {
        name: 'admin',
        initialState: {
            admin: null,
        },
        reducers: {
            addAmin: (state, action) => {
                state.admin = action.payload;
            },

        }
    }
)

export const selectAdmin = (state) => state.admin.admin;

export const { addAmin } = authSlice.actions
export default authSlice.reducer;