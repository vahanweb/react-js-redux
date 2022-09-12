import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: "",
  status: 'form2'
};
export const descriptionColorDataSlice = createSlice({
  name: 'description',
  initialState,
  reducers: {
    descriptionColorData: (state, action) => {
        state.value = action.payload;
    }
  }
});

export const { descriptionColorData } = descriptionColorDataSlice.actions;

export const descriptionColorDataValue = (state) => state.descriptionColorData;

export default descriptionColorDataSlice.reducer;
