import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsvisible: false, notification: null },
  reducers: {
    toggle(state) {
      state.cartIsvisible = !state.cartIsvisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        titie: action.payload.titie,
        message: action.payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
