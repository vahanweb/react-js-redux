import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: "",
  status: 'form3'
};
export const borderRadiusDataSlice = createSlice({
  name: 'borderRadiusData',
  initialState,
  reducers: {
    borderRadiusData: (state, action) => {
        state.value = action.payload;
    }
  }
});

export const { borderRadiusData } = borderRadiusDataSlice.actions;

export const borderRadiusDataValue = (state) => state.borderRadiusData;

export default borderRadiusDataSlice.reducer;
