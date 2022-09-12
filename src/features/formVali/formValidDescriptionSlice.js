import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: "",
  status: 'form2'
};
export const formValidDescriptionSlice = createSlice({
  name: 'description',
  initialState,
  reducers: {
    descriptionData: (state, action) => {
        state.value = action.payload;
    }
  }
});

export const { descriptionData } = formValidDescriptionSlice.actions;

export const descriptionValue = (state) => state.formValidDescription;

export default formValidDescriptionSlice.reducer;
