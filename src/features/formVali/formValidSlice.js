import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: "",
  status: 'form1'
};

export const formValidSlice = createSlice({
  name: 'title',
  initialState,

  reducers: {
    titleData: (state, action) => {
      state.value = action.payload;
      // console.log(action.payload);
    },
    descriptionData: (state, action) => {
        state.value = action.payload;
      // console.log(action.payload);

    },
    borderRadiusData: (state, action) => {
        state.value = action.payload.value;
    },
    titleColorData: (state, action) => {
        state.value = action.payload.value;
    },
    descriptionColorData: (state, action) => {
        state.value = action.payload.value;
    }
  }
});

export const { titleData, descriptionData, borderRadiusData, titleColorData, descriptionColorData } = formValidSlice.actions;

export const titleValue = (state) => state.formValid;
export const descriptionValue = (state) => state.formValid;
// export const border_radiusValue = (state) => state.title.value;
// export const title_colorValue = (state) => state.title.value;
// export const description_colorValue = (state) => state.title.value;

export default formValidSlice.reducer;
// let w = formValidSlice.reducer;
// console.log(w.name);
// debugger;