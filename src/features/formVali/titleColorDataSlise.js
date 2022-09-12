import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: "",
  status: 'form4'
};
export const titleColorDataSlice = createSlice({
  name: 'titleColor',
  initialState,
  reducers: {
    titleColorData: (state, action) => {
        state.value = action.payload;
    }
  }
});

export const { titleColorData } = titleColorDataSlice.actions;

export const titleColorValue = (state) => state.titleColorData;

export default titleColorDataSlice.reducer;
