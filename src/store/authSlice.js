/* eslint-disable no-empty-pattern */
import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
    status: false,
    userdata: null
}
const authSlice = createSlice({
    name: "auth",
    initialstate,
    reducers: {
        login: (state, action) => {
            state.status = true
            state.userdata = action.payload.userdata
        },
        logout: (state) => {
            state.status = false
            state.statusbar = null
        }
    }
})

export const { } = authSlice.actions;
export default authSlice.reducer