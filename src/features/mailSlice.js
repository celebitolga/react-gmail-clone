import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: "mail",
  initialState: {
    sendMessageIsOpen: false,
    selectedMail: null,
  },
  reducers: {
    openSendMessage: (state) => {
      state.sendMessageIsOpen = true;
    },
    closeSendMessage: (state) => {
      state.sendMessageIsOpen = false;
    },
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    },
  },
});

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectedMail = (state) => state.mail.selectedMail;

export const { openSendMessage, closeSendMessage, selectMail } = mailSlice.actions;

export const closeSendMessageAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(closeSendMessage());
  }, 1000);
};

export default mailSlice.reducer;
